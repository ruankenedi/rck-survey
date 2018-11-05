import { hasLoginSession, removeDOMElement } from '../utils/';

const showUpdateMessage = (device) => {
  import('./platform-support-message')
    .then(messages => messages.showUpdateMessage(device));
};

const showNoPlatformSupportMessage = (device) => {
  import('./platform-support-message')
    .then(messages => messages.showNoPlatformSupportMessage(device));
};

const showInstallChromeMessage = (device) => {
  import('./platform-support-message')
    .then(messages => messages.showInstallChromeMessage(device));
};

/* eslint-disable no-underscore-dangle */
const getUserAgent = () => (navigator.userAgent || navigator.vendor || window.opera).toLowerCase();

const getMatch = (userAgent, platformMatch) => {
  const match = /(edge)\/([\w.]+)/.exec(userAgent)
    || /(opr)[/]([\w.]+)/.exec(userAgent)
    || /(vivaldi)[/]([\w.]+)/.exec(userAgent)
    || /(chrome)[/]([\w.]+)/.exec(userAgent)
    || /(iemobile)[/]([\w.]+)/.exec(userAgent)
    || /(version)(applewebkit)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(userAgent)
    || /(webkit)[/]([\w.]+).*(version)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(userAgent)
    || /(webkit)[/]([\w.]+)/.exec(userAgent)
    || /(opera)(?:.*version|)[/]([\w.]+)/.exec(userAgent)
    || /(msie) ([\w.]+)/.exec(userAgent)
    || ((userAgent.indexOf('trident') >= 0 && /(rv)(?::| )([\w.]+)/.exec(userAgent)))
    || (userAgent.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(userAgent))
    || [];

  return {
    browser: match[5] || match[3] || match[1] || '',
    version: match[2] || match[4] || '0',
    versionNumber: match[4] || match[2] || '0',
    platform: platformMatch[0] || ''
  };
};

const getPlatformMatch = userAgent =>
  /(ipad)/.exec(userAgent)
  || /(ipod)/.exec(userAgent)
  || /(windows phone)/.exec(userAgent)
  || /(iphone)/.exec(userAgent)
  || /(kindle)/.exec(userAgent)
  || /(silk)/.exec(userAgent)
  || /(android)/.exec(userAgent)
  || /(win)/.exec(userAgent)
  || /(mac)/.exec(userAgent)
  || /(linux)/.exec(userAgent)
  || /(cros)/.exec(userAgent)
  || /(playbook)/.exec(userAgent)
  || /(bb)/.exec(userAgent)
  || /(blackberry)/.exec(userAgent)
  || [];

const getPlatform = () => {
  const userAgent = getUserAgent();
  const platformMatch = getPlatformMatch(userAgent);
  const matched = getMatch(userAgent, platformMatch);
  const browser = {};

  if (matched.browser) {
    browser[matched.browser] = true;
    browser.version = matched.version;
    browser.versionNumber = parseInt(matched.versionNumber, 10);
  }

  if (matched.platform) {
    browser[matched.platform] = true;
  }

  // These are all considered mobile platforms, meaning they run a mobile browser
  if (browser.android || browser.bb || browser.blackberry || browser.ipad || browser.iphone ||
    browser.ipod || browser.kindle || browser.playbook || browser.silk || browser['windows phone']) {
    browser.mobile = true;
  }

  // Set iOS if on iPod, iPad or iPhone
  if (browser.ipod || browser.ipad || browser.iphone) {
    browser.ios = true;
  }

  if (browser['windows phone']) {
    browser.winphone = true;
    delete browser['windows phone'];
  }

  // These are all considered desktop platforms, meaning they run a desktop browser
  if (browser.cros || browser.mac || browser.linux || browser.win) {
    browser.desktop = true;
  }

  // Chrome, Opera 15+, Vivaldi and Safari are webkit based browsers
  if (browser.chrome || browser.opr || browser.safari || browser.vivaldi) {
    browser.webkit = true;
  }

  // IE11 has a new token so we will assign it msie to avoid breaking changes
  if (browser.rv || browser.iemobile) {
    matched.browser = 'ie';
    browser.ie = true;
  }

  // Edge is officially known as Microsoft Edge, so rewrite the key to match
  if (browser.edge) {
    matched.browser = 'edge';
    browser.edge = true;
  }

  // Blackberry browsers are marked as Safari on BlackBerry
  if ((browser.safari && browser.blackberry) || browser.bb) {
    matched.browser = 'blackberry';
    browser.blackberry = true;
  }

  // Playbook browsers are marked as Safari on Playbook
  if (browser.safari && browser.playbook) {
    matched.browser = 'playbook';
    browser.playbook = true;
  }

  // Opera 15+ are identified as opr
  if (browser.opr) {
    matched.browser = 'opera';
    browser.opera = true;
  }

  // Stock Android browsers are marked as Safari on Android.
  if (browser.safari && browser.android) {
    matched.browser = 'android';
    browser.android = true;
  }

  // Kindle browsers are marked as Safari on Kindle
  if (browser.safari && browser.kindle) {
    matched.browser = 'kindle';
    browser.kindle = true;
  }

  // Kindle Silk browsers are marked as Safari on Kindle
  if (browser.safari && browser.silk) {
    matched.browser = 'silk';
    browser.silk = true;
  }

  if (browser.vivaldi) {
    matched.browser = 'vivaldi';
    browser.vivaldi = true;
  }

  // Assign the name and platform variable
  browser.name = matched.browser;
  browser.platform = matched.platform;

  if (window && window.process && window.process.versions && window.process.versions.electron) {
    browser.electron = true;
  } else if (document.location.href.indexOf('chrome-extension://') === 0) {
    browser.chromeExt = true;
  } else if (
    window._cordovaNative
    || window.cordova
    || document.location.href.indexOf('http://') === -1
  ) {
    browser.cordova = true;
  }

  return browser;
};

