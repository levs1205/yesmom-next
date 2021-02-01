module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		7: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "2S/i":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Form");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("YNFb");


/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "6rvL":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ "7UUK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "8OQS":
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "ANQk":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "Aiso":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dQHF")


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "IZS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "JVe5":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YNFb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Aiso");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("p8qk");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);












const importJodit = () => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "rf5E", 7));

const JoditEditor = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(importJodit, {
  ssr: false
});

const CardBlogEspecific = ({
  currentData
}) => {
  const {
    0: config,
    1: setConfig
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    readonly: true,
    toolbar: false
  }); // if(router.isFallback){
  //     return <div>CARGANDO...</div>
  // }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
        className: "jsx-2416903459",
        children: currentData.blog.titulo
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        name: "description",
        content: currentData.blog.descripcion,
        className: "jsx-2416903459"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        property: "og:type",
        content: "website",
        className: "jsx-2416903459"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        property: "og:title",
        content: currentData.blog.titulo,
        className: "jsx-2416903459"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        property: "og:description",
        content: currentData.blog.descripcion,
        className: "jsx-2416903459"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        property: "og:image",
        content: currentData.imagenes[0].typeImage === "P" ? currentData.imagenes[0].url : currentData.imagenes[1].url,
        className: "jsx-2416903459"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        property: "og:site_name",
        content: "La Ganga",
        className: "jsx-2416903459"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        name: "twitter:card",
        content: "summary",
        className: "jsx-2416903459"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        name: "twitter:title",
        content: currentData.blog.titulo,
        className: "jsx-2416903459"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        name: "twitter:description",
        content: currentData.blog.descripcion,
        className: "jsx-2416903459"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        name: "twitter:image",
        content: currentData.imagenes[0].typeImage === "P" ? currentData.imagenes[0].url : currentData.imagenes[1].url,
        className: "jsx-2416903459"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        name: "twitter:site",
        content: "@JudithCristinaQ",
        className: "jsx-2416903459"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
        name: "twitter:creator",
        content: "@JudithCristinaQ",
        className: "jsx-2416903459"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: "jsx-2416903459" + " " + "fade-in animated",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "jsx-2416903459" + " " + "box-banner-blog",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "jsx-2416903459" + " " + "ondas heartbeat",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
            src: "/image/onda-blanca.svg",
            alt: "ondas",
            width: 100,
            height: 20 // layout="responsive"

          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h4", {
          className: "jsx-2416903459" + " " + "text-title-blog",
          children: "Detalles de blog"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "jsx-2416903459" + " " + "ondas heartbeat",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
            src: "/image/onda-blanca.svg",
            alt: "ondas",
            width: 100,
            height: 20 // layout="responsive"

          })
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: "jsx-2416903459" + " " + "box-blog-especifico",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "jsx-2416903459" + " " + "nube1 heartbeat",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
            src: "/image/blog/nube1.png",
            width: 190,
            height: 130 // layout="responsive"
            ,
            alt: "nube"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "jsx-2416903459" + " " + "nube2 heartbeat",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
            src: "/image/blog/nube2.png",
            width: 190,
            height: 130,
            alt: "nube"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "jsx-2416903459" + " " + "nube3 heartbeat",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
            src: "/image/blog/nube3.png",
            width: 190,
            height: 130,
            alt: "nube"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "jsx-2416903459" + " " + "box-autor-blog",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("figure", {
            className: "jsx-2416903459" + " " + "figure-autor-blog",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
              src: currentData.imagenes[0].typeImage === "A" ? currentData.imagenes[0].url : currentData.imagenes[1].url,
              alt: "",
              className: "jsx-2416903459" + " " + "w-100 "
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "jsx-2416903459" + " " + "box-autor-text-blog",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h5", {
              className: "jsx-2416903459" + " " + "text-autor",
              children: currentData.blog.autor
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h5", {
              className: "jsx-2416903459" + " " + "text-fecha",
              children: currentData.blog.fecha.substr(0, 10)
            })]
          })]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "jsx-2416903459" + " " + "box-articulo-blog",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("figure", {
            className: "jsx-2416903459" + " " + "box-articulo-img-principal-blog",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
              src: currentData.imagenes[0].typeImage === "P" ? currentData.imagenes[0].url : currentData.imagenes[1].url,
              alt: "",
              className: "jsx-2416903459" + " " + "img-blog-especific m-auto d-block tilt-in-fwd-tr"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
            className: "jsx-2416903459" + " " + "box-articulo-title-blog",
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faStar"],
              className: "star-blog heartbeat cl-fuxia"
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("h2", {
              className: "jsx-2416903459",
              children: [" ", currentData.blog.titulo]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faStar"],
              className: "star-blog heartbeat cl-fuxia"
            })]
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(JoditEditor, {
            config: config,
            value: currentData.blog.contenido,
            name: "contenido" // onBlur={handleBlurAreaChange}

          })]
        })]
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2416903459",
      children: [".box-banner-blog.jsx-2416903459{height:25rem;background:url(../../image/blog/blog.png) no-repeat center;background-size:cover;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-top:5rem;}", ".text-title-blog.jsx-2416903459{font-family:\"Clicker Script\",cursive;font-size:2.5rem;margin:0rem 1rem 0rem;color:#fff;text-align:center;}", ".subtitle-dark-blog.jsx-2416903459{color:#575756;font-family:\"mont-regular\";font-size:1.7rem;text-align:center;margin:0rem 15rem;margin-bottom:-12rem;margin-top:3rem;}", ".box-card-group.jsx-2416903459{position:relative;top:16rem;z-index:10;}", ".box-green-blog.jsx-2416903459{position:relative;}", ".text-bottom-blog.jsx-2416903459{color:#abc0a3;font-family:\"mont-regular\";font-size:1.7rem;text-align:center;position:absolute;bottom:16%;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}", ".text-bottom-blog.jsx-2416903459 b.jsx-2416903459{font-family:\"mont-semibold\";}", ".font-mont-regular.jsx-2416903459{font-family:\"mont-regular\";}", ".box-blog-especifico.jsx-2416903459{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:4rem 9rem;font-family:\"mont-regular\" !important;}", ".box-autor-blog.jsx-2416903459{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:left;-webkit-justify-content:left;-ms-flex-pack:left;justify-content:left;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:7rem;width:20%;}", ".figure-autor-blog.jsx-2416903459{height:7rem;width:7rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:2px solid #ec668d;border-radius:50%;padding:1rem;}", ".box-autor-text-blog.jsx-2416903459{padding-left:1rem;}", ".box-articulo-blog.jsx-2416903459{width:80%;}", ".text-autor.jsx-2416903459{color:#575756;font-style:normal;font-weight:bold;font-size:1.2rem;font-family:\"mont-heavy\";}", ".text-fecha.jsx-2416903459{color:#556ea1;font-style:normal;font-weight:normal;font-size:1rem;}", ".box-articulo-title-blog.jsx-2416903459{padding:0rem 2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".box-articulo-title-blog.jsx-2416903459 h2.jsx-2416903459{font-family:\"mont-semibold\";font-style:normal;font-weight:bold;text-align:center;color:#575756;margin:2rem 0rem;}", ".star-blog.jsx-2416903459{color:#febf41;}", ".nube1.jsx-2416903459{position:absolute;top:70%;left:2%;}", ".nube2.jsx-2416903459{position:absolute;top:50%;right:2%;}", ".nube3.jsx-2416903459{position:absolute;top:140%;right:3%;}", ".box-articulo-img-principal-blog.jsx-2416903459{position:relative;z-index:2;}", ".jodit-container:not(.jodit_inline){border:none !important;}", ".box-blog-general.jsx-2416903459{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:3rem 9rem;font-family:\"mont-regular\";}", ".card-title.jsx-2416903459{font-family:\"mont-semibold\";}", ".card-text.jsx-2416903459{font-family:\"mont-light\";}", ".jodit.jsx-2416903459,.jodit.jsx-2416903459 *.jsx-2416903459,.jodit-container.jsx-2416903459,.jodit-container.jsx-2416903459 *.jsx-2416903459 span.jsx-2416903459{font-family:\"mont-regular\" !important;}", ".jodit-container * span{font-family:\"mont-regular\" !important;}", ".jodit-container p{margin-left:0px!important;}", ".jodit-status-bar{display:none !important;}", ".img-blog-especific.jsx-2416903459{width:50%;}", "@media (min-width:1800px){.box-blog-general.jsx-2416903459{padding:2rem 0rem;}.subtitle-dark-blog.jsx-2416903459{color:#575756;font-family:\"mont-semibold\";font-size:1.3rem;text-align:center;margin:0rem 20rem;margin-bottom:-12rem;margin-top:3rem;}.container.jsx-2416903459,.container-lg.jsx-2416903459,.container-md.jsx-2416903459,.container-sm.jsx-2416903459,.container-xl.jsx-2416903459{max-width:1600px !important;}.card-title.jsx-2416903459{font-size:1rem !important;}.card-text.jsx-2416903459{font-size:0.8rem;}.nube1.jsx-2416903459{top:50%;left:20%;}.nube2.jsx-2416903459{top:80%;right:15%;}.nube3.jsx-2416903459{top:140%;right:15%;}}", "@media (max-width:768px){.box-blog-especifico.jsx-2416903459{padding:1rem 1.5rem 3rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.box-autor-blog.jsx-2416903459{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:left;-webkit-justify-content:left;-ms-flex-pack:left;justify-content:left;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:7rem;width:100%;}.box-autor-text-blog.jsx-2416903459{padding-left:1rem;}.box-articulo-blog.jsx-2416903459{width:100%;}.text-autor.jsx-2416903459{font-size:1.1rem;margin-bottom:0 !important;}.text-fecha.jsx-2416903459{font-size:0.8rem;}.box-articulo-title-blog.jsx-2416903459 h2.jsx-2416903459{font-size:1.3rem;}.star-blog.jsx-2416903459{color:#febf41;font-size:1.2rem;}.nube1.jsx-2416903459{position:absolute;top:160%;left:-5%;}.nube2.jsx-2416903459{position:absolute;top:90%;right:1%;}.nube3.jsx-2416903459{position:absolute;top:350%;right:1%;}.box-banner-blog.jsx-2416903459{height:12rem;}.text-title-blog.jsx-2416903459{font-size:2rem;margin:0rem 0.5rem 0rem;}.ondas.jsx-2416903459{width:3rem;}.box-banner-blog.jsx-2416903459{height:12rem;}.text-title-blog.jsx-2416903459{font-family:\"Clicker Script\",cursive;font-size:2rem;}.subtitle-dark-blog.jsx-2416903459{font-size:1rem;text-align:center;margin:0rem;margin-bottom:0rem;margin-top:2rem;}.box-card-group.jsx-2416903459{position:relative;top:3rem;z-index:10;}.box-green-blog-img-fondo.jsx-2416903459{position:absolute;height:30rem;bottom:10%;}.text-bottom-blog.jsx-2416903459{font-size:1rem;padding-bottom:2rem;}.box-blog-general.jsx-2416903459{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:2rem 1.5rem 12rem;}.card-deck.jsx-2416903459{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column !important;-ms-flex-direction:column !important;flex-direction:column !important;}.img-blog-especific.jsx-2416903459{width:80%;}.figure-autor-blog.jsx-2416903459{height:5rem;width:5rem;}.box-articulo-title-blog.jsx-2416903459{padding:0rem 0rem;}}", "@media (max-width:420px){.nube1.jsx-2416903459{position:absolute;top:100%;left:-15%;}.nube2.jsx-2416903459{position:absolute;top:50%;right:1%;}.nube3.jsx-2416903459{position:absolute;right:1%;width:5rem;top:auto;bottom:-150%;}.img-blog-especific.jsx-2416903459{width:100%;}}"]
    })]
  });
}; // export async function getStaticPaths() {
//   // Call an external API endpoint to get posts
//   const res = await fetch(
//     "https://yesmom-backend.herokuapp.com/getBlogAll/user?limit=all"
//   );
//   const blogs = await res.json();
//   // Get the paths we want to pre-render based on posts
//   const paths = blogs.map((blog) => ({
//     params: { blog: String(blog.blog._id) },
//   }));
//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false };
// }


