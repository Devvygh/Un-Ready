/* eslint-disable */

// TODO add back "use strict" once Safari 9.1 is blacklisted

/**
 * A small library without any external dependencies that can be used to test for,
 * and display an interstitial requiring user interaction, enabling media playback.
 */
window.com = window.com || {};
window.com.cainc = window.com.cainc || {};
window.com.cainc.ctp = (function() {
  var VERSION = "1.1.3";

  // Allows audio check and click-to-play interstitial to be disabled by
  // passing a query param of disablectp=true
  var checkDisabled = location.search.toLowerCase().indexOf('disablectp=') >= 0;
  var enabled = false;
  var interstitial;
  var alreadyClicked = false; // Used to prevent duplication of start action firing

  /**
   * Creates a new HTML5 audio node with the appropriately supported source. The
   * audio used has less than a 1sec in duration and has no sound, it is an empty track.
   * @return {HTMLMediaElement} Audio that is used to test if gesture is required
   */
  function createTestAudio() {
    var audio = new Audio();
    var canPlayM4A = (audio.canPlayType('audio/m4a;') || audio.canPlayType('audio/aac;')).replace(/^no$/, "");
    var canPlayMP3 = audio.canPlayType('audio/mp3;').replace(/^no$/, "");
    audio.autoplay = false;
    audio.src = src = "https://cdn.i-ready.com/instruction/content/shared/global/audio/500ms_no_sound." + (canPlayM4A ? "m4a" : (canPlayMP3 ? "mp3" : "ogg"));
    return audio;
  };

  /**
   * Styles and adds content to be displayed in the interstitial
   */
  function createInterstitial() {
    var link = document.createElement("link");
    link.href = "/libs/ctp/" + VERSION + "/ctp.css";
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "all";
    document.head.appendChild(link);

    interstitial = document.createElement("div");
    interstitial.id = "ctp-interstitial";
    document.body.appendChild(interstitial);
  }

  /**
   * Determines if Howler has an existing Web Audio API context that is playable or not.
   * @returns {boolean}
   */
  function isAudioContextPlayable() {
    if (Howler && Howler.ctx && Howler.ctx.state === "suspended") {
      return false;
    } else {
      return true;
    }
  }

  /**
   * Forcibly ensures Howler has a primed playable Web Audio API context
   */
  function ensureRunningAudioContext() {
    if (Howler) {
      // This will force Howler to create a new context if one hasn't already
      // been created (this happens when you start, or resume, to a video
      // interstitial as there's no audio loaded for interstitial videos).
      // This is a no-op with an existing context.
      Howler.volume(1.0);
      // Unsuspend the existing (or newly created) context
      Howler.ctx.resume()
        .catch(function (err) {
          console.error('Error trying to resume webkitAudioContext: ' + err.toString());
        });
    }
  }

  /**
   * Makes the interstitial visible and enables click to hide.
   * @param {Function} callback Function to be called after interaction.
   */
  function showInterstitial(callback) {
    interstitial.className = "visible";
    interstitial.addEventListener("click", function userInteractionHandler() {
      ensureRunningAudioContext();
      hideInterstitial(callback);
    });
  }

  /**
   * Hides the interstitial and invokes the callback to start the lesson.
   * @param {Function} callback Function to be called after interaction to start the lesson.
   */
  function hideInterstitial(callback) {
    if (interstitial.className == "visible") {
      var transitionComplete = false;
      interstitial.addEventListener("transitionend", function removeInterstitial() {
        if (!transitionComplete) {
          transitionComplete = true;
          callback();
          document.body.removeChild(interstitial);
        }
      });
      interstitial.className = "hide visible";

      // Guard timeout in case the transitionend event is not fired
      // if the event was fired properly transitionComplete should already be true
      setTimeout(function invokeCallback() {
        if (!transitionComplete) {
          transitionComplete = true;
          callback();
        }
      }, 1500);
    } else {
      callback();
      document.body.removeChild(interstitial);
    }
  }

  /**
   * NOTE: To be replaced with real design.
   * Adds a button to the interstitial prompt the user for interaction.
   */
  function requestUserInteraction() {
    var button = document.createElement("button");
    button.innerHTML = "GO!";
    interstitial.appendChild(button);
  }

  /**
   * Checks the UserAgent for Safari 13-14
   * Used in a guard around a Safari-specific workaround for webkitAudioContext
   * suspension and autoplay.
   */
  function isSafari13or14() {
    const matches = /\/([.\d]+) Safari/.exec(window.navigator.userAgent);
    if (!matches || matches.length < 2){
      return false;
    }
    const safariVersion = parseFloat(matches[1], 10);
    return safariVersion >= 13 && safariVersion < 15;
  }

  /**
   * This is the function that is exposed to applications that need to check
   *   if user interaction is required to play media.
   * @public
   * @param {Function} callback Function to be called after interaction to start the lesson.
   * @param {object} [options]
   * @param {boolean} [options.showImmediately=true] Whether or not the interstitial
   *   should be shown immediately. This allows for a fade into the lesson from the
   *   student dashboard making things appear more seamless. May not be necessary
   *   and will be informed by final design.
   */
  function enableMedia(callback, options) {
    options = options || { showImmediately: true };
    // Imitate _.once here to make sure we don't transition from state started to started
    // on multiple clicks after clicking the green arrow button, which will invoke callback.
    var originalCallback = callback;
    callback = function () {
      if (!alreadyClicked) {
        alreadyClicked = true;
        originalCallback();
      }
    };
    try {
      if (checkDisabled || enabled) {
        callback();
      } else {
        createInterstitial();

        if (options.showImmediately) {
          showInterstitial(callback);
        }

        // Workaround for Safari 13-14 automatically suspending newly created
        // webkitAudioContext objects. fail-fast: always show the interstitial,
        // and ensure that the webkitAudioContext is created
        if (isSafari13or14()) {
          showInterstitial(callback);
          requestUserInteraction();
          return;
        }

        var testAudio = createTestAudio();

        var audioPromise = testAudio.play();
        if (audioPromise && typeof audioPromise === "object" && audioPromise.then) {
          audioPromise.
          then(function autoplayTestPass() {
            if (isAudioContextPlayable()) {
              hideInterstitial(callback);
            } else {
              showInterstitial(callback);
              console.warn("Unable to autoplay test audio, requesting interaction. " + err.toString());
              requestUserInteraction();
            }
          }).
          catch(function autoplayTestFail(err) {
            if (!options.showImmediately) {
              showInterstitial(callback);
            }
            if (err.name === 'NotAllowedError') {
              console.warn("Unable to autoplay test audio, requesting interaction. " + err.toString());
              requestUserInteraction();
            } else {
              console.warn("Encountered error with autoplay test audio. Hiding interstitial." + err.toString());
              hideInterstitial(callback);
            }
          });
        } else {
          console.warn("Autoplay test audio did not return a promise");
          hideInterstitial(callback);
        }

        // Used as a guard to prevent ever unintentionally running through
        // the check and showing the interstitial more than once.
        enabled = true;
      }
    } catch (err) {
      console.error("An error occured attempting to test for media autoplay. " + err.toString());
      hideInterstitial(callback);
    }
  }

  /**
   * A method that can be called to see if the check has been disabled
   * @public
   * @return {boolean} True if the check has been disabled via query param;
   *                   false otherwise.
   */
  function isCheckDisabled() {
    return checkDisabled;
  }

  return {
    enableMedia: enableMedia,
    isCheckDisabled: isCheckDisabled,
    version: VERSION,
  };
})();
