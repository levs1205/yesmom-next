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
      children: "@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&display=swap\");@import url(\"https://fonts.googleapis.com/css2?family=Clicker+Script&display=swap\");@font-face{font-family:\"mont-heavy\";src:url(fonts/Mont-Heavy.otf);}@font-face{font-family:\"omnes-bold\";src:url(fonts/OMNES-BOLD.OTF);}@font-face{font-family:\"omnes-regular\";src:url(fonts/Omnes-Regular.otf);}@font-face{font-family:\"mont-heavy\";src:url(fonts/Mont-Heavy.otf);}@font-face{font-family:\"mont-thin\";src:url(fonts/Mont-Thin.otf);}@font-face{font-family:\"mont-regular\";src:url(fonts/Mont-Regular.otf);}@font-face{font-family:\"mont-semibold\";src:url(fonts/Mont-SemiBold.otf);}@font-face{font-family:\"mont-light\";src:url(fonts/Mont-Light.otf);}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",\"Roboto\", \"Oxygen\",\"Ubuntu\",\"Cantarell\",\"Fira Sans\",\"Droid Sans\", \"Helvetica Neue\",sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}code{font-family:source-code-pro,Menlo,Monaco,Consolas,\"Courier New\", monospace;}html{font-size:0.98vw !important;font-family:\"mont-heavy\";}.mt-views{padding-top:0rem;}.w-80{width:80%;}.w-90{width:90%;}.sin-margin{margin-left:0px !important;margin-right:0px !important;}.pl-10{padding-left:6rem;}.title-fuxia{color:#ec608d;font-weight:1000;font-size:2.4rem;font-family:\"mont-heavy\";padding:0 1rem;text-align:center;}.subtitle-dark{color:#575756;font-family:\"mont-regular\";font-size:2rem;}.btn-yellow{background-color:#febf41;font-family:\"omnes-bold\";font-weight:900;font-size:1.4rem;color:#fff;padding:1.5rem 0rem;margin:2rem auto;width:13rem;border-radius:30px;text-align:center;line-height:1.3rem;display:block;}.bg-fuxia{background:#ec608d !important;}.bg-verde{background-color:#c9dbc3 !important;}.bg-azul{background:#4b64a4 !important;}.bg-yellow{background-color:#febf41 !important;}.bg-gray{background-color:#575650 !important;}.box-yesmom{max-width:1800px;width:100%;margin:auto;}.link-a{color:#575756 !important;font-family:\"mont-regular\";font-size:1.1rem;-webkit-text-decoration:none !important;text-decoration:none !important;}.link-a b{font-family:\"mont-heavy\";}.view-desktop{display:block;}.view-mobile{display:none;}.btn-efect{cursor:pointer;display:block;position:relative;}.btn-efect,.btn-efect::after{-webkit-transition:all 0.3s;-moz-transition:all 0.3s;-o-transition:all 0.3s;-webkit-transition:all 0.3s;transition:all 0.3s;}.btn-efect::before,.btn-efect::after{background-color:#fff !important;content:\"\" !important;position:absolute;z-index:-1;}.btn-efect:hover{color:#ec608d;font-weight:400;background-color:#fff !important;}.btn-efect::after{height:100%;left:0;top:0;width:0;}.btn-efect:hover:after{width:100%;}.hover-fuxia{color:#fff !important;-webkit-transition:all 0.5s;transition:all 0.5s;position:relative;-webkit-text-decoration:none !important;text-decoration:none !important;cursor:pointer;}.hover-fuxia::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;z-index:999;background-color:rgba(214,211,211,0.1);-webkit-transition:all 0.3s;transition:all 0.3s;}.hover-fuxia:hover::before{opacity:0;-webkit-transform:scale(0.5,0.5);-ms-transform:scale(0.5,0.5);transform:scale(0.5,0.5);}.hover-fuxia::after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;z-index:6;opacity:0;-webkit-transition:all 0.3s;transition:all 0.3s;border:1px solid #ec608d;-webkit-transform:scale(1.2,1.2);-ms-transform:scale(1.2,1.2);transform:scale(1.2,1.2);border-radius:30px;}.hover-fuxia:hover::after{opacity:1;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);}.hover-amarillo{color:#fff !important;-webkit-transition:all 0.7s;transition:all 0.7s;position:relative;-webkit-text-decoration:none !important;text-decoration:none !important;cursor:pointer;}.hover-amarillo::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;z-index:999;background-color:rgba(214,211,211,0.1);-webkit-transition:all 0.3s;transition:all 0.3s;}.hover-amarillo:hover::before{opacity:0;-webkit-transform:scale(0.7,0.7);-ms-transform:scale(0.7,0.7);transform:scale(0.7,0.7);}.hover-amarillo::after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;z-index:6;opacity:0;-webkit-transition:all 0.3s;transition:all 0.3s;border:1px solid #febf41;-webkit-transform:scale(1.3,1.3);-ms-transform:scale(1.3,1.3);transform:scale(1.3,1.3);border-radius:30px;}.hover-amarillo:hover::after{opacity:1;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);}.hover-verde{color:#fff !important;-webkit-transition:all 0.7s;transition:all 0.7s;position:relative;-webkit-text-decoration:none !important;text-decoration:none !important;cursor:pointer;}.hover-verde::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;z-index:999;background-color:rgba(214,211,211,0.1);-webkit-transition:all 0.3s;transition:all 0.3s;}.hover-verde:hover::before{opacity:0;-webkit-transform:scale(0.7,0.7);-ms-transform:scale(0.7,0.7);transform:scale(0.7,0.7);}.hover-verde::after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;z-index:6;opacity:0;-webkit-transition:all 0.3s;transition:all 0.3s;border:1px solid #c9dbc3;-webkit-transform:scale(1.3,1.3);-ms-transform:scale(1.3,1.3);transform:scale(1.3,1.3);border-radius:30px;}.hover-verde:hover::after{opacity:1;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);}.hover-azul{color:#fff !important;-webkit-transition:all 0.7s;transition:all 0.7s;position:relative;-webkit-text-decoration:none !important;text-decoration:none !important;cursor:pointer;}.hover-azul::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;z-index:999;background-color:rgba(214,211,211,0.1);-webkit-transition:all 0.3s;transition:all 0.3s;}.hover-azul:hover::before{opacity:0;-webkit-transform:scale(0.7,0.7);-ms-transform:scale(0.7,0.7);transform:scale(0.7,0.7);}.hover-azul::after{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;z-index:6;opacity:0;-webkit-transition:all 0.3s;transition:all 0.3s;border:1px solid #4b64a4;-webkit-transform:scale(1.3,1.3);-ms-transform:scale(1.3,1.3);transform:scale(1.3,1.3);border-radius:30px;}.hover-azul:hover::after{opacity:1;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);}.hover-efect-letter{-webkit-text-decoration:none;text-decoration:none;position:relative;-webkit-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;cursor:pointer;}.hover-efect-letter:before,.hover-efect-letter:after{content:\"\";position:absolute;-webkit-transition:all 250ms ease-in-out;transition:all 250ms ease-in-out;pointer-events:none;}.hover-efect-letter:after{width:100%;height:1px;background:#575756;left:0;bottom:-5px;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}.hover-efect-letter:hover:after{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}@media (max-width:769px){html{font-size:4.6vw !important;}.view-desktop{display:none;}.view-mobile{display:block;}.mt-views{padding-top:5.5rem;}.title-fuxia{font-size:1.2rem;}.subtitle-dark{font-size:1rem;}.btn-yellow{font-size:1rem;padding:1.2rem 0rem;width:10rem;}}.heartbeat{-webkit-animation:heartbeat 1.5s ease-in-out infinite both;-webkit-animation:heartbeat 1.5s ease-in-out infinite both;animation:heartbeat 1.5s ease-in-out infinite both;}@-webkit-keyframes heartbeat{from{-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transform-origin:center center;-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}10%{-webkit-transform:scale(0.91);-webkit-transform:scale(0.91);-ms-transform:scale(0.91);transform:scale(0.91);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}17%{-webkit-transform:scale(0.98);-webkit-transform:scale(0.98);-ms-transform:scale(0.98);transform:scale(0.98);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}33%{-webkit-transform:scale(0.87);-webkit-transform:scale(0.87);-ms-transform:scale(0.87);transform:scale(0.87);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}45%{-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}}@-webkit-keyframes heartbeat{from{-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transform-origin:center center;-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}10%{-webkit-transform:scale(0.91);-webkit-transform:scale(0.91);-ms-transform:scale(0.91);transform:scale(0.91);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}17%{-webkit-transform:scale(0.98);-webkit-transform:scale(0.98);-ms-transform:scale(0.98);transform:scale(0.98);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}33%{-webkit-transform:scale(0.87);-webkit-transform:scale(0.87);-ms-transform:scale(0.87);transform:scale(0.87);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}45%{-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}}@keyframes heartbeat{from{-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transform-origin:center center;-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}10%{-webkit-transform:scale(0.91);-webkit-transform:scale(0.91);-ms-transform:scale(0.91);transform:scale(0.91);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}17%{-webkit-transform:scale(0.98);-webkit-transform:scale(0.98);-ms-transform:scale(0.98);transform:scale(0.98);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}33%{-webkit-transform:scale(0.87);-webkit-transform:scale(0.87);-ms-transform:scale(0.87);transform:scale(0.87);-webkit-animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}45%{-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}}.flicker-1{-webkit-animation:flicker-1 2s linear infinite both;-webkit-animation:flicker-1 2s linear infinite both;animation:flicker-1 2s linear infinite both;}.fade-in{-webkit-animation:fade-in 1.2s cubic-bezier(0.39,0.575,0.565,1) both;-webkit-animation:fade-in 1.2s cubic-bezier(0.39,0.575,0.565,1) both;animation:fade-in 1.2s cubic-bezier(0.39,0.575,0.565,1) both;}@-webkit-keyframes fade-in{0%{opacity:0;}100%{opacity:1;}}@-webkit-keyframes fade-in{0%{opacity:0;}100%{opacity:1;}}@keyframes fade-in{0%{opacity:0;}100%{opacity:1;}}.animated{-webkit-animation-duration:3s;-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-fill-mode:both;-webkit-animation-fill-mode:both;animation-fill-mode:both;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamNxdWlcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxoZW5yaV9iYXJyZXR0XFx5ZXMtbW9tXFx5ZXNtb21fbmV4dFxcY29tcG9uZW50c1xcQXBwTGF5b3V0XFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQlMsQUFHc0IsQUFVRSxBQUcwSixBQUNwRixBQUd4RCxBQUtBLEFBS0csQUFLSCxBQUtELEFBS0csQUFLQyxBQUtILEFBS0csQUFLWCxBQUlQLEFBR0EsQUFJaUIsQUFJVCxBQUdKLEFBU0EsQUFNVyxBQWNLLEFBSU0sQUFHTixBQUdNLEFBSUEsQUF5Qm5CLEFBS1EsQUFNQSxBQUlYLEFBR0QsQUFLRSxBQU1hLEFBT0ssQUFPbkIsQUFPRixBQU9ELEFBS1csQUFPWCxBQVdELEFBSUMsQUFjRCxBQU1ZLEFBT1gsQUFXRCxBQUlDLEFBY0QsQUFNWSxBQU9YLEFBV0QsQUFJQyxBQWNELEFBTVksQUFPWCxBQVdELEFBSUMsQUFjRCxBQUtXLEFBUVYsQUFPQSxBQVNVLEFBS1EsQUFHZCxBQUdDLEFBSUssQUFJRixBQUlGLEFBSUEsQUFTMEMsQUFNOUIsQUFRRyxBQU1BLEFBTUEsQUFNSCxBQVFBLEFBUUcsQUFNQSxBQU1BLEFBTUgsQUFRdUIsQUFNOUMsQUFLTSxBQUdBLEFBS0EsQUFHQSxBQUtrQixTQXZoQkEsQ0FnRWhDLEFBR0EsQUErSjRCLEFBa0JKLEFBd0JJLEFBa0JKLEFBd0JJLEFBa0JKLEFBd0JJLEFBa0JKLEFBc0p0QixBQUdBLEFBS0EsQUFHQSxDQXhVRixBQVlvQixBQWVBLEFBMkJBLEFBZUEsQUEyQkEsQUFlQSxBQTJCQSxBQWVBLEFBMkJBLEFBT1AsQ0FsTUosQ0FoQ1QsQUFtUEUsQ0F6VWlCLEFBU1UsQUEwRTdCLEFBNEJrQixBQTZOaEIsQ0FqUGMsQUE2UGQsQUFJc0IsRUE5V3hCLEFBc0ZhLEFBZ1JYLENBdlZGLENBMEhRLEFBeU5OLEdBOU1vQixBQTBDQSxBQTBDQSxBQTBDQSxBQXlERCxFQXBXVSxDQXBCQyxBQUtBLEFBVUEsQUFvQkEsQUEyQ0wsQUEwREUsQUFNN0IsQUF5Q1UsRUE5SndCLEFBK0JKLEFBNlU1QixBQXFDcUIsQUEwQkEsQUFRQSxBQTBCQSxDQTVkWSxBQW9CQSxBQVVSLEFBNEZiLEFBNEJhLENBTFAsQUE4Q1osQUFlQSxBQTJCQSxBQWVBLEFBMkJBLEFBZUEsQUEyQkEsQUFlQSxBQTJCMkIsQ0FyUm5DLEFBT0EsQUE0RW1DLEFBbVFULEFBTUEsQUFNQSxBQXNCQSxBQU1BLEFBTUEsQUF5Q0YsQ0F6Y0wsRUF1R0ssQUFpQnhCLEVBa0JTLEFBZUEsQUEyQkEsQUFlQSxBQTJCQSxBQWVBLEFBMkJBLEFBZUEsQUFxRU8sQ0E1VGhCLEFBTUEsQUFJQSxJQTJCQSxDQTVEaUIsQUFnVFIsQ0E5S0ksQUFlQSxBQTJCQSxBQWVBLEFBMkJBLEFBZUEsQUEyQkEsQUFlQSxLQTVMYixBQWlRRSxDQTVWeUIsQUF5VGIsRUEzU0ksQUF5UkUsRUEvTkQsQUFxVzJCLENBemQ5QyxBQW9CQSxBQXdIeUIsQUEyQ1gsQUFlQSxBQTJCQSxBQWVBLEFBMkJBLEFBZUEsQUEyQkEsQUFlQSxFQXhWZCxBQUtBLEFBVUEsQUFvQkEsQUFxQkEsQUErR29CLENBOUZwQixHQWhEQSxBQTBZcUQsQ0F6Q2hDLENBaFhyQixBQW9CQSxFQWtKQSxFQTRCYyxBQWVGLEFBMkJFLEFBZUYsQUEyQkUsQUFlRixBQTJCRSxBQWVGLENBMVFPLEVBeVJnQixDQS9ORCxBQTBXZ0MsQ0FsVDlDLEFBMENBLEFBMENBLEFBMENBLEdBOVBILEFBdUdKLEVBaExiLEFBb09ZLEFBMENBLEFBMENBLEFBMENBLEFBcUNaLENBOU5zQixDQTRDc0IsQUEwQ0EsQUEwQ0EsQUEwQ0EsS0E4TFQsQ0F6YnRCLENBeUZiLENBb0RzQixBQVF0QixBQWtDc0IsQUFRdEIsQUFrQ3NCLEFBUXRCLEFBa0NzQixBQVF0QixHQWpTb0IsQUFnSWMsQUEwQ0EsQUEwQ0EsQUEwQ0EsTUEvT1osRUF5VnFCLEFBMEJJLEFBUUosQUEwQkksQ0FuUi9DLEFBMENBLEFBMENBLEFBMENBLE1BZ0NzQixHQTlTdEIsRUErVzhDLEFBTUMsQUFNRCxBQXNCQSxBQU1DLEFBTUQsTUE5WTNCLENBd2JRLENBNVRMLEFBMENBLEFBMENBLEFBMENBLE9Bc0N0QixDQWhOQSxLQXlOQSxFQXhTYyxFQTJJYSxBQTBDQSxBQTBDQSxBQTBDQSxFQStFUSxBQWtDQSxJQVJJLEFBa0NBLEVBN1Z2QyxDQStOaUIsQ0FyUkksS0EwWnJCLEVBM0RzQyxBQVlBLEFBc0JBLEFBWUEsQ0F4Q0MsQUFrQ0EsTUFqSHZDLENBM0k0QixBQTBDQSxBQTBDQSxBQTBDQSxDQTVXUyxDQWtOcEIsQUEwQ0EsQUEwQ0EsQUEwQ0EsRUE1T0csRUEwSHBCLEFBMENBLEFBMENBLEFBMENBLEtBdUZBLElBdUdBLEVBdlVBLEFBMENBLEFBMENBLEFBMENBLEtBNU9xQixjQXBHZSxLQXFHcEIsQUE2WmhCLGNBNVpBLElBOFdFLEFBa0NBLFNBcERBLEFBWUEsQUFzQkEsQUFZQSxFQS9lRixDQXVjRSxBQWtDQSxXQWhENkMsQUFrQ0EsS0E5TzFCLEFBMENBLEFBMENBLEFBMENBLG1CQTdIckIsQUEwQ0EsQUEwQ0EsQUEwQ0EsbUJBOEV1QyxBQWtDQSw4RUFqQ3JDLEFBa0NBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcamNxdWlcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxoZW5yaV9iYXJyZXR0XFx5ZXMtbW9tXFx5ZXNtb21fbmV4dFxcY29tcG9uZW50c1xcQXBwTGF5b3V0XFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi8uLi9Gb290ZXJcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi8uLi9IZWFkZXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuXHJcbmNvbnN0IGFwcExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib3gteWVzbW9tXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT55ZXNtb208L3RpdGxlPlxyXG4gICAgICAgIHsvKiA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3dhdGNoLzQuNS4yL2ZsYXRseS9ib290c3RyYXAubWluLmNzc1wiXHJcbiAgICAgICAgLz4gKi99XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cImVzdG8gZXMgZGVzY3JpcGNpb25cIj48L21ldGE+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEhlYWRlcj48L0hlYWRlcj5cclxuICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cclxuICAgICAgPEZvb3Rlcj48L0Zvb3Rlcj5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgXCJSb2JvdG9cIixcclxuICAgICAgICAgICAgICBcIk94eWdlblwiLCBcIlVidW50dVwiLCBcIkNhbnRhcmVsbFwiLCBcIkZpcmEgU2Fuc1wiLCBcIkRyb2lkIFNhbnNcIixcclxuICAgICAgICAgICAgICBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvZGUge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogc291cmNlLWNvZGUtcHJvLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJDb3VyaWVyIE5ld1wiLFxyXG4gICAgICAgICAgICAgIG1vbm9zcGFjZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDAmZGlzcGxheT1zd2FwXCIpO1xyXG4gICAgICAgICAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNsaWNrZXIrU2NyaXB0JmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbiAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1oZWF2eVwiO1xyXG4gICAgICAgICAgICBzcmM6IHVybChmb250cy9Nb250LUhlYXZ5Lm90Zik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm9tbmVzLWJvbGRcIjtcclxuICAgICAgICAgICAgc3JjOiB1cmwoZm9udHMvT01ORVMtQk9MRC5PVEYpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJvbW5lcy1yZWd1bGFyXCI7XHJcbiAgICAgICAgICAgIHNyYzogdXJsKGZvbnRzL09tbmVzLVJlZ3VsYXIub3RmKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1oZWF2eVwiO1xyXG4gICAgICAgICAgICBzcmM6IHVybChmb250cy9Nb250LUhlYXZ5Lm90Zik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnQtdGhpblwiO1xyXG4gICAgICAgICAgICBzcmM6IHVybChmb250cy9Nb250LVRoaW4ub3RmKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1yZWd1bGFyXCI7XHJcbiAgICAgICAgICAgIHNyYzogdXJsKGZvbnRzL01vbnQtUmVndWxhci5vdGYpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJtb250LXNlbWlib2xkXCI7XHJcbiAgICAgICAgICAgIHNyYzogdXJsKGZvbnRzL01vbnQtU2VtaUJvbGQub3RmKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1saWdodFwiO1xyXG4gICAgICAgICAgICBzcmM6IHVybChmb250cy9Nb250LUxpZ2h0Lm90Zik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45OHZ3ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnQtaGVhdnlcIjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubXQtdmlld3Mge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMHJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudy04MCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudy05MCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNpbi1tYXJnaW4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucGwtMTAge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDZyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGl0bGUtZnV4aWEge1xyXG4gICAgICAgICAgICBjb2xvcjogI2VjNjA4ZDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi40cmVtO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJtb250LWhlYXZ5XCI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zdWJ0aXRsZS1kYXJrIHtcclxuICAgICAgICAgICAgY29sb3I6ICM1NzU3NTY7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnQtcmVndWxhclwiO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJ0bi15ZWxsb3cge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmViZjQxO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJvbW5lcy1ib2xkXCI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgcGFkZGluZzogMS41cmVtIDByZW07XHJcbiAgICAgICAgICAgIG1hcmdpbjogMnJlbSBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogMTNyZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuM3JlbTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYmctZnV4aWEge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWM2MDhkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJnLXZlcmRlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2M5ZGJjMyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJnLWF6dWwge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNGI2NGE0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYmcteWVsbG93IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlYmY0MSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5iZy1ncmF5IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU3NTY1MCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgLyogQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgICAgIC5ib3gtd2ViIHtcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDkwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xyXG4gICAgICAgICAgICAuYm94LXdlYiB7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5OTJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgLmJveC13ZWIge1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAgICAgLmJveC13ZWIge1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTUwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gKi9cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ib3gteWVzbW9tIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxODAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGluay1hIHtcclxuICAgICAgICAgICAgY29sb3I6ICM1NzU3NTYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1yZWd1bGFyXCI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5saW5rLWEgYiB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnQtaGVhdnlcIjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudmlldy1kZXNrdG9wIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudmlldy1tb2JpbGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8qIEVmZWNjdHMgaG92ZXIgZm9jdXMgICovXHJcbiAgICAgICAgICAuYnRuLWVmZWN0IHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJ0bi1lZmVjdCxcclxuICAgICAgICAgIC5idG4tZWZlY3Q6OmFmdGVyIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJ0bi1lZmVjdDo6YmVmb3JlLFxyXG4gICAgICAgICAgLmJ0bi1lZmVjdDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYnRuLWVmZWN0OmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICNlYzYwOGQ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLyogYm9yZGVyOiAxcHggc29saWQgI2VjNjA4ZDsgKi9cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYnRuLWVmZWN0OjphZnRlciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYnRuLWVmZWN0OmhvdmVyOmFmdGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLyogaG92ZXItZnV4aWEgKi9cclxuICAgICAgICAgIC5ob3Zlci1mdXhpYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaG92ZXItZnV4aWE6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE0LCAyMTEsIDIxMSwgMC4xKTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaG92ZXItZnV4aWE6aG92ZXI6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41LCAwLjUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhvdmVyLWZ1eGlhOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA2O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VjNjA4ZDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIsIDEuMik7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaG92ZXItZnV4aWE6aG92ZXI6OmFmdGVyIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiBob3Zlci1hbWFyaWxsbyAqL1xyXG4gICAgICAgICAgLmhvdmVyLWFtYXJpbGxvIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuN3M7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ob3Zlci1hbWFyaWxsbzo6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTQsIDIxMSwgMjExLCAwLjEpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ob3Zlci1hbWFyaWxsbzpob3Zlcjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcsIDAuNyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaG92ZXItYW1hcmlsbG86OmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDY7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmViZjQxO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMywgMS4zKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ob3Zlci1hbWFyaWxsbzpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8qIGhvdmVyLXZlcmRlICovXHJcbiAgICAgICAgICAuaG92ZXItdmVyZGUge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC43cztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhvdmVyLXZlcmRlOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNCwgMjExLCAyMTEsIDAuMSk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhvdmVyLXZlcmRlOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNywgMC43KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ob3Zlci12ZXJkZTo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgei1pbmRleDogNjtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOWRiYzM7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zLCAxLjMpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhvdmVyLXZlcmRlOmhvdmVyOjphZnRlciB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLyogaG92ZXItYXp1bCAqL1xyXG4gICAgICAgICAgLmhvdmVyLWF6dWwge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC43cztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhvdmVyLWF6dWw6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE0LCAyMTEsIDIxMSwgMC4xKTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaG92ZXItYXp1bDpob3Zlcjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcsIDAuNyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaG92ZXItYXp1bDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgei1pbmRleDogNjtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0YjY0YTQ7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zLCAxLjMpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhvdmVyLWF6dWw6aG92ZXI6OmFmdGVyIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaG92ZXItZWZlY3QtbGV0dGVyIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5ob3Zlci1lZmVjdC1sZXR0ZXI6YmVmb3JlLFxyXG4gICAgICAgICAgLmhvdmVyLWVmZWN0LWxldHRlcjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaG92ZXItZWZlY3QtbGV0dGVyOmFmdGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTc1NzU2O1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBib3R0b206IC01cHg7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmhvdmVyLWVmZWN0LWxldHRlcjpob3ZlcjphZnRlciB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY5cHgpIHtcclxuICAgICAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA0LjZ2dyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC52aWV3LWRlc2t0b3Age1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnZpZXctbW9iaWxlIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm10LXZpZXdzIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNS41cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGl0bGUtZnV4aWEge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc3VidGl0bGUtZGFyayB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYnRuLXllbGxvdyB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEuMnJlbSAwcmVtO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMHJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8qICAqKioqKioqKioqKioqKioqKiogQU5JTUFDSU9ORVMgKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG4gICAgICAgICAgLmhlYXJ0YmVhdCB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBoZWFydGJlYXQgMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZSBib3RoO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGhlYXJ0YmVhdCAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJvdGg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGhlYXJ0YmVhdCB7XHJcbiAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgMTAlIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45MSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkxKTtcclxuICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAxNyUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgMzMlIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44Nyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjg3KTtcclxuICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA0NSUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBrZXlmcmFtZXMgaGVhcnRiZWF0IHtcclxuICAgICAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAxMCUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjkxKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTEpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDE3JSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAzMyUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjg3KTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuODcpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDQ1JSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5mbGlja2VyLTEge1xyXG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogZmxpY2tlci0xIDJzIGxpbmVhciBpbmZpbml0ZSBib3RoO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGZsaWNrZXItMSAycyBsaW5lYXIgaW5maW5pdGUgYm90aDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuZmFkZS1pbiB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlLWluIDEuMnMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSlcclxuICAgICAgICAgICAgICBib3RoO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGZhZGUtaW4gMS4ycyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUtaW4ge1xyXG4gICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGUtaW4ge1xyXG4gICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmFuaW1hdGVkIHtcclxuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHBMYXlvdXQ7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\jcqui\\\\OneDrive\\\\Escritorio\\\\henri_barrett\\\\yes-mom\\\\yesmom_next\\\\components\\\\AppLayout\\\\index.js */"
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
      className: " justify-content-between p-5",
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
          lineNumber: 14,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
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
          lineNumber: 25,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2___default.a.Collapse, {
        id: "basic-navbar-nav",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a, {
          className: "nav-items-collapse ",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "/blog",
            className: "item-navbar hover-efect",
            activeClassName: "is-active",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "jsx-2455250695",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("figure", {
                className: "jsx-2455250695" + " " + "item-menu ",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_8___default.a, {
                  src: "/image/header/blog.svg",
                  alt: "logo blog yesmom " //   className="lupa-img"
                  ,
                  width: 70,
                  height: 70
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                className: "jsx-2455250695" + " " + "",
                children: "Blog"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "/pagina-en-construccion",
            className: "item-navbar hover-efect",
            activeClassName: "is-active",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "jsx-2455250695",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("figure", {
                className: "jsx-2455250695" + " " + "item-menu",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_8___default.a, {
                  src: "/image/header/tienda.svg",
                  alt: "logo tienda yesmom" //   className="lupa-img"
                  ,
                  width: 70,
                  height: 70
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                className: "jsx-2455250695",
                children: "Tienda"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "/pagina-en-construccion",
            className: "item-navbar hover-efect",
            activeClassName: "is-active",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "jsx-2455250695",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("figure", {
                className: "jsx-2455250695" + " " + "item-menu",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_8___default.a, {
                  src: "/image/header/regalo.svg",
                  alt: "logo regalo yesmom" //   className="lupa-img"
                  ,
                  width: 70,
                  height: 70
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                className: "jsx-2455250695",
                children: "Regalos"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "/pagina-en-construccion",
            className: "item-navbar hover-efect",
            activeClassName: "is-active",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "jsx-2455250695",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("figure", {
                className: "jsx-2455250695" + " " + "item-menu",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_8___default.a, {
                  src: "/image/header/iniciar-sesion.svg",
                  alt: "logo iniciar sesi\xF3n yesmom" //   className="lupa-img"
                  ,
                  width: 70,
                  height: 70
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                className: "jsx-2455250695",
                children: "Login"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 136,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 1
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 6
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2455250695",
      children: ".navbar.jsx-2455250695{padding:1rem 5rem !important;background:#fff;z-index:99;}.logo-yesmom.jsx-2455250695{width:5rem;}.item-navbar.jsx-2455250695{display:-webkit-box !important;display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-family:\"Montserrat\",sans-serif;margin:0rem 0.5rem;-webkit-text-decoration:none;text-decoration:none;}.item-menu.jsx-2455250695{width:1.6rem;height:1.6rem;margin:0 0 0.5rem !important;}.item-menu.jsx-2455250695 img.jsx-2455250695{width:100%;height:100%;}.input-search.jsx-2455250695{border:none !important;border-bottom:1px solid #000 !important;border-radius:0 !important;}.nav-items-collapse.jsx-2455250695{margin-left:auto;}.ml-form-search.jsx-2455250695{margin-left:auto;}.lupa-img.jsx-2455250695{width:1.8rem;}@-webkit-keyframes animateHeart-jsx-2455250695{0%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}40%{-webkit-transform:scale(1.09);-ms-transform:scale(1.09);transform:scale(1.09);}100%{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}}@keyframes animateHeart-jsx-2455250695{0%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}40%{-webkit-transform:scale(1.09);-ms-transform:scale(1.09);transform:scale(1.09);}100%{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}}.item-navbar.jsx-2455250695 h6.jsx-2455250695{color:#616160;-webkit-text-decoration:none;text-decoration:none;}.item-navbar.jsx-2455250695 h6.jsx-2455250695:hover{-webkit-text-decoration:none !important;text-decoration:none !important;}.item-navbar.jsx-2455250695:link,.item-navbar.jsx-2455250695:visited,.item-navbar.jsx-2455250695:active{-webkit-text-decoration:none;text-decoration:none;}.is-active.jsx-2455250695 h6.jsx-2455250695{font-weight:800;}.hover-efect.jsx-2455250695{-webkit-animation:animateHeart-jsx-2455250695 0.3s linear forwards !important;animation:animateHeart-jsx-2455250695 0.3s linear forwards !important;cursor:pointer;}.hover-efect.jsx-2455250695:hover,.hover-efect.jsx-2455250695:focus{-webkit-transform:scale(1.2) !important;-ms-transform:scale(1.2) !important;transform:scale(1.2) !important;}@media (min-width:1800px){.logo-yesmom.jsx-2455250695{width:3.5rem;}.item-menu.jsx-2455250695{width:1.3rem;height:1.3rem;}.item-navbar.jsx-2455250695 h6.jsx-2455250695{font-size:0.8rem;}.lupa-img.jsx-2455250695{width:1.3rem;}.form-control.jsx-2455250695{padding:0.3rem 0.75rem !important;font-size:0.8rem !important;}.navbar.jsx-2455250695{padding:0.5rem 5rem !important;}}@media (max-width:991px){.logo-yesmom.jsx-2455250695{width:3rem;}.burger-yesmom.jsx-2455250695{width:2rem;}.navbar.jsx-2455250695{padding:1rem !important;}.navbar-toggler.jsx-2455250695{border:none !important;}.navbar-collapse.jsx-2455250695{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;}.nav-items-collapse.jsx-2455250695{padding-left:5rem;width:100%;}.nav-items-collapse.jsx-2455250695 img.jsx-2455250695{display:none;}.nav-link.jsx-2455250695{padding:0rem 1rem !important;}.form-inline.jsx-2455250695{-webkit-flex-flow:initial !important;-ms-flex-flow:initial !important;flex-flow:initial !important;padding-top:2rem;padding-bottom:1rem !important;}.ml-form-search.jsx-2455250695{margin-left:0;}.item-navbar.jsx-2455250695{-webkit-align-items:flex-start !important;-webkit-box-align:flex-start !important;-ms-flex-align:flex-start !important;align-items:flex-start !important;}.lupa-img.jsx-2455250695{width:1.5rem;}.item-navbar.jsx-2455250695 h6.jsx-2455250695{font-size:1.1rem;}a.item-navbar.nav-link.jsx-2455250695{border-bottom:0.5px solid #575756;}.navbar.jsx-2455250695{position:fixed !important;width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamNxdWlcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxoZW5yaV9iYXJyZXR0XFx5ZXMtbW9tXFx5ZXNtb21fbmV4dFxcY29tcG9uZW50c1xcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJKUyxBQUcwQyxBQVVsQixBQUdhLEFBVVgsQUFNRixBQUtZLEFBTU4sQUFJQSxBQUlKLEFBS1EsQUFHRyxBQUdELEFBS1QsQUFJa0IsQUFLWCxBQUdMLEFBSXVDLEFBS3ZCLEFBU2pCLEFBR0EsQUFJSSxBQUdKLEFBR3FCLEFBSUgsQUFNcEIsQUFJQSxBQUdhLEFBSUQsQUFJVixBQUtLLEFBS0wsQUFJZ0IsQUFJQSxBQUtmLEFBSW9CLEFBR3JCLEFBSUksQUFJaUIsQUFHUixXQWxLOUIsQUFtQmMsQUF3RlosQUFJQSxFQWxHYyxBQXlCaEIsQUE4Q0UsQUFHZ0IsQUFPaEIsQUFzQ0EsQUFvQkEsQ0FsR3FCLEFBMkZyQixFQS9FRixDQXBDQSxBQUlBLEFBeURFLEFBaUVBLENBN0JhLEtBM0dmLEFBSTBDLEFBOEZ4QyxDQUpBLEVBaURhLENBckpnQixBQTBFN0IsRUFsR2dCLEFBMEloQixBQVFBLEVBbkNBLEdBSjhCLEFBK0Q5QixHQUlBLFFBN0tXLEtBd0ViLE1BdkVBLEFBdUJBLE1BbUZFLENBekUyQixDQThCN0IsS0FaRSxHQWVGLEVBZ0VrQyxDQXpFaEMsR0FIQSxZQXBCRixTQWtIcUIsU0FqRXJCLFFBa0VtQyxFQTFJWCw2QkEySXRCLENBeEVlLEtBK0VmLFVBOUVGLGFBb0RFLG9CQXZIdUIsbUdBQ0osNkZBQ2tCLG9DQUNsQixtQkFDRSxrREFDdkIiLCJmaWxlIjoiQzpcXFVzZXJzXFxqY3F1aVxcT25lRHJpdmVcXEVzY3JpdG9yaW9cXGhlbnJpX2JhcnJldHRcXHllcy1tb21cXHllc21vbV9uZXh0XFxjb21wb25lbnRzXFxIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2YmFyIGZyb20gXCJyZWFjdC1ib290c3RyYXAvTmF2YmFyXCI7XHJcbmltcG9ydCBOYXYgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9OYXZcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtXCI7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1Db250cm9sXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvTGlua1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICA8TmF2YmFyIGV4cGFuZD1cImxnXCIgY2xhc3NOYW1lPVwiIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHAtNVwiPlxyXG4gICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPVwiL2ltYWdlL2hlYWRlci9idXJnZXIuc3ZnXCJcclxuICAgICAgICAgICAgYWx0PVwiYnVyZ2VyIHllc21vbVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1cmdlci15ZXNtb21cIlxyXG4gICAgICAgICAgICB3aWR0aD17NTB9XHJcbiAgICAgICAgICAgIGhlaWdodD17NTB9XHJcbiAgICAgICAgICAgIC8vIGxheW91dD1cImludHJpbnNpY1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTmF2YmFyLlRvZ2dsZT5cclxuXHJcbiAgICAgICAgPE5hdmJhci5CcmFuZCBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImhvdmVyLWVmZWN0XCI+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPVwiL2ltYWdlL2hlYWRlci9sb2dvLXllc21vbS5zdmdcIlxyXG4gICAgICAgICAgICBhbHQ9XCJsb2dvIHllc21vbVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ28teWVzbW9tXCJcclxuICAgICAgICAgICAgd2lkdGg9ezcwfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezcwfVxyXG4gICAgICAgICAgICAvLyBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgey8qIDxOYXYuTGluayBocmVmPVwiI2xpbmtcIiBjbGFzc05hbWU9XCJpdGVtLW5hdmJhclwiPlxyXG4gICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cIml0ZW0tbWVudVwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtjZXN0YX0gYWx0PVwibG9nbyB0aWVuZGEgeWVzbW9tXCIgLz5cclxuICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICA8L05hdi5MaW5rPiAqL31cclxuPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIiA+XHJcbiAgICAgICAgICB7LyogPEZvcm0gaW5saW5lIGNsYXNzTmFtZT1cIm1sLWZvcm0tc2VhcmNoXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibHVwYS1pbWdcIj5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9oZWFkZXIvbHVwYS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgYWx0PVwibHVwYSB5ZXNtb21cIlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB3aWR0aD17MjB9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLCv1F1ZSBlcyBsbyBxdWUgYnVzY2FzP1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItc20tMiBpbnB1dC1zZWFyY2hcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtPiAqL31cclxuICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1zLWNvbGxhcHNlIFwiPlxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIGhyZWY9XCIvYmxvZ1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbS1uYXZiYXIgaG92ZXItZWZlY3RcIlxyXG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaXRlbS1tZW51IFwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2UvaGVhZGVyL2Jsb2cuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvIGJsb2cgeWVzbW9tIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBjbGFzc05hbWU9XCJsdXBhLWltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezcwfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17NzB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJcIj5CbG9nPC9oNj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBocmVmPVwiL3BhZ2luYS1lbi1jb25zdHJ1Y2Npb25cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW0tbmF2YmFyIGhvdmVyLWVmZWN0XCJcclxuICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cIml0ZW0tbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2UvaGVhZGVyL3RpZW5kYS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ28gdGllbmRhIHllc21vbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBjbGFzc05hbWU9XCJsdXBhLWltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezcwfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17NzB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgIDxoNj5UaWVuZGE8L2g2PlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIGhyZWY9XCIvcGFnaW5hLWVuLWNvbnN0cnVjY2lvblwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbS1uYXZiYXIgaG92ZXItZWZlY3RcIlxyXG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaXRlbS1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9oZWFkZXIvcmVnYWxvLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9nbyByZWdhbG8geWVzbW9tXCJcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIGNsYXNzTmFtZT1cImx1cGEtaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17NzB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs3MH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgPGg2PlJlZ2Fsb3M8L2g2PlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICB7LyogPE5hdi5MaW5rIGhyZWY9XCIjbGlua1wiIGNsYXNzTmFtZT1cIml0ZW0tbmF2YmFyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17cmVnaXN0cmF0ZX1cclxuICAgICAgICAgICAgICAgICAgYWx0PVwibG9nbyByZWdyw61zdHJhdGUgeWVzbW9tXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbS1tZW51XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aDY+UmVnw61zdHJhdGU8L2g2PlxyXG4gICAgICAgICAgICAgIDwvTmF2Lkxpbms+ICovfVxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIGhyZWY9XCIvcGFnaW5hLWVuLWNvbnN0cnVjY2lvblwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbS1uYXZiYXIgaG92ZXItZWZlY3RcIlxyXG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaXRlbS1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9oZWFkZXIvaW5pY2lhci1zZXNpb24uc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvIGluaWNpYXIgc2VzacOzbiB5ZXNtb21cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgY2xhc3NOYW1lPVwibHVwYS1pbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs3MH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezcwfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICA8aDY+TG9naW48L2g2PlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICB7LyogPE5hdkxpbmsgdG89XCIvY2VzdGFcIiBjbGFzc05hbWU9XCJpdGVtLW5hdmJhclwiICBhY3RpdmVDbGFzc05hbWU9J2lzLWFjdGl2ZSc+XHJcbiAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cIml0ZW0tbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y2VzdGF9IGFsdD1cImxvZ28gY2VzdGEgeWVzbW9tXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgPGg2PkNlc3RhPC9oNj5cclxuICAgICAgICAgICAgICA8L05hdkxpbms+ICovfVxyXG4gICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XHJcblxyXG4gICAgICAgXHJcbiAgICAgIDwvTmF2YmFyPlxyXG5cclxuXHJcbiAgICAgXHJcblxyXG5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLm5hdmJhciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHsvKiA6Z2xvYmFsKCNiYXNpYy1uYXZiYXItbmF2KXtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleCA7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICB9ICovfVxyXG4gICAgICAgICBcclxuICAgICAgICAgIC5sb2dvLXllc21vbSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLml0ZW0tbmF2YmFyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBtYXJnaW46IDByZW0gMC41cmVtO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLml0ZW0tbWVudSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxLjZyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogMS42cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCAwLjVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaXRlbS1tZW51IGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmlucHV0LXNlYXJjaCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm5hdi1pdGVtcy1jb2xsYXBzZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5tbC1mb3JtLXNlYXJjaCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5sdXBhLWltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxLjhyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQGtleWZyYW1lcyBhbmltYXRlSGVhcnQge1xyXG4gICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA0MCUge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLml0ZW0tbmF2YmFyIGg2IHtcclxuICAgICAgICAgICAgY29sb3I6ICM2MTYxNjA7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pdGVtLW5hdmJhciBoNjpob3ZlciB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLml0ZW0tbmF2YmFyOmxpbmssXHJcbiAgICAgICAgICAuaXRlbS1uYXZiYXI6dmlzaXRlZCxcclxuICAgICAgICAgIC5pdGVtLW5hdmJhcjphY3RpdmUge1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXMtYWN0aXZlIGg2IHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaG92ZXItZWZlY3Qge1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGFuaW1hdGVIZWFydCAwLjNzIGxpbmVhciBmb3J3YXJkcyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaG92ZXItZWZlY3Q6aG92ZXIsXHJcbiAgICAgICAgICAuaG92ZXItZWZlY3Q6Zm9jdXMge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMikgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHsvKiBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgOmdsb2JhbCgjYmFzaWMtbmF2YmFyLW5hdil7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogIGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICB9ICovfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE4MDBweCkge1xyXG4gICAgICAgICAgICAubG9nby15ZXNtb20ge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAzLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLml0ZW0tbWVudSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEuM3JlbTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEuM3JlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaXRlbS1uYXZiYXIgaDYge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sdXBhLWltZyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEuM3JlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwLjNyZW0gMC43NXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5hdmJhciB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICAgICAgICAubG9nby15ZXNtb20ge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYnVyZ2VyLXllc21vbSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDJyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5hdmJhciB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubmF2YmFyLXRvZ2dsZXIge1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm5hdi1pdGVtcy1jb2xsYXBzZSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cmVtO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubmF2LWl0ZW1zLWNvbGxhcHNlIGltZyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm5hdi1saW5rIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwcmVtIDFyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmZvcm0taW5saW5lIHtcclxuICAgICAgICAgICAgICBmbGV4LWZsb3c6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tbC1mb3JtLXNlYXJjaCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pdGVtLW5hdmJhciB7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubHVwYS1pbWcge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pdGVtLW5hdmJhciBoNiB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGEuaXRlbS1uYXZiYXIubmF2LWxpbmsge1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICM1NzU3NTY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5hdmJhciB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\jcqui\\\\OneDrive\\\\Escritorio\\\\henri_barrett\\\\yes-mom\\\\yesmom_next\\\\components\\\\Header.js */"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcExheW91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvaW1hZ2UudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYmxvZy9bYmxvZ10uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpvZGl0LXJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9MaW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9keW5hbWljXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9Gb3JtQ29udHJvbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9OYXZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvTmF2YmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbImFwcExheW91dCIsImNoaWxkcmVuIiwiRm9vdGVyIiwiZmFGYWNlYm9va0YiLCJmYVR3aXR0ZXIiLCJmYUluc3RhZ3JhbSIsIkhlYWRlciIsImdsb2JhbCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwibG9hZGVycyIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJkZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJsb2FkZXIiLCJwYXRoIiwiZG9tYWlucyIsInByb2Nlc3MiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiYSIsImxheW91dCIsIndpZHRocyIsImtpbmQiLCJ3aWR0aCIsInciLCJwIiwibG9hZCIsInJvb3QiLCJWQUxJRF9MT0FERVJTIiwiY29uZmlnTG9hZGVyIiwiZ2V0V2lkdGhzIiwibGFzdCIsInNyY1NldCIsImNhbGxMb2FkZXIiLCJpIiwic2l6ZXMiLCJzcmMiLCJwYXJzZUludCIsInVub3B0aW1pemVkIiwicHJpb3JpdHkiLCJhbGwiLCJyZXN0IiwidW5zaXplZCIsIkJvb2xlYW4iLCJKU09OIiwibG9hZGluZyIsImlzTGF6eSIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndpZHRoSW50IiwiZ2V0SW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImltZ1N0eWxlIiwidmlzaWJpbGl0eSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJoZWlnaHQiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaXNOYU4iLCJ3cmFwcGVyU3R5bGUiLCJvdmVyZmxvdyIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ0F0dHJpYnV0ZXMiLCJnZW5lcmF0ZUltZ0F0dHJzIiwicXVhbGl0eSIsInBhcmFtcyIsInBhcmFtc1N0cmluZyIsIm5vcm1hbGl6ZVNyYyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJjb25zb2xlIiwiY29uZmlnRG9tYWlucyIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJzZXRSZWYiLCJlbCIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiaWQiLCJvcHRpb25zIiwiaW5zdGFuY2UiLCJlbnRyaWVzIiwiZW50cnkiLCJjYWxsYmFjayIsImltcG9ydEpvZGl0IiwiSm9kaXRFZGl0b3IiLCJkeW5hbWljIiwic3NyIiwiQ2FyZEJsb2dFc3BlY2lmaWMiLCJjdXJyZW50RGF0YSIsImNvbmZpZyIsInNldENvbmZpZyIsInVzZVN0YXRlIiwicmVhZG9ubHkiLCJ0b29sYmFyIiwiY29udGVuaWRvIiwic2V0Q29udGVuaWRvIiwiaW1hZ2VuZXMiLCJ0eXBlSW1hZ2UiLCJ1cmwiLCJibG9nIiwiYXV0b3IiLCJmZWNoYSIsInN1YnN0ciIsImZhU3RhciIsInRpdHVsbyIsImdldFN0YXRpY1BhdGhzIiwicmVzIiwiZmV0Y2giLCJibG9ncyIsImpzb24iLCJsb2ciLCJsZW5ndGgiLCJwYXRocyIsIm1hcCIsIlN0cmluZyIsIl9pZCIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFB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LEdBQVg7QUFBZDtBQUR5QixHQUFYLENBQVYsQ0FBZCxDQU5xQyxDQVVyQztBQUNBOztBQUNBLFNBQU87QUFBRUgsU0FBRjtBQUFTSSxZQUFRLEVBQUU7QUFBbkIsR0FBUDtBQUNEO0FBRU0sZUFBZUMsY0FBZixDQUE4QjtBQUFFckU7QUFBRixDQUE5QixFQUEwQztBQUMvQztBQUNBO0FBQ0EsUUFBTTBELEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUUsaUNBQWdDM0QsTUFBTSxDQUFDbUQsSUFBSyxFQUE5QyxDQUF2QjtBQUNBLFFBQU1YLFdBQVcsR0FBRyxNQUFNa0IsR0FBRyxDQUFDRyxJQUFKLEVBQTFCLENBSitDLENBTS9DO0FBQ0E7O0FBQ0EsU0FBTztBQUNMUyxTQUFLLEVBQUU7QUFDTDlCLGlCQUFXLEVBQUVBLFdBQVcsQ0FBQyxDQUFEO0FBRG5CO0FBREYsR0FBUDtBQUtEO0FBRWNELGdGQUFmLEU7Ozs7Ozs7Ozs7O0FDamdCQSwrRDs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9ibG9nL1tibG9nXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcInBhZ2VzL2Jsb2cvW2Jsb2ddXCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gdW5jYXVnaHQgZXJyb3IgaGFuZGxlciBmb3Igd2VicGFjayBydW50aW1lXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7XG4gXHRcdHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gXHRcdFx0dGhyb3cgZXJyOyAvLyBjYXRjaCB0aGlzIGVycm9yIGJ5IHVzaW5nIGltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2Jsb2cvW2Jsb2ddLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi8uLi9Gb290ZXJcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi8uLi9IZWFkZXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuXHJcbmNvbnN0IGFwcExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib3gteWVzbW9tXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT55ZXNtb208L3RpdGxlPlxyXG4gICAgICAgIHsvKiA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3dhdGNoLzQuNS4yL2ZsYXRseS9ib290c3RyYXAubWluLmNzc1wiXHJcbiAgICAgICAgLz4gKi99XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cImVzdG8gZXMgZGVzY3JpcGNpb25cIj48L21ldGE+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEhlYWRlcj48L0hlYWRlcj5cclxuICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cclxuICAgICAgPEZvb3Rlcj48L0Zvb3Rlcj5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgXCJSb2JvdG9cIixcclxuICAgICAgICAgICAgICBcIk94eWdlblwiLCBcIlVidW50dVwiLCBcIkNhbnRhcmVsbFwiLCBcIkZpcmEgU2Fuc1wiLCBcIkRyb2lkIFNhbnNcIixcclxuICAgICAgICAgICAgICBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvZGUge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogc291cmNlLWNvZGUtcHJvLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJDb3VyaWVyIE5ld1wiLFxyXG4gICAgICAgICAgICAgIG1vbm9zcGFjZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDAmZGlzcGxheT1zd2FwXCIpO1xyXG4gICAgICAgICAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNsaWNrZXIrU2NyaXB0JmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbiAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1oZWF2eVwiO1xyXG4gICAgICAgICAgICBzcmM6IHVybChmb250cy9Nb250LUhlYXZ5Lm90Zik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm9tbmVzLWJvbGRcIjtcclxuICAgICAgICAgICAgc3JjOiB1cmwoZm9udHMvT01ORVMtQk9MRC5PVEYpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJvbW5lcy1yZWd1bGFyXCI7XHJcbiAgICAgICAgICAgIHNyYzogdXJsKGZvbnRzL09tbmVzLVJlZ3VsYXIub3RmKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1oZWF2eVwiO1xyXG4gICAgICAgICAgICBzcmM6IHVybChmb250cy9Nb250LUhlYXZ5Lm90Zik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnQtdGhpblwiO1xyXG4gICAgICAgICAgICBzcmM6IHVybChmb250cy9Nb250LVRoaW4ub3RmKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1yZWd1bGFyXCI7XHJcbiAgICAgICAgICAgIHNyYzogdXJsKGZvbnRzL01vbnQtUmVndWxhci5vdGYpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJtb250LXNlbWlib2xkXCI7XHJcbiAgICAgICAgICAgIHNyYzogdXJsKGZvbnRzL01vbnQtU2VtaUJvbGQub3RmKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1saWdodFwiO1xyXG4gICAgICAgICAgICBzcmM6IHVybChmb250cy9Nb250LUxpZ2h0Lm90Zik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45OHZ3ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnQtaGVhdnlcIjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubXQtdmlld3Mge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMHJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudy04MCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudy05MCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNpbi1tYXJnaW4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucGwtMTAge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDZyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGl0bGUtZnV4aWEge1xyXG4gICAgICAgICAgICBjb2xvcjogI2VjNjA4ZDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi40cmVtO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJtb250LWhlYXZ5XCI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5zdWJ0aXRsZS1kYXJrIHtcclxuICAgICAgICAgICAgY29sb3I6ICM1NzU3NTY7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnQtcmVndWxhclwiO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJ0bi15ZWxsb3cge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmViZjQxO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJvbW5lcy1ib2xkXCI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgcGFkZGluZzogMS41cmVtIDByZW07XHJcbiAgICAgICAgICAgIG1hcmdpbjogMnJlbSBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogMTNyZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuM3JlbTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYmctZnV4aWEge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWM2MDhkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJnLXZlcmRlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2M5ZGJjMyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJnLWF6dWwge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNGI2NGE0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYmcteWVsbG93IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlYmY0MSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5iZy1ncmF5IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU3NTY1MCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICAgLyogQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgICAgIC5ib3gtd2ViIHtcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDkwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xyXG4gICAgICAgICAgICAuYm94LXdlYiB7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5OTJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgLmJveC13ZWIge1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgICAgICAgLmJveC13ZWIge1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTUwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gKi9cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ib3gteWVzbW9tIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxODAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGluay1hIHtcclxuICAgICAgICAgICAgY29sb3I6ICM1NzU3NTYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1yZWd1bGFyXCI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5saW5rLWEgYiB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnQtaGVhdnlcIjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudmlldy1kZXNrdG9wIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudmlldy1tb2JpbGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8qIEVmZWNjdHMgaG92ZXIgZm9jdXMgICovXHJcbiAgICAgICAgICAuYnRuLWVmZWN0IHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJ0bi1lZmVjdCxcclxuICAgICAgICAgIC5idG4tZWZlY3Q6OmFmdGVyIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJ0bi1lZmVjdDo6YmVmb3JlLFxyXG4gICAgICAgICAgLmJ0bi1lZmVjdDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYnRuLWVmZWN0OmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICNlYzYwOGQ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLyogYm9yZGVyOiAxcHggc29saWQgI2VjNjA4ZDsgKi9cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYnRuLWVmZWN0OjphZnRlciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYnRuLWVmZWN0OmhvdmVyOmFmdGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLyogaG92ZXItZnV4aWEgKi9cclxuICAgICAgICAgIC5ob3Zlci1mdXhpYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaG92ZXItZnV4aWE6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE0LCAyMTEsIDIxMSwgMC4xKTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaG92ZXItZnV4aWE6aG92ZXI6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41LCAwLjUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhvdmVyLWZ1eGlhOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA2O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VjNjA4ZDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIsIDEuMik7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaG92ZXItZnV4aWE6aG92ZXI6OmFmdGVyIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvKiBob3Zlci1hbWFyaWxsbyAqL1xyXG4gICAgICAgICAgLmhvdmVyLWFtYXJpbGxvIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuN3M7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ob3Zlci1hbWFyaWxsbzo6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTQsIDIxMSwgMjExLCAwLjEpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ob3Zlci1hbWFyaWxsbzpob3Zlcjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcsIDAuNyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaG92ZXItYW1hcmlsbG86OmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDY7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmViZjQxO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMywgMS4zKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ob3Zlci1hbWFyaWxsbzpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8qIGhvdmVyLXZlcmRlICovXHJcbiAgICAgICAgICAuaG92ZXItdmVyZGUge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC43cztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhvdmVyLXZlcmRlOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNCwgMjExLCAyMTEsIDAuMSk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhvdmVyLXZlcmRlOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNywgMC43KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ob3Zlci12ZXJkZTo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgei1pbmRleDogNjtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOWRiYzM7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zLCAxLjMpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhvdmVyLXZlcmRlOmhvdmVyOjphZnRlciB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLyogaG92ZXItYXp1bCAqL1xyXG4gICAgICAgICAgLmhvdmVyLWF6dWwge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC43cztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhvdmVyLWF6dWw6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE0LCAyMTEsIDIxMSwgMC4xKTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaG92ZXItYXp1bDpob3Zlcjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcsIDAuNyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaG92ZXItYXp1bDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgei1pbmRleDogNjtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0YjY0YTQ7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zLCAxLjMpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhvdmVyLWF6dWw6aG92ZXI6OmFmdGVyIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaG92ZXItZWZlY3QtbGV0dGVyIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5ob3Zlci1lZmVjdC1sZXR0ZXI6YmVmb3JlLFxyXG4gICAgICAgICAgLmhvdmVyLWVmZWN0LWxldHRlcjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaG92ZXItZWZlY3QtbGV0dGVyOmFmdGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTc1NzU2O1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBib3R0b206IC01cHg7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmhvdmVyLWVmZWN0LWxldHRlcjpob3ZlcjphZnRlciB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY5cHgpIHtcclxuICAgICAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA0LjZ2dyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC52aWV3LWRlc2t0b3Age1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnZpZXctbW9iaWxlIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm10LXZpZXdzIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNS41cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGl0bGUtZnV4aWEge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc3VidGl0bGUtZGFyayB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYnRuLXllbGxvdyB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEuMnJlbSAwcmVtO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMHJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8qICAqKioqKioqKioqKioqKioqKiogQU5JTUFDSU9ORVMgKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG4gICAgICAgICAgLmhlYXJ0YmVhdCB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBoZWFydGJlYXQgMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZSBib3RoO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGhlYXJ0YmVhdCAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlIGJvdGg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGhlYXJ0YmVhdCB7XHJcbiAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgMTAlIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45MSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkxKTtcclxuICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAxNyUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgMzMlIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44Nyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjg3KTtcclxuICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA0NSUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBrZXlmcmFtZXMgaGVhcnRiZWF0IHtcclxuICAgICAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAxMCUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjkxKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTEpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDE3JSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAzMyUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjg3KTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuODcpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDQ1JSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5mbGlja2VyLTEge1xyXG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogZmxpY2tlci0xIDJzIGxpbmVhciBpbmZpbml0ZSBib3RoO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGZsaWNrZXItMSAycyBsaW5lYXIgaW5maW5pdGUgYm90aDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuZmFkZS1pbiB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlLWluIDEuMnMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSlcclxuICAgICAgICAgICAgICBib3RoO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGZhZGUtaW4gMS4ycyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUtaW4ge1xyXG4gICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGUtaW4ge1xyXG4gICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmFuaW1hdGVkIHtcclxuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHBMYXlvdXQ7XHJcbiIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L0xpbmtcIlxyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7XHJcbiAgZmFGYWNlYm9va0YsXHJcbiAgZmFUd2l0dGVyLFxyXG4gIGZhSW5zdGFncmFtLFxyXG59IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCI7XHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFkZGluZy1sZWZ0IHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInRpdGxlLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8Yj5DT05URU5JRE88L2I+XHJcbiAgICAgICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ub3NvdHJvc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YT5CbG9nPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ub3NvdHJvc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YT5UaWVuZGE8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL25vc290cm9zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlJlZ2Fsb3M8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL25vc290cm9zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlNvYnJlIG5vc290cm9zPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ub3NvdHJvc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YT5Uw6lybWlub3MgeSBjb25kaWNpb25lczwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbm9zb3Ryb3NcIj5cclxuICAgICAgICAgICAgICAgICAgPGE+UG9sw610aWNhIGRlIHByaXZhY2lkYWQ8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL25vc290cm9zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhPkxpYnJvIGRlIHJlY2xhbWFjaW9uZXM8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFkZGluZy1sZWZ0IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGl0bGUtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxiPkNPTlTDgUNUQU5PUzwvYj5cclxuICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICA8cD5taWJlYmVAZ21haWwuY29tPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+MzMzMzMzMzMzMzwvcD5cclxuICAgICAgICAgICAgICAgIDxwPjEyMyBMb3MgUm9ibGVzIE1pcmFmbG9yZXM8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFkZGluZy1sZWZ0IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGl0bGUtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxiPlPDjUdVRU5PUzwvYj5cclxuICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICAgICAgICAgIGljb249e2ZhRmFjZWJvb2tGfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLXJlZGVzXCJcclxuICAgICAgICAgICAgICAgID48L0ZvbnRBd2Vzb21lSWNvbj5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgICAgICAgICAgaWNvbj17ZmFUd2l0dGVyfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLXJlZGVzXCJcclxuICAgICAgICAgICAgICAgID48L0ZvbnRBd2Vzb21lSWNvbj5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgICAgICAgICAgaWNvbj17ZmFJbnN0YWdyYW19XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24tcmVkZXNcIlxyXG4gICAgICAgICAgICAgICAgPjwvRm9udEF3ZXNvbWVJY29uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1NTZlYTE7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy90cmFtYS1mb290ZXIuc3ZnXCIpO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogNXJlbSAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJtb250LXJlZ3VsYXJcIjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuZm9vdGVyIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5mb290ZXIgYTpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRpbHRlLWZvb3RlciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaWNvbi1yZWRlcyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuN3JlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuN3JlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wYWRkaW5nLWxlZnQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDZyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRpdGxlLWZvb3RlciB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnQtc2VtaWJvbGRcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxODAwcHgpIHtcclxuICAgICAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMi41cmVtIDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZvb3RlciAucGFkZGluZy1sZWZ0IHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDByZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRpdGxlLWZvb3RlciB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb290ZXIgLnBhZGRpbmctbGVmdCBwIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAuZm9vdGVyIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvdHJhbWEtZm9vdGVyLXJlc3BvbnNpdmUuc3ZnXCIpO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAzcmVtIDA7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5mb290ZXIgYSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZm9vdGVyIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRpdGxlLWZvb3RlciB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pY29uLXJlZGVzIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuN3JlbTtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC43cmVtO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9vdGVyIC5wYWRkaW5nLWxlZnQge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHJlbTtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9vdGVyIC5wYWRkaW5nLWxlZnQgcCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImltcG9ydCBOYXZiYXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9OYXZiYXJcIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL05hdlwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIjtcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybUNvbnRyb2xcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9MaW5rXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgIDxOYXZiYXIgZXhwYW5kPVwibGdcIiBjbGFzc05hbWU9XCIganVzdGlmeS1jb250ZW50LWJldHdlZW4gcC01XCI+XHJcbiAgICAgICAgPE5hdmJhci5Ub2dnbGUgYXJpYS1jb250cm9scz1cImJhc2ljLW5hdmJhci1uYXZcIj5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9XCIvaW1hZ2UvaGVhZGVyL2J1cmdlci5zdmdcIlxyXG4gICAgICAgICAgICBhbHQ9XCJidXJnZXIgeWVzbW9tXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnVyZ2VyLXllc21vbVwiXHJcbiAgICAgICAgICAgIHdpZHRoPXs1MH1cclxuICAgICAgICAgICAgaGVpZ2h0PXs1MH1cclxuICAgICAgICAgICAgLy8gbGF5b3V0PVwiaW50cmluc2ljXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9OYXZiYXIuVG9nZ2xlPlxyXG5cclxuICAgICAgICA8TmF2YmFyLkJyYW5kIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiaG92ZXItZWZlY3RcIj5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9XCIvaW1hZ2UvaGVhZGVyL2xvZ28teWVzbW9tLnN2Z1wiXHJcbiAgICAgICAgICAgIGFsdD1cImxvZ28geWVzbW9tXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9nby15ZXNtb21cIlxyXG4gICAgICAgICAgICB3aWR0aD17NzB9XHJcbiAgICAgICAgICAgIGhlaWdodD17NzB9XHJcbiAgICAgICAgICAgIC8vIGxheW91dD1cInJlc3BvbnNpdmVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L05hdmJhci5CcmFuZD5cclxuICAgICAgICB7LyogPE5hdi5MaW5rIGhyZWY9XCIjbGlua1wiIGNsYXNzTmFtZT1cIml0ZW0tbmF2YmFyXCI+XHJcbiAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaXRlbS1tZW51XCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2Nlc3RhfSBhbHQ9XCJsb2dvIHRpZW5kYSB5ZXNtb21cIiAvPlxyXG4gICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgIDwvTmF2Lkxpbms+ICovfVxyXG48TmF2YmFyLkNvbGxhcHNlIGlkPVwiYmFzaWMtbmF2YmFyLW5hdlwiID5cclxuICAgICAgICAgIHsvKiA8Rm9ybSBpbmxpbmUgY2xhc3NOYW1lPVwibWwtZm9ybS1zZWFyY2hcIj5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsdXBhLWltZ1wiPlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlL2hlYWRlci9sdXBhLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJsdXBhIHllc21vbVwiXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHdpZHRoPXsyMH1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17MjB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIsK/UXVlIGVzIGxvIHF1ZSBidXNjYXM/XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci1zbS0yIGlucHV0LXNlYXJjaFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0+ICovfVxyXG4gICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJuYXYtaXRlbXMtY29sbGFwc2UgXCI+XHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9ibG9nXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtLW5hdmJhciBob3Zlci1lZmVjdFwiXHJcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiaXMtYWN0aXZlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJpdGVtLW1lbnUgXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9oZWFkZXIvYmxvZy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ28gYmxvZyB5ZXNtb20gXCJcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIGNsYXNzTmFtZT1cImx1cGEtaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17NzB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs3MH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIlwiPkJsb2c8L2g2PlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIGhyZWY9XCIvcGFnaW5hLWVuLWNvbnN0cnVjY2lvblwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbS1uYXZiYXIgaG92ZXItZWZlY3RcIlxyXG4gICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT1cImlzLWFjdGl2ZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaXRlbS1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9oZWFkZXIvdGllbmRhLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9nbyB0aWVuZGEgeWVzbW9tXCJcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIGNsYXNzTmFtZT1cImx1cGEtaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17NzB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs3MH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgPGg2PlRpZW5kYTwvaDY+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9wYWdpbmEtZW4tY29uc3RydWNjaW9uXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtLW5hdmJhciBob3Zlci1lZmVjdFwiXHJcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiaXMtYWN0aXZlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJpdGVtLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlL2hlYWRlci9yZWdhbG8uc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvIHJlZ2FsbyB5ZXNtb21cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgY2xhc3NOYW1lPVwibHVwYS1pbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs3MH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezcwfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICA8aDY+UmVnYWxvczwvaDY+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIHsvKiA8TmF2LkxpbmsgaHJlZj1cIiNsaW5rXCIgY2xhc3NOYW1lPVwiaXRlbS1uYXZiYXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPXtyZWdpc3RyYXRlfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvIHJlZ3LDrXN0cmF0ZSB5ZXNtb21cIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtLW1lbnVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxoNj5SZWfDrXN0cmF0ZTwvaDY+XHJcbiAgICAgICAgICAgICAgPC9OYXYuTGluaz4gKi99XHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9wYWdpbmEtZW4tY29uc3RydWNjaW9uXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtLW5hdmJhciBob3Zlci1lZmVjdFwiXHJcbiAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPVwiaXMtYWN0aXZlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJpdGVtLW1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlL2hlYWRlci9pbmljaWFyLXNlc2lvbi5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ28gaW5pY2lhciBzZXNpw7NuIHllc21vbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBjbGFzc05hbWU9XCJsdXBhLWltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezcwfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17NzB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgIDxoNj5Mb2dpbjwvaDY+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIHsvKiA8TmF2TGluayB0bz1cIi9jZXN0YVwiIGNsYXNzTmFtZT1cIml0ZW0tbmF2YmFyXCIgIGFjdGl2ZUNsYXNzTmFtZT0naXMtYWN0aXZlJz5cclxuICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaXRlbS1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjZXN0YX0gYWx0PVwibG9nbyBjZXN0YSB5ZXNtb21cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICA8aDY+Q2VzdGE8L2g2PlxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz4gKi99XHJcbiAgICAgICAgICA8L05hdj5cclxuICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cclxuXHJcbiAgICAgICBcclxuICAgICAgPC9OYXZiYXI+XHJcblxyXG5cclxuICAgICBcclxuXHJcblxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAubmF2YmFyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbSA1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgey8qIDpnbG9iYWwoI2Jhc2ljLW5hdmJhci1uYXYpe1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4IDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgIH0gKi99XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgLmxvZ28teWVzbW9tIHtcclxuICAgICAgICAgICAgd2lkdGg6IDVyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXRlbS1uYXZiYXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHJlbSAwLjVyZW07XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaXRlbS1tZW51IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEuNnJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxLjZyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDAuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5pdGVtLW1lbnUgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaW5wdXQtc2VhcmNoIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubmF2LWl0ZW1zLWNvbGxhcHNlIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm1sLWZvcm0tc2VhcmNoIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmx1cGEtaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEuOHJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAa2V5ZnJhbWVzIGFuaW1hdGVIZWFydCB7XHJcbiAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDQwJSB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaXRlbS1uYXZiYXIgaDYge1xyXG4gICAgICAgICAgICBjb2xvcjogIzYxNjE2MDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLml0ZW0tbmF2YmFyIGg2OmhvdmVyIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXRlbS1uYXZiYXI6bGluayxcclxuICAgICAgICAgIC5pdGVtLW5hdmJhcjp2aXNpdGVkLFxyXG4gICAgICAgICAgLml0ZW0tbmF2YmFyOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pcy1hY3RpdmUgaDYge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5ob3Zlci1lZmVjdCB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogYW5pbWF0ZUhlYXJ0IDAuM3MgbGluZWFyIGZvcndhcmRzICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ob3Zlci1lZmVjdDpob3ZlcixcclxuICAgICAgICAgIC5ob3Zlci1lZmVjdDpmb2N1cyB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgey8qIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICA6Z2xvYmFsKCNiYXNpYy1uYXZiYXItbmF2KXtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiAgZmxleC1zdGFydDtcclxuICAgICAgICAgIH0gKi99XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTgwMHB4KSB7XHJcbiAgICAgICAgICAgIC5sb2dvLXllc21vbSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDMuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaXRlbS1tZW51IHtcclxuICAgICAgICAgICAgICB3aWR0aDogMS4zcmVtO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMS4zcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pdGVtLW5hdmJhciBoNiB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmx1cGEtaW1nIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMS4zcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAuM3JlbSAwLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmF2YmFyIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgICAgICAgIC5sb2dvLXllc21vbSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDNyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5idXJnZXIteWVzbW9tIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmF2YmFyIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubmF2LWl0ZW1zLWNvbGxhcHNlIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVyZW07XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5uYXYtaXRlbXMtY29sbGFwc2UgaW1nIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubmF2LWxpbmsge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDByZW0gMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZm9ybS1pbmxpbmUge1xyXG4gICAgICAgICAgICAgIGZsZXgtZmxvdzogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1sLWZvcm0tc2VhcmNoIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLml0ZW0tbmF2YmFyIHtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sdXBhLWltZyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLml0ZW0tbmF2YmFyIGg2IHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYS5pdGVtLW5hdmJhci5uYXYtbGluayB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgIzU3NTc1NjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmF2YmFyIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB0b0Jhc2U2NCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0J1xuaW1wb3J0IHtcbiAgSW1hZ2VDb25maWcsXG4gIGltYWdlQ29uZmlnRGVmYXVsdCxcbiAgTG9hZGVyVmFsdWUsXG4gIFZBTElEX0xPQURFUlMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcnXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICA7KGdsb2JhbCBhcyBhbnkpLl9fTkVYVF9JTUFHRV9JTVBPUlRFRCA9IHRydWVcbn1cblxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbJ2xhenknLCAnZWFnZXInLCB1bmRlZmluZWRdIGFzIGNvbnN0XG50eXBlIExvYWRpbmdWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MT0FESU5HX1ZBTFVFU1tudW1iZXJdXG5cbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwPExvYWRlclZhbHVlLCAocHJvcHM6IExvYWRlclByb3BzKSA9PiBzdHJpbmc+KFtcbiAgWydpbWdpeCcsIGltZ2l4TG9hZGVyXSxcbiAgWydjbG91ZGluYXJ5JywgY2xvdWRpbmFyeUxvYWRlcl0sXG4gIFsnYWthbWFpJywgYWthbWFpTG9hZGVyXSxcbiAgWydkZWZhdWx0JywgZGVmYXVsdExvYWRlcl0sXG5dKVxuXG5jb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTID0gW1xuICAnZmlsbCcsXG4gICdmaXhlZCcsXG4gICdpbnRyaW5zaWMnLFxuICAncmVzcG9uc2l2ZScsXG4gIHVuZGVmaW5lZCxcbl0gYXMgY29uc3RcbnR5cGUgTGF5b3V0VmFsdWUgPSB0eXBlb2YgVkFMSURfTEFZT1VUX1ZBTFVFU1tudW1iZXJdXG5cbnR5cGUgSW1nRWxlbWVudFN0eWxlID0gTm9uTnVsbGFibGU8SlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXVsnc3R5bGUnXT5cblxuZXhwb3J0IHR5cGUgSW1hZ2VQcm9wcyA9IE9taXQ8XG4gIEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW1nJ10sXG4gICdzcmMnIHwgJ3NyY1NldCcgfCAncmVmJyB8ICd3aWR0aCcgfCAnaGVpZ2h0JyB8ICdsb2FkaW5nJyB8ICdzdHlsZSdcbj4gJiB7XG4gIHNyYzogc3RyaW5nXG4gIHF1YWxpdHk/OiBudW1iZXIgfCBzdHJpbmdcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvYWRpbmc/OiBMb2FkaW5nVmFsdWVcbiAgdW5vcHRpbWl6ZWQ/OiBib29sZWFuXG4gIG9iamVjdEZpdD86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0Rml0J11cbiAgb2JqZWN0UG9zaXRpb24/OiBJbWdFbGVtZW50U3R5bGVbJ29iamVjdFBvc2l0aW9uJ11cbn0gJiAoXG4gICAgfCB7XG4gICAgICAgIHdpZHRoPzogbmV2ZXJcbiAgICAgICAgaGVpZ2h0PzogbmV2ZXJcbiAgICAgICAgLyoqIEBkZXByZWNhdGVkIFVzZSBgbGF5b3V0PVwiZmlsbFwiYCBpbnN0ZWFkICovXG4gICAgICAgIHVuc2l6ZWQ6IHRydWVcbiAgICAgIH1cbiAgICB8IHsgd2lkdGg/OiBuZXZlcjsgaGVpZ2h0PzogbmV2ZXI7IGxheW91dDogJ2ZpbGwnIH1cbiAgICB8IHtcbiAgICAgICAgd2lkdGg6IG51bWJlciB8IHN0cmluZ1xuICAgICAgICBoZWlnaHQ6IG51bWJlciB8IHN0cmluZ1xuICAgICAgICBsYXlvdXQ/OiBFeGNsdWRlPExheW91dFZhbHVlLCAnZmlsbCc+XG4gICAgICB9XG4gIClcblxuY29uc3Qge1xuICBkZXZpY2VTaXplczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMsXG4gIGxvYWRlcjogY29uZmlnTG9hZGVyLFxuICBwYXRoOiBjb25maWdQYXRoLFxuICBkb21haW5zOiBjb25maWdEb21haW5zLFxufSA9XG4gICgocHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFMgYXMgYW55KSBhcyBJbWFnZUNvbmZpZykgfHwgaW1hZ2VDb25maWdEZWZhdWx0XG4vLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzID0gWy4uLmNvbmZpZ0RldmljZVNpemVzLCAuLi5jb25maWdJbWFnZVNpemVzXVxuY29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG5hbGxTaXplcy5zb3J0KChhLCBiKSA9PiBhIC0gYilcblxuZnVuY3Rpb24gZ2V0V2lkdGhzKFxuICB3aWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkLFxuICBsYXlvdXQ6IExheW91dFZhbHVlXG4pOiB7IHdpZHRoczogbnVtYmVyW107IGtpbmQ6ICd3JyB8ICd4JyB9IHtcbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHxcbiAgICBsYXlvdXQgPT09ICdmaWxsJyB8fFxuICAgIGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnXG4gICkge1xuICAgIHJldHVybiB7IHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cblxuICBjb25zdCB3aWR0aHMgPSBbXG4gICAgLi4ubmV3IFNldChcbiAgICAgIFt3aWR0aCwgd2lkdGggKiAyLCB3aWR0aCAqIDNdLm1hcChcbiAgICAgICAgKHcpID0+IGFsbFNpemVzLmZpbmQoKHApID0+IHAgPj0gdykgfHwgYWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoIC0gMV1cbiAgICAgIClcbiAgICApLFxuICBdXG4gIHJldHVybiB7IHdpZHRocywga2luZDogJ3gnIH1cbn1cblxudHlwZSBDYWxsTG9hZGVyUHJvcHMgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHdpZHRoOiBudW1iZXJcbiAgcXVhbGl0eT86IG51bWJlclxufVxuXG5mdW5jdGlvbiBjYWxsTG9hZGVyKGxvYWRlclByb3BzOiBDYWxsTG9hZGVyUHJvcHMpIHtcbiAgY29uc3QgbG9hZCA9IGxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcilcbiAgaWYgKGxvYWQpIHtcbiAgICByZXR1cm4gbG9hZCh7IHJvb3Q6IGNvbmZpZ1BhdGgsIC4uLmxvYWRlclByb3BzIH0pXG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgIGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtWQUxJRF9MT0FERVJTLmpvaW4oXG4gICAgICAnLCAnXG4gICAgKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gXG4gIClcbn1cblxudHlwZSBHZW5JbWdBdHRyc0RhdGEgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHVub3B0aW1pemVkOiBib29sZWFuXG4gIGxheW91dDogTGF5b3V0VmFsdWVcbiAgd2lkdGg/OiBudW1iZXJcbiAgcXVhbGl0eT86IG51bWJlclxuICBzaXplcz86IHN0cmluZ1xufVxuXG50eXBlIEdlbkltZ0F0dHJzUmVzdWx0ID0gUGljazxcbiAgSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXSxcbiAgJ3NyYycgfCAnc2l6ZXMnIHwgJ3NyY1NldCdcbj5cblxuZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7XG4gIHNyYyxcbiAgdW5vcHRpbWl6ZWQsXG4gIGxheW91dCxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG4gIHNpemVzLFxufTogR2VuSW1nQXR0cnNEYXRhKTogR2VuSW1nQXR0cnNSZXN1bHQge1xuICBpZiAodW5vcHRpbWl6ZWQpIHtcbiAgICByZXR1cm4geyBzcmMgfVxuICB9XG5cbiAgY29uc3QgeyB3aWR0aHMsIGtpbmQgfSA9IGdldFdpZHRocyh3aWR0aCwgbGF5b3V0KVxuICBjb25zdCBsYXN0ID0gd2lkdGhzLmxlbmd0aCAtIDFcblxuICBjb25zdCBzcmNTZXQgPSB3aWR0aHNcbiAgICAubWFwKFxuICAgICAgKHcsIGkpID0+XG4gICAgICAgIGAke2NhbGxMb2FkZXIoeyBzcmMsIHF1YWxpdHksIHdpZHRoOiB3IH0pfSAke1xuICAgICAgICAgIGtpbmQgPT09ICd3JyA/IHcgOiBpICsgMVxuICAgICAgICB9JHtraW5kfWBcbiAgICApXG4gICAgLmpvaW4oJywgJylcblxuICBpZiAoIXNpemVzICYmIGtpbmQgPT09ICd3Jykge1xuICAgIHNpemVzID0gJzEwMHZ3J1xuICB9XG5cbiAgc3JjID0gY2FsbExvYWRlcih7IHNyYywgcXVhbGl0eSwgd2lkdGg6IHdpZHRoc1tsYXN0XSB9KVxuXG4gIHJldHVybiB7IHNyYywgc2l6ZXMsIHNyY1NldCB9XG59XG5cbmZ1bmN0aW9uIGdldEludCh4OiB1bmtub3duKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB4XG4gIH1cbiAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXJzZUludCh4LCAxMClcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlKHtcbiAgc3JjLFxuICBzaXplcyxcbiAgdW5vcHRpbWl6ZWQgPSBmYWxzZSxcbiAgcHJpb3JpdHkgPSBmYWxzZSxcbiAgbG9hZGluZyxcbiAgY2xhc3NOYW1lLFxuICBxdWFsaXR5LFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBvYmplY3RGaXQsXG4gIG9iamVjdFBvc2l0aW9uLFxuICAuLi5hbGxcbn06IEltYWdlUHJvcHMpIHtcbiAgbGV0IHJlc3Q6IFBhcnRpYWw8SW1hZ2VQcm9wcz4gPSBhbGxcbiAgbGV0IGxheW91dDogTm9uTnVsbGFibGU8TGF5b3V0VmFsdWU+ID0gc2l6ZXMgPyAncmVzcG9uc2l2ZScgOiAnaW50cmluc2ljJ1xuICBsZXQgdW5zaXplZCA9IGZhbHNlXG4gIGlmICgndW5zaXplZCcgaW4gcmVzdCkge1xuICAgIHVuc2l6ZWQgPSBCb29sZWFuKHJlc3QudW5zaXplZClcbiAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgZGVsZXRlIHJlc3RbJ3Vuc2l6ZWQnXVxuICB9IGVsc2UgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgIGlmIChyZXN0LmxheW91dCkgbGF5b3V0ID0gcmVzdC5sYXlvdXRcblxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsnbGF5b3V0J11cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCFzcmMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHdpZHRoLCBoZWlnaHQsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAodW5zaXplZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgZGVwcmVjYXRlZCBcInVuc2l6ZWRcIiBwcm9wZXJ0eSwgd2hpY2ggd2FzIHJlbW92ZWQgaW4gZmF2b3Igb2YgdGhlIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5YFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpc0xhenkgPVxuICAgICFwcmlvcml0eSAmJiAobG9hZGluZyA9PT0gJ2xhenknIHx8IHR5cGVvZiBsb2FkaW5nID09PSAndW5kZWZpbmVkJylcbiAgaWYgKHNyYyAmJiBzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgdW5vcHRpbWl6ZWQgPSB0cnVlXG4gICAgaXNMYXp5ID0gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gdXNlSW50ZXJzZWN0aW9uPEhUTUxJbWFnZUVsZW1lbnQ+KHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICAgIGRpc2FibGVkOiAhaXNMYXp5LFxuICB9KVxuICBjb25zdCBpc1Zpc2libGUgPSAhaXNMYXp5IHx8IGlzSW50ZXJzZWN0ZWRcblxuICBjb25zdCB3aWR0aEludCA9IGdldEludCh3aWR0aClcbiAgY29uc3QgaGVpZ2h0SW50ID0gZ2V0SW50KGhlaWdodClcbiAgY29uc3QgcXVhbGl0eUludCA9IGdldEludChxdWFsaXR5KVxuXG4gIGxldCB3cmFwcGVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3ZnOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgbGV0IGltZ1N0eWxlOiBJbWdFbGVtZW50U3R5bGUgfCB1bmRlZmluZWQgPSB7XG4gICAgdmlzaWJpbGl0eTogaXNWaXNpYmxlID8gJ3Zpc2libGUnIDogJ2hpZGRlbicsXG5cbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBib3R0b206IDAsXG4gICAgcmlnaHQ6IDAsXG5cbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgIG1heEhlaWdodDogJzEwMCUnLFxuXG4gICAgb2JqZWN0Rml0LFxuICAgIG9iamVjdFBvc2l0aW9uLFxuICB9XG4gIGlmIChcbiAgICB0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBsYXlvdXQgIT09ICdmaWxsJ1xuICApIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG4gICAgY29uc3QgcXVvdGllbnQgPSBoZWlnaHRJbnQgLyB3aWR0aEludFxuICAgIGNvbnN0IHBhZGRpbmdUb3AgPSBpc05hTihxdW90aWVudCkgPyAnMTAwJScgOiBgJHtxdW90aWVudCAqIDEwMH0lYFxuICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdHlsZSA9IHsgZGlzcGxheTogJ2Jsb2NrJywgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsIHBhZGRpbmdUb3AgfVxuICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnaW50cmluc2ljJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH1cbiAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdmcgPSBgPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YFxuICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZml4ZWQnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0SW50LFxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2Ygd2lkdGhJbnQgPT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGhlaWdodEludCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBsYXlvdXQgPT09ICdmaWxsJ1xuICApIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICByaWdodDogMCxcblxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBtYXJnaW46IDAsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpbWdBdHRyaWJ1dGVzOiBHZW5JbWdBdHRyc1Jlc3VsdCA9IHtcbiAgICBzcmM6XG4gICAgICAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxcbiAgfVxuXG4gIGlmIChpc1Zpc2libGUpIHtcbiAgICBpbWdBdHRyaWJ1dGVzID0gZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICBzcmMsXG4gICAgICB1bm9wdGltaXplZCxcbiAgICAgIGxheW91dCxcbiAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICBzaXplcyxcbiAgICB9KVxuICB9XG5cbiAgaWYgKHVuc2l6ZWQpIHtcbiAgICB3cmFwcGVyU3R5bGUgPSB1bmRlZmluZWRcbiAgICBzaXplclN0eWxlID0gdW5kZWZpbmVkXG4gICAgaW1nU3R5bGUgPSB1bmRlZmluZWRcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3dyYXBwZXJTdHlsZX0+XG4gICAgICB7c2l6ZXJTdHlsZSA/IChcbiAgICAgICAgPGRpdiBzdHlsZT17c2l6ZXJTdHlsZX0+XG4gICAgICAgICAge3NpemVyU3ZnID8gKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogJzEwMCUnLCBkaXNwbGF5OiAnYmxvY2snIH19XG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPXt0cnVlfVxuICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgICAgc3JjPXtgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwke3RvQmFzZTY0KHNpemVyU3ZnKX1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIDxpbWdcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIHsuLi5pbWdBdHRyaWJ1dGVzfVxuICAgICAgICBkZWNvZGluZz1cImFzeW5jXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHJlZj17c2V0UmVmfVxuICAgICAgICBzdHlsZT17aW1nU3R5bGV9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vQlVJTFQgSU4gTE9BREVSU1xuXG50eXBlIExvYWRlclByb3BzID0gQ2FsbExvYWRlclByb3BzICYgeyByb290OiBzdHJpbmcgfVxuXG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHNyY1swXSA9PT0gJy8nID8gc3JjLnNsaWNlKDEpIDogc3JjXG59XG5cbmZ1bmN0aW9uIGltZ2l4TG9hZGVyKHsgcm9vdCwgc3JjLCB3aWR0aCwgcXVhbGl0eSB9OiBMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/Zm9ybWF0PWF1dG8mZml0PW1heCZ3PTMwMFxuICBjb25zdCBwYXJhbXMgPSBbJ2F1dG89Zm9ybWF0JywgJ2ZpdD1tYXgnLCAndz0nICsgd2lkdGhdXG4gIGxldCBwYXJhbXNTdHJpbmcgPSAnJ1xuICBpZiAocXVhbGl0eSkge1xuICAgIHBhcmFtcy5wdXNoKCdxPScgKyBxdWFsaXR5KVxuICB9XG5cbiAgaWYgKHBhcmFtcy5sZW5ndGgpIHtcbiAgICBwYXJhbXNTdHJpbmcgPSAnPycgKyBwYXJhbXMuam9pbignJicpXG4gIH1cbiAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0ke3BhcmFtc1N0cmluZ31gXG59XG5cbmZ1bmN0aW9uIGFrYW1haUxvYWRlcih7IHJvb3QsIHNyYywgd2lkdGggfTogTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YFxufVxuXG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHsgcm9vdCwgc3JjLCB3aWR0aCwgcXVhbGl0eSB9OiBMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG4gIGNvbnN0IHBhcmFtcyA9IFsnZl9hdXRvJywgJ2NfbGltaXQnLCAnd18nICsgd2lkdGgsICdxXycgKyAocXVhbGl0eSB8fCAnYXV0bycpXVxuICBsZXQgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKSArICcvJ1xuICByZXR1cm4gYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWBcbn1cblxuZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7IHJvb3QsIHNyYywgd2lkdGgsIHF1YWxpdHkgfTogTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG1pc3NpbmdWYWx1ZXMgPSBbXVxuXG4gICAgLy8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG4gICAgaWYgKCFzcmMpIG1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJylcbiAgICBpZiAoIXdpZHRoKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJylcblxuICAgIGlmIChtaXNzaW5nVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKFxuICAgICAgICAgICcsICdcbiAgICAgICAgKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH1cbiAgICAgICAgKX1gXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHNyYy5zdGFydHNXaXRoKCcvLycpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKCFzcmMuc3RhcnRzV2l0aCgnLycpICYmIGNvbmZpZ0RvbWFpbnMpIHtcbiAgICAgIGxldCBwYXJzZWRTcmM6IFVSTFxuICAgICAgdHJ5IHtcbiAgICAgICAgcGFyc2VkU3JjID0gbmV3IFVSTChzcmMpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmAgK1xuICAgICAgICAgICAgYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vZXJyLnNoL25leHQuanMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGBcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBgJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gXG59XG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkKSB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0SWRsZUNhbGxiYWNrXG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgcmVxdWVzdElkbGVDYWxsYmFjayBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8XG4gIHN0cmluZyxcbiAge1xuICAgIGlkOiBzdHJpbmdcbiAgICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbiAgfVxuPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9BcHBMYXlvdXRcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYVN0YXIgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuXHJcbmNvbnN0IGltcG9ydEpvZGl0ID0gKCkgPT4gaW1wb3J0KFwiam9kaXQtcmVhY3RcIik7XHJcbmNvbnN0IEpvZGl0RWRpdG9yID0gZHluYW1pYyhpbXBvcnRKb2RpdCwge1xyXG4gIHNzcjogZmFsc2UsXHJcbn0pO1xyXG5cclxuY29uc3QgQ2FyZEJsb2dFc3BlY2lmaWMgPSAoeyBjdXJyZW50RGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgW2NvbmZpZywgc2V0Q29uZmlnXSA9IHVzZVN0YXRlKHtcclxuICAgIHJlYWRvbmx5OiB0cnVlLFxyXG4gICAgdG9vbGJhcjogZmFsc2UsXHJcbiAgfSk7XHJcbiAgY29uc3QgW2NvbnRlbmlkbywgc2V0Q29udGVuaWRvXSA9IHVzZVN0YXRlKFxyXG4gICAgJzxwPjxzcGFuIHN0eWxlPVwiZm9udC1mYW1pbHk6IFRhaG9tYSwgR2VuZXZhLCBzYW5zLXNlcmlmO1wiPlR1IEJhYnkgU2hvd2VyIGVzIHVubyBkZSBsb3MgbW9tZW50b3MgbcOhcyBlc3BlcmFkb3MgcGFyYSB0aSB5IGxvcyBtaWVtYnJvcyBkZSB0dSBmYW1pbGlhIHF1ZSBoYW4gZXN0YWRvIGFsIHBlbmRpZW50ZSBkZWwgbmFjaW1pZW50byBkZSB0dSBwcsOzeGltbyBiZWLDqS4gQXF1w60gdGUgZGVqYW1vcyB1bm9zIGNvbnNlam9zIHBhcmEgY2VsZWJyYXIgZGUgdW5hIG1lam9yIG1hbmVyYSB0dSBiYWJ5IHNob3dlciB2aXJ0dWFsLjwvc3Bhbj48L3A+PHVsPjxsaT48c3BhbiBzdHlsZT1cImZvbnQtZmFtaWx5OiBUYWhvbWEsIEdlbmV2YSwgc2Fucy1zZXJpZjtcIj48c3Ryb25nPjxzcGFuIHN0eWxlPVwiZm9udC1mYW1pbHk6IFRhaG9tYSwgR2VuZXZhLCBzYW5zLXNlcmlmO1wiPjxzcGFuIHN0eWxlPVwiY29sb3I6IHJnYig3NSwgMTAwLCAxNjQpOyBmb250LWZhbWlseTogVGFob21hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XCI+Um9sIGRlIGFuZml0cmlvbmE8L3NwYW4+PC9zcGFuPjwvc3Ryb25nPjwvc3Bhbj48L2xpPjwvdWw+PHA+PHNwYW4gc3R5bGU9XCJjb2xvcjogcmdiKDAsIDAsIDApOyBmb250LWZhbWlseTogVGFob21hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XCI+U2kgZXMgcXVlIHTDuiBlcmVzIGxhIGVtYmFyYXphZGEgcXVlIHF1aWVyZSBpbnZpdGFyIGEgc3VzIGFtaWdvcyBhIHR1IGJhYnkgc2hvd2VyIHkgbm8gcXVpZXJlcyBzYWJlciBuYWRhIGRlIGxhIG9yZ2FuaXphY2nDs24sIGRlYmVzIGVsZWdpciB1bmEgYW1pZ2EgbyBoZXJtYW5hIHkgbm9tYnJhcmxhIOKAnGFuZml0cmlvbmHigJ0gZGVsIGV2ZW50by4gRWxsYSBzZXLDoSBsYSBlbmNhcmdhZGEgZGUgbGEgcHJvZHVjY2nDs24geSBhc8OtIHTDuiBzZXLDoXMgcmVhbG1lbnRlIGxhIGVzdHJlbGxhIGRlbCBldmVudG8uIDwvc3Bhbj48L3A+PHA+PHNwYW4gc3R5bGU9XCJjb2xvcjogcmdiKDAsIDAsIDApOyBmb250LWZhbWlseTogVGFob21hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XCI+U2kgZXMgcXVlIHTDuiBlcmVzIGxhIG9yZ2FuaXphZG9yYSBkZWwgZXZlbnRvLCBkZWJlcyB0b21hciBlbCByb2wgZGUgYW5maXRyaW9uYSB5IHNlciByZXNwb25zYWJsZSBkZSBpbnZpdGFyIGEgbGFzIHBlcnNvbmFzIHkgZGUgcGxhbmVhciBsYXMgYWN0aXZpZGFkZXMgeSBqdWVnb3MuIFB1ZWRlcyBkaXNlw7FhciBpbnZpdGFjaW9uZXMgeSBlbnZpYXJsYXMgcG9yIGNvcnJlbyBvIGEgdHJhdsOpcyBkZSBSZWRlcyBTb2NpYWxlcy48L3NwYW4+PC9wPjx1bD48bGk+PHNwYW4gc3R5bGU9XCJmb250LWZhbWlseTogVGFob21hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XCI+PHN0cm9uZz48c3BhbiBzdHlsZT1cImNvbG9yOiByZ2IoNzUsIDEwMCwgMTY0KTsgZm9udC1mYW1pbHk6IFRhaG9tYSwgR2VuZXZhLCBzYW5zLXNlcmlmO1wiPkVsZWdpciB1biBzaXRpbyBkZSB2aWRlbyBjaGF0PC9zcGFuPjwvc3Ryb25nPjwvc3Bhbj48L2xpPjwvdWw+PHA+PHNwYW4gc3R5bGU9XCJjb2xvcjogcmdiKDAsIDAsIDApOyBmb250LWZhbWlseTogVGFob21hLCBHZW5ldmEsIHNhbnMtc2VyaWY7IGZvbnQtc2l6ZTogMXJlbTtcIj5ZYSBzZWEgWm9vbSwgSG91c2VQYXJ0eSwgU2t5cGUgbyBIYW5nb3V0cywgZGViZXMgZWxlZ2lyIHVuYSBwbGF0YWZvcm1hIHF1ZSBzb3BvcnRlIGEgbGEgY2FudGlkYWQgZGUgZ2VudGUgcXVlIGVzdMOhIGludml0YWRhIHkgcXVlIHNlYSBhY2Nlc2libGUgcGFyYSB0b2RvcyBlbGxvcy4gUXVpesOhcyBkZWJhcyBoYWNlciB1bmEgcHJ1ZWJhIGRlIGNvbmV4acOzbiBjb24gY2llcnRhcyBwZXJzb25hcyBjb24gYW50aWNpcGFjacOzbi4gPC9zcGFuPjwvcD48cD48c3BhbiBzdHlsZT1cImNvbG9yOiByZ2IoMCwgMCwgMCk7IGZvbnQtZmFtaWx5OiBUYWhvbWEsIEdlbmV2YSwgc2Fucy1zZXJpZjsgZm9udC1zaXplOiAxcmVtO1wiPk90cmEgb3BjacOzbiBlcyB0cmFuc21pdGlyIGVsIGJhYnkgc2hvd2VyIGVuIHZpdm86IG9yZ2FuaXphIHVuIGxpdmVzdHJlYW0gZSBpbnZpdGEgYSB0dXMgZmFtaWxpYXJlcyB5IGFtaWdvcyBhIGFzaXN0aXIgeSBjb21lbnRhci4gUHVlZGUgc2VyIGEgdHJhdsOpcyBkZSBJbnN0YWdyYW0geSBhc8OtIHRvZG9zIHR1cyBzZWd1aWRvcmVzIHBvZHLDoW4gdmVydGUgYWJyaWVuZG8gcmVnYWxvcyBvIHJlYWxpemFuZG8gYWN0aXZpZGFkZXMgZW50cmV0ZW5pZGFzLjwvc3Bhbj48L3A+PHVsPjxsaT48c3BhbiBzdHlsZT1cImNvbG9yOiByZ2IoMCwgMCwgMCk7IGZvbnQtZmFtaWx5OiBUYWhvbWEsIEdlbmV2YSwgc2Fucy1zZXJpZjsgZm9udC1zaXplOiAxcmVtO1wiPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpOyBjb2xvcjogcmdiKDc0LCAxMzQsIDIzMik7XCI+PHN0cm9uZyBzdHlsZT1cIlwiPjxzcGFuIHN0eWxlPVwiY29sb3I6IHJnYig3NSwgMTAwLCAxNjQpOyBmb250LWZhbWlseTogVGFob21hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XCI+UGxhbmlmaWNhIGFjdGl2aWRhZGVzPC9zcGFuPjwvc3Ryb25nPjwvc3Bhbj48L3NwYW4+PC9saT48L3VsPjxwPjxzcGFuIHN0eWxlPVwiY29sb3I6IHJnYigwLCAwLCAwKTsgZm9udC1mYW1pbHk6IFRhaG9tYSwgR2VuZXZhLCBzYW5zLXNlcmlmO1wiPlF1aXrDoXMgbGEgcGFydGUgbcOhcyBpbXBvcnRhbnRlIGRlbCBiYWJ5IHNob3dlcjogbG9zIGludml0YWRvcyBwYXJ0aWNpcGFyw6FuIGVuIGxvcyBqdWVnb3MgcXVlIG9yZ2FuaWNlcyBjb24gbGEgZW1iYXJhemFkYSBlbiBlbCBjZW50cm8gZGUgdG9kYXMgbGFzIGFjdGl2aWRhZGVzLjwvc3Bhbj48L3A+PHVsPjxsaT48c3BhbiBzdHlsZT1cImNvbG9yOiByZ2IoNzUsIDEwMCwgMTY0KTtcIj48c3Ryb25nPjxzcGFuIHN0eWxlPVwiZm9udC1mYW1pbHk6IFRhaG9tYSwgR2VuZXZhLCBzYW5zLXNlcmlmO1wiPkhvcmEgZGUgbG9zIHJlZ2Fsb3M8L3NwYW4+PC9zdHJvbmc+PC9zcGFuPjwvbGk+PC91bD48cD48c3BhbiBzdHlsZT1cImNvbG9yOiByZ2IoMCwgMCwgMCk7IGZvbnQtZmFtaWx5OiBUYWhvbWEsIEdlbmV2YSwgc2Fucy1zZXJpZjtcIj5MbyBtw6FzIHByb2JhYmxlIGVzIHF1ZSBsYSBmaWVzdGEgdGVybWluZSBjb24gcXVlIGxhIGZ1dHVyYSBtYW3DoSBhYnJhIGxvcyByZWdhbG9zLiBFc3RvIHNvbG8gZXMgcG9zaWJsZSBzaSBsb3MgaW52aXRhZG9zIGVudsOtYW4gc3UgcmVnYWxvIGNvbiBhbnRpY2lwYWNpw7NuLiBVbmEgYnVlbmEgaWRlYSBlcyBxdWUgbGEgZmVzdGVqYWRhIG5vIHNlcGEgcXVpw6luIGVudmnDsyBxdcOpLCB5IGxvcyB2YXlhIGFicmllbmRvIGZyZW50ZSBsYSBjw6FtYXJhIHkgYWRpdmluZSBxdWnDqW4gZXMgbGEgZHVlw7FhIGRlIGNhZGEgcmVnYWxvLiBMYSBvdHJhIG9wY2nDs24gZXMgcXVlIGxvcyBpbnZpdGFkb3MgYWJyYW4gbG9zIHJlZ2Fsb3MgeSBsdWVnbyBzZSBsbyBlbnbDrWVuIHBvciBjb3JyZW8uIDwvc3Bhbj48L3A+PHA+PHNwYW4gc3R5bGU9XCJjb2xvcjogcmdiKDAsIDAsIDApOyBmb250LWZhbWlseTogVGFob21hLCBHZW5ldmEsIHNhbnMtc2VyaWY7XCI+U2kgc2/DsWFiYXMgY29uIHR1IGJhYnkgc2hvd2VyLCDCoWHDum4gcHVlZGVzIHBsYW5lYXIgdHUgYmFieSBzaG93ZXIgdmlydHVhbCEgQWRlbcOhcywgZXMgdW5hIGJ1ZW5hIG9wb3J0dW5pZGFkIHBhcmEgcGFzYXIgbW9tZW50b3MgYWdyYWRhYmxlcyBqdW50byBhIHR1IGZhbWlsaWEgeSBhbWlnb3MuPC9zcGFuPjwvcD48cD48YnI+PC9wPidcclxuICApO1xyXG4gIC8vIGlmKHJvdXRlci5pc0ZhbGxiYWNrKXtcclxuICAvLyAgICAgcmV0dXJuIDxkaXY+Q0FSR0FORE8uLi48L2Rpdj5cclxuICAvLyB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwTGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhZGUtaW4gYW5pbWF0ZWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1iYW5uZXItYmxvZ1wiPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9vbmRhLWJsYW5jYS5zdmdcIlxyXG4gICAgICAgICAgICBhbHQ9XCJvbmRhc1wiXHJcbiAgICAgICAgICAgIHdpZHRoPXsyMH1cclxuICAgICAgICAgICAgaGVpZ2h0PXs1MH1cclxuICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9uZGFzXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC10aXRsZS1ibG9nXCI+RGV0YWxsZXMgZGUgYmxvZzwvaDQ+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPVwiL2ltYWdlL29uZGEtYmxhbmNhLnN2Z1wiXHJcbiAgICAgICAgICAgIGFsdD1cIm9uZGFzXCJcclxuICAgICAgICAgICAgd2lkdGg9ezIwfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezUwfVxyXG4gICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwib25kYXNcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1ibG9nLWVzcGVjaWZpY29cIj5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9XCIvaW1hZ2UvYmxvZy9udWJlMS5wbmdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJudWJlMSBoZWFydGJlYXRcIlxyXG4gICAgICAgICAgICB3aWR0aD17NzB9XHJcbiAgICAgICAgICAgIGhlaWdodD17NzB9XHJcbiAgICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxyXG4gICAgICAgICAgICBhbHQ9XCJudWJlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPVwiL2ltYWdlL2Jsb2cvbnViZTIucG5nXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibnViZTIgaGVhcnRiZWF0XCJcclxuICAgICAgICAgICAgd2lkdGg9ezcwfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezcwfVxyXG4gICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgICAgICAgICAgYWx0PVwibnViZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9ibG9nL251YmUzLnBuZ1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm51YmUzIGhlYXJ0YmVhdFwiXHJcbiAgICAgICAgICAgIHdpZHRoPXs3MH1cclxuICAgICAgICAgICAgaGVpZ2h0PXs3MH1cclxuICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgICAgIGFsdD1cIm51YmVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LWF1dG9yLWJsb2dcIj5cclxuICAgICAgICAgICAgPGZpZ3VyZT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICBjdXJyZW50RGF0YS5pbWFnZW5lc1swXS50eXBlSW1hZ2UgPT09IFwiQVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPyBjdXJyZW50RGF0YS5pbWFnZW5lc1swXS51cmxcclxuICAgICAgICAgICAgICAgICAgICA6IGN1cnJlbnREYXRhLmltYWdlbmVzWzFdLnVybFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtYXV0b3ItdGV4dC1ibG9nXCI+XHJcbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtYXV0b3JcIj57Y3VycmVudERhdGEuYmxvZy5hdXRvcn08L2g1PlxyXG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LWZlY2hhXCI+e2N1cnJlbnREYXRhLmJsb2cuZmVjaGEuc3Vic3RyKDAsMTApfTwvaDU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1hcnRpY3Vsby1ibG9nXCI+XHJcbiAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiYm94LWFydGljdWxvLWltZy1wcmluY2lwYWwtYmxvZ1wiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnREYXRhLmltYWdlbmVzWzBdLnR5cGVJbWFnZSA9PT0gXCJQXCJcclxuICAgICAgICAgICAgICAgICAgICA/IGN1cnJlbnREYXRhLmltYWdlbmVzWzBdLnVybFxyXG4gICAgICAgICAgICAgICAgICAgIDogY3VycmVudERhdGEuaW1hZ2VuZXNbMV0udXJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDBcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1hcnRpY3Vsby10aXRsZS1ibG9nXCI+XHJcbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgICAgaWNvbj17ZmFTdGFyfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3Rhci1ibG9nIGhlYXJ0YmVhdFwiXHJcbiAgICAgICAgICAgICAgPjwvRm9udEF3ZXNvbWVJY29uPlxyXG4gICAgICAgICAgICAgIDxoMj4ge2N1cnJlbnREYXRhLmJsb2cudGl0dWxvfTwvaDI+XHJcbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgICAgaWNvbj17ZmFTdGFyfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3Rhci1ibG9nIGhlYXJ0YmVhdFwiXHJcbiAgICAgICAgICAgICAgPjwvRm9udEF3ZXNvbWVJY29uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEpvZGl0RWRpdG9yXHJcbiAgICAgICAgICAgICAgY29uZmlnPXtjb25maWd9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbnRlbmlkb31cclxuICAgICAgICAgICAgICBuYW1lPVwiY29udGVuaWRvXCJcclxuICAgICAgICAgICAgICAvLyBvbkJsdXI9e2hhbmRsZUJsdXJBcmVhQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuYm94LWJhbm5lci1ibG9nIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNXJlbTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2ltYWdlL2Jsb2cvYmxvZy5wbmcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC50ZXh0LXRpdGxlLWJsb2cge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJDbGlja2VyIFNjcmlwdFwiLCBjdXJzaXZlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcmVtIDFyZW0gMHJlbTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuc3VidGl0bGUtZGFyay1ibG9nIHtcclxuICAgICAgICAgICAgY29sb3I6ICM1NzU3NTY7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnQtcmVndWxhclwiO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDByZW0gMTVyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0xMnJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ib3gtY2FyZC1ncm91cCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiAxNnJlbTtcclxuICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNhcmQtYmxvZyB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDE0cHggMjBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1yZWd1bGFyXCI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEuMjhyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgd2lkdGg6IDE4cmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYm94LWdyZWVuLWJsb2cge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRleHQtYm90dG9tLWJsb2cge1xyXG4gICAgICAgICAgICBjb2xvcjogI2FiYzBhMztcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1yZWd1bGFyXCI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC8qIG1hcmdpbjogM3JlbSAyMHJlbTsgKi9cclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDE2JTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRleHQtYm90dG9tLWJsb2cgYiB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnQtc2VtaWJvbGRcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb250LW1vbnQtcmVndWxhciB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnQtcmVndWxhclwiO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5ib3gtYmxvZy1lc3BlY2lmaWNvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDRyZW0gOXJlbTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1yZWd1bGFyXCI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJveC1hdXRvci1ibG9nIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDdyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYm94LWF1dG9yLXRleHQtYmxvZyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ib3gtYXJ0aWN1bG8tYmxvZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGV4dC1hdXRvciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNTc1NzU2O1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1oZWF2eVwiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRleHQtZmVjaGEge1xyXG4gICAgICAgICAgICBjb2xvcjogIzU1NmVhMTtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYm94LWFydGljdWxvLXRpdGxlLWJsb2cge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcmVtIDJyZW07XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJveC1hcnRpY3Vsby10aXRsZS1ibG9nIGgyIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1zZW1pYm9sZFwiO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNTc1NzU2O1xyXG4gICAgICAgICAgICBtYXJnaW46IDJyZW0gMHJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdGFyLWJsb2cge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZlYmY0MTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5udWJlMSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA3MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDIlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm51YmUyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgcmlnaHQ6IDIlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm51YmUzIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDE0MCU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAzJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ib3gtYXJ0aWN1bG8taW1nLXByaW5jaXBhbC1ibG9nIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgOmdsb2JhbCguam9kaXQtY29udGFpbmVyOm5vdCguam9kaXRfaW5saW5lKSkge1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5ib3gtYmxvZy1nZW5lcmFsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzcmVtIDlyZW07XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnQtcmVndWxhclwiO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jYXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1zZW1pYm9sZFwiO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jYXJkLXRleHQge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJtb250LWxpZ2h0XCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuam9kaXQsXHJcbiAgICAgICAgICAuam9kaXQgKixcclxuICAgICAgICAgIC5qb2RpdC1jb250YWluZXIsXHJcbiAgICAgICAgICAuam9kaXQtY29udGFpbmVyICogc3BhbiB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnQtcmVndWxhclwiICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmZvbnQtc2VtaWJvbGQtbW9udCB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIm1vbnQtc2VtaWJvbGRcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDpnbG9iYWwoLmpvZGl0LXN0YXR1cy1iYXIpIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHsvKiA6Z2xvYmFsKC5qb2RpdC1jb250YWluZXIpIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMHJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfSAqL31cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTgwMHB4KSB7XHJcbiAgICAgICAgICAgIC5ib3gtYmxvZy1nZW5lcmFsIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtIDByZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnN1YnRpdGxlLWRhcmstYmxvZyB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM1NzU3NTY7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibW9udC1zZW1pYm9sZFwiO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBtYXJnaW46IDByZW0gMjByZW07XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTEycmVtO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbnRhaW5lcixcclxuICAgICAgICAgICAgLmNvbnRhaW5lci1sZyxcclxuICAgICAgICAgICAgLmNvbnRhaW5lci1tZCxcclxuICAgICAgICAgICAgLmNvbnRhaW5lci1zbSxcclxuICAgICAgICAgICAgLmNvbnRhaW5lci14bCB7XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNjAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNhcmQtdGV4dCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNhcmQtYmxvZyB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyNnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubnViZTEge1xyXG4gICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDIwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubnViZTIge1xyXG4gICAgICAgICAgICAgIHRvcDogODAlO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAxNSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm51YmUzIHtcclxuICAgICAgICAgICAgICB0b3A6IDE0MCU7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDE1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAuYm94LWJsb2ctZXNwZWNpZmljbyB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMXJlbSAxLjVyZW0gM3JlbTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ib3gtYXV0b3ItYmxvZyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogN3JlbTtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYm94LWF1dG9yLXRleHQtYmxvZyB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ib3gtYXJ0aWN1bG8tYmxvZyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRleHQtYXV0b3Ige1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGV4dC1mZWNoYSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJveC1hcnRpY3Vsby10aXRsZS1ibG9nIGgyIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc3Rhci1ibG9nIHtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZlYmY0MTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubnViZTEge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IDE2MCU7XHJcbiAgICAgICAgICAgICAgbGVmdDogLTUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5udWJlMiB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHRvcDogOTAlO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAxJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubnViZTMge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IDM1MCU7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDElO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ib3gtYmFubmVyLWJsb2cge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTJyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50ZXh0LXRpdGxlLWJsb2cge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgICBtYXJnaW46IDByZW0gMC41cmVtIDByZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm9uZGFzIHtcclxuICAgICAgICAgICAgICB3aWR0aDogM3JlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYm94LWJhbm5lci1ibG9nIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEycmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50ZXh0LXRpdGxlLWJsb2cge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkNsaWNrZXIgU2NyaXB0XCIsIGN1cnNpdmU7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc3VidGl0bGUtZGFyay1ibG9nIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMHJlbTtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcmVtO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJveC1jYXJkLWdyb3VwIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgdG9wOiAzcmVtO1xyXG4gICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY2FyZC1ibG9nIHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTRweCAyMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEuMjhyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB3aWR0aDogMThyZW07XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ib3gtZ3JlZW4tYmxvZy1pbWctZm9uZG8ge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDMwcmVtO1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogMTAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGV4dC1ib3R0b20tYmxvZyB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYm94LWJsb2ctZ2VuZXJhbCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMS41cmVtIDEycmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jYXJkLWRlY2sge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jYXJkLWRlY2sgLmNhcmQtYmxvZyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcbiAgICAgICAgICAgIC5udWJlMSB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICAgICAgICBsZWZ0OiAtMTUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5udWJlMiB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAxJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubnViZTMge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICByaWdodDogMSU7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDVyZW07XHJcbiAgICAgICAgICAgICAgdG9wOiBhdXRvO1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogLTE1MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9BcHBMYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAvLyBDYWxsIGFuIGV4dGVybmFsIEFQSSBlbmRwb2ludCB0byBnZXQgcG9zdHNcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9nZXRCbG9nQWxsL3VzZXI/bGltaXQ9YWxsXCIpO1xyXG4gIGNvbnN0IGJsb2dzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBjb25zb2xlLmxvZyhibG9ncy5sZW5ndGgsIFwib2ppdG9hXCIpO1xyXG4gIC8vIEdldCB0aGUgcGF0aHMgd2Ugd2FudCB0byBwcmUtcmVuZGVyIGJhc2VkIG9uIHBvc3RzXHJcbiAgY29uc3QgcGF0aHMgPSBibG9ncy5tYXAoKGJsb2cpID0+ICh7XHJcbiAgICBwYXJhbXM6IHsgYmxvZzogU3RyaW5nKGJsb2cuYmxvZy5faWQpIH0sXHJcbiAgfSkpO1xyXG5cclxuICAvLyBXZSdsbCBwcmUtcmVuZGVyIG9ubHkgdGhlc2UgcGF0aHMgYXQgYnVpbGQgdGltZS5cclxuICAvLyB7IGZhbGxiYWNrOiBmYWxzZSB9IG1lYW5zIG90aGVyIHJvdXRlcyBzaG91bGQgNDA0LlxyXG4gIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogZmFsc2UgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICAvLyBDYWxsIGFuIGV4dGVybmFsIEFQSSBlbmRwb2ludCB0byBnZXQgcG9zdHMuXHJcbiAgLy8gWW91IGNhbiB1c2UgYW55IGRhdGEgZmV0Y2hpbmcgbGlicmFyeVxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjUwMDAvZ2V0QmxvZy8ke3BhcmFtcy5ibG9nfWApO1xyXG4gIGNvbnN0IGN1cnJlbnREYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgLy8gQnkgcmV0dXJuaW5nIHsgcHJvcHM6IHBvc3RzIH0sIHRoZSBCbG9nIGNvbXBvbmVudFxyXG4gIC8vIHdpbGwgcmVjZWl2ZSBgcG9zdHNgIGFzIGEgcHJvcCBhdCBidWlsZCB0aW1lXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGN1cnJlbnREYXRhOiBjdXJyZW50RGF0YVswXSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZEJsb2dFc3BlY2lmaWM7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqb2RpdC1yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L0xpbmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvRm9ybUNvbnRyb2xcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL05hdlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvTmF2YmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=