async function getServerSideProps(params) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const routerParams = params;
  let url = `${"https://yesmom-backend.herokuapp.com"}/getBlogParameters/admin?id=${routerParams.query.id}`;
  const res = await fetch(url);
  const currentData = await res.json();

  if (!currentData) {
    return {
      notFound: true
    };
  } // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time


  return {
    props: {
      currentData: currentData[0]
    }
  };
} // export async function getStaticProps({ params }) {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch(
//     `https://yesmom-backend.herokuapp.com/getBlog/${params.blog}`
//   );
//   const currentData = await res.json();
//   // By returning { props: posts }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       currentData: currentData[0],
//     },
//   };
// }

/* harmony default export */ __webpack_exports__["default"] = (CardBlogEspecific);

/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dQHF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("8OQS"));

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _toBase = __webpack_require__("7UUK");

var _imageConfig = __webpack_require__("ANQk");

var _useIntersection = __webpack_require__("vNVm");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default"} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout) {
  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set([width, width * 2, width * 3].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function callLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes
}) {
  if (unoptimized) {
    return {
      src
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout);
  const last = widths.length - 1;
  const srcSet = widths.map((w, i) => `${callLoader({
    src,
    quality,
    width: w
  })} ${kind === 'w' ? w : i + 1}${kind}`).join(', ');

  if (!sizes && kind === 'w') {
    sizes = '100vw';
  }

  src = callLoader({
    src,
    quality,
    width: widths[last]
  });
  return {
    src,
    sizes,
    srcSet
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (false) {}

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    visibility: isVisible ? 'visible' : 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (false) {}
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block'
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })));
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (false) {}

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "djS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/FormControl");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages, false);

          if (pages.includes(parsedHref.pathname)) {
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "lFrT":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Navbar");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "p8qk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__("JVe5");

// CONCATENATED MODULE: ./components/Footer.js









const Footer = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "jsx-3917458855" + " " + "footer",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Container"], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Row"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
            xs: 12,
            sm: 12,
            md: 4,
            lg: 4,
            xl: 4,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "jsx-3917458855" + " " + "padding-left text-left",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                className: "jsx-3917458855" + " " + "title-footer",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("b", {
                  className: "jsx-3917458855",
                  children: "CONTENIDO"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "jsx-3917458855" + " " + "box-contenido-footer",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: "/blog",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    className: "jsx-3917458855",
                    children: "Blog"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: "/construccion",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    className: "jsx-3917458855",
                    children: "Tienda"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: "/construccion",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    className: "jsx-3917458855",
                    children: "Regalos"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: "/nosotros",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    className: "jsx-3917458855",
                    children: "Sobre nosotros"
                  })
                })]
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
            xs: 12,
            sm: 12,
            md: 4,
            lg: 4,
            xl: 4,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "jsx-3917458855" + " " + "padding-left text-center",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                className: "jsx-3917458855" + " " + "title-footer",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("b", {
                  className: "jsx-3917458855",
                  children: "CONT\xC1CTANOS"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                className: "jsx-3917458855",
                children: "info@yesmom.com.pe"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                className: "jsx-3917458855",
                children: "+51987827855"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                className: "jsx-3917458855",
                children: "Calle Roma 316, Miraflores"
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Col"], {
            xs: 12,
            sm: 12,
            md: 4,
            lg: 4,
            xl: 4,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "jsx-3917458855" + " " + "padding-left text-center",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                className: "jsx-3917458855" + " " + "title-footer",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("b", {
                  className: "jsx-3917458855",
                  children: "S\xCDGUENOS"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                href: "https://www.facebook.com/Yes-Mom-Per%C3%BA-104308198182894",
                target: "blank",
                className: "jsx-3917458855" + " " + "icon-redes",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                  icon: free_brands_svg_icons_["faFacebookF"]
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                href: "https://www.instagram.com/yesmomperu/",
                target: "blank",
                className: "jsx-3917458855" + " " + "icon-redes",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                  icon: free_brands_svg_icons_["faInstagram"]
                })
              })]
            })
          })]
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(style_default.a, {
      id: "3917458855",
      children: [".footer.jsx-3917458855{background:#556ea1;background-image:url(\"../../image/trama-footer.svg\");color:#fff;background-position:top center;background-size:cover;padding:5rem 0;background-repeat:no-repeat;font-family:\"mont-regular\";}", ".box-contenido-footer.jsx-3917458855 a.jsx-3917458855{display:block;}", ".box-contenido-footer.jsx-3917458855{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".footer.jsx-3917458855 a.jsx-3917458855{color:#fff;-webkit-text-decoration:none;text-decoration:none;}", ".footer.jsx-3917458855 a.jsx-3917458855:hover{color:#ec608d;-webkit-text-decoration:none;text-decoration:none;font-weight:bolder;}", ".tilte-footer.jsx-3917458855{margin-bottom:1.5rem;}", ".icon-redes.jsx-3917458855{font-size:1.5rem;margin-right:0.7rem;margin-left:0.7rem;}", ".padding-left.jsx-3917458855{padding-left:6rem;}", ".title-footer.jsx-3917458855{font-family:\"mont-semibold\";}", "@media (min-width:1800px){.footer.jsx-3917458855{padding:2.5rem 0;}.footer.jsx-3917458855 .padding-left.jsx-3917458855{padding-left:0rem;}.title-footer.jsx-3917458855{margin-bottom:1rem;margin-top:1rem;font-size:0.8rem;}.footer.jsx-3917458855 .padding-left.jsx-3917458855 p.jsx-3917458855{margin-bottom:0.2rem;font-size:0.7rem;}}", "@media (max-width:769px){.footer.jsx-3917458855{background-image:url(\"../../image/trama-footer-responsive.svg\");background-position:top center;background-size:cover;padding:3rem 0;background-repeat:no-repeat;}.footer.jsx-3917458855 a.jsx-3917458855{color:#fff;-webkit-text-decoration:none;text-decoration:none;}.footer.jsx-3917458855 a.jsx-3917458855:hover{color:#000;-webkit-text-decoration:none;text-decoration:none;}.title-footer.jsx-3917458855{margin-bottom:0.5rem;margin-top:1rem;font-size:0.9rem;}.icon-redes.jsx-3917458855{font-size:1.6rem;margin-right:0.7rem;margin-left:0.7rem;margin-top:0.5rem;}.footer.jsx-3917458855 .padding-left.jsx-3917458855{padding-left:0rem;text-align:center !important;}.footer.jsx-3917458855 .padding-left.jsx-3917458855 p.jsx-3917458855{margin-bottom:0.4rem;font-size:0.8rem;}}", "@media (min-width:576px ) and (max-width:769px){.icon-redes.jsx-3917458855{font-size:1rem;}.footer.jsx-3917458855 .padding-left.jsx-3917458855 p.jsx-3917458855{font-size:0.65rem;}.title-footer.jsx-3917458855{font-size:0.75rem;}.footer.jsx-3917458855 a.jsx-3917458855{font-size:0.65rem;}}"]
    })]
  });
};

