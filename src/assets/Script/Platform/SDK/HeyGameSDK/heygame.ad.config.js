(function (root) {
  var exports = undefined,
      module = undefined,
      require = undefined;
  var define = undefined;
  (function () {
    let runningEnv = typeof window !== 'undefined' ? window : globalThis;

    runningEnv.HeyGameConfig = function (exports) {
      'use strict';

      class AdConfig {
        constructor() {
          this.appName = "TaiKongShaDaLuanDou";
          this.debugMode = true;
          this.appId = ""; //平台获取的appid

          this.heyAppId = 2559; //heygame的appid //todo

          this.heyPlatId = 1011; //heygame平台id

          this.heySecret = "05569baf774c1265bb5bba89efdd7d8b"; // heygame平台秘钥 //todo

          this.versionName = "1.0.0";
          this.resVersion = "1.0.0";
          this.bannerAdUnitId = [""];
          this.interstitialAdUnitId = "";
          this.videoAdUnitId = "";
          this.nativeAdUnitId = [""];
          this.drawerGameAdUnitId = "";
          this.bannerGameAdUnitId = "";
          this.appBoxUnitId = [""];
          this.blockAdUnitId = [""];
          this.shareConfig = {};
        }

      }

      class WXAdConfig extends AdConfig {
        constructor() {
          super();
          this.versionName = "1.0.0";
          this.bannerAdUnitId = ['261277'];
          this.videoAdUnitId = '261289';
        }

      }

      class OPPOAdConfig extends AdConfig {
        constructor() {
          super();
          this.versionName = "1.0.0";
          this.heyPlatId = 1011; //heygame平台id

          this.bannerAdUnitId = ['338134'];
          this.videoAdUnitId = '338141';
          this.nativeAdUnitId = ['338139', '338140'];
          this.drawerGameAdUnitId = '338142';
          this.bannerGameAdUnitId = '326365'; //横幅
        }

      }

      class VIVOAdConfig extends AdConfig {
        constructor() {
          super();
          this.versionName = "1.0.0";
          this.heyPlatId = 1026; //heygame平台id

          this.bannerAdUnitId = ['fc545f371874424798001b9d68629ce5'];
          this.videoAdUnitId = '23eb66da755946c7aea160720b0a74cf';
          this.nativeAdUnitId = ['ed2570172cf94e09a8387eb5ecad6014', '784284a8ed7c4997b34171216b878055'];
          this.interstitialAdUnitId = '821b2b4b02af47f5b25fcd48d553e50a'; // this.bannerGameAdUnitId = '326365'; //横幅
        }

      }

      class TTAdConfig extends AdConfig {
        constructor() {
          super();
          this.versionName = "1.0.0";
          this.heyPlatId = 1020; //heygame平台id

          this.shareConfig = {
            TEMPLATE_ID: "34l4k5s8q93f95g4jd",
            title: "在线寻求司机指导",
            desc: "司机快来体验最真实的驾驶模拟"
          };
          this.bannerAdUnitId = ['7kafebiad93akk744f'];
          this.videoAdUnitId = '44e94dk8070dqiiiml';
          this.interstitialAdUnitId = '1b59j19ac01h14pb0o';
        }

      }

      class QQAdConfig extends AdConfig {
        constructor() {
          super();
        }

      }

      class PCAdConfig extends AdConfig {
        constructor() {
          super(); // this.bannerAdUnitId = ['289406'];
          // this.videoAdUnitId = '289414';
          // this.nativeAdUnitId = ['289409', '289410'];
          // this.drawerGameAdUnitId = '289411';
          // this.bannerGameAdUnitId = '289403';

          this.bannerAdUnitId = ['326359'];
          this.videoAdUnitId = '326360';
          this.nativeAdUnitId = ['326364', '326362', '329675'];
          this.drawerGameAdUnitId = '326366';
          this.bannerGameAdUnitId = '326365'; //横幅
        }

      }

      class HeyGameSDKConfig {
        constructor() {
          this._instance = null;
          this._config = null;
          this.initPlatforms();
          this.initSDKConfig();
          console.log('HeyGameSDKConfig constructor');
        }

        static get instance() {
          if (!HeyGameSDKConfig._instance) {
            HeyGameSDKConfig._instance = new HeyGameSDKConfig();
          }

          return HeyGameSDKConfig._instance;
        }

        static get AdConfig() {
          if (!HeyGameSDKConfig.instance._config) {
            HeyGameSDKConfig.instance._config = new AdConfig();
          }

          return HeyGameSDKConfig.instance._config;
        }

        init() {}

        initSDKConfig() {
          if (HeyGameSDKConfig.onWXMiniGame) {
            this._config = new WXAdConfig();
          } else if (HeyGameSDKConfig.onOPPOMiniGame) {
            this._config = new OPPOAdConfig();
          } else if (HeyGameSDKConfig.onVIVOMiniGame) {
            this._config = new VIVOAdConfig();
          } else if (HeyGameSDKConfig.onTTMiniGame) {
            this._config = new TTAdConfig();
          } else if (HeyGameSDKConfig.onQQMiniGame) {
            this._config = new QQAdConfig();
          } else if (HeyGameSDKConfig.onKGMiniGame) {
            console.error('HeyGameSDKConfig.onKGMiniGame error');
          } else {
            this._config = new PCAdConfig();
          }
        }

        initPlatforms() {
          // HeyGameSDKConfig.onPC = true;
          HeyGameSDKConfig.onOPPOMiniGame = true; // HeyGameSDKConfig.onVIVOMiniGame = true;
          // let u = window.navigator.userAgent;
          // console.log('initPlatforms--' + JSON.stringify(u));
          // HeyGameSDKConfig.onMobile = u.indexOf("Mobile") > -1 && u.indexOf('MiniGame') === -1;
          // HeyGameSDKConfig.onPC = !HeyGameSDKConfig.onMobile;
          // HeyGameSDKConfig.onWXMiniGame = u.indexOf('MiniGame') > -1;
          // if (u.indexOf('OPPO') > -1 && u.indexOf('MiniGame') > -1) {
          //     HeyGameSDKConfig.onOPPOMiniGame = true;
          //     HeyGameSDKConfig.onWXMiniGame = false;
          // } else if ("qq" in window && u.indexOf('MiniGame') > -1) {
          //     HeyGameSDKConfig.onQQMiniGame = true;
          //     HeyGameSDKConfig.onWXMiniGame = false;
          // } else if ("bl" in window && u.indexOf('MiniGame') > -1) {
          //     HeyGameSDKConfig.onBLMiniGame = true;
          //     HeyGameSDKConfig.onWXMiniGame = false;
          // } else if ("tt" in window && u.indexOf('MiniGame') > -1) {
          //     HeyGameSDKConfig.onTTMiniGame = true;
          //     HeyGameSDKConfig.onWXMiniGame = false;
          // }
          // if (u.indexOf("VVGame") > -1 || u.indexOf("vivominigame") > -1) {
          //     HeyGameSDKConfig.onVIVOMiniGame = true;
          // }
          // HeyGameSDKConfig.onHWMiniGame = "hbs" in window;
          // HeyGameSDKConfig.onKGMiniGame = u.indexOf('QuickGame') > -1;
          // if (u.indexOf('AlipayMiniGame') > -1) {
          //     HeyGameSDKConfig.onAlipayMiniGame = true;
          //     HeyGameSDKConfig.onWXMiniGame = false;
          // }
        }

      }

      exports.HeyGameSDKConfig = HeyGameSDKConfig;
      return exports;
    }({});
  }).call(root);
})( // The environment-specific global.
function () {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  if (typeof this !== 'undefined') return this;
  return {};
}.call(this));