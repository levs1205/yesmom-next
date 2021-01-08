module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/blog/[blog]": 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/blog/[blog].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "./components/AppLayout/index.js":
/*!***************************************!*\
  !*** ./components/AppLayout/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../Footer */ "./components/Footer.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../Header */ "./components/Header.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\jcqui\\OneDrive\\Escritorio\\henri_barrett\\yes-mom\\yesmom_next\\components\\AppLayout\\index.js";






const appLayout = ({
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "jsx-3742237413" + " " + "box-yesmom",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        className: "jsx-3742237413",
        children: "yesmom"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/flatly/bootstrap.min.css",
        className: "jsx-3742237413"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "esto es descripcion",
        className: "jsx-3742237413"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: "jsx-3742237413",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3742237413",
      children: "@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&display=swap\");@import url(\"https://fonts.googleapis.com/css2?family=Clicker+Script&display=swap\");@font-face{font-family:\"mont-heavy\";src:url(fonts/Mont-Heavy.otf);}@font-face{font-family:\"omnes-bold\";src:url(fonts/OMNES-BOLD.OTF);}@font-face{font-family:\"omnes-regular\";src:url(fonts/Omnes-Regular.otf);}@font-face{font-family:\"mont-heavy\";src:url(fonts/Mont-Heavy.otf);}@font-face{font-family:\"mont-thin\";src:url(fonts/Mont-Thin.otf);}@font-face{font-family:\"mont-regular\";src:url(fonts/Mont-Regular.otf);}@font-face{font-family:\"mont-semibold\";src:url(fonts/Mont-SemiBold.otf);}@font-face{font-family:\"mont-light\";src:url(fonts/Mont-Light.otf);}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",\"Roboto\", \"Oxygen\",\"Ubuntu\",\"Cantarell\",\"Fira Sans\",\"Droid Sans\", \"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}code{font-family:source-code-pro,Menlo,Monaco,Consolas,\"Courier New\", monospace;}html{font-size:0.98vw !important;font-family:\"mont-heavy\";}.mt-views{padding-top:0rem;}.w-80{width:80%;}.w-90{width:90%;}.sin-margin{margin-left:0px !important;margin-right:0px !important;}.pl-10{padding-left:6rem;}.title-fuxia{color:#ec608d;font-weight:1000;font-size:2.4rem;font-family:\"mont-heavy\";padding:0 1rem;text-align:center;}.subtitle-dark{color:#575756;font-family:\"mont-regular\";font-size:2rem;}.btn-yellow{background-color:#febf41;font-family:\"omnes-bold\";font-weight:900;font-size:1.4rem;color:#fff;padding:1.5rem 0rem;margin:2rem auto;width:13rem;border-radius:30px;text-align:center;line-height:1.3rem;display:block;}.bg-fuxia{background:#ec608d !important;}.bg-verde{background-color:#c9dbc3 !important;}.bg-azul{background:#4b64a4 !important;}.bg-yellow{background-color:#febf41 !important;}.bg-gray{background-color:#575650 !important;}.box-yesmom{max-width:1800px;width:100%;margin:auto;}.link-a{color:#575756 !important;font-family:\"mont-regular\";font-size:1.1rem;-webkit-text-decoration:none !important;text-decoration:none !important;}.link-a b{font-family:\"mont-heavy\";}.view-desktop{display:block;}.view-mobile{display:none;}.btn-efect{cursor:pointer;display:block;position:relative;}.btn-efect,.btn-efect::after{-webkit-transition:all 0.3s;-moz-transition:all 0.3s;-o-transition:all 0.3s;-webkit-transition:all 0.3s;transition:all 0.3s;}.btn-efect::before,.btn-efect::after{background-color:#fff !important;content:\"\" !important;position:absolute;z-index:-1;}.btn-efect:hover{color:#ec608d;font-weight:400;background-color:#fff !important;}.btn-efect::after{height:100%;left:0;top:0;width:0;}.btn-efect:hover:after{width:100%;}.hover-fuxia{color:#fff !important;-webkit-transition:all 0.5s;transition:all 0.5s;position:relative;-webkit-text-decoration:none !important;text-decoration:none !important;cursor:pointer;}.hover-fuxia::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;z-index:999;background-color:rgba(214,211,211,0.1);-webkit-transition:all 0.3s;transition:all 0.3s;}.hover-fuxia:hover::before{opacity:0;-webkit-transform:scale(0.5,0.5);-ms-transform:scale(0.5,0.5);transform:scale(0.5,0.5);}.hover-fuxia::after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;z-index:6;opacity:0;-webkit-transition:all 0.3s;transition:all 0.3s;border:1px solid #ec608d;-webkit-transform:scale(1.2,1.2);-ms-transform:scale(1.2,1.2);transform:scale(1.2,1.2);border-radius:30px;}.hover-fuxia:hover::after{opacity:1;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);}.hover-amarillo{color:#fff !important;-webkit-transition:all 0.7s;transition:all 0.7s;position:relative;-webkit-text-decoration:none !important;text-decoration:none !important;cursor:pointer;}.hover-amarillo::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;z-index:999;background-color:rgba(214,211,211,0.1);-webkit-transition:all 0.3s;transition:all 0.3s;}.hover-amarillo:hover::before{opacity:0;-webkit-transform:scale(0.7,0.7);-ms-transform:scale(0.7,0.7);transform:scale(0.7,0.7);}.hover-amarillo::after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;z-index:6;opacity:0;-webkit-transition:all 0.3s;transition:all 0.3s;border:1px solid #febf41;-webkit-transform:scale(1.3,1.3);-ms-transform:scale(1.3,1.3);transform:scale(1.3,1.3);border-radius:30px;}.hover-amarillo:hover::after{opacity:1;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);}.hover-verde{color:#fff !important;-webkit-transition:all 0.7s;transition:all 0.7s;position:relative;-webkit-text-decoration:none !important;text-decoration:none !important;cursor:pointer;}.hover-verde::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;z-index:999;background-color:rgba(214,211,211,0.1);-webkit-transition:all 0.3s;transition:all 0.3s;}.hover-verde:hover::before{opacity:0;-webkit-transform:scale(0.7,0.7);-ms-transform:scale(0.7,0.7);transform:scale(0.7,0.7);}.hover-verde::after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;z-index:6;opacity:0;-webkit-transition:all 0.3s;transition:all 0.3s;border:1px solid #c9dbc3;-webkit-transform:scale(1.3,1.3);-ms-transform:scale(1.3,1.3);transform:scale(1.3,1.3);border-radius:30px;}.hover-verde:hover::after{opacity:1;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);}.hover-azul{color:#fff !important;-webkit-transition:all 0.7s;transition:all 0.7s;position:relative;-webkit-text-decoration:none !important;text-decoration:none !important;cursor:pointer;}.hover-azul::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;z-index:999;background-color:rgba(214,211,211,0.1);-webkit-transition:all 0.3s;transition:all 0.3s;}.hover-azul:hover::before{opacity:0;-webkit-transform:scale(0.7,0.7);-ms-transform:scale(0.7,0.7);transform:scale(0.7,0.7);}.hover-azul::after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;z-index:6;opacity:0;-webkit-transition:all 0.3s;transition:all 0.3s;border:1px solid #4b64a4;-webkit-transform:scale(1.3,1.3);-ms-transform:scale(1.3,1.3);transform:scale(1.3,1.3);border-radius:30px;}.hover-azul:hover::after{opacity:1;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);}.hover-efect-letter{-webkit-text-decoration:none;text-decoration:none;position:relative;-webkit-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;cursor:pointer;}.hover-efect-letter:before,.hover-efect-letter:after{content:\"\";position:absolute;-webkit-transition:all 250ms ease-in-out;transition:all 250ms ease-in-out;pointer-events:none;}.hover-efect-letter:after{width:100%;height:1px;background:#575756;left:0;bottom:-5px;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}.hover-efect-letter:hover:after{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}@media (max-width:769px){html{font-size:4.6vw !important;}.view-desktop{display:none;}.view-mobile{display:block;}.mt-views{padding-top:5.5rem;}.title-fuxia{font-size:1.2rem;}.subtitle-dark{font-size:1rem;}.btn-yellow{font-size:1rem;padding:1.2rem 0rem;width:10rem;}}.heartbeat{-webkit-animation:heartbeat 1.5s ease-in-out infinite both;-webkit-animation:heartbeat 1.5s ease-in-out infinite both;animation:heartbeat 1.5s ease-in-out infinite both;}@-webkit-keyframes heartbeat{from{-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transform-origin:center center;-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}10%{-webkit-transform:scale(0.91);-webkit-transform:scale(0.91);-ms-transform:scale(0.91);transform:scale(0.91);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}17%{-webkit-transform:scale(0.98);-webkit-transform:scale(0.98);-ms-transform:scale(0.98);transform:scale(0.98);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}33%{-webkit-transform:scale(0.87);-webkit-transform:scale(0.87);-ms-transform:scale(0.87);transform:scale(0.87);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}45%{-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}}@-webkit-keyframes heartbeat{from{-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transform-origin:center center;-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}10%{-webkit-transform:scale(0.91);-webkit-transform:scale(0.91);-ms-transform:scale(0.91);transform:scale(0.91);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}17%{-webkit-transform:scale(0.98);-webkit-transform:scale(0.98);-ms-transform:scale(0.98);transform:scale(0.98);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}33%{-webkit-transform:scale(0.87);-webkit-transform:scale(0.87);-ms-transform:scale(0.87);transform:scale(0.87);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}45%{-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}}@keyframes heartbeat{from{-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transform-origin:center center;-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}10%{-webkit-transform:scale(0.91);-webkit-transform:scale(0.91);-ms-transform:scale(0.91);transform:scale(0.91);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}17%{-webkit-transform:scale(0.98);-webkit-transform:scale(0.98);-ms-transform:scale(0.98);transform:scale(0.98);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}33%{-webkit-transform:scale(0.87);-webkit-transform:scale(0.87);-ms-transform:scale(0.87);transform:scale(0.87);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}45%{-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}}.flicker-1{-webkit-animation:flicker-1 2s linear infinite both;-webkit-animation:flicker-1 2s linear infinite both;animation:flicker-1 2s linear infinite both;}.fade-in{-webkit-animation:fade-in 1.2s cubic-bezier(0.39,0.575,0.565,1) both;-webkit-animation:fade-in 1.2s cubic-bezier(0.39,0.575,0.565,1) both;animation:fade-in 1.2s cubic-bezier(0.39,0.575,0.565,1) both;}@-webkit-keyframes fade-in{0%{opacity:0;}100%{opacity:1;}}@-webkit-keyframes fade-in{0%{opacity:0;}100%{opacity:1;}}@keyframes fade-in{0%{opacity:0;}100%{opacity:1;}}.animated{-webkit-animation-duration:3s;-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-fill-mode:both;-webkit-animation-fill-mode:both;animation-fill-mode:both;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamNxdWlcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxoZW5yaV9iYXJyZXR0XFx5ZXMtbW9tXFx5ZXNtb21fbmV4dFxcY29tcG9uZW50c1xcQXBwTGF5b3V0XFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQlMsQUFHc0IsQUFVRSxBQUcwSixBQUNwRixBQUd4RCxBQUtBLEFBS0csQUFLSCxBQUtELEFBS0csQUFLQyxBQUtILEFBS0csQUFLWCxBQUlQLEFBR0EsQUFJaUIsQUFJVCxBQUdKLEFBU0EsQUFNVyxBQWNLLEFBSU0sQUFHTixBQUdNLEFBSUEsQUF5Qm5CLEFBS1EsQUFNQSxBQUlYLEFBR0QsQUFLRSxBQU1hLEFBT0ssQUFPbkIsQUFPRixBQU9ELEFBS1csQUFPWCxBQVdELEFBSUMsQUFjRCxBQU1ZLEFBT1gsQUFXRCxBQUlDLEFBY0QsQUFNWSxBQU9YLEFBV0QsQUFJQyxBQWNELEFBTVksQUFPWCxBQVdELEFBSUMsQUFjRCxBQUtXLEFBUVYsQUFPQSxBQVNVLEFBS1EsQUFHZCxBQUdDLEFBSUssQUFJRixBQUlGLEFBSUEsQUFTMEMsQUFNOUIsQUFRRyxBQU1BLEFBTUEsQUFNSCxBQVFBLEFBUUcsQUFNQSxBQU1BLEFBTUgsQUFRdUIsQUFNOUMsQUFLTSxBQUdBLEFBS0EsQUFHQSxBQUtrQixTQXZoQkEsQ0FnRWhDLEFBR0EsQUErSjRCLEFBa0JKLEFBd0JJLEFBa0JKLEFBd0JJLEFBa0JKLEFBd0JJLEFBa0JKLEFBc0p0QixBQUdBLEFBS0EsQUFHQSxDQXhVRixBQVlvQixBQWVBLEFBMkJBLEFBZUEsQUEyQkEsQUFlQSxBQTJCQSxBQWVBLEFBMkJBLEFBT1AsQ0FsTUosQ0FoQ1QsQUFtUEUsQ0F6VWlCLEFBU1UsQUEwRTdCLEFBNEJrQixBQTZOaEIsQ0FqUGMsQUE2UGQsQUFJc0IsRUE5V3hCLEFBc0ZhLEFBZ1JYLENBdlZGLENBMEhRLEFBeU5OLEdBOU1vQixBQTBDQSxBQTBDQSxBQTBDQSxBQXlERCxFQXBXVSxDQXBCQyxBQUtBLEFBVUEsQUFvQkEsQUEyQ0wsQUEwREUsQUFNN0IsQUF5Q1UsRUE5SndCLEFBK0JKLEFBNlU1QixBQXFDcUIsQUEwQkEsQUFRQSxBQTBCQSxDQTVkWSxBQW9CQSxBQVVSLEFBNEZiLEFBNEJhLENBTFAsQUE4Q1osQUFlQSxBQTJCQSxBQWVBLEFBMkJBLEFBZUEsQUEyQkEsQUFlQSxBQTJCMkIsQ0FyUm5DLEFBT0EsQUE0RW1DLEFBbVFULEFBTUEsQUFNQSxBQXNCQSxBQU1BLEFBTUEsQUF5Q0YsQ0F6Y0wsRUF1R0ssQUFpQnhCLEVBa0JTLEFBZUEsQUEyQkEsQUFlQSxBQTJCQSxBQWVBLEFBMkJBLEFBZUEsQUFxRU8sQ0E1VGhCLEFBTUEsQUFJQSxJQTJCQSxDQTVEaUIsQUFnVFIsQ0E5S0ksQUFlQSxBQTJCQSxBQWVBLEFBMkJBLEFBZUEsQUEyQkEsQUFlQSxLQTVMYixBQWlRRSxDQTVWeUIsQUF5VGIsRUEzU0ksQUF5UkUsRUEvTkQsQUFxVzJCLENBemQ5QyxBQW9CQSxBQXdIeUIsQUEyQ1gsQUFlQSxBQTJCQSxBQWVBLEFBMkJBLEFBZUEsQUEyQkEsQUFlQSxFQXhWZCxBQUtBLEFBVUEsQUFvQkEsQUFxQkEsQUErR29CLENBOUZwQixHQWhEQSxBQTBZcUQsQ0F6Q2hDLENBaFhyQixBQW9CQSxFQWtKQSxFQTRCYyxBQWVGLEFBMkJFLEFBZUYsQUEyQkUsQUFlRixBQTJCRSxBQWVGLENBMVFPLEVBeVJnQixDQS9ORCxBQTBXZ0MsQ0FsVDlDLEFBMENBLEFBMENBLEFBMENBLEdBOVBILEFBdUdKLEVBaExiLEFBb09ZLEFBMENBLEFBMENBLEFBMENBLEFBcUNaLENBOU5zQixDQTRDc0IsQUEwQ0EsQUEwQ0EsQUEwQ0EsS0E4TFQsQ0F6YnRCLENBeUZiLENBb0RzQixBQVF0QixBQWtDc0IsQUFRdEIsQUFrQ3NCLEFBUXRCLEFBa0NzQixBQVF0QixHQWpTb0IsQUFnSWMsQUEwQ0EsQUEwQ0EsQUEwQ0EsTUEvT1osRUF5VnFCLEFBMEJJLEFBUUosQUEwQkksQ0FuUi9DLEFBMENBLEFBMENBLEFBMENBLE1BZ0NzQixHQTlTdEIsRUErVzhDLEFBTUMsQUFNRCxBQXNCQSxBQU1DLEFBTUQsTUE5WTNCLENBd2JRLENBNVRMLEFBMENBLEFBMENBLEFBMENBLE9Bc0N0QixDQWhOQSxLQXlOQSxFQXhTYyxFQTJJYSxBQTBDQSxBQTBDQSxBQTBDQSxFQStFUSxBQWtDQSxJQVJJLEFBa0NBLEVBN1Z2QyxDQStOaUIsQ0FyUkksS0EwWnJCLEVBM0RzQyxBQVlBLEFBc0JBLEFBWUEsQ0F4Q0MsQUFrQ0EsTUFqSHZDLENBM0k0QixBQTBDQSxBQTBDQSxBQTBDQSxDQTVXUyxDQWtOcEIsQUEwQ0EsQUEwQ0EsQUEwQ0EsRUE1T0csRUEwSHBCLEFBMENBLEFBMENBLEFBMENBLEtBdUZBLElBdUdBLEVBdlVBLEFBMENBLEFBMENBLEFBMENBLEtBNU9xQixjQXBHZSxLQXFHcEIsQUE2WmhCLGNBNVpBLElBOFdFLEFBa0NBLFNBcERBLEFBWUEsQUFzQkEsQUFZQSxFQS9lRixDQXVjRSxBQWtDQSxXQWhENkMsQUFrQ0EsS0E5TzFCLEFBMENBLEFBMENBLEFBMENBLG1CQTdIckIsQUEwQ0EsQUEwQ0EsQUEwQ0EsbUJBOEV1QyxBQWtDQSw4RUFqQ3JDLEFBa0NBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcamNxdWlcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxoZW5yaV9iYXJyZXR0XFx5ZXMtbW9tXFx5ZXNtb21fbmV4dFxcY29tcG9uZW50c1xcQXBwTGF5b3V0XFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi8uLi9Gb290ZXJcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi8uLi9IZWFkZXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuXHJcbmNvbnN0IGFwcExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib3gteWVzbW9tXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT55ZXNtb208L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3Rzd2F0Y2gvNC41LjIvZmxhdGx5L2Jvb3RzdHJhcC5taW4uY3NzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJlc3RvIGVzIGRlc2NyaXBjaW9uXCI+PC9tZXRhPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxIZWFkZXI+PC9IZWFkZXI+XHJcbiAgICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XHJcbiAgICAgIDxGb290ZXI+PC9Gb290ZXI+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFwiUm9ib3RvXCIsXHJcbiAgICAgICAgICAgICAgXCJPeHlnZW5cIiwgXCJVYnVudHVcIiwgXCJDYW50YXJlbGxcIiwgXCJGaXJhIFNhbnNcIiwgXCJEcm9pZCBTYW5zXCIsXHJcbiAgICAgICAgICAgICAgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjb2RlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNvdXJjZS1jb2RlLXBybywgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiQ291cmllciBOZXdcIixcclxuICAgICAgICAgICAgICBtb25vc3BhY2U7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwJmRpc3BsYXk9c3dhcFwiKTtcclxuICAgICAgICAgIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DbGlja2VyK1NjcmlwdCZkaXNwbGF5PXN3YXBcIik7XHJcblxyXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnQtaGVhdnlcIjtcclxuICAgICAgICAgICAgc3JjOiB1cmwoZm9udHMvTW9udC1IZWF2eS5vdGYpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJvbW5lcy1ib2xkXCI7XHJcbiAgICAgICAgICAgIHNyYzogdXJsKGZvbnRzL09NTkVTLUJPTEQuT1RGKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwib21uZXMtcmVndWxhclwiO1xyXG4gICAgICAgICAgICBzcmM6IHVybChmb250cy9PbW5lcy1SZWd1bGFyLm90Zik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnQtaGVhdnlcIjtcclxuICAgICAgICAgICAgc3JjOiB1cmwoZm9udHMvTW9udC1IZWF2eS5vdGYpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJtb250LXRoaW5cIjtcclxuICAgICAgICAgICAgc3JjOiB1cmwoZm9udHMvTW9udC1UaGluLm90Zik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnQtcmVndWxhclwiO1xyXG4gICAgICAgICAgICBzcmM6IHVybChmb250cy9Nb250LVJlZ3VsYXIub3RmKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1zZW1pYm9sZFwiO1xyXG4gICAgICAgICAgICBzcmM6IHVybChmb250cy9Nb250LVNlbWlCb2xkLm90Zik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnQtbGlnaHRcIjtcclxuICAgICAgICAgICAgc3JjOiB1cmwoZm9udHMvTW9udC1MaWdodC5vdGYpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGh0bWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOTh2dyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJtb250LWhlYXZ5XCI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm10LXZpZXdzIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDByZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnctODAge1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnctOTAge1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zaW4tbWFyZ2luIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBsLTEwIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA2cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRpdGxlLWZ1eGlhIHtcclxuICAgICAgICAgICAgY29sb3I6ICNlYzYwOGQ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIuNHJlbTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1oZWF2eVwiO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc3VidGl0bGUtZGFyayB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNTc1NzU2O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJtb250LXJlZ3VsYXJcIjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5idG4teWVsbG93IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlYmY0MTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwib21uZXMtYm9sZFwiO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbSAwcmVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IDJyZW0gYXV0bztcclxuICAgICAgICAgICAgd2lkdGg6IDEzcmVtO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjNyZW07XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJnLWZ1eGlhIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VjNjA4ZCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5iZy12ZXJkZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjOWRiYzMgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5iZy1henVsIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzRiNjRhNCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJnLXllbGxvdyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWJmNDEgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYmctZ3JheSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1NzU2NTAgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIC8qIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAgICAgICAuYm94LXdlYiB7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5MDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcclxuICAgICAgICAgICAgLmJveC13ZWIge1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogOTkycHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgICAgIC5ib3gtd2ViIHtcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEyMDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgICAgICAgIC5ib3gtd2ViIHtcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE1MDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9ICovXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYm94LXllc21vbSB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTgwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxpbmstYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNTc1NzU2ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnQtcmVndWxhclwiO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGluay1hIGIge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJtb250LWhlYXZ5XCI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnZpZXctZGVza3RvcCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnZpZXctbW9iaWxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiBFZmVjY3RzIGhvdmVyIGZvY3VzICAqL1xyXG4gICAgICAgICAgLmJ0bi1lZmVjdCB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5idG4tZWZlY3QsXHJcbiAgICAgICAgICAuYnRuLWVmZWN0OjphZnRlciB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5idG4tZWZlY3Q6OmJlZm9yZSxcclxuICAgICAgICAgIC5idG4tZWZlY3Q6OmFmdGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJ0bi1lZmVjdDpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZWM2MDhkO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICNlYzYwOGQ7ICovXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJ0bi1lZmVjdDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJ0bi1lZmVjdDpob3ZlcjphZnRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8qIGhvdmVyLWZ1eGlhICovXHJcbiAgICAgICAgICAuaG92ZXItZnV4aWEge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhvdmVyLWZ1eGlhOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNCwgMjExLCAyMTEsIDAuMSk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhvdmVyLWZ1eGlhOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSwgMC41KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ob3Zlci1mdXhpYTo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgei1pbmRleDogNjtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYzYwOGQ7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yLCAxLjIpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhvdmVyLWZ1eGlhOmhvdmVyOjphZnRlciB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLyogaG92ZXItYW1hcmlsbG8gKi9cclxuICAgICAgICAgIC5ob3Zlci1hbWFyaWxsbyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjdzO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaG92ZXItYW1hcmlsbG86OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE0LCAyMTEsIDIxMSwgMC4xKTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaG92ZXItYW1hcmlsbG86aG92ZXI6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC43LCAwLjcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhvdmVyLWFtYXJpbGxvOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA2O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZlYmY0MTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMsIDEuMyk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaG92ZXItYW1hcmlsbG86aG92ZXI6OmFmdGVyIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiBob3Zlci12ZXJkZSAqL1xyXG4gICAgICAgICAgLmhvdmVyLXZlcmRlIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuN3M7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ob3Zlci12ZXJkZTo6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTQsIDIxMSwgMjExLCAwLjEpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ob3Zlci12ZXJkZTpob3Zlcjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcsIDAuNyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaG92ZXItdmVyZGU6OmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDY7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzlkYmMzO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMywgMS4zKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ob3Zlci12ZXJkZTpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8qIGhvdmVyLWF6dWwgKi9cclxuICAgICAgICAgIC5ob3Zlci1henVsIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuN3M7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ob3Zlci1henVsOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNCwgMjExLCAyMTEsIDAuMSk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhvdmVyLWF6dWw6aG92ZXI6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC43LCAwLjcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhvdmVyLWF6dWw6OmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDY7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNGI2NGE0O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMywgMS4zKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ob3Zlci1henVsOmhvdmVyOjphZnRlciB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmhvdmVyLWVmZWN0LWxldHRlciB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaG92ZXItZWZlY3QtbGV0dGVyOmJlZm9yZSxcclxuICAgICAgICAgIC5ob3Zlci1lZmVjdC1sZXR0ZXI6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmhvdmVyLWVmZWN0LWxldHRlcjphZnRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzU3NTc1NjtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgYm90dG9tOiAtNXB4O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5ob3Zlci1lZmVjdC1sZXR0ZXI6aG92ZXI6YWZ0ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OXB4KSB7XHJcbiAgICAgICAgICAgIGh0bWwge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNC42dncgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudmlldy1kZXNrdG9wIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC52aWV3LW1vYmlsZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5tdC12aWV3cyB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDUuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRpdGxlLWZ1eGlhIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnN1YnRpdGxlLWRhcmsge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJ0bi15ZWxsb3cge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxLjJyZW0gMHJlbTtcclxuICAgICAgICAgICAgICB3aWR0aDogMTByZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiAgKioqKioqKioqKioqKioqKioqIEFOSU1BQ0lPTkVTICoqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuICAgICAgICAgIC5oZWFydGJlYXQge1xyXG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogaGVhcnRiZWF0IDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYm90aDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBoZWFydGJlYXQgMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZSBib3RoO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBoZWFydGJlYXQge1xyXG4gICAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDEwJSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTEpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45MSk7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgMTclIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45OCk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcclxuICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDMzJSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuODcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44Nyk7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgNDUlIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAa2V5ZnJhbWVzIGhlYXJ0YmVhdCB7XHJcbiAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgMTAlIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45MSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkxKTtcclxuICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAxNyUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgMzMlIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44Nyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjg3KTtcclxuICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA0NSUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuZmxpY2tlci0xIHtcclxuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGZsaWNrZXItMSAycyBsaW5lYXIgaW5maW5pdGUgYm90aDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBmbGlja2VyLTEgMnMgbGluZWFyIGluZmluaXRlIGJvdGg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmZhZGUtaW4ge1xyXG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZS1pbiAxLjJzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpXHJcbiAgICAgICAgICAgICAgYm90aDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlLWluIDEuMnMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlLWluIHtcclxuICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQGtleWZyYW1lcyBmYWRlLWluIHtcclxuICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5hbmltYXRlZCB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcclxuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBwTGF5b3V0O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\jcqui\\\\OneDrive\\\\Escritorio\\\\henri_barrett\\\\yes-mom\\\\yesmom_next\\\\components\\\\AppLayout\\\\index.js */"
    }, void 0, false, void 0, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (appLayout);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\jcqui\\OneDrive\\Escritorio\\henri_barrett\\yes-mom\\yesmom_next\\components\\Footer.js";






const Footer = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-709817541" + " " + "footer",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-709817541"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
            xs: 12,
            md: 4,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-709817541" + " " + "padding-left text-left",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                className: "jsx-709817541" + " " + "title-footer",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                  className: "jsx-709817541",
                  children: "CONTENIDO"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 20,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 19,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/nosotros",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: "jsx-709817541",
                  children: "Blog"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 23,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/nosotros",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: "jsx-709817541",
                  children: "Tienda"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 26,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/nosotros",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "jsx-709817541",
                  children: "Regalos"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 29,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/nosotros",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: "jsx-709817541",
                  children: "Sobre nosotros"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 32,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/nosotros",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: "jsx-709817541",
                  children: "T\xE9rminos y condiciones"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/nosotros",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: "jsx-709817541",
                  children: "Pol\xEDtica de privacidad"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/nosotros",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: "jsx-709817541",
                  children: "Libro de reclamaciones"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
            xs: 12,
            md: 4,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-709817541" + " " + "padding-left text-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                className: "jsx-709817541" + " " + "title-footer",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                  className: "jsx-709817541",
                  children: "CONT\xC1CTANOS"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "jsx-709817541",
                children: "mibebe@gmail.com"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "jsx-709817541",
                children: "3333333333"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "jsx-709817541",
                children: "123 Los Robles Miraflores"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
            xs: 12,
            md: 4,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-709817541" + " " + "padding-left text-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                className: "jsx-709817541" + " " + "title-footer",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                  className: "jsx-709817541",
                  children: "S\xCDGUENOS"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFacebookF"],
                className: "icon-redes"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTwitter"],
                className: "icon-redes"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faInstagram"],
                className: "icon-redes"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "709817541",
      children: ".footer.jsx-709817541{background:#556ea1;background-image:url(\"../../assets/trama-footer.svg\");color:#fff;background-position:top center;background-size:cover;padding:5rem 0;background-repeat:no-repeat;font-family:\"mont-regular\";}.footer.jsx-709817541 a.jsx-709817541{color:#fff;-webkit-text-decoration:none;text-decoration:none;}.footer.jsx-709817541 a.jsx-709817541:hover{color:#000;-webkit-text-decoration:none;text-decoration:none;}.tilte-footer.jsx-709817541{margin-bottom:1.5rem;}.icon-redes.jsx-709817541{font-size:1.5rem;margin-right:0.7rem;margin-left:0.7rem;}.padding-left.jsx-709817541{padding-left:6rem;}.title-footer.jsx-709817541{font-family:\"mont-semibold\";}@media (min-width:1800px){.footer.jsx-709817541{padding:2.5rem 0;}.footer.jsx-709817541 .padding-left.jsx-709817541{padding-left:0rem;}.title-footer.jsx-709817541{margin-bottom:1rem;margin-top:1rem;font-size:0.8rem;}.footer.jsx-709817541 .padding-left.jsx-709817541 p.jsx-709817541{margin-bottom:0.2rem;font-size:0.7rem;}}@media (max-width:768px){.footer.jsx-709817541{background-image:url(\"../../assets/trama-footer-responsive.svg\");background-position:top center;background-size:cover;padding:3rem 0;background-repeat:no-repeat;font-family:\"Montserrat\",sans-serif;}.footer.jsx-709817541 a.jsx-709817541{color:#fff;-webkit-text-decoration:none;text-decoration:none;}.footer.jsx-709817541 a.jsx-709817541:hover{color:#000;-webkit-text-decoration:none;text-decoration:none;}.title-footer.jsx-709817541{margin-bottom:0.5rem;margin-top:1rem;font-size:0.9rem;}.icon-redes.jsx-709817541{font-size:1.6rem;margin-right:0.7rem;margin-left:0.7rem;margin-top:0.5rem;}.footer.jsx-709817541 .padding-left.jsx-709817541{padding-left:0rem;text-align:center !important;}.footer.jsx-709817541 .padding-left.jsx-709817541 p.jsx-709817541{margin-bottom:0.4rem;font-size:0.8rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamNxdWlcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxoZW5yaV9iYXJyZXR0XFx5ZXMtbW9tXFx5ZXNtb21fbmV4dFxcY29tcG9uZW50c1xcRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZFUyxBQUdnQyxBQVdSLEFBS0EsQUFLVSxBQUlKLEFBS0MsQUFJVSxBQUlULEFBR0MsQUFHQyxBQUtFLEFBTTRDLEFBU3RELEFBS0EsQUFLVSxBQU1KLEFBTUMsQUFJRyxXQTlFRixBQUtBLEFBZ0RFLEFBS0EsTUE1Q0gsQUFhcEIsQUEwQ3NCLENBbER4QixBQVdFLEFBNkMrQixDQXRGdUIsQUE0Q3BDLEVBdkJwQixBQTRCcUIsQUF5QkQsQUFnQkMsT0F4RHJCLE9BV3FCLEVBbkJBLEFBaURBLEFBTUUsQ0EvQnJCLEFBeUNBLFNBSkEsS0F6Q0EsRUE4QkEsRUFqREYsQUF1RHNCLEtBdEV0QixBQUtBLEFBZ0RFLEFBS0EsSUFmaUMsUUF0RHRCLENBa0ZYLFVBakYrQixZQXNEUCxtQkFyREYsR0FzREwsZUFDYSxJQXREZixlQUNhLFNBc0RXLG1CQXJEWixpQkFzRDNCLFVBckRGIiwiZmlsZSI6IkM6XFxVc2Vyc1xcamNxdWlcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxoZW5yaV9iYXJyZXR0XFx5ZXMtbW9tXFx5ZXNtb21fbmV4dFxcY29tcG9uZW50c1xcRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvTGlua1wiXHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHtcclxuICBmYUZhY2Vib29rRixcclxuICBmYVR3aXR0ZXIsXHJcbiAgZmFJbnN0YWdyYW0sXHJcbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIjtcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWRkaW5nLWxlZnQgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGl0bGUtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxiPkNPTlRFTklETzwvYj5cclxuICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL25vc290cm9zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhPkJsb2c8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL25vc290cm9zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlRpZW5kYTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbm9zb3Ryb3NcIj5cclxuICAgICAgICAgICAgICAgICAgPHA+UmVnYWxvczwvcD5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbm9zb3Ryb3NcIj5cclxuICAgICAgICAgICAgICAgICAgPGE+U29icmUgbm9zb3Ryb3M8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL25vc290cm9zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlTDqXJtaW5vcyB5IGNvbmRpY2lvbmVzPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ub3NvdHJvc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YT5Qb2zDrXRpY2EgZGUgcHJpdmFjaWRhZDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbm9zb3Ryb3NcIj5cclxuICAgICAgICAgICAgICAgICAgPGE+TGlicm8gZGUgcmVjbGFtYWNpb25lczwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWRkaW5nLWxlZnQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0aXRsZS1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGI+Q09OVMOBQ1RBTk9TPC9iPlxyXG4gICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgIDxwPm1pYmViZUBnbWFpbC5jb208L3A+XHJcbiAgICAgICAgICAgICAgICA8cD4zMzMzMzMzMzMzPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+MTIzIExvcyBSb2JsZXMgTWlyYWZsb3JlczwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWRkaW5nLWxlZnQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0aXRsZS1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGI+U8ONR1VFTk9TPC9iPlxyXG4gICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgICAgICAgICAgaWNvbj17ZmFGYWNlYm9va0Z9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tcmVkZXNcIlxyXG4gICAgICAgICAgICAgICAgPjwvRm9udEF3ZXNvbWVJY29uPlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgICAgICBpY29uPXtmYVR3aXR0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tcmVkZXNcIlxyXG4gICAgICAgICAgICAgICAgPjwvRm9udEF3ZXNvbWVJY29uPlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgICAgICBpY29uPXtmYUluc3RhZ3JhbX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi1yZWRlc1wiXHJcbiAgICAgICAgICAgICAgICA+PC9Gb250QXdlc29tZUljb24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuZm9vdGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzU1NmVhMTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3RyYW1hLWZvb3Rlci5zdmdcIik7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cmVtIDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnQtcmVndWxhclwiO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5mb290ZXIgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmZvb3RlciBhOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudGlsdGUtZm9vdGVyIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5pY29uLXJlZGVzIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC43cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMC43cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBhZGRpbmctbGVmdCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNnJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudGl0bGUtZm9vdGVyIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1zZW1pYm9sZFwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE4MDBweCkge1xyXG4gICAgICAgICAgICAuZm9vdGVyIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAyLjVyZW0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9vdGVyIC5wYWRkaW5nLWxlZnQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGl0bGUtZm9vdGVyIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZvb3RlciAucGFkZGluZy1sZWZ0IHAge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgIC5mb290ZXIge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy90cmFtYS1mb290ZXItcmVzcG9uc2l2ZS5zdmdcIik7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDNyZW0gMDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmZvb3RlciBhIHtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5mb290ZXIgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGl0bGUtZm9vdGVyIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmljb24tcmVkZXMge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC43cmVtO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjdyZW07XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb290ZXIgLnBhZGRpbmctbGVmdCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb290ZXIgLnBhZGRpbmctbGVmdCBwIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\jcqui\\\\OneDrive\\\\Escritorio\\\\henri_barrett\\\\yes-mom\\\\yesmom_next\\\\components\\\\Footer.js */"
    }, void 0, false, void 0, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Navbar */ "react-bootstrap/Navbar");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Nav */ "react-bootstrap/Nav");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Form */ "react-bootstrap/Form");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/FormControl */ "react-bootstrap/FormControl");
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Button */ "react-bootstrap/Button");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\Users\\jcqui\\OneDrive\\Escritorio\\henri_barrett\\yes-mom\\yesmom_next\\components\\Header.js";