/* harmony default export */ var components_Footer = (Footer);
// EXTERNAL MODULE: external "react-bootstrap/Navbar"
var Navbar_ = __webpack_require__("lFrT");
var Navbar_default = /*#__PURE__*/__webpack_require__.n(Navbar_);

// EXTERNAL MODULE: external "react-bootstrap/Nav"
var Nav_ = __webpack_require__("6rvL");
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav_);

// EXTERNAL MODULE: external "react-bootstrap/Form"
var Form_ = __webpack_require__("2S/i");

// EXTERNAL MODULE: external "react-bootstrap/FormControl"
var FormControl_ = __webpack_require__("djS3");

// EXTERNAL MODULE: external "react-bootstrap/Button"
var Button_ = __webpack_require__("vVTy");

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__("Aiso");
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);

// CONCATENATED MODULE: ./components/Header.js












const Header = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "jsx-1160328448" + " " + "header-yesmom",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Navbar_default.a, {
        expand: "lg",
        className: " justify-content-between ",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Navbar_default.a.Toggle, {
          "aria-controls": "basic-navbar-nav",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
            src: "/image/header/burger.svg",
            alt: "burger yesmom",
            className: "burger-yesmom",
            width: 50,
            height: 50 // layout="intrinsic"

          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Navbar_default.a.Brand, {
          href: "/",
          className: "hover-efect",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
            src: "/image/header/logo-yesmom.svg",
            alt: "logo yesmom",
            className: "logo-yesmom",
            width: 70,
            height: 70 // layout="responsive"

          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "jsx-1160328448" + " " + "items-right-navBar",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Navbar_default.a.Collapse, {
            id: "basic-navbar-nav",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Nav_default.a, {
              className: "nav-items-collapse ",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/blog",
                className: "item-navbar hover-efect",
                activeClassName: "is-active",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                  className: "jsx-1160328448",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("figure", {
                    className: "jsx-1160328448" + " " + "item-menu ",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
                      src: "/image/header/blog.svg",
                      alt: "logo blog yesmom " //   className="lupa-img"
                      ,
                      width: 70,
                      height: 70
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                    className: "jsx-1160328448" + " " + "",
                    children: "Blog"
                  })]
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/pagina-en-construccion",
                className: "item-navbar hover-efect ",
                activeClassName: "is-active",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                  className: "jsx-1160328448",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("figure", {
                    className: "jsx-1160328448" + " " + "item-menu ",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
                      src: "/image/header/tienda.svg",
                      alt: "logo tienda yesmom" //   className="lupa-img"
                      ,
                      width: 70,
                      height: 70
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                    className: "jsx-1160328448",
                    children: "Tienda"
                  })]
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/pagina-en-construccion",
                className: "item-navbar hover-efect",
                activeClassName: "is-active",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                  className: "jsx-1160328448",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("figure", {
                    className: "jsx-1160328448" + " " + "item-menu",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
                      src: "/image/header/regalo.svg",
                      alt: "logo regalo yesmom" //   className="lupa-img"
                      ,
                      width: 70,
                      height: 70
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                    className: "jsx-1160328448",
                    children: "Regalos"
                  })]
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/pagina-en-construccion",
                className: "item-navbar hover-efect",
                activeClassName: "is-active",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                  className: "jsx-1160328448",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("figure", {
                    className: "jsx-1160328448" + " " + "item-menu",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
                      src: "/image/header/iniciar-sesion.svg",
                      alt: "logo iniciar sesi\xF3n yesmom" //   className="lupa-img"
                      ,
                      width: 70,
                      height: 70
                    })
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                    className: "jsx-1160328448",
                    children: "Login"
                  })]
                })
              })]
            })
          })
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(style_default.a, {
      id: "1160328448",
      children: [".header-yesmom.jsx-1160328448{padding:0rem 5rem !important;background:#fff;z-index:99;width:100%;}", ".items-right-navBar.jsx-1160328448{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}", ".jsx-1465798883.jsx-1160328448{margin-right:3rem;}", ".logo-yesmom.jsx-1160328448{width:5rem;}", ".item-navbar.jsx-1160328448{display:-webkit-box !important;display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:\"Montserrat\",sans-serif;margin:0rem 0.5rem;-webkit-text-decoration:none;text-decoration:none;}", ".item-menu.jsx-1160328448{width:1.6rem;height:1.6rem;margin:0 0 0.5rem !important;}", ".item-menu.jsx-1160328448 img.jsx-1160328448{width:100%;height:100%;}", ".input-search.jsx-1160328448{border:none !important;border-bottom:1px solid #000 !important;border-radius:0 !important;}", ".nav-items-collapse.jsx-1160328448{margin-left:auto;}", ".ml-form-search.jsx-1160328448{margin-left:auto;}", ".lupa-img.jsx-1160328448{width:1.8rem;}", "@-webkit-keyframes animateHeart-jsx-1160328448{0%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}40%{-webkit-transform:scale(1.09);-ms-transform:scale(1.09);transform:scale(1.09);}100%{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}}", "@keyframes animateHeart-jsx-1160328448{0%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}40%{-webkit-transform:scale(1.09);-ms-transform:scale(1.09);transform:scale(1.09);}100%{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}}", ".item-navbar.jsx-1160328448 h6.jsx-1160328448{color:#616160;-webkit-text-decoration:none;text-decoration:none;}", ".item-navbar.jsx-1160328448 h6.jsx-1160328448:hover{-webkit-text-decoration:none !important;text-decoration:none !important;}", ".item-navbar.jsx-1160328448:link,.item-navbar.jsx-1160328448:visited,.item-navbar.jsx-1160328448:active{-webkit-text-decoration:none;text-decoration:none;}", ".is-active.jsx-1160328448 h6.jsx-1160328448{font-weight:800;}", ".hover-efect.jsx-1160328448{-webkit-animation:animateHeart-jsx-1160328448 0.3s linear forwards !important;animation:animateHeart-jsx-1160328448 0.3s linear forwards !important;cursor:pointer;}", ".hover-efect.jsx-1160328448:hover,.hover-efect.jsx-1160328448:focus{-webkit-transform:scale(1.2) !important;-ms-transform:scale(1.2) !important;transform:scale(1.2) !important;}", "@media (min-width:1800px){.logo-yesmom.jsx-1160328448{width:3.5rem;}.item-menu.jsx-1160328448{width:1.3rem;height:1.3rem;}.item-navbar.jsx-1160328448 h6.jsx-1160328448{font-size:0.8rem;}.lupa-img.jsx-1160328448{width:1.3rem;}.form-control.jsx-1160328448{padding:0.3rem 0.75rem !important;font-size:0.8rem !important;}.navbar.jsx-1160328448{padding:0.5rem 5rem !important;}}", "@media (max-width:991px){.logo-yesmom.jsx-1160328448{width:3rem;}.burger-yesmom.jsx-1160328448{width:2rem;}.navbar.jsx-1160328448{padding:1rem !important;}.navbar-toggler.jsx-1160328448{border:none !important;}.navbar-collapse.jsx-1160328448{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}.nav-items-collapse.jsx-1160328448{padding-left:5rem;width:100%;}.nav-items-collapse.jsx-1160328448 img.jsx-1160328448{display:none;}.nav-link.jsx-1160328448{padding:0rem 1rem !important;}.form-inline.jsx-1160328448{-webkit-flex-flow:initial !important;-ms-flex-flow:initial !important;flex-flow:initial !important;padding-top:2rem;padding-bottom:1rem !important;}.ml-form-search.jsx-1160328448{margin-left:0;}.item-navbar.jsx-1160328448{-webkit-align-items:flex-start !important;-webkit-box-align:flex-start !important;-ms-flex-align:flex-start !important;align-items:flex-start !important;}.lupa-img.jsx-1160328448{width:1.5rem;}.item-navbar.jsx-1160328448 h6.jsx-1160328448{font-size:1.1rem;}a.item-navbar.nav-link.jsx-1160328448{border-bottom:0.5px solid #575756;}.navbar.jsx-1160328448{position:fixed !important;width:100%;}}"]
    })]
  });
};