const Platform = {
  __installed: false,
  install({ $q }) {
    if (this.__installed) {
      return;
    }

    this.__installed = true;

    Platform.is = getPlatform();
    Platform.has = {
      touch: (() => !!('ontouchstart' in document.documentElement) || window.navigator.msMaxTouchPoints > 0)()
    };
    Platform.within = {
      iframe: window.self !== window.top
    };

    try {
      if (window.localStorage) {
        Platform.has.webStorage = true;
      }
    } catch (e) {
      Platform.has.webStorage = false;
    }
    /* eslint-disable no-param-reassign */
    $q.platform = Platform;
  }
};

const {
  name,
  versionNumber,
  platform,
  desktop,
  mobile
} = getPlatform();

const deviceInfo = {
  name,
  versionNumber,
  mobile,
  desktop,
  platform
};

const isDesktop = desktop;
const isAndroid = platform === 'android';
const isIos = platform === 'iphone' || platform === 'ipad';
const isMozilla = name === 'mozilla';
const isChrome = name === 'chrome';
const isChromeUpdate = (isDesktop || isAndroid) && name !== 'mozilla' && isChrome && versionNumber < 60 && !isIos;

const loadApplication = (application) => {
  const loaderElm = document.getElementById('app-loader');

  if (application === 'vue') {
    import(/* webpackChunkName: "app-vue" */'../app-vue');

    const done = () => {
      setTimeout(() => {
        loaderElm.style.display = 'none';
        setTimeout(() => {
          removeDOMElement(loaderElm);
          window.removeEventListener('load', done);
        }, 500);
      }, 100);
    };

    window.addEventListener('load', done);
  } else {
    import(/* webpackChunkName: "webtracker-legacy" */'../webtracker-legacy/dist');
    removeDOMElement(loaderElm);
  }
};

/* eslint-disable import/prefer-default-export */
export const getPlatformApplication = () => {
  const loginSession = hasLoginSession();

  if (isDesktop) {
    if (isChrome) {
      if (versionNumber > 60) {
        loadApplication('vue');

        return true;
      }

      showUpdateMessage(deviceInfo);

      return true;
    }

    if (isMozilla) {
      if (versionNumber > 54) {
        loadApplication('vue');

        return true;
      }

      showInstallChromeMessage(deviceInfo);

      return true;
    }

    showInstallChromeMessage(deviceInfo);

    return true;
  }

  if (isAndroid) {
    const { userAgent } = navigator;
    const firstIndex = userAgent.indexOf('Android');
    const androidVersion = parseFloat(userAgent.slice(firstIndex + 8, firstIndex + 11));

    if (androidVersion > 4.1 && isChrome) {
      if (versionNumber > 60) {
        loadApplication('vue');

        return true;
      }

      showUpdateMessage(deviceInfo);

      return true;
    }

    if (androidVersion > 4.1 && !isChrome) {
      showInstallChromeMessage(deviceInfo);

      return true;
    }

    if (loginSession) {
      loadApplication('lite');
    } else {
      showNoPlatformSupportMessage(deviceInfo);
    }

    return false;
  }

  if (isChromeUpdate) {
    showUpdateMessage(deviceInfo);

    return false;
  }

  if (isIos && versionNumber >= 9) {
    loadApplication('vue');

    return true;
  }

  if (loginSession) {
    loadApplication('lite');
  } else {
    showNoPlatformSupportMessage(deviceInfo);
  }

  return false;
};