const Header = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2___default.a, {
      expand: "lg",
      className: " justify-content-between",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2___default.a.Toggle, {
        "aria-controls": "basic-navbar-nav",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_8___default.a, {
          src: "/image/header/burger.svg",
          alt: "burger yesmom",
          className: "burger-yesmom",
          width: 50,
          height: 50 // layout="intrinsic"

        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2___default.a.Brand, {
        href: "/",
        className: "hover-efect",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_8___default.a, {
          src: "/image/header/logo-yesmom.svg",
          alt: "logo yesmom",
          className: "logo-yesmom",
          width: 70,
          height: 70 // layout="responsive"

        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2___default.a.Collapse, {
        id: "basic-navbar-nav",
        className: "items-nabvar-righ",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a, {
          className: "nav-items-collapse ",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "/blog",
            className: "item-navbar hover-efect",
            activeClassName: "is-active",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "jsx-2768213639",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("figure", {
                className: "jsx-2768213639" + " " + "item-menu ",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_8___default.a, {
                  src: "/image/header/blog.svg",
                  alt: "logo blog yesmom " //   className="lupa-img"
                  ,
                  width: 70,
                  height: 70
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                className: "jsx-2768213639" + " " + "",
                children: "Blog"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "/pagina-en-construccion",
            className: "item-navbar hover-efect",
            activeClassName: "is-active",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "jsx-2768213639",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("figure", {
                className: "jsx-2768213639" + " " + "item-menu",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_8___default.a, {
                  src: "/image/header/tienda.svg",
                  alt: "logo tienda yesmom" //   className="lupa-img"
                  ,
                  width: 70,
                  height: 70
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                className: "jsx-2768213639",
                children: "Tienda"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "/pagina-en-construccion",
            className: "item-navbar hover-efect",
            activeClassName: "is-active",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "jsx-2768213639",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("figure", {
                className: "jsx-2768213639" + " " + "item-menu",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_8___default.a, {
                  src: "/image/header/regalo.svg",
                  alt: "logo regalo yesmom" //   className="lupa-img"
                  ,
                  width: 70,
                  height: 70
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                className: "jsx-2768213639",
                children: "Regalos"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "/pagina-en-construccion",
            className: "item-navbar hover-efect",
            activeClassName: "is-active",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "jsx-2768213639",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("figure", {
                className: "jsx-2768213639" + " " + "item-menu",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_8___default.a, {
                  src: "/image/header/iniciar-sesion.svg",
                  alt: "logo iniciar sesi\xF3n yesmom" //   className="lupa-img"
                  ,
                  width: 70,
                  height: 70
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                className: "jsx-2768213639",
                children: "Login"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      className: "jsx-2768213639" + " " + "navbar navbar-expand-lg navbar-light bg-light",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-2768213639" + " " + "container-fluid",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          className: "jsx-2768213639" + " " + "navbar-brand",
          children: "Navbar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#navbarNavAltMarkup",
          "aria-controls": "navbarNavAltMarkup",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation",
          className: "jsx-2768213639" + " " + "navbar-toggler",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_8___default.a, {
            src: "/image/header/burger.svg",
            alt: "burger yesmom",
            className: "navbar-toggler-icon burger-yesmom",
            width: 50,
            height: 50 // layout="intrinsic"

          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "navbarNavAltMarkup",
          className: "jsx-2768213639" + " " + "collapse navbar-collapse",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-2768213639" + " " + "navbar-nav",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              "aria-current": "page",
              href: "#",
              className: "jsx-2768213639" + " " + "nav-link active",
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              className: "jsx-2768213639" + " " + "nav-link",
              children: "Features"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              className: "jsx-2768213639" + " " + "nav-link",
              children: "Pricing"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              tabindex: "-1",
              "aria-disabled": "true",
              className: "jsx-2768213639" + " " + "nav-link disabled",
              children: "Disabled"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2768213639",
      children: ".navbar.jsx-2768213639{padding:1rem 5rem !important;background:#fff;z-index:99;}.items-nabvar-right.jsx-2768213639{display:-webkit-box !important;display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;-webkit-box-pack:end !important;-webkit-justify-content:flex-end !important;-ms-flex-pack:end !important;justify-content:flex-end !important;}.logo-yesmom.jsx-2768213639{width:5rem;}.item-navbar.jsx-2768213639{display:-webkit-box !important;display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:\"Montserrat\",sans-serif;margin:0rem 0.5rem;-webkit-text-decoration:none;text-decoration:none;}.item-menu.jsx-2768213639{width:1.6rem;height:1.6rem;margin:0 0 0.5rem !important;}.item-menu.jsx-2768213639 img.jsx-2768213639{width:100%;height:100%;}.input-search.jsx-2768213639{border:none !important;border-bottom:1px solid #000 !important;border-radius:0 !important;}.nav-items-collapse.jsx-2768213639{margin-left:auto;}.ml-form-search.jsx-2768213639{margin-left:auto;}.lupa-img.jsx-2768213639{width:1.8rem;}@-webkit-keyframes animateHeart-jsx-2768213639{0%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}40%{-webkit-transform:scale(1.09);-ms-transform:scale(1.09);transform:scale(1.09);}100%{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}}@keyframes animateHeart-jsx-2768213639{0%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}40%{-webkit-transform:scale(1.09);-ms-transform:scale(1.09);transform:scale(1.09);}100%{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}}.item-navbar.jsx-2768213639 h6.jsx-2768213639{color:#616160;-webkit-text-decoration:none;text-decoration:none;}.item-navbar.jsx-2768213639 h6.jsx-2768213639:hover{-webkit-text-decoration:none !important;text-decoration:none !important;}.item-navbar.jsx-2768213639:link,.item-navbar.jsx-2768213639:visited,.item-navbar.jsx-2768213639:active{-webkit-text-decoration:none;text-decoration:none;}.is-active.jsx-2768213639 h6.jsx-2768213639{font-weight:800;}.hover-efect.jsx-2768213639{-webkit-animation:animateHeart-jsx-2768213639 0.3s linear forwards !important;animation:animateHeart-jsx-2768213639 0.3s linear forwards !important;cursor:pointer;}.hover-efect.jsx-2768213639:hover,.hover-efect.jsx-2768213639:focus{-webkit-transform:scale(1.2) !important;-ms-transform:scale(1.2) !important;transform:scale(1.2) !important;}@media (min-width:1800px){.logo-yesmom.jsx-2768213639{width:3.5rem;}.item-menu.jsx-2768213639{width:1.3rem;height:1.3rem;}.item-navbar.jsx-2768213639 h6.jsx-2768213639{font-size:0.8rem;}.lupa-img.jsx-2768213639{width:1.3rem;}.form-control.jsx-2768213639{padding:0.3rem 0.75rem !important;font-size:0.8rem !important;}.navbar.jsx-2768213639{padding:0.5rem 5rem !important;}}@media (max-width:991px){.logo-yesmom.jsx-2768213639{width:3rem;}.burger-yesmom.jsx-2768213639{width:2rem;}.navbar.jsx-2768213639{padding:1rem !important;}.navbar-toggler.jsx-2768213639{border:none !important;}.navbar-collapse.jsx-2768213639{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}.nav-items-collapse.jsx-2768213639{padding-left:5rem;width:100%;}.nav-items-collapse.jsx-2768213639 img.jsx-2768213639{display:none;}.nav-link.jsx-2768213639{padding:0rem 1rem !important;}.form-inline.jsx-2768213639{-webkit-flex-flow:initial !important;-ms-flex-flow:initial !important;flex-flow:initial !important;padding-top:2rem;padding-bottom:1rem !important;}.ml-form-search.jsx-2768213639{margin-left:0;}.item-navbar.jsx-2768213639{-webkit-align-items:flex-start !important;-webkit-box-align:flex-start !important;-ms-flex-align:flex-start !important;align-items:flex-start !important;}.lupa-img.jsx-2768213639{width:1.5rem;}.item-navbar.jsx-2768213639 h6.jsx-2768213639{font-size:1.1rem;}a.item-navbar.nav-link.jsx-2768213639{border-bottom:0.5px solid #575756;}.navbar.jsx-2768213639{position:fixed !important;width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamNxdWlcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxoZW5yaV9iYXJyZXR0XFx5ZXMtbW9tXFx5ZXNtb21fbmV4dFxcY29tcG9uZW50c1xcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVNUyxBQUcwQyxBQU1MLEFBSWIsQUFHYSxBQVVYLEFBTUYsQUFLWSxBQU1OLEFBSUEsQUFJSixBQUtRLEFBR0csQUFHRCxBQUtULEFBSWtCLEFBS1gsQUFHTCxBQUl1QyxBQUt2QixBQUtqQixBQUdBLEFBSUksQUFHSixBQUdxQixBQUlILEFBTXBCLEFBSUEsQUFHYSxBQUlELEFBSVYsQUFLSyxBQUtMLEFBSWdCLEFBSUEsQUFLZixBQUlvQixBQUdyQixBQUlJLEFBSWlCLEFBR1IsV0E5SjlCLEFBbUJjLEFBb0ZaLEFBSUEsRUE5RmMsQUF5QmhCLEFBMENFLEFBR2dCLEFBT2hCLEFBc0NBLEFBb0JBLENBOUZxQixBQXVGckIsRUEzRUYsQ0FwQ0EsQUFJQSxBQXFERSxBQWlFQSxDQTdCYSxLQXZHZixBQUkwQyxBQTBGeEMsQ0FKQSxFQWlEYSxDQWpKZ0IsQUFzRTdCLEVBOUZnQixBQXNJaEIsQUFRQSxFQW5DQSxHQUo4QixBQStEOUIsR0FJQSxRQXpLVyxLQXdFYixNQXZFQSxBQXVCQSxNQStFRSxDQXJFMkIsQ0E4QjdCLEtBWkUsR0FlRixFQTREa0MsQ0FyRWhDLEdBSEEsWUFwQkYsU0E4R3FCLFNBN0RyQixRQThEbUMsRUE3SUcsQUFPZCw2QkF1SXRCLENBcEVlLEtBMkVmLFVBMUVGLGFBZ0RFLG9CQW5IdUIsK0RBUHpCLG9DQVFxQiw2RkFDa0Isb0NBQ2xCLG1CQUNFLGtEQUN2QiIsImZpbGUiOiJDOlxcVXNlcnNcXGpjcXVpXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcaGVucmlfYmFycmV0dFxceWVzLW1vbVxceWVzbW9tX25leHRcXGNvbXBvbmVudHNcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9OYXZiYXJcIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL05hdlwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIjtcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybUNvbnRyb2xcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9MaW5rXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5hdmJhciBleHBhbmQ9XCJsZ1wiIGNsYXNzTmFtZT1cIiBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPVwiL2ltYWdlL2hlYWRlci9idXJnZXIuc3ZnXCJcclxuICAgICAgICAgICAgYWx0PVwiYnVyZ2VyIHllc21vbVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1cmdlci15ZXNtb21cIlxyXG4gICAgICAgICAgICB3aWR0aD17NTB9XHJcbiAgICAgICAgICAgIGhlaWdodD17NTB9XHJcbiAgICAgICAgICAgIC8vIGxheW91dD1cImludHJpbnNpY1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTmF2YmFyLlRvZ2dsZT5cclxuXHJcbiAgICAgICAgPE5hdmJhci5CcmFuZCBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImhvdmVyLWVmZWN0XCI+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPVwiL2ltYWdlL2hlYWRlci9sb2dvLXllc21vbS5zdmdcIlxyXG4gICAgICAgICAgICBhbHQ9XCJsb2dvIHllc21vbVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ28teWVzbW9tXCJcclxuICAgICAgICAgICAgd2lkdGg9ezcwfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezcwfVxyXG4gICAgICAgICAgICAvLyBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgey8qIDxOYXYuTGluayBocmVmPVwiI2xpbmtcIiBjbGFzc05hbWU9XCJpdGVtLW5hdmJhclwiPlxyXG4gICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cIml0ZW0tbWVudVwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtjZXN0YX0gYWx0PVwibG9nbyB0aWVuZGEgeWVzbW9tXCIgLz5cclxuICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICA8L05hdi5MaW5rPiAqL31cclxuXHJcbiAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIiBjbGFzc05hbWU9XCJpdGVtcy1uYWJ2YXItcmlnaFwiPlxyXG4gICAgICAgICAgey8qIDxGb3JtIGlubGluZSBjbGFzc05hbWU9XCJtbC1mb3JtLXNlYXJjaFwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImx1cGEtaW1nXCI+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2UvaGVhZGVyL2x1cGEuc3ZnXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cImx1cGEgeWVzbW9tXCJcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezIwfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiwr9RdWUgZXMgbG8gcXVlIGJ1c2Nhcz9cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLXNtLTIgaW5wdXQtc2VhcmNoXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybT4gKi99XHJcbiAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm5hdi1pdGVtcy1jb2xsYXBzZSBcIj5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBocmVmPVwiL2Jsb2dcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW0tbmF2YmFyIGhvdmVyLWVmZWN0XCJcclxuICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cIml0ZW0tbWVudSBcIj5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlL2hlYWRlci9ibG9nLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9nbyBibG9nIHllc21vbSBcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgY2xhc3NOYW1lPVwibHVwYS1pbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs3MH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezcwfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiXCI+QmxvZzwvaDY+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9wYWdpbmEtZW4tY29uc3RydWNjaW9uXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtLW5hdmJhciBob3Zlci1lZmVjdFwiXHJcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiaXMtYWN0aXZlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJpdGVtLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlL2hlYWRlci90aWVuZGEuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvIHRpZW5kYSB5ZXNtb21cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgY2xhc3NOYW1lPVwibHVwYS1pbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs3MH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezcwfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICA8aDY+VGllbmRhPC9oNj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBocmVmPVwiL3BhZ2luYS1lbi1jb25zdHJ1Y2Npb25cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW0tbmF2YmFyIGhvdmVyLWVmZWN0XCJcclxuICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cIml0ZW0tbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2UvaGVhZGVyL3JlZ2Fsby5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ28gcmVnYWxvIHllc21vbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBjbGFzc05hbWU9XCJsdXBhLWltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezcwfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17NzB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgIDxoNj5SZWdhbG9zPC9oNj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgey8qIDxOYXYuTGluayBocmVmPVwiI2xpbmtcIiBjbGFzc05hbWU9XCJpdGVtLW5hdmJhclwiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9e3JlZ2lzdHJhdGV9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ28gcmVncsOtc3RyYXRlIHllc21vbVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW0tbWVudVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGg2PlJlZ8Otc3RyYXRlPC9oNj5cclxuICAgICAgICAgICAgICA8L05hdi5MaW5rPiAqL31cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBocmVmPVwiL3BhZ2luYS1lbi1jb25zdHJ1Y2Npb25cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW0tbmF2YmFyIGhvdmVyLWVmZWN0XCJcclxuICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cIml0ZW0tbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2UvaGVhZGVyL2luaWNpYXItc2VzaW9uLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9nbyBpbmljaWFyIHNlc2nDs24geWVzbW9tXCJcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIGNsYXNzTmFtZT1cImx1cGEtaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17NzB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs3MH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgPGg2PkxvZ2luPC9oNj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgey8qIDxOYXZMaW5rIHRvPVwiL2Nlc3RhXCIgY2xhc3NOYW1lPVwiaXRlbS1uYXZiYXJcIiAgYWN0aXZlQ2xhc3NOYW1lPSdpcy1hY3RpdmUnPlxyXG4gICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJpdGVtLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Nlc3RhfSBhbHQ9XCJsb2dvIGNlc3RhIHllc21vbVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgIDxoNj5DZXN0YTwvaDY+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPiAqL31cclxuICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxyXG4gICAgICA8L05hdmJhcj5cclxuXHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIE5hdmJhclxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9XCIjbmF2YmFyTmF2QWx0TWFya3VwXCJcclxuICAgICAgICAgICAgYXJpYS1jb250cm9scz1cIm5hdmJhck5hdkFsdE1hcmt1cFwiXHJcbiAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPiAqL31cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9oZWFkZXIvYnVyZ2VyLnN2Z1wiXHJcbiAgICAgICAgICAgIGFsdD1cImJ1cmdlciB5ZXNtb21cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uIGJ1cmdlci15ZXNtb21cIlxyXG4gICAgICAgICAgICB3aWR0aD17NTB9XHJcbiAgICAgICAgICAgIGhlaWdodD17NTB9XHJcbiAgICAgICAgICAgIC8vIGxheW91dD1cImludHJpbnNpY1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyTmF2QWx0TWFya3VwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIGFjdGl2ZVwiIGFyaWEtY3VycmVudD1cInBhZ2VcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICBGZWF0dXJlc1xyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICBQcmljaW5nXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGluayBkaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtZGlzYWJsZWQ9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBEaXNhYmxlZFxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAubmF2YmFyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbSA1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5pdGVtcy1uYWJ2YXItcmlnaHQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sb2dvLXllc21vbSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLml0ZW0tbmF2YmFyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBtYXJnaW46IDByZW0gMC41cmVtO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLml0ZW0tbWVudSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxLjZyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogMS42cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCAwLjVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaXRlbS1tZW51IGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmlucHV0LXNlYXJjaCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm5hdi1pdGVtcy1jb2xsYXBzZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5tbC1mb3JtLXNlYXJjaCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5sdXBhLWltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxLjhyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQGtleWZyYW1lcyBhbmltYXRlSGVhcnQge1xyXG4gICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA0MCUge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLml0ZW0tbmF2YmFyIGg2IHtcclxuICAgICAgICAgICAgY29sb3I6ICM2MTYxNjA7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pdGVtLW5hdmJhciBoNjpob3ZlciB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLml0ZW0tbmF2YmFyOmxpbmssXHJcbiAgICAgICAgICAuaXRlbS1uYXZiYXI6dmlzaXRlZCxcclxuICAgICAgICAgIC5pdGVtLW5hdmJhcjphY3RpdmUge1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXMtYWN0aXZlIGg2IHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaG92ZXItZWZlY3Qge1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGFuaW1hdGVIZWFydCAwLjNzIGxpbmVhciBmb3J3YXJkcyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaG92ZXItZWZlY3Q6aG92ZXIsXHJcbiAgICAgICAgICAuaG92ZXItZWZlY3Q6Zm9jdXMge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMikgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTgwMHB4KSB7XHJcbiAgICAgICAgICAgIC5sb2dvLXllc21vbSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDMuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaXRlbS1tZW51IHtcclxuICAgICAgICAgICAgICB3aWR0aDogMS4zcmVtO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMS4zcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pdGVtLW5hdmJhciBoNiB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmx1cGEtaW1nIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMS4zcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAuM3JlbSAwLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmF2YmFyIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgICAgICAgIC5sb2dvLXllc21vbSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDNyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5idXJnZXIteWVzbW9tIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmF2YmFyIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubmF2LWl0ZW1zLWNvbGxhcHNlIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVyZW07XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5uYXYtaXRlbXMtY29sbGFwc2UgaW1nIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubmF2LWxpbmsge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDByZW0gMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZm9ybS1pbmxpbmUge1xyXG4gICAgICAgICAgICAgIGZsZXgtZmxvdzogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1sLWZvcm0tc2VhcmNoIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLml0ZW0tbmF2YmFyIHtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sdXBhLWltZyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLml0ZW0tbmF2YmFyIGg2IHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYS5pdGVtLW5hdmJhci5uYXYtbGluayB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgIzU3NTc1NjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmF2YmFyIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\jcqui\\\\OneDrive\\\\Escritorio\\\\henri_barrett\\\\yes-mom\\\\yesmom_next\\\\components\\\\Header.js */"
    }, void 0, false, void 0, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
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

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

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
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

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

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (unsized) {
      throw new Error(`Image with src "${src}" has deprecated "unsized" property, which was removed in favor of the "layout='fill'" property`);
    }
  }

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
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
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
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://err.sh/next.js/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"));

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

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./pages/blog/[blog].js":
/*!******************************!*\
  !*** ./pages/blog/[blog].js ***!
  \******************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/AppLayout */ "./components/AppLayout/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\Users\\jcqui\\OneDrive\\Escritorio\\henri_barrett\\yes-mom\\yesmom_next\\pages\\blog\\[blog].js";









const importJodit = () => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! jodit-react */ "jodit-react", 7));

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
  });
  const {
    0: contenido,
    1: setContenido
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('<p><span style="font-family: Tahoma, Geneva, sans-serif;">Tu Baby Shower es uno de los momentos más esperados para ti y los miembros de tu familia que han estado al pendiente del nacimiento de tu próximo bebé. Aquí te dejamos unos consejos para celebrar de una mejor manera tu baby shower virtual.</span></p><ul><li><span style="font-family: Tahoma, Geneva, sans-serif;"><strong><span style="font-family: Tahoma, Geneva, sans-serif;"><span style="color: rgb(75, 100, 164); font-family: Tahoma, Geneva, sans-serif;">Rol de anfitriona</span></span></strong></span></li></ul><p><span style="color: rgb(0, 0, 0); font-family: Tahoma, Geneva, sans-serif;">Si es que tú eres la embarazada que quiere invitar a sus amigos a tu baby shower y no quieres saber nada de la organización, debes elegir una amiga o hermana y nombrarla “anfitriona” del evento. Ella será la encargada de la producción y así tú serás realmente la estrella del evento. </span></p><p><span style="color: rgb(0, 0, 0); font-family: Tahoma, Geneva, sans-serif;">Si es que tú eres la organizadora del evento, debes tomar el rol de anfitriona y ser responsable de invitar a las personas y de planear las actividades y juegos. Puedes diseñar invitaciones y enviarlas por correo o a través de Redes Sociales.</span></p><ul><li><span style="font-family: Tahoma, Geneva, sans-serif;"><strong><span style="color: rgb(75, 100, 164); font-family: Tahoma, Geneva, sans-serif;">Elegir un sitio de video chat</span></strong></span></li></ul><p><span style="color: rgb(0, 0, 0); font-family: Tahoma, Geneva, sans-serif; font-size: 1rem;">Ya sea Zoom, HouseParty, Skype o Hangouts, debes elegir una plataforma que soporte a la cantidad de gente que está invitada y que sea accesible para todos ellos. Quizás debas hacer una prueba de conexión con ciertas personas con anticipación. </span></p><p><span style="color: rgb(0, 0, 0); font-family: Tahoma, Geneva, sans-serif; font-size: 1rem;">Otra opción es transmitir el baby shower en vivo: organiza un livestream e invita a tus familiares y amigos a asistir y comentar. Puede ser a través de Instagram y así todos tus seguidores podrán verte abriendo regalos o realizando actividades entretenidas.</span></p><ul><li><span style="color: rgb(0, 0, 0); font-family: Tahoma, Geneva, sans-serif; font-size: 1rem;"><span style="background-color: rgb(255, 255, 255); color: rgb(74, 134, 232);"><strong style=""><span style="color: rgb(75, 100, 164); font-family: Tahoma, Geneva, sans-serif;">Planifica actividades</span></strong></span></span></li></ul><p><span style="color: rgb(0, 0, 0); font-family: Tahoma, Geneva, sans-serif;">Quizás la parte más importante del baby shower: los invitados participarán en los juegos que organices con la embarazada en el centro de todas las actividades.</span></p><ul><li><span style="color: rgb(75, 100, 164);"><strong><span style="font-family: Tahoma, Geneva, sans-serif;">Hora de los regalos</span></strong></span></li></ul><p><span style="color: rgb(0, 0, 0); font-family: Tahoma, Geneva, sans-serif;">Lo más probable es que la fiesta termine con que la futura mamá abra los regalos. Esto solo es posible si los invitados envían su regalo con anticipación. Una buena idea es que la festejada no sepa quién envió qué, y los vaya abriendo frente la cámara y adivine quién es la dueña de cada regalo. La otra opción es que los invitados abran los regalos y luego se lo envíen por correo. </span></p><p><span style="color: rgb(0, 0, 0); font-family: Tahoma, Geneva, sans-serif;">Si soñabas con tu baby shower, ¡aún puedes planear tu baby shower virtual! Además, es una buena oportunidad para pasar momentos agradables junto a tu familia y amigos.</span></p><p><br></p>'); // if(router.isFallback){
  //     return <div>CARGANDO...</div>
  // }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-2429030913" + " " + "fade-in animated",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-2429030913" + " " + "box-banner-blog",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
          src: "/image/onda-blanca.svg",
          alt: "ondas",
          width: 20,
          height: 50,
          layout: "responsive",
          className: "ondas"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
          className: "jsx-2429030913" + " " + "text-title-blog",
          children: "Detalles de blog"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
          src: "/image/onda-blanca.svg",
          alt: "ondas",
          width: 20,
          height: 50,
          layout: "responsive",
          className: "ondas"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-2429030913" + " " + "box-blog-especifico",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
          src: "/image/blog/nube1.png",
          className: "nube1 heartbeat",
          width: 70,
          height: 70,
          layout: "responsive",
          alt: "nube"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
          src: "/image/blog/nube2.png",
          className: "nube2 heartbeat",
          width: 70,
          height: 70,
          layout: "responsive",
          alt: "nube"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
          src: "/image/blog/nube3.png",
          className: "nube3 heartbeat",
          width: 70,
          height: 70,
          layout: "responsive",
          alt: "nube"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-2429030913" + " " + "box-autor-blog",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("figure", {
            className: "jsx-2429030913",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: currentData.imagenes[0].typeImage === "A" ? currentData.imagenes[0].url : currentData.imagenes[1].url,
              alt: "",
              className: "jsx-2429030913" + " " + "w-100"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-2429030913" + " " + "box-autor-text-blog",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              className: "jsx-2429030913" + " " + "text-autor",
              children: currentData.blog.autor
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              className: "jsx-2429030913" + " " + "text-fecha",
              children: currentData.blog.fecha.substr(0, 10)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-2429030913" + " " + "box-articulo-blog",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("figure", {
            className: "jsx-2429030913" + " " + "box-articulo-img-principal-blog",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: currentData.imagenes[0].typeImage === "P" ? currentData.imagenes[0].url : currentData.imagenes[1].url,
              alt: "",
              className: "jsx-2429030913" + " " + "w-100"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-2429030913" + " " + "box-articulo-title-blog",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faStar"],
              className: "star-blog heartbeat"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: "jsx-2429030913",
              children: [" ", currentData.blog.titulo]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faStar"],
              className: "star-blog heartbeat"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(JoditEditor, {
            config: config,
            value: contenido,
            name: "contenido" // onBlur={handleBlurAreaChange}

          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2429030913",
      children: ".box-banner-blog.jsx-2429030913{height:15rem;background:url(../../image/blog/blog.png) no-repeat center;background-size:cover;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.text-title-blog.jsx-2429030913{font-family:\"Clicker Script\",cursive;font-size:2.5rem;margin:0rem 1rem 0rem;color:#fff;text-align:center;}.subtitle-dark-blog.jsx-2429030913{color:#575756;font-family:\"mont-regular\";font-size:1.7rem;text-align:center;margin:0rem 15rem;margin-bottom:-12rem;margin-top:3rem;}.box-card-group.jsx-2429030913{position:relative;top:16rem;z-index:10;}.card-blog.jsx-2429030913{text-align:center;background:#ffffff;box-shadow:0px 14px 20px -5px rgba(0,0,0,0.2);border-radius:20px;font-family:\"mont-regular\";border-radius:1.28rem !important;width:18rem;height:auto;}.box-green-blog.jsx-2429030913{position:relative;}.text-bottom-blog.jsx-2429030913{color:#abc0a3;font-family:\"mont-regular\";font-size:1.7rem;text-align:center;position:absolute;bottom:16%;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}.text-bottom-blog.jsx-2429030913 b.jsx-2429030913{font-family:\"mont-semibold\";}.font-mont-regular.jsx-2429030913{font-family:\"mont-regular\";}.box-blog-especifico.jsx-2429030913{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:4rem 9rem;font-family:\"mont-regular\";}.box-autor-blog.jsx-2429030913{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:left;-webkit-justify-content:left;-ms-flex-pack:left;justify-content:left;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:7rem;width:20%;}.box-autor-text-blog.jsx-2429030913{padding-left:1rem;}.box-articulo-blog.jsx-2429030913{width:80%;}.text-autor.jsx-2429030913{color:#575756;font-style:normal;font-weight:bold;font-size:1.2rem;font-family:\"mont-heavy\";}.text-fecha.jsx-2429030913{color:#556ea1;font-style:normal;font-weight:normal;font-size:1rem;}.box-articulo-title-blog.jsx-2429030913{padding:0rem 2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.box-articulo-title-blog.jsx-2429030913 h2.jsx-2429030913{font-family:\"mont-semibold\";font-style:normal;font-weight:bold;text-align:center;color:#575756;margin:2rem 0rem;}.star-blog.jsx-2429030913{color:#febf41;}.nube1.jsx-2429030913{position:absolute;top:70%;left:2%;}.nube2.jsx-2429030913{position:absolute;top:50%;right:2%;}.nube3.jsx-2429030913{position:absolute;top:140%;right:3%;}.box-articulo-img-principal-blog.jsx-2429030913{position:relative;z-index:2;}.jodit-container:not(.jodit_inline){border:none !important;}.box-blog-general.jsx-2429030913{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:3rem 9rem;font-family:\"mont-regular\";}.card-title.jsx-2429030913{font-family:\"mont-semibold\";}.card-text.jsx-2429030913{font-family:\"mont-light\";}.jodit.jsx-2429030913,.jodit.jsx-2429030913 *.jsx-2429030913,.jodit-container.jsx-2429030913,.jodit-container.jsx-2429030913 *.jsx-2429030913 span.jsx-2429030913{font-family:\"mont-regular\" !important;}.font-semibold-mont.jsx-2429030913{font-family:\"mont-semibold\";}.jodit-status-bar{display:none !important;}@media (min-width:1800px){.box-blog-general.jsx-2429030913{padding:2rem 0rem;}.subtitle-dark-blog.jsx-2429030913{color:#575756;font-family:\"mont-semibold\";font-size:1.3rem;text-align:center;margin:0rem 20rem;margin-bottom:-12rem;margin-top:3rem;}.container.jsx-2429030913,.container-lg.jsx-2429030913,.container-md.jsx-2429030913,.container-sm.jsx-2429030913,.container-xl.jsx-2429030913{max-width:1600px !important;}.card-title.jsx-2429030913{font-size:1rem !important;}.card-text.jsx-2429030913{font-size:0.8rem;}.card-blog.jsx-2429030913{height:26rem;}.nube1.jsx-2429030913{top:50%;left:20%;}.nube2.jsx-2429030913{top:80%;right:15%;}.nube3.jsx-2429030913{top:140%;right:15%;}}@media (max-width:768px){.box-blog-especifico.jsx-2429030913{padding:1rem 1.5rem 3rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.box-autor-blog.jsx-2429030913{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:left;-webkit-justify-content:left;-ms-flex-pack:left;justify-content:left;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:7rem;width:100%;}.box-autor-text-blog.jsx-2429030913{padding-left:1rem;}.box-articulo-blog.jsx-2429030913{width:100%;}.text-autor.jsx-2429030913{font-size:1.1rem;margin-bottom:0 !important;}.text-fecha.jsx-2429030913{font-size:0.8rem;}.box-articulo-title-blog.jsx-2429030913 h2.jsx-2429030913{font-size:1.3rem;}.star-blog.jsx-2429030913{color:#febf41;font-size:1.2rem;}.nube1.jsx-2429030913{position:absolute;top:160%;left:-5%;}.nube2.jsx-2429030913{position:absolute;top:90%;right:1%;}.nube3.jsx-2429030913{position:absolute;top:350%;right:1%;}.box-banner-blog.jsx-2429030913{height:12rem;}.text-title-blog.jsx-2429030913{font-size:2rem;margin:0rem 0.5rem 0rem;}.ondas.jsx-2429030913{width:3rem;}.box-banner-blog.jsx-2429030913{height:12rem;}.text-title-blog.jsx-2429030913{font-family:\"Clicker Script\",cursive;font-size:2rem;}.subtitle-dark-blog.jsx-2429030913{font-size:1rem;text-align:center;margin:0rem;margin-bottom:0rem;margin-top:2rem;}.box-card-group.jsx-2429030913{position:relative;top:3rem;z-index:10;}.card-blog.jsx-2429030913{text-align:center;background:#ffffff;box-shadow:0px 14px 20px -5px rgba(0,0,0,0.2);border-radius:20px;font-family:\"Montserrat\",sans-serif;border-radius:1.28rem !important;width:18rem;height:auto;}.box-green-blog-img-fondo.jsx-2429030913{position:absolute;height:30rem;bottom:10%;}.text-bottom-blog.jsx-2429030913{font-size:1rem;padding-bottom:2rem;}.box-blog-general.jsx-2429030913{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:2rem 1.5rem 12rem;}.card-deck.jsx-2429030913{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column !important;-ms-flex-direction:column !important;flex-direction:column !important;}.card-deck.jsx-2429030913 .card-blog.jsx-2429030913{margin-bottom:1rem !important;}}@media (max-width:420px){.nube1.jsx-2429030913{position:absolute;top:100%;left:-15%;}.nube2.jsx-2429030913{position:absolute;top:50%;right:1%;}.nube3.jsx-2429030913{position:absolute;right:1%;width:5rem;top:auto;bottom:-150%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamNxdWlcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxoZW5yaV9iYXJyZXR0XFx5ZXMtbW9tXFx5ZXNtb21fbmV4dFxccGFnZXNcXGJsb2dcXFtibG9nXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwSFMsQUFHMEIsQUFTeUIsQUFReEIsQUFTSSxBQU1BLEFBVUEsQUFJSixBQVljLEFBR0QsQUFJaEIsQUFPRSxBQVFLLEFBR1IsQUFHSSxBQU9BLEFBTUksQUFPVSxBQVFkLEFBR0ksQUFLQSxBQUtBLEFBS0EsQUFJSyxBQUdaLEFBU2lCLEFBSUgsQUFNYSxBQUlWLEFBR0osQUFTSixBQUdKLEFBYWMsQUFHRixBQUdULEFBR0osQUFHTCxBQUlBLEFBSUMsQUFPZ0IsQUFNWixBQVFLLEFBR1AsQUFHTSxBQUlBLEFBR0EsQUFHSCxBQUlJLEFBS0EsQUFLQSxBQUtMLEFBSUUsQUFJSixBQUdFLEFBR3lCLEFBS3ZCLEFBT0csQUFNQSxBQVVBLEFBTUgsQUFLSixBQU9FLEFBSWlCLEFBTVosQUFLQSxBQUtBLFFBL0lULEFBSUMsQ0FJQSxDQS9IZCxDQWxCZSxBQTBFQSxBQStGYixBQXdDQSxBQTZDZSxFQS9UNEMsQUF1TTNELEFBbUVBLEFBV0EsQ0FwUTJCLEFBNkJBLEFBd0NULEFBT0EsQUFxQnBCLEFBK0RnQyxBQXNFWCxDQXVCTyxBQWVOLEFBNkJFLEVBdEh0QixBQU9BLEFBa0M2QixBQUk3QixBQUdBLENBMU5VLEFBTVMsQUFVckIsQUFzQ0EsQUFtQmUsQUFrQkwsQUFLQSxBQUtDLEFBS0MsQUEwQ1YsQUFpQ0EsQUF3QkEsQUFvQlcsQUFLRCxBQUtDLEFBK0JBLEFBTVUsQUFVTixBQTRCSixBQUtELEFBS0MsQ0F2SVgsSUEzRUYsQ0E2QkEsQ0FiQSxBQWlFaUIsQ0FuR1AsQUFLQyxBQXNFVCxBQWdFVyxBQXFGQSxDQXpSYixBQW1FVyxBQTRIRSxBQVVBLEFBK0JFLEFBNENELEFBVUMsQ0FoVUYsQUErQmIsQUFnRG9CLEFBMkJwQixBQWVBLEFBY0EsQUE0QkUsRUE0SUEsQ0FsRkEsQUE2RGEsQ0E5TkksQUFPRSxDQWdNTCxDQXZLaEIsQ0FLQSxBQXNJRSxBQXlEQSxBQTRCQSxDQXRORixBQTRIRSxBQVVBLENBOVBpQixBQXdCZ0MsQUF1UGhDLEFBbUJrQyxBQXVDbkQsQ0FwTEYsQUF3SUUsQUFzRFcsQ0FoVWIsQUFtUEUsRUE3UGlCLEFBNkJBLENBbUlFLEFBb0luQixFQXhFQSxDQWlEcUIsQ0FwTEosQ0FrUEYsRUFyUUUsRUFPRixDQTBMZixFQS9Rc0IsSUFTSixBQTZCQSxDQW1JRSxDQTJLcEIsR0FsUGtCLENBb0xBLEVBdk1PLEFBTzNCLE1BL0Z3QixFQXVFSCxBQXVKRSxBQXVHYyxFQTNUeEIsQUFTTyxBQThCQSxDQWtJRSxHQTZHcEIsQ0FwTGMsRUEzRUssQUEwUUUsRUExT0gsQUEwRUssQUFvTEUsRUFwVFAsSUE4RXBCLENBVXFCLEVBbEdOLEFBbUJRLEFBOEJWLENBMkRNLEFBdUVNLElBcUNDLEdBdkxHLEFBMFFZLENBMU9aLEVBdEQ3QixBQXVDVyxPQTJEWCxFQTFENkIsQ0EvQlgsQ0FnS0UsYUFsSmUsQ0FnQ25DLENBN0NBLENBZ0tFLE1BdUhtQyxLQXJPZCxBQXVKRSxrQkEzSEEsQ0FoRVgsTUFsQ1csR0E0U1QsR0F6UUYsR0FxTFosTUFxRmMsQ0FuS1EsQUFvTEUsQ0FNeEIsQ0FoU0YsU0EwUUUsWUEzUEYsMkJBb0JxQixBQXVKRSwwQkEzSEYsRUF3Q0QsQUFvTFUsS0E5VFQsYUEySVEsUUFvTDNCLG1CQW5MRixvQkFyRWMsQUF1SkUsWUF0SkosQUF1SkcsVUF0SmYsQ0F1SkUsR0E3SEYsT0FsR0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxqY3F1aVxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXGhlbnJpX2JhcnJldHRcXHllcy1tb21cXHllc21vbV9uZXh0XFxwYWdlc1xcYmxvZ1xcW2Jsb2ddLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9BcHBMYXlvdXRcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYVN0YXIgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuXHJcbmNvbnN0IGltcG9ydEpvZGl0ID0gKCkgPT4gaW1wb3J0KFwiam9kaXQtcmVhY3RcIik7XHJcbmNvbnN0IEpvZGl0RWRpdG9yID0gZHluYW1pYyhpbXBvcnRKb2RpdCwge1xyXG4gIHNzcjogZmFsc2UsXHJcbn0pO1xyXG5cclxuY29uc3QgQ2FyZEJsb2dFc3BlY2lmaWMgPSAoeyBjdXJyZW50RGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgW2NvbmZpZywgc2V0Q29uZmlnXSA9IHVzZVN0YXRlKHtcclxuICAgIHJlYWRvbmx5OiB0cnVlLFxyXG4gICAgdG9vbGJhcjogZmFsc2UsXHJcbiAgfSk7XHJcbiAgY29uc3QgW2NvbnRlbmlkbywgc2V0Q29udGVuaWRvXSA9IHVzZVN0YXRlKFxyXG4gICAgJzxwPjxzcGFuIHN0eWxlPVwiZm9udC1mYW1pbHk6IFRhaG9tYSwgR2VuZXZhLCBzYW5zLXNlcmlmO1wiPlR1IEJhYnkgU2hvd2VyIGVzIHVubyBkZSBsb3MgbW9tZW50b3MgbcOhcyBlc3BlcmFkb3MgcGFyYSB0aSB5IGxvcyBtaWVtYnJvcyBkZSB0dSBmYW1pbGlhIHF1ZSBoYW4gZXN0YWRvIGFsIHBlbmRpZW50ZSBkZWwgbmFjaW1pZW50byBkZSB0dSBwcsOzeGltbyBiZWLDqS4gQXF1w60gdGUgZGVqYW1vcyB1bm9zIGNvbnNlam9zIHBhcmEgY2VsZWJyYXIgZGUgdW5hIG1lam9yIG1hbmVyYSB0dSBiYWJ5IHNob3dlciB2aXJ0dWFsLjwvc3Bhbj48L3A+PHVsPjxsaT48c3BhbiBzdHlsZT1cImZvbnQtZmFtaWx5OiBUYWhvbWEsIEdlbmV2YSwgc2Fucy1zZXJpZjtcIj48c3Ryb25nPjxzcGFuIHN0eWxlPVwiZm9udC1mYW1pbHk6IFRhaG9tYSwgR2VuZXZhLCBzYW5zLXNlcmlmO1wiPjxzcGFuIHN0eWxlPVwiY29sb3I6IHJnYig3NSwgMTAwLCAxNjQpOyBmb250LWZhbWlseTogVGFob21hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XCI+Um9sIGRlIGFuZml0cmlvbmE8L3NwYW4+PC9zcGFuPjwvc3Ryb25nPjwvc3Bhbj48L2xpPjwvdWw+PHA+PHNwYW4gc3R5bGU9XCJjb2xvcjogcmdiKDAsIDAsIDApOyBmb250LWZhbWlseTogVGFob21hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XCI+U2kgZXMgcXVlIHTDuiBlcmVzIGxhIGVtYmFyYXphZGEgcXVlIHF1aWVyZSBpbnZpdGFyIGEgc3VzIGFtaWdvcyBhIHR1IGJhYnkgc2hvd2VyIHkgbm8gcXVpZXJlcyBzYWJlciBuYWRhIGRlIGxhIG9yZ2FuaXphY2nDs24sIGRlYmVzIGVsZWdpciB1bmEgYW1pZ2EgbyBoZXJtYW5hIHkgbm9tYnJhcmxhIOKAnGFuZml0cmlvbmHigJ0gZGVsIGV2ZW50by4gRWxsYSBzZXLDoSBsYSBlbmNhcmdhZGEgZGUgbGEgcHJvZHVjY2nDs24geSBhc8OtIHTDuiBzZXLDoXMgcmVhbG1lbnRlIGxhIGVzdHJlbGxhIGRlbCBldmVudG8uIDwvc3Bhbj48L3A+PHA+PHNwYW4gc3R5bGU9XCJjb2xvcjogcmdiKDAsIDAsIDApOyBmb250LWZhbWlseTogVGFob21hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XCI+U2kgZXMgcXVlIHTDuiBlcmVzIGxhIG9yZ2FuaXphZG9yYSBkZWwgZXZlbnRvLCBkZWJlcyB0b21hciBlbCByb2wgZGUgYW5maXRyaW9uYSB5IHNlciByZXNwb25zYWJsZSBkZSBpbnZpdGFyIGEgbGFzIHBlcnNvbmFzIHkgZGUgcGxhbmVhciBsYXMgYWN0aXZpZGFkZXMgeSBqdWVnb3MuIFB1ZWRlcyBkaXNlw7FhciBpbnZpdGFjaW9uZXMgeSBlbnZpYXJsYXMgcG9yIGNvcnJlbyBvIGEgdHJhdsOpcyBkZSBSZWRlcyBTb2NpYWxlcy48L3NwYW4+PC9wPjx1bD48bGk+PHNwYW4gc3R5bGU9XCJmb250LWZhbWlseTogVGFob21hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XCI+PHN0cm9uZz48c3BhbiBzdHlsZT1cImNvbG9yOiByZ2IoNzUsIDEwMCwgMTY0KTsgZm9udC1mYW1pbHk6IFRhaG9tYSwgR2VuZXZhLCBzYW5zLXNlcmlmO1wiPkVsZWdpciB1biBzaXRpbyBkZSB2aWRlbyBjaGF0PC9zcGFuPjwvc3Ryb25nPjwvc3Bhbj48L2xpPjwvdWw+PHA+PHNwYW4gc3R5bGU9XCJjb2xvcjogcmdiKDAsIDAsIDApOyBmb250LWZhbWlseTogVGFob21hLCBHZW5ldmEsIHNhbnMtc2VyaWY7IGZvbnQtc2l6ZTogMXJlbTtcIj5ZYSBzZWEgWm9vbSwgSG91c2VQYXJ0eSwgU2t5cGUgbyBIYW5nb3V0cywgZGViZXMgZWxlZ2lyIHVuYSBwbGF0YWZvcm1hIHF1ZSBzb3BvcnRlIGEgbGEgY2FudGlkYWQgZGUgZ2VudGUgcXVlIGVzdMOhIGludml0YWRhIHkgcXVlIHNlYSBhY2Nlc2libGUgcGFyYSB0b2RvcyBlbGxvcy4gUXVpesOhcyBkZWJhcyBoYWNlciB1bmEgcHJ1ZWJhIGRlIGNvbmV4acOzbiBjb24gY2llcnRhcyBwZXJzb25hcyBjb24gYW50aWNpcGFjacOzbi4gPC9zcGFuPjwvcD48cD48c3BhbiBzdHlsZT1cImNvbG9yOiByZ2IoMCwgMCwgMCk7IGZvbnQtZmFtaWx5OiBUYWhvbWEsIEdlbmV2YSwgc2Fucy1zZXJpZjsgZm9udC1zaXplOiAxcmVtO1wiPk90cmEgb3BjacOzbiBlcyB0cmFuc21pdGlyIGVsIGJhYnkgc2hvd2VyIGVuIHZpdm86IG9yZ2FuaXphIHVuIGxpdmVzdHJlYW0gZSBpbnZpdGEgYSB0dXMgZmFtaWxpYXJlcyB5IGFtaWdvcyBhIGFzaXN0aXIgeSBjb21lbnRhci4gUHVlZGUgc2VyIGEgdHJhdsOpcyBkZSBJbnN0YWdyYW0geSBhc8OtIHRvZG9zIHR1cyBzZWd1aWRvcmVzIHBvZHLDoW4gdmVydGUgYWJyaWVuZG8gcmVnYWxvcyBvIHJlYWxpemFuZG8gYWN0aXZpZGFkZXMgZW50cmV0ZW5pZGFzLjwvc3Bhbj48L3A+PHVsPjxsaT48c3BhbiBzdHlsZT1cImNvbG9yOiByZ2IoMCwgMCwgMCk7IGZvbnQtZmFtaWx5OiBUYWhvbWEsIEdlbmV2YSwgc2Fucy1zZXJpZjsgZm9udC1zaXplOiAxcmVtO1wiPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpOyBjb2xvcjogcmdiKDc0LCAxMzQsIDIzMik7XCI+PHN0cm9uZyBzdHlsZT1cIlwiPjxzcGFuIHN0eWxlPVwiY29sb3I6IHJnYig3NSwgMTAwLCAxNjQpOyBmb250LWZhbWlseTogVGFob21hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XCI+UGxhbmlmaWNhIGFjdGl2aWRhZGVzPC9zcGFuPjwvc3Ryb25nPjwvc3Bhbj48L3NwYW4+PC9saT48L3VsPjxwPjxzcGFuIHN0eWxlPVwiY29sb3I6IHJnYigwLCAwLCAwKTsgZm9udC1mYW1pbHk6IFRhaG9tYSwgR2VuZXZhLCBzYW5zLXNlcmlmO1wiPlF1aXrDoXMgbGEgcGFydGUgbcOhcyBpbXBvcnRhbnRlIGRlbCBiYWJ5IHNob3dlcjogbG9zIGludml0YWRvcyBwYXJ0aWNpcGFyw6FuIGVuIGxvcyBqdWVnb3MgcXVlIG9yZ2FuaWNlcyBjb24gbGEgZW1iYXJhemFkYSBlbiBlbCBjZW50cm8gZGUgdG9kYXMgbGFzIGFjdGl2aWRhZGVzLjwvc3Bhbj48L3A+PHVsPjxsaT48c3BhbiBzdHlsZT1cImNvbG9yOiByZ2IoNzUsIDEwMCwgMTY0KTtcIj48c3Ryb25nPjxzcGFuIHN0eWxlPVwiZm9udC1mYW1pbHk6IFRhaG9tYSwgR2VuZXZhLCBzYW5zLXNlcmlmO1wiPkhvcmEgZGUgbG9zIHJlZ2Fsb3M8L3NwYW4+PC9zdHJvbmc+PC9zcGFuPjwvbGk+PC91bD48cD48c3BhbiBzdHlsZT1cImNvbG9yOiByZ2IoMCwgMCwgMCk7IGZvbnQtZmFtaWx5OiBUYWhvbWEsIEdlbmV2YSwgc2Fucy1zZXJpZjtcIj5MbyBtw6FzIHByb2JhYmxlIGVzIHF1ZSBsYSBmaWVzdGEgdGVybWluZSBjb24gcXVlIGxhIGZ1dHVyYSBtYW3DoSBhYnJhIGxvcyByZWdhbG9zLiBFc3RvIHNvbG8gZXMgcG9zaWJsZSBzaSBsb3MgaW52aXRhZG9zIGVudsOtYW4gc3UgcmVnYWxvIGNvbiBhbnRpY2lwYWNpw7NuLiBVbmEgYnVlbmEgaWRlYSBlcyBxdWUgbGEgZmVzdGVqYWRhIG5vIHNlcGEgcXVpw6luIGVudmnDsyBxdcOpLCB5IGxvcyB2YXlhIGFicmllbmRvIGZyZW50ZSBsYSBjw6FtYXJhIHkgYWRpdmluZSBxdWnDqW4gZXMgbGEgZHVlw7FhIGRlIGNhZGEgcmVnYWxvLiBMYSBvdHJhIG9wY2nDs24gZXMgcXVlIGxvcyBpbnZpdGFkb3MgYWJyYW4gbG9zIHJlZ2Fsb3MgeSBsdWVnbyBzZSBsbyBlbnbDrWVuIHBvciBjb3JyZW8uIDwvc3Bhbj48L3A+PHA+PHNwYW4gc3R5bGU9XCJjb2xvcjogcmdiKDAsIDAsIDApOyBmb250LWZhbWlseTogVGFob21hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XCI+U2kgc2/DsWFiYXMgY29uIHR1IGJhYnkgc2hvd2VyLCDCoWHDum4gcHVlZGVzIHBsYW5lYXIgdHUgYmFieSBzaG93ZXIgdmlydHVhbCEgQWRlbcOhcywgZXMgdW5hIGJ1ZW5hIG9wb3J0dW5pZGFkIHBhcmEgcGFzYXIgbW9tZW50b3MgYWdyYWRhYmxlcyBqdW50byBhIHR1IGZhbWlsaWEgeSBhbWlnb3MuPC9zcGFuPjwvcD48cD48YnI+PC9wPidcclxuICApO1xyXG4gIC8vIGlmKHJvdXRlci5pc0ZhbGxiYWNrKXtcclxuICAvLyAgICAgcmV0dXJuIDxkaXY+Q0FSR0FORE8uLi48L2Rpdj5cclxuICAvLyB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwTGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhZGUtaW4gYW5pbWF0ZWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1iYW5uZXItYmxvZ1wiPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9vbmRhLWJsYW5jYS5zdmdcIlxyXG4gICAgICAgICAgICBhbHQ9XCJvbmRhc1wiXHJcbiAgICAgICAgICAgIHdpZHRoPXsyMH1cclxuICAgICAgICAgICAgaGVpZ2h0PXs1MH1cclxuICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9uZGFzXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC10aXRsZS1ibG9nXCI+RGV0YWxsZXMgZGUgYmxvZzwvaDQ+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPVwiL2ltYWdlL29uZGEtYmxhbmNhLnN2Z1wiXHJcbiAgICAgICAgICAgIGFsdD1cIm9uZGFzXCJcclxuICAgICAgICAgICAgd2lkdGg9ezIwfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezUwfVxyXG4gICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwib25kYXNcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1ibG9nLWVzcGVjaWZpY29cIj5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9XCIvaW1hZ2UvYmxvZy9udWJlMS5wbmdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJudWJlMSBoZWFydGJlYXRcIlxyXG4gICAgICAgICAgICB3aWR0aD17NzB9XHJcbiAgICAgICAgICAgIGhlaWdodD17NzB9XHJcbiAgICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxyXG4gICAgICAgICAgICBhbHQ9XCJudWJlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPVwiL2ltYWdlL2Jsb2cvbnViZTIucG5nXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibnViZTIgaGVhcnRiZWF0XCJcclxuICAgICAgICAgICAgd2lkdGg9ezcwfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezcwfVxyXG4gICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgICAgICAgICAgYWx0PVwibnViZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9ibG9nL251YmUzLnBuZ1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm51YmUzIGhlYXJ0YmVhdFwiXHJcbiAgICAgICAgICAgIHdpZHRoPXs3MH1cclxuICAgICAgICAgICAgaGVpZ2h0PXs3MH1cclxuICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgICAgIGFsdD1cIm51YmVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LWF1dG9yLWJsb2dcIj5cclxuICAgICAgICAgICAgPGZpZ3VyZT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICBjdXJyZW50RGF0YS5pbWFnZW5lc1swXS50eXBlSW1hZ2UgPT09IFwiQVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBjdXJyZW50RGF0YS5pbWFnZW5lc1swXS51cmxcclxuICAgICAgICAgICAgICAgICAgICA6IGN1cnJlbnREYXRhLmltYWdlbmVzWzFdLnVybFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtYXV0b3ItdGV4dC1ibG9nXCI+XHJcbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtYXV0b3JcIj57Y3VycmVudERhdGEuYmxvZy5hdXRvcn08L2g1PlxyXG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LWZlY2hhXCI+e2N1cnJlbnREYXRhLmJsb2cuZmVjaGEuc3Vic3RyKDAsMTApfTwvaDU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1hcnRpY3Vsby1ibG9nXCI+XHJcbiAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiYm94LWFydGljdWxvLWltZy1wcmluY2lwYWwtYmxvZ1wiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnREYXRhLmltYWdlbmVzWzBdLnR5cGVJbWFnZSA9PT0gXCJQXCJcclxuICAgICAgICAgICAgICAgICAgICA/IGN1cnJlbnREYXRhLmltYWdlbmVzWzBdLnVybFxyXG4gICAgICAgICAgICAgICAgICAgIDogY3VycmVudERhdGEuaW1hZ2VuZXNbMV0udXJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDBcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1hcnRpY3Vsby10aXRsZS1ibG9nXCI+XHJcbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgICAgaWNvbj17ZmFTdGFyfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3Rhci1ibG9nIGhlYXJ0YmVhdFwiXHJcbiAgICAgICAgICAgICAgPjwvRm9udEF3ZXNvbWVJY29uPlxyXG4gICAgICAgICAgICAgIDxoMj4ge2N1cnJlbnREYXRhLmJsb2cudGl0dWxvfTwvaDI+XHJcbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgICAgaWNvbj17ZmFTdGFyfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3Rhci1ibG9nIGhlYXJ0YmVhdFwiXHJcbiAgICAgICAgICAgICAgPjwvRm9udEF3ZXNvbWVJY29uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEpvZGl0RWRpdG9yXHJcbiAgICAgICAgICAgICAgY29uZmlnPXtjb25maWd9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbnRlbmlkb31cclxuICAgICAgICAgICAgICBuYW1lPVwiY29udGVuaWRvXCJcclxuICAgICAgICAgICAgICAvLyBvbkJsdXI9e2hhbmRsZUJsdXJBcmVhQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuYm94LWJhbm5lci1ibG9nIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNXJlbTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2ltYWdlL2Jsb2cvYmxvZy5wbmcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50ZXh0LXRpdGxlLWJsb2cge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJDbGlja2VyIFNjcmlwdFwiLCBjdXJzaXZlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcmVtIDFyZW0gMHJlbTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc3VidGl0bGUtZGFyay1ibG9nIHtcclxuICAgICAgICAgICAgY29sb3I6ICM1NzU3NTY7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnQtcmVndWxhclwiO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDByZW0gMTVyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0xMnJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ib3gtY2FyZC1ncm91cCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiAxNnJlbTtcclxuICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNhcmQtYmxvZyB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDE0cHggMjBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1yZWd1bGFyXCI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEuMjhyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgd2lkdGg6IDE4cmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYm94LWdyZWVuLWJsb2cge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRleHQtYm90dG9tLWJsb2cge1xyXG4gICAgICAgICAgICBjb2xvcjogI2FiYzBhMztcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1yZWd1bGFyXCI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC8qIG1hcmdpbjogM3JlbSAyMHJlbTsgKi9cclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDE2JTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRleHQtYm90dG9tLWJsb2cgYiB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnQtc2VtaWJvbGRcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb250LW1vbnQtcmVndWxhciB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnQtcmVndWxhclwiO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5ib3gtYmxvZy1lc3BlY2lmaWNvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDRyZW0gOXJlbTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1yZWd1bGFyXCI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJveC1hdXRvci1ibG9nIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDdyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYm94LWF1dG9yLXRleHQtYmxvZyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ib3gtYXJ0aWN1bG8tYmxvZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGV4dC1hdXRvciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNTc1NzU2O1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1oZWF2eVwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRleHQtZmVjaGEge1xyXG4gICAgICAgICAgICBjb2xvcjogIzU1NmVhMTtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYm94LWFydGljdWxvLXRpdGxlLWJsb2cge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcmVtIDJyZW07XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJveC1hcnRpY3Vsby10aXRsZS1ibG9nIGgyIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1zZW1pYm9sZFwiO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNTc1NzU2O1xyXG4gICAgICAgICAgICBtYXJnaW46IDJyZW0gMHJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdGFyLWJsb2cge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZlYmY0MTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5udWJlMSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA3MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDIlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm51YmUyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgcmlnaHQ6IDIlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm51YmUzIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDE0MCU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAzJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ib3gtYXJ0aWN1bG8taW1nLXByaW5jaXBhbC1ibG9nIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgOmdsb2JhbCguam9kaXQtY29udGFpbmVyOm5vdCguam9kaXRfaW5saW5lKSkge1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ib3gtYmxvZy1nZW5lcmFsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzcmVtIDlyZW07XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnQtcmVndWxhclwiO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jYXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1zZW1pYm9sZFwiO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jYXJkLXRleHQge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJtb250LWxpZ2h0XCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuam9kaXQsXHJcbiAgICAgICAgICAuam9kaXQgKixcclxuICAgICAgICAgIC5qb2RpdC1jb250YWluZXIsXHJcbiAgICAgICAgICAuam9kaXQtY29udGFpbmVyICogc3BhbiB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnQtcmVndWxhclwiICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmZvbnQtc2VtaWJvbGQtbW9udCB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnQtc2VtaWJvbGRcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDpnbG9iYWwoLmpvZGl0LXN0YXR1cy1iYXIpIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHsvKiA6Z2xvYmFsKC5qb2RpdC1jb250YWluZXIpIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMHJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfSAqL31cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTgwMHB4KSB7XHJcbiAgICAgICAgICAgIC5ib3gtYmxvZy1nZW5lcmFsIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtIDByZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnN1YnRpdGxlLWRhcmstYmxvZyB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM1NzU3NTY7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1zZW1pYm9sZFwiO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBtYXJnaW46IDByZW0gMjByZW07XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTEycmVtO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbnRhaW5lcixcclxuICAgICAgICAgICAgLmNvbnRhaW5lci1sZyxcclxuICAgICAgICAgICAgLmNvbnRhaW5lci1tZCxcclxuICAgICAgICAgICAgLmNvbnRhaW5lci1zbSxcclxuICAgICAgICAgICAgLmNvbnRhaW5lci14bCB7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNjAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNhcmQtdGV4dCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNhcmQtYmxvZyB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyNnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubnViZTEge1xyXG4gICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDIwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubnViZTIge1xyXG4gICAgICAgICAgICAgIHRvcDogODAlO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAxNSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm51YmUzIHtcclxuICAgICAgICAgICAgICB0b3A6IDE0MCU7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDE1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAuYm94LWJsb2ctZXNwZWNpZmljbyB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMXJlbSAxLjVyZW0gM3JlbTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ib3gtYXV0b3ItYmxvZyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogN3JlbTtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYm94LWF1dG9yLXRleHQtYmxvZyB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ib3gtYXJ0aWN1bG8tYmxvZyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRleHQtYXV0b3Ige1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGV4dC1mZWNoYSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJveC1hcnRpY3Vsby10aXRsZS1ibG9nIGgyIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc3Rhci1ibG9nIHtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZlYmY0MTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubnViZTEge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IDE2MCU7XHJcbiAgICAgICAgICAgICAgbGVmdDogLTUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5udWJlMiB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHRvcDogOTAlO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAxJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubnViZTMge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IDM1MCU7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDElO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ib3gtYmFubmVyLWJsb2cge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTJyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50ZXh0LXRpdGxlLWJsb2cge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgICBtYXJnaW46IDByZW0gMC41cmVtIDByZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm9uZGFzIHtcclxuICAgICAgICAgICAgICB3aWR0aDogM3JlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYm94LWJhbm5lci1ibG9nIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEycmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50ZXh0LXRpdGxlLWJsb2cge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkNsaWNrZXIgU2NyaXB0XCIsIGN1cnNpdmU7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc3VidGl0bGUtZGFyay1ibG9nIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMHJlbTtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcmVtO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJveC1jYXJkLWdyb3VwIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgdG9wOiAzcmVtO1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY2FyZC1ibG9nIHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTRweCAyMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEuMjhyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB3aWR0aDogMThyZW07XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ib3gtZ3JlZW4tYmxvZy1pbWctZm9uZG8ge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDMwcmVtO1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogMTAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGV4dC1ib3R0b20tYmxvZyB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYm94LWJsb2ctZ2VuZXJhbCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMS41cmVtIDEycmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jYXJkLWRlY2sge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jYXJkLWRlY2sgLmNhcmQtYmxvZyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbiAgICAgICAgICAgIC5udWJlMSB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICAgICAgICBsZWZ0OiAtMTUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5udWJlMiB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAxJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubnViZTMge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICByaWdodDogMSU7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDVyZW07XHJcbiAgICAgICAgICAgICAgdG9wOiBhdXRvO1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogLTE1MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9BcHBMYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAvLyBDYWxsIGFuIGV4dGVybmFsIEFQSSBlbmRwb2ludCB0byBnZXQgcG9zdHNcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9nZXRCbG9nQWxsL3VzZXI/bGltaXQ9YWxsXCIpO1xyXG4gIGNvbnN0IGJsb2dzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBjb25zb2xlLmxvZyhibG9ncy5sZW5ndGgsIFwib2ppdG9hXCIpO1xyXG4gIC8vIEdldCB0aGUgcGF0aHMgd2Ugd2FudCB0byBwcmUtcmVuZGVyIGJhc2VkIG9uIHBvc3RzXHJcbiAgY29uc3QgcGF0aHMgPSBibG9ncy5tYXAoKGJsb2cpID0+ICh7XHJcbiAgICBwYXJhbXM6IHsgYmxvZzogU3RyaW5nKGJsb2cuYmxvZy5faWQpIH0sXHJcbiAgfSkpO1xyXG5cclxuICAvLyBXZSdsbCBwcmUtcmVuZGVyIG9ubHkgdGhlc2UgcGF0aHMgYXQgYnVpbGQgdGltZS5cclxuICAvLyB7IGZhbGxiYWNrOiBmYWxzZSB9IG1lYW5zIG90aGVyIHJvdXRlcyBzaG91bGQgNDA0LlxyXG4gIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogZmFsc2UgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICAvLyBDYWxsIGFuIGV4dGVybmFsIEFQSSBlbmRwb2ludCB0byBnZXQgcG9zdHMuXHJcbiAgLy8gWW91IGNhbiB1c2UgYW55IGRhdGEgZmV0Y2hpbmcgbGlicmFyeVxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjUwMDAvZ2V0QmxvZy8ke3BhcmFtcy5ibG9nfWApO1xyXG4gIGNvbnN0IGN1cnJlbnREYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgLy8gQnkgcmV0dXJuaW5nIHsgcHJvcHM6IHBvc3RzIH0sIHRoZSBCbG9nIGNvbXBvbmVudFxyXG4gIC8vIHdpbGwgcmVjZWl2ZSBgcG9zdHNgIGFzIGEgcHJvcCBhdCBidWlsZCB0aW1lXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGN1cnJlbnREYXRhOiBjdXJyZW50RGF0YVswXSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZEJsb2dFc3BlY2lmaWM7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\jcqui\\\\OneDrive\\\\Escritorio\\\\henri_barrett\\\\yes-mom\\\\yesmom_next\\\\pages\\\\blog\\\\[blog].js */"
    }, void 0, false, void 0, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, undefined);
};

async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("http://localhost:5000/getBlogAll/user?limit=all");
  const blogs = await res.json();
  console.log(blogs.length, "ojitoa"); // Get the paths we want to pre-render based on posts

  const paths = blogs.map(blog => ({
    params: {
      blog: String(blog.blog._id)
    }
  })); // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.

  return {
    paths,
    fallback: false
  };
}
async function getStaticProps({
  params
}) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`http://localhost:5000/getBlog/${params.blog}`);
  const currentData = await res.json(); // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time

  return {
    props: {
      currentData: currentData[0]
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (CardBlogEspecific);

/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "jodit-react":
/*!******************************!*\
  !*** external "jodit-react" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jodit-react");

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/Link");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-bootstrap/Button":
/*!*****************************************!*\
  !*** external "react-bootstrap/Button" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ "react-bootstrap/Form":
/*!***************************************!*\
  !*** external "react-bootstrap/Form" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Form");

/***/ }),

/***/ "react-bootstrap/FormControl":
/*!**********************************************!*\
  !*** external "react-bootstrap/FormControl" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/FormControl");

/***/ }),

/***/ "react-bootstrap/Nav":
/*!**************************************!*\
  !*** external "react-bootstrap/Nav" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ "react-bootstrap/Navbar":
/*!*****************************************!*\
  !*** external "react-bootstrap/Navbar" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Navbar");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcExheW91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvaW1hZ2UudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYmxvZy9bYmxvZ10uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpvZGl0LXJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9MaW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9keW5hbWljXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtQ29udHJvbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9OYXZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvTmF2YmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbImFwcExheW91dCIsImNoaWxkcmVuIiwiRm9vdGVyIiwiZmFGYWNlYm9va0YiLCJmYVR3aXR0ZXIiLCJmYUluc3RhZ3JhbSIsIkhlYWRlciIsImdsb2JhbCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwibG9hZGVycyIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJkZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJsb2FkZXIiLCJwYXRoIiwiZG9tYWlucyIsInByb2Nlc3MiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiYSIsImxheW91dCIsIndpZHRocyIsImtpbmQiLCJ3aWR0aCIsInciLCJwIiwibG9hZCIsInJvb3QiLCJWQUxJRF9MT0FERVJTIiwiY29uZmlnTG9hZGVyIiwiZ2V0V2lkdGhzIiwibGFzdCIsInNyY1NldCIsImNhbGxMb2FkZXIiLCJpIiwic2l6ZXMiLCJzcmMiLCJwYXJzZUludCIsInVub3B0aW1pemVkIiwicHJpb3JpdHkiLCJhbGwiLCJyZXN0IiwidW5zaXplZCIsIkJvb2xlYW4iLCJKU09OIiwibG9hZGluZyIsImlzTGF6eSIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndpZHRoSW50IiwiZ2V0SW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImltZ1N0eWxlIiwidmlzaWJpbGl0eSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJoZWlnaHQiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaXNOYU4iLCJ3cmFwcGVyU3R5bGUiLCJvdmVyZmxvdyIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ0F0dHJpYnV0ZXMiLCJnZW5lcmF0ZUltZ0F0dHJzIiwicXVhbGl0eSIsInBhcmFtcyIsInBhcmFtc1N0cmluZyIsIm5vcm1hbGl6ZVNyYyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJjb25zb2xlIiwiY29uZmlnRG9tYWlucyIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJzZXRSZWYiLCJlbCIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiaWQiLCJvcHRpb25zIiwiaW5zdGFuY2UiLCJlbnRyaWVzIiwiZW50cnkiLCJjYWxsYmFjayIsImltcG9ydEpvZGl0IiwiSm9kaXRFZGl0b3IiLCJkeW5hbWljIiwic3NyIiwiQ2FyZEJsb2dFc3BlY2lmaWMiLCJjdXJyZW50RGF0YSIsImNvbmZpZyIsInNldENvbmZpZyIsInVzZVN0YXRlIiwicmVhZG9ubHkiLCJ0b29sYmFyIiwiY29udGVuaWRvIiwic2V0Q29udGVuaWRvIiwiaW1hZ2VuZXMiLCJ0eXBlSW1hZ2UiLCJ1cmwiLCJibG9nIiwiYXV0b3IiLCJmZWNoYSIsInN1YnN0ciIsImZhU3RhciIsInRpdHVsbyIsImdldFN0YXRpY1BhdGhzIiwicmVzIiwiZmV0Y2giLCJibG9ncyIsImpzb24iLCJsb2ciLCJsZW5ndGgiLCJwYXRocyIsIm1hcCIsIlN0cmluZyIsIl9pZCIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFB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Ozs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL2Jsb2cvW2Jsb2ddLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicGFnZXMvYmxvZy9bYmxvZ11cIjogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyB1bmNhdWdodCBlcnJvciBoYW5kbGVyIGZvciB3ZWJwYWNrIHJ1bnRpbWVcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHtcbiBcdFx0cHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiBcdFx0XHR0aHJvdyBlcnI7IC8vIGNhdGNoIHRoaXMgZXJyb3IgYnkgdXNpbmcgaW1wb3J0KCkuY2F0Y2goKVxuIFx0XHR9KTtcbiBcdH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYmxvZy9bYmxvZ10uanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLy4uL0Zvb3RlclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLy4uL0hlYWRlclwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5cclxuY29uc3QgYXBwTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC15ZXNtb21cIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPnllc21vbTwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN3YXRjaC80LjUuMi9mbGF0bHkvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cImVzdG8gZXMgZGVzY3JpcGNpb25cIj48L21ldGE+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEhlYWRlcj48L0hlYWRlcj5cclxuICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cclxuICAgICAgPEZvb3Rlcj48L0Zvb3Rlcj5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgXCJSb2JvdG9cIixcclxuICAgICAgICAgICAgICBcIk94eWdlblwiLCBcIlVidW50dVwiLCBcIkNhbnRhcmVsbFwiLCBcIkZpcmEgU2Fuc1wiLCBcIkRyb2lkIFNhbnNcIixcclxuICAgICAgICAgICAgICBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvZGUge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogc291cmNlLWNvZGUtcHJvLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJDb3VyaWVyIE5ld1wiLFxyXG4gICAgICAgICAgICAgIG1vbm9zcGFjZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDAmZGlzcGxheT1zd2FwXCIpO1xyXG4gICAgICAgICAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNsaWNrZXIrU2NyaXB0JmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbiAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1oZWF2eVwiO1xyXG4gICAgICAgICAgICBzcmM6IHVybChmb250cy9Nb250LUhlYXZ5Lm90Zik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm9tbmVzLWJvbGRcIjtcclxuICAgICAgICAgICAgc3JjOiB1cmwoZm9udHMvT01ORVMtQk9MRC5PVEYpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJvbW5lcy1yZWd1bGFyXCI7XHJcbiAgICAgICAgICAgIHNyYzogdXJsKGZvbnRzL09tbmVzLVJlZ3VsYXIub3RmKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1oZWF2eVwiO1xyXG4gICAgICAgICAgICBzcmM6IHVybChmb250cy9Nb250LUhlYXZ5Lm90Zik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnQtdGhpblwiO1xyXG4gICAgICAgICAgICBzcmM6IHVybChmb250cy9Nb250LVRoaW4ub3RmKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1yZWd1bGFyXCI7XHJcbiAgICAgICAgICAgIHNyYzogdXJsKGZvbnRzL01vbnQtUmVndWxhci5vdGYpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJtb250LXNlbWlib2xkXCI7XHJcbiAgICAgICAgICAgIHNyYzogdXJsKGZvbnRzL01vbnQtU2VtaUJvbGQub3RmKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1saWdodFwiO1xyXG4gICAgICAgICAgICBzcmM6IHVybChmb250cy9Nb250LUxpZ2h0Lm90Zik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45OHZ3ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnQtaGVhdnlcIjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubXQtdmlld3Mge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMHJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudy04MCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudy05MCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNpbi1tYXJnaW4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucGwtMTAge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDZyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGl0bGUtZnV4aWEge1xyXG4gICAgICAgICAgICBjb2xvcjogI2VjNjA4ZDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi40cmVtO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJtb250LWhlYXZ5XCI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zdWJ0aXRsZS1kYXJrIHtcclxuICAgICAgICAgICAgY29sb3I6ICM1NzU3NTY7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnQtcmVndWxhclwiO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJ0bi15ZWxsb3cge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmViZjQxO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJvbW5lcy1ib2xkXCI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgcGFkZGluZzogMS41cmVtIDByZW07XHJcbiAgICAgICAgICAgIG1hcmdpbjogMnJlbSBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogMTNyZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuM3JlbTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYmctZnV4aWEge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWM2MDhkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJnLXZlcmRlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2M5ZGJjMyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJnLWF6dWwge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNGI2NGE0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYmcteWVsbG93IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlYmY0MSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5iZy1ncmF5IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU3NTY1MCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgLyogQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgICAgIC5ib3gtd2ViIHtcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDkwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xyXG4gICAgICAgICAgICAuYm94LXdlYiB7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5OTJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgLmJveC13ZWIge1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAgICAgLmJveC13ZWIge1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTUwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gKi9cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ib3gteWVzbW9tIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxODAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGluay1hIHtcclxuICAgICAgICAgICAgY29sb3I6ICM1NzU3NTYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1yZWd1bGFyXCI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5saW5rLWEgYiB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnQtaGVhdnlcIjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudmlldy1kZXNrdG9wIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudmlldy1tb2JpbGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8qIEVmZWNjdHMgaG92ZXIgZm9jdXMgICovXHJcbiAgICAgICAgICAuYnRuLWVmZWN0IHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJ0bi1lZmVjdCxcclxuICAgICAgICAgIC5idG4tZWZlY3Q6OmFmdGVyIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJ0bi1lZmVjdDo6YmVmb3JlLFxyXG4gICAgICAgICAgLmJ0bi1lZmVjdDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYnRuLWVmZWN0OmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICNlYzYwOGQ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLyogYm9yZGVyOiAxcHggc29saWQgI2VjNjA4ZDsgKi9cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYnRuLWVmZWN0OjphZnRlciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYnRuLWVmZWN0OmhvdmVyOmFmdGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLyogaG92ZXItZnV4aWEgKi9cclxuICAgICAgICAgIC5ob3Zlci1mdXhpYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaG92ZXItZnV4aWE6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE0LCAyMTEsIDIxMSwgMC4xKTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaG92ZXItZnV4aWE6aG92ZXI6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41LCAwLjUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhvdmVyLWZ1eGlhOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA2O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VjNjA4ZDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIsIDEuMik7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaG92ZXItZnV4aWE6aG92ZXI6OmFmdGVyIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiBob3Zlci1hbWFyaWxsbyAqL1xyXG4gICAgICAgICAgLmhvdmVyLWFtYXJpbGxvIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuN3M7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ob3Zlci1hbWFyaWxsbzo6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTQsIDIxMSwgMjExLCAwLjEpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ob3Zlci1hbWFyaWxsbzpob3Zlcjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcsIDAuNyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaG92ZXItYW1hcmlsbG86OmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDY7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmViZjQxO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMywgMS4zKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ob3Zlci1hbWFyaWxsbzpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8qIGhvdmVyLXZlcmRlICovXHJcbiAgICAgICAgICAuaG92ZXItdmVyZGUge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC43cztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhvdmVyLXZlcmRlOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNCwgMjExLCAyMTEsIDAuMSk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhvdmVyLXZlcmRlOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNywgMC43KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ob3Zlci12ZXJkZTo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgei1pbmRleDogNjtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOWRiYzM7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zLCAxLjMpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhvdmVyLXZlcmRlOmhvdmVyOjphZnRlciB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLyogaG92ZXItYXp1bCAqL1xyXG4gICAgICAgICAgLmhvdmVyLWF6dWwge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC43cztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhvdmVyLWF6dWw6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE0LCAyMTEsIDIxMSwgMC4xKTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaG92ZXItYXp1bDpob3Zlcjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcsIDAuNyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaG92ZXItYXp1bDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgei1pbmRleDogNjtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0YjY0YTQ7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zLCAxLjMpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhvdmVyLWF6dWw6aG92ZXI6OmFmdGVyIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaG92ZXItZWZlY3QtbGV0dGVyIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5ob3Zlci1lZmVjdC1sZXR0ZXI6YmVmb3JlLFxyXG4gICAgICAgICAgLmhvdmVyLWVmZWN0LWxldHRlcjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaG92ZXItZWZlY3QtbGV0dGVyOmFmdGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTc1NzU2O1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBib3R0b206IC01cHg7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmhvdmVyLWVmZWN0LWxldHRlcjpob3ZlcjphZnRlciB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY5cHgpIHtcclxuICAgICAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA0LjZ2dyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC52aWV3LWRlc2t0b3Age1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnZpZXctbW9iaWxlIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm10LXZpZXdzIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNS41cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGl0bGUtZnV4aWEge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc3VidGl0bGUtZGFyayB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYnRuLXllbGxvdyB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEuMnJlbSAwcmVtO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMHJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8qICAqKioqKioqKioqKioqKioqKiogQU5JTUFDSU9ORVMgKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG4gICAgICAgICAgLmhlYXJ0YmVhdCB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBoZWFydGJlYXQgMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZSBib3RoO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGhlYXJ0YmVhdCAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJvdGg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGhlYXJ0YmVhdCB7XHJcbiAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgMTAlIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45MSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkxKTtcclxuICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAxNyUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgMzMlIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44Nyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjg3KTtcclxuICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA0NSUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBrZXlmcmFtZXMgaGVhcnRiZWF0IHtcclxuICAgICAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAxMCUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjkxKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTEpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDE3JSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAzMyUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjg3KTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuODcpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDQ1JSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5mbGlja2VyLTEge1xyXG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogZmxpY2tlci0xIDJzIGxpbmVhciBpbmZpbml0ZSBib3RoO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGZsaWNrZXItMSAycyBsaW5lYXIgaW5maW5pdGUgYm90aDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuZmFkZS1pbiB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlLWluIDEuMnMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSlcclxuICAgICAgICAgICAgICBib3RoO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGZhZGUtaW4gMS4ycyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUtaW4ge1xyXG4gICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGUtaW4ge1xyXG4gICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmFuaW1hdGVkIHtcclxuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHBMYXlvdXQ7XHJcbiIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L0xpbmtcIlxyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7XHJcbiAgZmFGYWNlYm9va0YsXHJcbiAgZmFUd2l0dGVyLFxyXG4gIGZhSW5zdGFncmFtLFxyXG59IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCI7XHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFkZGluZy1sZWZ0IHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRpdGxlLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8Yj5DT05URU5JRE88L2I+XHJcbiAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ub3NvdHJvc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YT5CbG9nPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ub3NvdHJvc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YT5UaWVuZGE8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL25vc290cm9zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlJlZ2Fsb3M8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL25vc290cm9zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlNvYnJlIG5vc290cm9zPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ub3NvdHJvc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YT5Uw6lybWlub3MgeSBjb25kaWNpb25lczwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbm9zb3Ryb3NcIj5cclxuICAgICAgICAgICAgICAgICAgPGE+UG9sw610aWNhIGRlIHByaXZhY2lkYWQ8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL25vc290cm9zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhPkxpYnJvIGRlIHJlY2xhbWFjaW9uZXM8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFkZGluZy1sZWZ0IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGl0bGUtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxiPkNPTlTDgUNUQU5PUzwvYj5cclxuICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICA8cD5taWJlYmVAZ21haWwuY29tPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+MzMzMzMzMzMzMzwvcD5cclxuICAgICAgICAgICAgICAgIDxwPjEyMyBMb3MgUm9ibGVzIE1pcmFmbG9yZXM8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFkZGluZy1sZWZ0IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGl0bGUtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxiPlPDjUdVRU5PUzwvYj5cclxuICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICAgICAgICAgIGljb249e2ZhRmFjZWJvb2tGfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLXJlZGVzXCJcclxuICAgICAgICAgICAgICAgID48L0ZvbnRBd2Vzb21lSWNvbj5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgICAgICAgICAgaWNvbj17ZmFUd2l0dGVyfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLXJlZGVzXCJcclxuICAgICAgICAgICAgICAgID48L0ZvbnRBd2Vzb21lSWNvbj5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgICAgICAgICAgaWNvbj17ZmFJbnN0YWdyYW19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tcmVkZXNcIlxyXG4gICAgICAgICAgICAgICAgPjwvRm9udEF3ZXNvbWVJY29uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1NTZlYTE7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy90cmFtYS1mb290ZXIuc3ZnXCIpO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogNXJlbSAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJtb250LXJlZ3VsYXJcIjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuZm9vdGVyIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5mb290ZXIgYTpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRpbHRlLWZvb3RlciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaWNvbi1yZWRlcyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuN3JlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuN3JlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wYWRkaW5nLWxlZnQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDZyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRpdGxlLWZvb3RlciB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnQtc2VtaWJvbGRcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxODAwcHgpIHtcclxuICAgICAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMi41cmVtIDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZvb3RlciAucGFkZGluZy1sZWZ0IHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDByZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRpdGxlLWZvb3RlciB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb290ZXIgLnBhZGRpbmctbGVmdCBwIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAuZm9vdGVyIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvdHJhbWEtZm9vdGVyLXJlc3BvbnNpdmUuc3ZnXCIpO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAzcmVtIDA7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5mb290ZXIgYSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZm9vdGVyIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRpdGxlLWZvb3RlciB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pY29uLXJlZGVzIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuN3JlbTtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC43cmVtO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9vdGVyIC5wYWRkaW5nLWxlZnQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHJlbTtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9vdGVyIC5wYWRkaW5nLWxlZnQgcCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImltcG9ydCBOYXZiYXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9OYXZiYXJcIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL05hdlwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIjtcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybUNvbnRyb2xcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9MaW5rXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5hdmJhciBleHBhbmQ9XCJsZ1wiIGNsYXNzTmFtZT1cIiBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPVwiL2ltYWdlL2hlYWRlci9idXJnZXIuc3ZnXCJcclxuICAgICAgICAgICAgYWx0PVwiYnVyZ2VyIHllc21vbVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1cmdlci15ZXNtb21cIlxyXG4gICAgICAgICAgICB3aWR0aD17NTB9XHJcbiAgICAgICAgICAgIGhlaWdodD17NTB9XHJcbiAgICAgICAgICAgIC8vIGxheW91dD1cImludHJpbnNpY1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTmF2YmFyLlRvZ2dsZT5cclxuXHJcbiAgICAgICAgPE5hdmJhci5CcmFuZCBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImhvdmVyLWVmZWN0XCI+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPVwiL2ltYWdlL2hlYWRlci9sb2dvLXllc21vbS5zdmdcIlxyXG4gICAgICAgICAgICBhbHQ9XCJsb2dvIHllc21vbVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ28teWVzbW9tXCJcclxuICAgICAgICAgICAgd2lkdGg9ezcwfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezcwfVxyXG4gICAgICAgICAgICAvLyBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgey8qIDxOYXYuTGluayBocmVmPVwiI2xpbmtcIiBjbGFzc05hbWU9XCJpdGVtLW5hdmJhclwiPlxyXG4gICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cIml0ZW0tbWVudVwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtjZXN0YX0gYWx0PVwibG9nbyB0aWVuZGEgeWVzbW9tXCIgLz5cclxuICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICA8L05hdi5MaW5rPiAqL31cclxuXHJcbiAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIiBjbGFzc05hbWU9XCJpdGVtcy1uYWJ2YXItcmlnaFwiPlxyXG4gICAgICAgICAgey8qIDxGb3JtIGlubGluZSBjbGFzc05hbWU9XCJtbC1mb3JtLXNlYXJjaFwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImx1cGEtaW1nXCI+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2UvaGVhZGVyL2x1cGEuc3ZnXCJcclxuICAgICAgICAgICAgICAgIGFsdD1cImx1cGEgeWVzbW9tXCJcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezIwfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiwr9RdWUgZXMgbG8gcXVlIGJ1c2Nhcz9cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLXNtLTIgaW5wdXQtc2VhcmNoXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybT4gKi99XHJcbiAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm5hdi1pdGVtcy1jb2xsYXBzZSBcIj5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBocmVmPVwiL2Jsb2dcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW0tbmF2YmFyIGhvdmVyLWVmZWN0XCJcclxuICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cIml0ZW0tbWVudSBcIj5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlL2hlYWRlci9ibG9nLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9nbyBibG9nIHllc21vbSBcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgY2xhc3NOYW1lPVwibHVwYS1pbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs3MH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezcwfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiXCI+QmxvZzwvaDY+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9wYWdpbmEtZW4tY29uc3RydWNjaW9uXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtLW5hdmJhciBob3Zlci1lZmVjdFwiXHJcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiaXMtYWN0aXZlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJpdGVtLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlL2hlYWRlci90aWVuZGEuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvIHRpZW5kYSB5ZXNtb21cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgY2xhc3NOYW1lPVwibHVwYS1pbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs3MH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezcwfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICA8aDY+VGllbmRhPC9oNj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBocmVmPVwiL3BhZ2luYS1lbi1jb25zdHJ1Y2Npb25cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW0tbmF2YmFyIGhvdmVyLWVmZWN0XCJcclxuICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cIml0ZW0tbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2UvaGVhZGVyL3JlZ2Fsby5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ28gcmVnYWxvIHllc21vbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBjbGFzc05hbWU9XCJsdXBhLWltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezcwfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17NzB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgIDxoNj5SZWdhbG9zPC9oNj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgey8qIDxOYXYuTGluayBocmVmPVwiI2xpbmtcIiBjbGFzc05hbWU9XCJpdGVtLW5hdmJhclwiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9e3JlZ2lzdHJhdGV9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ28gcmVncsOtc3RyYXRlIHllc21vbVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW0tbWVudVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGg2PlJlZ8Otc3RyYXRlPC9oNj5cclxuICAgICAgICAgICAgICA8L05hdi5MaW5rPiAqL31cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBocmVmPVwiL3BhZ2luYS1lbi1jb25zdHJ1Y2Npb25cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW0tbmF2YmFyIGhvdmVyLWVmZWN0XCJcclxuICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cIml0ZW0tbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2UvaGVhZGVyL2luaWNpYXItc2VzaW9uLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9nbyBpbmljaWFyIHNlc2nDs24geWVzbW9tXCJcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIGNsYXNzTmFtZT1cImx1cGEtaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17NzB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs3MH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgPGg2PkxvZ2luPC9oNj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgey8qIDxOYXZMaW5rIHRvPVwiL2Nlc3RhXCIgY2xhc3NOYW1lPVwiaXRlbS1uYXZiYXJcIiAgYWN0aXZlQ2xhc3NOYW1lPSdpcy1hY3RpdmUnPlxyXG4gICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJpdGVtLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Nlc3RhfSBhbHQ9XCJsb2dvIGNlc3RhIHllc21vbVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgIDxoNj5DZXN0YTwvaDY+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPiAqL31cclxuICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxyXG4gICAgICA8L05hdmJhcj5cclxuXHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIE5hdmJhclxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9XCIjbmF2YmFyTmF2QWx0TWFya3VwXCJcclxuICAgICAgICAgICAgYXJpYS1jb250cm9scz1cIm5hdmJhck5hdkFsdE1hcmt1cFwiXHJcbiAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPiAqL31cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9oZWFkZXIvYnVyZ2VyLnN2Z1wiXHJcbiAgICAgICAgICAgIGFsdD1cImJ1cmdlciB5ZXNtb21cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uIGJ1cmdlci15ZXNtb21cIlxyXG4gICAgICAgICAgICB3aWR0aD17NTB9XHJcbiAgICAgICAgICAgIGhlaWdodD17NTB9XHJcbiAgICAgICAgICAgIC8vIGxheW91dD1cImludHJpbnNpY1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyTmF2QWx0TWFya3VwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIGFjdGl2ZVwiIGFyaWEtY3VycmVudD1cInBhZ2VcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICBGZWF0dXJlc1xyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICBQcmljaW5nXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGluayBkaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtZGlzYWJsZWQ9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBEaXNhYmxlZFxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAubmF2YmFyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbSA1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5pdGVtcy1uYWJ2YXItcmlnaHQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sb2dvLXllc21vbSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLml0ZW0tbmF2YmFyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBtYXJnaW46IDByZW0gMC41cmVtO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLml0ZW0tbWVudSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxLjZyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogMS42cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCAwLjVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaXRlbS1tZW51IGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmlucHV0LXNlYXJjaCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm5hdi1pdGVtcy1jb2xsYXBzZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5tbC1mb3JtLXNlYXJjaCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5sdXBhLWltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxLjhyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQGtleWZyYW1lcyBhbmltYXRlSGVhcnQge1xyXG4gICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA0MCUge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLml0ZW0tbmF2YmFyIGg2IHtcclxuICAgICAgICAgICAgY29sb3I6ICM2MTYxNjA7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pdGVtLW5hdmJhciBoNjpob3ZlciB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLml0ZW0tbmF2YmFyOmxpbmssXHJcbiAgICAgICAgICAuaXRlbS1uYXZiYXI6dmlzaXRlZCxcclxuICAgICAgICAgIC5pdGVtLW5hdmJhcjphY3RpdmUge1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXMtYWN0aXZlIGg2IHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaG92ZXItZWZlY3Qge1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGFuaW1hdGVIZWFydCAwLjNzIGxpbmVhciBmb3J3YXJkcyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaG92ZXItZWZlY3Q6aG92ZXIsXHJcbiAgICAgICAgICAuaG92ZXItZWZlY3Q6Zm9jdXMge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMikgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTgwMHB4KSB7XHJcbiAgICAgICAgICAgIC5sb2dvLXllc21vbSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDMuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaXRlbS1tZW51IHtcclxuICAgICAgICAgICAgICB3aWR0aDogMS4zcmVtO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMS4zcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pdGVtLW5hdmJhciBoNiB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmx1cGEtaW1nIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMS4zcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAuM3JlbSAwLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmF2YmFyIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgICAgICAgIC5sb2dvLXllc21vbSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDNyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5idXJnZXIteWVzbW9tIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmF2YmFyIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubmF2LWl0ZW1zLWNvbGxhcHNlIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVyZW07XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5uYXYtaXRlbXMtY29sbGFwc2UgaW1nIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubmF2LWxpbmsge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDByZW0gMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZm9ybS1pbmxpbmUge1xyXG4gICAgICAgICAgICAgIGZsZXgtZmxvdzogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1sLWZvcm0tc2VhcmNoIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLml0ZW0tbmF2YmFyIHtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sdXBhLWltZyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLml0ZW0tbmF2YmFyIGg2IHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYS5pdGVtLW5hdmJhci5uYXYtbGluayB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgIzU3NTc1NjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmF2YmFyIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB0b0Jhc2U2NCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0J1xuaW1wb3J0IHtcbiAgSW1hZ2VDb25maWcsXG4gIGltYWdlQ29uZmlnRGVmYXVsdCxcbiAgTG9hZGVyVmFsdWUsXG4gIFZBTElEX0xPQURFUlMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcnXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICA7KGdsb2JhbCBhcyBhbnkpLl9fTkVYVF9JTUFHRV9JTVBPUlRFRCA9IHRydWVcbn1cblxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbJ2xhenknLCAnZWFnZXInLCB1bmRlZmluZWRdIGFzIGNvbnN0XG50eXBlIExvYWRpbmdWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MT0FESU5HX1ZBTFVFU1tudW1iZXJdXG5cbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwPExvYWRlclZhbHVlLCAocHJvcHM6IExvYWRlclByb3BzKSA9PiBzdHJpbmc+KFtcbiAgWydpbWdpeCcsIGltZ2l4TG9hZGVyXSxcbiAgWydjbG91ZGluYXJ5JywgY2xvdWRpbmFyeUxvYWRlcl0sXG4gIFsnYWthbWFpJywgYWthbWFpTG9hZGVyXSxcbiAgWydkZWZhdWx0JywgZGVmYXVsdExvYWRlcl0sXG5dKVxuXG5jb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTID0gW1xuICAnZmlsbCcsXG4gICdmaXhlZCcsXG4gICdpbnRyaW5zaWMnLFxuICAncmVzcG9uc2l2ZScsXG4gIHVuZGVmaW5lZCxcbl0gYXMgY29uc3RcbnR5cGUgTGF5b3V0VmFsdWUgPSB0eXBlb2YgVkFMSURfTEFZT1VUX1ZBTFVFU1tudW1iZXJdXG5cbnR5cGUgSW1nRWxlbWVudFN0eWxlID0gTm9uTnVsbGFibGU8SlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXVsnc3R5bGUnXT5cblxuZXhwb3J0IHR5cGUgSW1hZ2VQcm9wcyA9IE9taXQ8XG4gIEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW1nJ10sXG4gICdzcmMnIHwgJ3NyY1NldCcgfCAncmVmJyB8ICd3aWR0aCcgfCAnaGVpZ2h0JyB8ICdsb2FkaW5nJyB8ICdzdHlsZSdcbj4gJiB7XG4gIHNyYzogc3RyaW5nXG4gIHF1YWxpdHk/OiBudW1iZXIgfCBzdHJpbmdcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvYWRpbmc/OiBMb2FkaW5nVmFsdWVcbiAgdW5vcHRpbWl6ZWQ/OiBib29sZWFuXG4gIG9iamVjdEZpdD86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0Rml0J11cbiAgb2JqZWN0UG9zaXRpb24/OiBJbWdFbGVtZW50U3R5bGVbJ29iamVjdFBvc2l0aW9uJ11cbn0gJiAoXG4gICAgfCB7XG4gICAgICAgIHdpZHRoPzogbmV2ZXJcbiAgICAgICAgaGVpZ2h0PzogbmV2ZXJcbiAgICAgICAgLyoqIEBkZXByZWNhdGVkIFVzZSBgbGF5b3V0PVwiZmlsbFwiYCBpbnN0ZWFkICovXG4gICAgICAgIHVuc2l6ZWQ6IHRydWVcbiAgICAgIH1cbiAgICB8IHsgd2lkdGg/OiBuZXZlcjsgaGVpZ2h0PzogbmV2ZXI7IGxheW91dDogJ2ZpbGwnIH1cbiAgICB8IHtcbiAgICAgICAgd2lkdGg6IG51bWJlciB8IHN0cmluZ1xuICAgICAgICBoZWlnaHQ6IG51bWJlciB8IHN0cmluZ1xuICAgICAgICBsYXlvdXQ/OiBFeGNsdWRlPExheW91dFZhbHVlLCAnZmlsbCc+XG4gICAgICB9XG4gIClcblxuY29uc3Qge1xuICBkZXZpY2VTaXplczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMsXG4gIGxvYWRlcjogY29uZmlnTG9hZGVyLFxuICBwYXRoOiBjb25maWdQYXRoLFxuICBkb21haW5zOiBjb25maWdEb21haW5zLFxufSA9XG4gICgocHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFMgYXMgYW55KSBhcyBJbWFnZUNvbmZpZykgfHwgaW1hZ2VDb25maWdEZWZhdWx0XG4vLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzID0gWy4uLmNvbmZpZ0RldmljZVNpemVzLCAuLi5jb25maWdJbWFnZVNpemVzXVxuY29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG5hbGxTaXplcy5zb3J0KChhLCBiKSA9PiBhIC0gYilcblxuZnVuY3Rpb24gZ2V0V2lkdGhzKFxuICB3aWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkLFxuICBsYXlvdXQ6IExheW91dFZhbHVlXG4pOiB7IHdpZHRoczogbnVtYmVyW107IGtpbmQ6ICd3JyB8ICd4JyB9IHtcbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHxcbiAgICBsYXlvdXQgPT09ICdmaWxsJyB8fFxuICAgIGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnXG4gICkge1xuICAgIHJldHVybiB7IHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cblxuICBjb25zdCB3aWR0aHMgPSBbXG4gICAgLi4ubmV3IFNldChcbiAgICAgIFt3aWR0aCwgd2lkdGggKiAyLCB3aWR0aCAqIDNdLm1hcChcbiAgICAgICAgKHcpID0+IGFsbFNpemVzLmZpbmQoKHApID0+IHAgPj0gdykgfHwgYWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoIC0gMV1cbiAgICAgIClcbiAgICApLFxuICBdXG4gIHJldHVybiB7IHdpZHRocywga2luZDogJ3gnIH1cbn1cblxudHlwZSBDYWxsTG9hZGVyUHJvcHMgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHdpZHRoOiBudW1iZXJcbiAgcXVhbGl0eT86IG51bWJlclxufVxuXG5mdW5jdGlvbiBjYWxsTG9hZGVyKGxvYWRlclByb3BzOiBDYWxsTG9hZGVyUHJvcHMpIHtcbiAgY29uc3QgbG9hZCA9IGxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcilcbiAgaWYgKGxvYWQpIHtcbiAgICByZXR1cm4gbG9hZCh7IHJvb3Q6IGNvbmZpZ1BhdGgsIC4uLmxvYWRlclByb3BzIH0pXG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgIGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtWQUxJRF9MT0FERVJTLmpvaW4oXG4gICAgICAnLCAnXG4gICAgKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gXG4gIClcbn1cblxudHlwZSBHZW5JbWdBdHRyc0RhdGEgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHVub3B0aW1pemVkOiBib29sZWFuXG4gIGxheW91dDogTGF5b3V0VmFsdWVcbiAgd2lkdGg/OiBudW1iZXJcbiAgcXVhbGl0eT86IG51bWJlclxuICBzaXplcz86IHN0cmluZ1xufVxuXG50eXBlIEdlbkltZ0F0dHJzUmVzdWx0ID0gUGljazxcbiAgSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXSxcbiAgJ3NyYycgfCAnc2l6ZXMnIHwgJ3NyY1NldCdcbj5cblxuZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7XG4gIHNyYyxcbiAgdW5vcHRpbWl6ZWQsXG4gIGxheW91dCxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG4gIHNpemVzLFxufTogR2VuSW1nQXR0cnNEYXRhKTogR2VuSW1nQXR0cnNSZXN1bHQge1xuICBpZiAodW5vcHRpbWl6ZWQpIHtcbiAgICByZXR1cm4geyBzcmMgfVxuICB9XG5cbiAgY29uc3QgeyB3aWR0aHMsIGtpbmQgfSA9IGdldFdpZHRocyh3aWR0aCwgbGF5b3V0KVxuICBjb25zdCBsYXN0ID0gd2lkdGhzLmxlbmd0aCAtIDFcblxuICBjb25zdCBzcmNTZXQgPSB3aWR0aHNcbiAgICAubWFwKFxuICAgICAgKHcsIGkpID0+XG4gICAgICAgIGAke2NhbGxMb2FkZXIoeyBzcmMsIHF1YWxpdHksIHdpZHRoOiB3IH0pfSAke1xuICAgICAgICAgIGtpbmQgPT09ICd3JyA/IHcgOiBpICsgMVxuICAgICAgICB9JHtraW5kfWBcbiAgICApXG4gICAgLmpvaW4oJywgJylcblxuICBpZiAoIXNpemVzICYmIGtpbmQgPT09ICd3Jykge1xuICAgIHNpemVzID0gJzEwMHZ3J1xuICB9XG5cbiAgc3JjID0gY2FsbExvYWRlcih7IHNyYywgcXVhbGl0eSwgd2lkdGg6IHdpZHRoc1tsYXN0XSB9KVxuXG4gIHJldHVybiB7IHNyYywgc2l6ZXMsIHNyY1NldCB9XG59XG5cbmZ1bmN0aW9uIGdldEludCh4OiB1bmtub3duKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB4XG4gIH1cbiAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXJzZUludCh4LCAxMClcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlKHtcbiAgc3JjLFxuICBzaXplcyxcbiAgdW5vcHRpbWl6ZWQgPSBmYWxzZSxcbiAgcHJpb3JpdHkgPSBmYWxzZSxcbiAgbG9hZGluZyxcbiAgY2xhc3NOYW1lLFxuICBxdWFsaXR5LFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBvYmplY3RGaXQsXG4gIG9iamVjdFBvc2l0aW9uLFxuICAuLi5hbGxcbn06IEltYWdlUHJvcHMpIHtcbiAgbGV0IHJlc3Q6IFBhcnRpYWw8SW1hZ2VQcm9wcz4gPSBhbGxcbiAgbGV0IGxheW91dDogTm9uTnVsbGFibGU8TGF5b3V0VmFsdWU+ID0gc2l6ZXMgPyAncmVzcG9uc2l2ZScgOiAnaW50cmluc2ljJ1xuICBsZXQgdW5zaXplZCA9IGZhbHNlXG4gIGlmICgndW5zaXplZCcgaW4gcmVzdCkge1xuICAgIHVuc2l6ZWQgPSBCb29sZWFuKHJlc3QudW5zaXplZClcbiAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgZGVsZXRlIHJlc3RbJ3Vuc2l6ZWQnXVxuICB9IGVsc2UgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgIGlmIChyZXN0LmxheW91dCkgbGF5b3V0ID0gcmVzdC5sYXlvdXRcblxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsnbGF5b3V0J11cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCFzcmMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHdpZHRoLCBoZWlnaHQsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAodW5zaXplZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgZGVwcmVjYXRlZCBcInVuc2l6ZWRcIiBwcm9wZXJ0eSwgd2hpY2ggd2FzIHJlbW92ZWQgaW4gZmF2b3Igb2YgdGhlIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5YFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpc0xhenkgPVxuICAgICFwcmlvcml0eSAmJiAobG9hZGluZyA9PT0gJ2xhenknIHx8IHR5cGVvZiBsb2FkaW5nID09PSAndW5kZWZpbmVkJylcbiAgaWYgKHNyYyAmJiBzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgdW5vcHRpbWl6ZWQgPSB0cnVlXG4gICAgaXNMYXp5ID0gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gdXNlSW50ZXJzZWN0aW9uPEhUTUxJbWFnZUVsZW1lbnQ+KHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICAgIGRpc2FibGVkOiAhaXNMYXp5LFxuICB9KVxuICBjb25zdCBpc1Zpc2libGUgPSAhaXNMYXp5IHx8IGlzSW50ZXJzZWN0ZWRcblxuICBjb25zdCB3aWR0aEludCA9IGdldEludCh3aWR0aClcbiAgY29uc3QgaGVpZ2h0SW50ID0gZ2V0SW50KGhlaWdodClcbiAgY29uc3QgcXVhbGl0eUludCA9IGdldEludChxdWFsaXR5KVxuXG4gIGxldCB3cmFwcGVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3ZnOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgbGV0IGltZ1N0eWxlOiBJbWdFbGVtZW50U3R5bGUgfCB1bmRlZmluZWQgPSB7XG4gICAgdmlzaWJpbGl0eTogaXNWaXNpYmxlID8gJ3Zpc2libGUnIDogJ2hpZGRlbicsXG5cbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBib3R0b206IDAsXG4gICAgcmlnaHQ6IDAsXG5cbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgIG1heEhlaWdodDogJzEwMCUnLFxuXG4gICAgb2JqZWN0Rml0LFxuICAgIG9iamVjdFBvc2l0aW9uLFxuICB9XG4gIGlmIChcbiAgICB0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBsYXlvdXQgIT09ICdmaWxsJ1xuICApIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG4gICAgY29uc3QgcXVvdGllbnQgPSBoZWlnaHRJbnQgLyB3aWR0aEludFxuICAgIGNvbnN0IHBhZGRpbmdUb3AgPSBpc05hTihxdW90aWVudCkgPyAnMTAwJScgOiBgJHtxdW90aWVudCAqIDEwMH0lYFxuICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdHlsZSA9IHsgZGlzcGxheTogJ2Jsb2NrJywgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsIHBhZGRpbmdUb3AgfVxuICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnaW50cmluc2ljJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH1cbiAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdmcgPSBgPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YFxuICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZml4ZWQnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0SW50LFxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2Ygd2lkdGhJbnQgPT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGhlaWdodEludCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBsYXlvdXQgPT09ICdmaWxsJ1xuICApIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICByaWdodDogMCxcblxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBtYXJnaW46IDAsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpbWdBdHRyaWJ1dGVzOiBHZW5JbWdBdHRyc1Jlc3VsdCA9IHtcbiAgICBzcmM6XG4gICAgICAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxcbiAgfVxuXG4gIGlmIChpc1Zpc2libGUpIHtcbiAgICBpbWdBdHRyaWJ1dGVzID0gZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICBzcmMsXG4gICAgICB1bm9wdGltaXplZCxcbiAgICAgIGxheW91dCxcbiAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICBzaXplcyxcbiAgICB9KVxuICB9XG5cbiAgaWYgKHVuc2l6ZWQpIHtcbiAgICB3cmFwcGVyU3R5bGUgPSB1bmRlZmluZWRcbiAgICBzaXplclN0eWxlID0gdW5kZWZpbmVkXG4gICAgaW1nU3R5bGUgPSB1bmRlZmluZWRcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3dyYXBwZXJTdHlsZX0+XG4gICAgICB7c2l6ZXJTdHlsZSA/IChcbiAgICAgICAgPGRpdiBzdHlsZT17c2l6ZXJTdHlsZX0+XG4gICAgICAgICAge3NpemVyU3ZnID8gKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogJzEwMCUnLCBkaXNwbGF5OiAnYmxvY2snIH19XG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPXt0cnVlfVxuICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgICAgc3JjPXtgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwke3RvQmFzZTY0KHNpemVyU3ZnKX1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIDxpbWdcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIHsuLi5pbWdBdHRyaWJ1dGVzfVxuICAgICAgICBkZWNvZGluZz1cImFzeW5jXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHJlZj17c2V0UmVmfVxuICAgICAgICBzdHlsZT17aW1nU3R5bGV9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vQlVJTFQgSU4gTE9BREVSU1xuXG50eXBlIExvYWRlclByb3BzID0gQ2FsbExvYWRlclByb3BzICYgeyByb290OiBzdHJpbmcgfVxuXG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHNyY1swXSA9PT0gJy8nID8gc3JjLnNsaWNlKDEpIDogc3JjXG59XG5cbmZ1bmN0aW9uIGltZ2l4TG9hZGVyKHsgcm9vdCwgc3JjLCB3aWR0aCwgcXVhbGl0eSB9OiBMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/Zm9ybWF0PWF1dG8mZml0PW1heCZ3PTMwMFxuICBjb25zdCBwYXJhbXMgPSBbJ2F1dG89Zm9ybWF0JywgJ2ZpdD1tYXgnLCAndz0nICsgd2lkdGhdXG4gIGxldCBwYXJhbXNTdHJpbmcgPSAnJ1xuICBpZiAocXVhbGl0eSkge1xuICAgIHBhcmFtcy5wdXNoKCdxPScgKyBxdWFsaXR5KVxuICB9XG5cbiAgaWYgKHBhcmFtcy5sZW5ndGgpIHtcbiAgICBwYXJhbXNTdHJpbmcgPSAnPycgKyBwYXJhbXMuam9pbignJicpXG4gIH1cbiAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0ke3BhcmFtc1N0cmluZ31gXG59XG5cbmZ1bmN0aW9uIGFrYW1haUxvYWRlcih7IHJvb3QsIHNyYywgd2lkdGggfTogTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YFxufVxuXG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHsgcm9vdCwgc3JjLCB3aWR0aCwgcXVhbGl0eSB9OiBMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG4gIGNvbnN0IHBhcmFtcyA9IFsnZl9hdXRvJywgJ2NfbGltaXQnLCAnd18nICsgd2lkdGgsICdxXycgKyAocXVhbGl0eSB8fCAnYXV0bycpXVxuICBsZXQgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKSArICcvJ1xuICByZXR1cm4gYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWBcbn1cblxuZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7IHJvb3QsIHNyYywgd2lkdGgsIHF1YWxpdHkgfTogTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG1pc3NpbmdWYWx1ZXMgPSBbXVxuXG4gICAgLy8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG4gICAgaWYgKCFzcmMpIG1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJylcbiAgICBpZiAoIXdpZHRoKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJylcblxuICAgIGlmIChtaXNzaW5nVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKFxuICAgICAgICAgICcsICdcbiAgICAgICAgKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH1cbiAgICAgICAgKX1gXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHNyYy5zdGFydHNXaXRoKCcvLycpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKCFzcmMuc3RhcnRzV2l0aCgnLycpICYmIGNvbmZpZ0RvbWFpbnMpIHtcbiAgICAgIGxldCBwYXJzZWRTcmM6IFVSTFxuICAgICAgdHJ5IHtcbiAgICAgICAgcGFyc2VkU3JjID0gbmV3IFVSTChzcmMpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmAgK1xuICAgICAgICAgICAgYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vZXJyLnNoL25leHQuanMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGBcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBgJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gXG59XG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkKSB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0SWRsZUNhbGxiYWNrXG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgcmVxdWVzdElkbGVDYWxsYmFjayBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8XG4gIHN0cmluZyxcbiAge1xuICAgIGlkOiBzdHJpbmdcbiAgICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbiAgfVxuPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9BcHBMYXlvdXRcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYVN0YXIgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuXHJcbmNvbnN0IGltcG9ydEpvZGl0ID0gKCkgPT4gaW1wb3J0KFwiam9kaXQtcmVhY3RcIik7XHJcbmNvbnN0IEpvZGl0RWRpdG9yID0gZHluYW1pYyhpbXBvcnRKb2RpdCwge1xyXG4gIHNzcjogZmFsc2UsXHJcbn0pO1xyXG5cclxuY29uc3QgQ2FyZEJsb2dFc3BlY2lmaWMgPSAoeyBjdXJyZW50RGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgW2NvbmZpZywgc2V0Q29uZmlnXSA9IHVzZVN0YXRlKHtcclxuICAgIHJlYWRvbmx5OiB0cnVlLFxyXG4gICAgdG9vbGJhcjogZmFsc2UsXHJcbiAgfSk7XHJcbiAgY29uc3QgW2NvbnRlbmlkbywgc2V0Q29udGVuaWRvXSA9IHVzZVN0YXRlKFxyXG4gICAgJzxwPjxzcGFuIHN0eWxlPVwiZm9udC1mYW1pbHk6IFRhaG9tYSwgR2VuZXZhLCBzYW5zLXNlcmlmO1wiPlR1IEJhYnkgU2hvd2VyIGVzIHVubyBkZSBsb3MgbW9tZW50b3MgbcOhcyBlc3BlcmFkb3MgcGFyYSB0aSB5IGxvcyBtaWVtYnJvcyBkZSB0dSBmYW1pbGlhIHF1ZSBoYW4gZXN0YWRvIGFsIHBlbmRpZW50ZSBkZWwgbmFjaW1pZW50byBkZSB0dSBwcsOzeGltbyBiZWLDqS4gQXF1w60gdGUgZGVqYW1vcyB1bm9zIGNvbnNlam9zIHBhcmEgY2VsZWJyYXIgZGUgdW5hIG1lam9yIG1hbmVyYSB0dSBiYWJ5IHNob3dlciB2aXJ0dWFsLjwvc3Bhbj48L3A+PHVsPjxsaT48c3BhbiBzdHlsZT1cImZvbnQtZmFtaWx5OiBUYWhvbWEsIEdlbmV2YSwgc2Fucy1zZXJpZjtcIj48c3Ryb25nPjxzcGFuIHN0eWxlPVwiZm9udC1mYW1pbHk6IFRhaG9tYSwgR2VuZXZhLCBzYW5zLXNlcmlmO1wiPjxzcGFuIHN0eWxlPVwiY29sb3I6IHJnYig3NSwgMTAwLCAxNjQpOyBmb250LWZhbWlseTogVGFob21hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XCI+Um9sIGRlIGFuZml0cmlvbmE8L3NwYW4+PC9zcGFuPjwvc3Ryb25nPjwvc3Bhbj48L2xpPjwvdWw+PHA+PHNwYW4gc3R5bGU9XCJjb2xvcjogcmdiKDAsIDAsIDApOyBmb250LWZhbWlseTogVGFob21hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XCI+U2kgZXMgcXVlIHTDuiBlcmVzIGxhIGVtYmFyYXphZGEgcXVlIHF1aWVyZSBpbnZpdGFyIGEgc3VzIGFtaWdvcyBhIHR1IGJhYnkgc2hvd2VyIHkgbm8gcXVpZXJlcyBzYWJlciBuYWRhIGRlIGxhIG9yZ2FuaXphY2nDs24sIGRlYmVzIGVsZWdpciB1bmEgYW1pZ2EgbyBoZXJtYW5hIHkgbm9tYnJhcmxhIOKAnGFuZml0cmlvbmHigJ0gZGVsIGV2ZW50by4gRWxsYSBzZXLDoSBsYSBlbmNhcmdhZGEgZGUgbGEgcHJvZHVjY2nDs24geSBhc8OtIHTDuiBzZXLDoXMgcmVhbG1lbnRlIGxhIGVzdHJlbGxhIGRlbCBldmVudG8uIDwvc3Bhbj48L3A+PHA+PHNwYW4gc3R5bGU9XCJjb2xvcjogcmdiKDAsIDAsIDApOyBmb250LWZhbWlseTogVGFob21hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XCI+U2kgZXMgcXVlIHTDuiBlcmVzIGxhIG9yZ2FuaXphZG9yYSBkZWwgZXZlbnRvLCBkZWJlcyB0b21hciBlbCByb2wgZGUgYW5maXRyaW9uYSB5IHNlciByZXNwb25zYWJsZSBkZSBpbnZpdGFyIGEgbGFzIHBlcnNvbmFzIHkgZGUgcGxhbmVhciBsYXMgYWN0aXZpZGFkZXMgeSBqdWVnb3MuIFB1ZWRlcyBkaXNlw7FhciBpbnZpdGFjaW9uZXMgeSBlbnZpYXJsYXMgcG9yIGNvcnJlbyBvIGEgdHJhdsOpcyBkZSBSZWRlcyBTb2NpYWxlcy48L3NwYW4+PC9wPjx1bD48bGk+PHNwYW4gc3R5bGU9XCJmb250LWZhbWlseTogVGFob21hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XCI+PHN0cm9uZz48c3BhbiBzdHlsZT1cImNvbG9yOiByZ2IoNzUsIDEwMCwgMTY0KTsgZm9udC1mYW1pbHk6IFRhaG9tYSwgR2VuZXZhLCBzYW5zLXNlcmlmO1wiPkVsZWdpciB1biBzaXRpbyBkZSB2aWRlbyBjaGF0PC9zcGFuPjwvc3Ryb25nPjwvc3Bhbj48L2xpPjwvdWw+PHA+PHNwYW4gc3R5bGU9XCJjb2xvcjogcmdiKDAsIDAsIDApOyBmb250LWZhbWlseTogVGFob21hLCBHZW5ldmEsIHNhbnMtc2VyaWY7IGZvbnQtc2l6ZTogMXJlbTtcIj5ZYSBzZWEgWm9vbSwgSG91c2VQYXJ0eSwgU2t5cGUgbyBIYW5nb3V0cywgZGViZXMgZWxlZ2lyIHVuYSBwbGF0YWZvcm1hIHF1ZSBzb3BvcnRlIGEgbGEgY2FudGlkYWQgZGUgZ2VudGUgcXVlIGVzdMOhIGludml0YWRhIHkgcXVlIHNlYSBhY2Nlc2libGUgcGFyYSB0b2RvcyBlbGxvcy4gUXVpesOhcyBkZWJhcyBoYWNlciB1bmEgcHJ1ZWJhIGRlIGNvbmV4acOzbiBjb24gY2llcnRhcyBwZXJzb25hcyBjb24gYW50aWNpcGFjacOzbi4gPC9zcGFuPjwvcD48cD48c3BhbiBzdHlsZT1cImNvbG9yOiByZ2IoMCwgMCwgMCk7IGZvbnQtZmFtaWx5OiBUYWhvbWEsIEdlbmV2YSwgc2Fucy1zZXJpZjsgZm9udC1zaXplOiAxcmVtO1wiPk90cmEgb3BjacOzbiBlcyB0cmFuc21pdGlyIGVsIGJhYnkgc2hvd2VyIGVuIHZpdm86IG9yZ2FuaXphIHVuIGxpdmVzdHJlYW0gZSBpbnZpdGEgYSB0dXMgZmFtaWxpYXJlcyB5IGFtaWdvcyBhIGFzaXN0aXIgeSBjb21lbnRhci4gUHVlZGUgc2VyIGEgdHJhdsOpcyBkZSBJbnN0YWdyYW0geSBhc8OtIHRvZG9zIHR1cyBzZWd1aWRvcmVzIHBvZHLDoW4gdmVydGUgYWJyaWVuZG8gcmVnYWxvcyBvIHJlYWxpemFuZG8gYWN0aXZpZGFkZXMgZW50cmV0ZW5pZGFzLjwvc3Bhbj48L3A+PHVsPjxsaT48c3BhbiBzdHlsZT1cImNvbG9yOiByZ2IoMCwgMCwgMCk7IGZvbnQtZmFtaWx5OiBUYWhvbWEsIEdlbmV2YSwgc2Fucy1zZXJpZjsgZm9udC1zaXplOiAxcmVtO1wiPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpOyBjb2xvcjogcmdiKDc0LCAxMzQsIDIzMik7XCI+PHN0cm9uZyBzdHlsZT1cIlwiPjxzcGFuIHN0eWxlPVwiY29sb3I6IHJnYig3NSwgMTAwLCAxNjQpOyBmb250LWZhbWlseTogVGFob21hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XCI+UGxhbmlmaWNhIGFjdGl2aWRhZGVzPC9zcGFuPjwvc3Ryb25nPjwvc3Bhbj48L3NwYW4+PC9saT48L3VsPjxwPjxzcGFuIHN0eWxlPVwiY29sb3I6IHJnYigwLCAwLCAwKTsgZm9udC1mYW1pbHk6IFRhaG9tYSwgR2VuZXZhLCBzYW5zLXNlcmlmO1wiPlF1aXrDoXMgbGEgcGFydGUgbcOhcyBpbXBvcnRhbnRlIGRlbCBiYWJ5IHNob3dlcjogbG9zIGludml0YWRvcyBwYXJ0aWNpcGFyw6FuIGVuIGxvcyBqdWVnb3MgcXVlIG9yZ2FuaWNlcyBjb24gbGEgZW1iYXJhemFkYSBlbiBlbCBjZW50cm8gZGUgdG9kYXMgbGFzIGFjdGl2aWRhZGVzLjwvc3Bhbj48L3A+PHVsPjxsaT48c3BhbiBzdHlsZT1cImNvbG9yOiByZ2IoNzUsIDEwMCwgMTY0KTtcIj48c3Ryb25nPjxzcGFuIHN0eWxlPVwiZm9udC1mYW1pbHk6IFRhaG9tYSwgR2VuZXZhLCBzYW5zLXNlcmlmO1wiPkhvcmEgZGUgbG9zIHJlZ2Fsb3M8L3NwYW4+PC9zdHJvbmc+PC9zcGFuPjwvbGk+PC91bD48cD48c3BhbiBzdHlsZT1cImNvbG9yOiByZ2IoMCwgMCwgMCk7IGZvbnQtZmFtaWx5OiBUYWhvbWEsIEdlbmV2YSwgc2Fucy1zZXJpZjtcIj5MbyBtw6FzIHByb2JhYmxlIGVzIHF1ZSBsYSBmaWVzdGEgdGVybWluZSBjb24gcXVlIGxhIGZ1dHVyYSBtYW3DoSBhYnJhIGxvcyByZWdhbG9zLiBFc3RvIHNvbG8gZXMgcG9zaWJsZSBzaSBsb3MgaW52aXRhZG9zIGVudsOtYW4gc3UgcmVnYWxvIGNvbiBhbnRpY2lwYWNpw7NuLiBVbmEgYnVlbmEgaWRlYSBlcyBxdWUgbGEgZmVzdGVqYWRhIG5vIHNlcGEgcXVpw6luIGVudmnDsyBxdcOpLCB5IGxvcyB2YXlhIGFicmllbmRvIGZyZW50ZSBsYSBjw6FtYXJhIHkgYWRpdmluZSBxdWnDqW4gZXMgbGEgZHVlw7FhIGRlIGNhZGEgcmVnYWxvLiBMYSBvdHJhIG9wY2nDs24gZXMgcXVlIGxvcyBpbnZpdGFkb3MgYWJyYW4gbG9zIHJlZ2Fsb3MgeSBsdWVnbyBzZSBsbyBlbnbDrWVuIHBvciBjb3JyZW8uIDwvc3Bhbj48L3A+PHA+PHNwYW4gc3R5bGU9XCJjb2xvcjogcmdiKDAsIDAsIDApOyBmb250LWZhbWlseTogVGFob21hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XCI+U2kgc2/DsWFiYXMgY29uIHR1IGJhYnkgc2hvd2VyLCDCoWHDum4gcHVlZGVzIHBsYW5lYXIgdHUgYmFieSBzaG93ZXIgdmlydHVhbCEgQWRlbcOhcywgZXMgdW5hIGJ1ZW5hIG9wb3J0dW5pZGFkIHBhcmEgcGFzYXIgbW9tZW50b3MgYWdyYWRhYmxlcyBqdW50byBhIHR1IGZhbWlsaWEgeSBhbWlnb3MuPC9zcGFuPjwvcD48cD48YnI+PC9wPidcclxuICApO1xyXG4gIC8vIGlmKHJvdXRlci5pc0ZhbGxiYWNrKXtcclxuICAvLyAgICAgcmV0dXJuIDxkaXY+Q0FSR0FORE8uLi48L2Rpdj5cclxuICAvLyB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwTGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhZGUtaW4gYW5pbWF0ZWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1iYW5uZXItYmxvZ1wiPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9vbmRhLWJsYW5jYS5zdmdcIlxyXG4gICAgICAgICAgICBhbHQ9XCJvbmRhc1wiXHJcbiAgICAgICAgICAgIHdpZHRoPXsyMH1cclxuICAgICAgICAgICAgaGVpZ2h0PXs1MH1cclxuICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9uZGFzXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC10aXRsZS1ibG9nXCI+RGV0YWxsZXMgZGUgYmxvZzwvaDQ+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPVwiL2ltYWdlL29uZGEtYmxhbmNhLnN2Z1wiXHJcbiAgICAgICAgICAgIGFsdD1cIm9uZGFzXCJcclxuICAgICAgICAgICAgd2lkdGg9ezIwfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezUwfVxyXG4gICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwib25kYXNcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1ibG9nLWVzcGVjaWZpY29cIj5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9XCIvaW1hZ2UvYmxvZy9udWJlMS5wbmdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJudWJlMSBoZWFydGJlYXRcIlxyXG4gICAgICAgICAgICB3aWR0aD17NzB9XHJcbiAgICAgICAgICAgIGhlaWdodD17NzB9XHJcbiAgICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxyXG4gICAgICAgICAgICBhbHQ9XCJudWJlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPVwiL2ltYWdlL2Jsb2cvbnViZTIucG5nXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibnViZTIgaGVhcnRiZWF0XCJcclxuICAgICAgICAgICAgd2lkdGg9ezcwfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezcwfVxyXG4gICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgICAgICAgICAgYWx0PVwibnViZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9ibG9nL251YmUzLnBuZ1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm51YmUzIGhlYXJ0YmVhdFwiXHJcbiAgICAgICAgICAgIHdpZHRoPXs3MH1cclxuICAgICAgICAgICAgaGVpZ2h0PXs3MH1cclxuICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgICAgIGFsdD1cIm51YmVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LWF1dG9yLWJsb2dcIj5cclxuICAgICAgICAgICAgPGZpZ3VyZT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICBjdXJyZW50RGF0YS5pbWFnZW5lc1swXS50eXBlSW1hZ2UgPT09IFwiQVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBjdXJyZW50RGF0YS5pbWFnZW5lc1swXS51cmxcclxuICAgICAgICAgICAgICAgICAgICA6IGN1cnJlbnREYXRhLmltYWdlbmVzWzFdLnVybFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtYXV0b3ItdGV4dC1ibG9nXCI+XHJcbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtYXV0b3JcIj57Y3VycmVudERhdGEuYmxvZy5hdXRvcn08L2g1PlxyXG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LWZlY2hhXCI+e2N1cnJlbnREYXRhLmJsb2cuZmVjaGEuc3Vic3RyKDAsMTApfTwvaDU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1hcnRpY3Vsby1ibG9nXCI+XHJcbiAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiYm94LWFydGljdWxvLWltZy1wcmluY2lwYWwtYmxvZ1wiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnREYXRhLmltYWdlbmVzWzBdLnR5cGVJbWFnZSA9PT0gXCJQXCJcclxuICAgICAgICAgICAgICAgICAgICA/IGN1cnJlbnREYXRhLmltYWdlbmVzWzBdLnVybFxyXG4gICAgICAgICAgICAgICAgICAgIDogY3VycmVudERhdGEuaW1hZ2VuZXNbMV0udXJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDBcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1hcnRpY3Vsby10aXRsZS1ibG9nXCI+XHJcbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgICAgaWNvbj17ZmFTdGFyfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3Rhci1ibG9nIGhlYXJ0YmVhdFwiXHJcbiAgICAgICAgICAgICAgPjwvRm9udEF3ZXNvbWVJY29uPlxyXG4gICAgICAgICAgICAgIDxoMj4ge2N1cnJlbnREYXRhLmJsb2cudGl0dWxvfTwvaDI+XHJcbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgICAgaWNvbj17ZmFTdGFyfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3Rhci1ibG9nIGhlYXJ0YmVhdFwiXHJcbiAgICAgICAgICAgICAgPjwvRm9udEF3ZXNvbWVJY29uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEpvZGl0RWRpdG9yXHJcbiAgICAgICAgICAgICAgY29uZmlnPXtjb25maWd9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbnRlbmlkb31cclxuICAgICAgICAgICAgICBuYW1lPVwiY29udGVuaWRvXCJcclxuICAgICAgICAgICAgICAvLyBvbkJsdXI9e2hhbmRsZUJsdXJBcmVhQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuYm94LWJhbm5lci1ibG9nIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNXJlbTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2ltYWdlL2Jsb2cvYmxvZy5wbmcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50ZXh0LXRpdGxlLWJsb2cge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJDbGlja2VyIFNjcmlwdFwiLCBjdXJzaXZlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcmVtIDFyZW0gMHJlbTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc3VidGl0bGUtZGFyay1ibG9nIHtcclxuICAgICAgICAgICAgY29sb3I6ICM1NzU3NTY7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnQtcmVndWxhclwiO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDByZW0gMTVyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0xMnJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ib3gtY2FyZC1ncm91cCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiAxNnJlbTtcclxuICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNhcmQtYmxvZyB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDE0cHggMjBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1yZWd1bGFyXCI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEuMjhyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgd2lkdGg6IDE4cmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYm94LWdyZWVuLWJsb2cge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRleHQtYm90dG9tLWJsb2cge1xyXG4gICAgICAgICAgICBjb2xvcjogI2FiYzBhMztcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1yZWd1bGFyXCI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC8qIG1hcmdpbjogM3JlbSAyMHJlbTsgKi9cclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDE2JTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRleHQtYm90dG9tLWJsb2cgYiB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnQtc2VtaWJvbGRcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb250LW1vbnQtcmVndWxhciB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnQtcmVndWxhclwiO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5ib3gtYmxvZy1lc3BlY2lmaWNvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDRyZW0gOXJlbTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1yZWd1bGFyXCI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJveC1hdXRvci1ibG9nIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDdyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYm94LWF1dG9yLXRleHQtYmxvZyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ib3gtYXJ0aWN1bG8tYmxvZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGV4dC1hdXRvciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNTc1NzU2O1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1oZWF2eVwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRleHQtZmVjaGEge1xyXG4gICAgICAgICAgICBjb2xvcjogIzU1NmVhMTtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYm94LWFydGljdWxvLXRpdGxlLWJsb2cge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcmVtIDJyZW07XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJveC1hcnRpY3Vsby10aXRsZS1ibG9nIGgyIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1zZW1pYm9sZFwiO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNTc1NzU2O1xyXG4gICAgICAgICAgICBtYXJnaW46IDJyZW0gMHJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdGFyLWJsb2cge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZlYmY0MTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5udWJlMSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA3MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDIlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm51YmUyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgcmlnaHQ6IDIlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm51YmUzIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDE0MCU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAzJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ib3gtYXJ0aWN1bG8taW1nLXByaW5jaXBhbC1ibG9nIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgOmdsb2JhbCguam9kaXQtY29udGFpbmVyOm5vdCguam9kaXRfaW5saW5lKSkge1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ib3gtYmxvZy1nZW5lcmFsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzcmVtIDlyZW07XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnQtcmVndWxhclwiO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jYXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1zZW1pYm9sZFwiO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jYXJkLXRleHQge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJtb250LWxpZ2h0XCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuam9kaXQsXHJcbiAgICAgICAgICAuam9kaXQgKixcclxuICAgICAgICAgIC5qb2RpdC1jb250YWluZXIsXHJcbiAgICAgICAgICAuam9kaXQtY29udGFpbmVyICogc3BhbiB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnQtcmVndWxhclwiICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmZvbnQtc2VtaWJvbGQtbW9udCB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnQtc2VtaWJvbGRcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDpnbG9iYWwoLmpvZGl0LXN0YXR1cy1iYXIpIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHsvKiA6Z2xvYmFsKC5qb2RpdC1jb250YWluZXIpIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMHJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfSAqL31cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTgwMHB4KSB7XHJcbiAgICAgICAgICAgIC5ib3gtYmxvZy1nZW5lcmFsIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtIDByZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnN1YnRpdGxlLWRhcmstYmxvZyB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM1NzU3NTY7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1zZW1pYm9sZFwiO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBtYXJnaW46IDByZW0gMjByZW07XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTEycmVtO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbnRhaW5lcixcclxuICAgICAgICAgICAgLmNvbnRhaW5lci1sZyxcclxuICAgICAgICAgICAgLmNvbnRhaW5lci1tZCxcclxuICAgICAgICAgICAgLmNvbnRhaW5lci1zbSxcclxuICAgICAgICAgICAgLmNvbnRhaW5lci14bCB7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNjAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNhcmQtdGV4dCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNhcmQtYmxvZyB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyNnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubnViZTEge1xyXG4gICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDIwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubnViZTIge1xyXG4gICAgICAgICAgICAgIHRvcDogODAlO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAxNSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm51YmUzIHtcclxuICAgICAgICAgICAgICB0b3A6IDE0MCU7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDE1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAuYm94LWJsb2ctZXNwZWNpZmljbyB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMXJlbSAxLjVyZW0gM3JlbTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ib3gtYXV0b3ItYmxvZyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogN3JlbTtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYm94LWF1dG9yLXRleHQtYmxvZyB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ib3gtYXJ0aWN1bG8tYmxvZyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRleHQtYXV0b3Ige1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGV4dC1mZWNoYSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJveC1hcnRpY3Vsby10aXRsZS1ibG9nIGgyIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc3Rhci1ibG9nIHtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZlYmY0MTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubnViZTEge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IDE2MCU7XHJcbiAgICAgICAgICAgICAgbGVmdDogLTUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5udWJlMiB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHRvcDogOTAlO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAxJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubnViZTMge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IDM1MCU7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDElO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ib3gtYmFubmVyLWJsb2cge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTJyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50ZXh0LXRpdGxlLWJsb2cge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgICBtYXJnaW46IDByZW0gMC41cmVtIDByZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm9uZGFzIHtcclxuICAgICAgICAgICAgICB3aWR0aDogM3JlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYm94LWJhbm5lci1ibG9nIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEycmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50ZXh0LXRpdGxlLWJsb2cge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkNsaWNrZXIgU2NyaXB0XCIsIGN1cnNpdmU7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc3VidGl0bGUtZGFyay1ibG9nIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMHJlbTtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcmVtO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJveC1jYXJkLWdyb3VwIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgdG9wOiAzcmVtO1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY2FyZC1ibG9nIHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTRweCAyMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEuMjhyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB3aWR0aDogMThyZW07XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ib3gtZ3JlZW4tYmxvZy1pbWctZm9uZG8ge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDMwcmVtO1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogMTAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGV4dC1ib3R0b20tYmxvZyB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYm94LWJsb2ctZ2VuZXJhbCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMS41cmVtIDEycmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jYXJkLWRlY2sge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jYXJkLWRlY2sgLmNhcmQtYmxvZyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbiAgICAgICAgICAgIC5udWJlMSB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICAgICAgICBsZWZ0OiAtMTUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5udWJlMiB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAxJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubnViZTMge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICByaWdodDogMSU7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDVyZW07XHJcbiAgICAgICAgICAgICAgdG9wOiBhdXRvO1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogLTE1MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9BcHBMYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAvLyBDYWxsIGFuIGV4dGVybmFsIEFQSSBlbmRwb2ludCB0byBnZXQgcG9zdHNcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9nZXRCbG9nQWxsL3VzZXI/bGltaXQ9YWxsXCIpO1xyXG4gIGNvbnN0IGJsb2dzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBjb25zb2xlLmxvZyhibG9ncy5sZW5ndGgsIFwib2ppdG9hXCIpO1xyXG4gIC8vIEdldCB0aGUgcGF0aHMgd2Ugd2FudCB0byBwcmUtcmVuZGVyIGJhc2VkIG9uIHBvc3RzXHJcbiAgY29uc3QgcGF0aHMgPSBibG9ncy5tYXAoKGJsb2cpID0+ICh7XHJcbiAgICBwYXJhbXM6IHsgYmxvZzogU3RyaW5nKGJsb2cuYmxvZy5faWQpIH0sXHJcbiAgfSkpO1xyXG5cclxuICAvLyBXZSdsbCBwcmUtcmVuZGVyIG9ubHkgdGhlc2UgcGF0aHMgYXQgYnVpbGQgdGltZS5cclxuICAvLyB7IGZhbGxiYWNrOiBmYWxzZSB9IG1lYW5zIG90aGVyIHJvdXRlcyBzaG91bGQgNDA0LlxyXG4gIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogZmFsc2UgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICAvLyBDYWxsIGFuIGV4dGVybmFsIEFQSSBlbmRwb2ludCB0byBnZXQgcG9zdHMuXHJcbiAgLy8gWW91IGNhbiB1c2UgYW55IGRhdGEgZmV0Y2hpbmcgbGlicmFyeVxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjUwMDAvZ2V0QmxvZy8ke3BhcmFtcy5ibG9nfWApO1xyXG4gIGNvbnN0IGN1cnJlbnREYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgLy8gQnkgcmV0dXJuaW5nIHsgcHJvcHM6IHBvc3RzIH0sIHRoZSBCbG9nIGNvbXBvbmVudFxyXG4gIC8vIHdpbGwgcmVjZWl2ZSBgcG9zdHNgIGFzIGEgcHJvcCBhdCBidWlsZCB0aW1lXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGN1cnJlbnREYXRhOiBjdXJyZW50RGF0YVswXSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZEJsb2dFc3BlY2lmaWM7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqb2RpdC1yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L0xpbmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvRm9ybUNvbnRyb2xcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL05hdlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvTmF2YmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=