/* harmony default export */ var components_Header = (Header);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/ActiveLink.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ActiveLink = (_ref) => {
  let {
    router,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["router", "children"]);

  const child = external_react_["Children"].only(children);
  let className = child.props.className || '';

  if (router.pathname === props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/external_react_default.a.cloneElement(child, {
      className
    })
  }));
};

/* harmony default export */ var components_ActiveLink = (Object(router_["withRouter"])(ActiveLink));
// CONCATENATED MODULE: ./components/HeaderNuevo.js









const HeaderNuevo = () => {
  const {
    0: active,
    1: setActive
  } = Object(external_react_["useState"])(false);
  const router = Object(router_["useRouter"])();

  const handleClick = () => {
    console.log("click", active);
    setActive(!active);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "jsx-1002078918" + " " + "box-yesmom",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("nav", {
      className: "jsx-1002078918" + " " + "navbar-yesmom",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        onClick: handleClick,
        className: "jsx-1002078918" + " " + "burger-yesmom",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
          src: "/image/header/burger.svg",
          alt: "burger yesmom",
          width: 40,
          height: 40 // layout="intrinsic"

        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/",
        prefetch: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: "jsx-1002078918" + " " + "mr-2 logo-yesmom",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
            src: "/image/header/logo-yesmom.svg",
            alt: "logo yesmom",
            width: 60,
            height: 60
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "jsx-1002078918" + " " + `${active ? "" : "box-items-menu-desktop"} box-items-menu`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "jsx-1002078918" + " " + "box-items-menu-responsive",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(components_ActiveLink, {
            href: "/blog",
            activeClassName: "active",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
              className: "jsx-1002078918" + " " + "item-menu-yesmom",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
                src: "/image/header/blog.svg",
                alt: "logo blog yesmom ",
                width: 22,
                height: 22
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                className: "jsx-1002078918" + " " + "text-navbar",
                children: "Blog"
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_ActiveLink, {
            href: "/construccion",
            activeClassName: "active",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
              className: "jsx-1002078918" + " " + "item-menu-yesmom",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
                src: "/image/header/tienda.svg",
                alt: "logo tienda yesmom ",
                width: 23,
                height: 23
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                className: "jsx-1002078918" + " " + "text-navbar",
                children: "Tienda"
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_ActiveLink, {
            href: "/construccion",
            activeClassName: "active",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
              className: "jsx-1002078918" + " " + "item-menu-yesmom",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
                src: "/image/header/regalo.svg",
                alt: "logo regalo yesmom ",
                width: 22,
                height: 22
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                className: "jsx-1002078918" + " " + "text-navbar",
                children: "Regalos"
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_ActiveLink, {
            href: "/construccion",
            activeClassName: "active",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
              className: "jsx-1002078918" + " " + "item-menu-yesmom",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
                src: "/image/header/iniciar-sesion.svg",
                alt: "logo blog yesmom ",
                width: 22,
                height: 22
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h6", {
                className: "jsx-1002078918" + " " + "text-navbar",
                children: "Login"
              })]
            })
          })]
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(style_default.a, {
      id: "1002078918",
      children: [".active.jsx-1002078918 .text-navbar.jsx-1002078918{color:#ec608d !important;-webkit-text-decoration:none !important;text-decoration:none !important;}", ".navbar-yesmom.jsx-1002078918{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:0.3rem 4rem;background:#fff;position:fixed;z-index:9999;width:inherit;max-width:inherit;box-shadow:0px 1px 10px #999;}", ".burger-yesmom.jsx-1002078918{margin-right:auto;display:none;}", ".item-menu-yesmom.jsx-1002078918{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0rem 0.5rem;color:#616160;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}", ".logo-yesmom.jsx-1002078918:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-animation:animateHeart-jsx-1002078918 0.3s linear forwards !important;animation:animateHeart-jsx-1002078918 0.3s linear forwards !important;}", "@-webkit-keyframes animateHeart-jsx-1002078918{0%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}40%{-webkit-transform:scale(1.09);-ms-transform:scale(1.09);transform:scale(1.09);}100%{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}}", "@keyframes animateHeart-jsx-1002078918{0%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}40%{-webkit-transform:scale(1.09);-ms-transform:scale(1.09);transform:scale(1.09);}100%{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}}", ".item-menu-yesmom.jsx-1002078918:hover{-webkit-text-decoration:none !important;text-decoration:none !important;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-animation:animateHeart-jsx-1002078918 0.3s linear forwards !important;animation:animateHeart-jsx-1002078918 0.3s linear forwards !important;}", ".text-navbar.jsx-1002078918{font-family:\"mont-semibold\";}", ".box-items-menu-responsive.jsx-1002078918{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}", ".box-items-menu.jsx-1002078918{margin-left:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".box-items-menu-desktop.jsx-1002078918{display:block;}", "@media (max-width:992px){.burger-yesmom.jsx-1002078918{display:block;}.navbar-yesmom.jsx-1002078918{padding:0.5rem 1rem;}.box-items-menu-responsive.jsx-1002078918{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.box-items-menu.jsx-1002078918{width:100%;}.item-menu-yesmom.jsx-1002078918{margin:0.5rem 1rem;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.box-items-menu-desktop.jsx-1002078918{display:none;}.text-navbar.jsx-1002078918{margin:0;margin-left:0.5rem;}}"]
    })]
  });
};

