(self.webpackChunkfoundational_reading = self.webpackChunkfoundational_reading || []).push([[7561], {48582: (e, t, n) => {
    "use strict";
    var a = n(64836);
    Object.defineProperty(t, "__esModule", {value: true}), t.default = void 0;
    var r = a(n(27424)), s = a(n(38416)), i = a(n(56690)), o = a(n(89728)), u = a(n(66115)), l = a(n(53788)), c = a(n(41588)), d = a(n(61655)), p = a(n(94993)), f = a(n(73808)), h = a(n(35958)), y = n(97025), v = n(8393), g = n(10316), m = n(46878), S = n(72353), b = n(51563);
    function k(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t && (a = a.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, a);
      }
      return n;
    }
    function _(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? k(Object(n), true).forEach(function (t) {
          (0, s.default)(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
      return e;
    }
    var A = y.MODULES.DisplayAnimationModule, P = y.ORCHESTRATORS.sequenceRunner, E = y.SHARED_DEPENDENCIES.React, C = y.SHARED_DEPENDENCIES.ReactDOM, w = y.SHARED_DEPENDENCIES._, x = y.UTILS.animationUtil, D = y.UTILS.assetLoader, O = y.UTILS.assetUtil, U = y.STORES.navigationStore, R = y.DATA_CAPTURE.dataCaptureUtil, I = y.DATA_CAPTURE.DC_EVENT_PAYLOADS, N = function (e) {
      (0, d.default)(s, e);
      var t, n, a = (t = s, n = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if ("function" == typeof Proxy) return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), true;
        } catch (e) {
          return false;
        }
      }(), function () {
        var e, a = (0, f.default)(t);
        if (n) {
          var r = (0, f.default)(this).constructor;
          e = Reflect.construct(a, arguments, r);
        } else e = a.apply(this, arguments);
        return (0, p.default)(this, e);
      });
      function s(e, t) {
        var n;
        (0, i.default)(this, s), x.autoTick = true, window.navigator.webdriver && TweenLite.ticker.fps(180);
        var r = w.toInteger((0, g.getParameterByName)("grade") || e.userData.grade), o = w.merge({}, e, {userData: {grade: r}});
        (n = a.call(this, o, t, v.rendererProvider)).setPaused = w.noop, n.updatePaths = function (e) {
          e && (e = w.isString(e) ? [e] : e, w.each(e, function (e) {
            return n.updatedPaths.push(e);
          })), n.onStateChange();
        }, n.toggleAppClassName = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          n.lessonContainer && (w.isNull(t) ? n.lessonContainer.classList.contains(e) ? n.lessonContainer.classList.remove(e) : n.lessonContainer.classList.add(e) : t ? n.lessonContainer.classList.add(e) : n.lessonContainer.classList.remove(e));
        }, n.getPreviousStep = function () {
          return n.api.navigation.getPreviousStep();
        }, n.getNextStep = function () {
          return n.api.navigation.getNextStep();
        };
        var l = n.screenData.properties.scored, c = w.get(n.screenData, "style.properties.saveIntermediateState", false), d = w.get(n.screenData, "style.properties.disableState", false);
        return n._persist = !d && (c || l), n.updatedPaths = [], n._rendererProvider = v.rendererProvider, n.assets = {}, w.bindAll((0, u.default)(n), "_done", "_onResize", "_onSequenceChange", "onStateChange"), n._started = false, n._state = {}, n;
      }
      return (0, o.default)(s, [{key: "loadSoundCard", value: function (e) {
        var t = this.searchScreen('//sound_spelling_cards/sscard|//*[type="sound_word"]/value');
        return (0, S.loadSoundCards)().then(function (n) {
          var a = n.xml;
          return w.map(t, function (t) {
            return JSON.search(a, '//*[name="'.concat(t, '"]//*[type="').concat(e, '"]'));
          });
        });
      }}, {key: "renderDisplay", value: function () {
        var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, n = {screen: {get: function () {
          return e.model;
        }, save: function (t) {
          e.model = t, e.renderer && e.renderer.setState(_({}, t));
        }}}, a = this.Renderer;
        return this.isPaused = this.api.navigation.isPaused(), E.createElement(a, {key: "display", assets: this.assets, soundCards: this.soundCards, api: this.api, models: n, ref: t, type: "main", sharedScreenContent: this.sharedScreenContent, lessonInfo: this.lessonInfo, screen: this.screenData, size: this.api.screen.size, userData: this.userData});
      }}, {key: "load", value: function (e) {
        var t = this, n = this.screenData, a = this.style, i = n.isImageBlobify, o = void 0 !== i && i;
        O.options = o ? {image: {blobify: true}} : {image: {blobify: false}}, (0, c.default)((0, f.default)(s.prototype), "load", this).call(this, e), O.options = {autoUpdateContext: true};
        var u = new Promise(function (e, s) {
          Promise.all([t.loadSoundCard("audio"), t.loadSoundCard("image")]).then(function (t) {
            var s = (0, r.default)(t, 2), i = s[0], o = s[1];
            D.load({screen: n, style: a, additionalAudio: w.first(i), additionalImages: w.first(o), onComplete: e});
          });
        });
        return Promise.all([this._rendererProvider.getRenderer(this.style.id, n), u, (0, S.loadSoundCards)()]).then(function (e) {
          var n = (0, r.default)(e, 3), a = n[0], s = n[1], i = n[2].json;
          return t.assets = s, t.soundCards = i, t.Renderer = a.module.renderer, t.Renderer.setSequencer(b.RendererSequencer), t.onLoad(), a;
        });
      }}, {key: "render", value: function () {
        for (var e, t = this, n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
        (e = (0, c.default)((0, f.default)(s.prototype), "render", this)).call.apply(e, [this].concat(a));
        var i = this.renderDisplay(function (e) {
          e && (t.renderer = e, t._onResize(t.api.screen.size), t.audio = m.AudioModule.bootstrap({assets: w.filter(t.assets.assetManifest, {type: "audio"}), cue: t.renderer.cue, searchScreen: t.renderer.searchScreen, searchStyle: t.renderer.searchStyle, onUpdate: t.updatePaths}), t.renderer.audio = t.audio, t.displayAnimations = new A, t._listen(), t.renderer.ready());
        });
        this._enhanceApi(), C.render(i, this.domContainerNode);
      }}, {key: "start", value: function () {
        this._started = true, this._onStart && this._onStart(), (0, c.default)((0, f.default)(s.prototype), "start", this).call(this);
      }}, {key: "pause", value: function () {
        this.isPaused = true, this.setPaused(this.isPaused), this.renderer && this.renderer.pause(), x.pauseUpdates(), this.audio && this.audio.pause(), (0, c.default)((0, f.default)(s.prototype), "pause", this).call(this);
      }}, {key: "unpause", value: function () {
        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this.isPaused = false, this.setPaused(this.isPaused), this.renderer && e && this.renderer.unpause(), x.resumeUpdates(), this.audio && this.audio.resume(), (0, c.default)((0, f.default)(s.prototype), "unpause", this).call(this);
      }}, {key: "destroy", value: function () {
        this.domContainerNode && (C.unmountComponentAtNode(this.domContainerNode), this.domContainerNode.innerHTML = "", this.audio && this.audio.destroy()), this.renderer && (this.renderer.audio = null), this._unlisten(), P.abort(), this.unpause(false), this.renderer = null, (0, c.default)((0, f.default)(s.prototype), "destroy", this).call(this);
        var e = this.screenData, t = U.getStep(e.id), n = {section: w.get(t, "section"), screen: e, partNum: 1};
        R.sendEvent({payload: I.DESTROY, contextData: n});
      }}, {key: "model", get: function () {
        return w.isUndefined(this._model) && (this._persist && (this._model = (0, c.default)((0, f.default)(s.prototype), "state", this)), w.isUndefined(this._model) && (this._model = {})), this._model;
      }, set: function (e) {
        this._persist && (0, l.default)((0, f.default)(s.prototype), "state", e, this, true), this._model = e;
      }}, {key: "lessonContainer", get: function () {
        return document.getElementById("lesson");
      }}, {key: "_onSequenceChange", value: function () {
        this.displayAnimations.process(P.activeDisplayAnimations, this.renderer);
      }}, {key: "_done", value: function () {
        this.audio && this.audio.stop();
      }}, {key: "onStateChange", value: function () {
        var e = this;
        if (!w.isEmpty(this.updatedPaths)) {
          var t = {};
          w.forEach(this.updatedPaths, function (n) {
            w.set(t, n, w.get(e.state, n));
          }), t.assets && (t.assets = w.omit(t.assets, w.isUndefined));
        }
      }}, {key: "state", get: function () {
        return _(_({}, this._state), {}, {started: this._started});
      }, set: function (e) {
        this._state = e;
      }}, {key: "style", get: function () {
        return this.screenData.style;
      }}, {key: "_enhanceApi", value: function () {
        var e = this;
        this.api.lesson.toggleClassName || (this.api.lesson.toggleClassName = this.toggleAppClassName), this.api.lesson.getPreviousStep || (this.api.lesson.getPreviousStep = this.getPreviousStep), this.api.lesson.getNextStep || (this.api.lesson.getNextStep = this.getNextStep), this.api.lesson.toggleClassName("showMenu", this.api.navigation.isMenuButtonShown() || false), this.api.navigation.help.callback = w.debounce(function () {
          return e.renderer.helpSequence();
        }), this.api.navigation.help.visible = true, this.api.navigation.customButton.callback = w.debounce(function () {
          return e.renderer.customButton();
        }), this.api.navigation.customButton.visible = false, this.api.navigation.done.callback = function () {
          e._done(), e.renderer.done();
        };
      }}, {key: "_onResize", value: function () {
        var e;
        this.render && (e = this.renderer).resize.apply(e, arguments);
      }}, {key: "_listen", value: function () {
        this.api.player.on("resize", this._onResize), P.on("change", this._onSequenceChange), this.audio && this.audio.listen();
      }}, {key: "_unlisten", value: function () {
        if (this.api) {
          var e = this.api.player;
          e && e.off("resize", this._onResize);
        }
        P.off("change", this._onSequenceChange), this.audio && this.audio.unlisten();
      }}, {key: "searchScreen", value: function (e) {
        var t = JSON.toXML(this.screenData, true);
        return JSON.search(t, e);
      }}]), s;
    }(h.default.LearningComponent);
    t.default = N;
  }, 46878: (e, t, n) => {
    "use strict";
    var a = n(64836);
    Object.defineProperty(t, "__esModule", {value: true}), t.audioModuleProxy = t.AudioModule = void 0;
    var r = a(n(3515)), s = a(n(56690)), i = a(n(89728)), o = a(n(41588)), u = a(n(61655)), l = a(n(94993)), c = a(n(73808)), d = n(97025);
    var p = d.SHARED_DEPENDENCIES._, f = d.ACTIONS.audioActions, h = d.UTILS.audioPlayer, y = d.UTILS.rendererLogger, v = null, g = new Proxy({}, {apply: function (e, t, n) {
      return e.apply(v, n);
    }, get: function (e, t) {
      return v[t];
    }, set: function (e, t, n) {
      return v[t] = n, true;
    }});
    t.audioModuleProxy = g;
    var m = function (e) {
      (0, u.default)(d, e);
      var t, n, a = (t = d, n = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if ("function" == typeof Proxy) return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), true;
        } catch (e) {
          return false;
        }
      }(), function () {
        var e, a = (0, c.default)(t);
        if (n) {
          var r = (0, c.default)(this).constructor;
          e = Reflect.construct(a, arguments, r);
        } else e = a.apply(this, arguments);
        return (0, l.default)(this, e);
      });
      function d(e) {
        var t, n = e.assets, r = e.cue, i = e.searchScreen, o = e.searchStyle;
        return (0, s.default)(this, d), (t = a.call(this, {assets: n, cue: r, searchScreen: i, searchStyle: o})).onUpdate = function () {
          p.each(t._registeredCallbacks, function (e) {
            var n = e.asset, a = e.callback, r = t.getAudioBySrc(n.parts) || n;
            a({uiEnabled: t.uiEnabled, playing: p.isArray(r) ? p.some(r, function (e) {
              return h.isPlaying((t.getAudioBySrc(e.parts) || e).id);
            }) : h.isPlaying(r.id)});
          });
        }, t._registeredCallbacks = [], t.searchScreen = i, t.searchStyle = o, t.uiEnabled = false, t.on("update", t.onUpdate), window.playSound = function (e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "SYSTEM", a = e;
          p.isString(a) && (a = t._getAudioByFilename("".concat(e, ".mp3"))), a ? t.startAudio({asset: a, context: n, overlap: true}, true) : y.error("Could not find an audio asset for ".concat(e, "."));
        }, t;
      }
      return (0, i.default)(d, [{key: "_getAudioByFilename", value: function (e) {
        var t = '//*[contains(src, "'.concat(e, '")]/..'), n = this.searchScreen(t);
        return p.isEmpty(n) && (n = this.searchStyle(t)), p.head(n);
      }}, {key: "getDuration", value: function (e) {
        var t = e.parts[0].src;
        if (!t) throw new Error("no source associated with ".concat(e));
        var n = t.slice("${content}".length, -3), a = p.find(window.Howler._howls, function (e) {
          return p.includes(e._src, n);
        });
        return a ? 1e3 * a.duration() : 0;
      }}, {key: "disableUI", value: function () {
        this.uiEnabled = false, this.onUpdate();
      }}, {key: "enableUI", value: function () {
        this.uiEnabled = true, this.onUpdate();
      }}, {key: "play", value: function (e) {
        var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = n.onComplete, r = void 0 === a ? p.noop : a, s = n.onStart, i = void 0 === s ? p.noop : s;
        if ((0, o.default)((0, c.default)(d.prototype), "stop", this).call(this), this.interupt = false, p.isArray(e)) {
          var u = 0, l = function n() {
            e[u] && (e[u + 1] ? !t.interupt && f.start(e[u], "USER", n, 0 === u ? i : p.noop) : !t.interupt && f.start(e[u], "USER", r, 0 === u ? i : p.noop)), u++;
          };
          l();
        } else f.start(e, "USER", r, i);
      }}, {key: "playSystem", value: function (e) {
        var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = n.onComplete, r = void 0 === a ? p.noop : a, s = n.onStart, i = void 0 === s ? p.noop : s;
        if (this.stop(), this.interupt = false, p.isArray(e)) {
          var o = 0, u = function n() {
            e[o] && (e[o + 1] ? !t.interupt && f.start(e[o], "SYSTEM", n, 0 === o ? i : p.noop) : !t.interupt && f.start(e[o], "SYSTEM", r, 0 === o ? i : p.noop)), o++;
          };
          u();
        } else f.start(e, "SYSTEM", r, i);
      }}, {key: "registerCallback", value: function (e) {
        var t = e.asset, n = e.callback;
        this._registeredCallbacks.push({asset: t, callback: n});
      }}, {key: "getAudioBySrc", value: function (e) {
        return p.find(this.assets, function (t) {
          var n = t.src;
          return p.some(e, {src: n});
        });
      }}, {key: "stop", value: function () {
        this.interupt = true, (0, o.default)((0, c.default)(d.prototype), "stop", this).call(this), this.onUpdate();
      }}], [{key: "bootstrap", value: function () {
        v && v.destroy();
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return v = (0, r.default)(d, t);
      }}]), d;
    }(d.MODULES.AudioModule);
    t.AudioModule = m;
  }, 51563: (e, t, n) => {
    "use strict";
    var a = n(64836);
    Object.defineProperty(t, "__esModule", {value: true}), t.RendererSequencer = void 0;
    var r = a(n(861)), s = a(n(38416)), i = a(n(56690)), o = a(n(89728)), u = a(n(41588)), l = a(n(61655)), c = a(n(94993)), d = a(n(73808)), p = a(n(96486)), f = n(23697), h = n(97025), y = n(13562), v = n(50956);
    function g(e, t, n) {
      if (t && !Array.isArray(t) && "number" == typeof t.length) {
        var a = t.length;
        return function (e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
          return a;
        }(t, void 0 !== n && n < a ? n : a);
      }
      return e(t, n);
    }
    function m(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t && (a = a.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, a);
      }
      return n;
    }
    function S(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? m(Object(n), true).forEach(function (t) {
          (0, s.default)(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }
      return e;
    }
    var b = h.UTILS.feedbackUtil, k = h.UTILS.rendererLogger, _ = h.UTILS.rendererUtil, A = {animation: "Animation", audio: "Audio", completeScreen: "Complete Screen", delay: "Delay", direct: "Move NPC to layer", disableHelp: "Disable Help", disableUI: "Disable UI", enableHelp: "Enable Help", enableUI: "Enable UI", execute: "Execute command", finish: "Finish", message: "Message", tween: "Tween", sequence: "Sequence", wait: "Wait"}, P = function (e) {
      (0, l.default)(s, e);
      var t, n, a = (t = s, n = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if ("function" == typeof Proxy) return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), true;
        } catch (e) {
          return false;
        }
      }(), function () {
        var e, a = (0, d.default)(t);
        if (n) {
          var r = (0, d.default)(this).constructor;
          e = Reflect.construct(a, arguments, r);
        } else e = a.apply(this, arguments);
        return (0, c.default)(this, e);
      });
      function s(e, t) {
        var n;
        return (0, i.default)(this, s), (n = a.call(this, e)).messages = [], n._logInstruction = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if (!e) return "";
          var a, r = e.args, s = e.params, i = e.target, o = e.type, u = A[o], l = "".concat(u, ": ");
          if (p.default.isArray(e)) return p.default.map(e, function (e) {
            return n._logInstruction(e, t + 1);
          });
          switch (u) {
            case A.animation:
              l = "callableMechanismHandler" === i ? "Callable Mechanism: ".concat(s.directive.action, " ").concat(s.params.start, " targetting ").concat(s.directive.target, " fired by ").concat(n._getAudioName(s.soundId)) : s && s.message ? s.message : "Execute and wait for ".concat(i);
              break;
            case A.audio:
              l = n._getAudioName(e);
              break;
            case A.completeScreen:
              break;
            case A.delay:
              l += "".concat(e.duration, " second");
              break;
            case A.direct:
            case A.disableHelp:
            case A.disableUI:
            case A.enableHelp:
            case A.enableUI:
              break;
            case A.execute:
              a = p.default.last(r) && p.default.last(p.default.last(r)) && p.default.last(p.default.last(r)).message ? p.default.last(p.default.last(r)).message : n._getCallee(), l = "".concat(a);
              break;
            case A.finish:
            case A.tween:
              break;
            case A.sequence:
              l = e.execution;
              break;
            case A.wait:
              break;
            default:
              l = "Missing description for ".concat(o, " ").concat(JSON.stringify(e));
          }
          return n.messages.push({id: e.instructionId, stack: t, event: u || e.type, message: l}), l;
        }, n.renderer = t, n;
      }
      return (0, o.default)(s, [{key: "_getAudioName", value: function (e) {
        try {
          return p.default.isArray(e) ? p.default.map(p.default.flatten(p.default.map(e, "parts")), "alt").join("\n") : e.parts ? p.default.map(e.parts, "alt").join("\n") : p.default.isString(e) ? e : "Invalid audio";
        } catch (e) {
          return "Failed to determine audio name";
        }
      }}, {key: "_getCallee", value: function () {
        try {
          return "Assumed call: ".concat((new Error).stack.split("\n")[5].trim().split(" ")[1]);
        } catch (e) {
          return "";
        }
      }}, {key: "_pushAndReturn", value: function () {
        for (var e, t = arguments.length, n = new Array(t), a = 0; a < t; a++) n[a] = arguments[a];
        var r = (e = (0, u.default)((0, d.default)(s.prototype), "_pushAndReturn", this)).call.apply(e, [this].concat(n));
        return r.message = this._logInstruction(r), r;
      }}, {key: "debugLog", value: function () {
        this.api.cheats.log && console.table(p.default.map(this.messages, function (e) {
          var t = e.id, n = e.event, a = e.message, r = e.stack;
          return {id: t, stack: r, event: n, message: "".concat(p.default.range(r).map(function () {
            return "		";
          }).join("")).concat(a)};
        })), this.messages = [];
      }}, {key: "message", value: function (e) {
        this.messages.push({id: "message", stack: void 0, event: A.message, message: e});
      }}, {key: "completeScreen", value: function () {
        var e;
        if (this.renderer.complete || this.renderer.isScreenFinished || this.api.screen.setExitData("score", this.renderer.state.result.score), this.renderer.isScreenFinished) {
          var t = this.api.screen.getExitData(this.renderer._assetId), n = t.score;
          return (0, u.default)((0, d.default)(s.prototype), "completeScreen", this).call(this, {max: this.renderer.maxScore, min: 0, raw: n});
        }
        for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i];
        return (e = (0, u.default)((0, d.default)(s.prototype), "completeScreen", this)).call.apply(e, [this].concat(r));
      }}, {key: "disableUI", value: function () {
        var e = this;
        return this.execute(function () {
          e.renderer.disableUI(), e.renderer.audio.disableUI();
        }, {event: "disableUI", message: "Disable UI"});
      }}, {key: "enableUI", value: function () {
        var e = this;
        return this.execute(function () {
          !e.renderer.model.complete && e.renderer.autoEnableHelp && _.enableHelp(e.api, true), e.renderer.enableUI(), e.renderer.audio.enableUI();
        }, {event: "enableUI", message: "Enable UI"});
      }}, {key: "executeAndWait", value: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, u.default)((0, d.default)(s.prototype), "executeAndWait", this).call(this, e, S(S({}, t), {}, {type: "executeAndWait"}));
      }}, {key: "gotoAndStop", value: function (e, t) {
        return this.execute(function () {
          return e.gotoAndStop(t);
        }, {event: "animation", message: "Set animation ".concat(e.name, " to stop on label ").concat(t)});
      }}, {key: "gotoAndPlay", value: function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, a = n.onComplete, r = void 0 === a ? p.default.noop : a, s = n.onUpdate, i = void 0 === s ? p.default.noop : s;
        return this.executeAndWait(function (n) {
          var a = p.default.isArray(e) ? e : [e];
          y.timelineUtil.watch(p.default.first(a), t, function (e) {
            var t = e.clean, a = e.complete, s = e.currentFrame, o = e.currentLabel;
            try {
              i({currentFrame: s, currentLabel: o}), a && (t(), r(), n());
            } catch (e) {
              k.warn("An animation update failed to run");
            }
          }), p.default.each(a, function (e) {
            return e.gotoAndPlay(t);
          });
        }, {event: "animation", message: "Start animation ".concat(e.name, " to play label ").concat(t)});
      }}, {key: "playAudio", value: function (e, t) {
        var n = this, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "SYSTEM", i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return p.default.isArray(e) && (e = p.default.filter(e, function (e) {
          return !p.default.isEmpty(e);
        })), e || p.default.isArray(e) && !p.default.isEmpty(e) ? p.default.isArray(e) ? this.series.apply(this, [this.execute(function () {
          return n.renderer.audio.stop();
        }, {event: "audio", message: "Stoping any audio"})].concat(g(r.default, p.default.flatten(p.default.map(e, function (e) {
          return [(0, u.default)((0, d.default)(s.prototype), "playAudio", n).call(n, S(S({}, e), {}, {context: a}), t, i), (0, u.default)((0, d.default)(s.prototype), "playAudio", n).call(n, S(S({}, v.SILENT_AUDIO), {}, {context: a}), t, i)];
        }))))) : (this.execute(function () {
          return n.renderer.audio.stop();
        }, {event: "audio", message: "Stoping any audio"}), (0, u.default)((0, d.default)(s.prototype), "playAudio", this).call(this, S(S({}, e), {}, {context: a}), t, i)) : this.execute(p.default.noop);
      }}, {key: "playFeedback", value: function (e) {
        var t = e.attempt, n = e.isCorrect, a = e.preFeedback, r = e.postFeedback, s = this.renderer.feedback, i = this.renderer.screen.style.feedback;
        a(this), this.renderer.shouldPlayFeedback && b.getFeedback({attempt: t, comparator: p.default.noop, isCorrect: n, feedbackDef: s, maxAttempts: this.renderer.maxAttempts, response: this.renderer.userSelection, sequencer: this, styleFeedbackDef: i}), r(this);
      }}, {key: "playSFX", value: function (e) {
        return e ? this.execute(function () {
          return window.playSound(e);
        }, {event: "SFX", message: "Playing SFX ".concat(this._getAudioName(e))}) : this.execute(p.default.noop, {event: "SFX", message: "Missing SFX"});
      }}, {key: "shouldEnableDoneButton", value: function (e) {
        return e ? this.enableDoneButton() : this.disableDoneButton();
      }}, {key: "shouldEnableHelp", value: function (e) {
        return e ? this.enableHelp() : this.disableHelp();
      }}, {key: "startProgress", value: function () {
        for (var e = this, t = arguments.length, n = new Array(t), a = 0; a < t; a++) n[a] = arguments[a];
        return this.execute(function () {
          var t;
          return (t = e.api.screen).inProgress.apply(t, n);
        }, {event: "start", message: "Track User Progress"});
      }}, {key: "wait", value: function (e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return console.warn("seq.wait is deprecated. Use seq.waitSeconds or seq.waitFrames instead."), t ? this._pushAndReturn({type: "wait", duration: e, useFrames: t}) : this._pushAndReturn({type: "delay", duration: e});
      }}, {key: "waitFrames", value: function (e) {
        return this._pushAndReturn({type: "wait", duration: e, useFrames: true});
      }}]), s;
    }(f.Sequencer);
    t.RendererSequencer = P;
  }, 3515: (e, t, n) => {
    var a = n(6015), r = n(69617);
    function s(t, n, i) {
      return r() ? (e.exports = s = Reflect.construct.bind(), e.exports.__esModule = true, e.exports.default = e.exports) : (e.exports = s = function (e, t, n) {
        var r = [null];
        r.push.apply(r, t);
        var s = new (Function.bind.apply(e, r));
        return n && a(s, n.prototype), s;
      }, e.exports.__esModule = true, e.exports.default = e.exports), s.apply(null, arguments);
    }
    e.exports = s, e.exports.__esModule = true, e.exports.default = e.exports;
  }, 69617: e => {
    e.exports = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if ("function" == typeof Proxy) return true;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), true;
      } catch (e) {
        return false;
      }
    }, e.exports.__esModule = true, e.exports.default = e.exports;
  }}]);
  