/* harmony default export */ var components_HeaderNuevo = (HeaderNuevo);
// CONCATENATED MODULE: ./components/AppLayout/index.js









const appLayout = ({
  children
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "jsx-980780853" + " " + "box-yesmom",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        className: "jsx-980780853",
        children: "yesmom"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "description",
        content: "esto es descripcion",
        className: "jsx-980780853"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_HeaderNuevo, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("main", {
      className: "jsx-980780853",
      children: children
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Footer, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(style_default.a, {
      id: "980780853",
      children: ["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&display=swap\");", "@import url(\"https://fonts.googleapis.com/css2?family=Clicker+Script&display=swap\");", "@font-face{font-family:\"mont-heavy\";src:url(fonts/Mont-Heavy.otf);}", "@font-face{font-family:\"omnes-bold\";src:url(fonts/OMNES-BOLD.OTF);}", "@font-face{font-family:\"omnes-regular\";src:url(fonts/Omnes-Regular.otf);}", "@font-face{font-family:\"mont-heavy\";src:url(fonts/Mont-Heavy.otf);}", "@font-face{font-family:\"mont-thin\";src:url(fonts/Mont-Thin.otf);}", "@font-face{font-family:\"mont-regular\";src:url(fonts/Mont-Regular.otf);}", "@font-face{font-family:\"mont-semibold\";src:url(fonts/Mont-SemiBold.otf);}", "@font-face{font-family:\"mont-light\";src:url(fonts/Mont-Light.otf);}", "html{font-size:0.98vw !important;font-family:\"mont-heavy\";}", "body{margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",\"Roboto\", \"Oxygen\",\"Ubuntu\",\"Cantarell\",\"Fira Sans\",\"Droid Sans\", \"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}", "code{font-family:source-code-pro,Menlo,Monaco,Consolas,\"Courier New\", monospace;}", ".mt-views{padding-top:0rem;}", ".w-80{width:80%;}", ".w-90{width:90%;}", ".sin-margin{margin-left:0px !important;margin-right:0px !important;}", ".pl-10{padding-left:6rem;}", ".title-fuxia{color:#ec608d;font-weight:1000;font-size:2.4rem;font-family:\"mont-heavy\";padding:0 1rem;text-align:center;}", ".cl-fuxia{color:#ec608d;}", ".subtitle-dark{color:#575756;font-family:\"mont-regular\";font-size:2rem;}", ".btn-yellow{background-color:#febf41;font-family:\"omnes-bold\";font-weight:900;font-size:1.4rem;color:#fff;padding:1.5rem 0rem;margin:2rem auto;width:13rem;border-radius:30px;text-align:center;line-height:1.3rem;display:block;cursor:pointer;}", ".btn-yellow a{color:#fff !important;}", ".bg-fuxia{background:#ec608d !important;}", ".bg-verde{background-color:#c9dbc3 !important;}", ".bg-azul{background:#4b64a4 !important;}", ".bg-yellow{background-color:#febf41 !important;}", ".bg-gray{background-color:#575650 !important;}", ".box-yesmom{max-width:1800px;width:100%;margin:auto;}", ".link-a{color:#575756 !important;font-family:\"mont-regular\";font-size:1.1rem;-webkit-text-decoration:none !important;text-decoration:none !important;}", ".link-a b{font-family:\"mont-heavy\";}", ".view-desktop{display:block;}", ".view-mobile{display:none;}", ".btn-efect{cursor:pointer;display:block;position:relative;}", ".btn-efect,.btn-efect::after{-webkit-transition:all 0.3s;-moz-transition:all 0.3s;-o-transition:all 0.3s;-webkit-transition:all 0.3s;transition:all 0.3s;}", ".btn-efect::before,.btn-efect::after{background-color:#fff !important;content:\"\" !important;position:absolute;z-index:-1;}", ".btn-efect:hover{color:#ec608d;font-weight:400;background-color:#fff !important;}", ".btn-efect::after{height:100%;left:0;top:0;width:0;}", ".btn-efect:hover:after{width:100%;}", ".hover-fuxia{color:#fff !important;-webkit-transition:all 0.5s;transition:all 0.5s;position:relative;-webkit-text-decoration:none !important;text-decoration:none !important;cursor:pointer;}", ".hover-fuxia::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;z-index:999;background-color:rgba(214,211,211,0.1);-webkit-transition:all 0.3s;transition:all 0.3s;}", ".hover-fuxia:hover::before{opacity:0;-webkit-transform:scale(0.5,0.5);-ms-transform:scale(0.5,0.5);transform:scale(0.5,0.5);}", ".hover-fuxia::after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;z-index:6;opacity:0;-webkit-transition:all 0.3s;transition:all 0.3s;border:1px solid #ec608d;-webkit-transform:scale(1.2,1.2);-ms-transform:scale(1.2,1.2);transform:scale(1.2,1.2);border-radius:30px;}", ".hover-fuxia:hover::after{opacity:1;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);}", ".hover-amarillo{color:#fff !important;-webkit-transition:all 0.7s;transition:all 0.7s;position:relative;-webkit-text-decoration:none !important;text-decoration:none !important;cursor:pointer;}", ".hover-amarillo::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;z-index:999;background-color:rgba(214,211,211,0.1);-webkit-transition:all 0.3s;transition:all 0.3s;}", ".hover-amarillo:hover::before{opacity:0;-webkit-transform:scale(0.7,0.7);-ms-transform:scale(0.7,0.7);transform:scale(0.7,0.7);}", ".hover-amarillo::after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;z-index:6;opacity:0;-webkit-transition:all 0.3s;transition:all 0.3s;border:1px solid #febf41;-webkit-transform:scale(1.3,1.3);-ms-transform:scale(1.3,1.3);transform:scale(1.3,1.3);border-radius:30px;}", ".hover-amarillo:hover::after{opacity:1;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);}", ".hover-verde{color:#fff !important;-webkit-transition:all 0.7s;transition:all 0.7s;position:relative;-webkit-text-decoration:none !important;text-decoration:none !important;cursor:pointer;}", ".hover-verde::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;z-index:999;background-color:rgba(214,211,211,0.1);-webkit-transition:all 0.3s;transition:all 0.3s;}", ".hover-verde:hover::before{opacity:0;-webkit-transform:scale(0.7,0.7);-ms-transform:scale(0.7,0.7);transform:scale(0.7,0.7);}", ".hover-verde::after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;z-index:6;opacity:0;-webkit-transition:all 0.3s;transition:all 0.3s;border:1px solid #c9dbc3;-webkit-transform:scale(1.3,1.3);-ms-transform:scale(1.3,1.3);transform:scale(1.3,1.3);border-radius:30px;}", ".hover-verde:hover::after{opacity:1;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);}", ".hover-azul{color:#fff !important;-webkit-transition:all 0.7s;transition:all 0.7s;position:relative;-webkit-text-decoration:none !important;text-decoration:none !important;cursor:pointer;}", ".hover-azul::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;z-index:999;background-color:rgba(214,211,211,0.1);-webkit-transition:all 0.3s;transition:all 0.3s;}", ".hover-azul:hover::before{opacity:0;-webkit-transform:scale(0.7,0.7);-ms-transform:scale(0.7,0.7);transform:scale(0.7,0.7);}", ".hover-azul::after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;z-index:6;opacity:0;-webkit-transition:all 0.3s;transition:all 0.3s;border:1px solid #4b64a4;-webkit-transform:scale(1.3,1.3);-ms-transform:scale(1.3,1.3);transform:scale(1.3,1.3);border-radius:30px;}", ".hover-azul:hover::after{opacity:1;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);}", ".hover-efect-letter{-webkit-text-decoration:none;text-decoration:none;position:relative;-webkit-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;cursor:pointer;}", ".hover-efect-letter:before,.hover-efect-letter:after{content:\"\";position:absolute;-webkit-transition:all 250ms ease-in-out;transition:all 250ms ease-in-out;pointer-events:none;}", ".hover-efect-letter:after{width:100%;height:1px;background:#575756;left:0;bottom:-5px;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}", ".hover-efect-letter:hover:after{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}", "@media (min-width:1800px){.subtitle-dark{font-size:1.2rem;}}", "@media (max-width:768px){html{font-size:4.6vw !important;}.view-desktop{display:none;}.view-mobile{display:block;}.mt-views{padding-top:5.5rem;}.title-fuxia{font-size:1.2rem;}.subtitle-dark{font-size:1rem;}.btn-yellow{font-size:1rem;padding:1.2rem 0rem;width:10rem;}.link-a{font-size:0.8rem;}}", ".heartbeat{-webkit-animation:heartbeat 1.5s ease-in-out infinite both;-webkit-animation:heartbeat 1.5s ease-in-out infinite both;animation:heartbeat 1.5s ease-in-out infinite both;}", "@-webkit-keyframes heartbeat{from{-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transform-origin:center center;-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}10%{-webkit-transform:scale(0.91);-webkit-transform:scale(0.91);-ms-transform:scale(0.91);transform:scale(0.91);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}17%{-webkit-transform:scale(0.98);-webkit-transform:scale(0.98);-ms-transform:scale(0.98);transform:scale(0.98);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}33%{-webkit-transform:scale(0.87);-webkit-transform:scale(0.87);-ms-transform:scale(0.87);transform:scale(0.87);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}45%{-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}}", "@-webkit-keyframes heartbeat{from{-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transform-origin:center center;-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}10%{-webkit-transform:scale(0.91);-webkit-transform:scale(0.91);-ms-transform:scale(0.91);transform:scale(0.91);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}17%{-webkit-transform:scale(0.98);-webkit-transform:scale(0.98);-ms-transform:scale(0.98);transform:scale(0.98);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}33%{-webkit-transform:scale(0.87);-webkit-transform:scale(0.87);-ms-transform:scale(0.87);transform:scale(0.87);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}45%{-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}}", "@keyframes heartbeat{from{-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transform-origin:center center;-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}10%{-webkit-transform:scale(0.91);-webkit-transform:scale(0.91);-ms-transform:scale(0.91);transform:scale(0.91);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}17%{-webkit-transform:scale(0.98);-webkit-transform:scale(0.98);-ms-transform:scale(0.98);transform:scale(0.98);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}33%{-webkit-transform:scale(0.87);-webkit-transform:scale(0.87);-ms-transform:scale(0.87);transform:scale(0.87);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}45%{-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}}", ".flicker-1{-webkit-animation:flicker-1 2s linear infinite both;-webkit-animation:flicker-1 2s linear infinite both;animation:flicker-1 2s linear infinite both;}", ".fade-in{-webkit-animation:fade-in 1.2s cubic-bezier(0.39,0.575,0.565,1) both;-webkit-animation:fade-in 1.2s cubic-bezier(0.39,0.575,0.565,1) both;animation:fade-in 1.2s cubic-bezier(0.39,0.575,0.565,1) both;}", "@-webkit-keyframes fade-in{0%{opacity:0;}100%{opacity:1;}}", "@-webkit-keyframes fade-in{0%{opacity:0;}100%{opacity:1;}}", "@keyframes fade-in{0%{opacity:0;}100%{opacity:1;}}", ".animated{-webkit-animation-duration:3s;-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-fill-mode:both;-webkit-animation-fill-mode:both;animation-fill-mode:both;}", ".tilt-in-fwd-tr{-webkit-animation:tilt-in-fwd-tr 0.6s cubic-bezier(0.25,0.46,0.45,0.94) both;-webkit-animation:tilt-in-fwd-tr 0.6s cubic-bezier(0.25,0.46,0.45,0.94) both;animation:tilt-in-fwd-tr 0.6s cubic-bezier(0.25,0.46,0.45,0.94) both;}", "@-webkit-keyframes tilt-in-fwd-tr{0%{-webkit-transform:rotateY(20deg) rotateX(35deg) translate(300px,-300px) skew(-35deg,10deg);-webkit-transform:rotateY(20deg) rotateX(35deg) translate(300px,-300px) skew(-35deg,10deg);-ms-transform:rotateY(20deg) rotateX(35deg) translate(300px,-300px) skew(-35deg,10deg);transform:rotateY(20deg) rotateX(35deg) translate(300px,-300px) skew(-35deg,10deg);opacity:0;}100%{-webkit-transform:rotateY(0) rotateX(0deg) translate(0,0) skew(0deg,0deg);-webkit-transform:rotateY(0) rotateX(0deg) translate(0,0) skew(0deg,0deg);-ms-transform:rotateY(0) rotateX(0deg) translate(0,0) skew(0deg,0deg);transform:rotateY(0) rotateX(0deg) translate(0,0) skew(0deg,0deg);opacity:1;}}", "@-webkit-keyframes tilt-in-fwd-tr{0%{-webkit-transform:rotateY(20deg) rotateX(35deg) translate(300px,-300px) skew(-35deg,10deg);-webkit-transform:rotateY(20deg) rotateX(35deg) translate(300px,-300px) skew(-35deg,10deg);-ms-transform:rotateY(20deg) rotateX(35deg) translate(300px,-300px) skew(-35deg,10deg);transform:rotateY(20deg) rotateX(35deg) translate(300px,-300px) skew(-35deg,10deg);opacity:0;}100%{-webkit-transform:rotateY(0) rotateX(0deg) translate(0,0) skew(0deg,0deg);-webkit-transform:rotateY(0) rotateX(0deg) translate(0,0) skew(0deg,0deg);-ms-transform:rotateY(0) rotateX(0deg) translate(0,0) skew(0deg,0deg);transform:rotateY(0) rotateX(0deg) translate(0,0) skew(0deg,0deg);opacity:1;}}", "@keyframes tilt-in-fwd-tr{0%{-webkit-transform:rotateY(20deg) rotateX(35deg) translate(300px,-300px) skew(-35deg,10deg);-webkit-transform:rotateY(20deg) rotateX(35deg) translate(300px,-300px) skew(-35deg,10deg);-ms-transform:rotateY(20deg) rotateX(35deg) translate(300px,-300px) skew(-35deg,10deg);transform:rotateY(20deg) rotateX(35deg) translate(300px,-300px) skew(-35deg,10deg);opacity:0;}100%{-webkit-transform:rotateY(0) rotateX(0deg) translate(0,0) skew(0deg,0deg);-webkit-transform:rotateY(0) rotateX(0deg) translate(0,0) skew(0deg,0deg);-ms-transform:rotateY(0) rotateX(0deg) translate(0,0) skew(0deg,0deg);transform:rotateY(0) rotateX(0deg) translate(0,0) skew(0deg,0deg);opacity:1;}}", ".kenburns-top{-webkit-animation:kenburns-top 5s ease-out both;-webkit-animation:kenburns-top 5s ease-out both;animation:kenburns-top 5s ease-out both;}", "@-webkit-keyframes kenburns-top{0%{-webkit-transform:scale(1) translateY(0);-webkit-transform:scale(1) translateY(0);-ms-transform:scale(1) translateY(0);transform:scale(1) translateY(0);-webkit-transform-origin:50% 16%;-webkit-transform-origin:50% 16%;-ms-transform-origin:50% 16%;transform-origin:50% 16%;}100%{-webkit-transform:scale(1.25) translateY(-15px);-webkit-transform:scale(1.25) translateY(-15px);-ms-transform:scale(1.25) translateY(-15px);transform:scale(1.25) translateY(-15px);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;}}", "@-webkit-keyframes kenburns-top{0%{-webkit-transform:scale(1) translateY(0);-webkit-transform:scale(1) translateY(0);-ms-transform:scale(1) translateY(0);transform:scale(1) translateY(0);-webkit-transform-origin:50% 16%;-webkit-transform-origin:50% 16%;-ms-transform-origin:50% 16%;transform-origin:50% 16%;}100%{-webkit-transform:scale(1.25) translateY(-15px);-webkit-transform:scale(1.25) translateY(-15px);-ms-transform:scale(1.25) translateY(-15px);transform:scale(1.25) translateY(-15px);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;}}", "@keyframes kenburns-top{0%{-webkit-transform:scale(1) translateY(0);-webkit-transform:scale(1) translateY(0);-ms-transform:scale(1) translateY(0);transform:scale(1) translateY(0);-webkit-transform-origin:50% 16%;-webkit-transform-origin:50% 16%;-ms-transform-origin:50% 16%;transform-origin:50% 16%;}100%{-webkit-transform:scale(1.25) translateY(-15px);-webkit-transform:scale(1.25) translateY(-15px);-ms-transform:scale(1.25) translateY(-15px);transform:scale(1.25) translateY(-15px);-webkit-transform-origin:top;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;}}"]
    })]
  });
};

/* harmony default export */ var AppLayout = __webpack_exports__["a"] = (appLayout);

/***/ }),

/***/ "pVnL":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "rf5E":
/***/ (function(module, exports) {

module.exports = require("jodit-react");

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "vVTy":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });