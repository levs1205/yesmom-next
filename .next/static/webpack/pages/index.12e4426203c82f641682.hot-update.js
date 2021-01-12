webpackHotUpdate_N_E("pages/index",{

/***/ "./components/HeaderNuevo.js":
/*!***********************************!*\
  !*** ./components/HeaderNuevo.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ActiveLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ActiveLink */ "./components/ActiveLink.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "C:\\Users\\jcqui\\OneDrive\\Escritorio\\henri_barrett\\yes-mom\\yesmom_next\\components\\HeaderNuevo.js",
    _this = undefined,
    _s = $RefreshSig$();








var HeaderNuevo = function HeaderNuevo() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      active = _useState[0],
      setActive = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  var handleClick = function handleClick() {
    console.log("click", active);
    setActive(!active);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      className: "jsx-448242505" + " " + "navbar-yesmom",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: handleClick,
        className: "jsx-448242505" + " " + "burger-yesmom",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
          src: "/image/header/burger.svg",
          alt: "burger yesmom",
          width: 40,
          height: 40 // layout="intrinsic"

        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "jsx-448242505",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
            src: "/image/header/logo-yesmom.svg",
            alt: "logo yesmom",
            width: 65,
            height: 65
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-448242505" + " " + "".concat(active ? "" : "box-items-menu-desktop", " box-items-menu"),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-448242505" + " " + "box-items-menu-responsive",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
            href: "/",
            activeClassName: "active",
            prefetch: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "jsx-448242505" + " " + "item-menu-yesmom",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
                src: "/image/header/blog.svg",
                alt: "logo blog yesmom ",
                width: 22,
                height: 22
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                className: "jsx-448242505" + " " + "text-navbar",
                children: "Blog"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
            href: "/blog",
            activeClassName: "active",
            prefetch: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "jsx-448242505" + " " + "item-menu-yesmom",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
                src: "/image/header/blog.svg",
                alt: "logo blog yesmom ",
                width: 22,
                height: 22
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                className: "jsx-448242505" + " " + "text-navbar",
                children: "Blog"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
            href: "/holitas",
            activeClassName: "active",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "jsx-448242505" + " " + "item-menu-yesmom",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
                src: "/image/header/blog.svg",
                alt: "logo blog yesmom ",
                width: 22,
                height: 22
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                className: "jsx-448242505" + " " + "text-navbar",
                children: "Blog"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
            href: "/hola",
            activeClassName: "active",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "jsx-448242505" + " " + "item-menu-yesmom",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
                src: "/image/header/blog.svg",
                alt: "logo blog yesmom ",
                width: 22,
                height: 22
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                className: "jsx-448242505" + " " + "text-navbar",
                children: "Blog"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "448242505",
      children: ".active.jsx-448242505{color:red;font-size:2rem;font-weight:900;}.navbar-yesmom.jsx-448242505{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:1rem 4rem;background:#fff;position:fixed;z-index:9999;width:100%;}.burger-yesmom.jsx-448242505{margin-right:auto;display:none;}.item-menu-yesmom.jsx-448242505{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0rem 0.5rem;}.box-items-menu-responsive.jsx-448242505{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.box-items-menu.jsx-448242505{margin-left:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.box-items-menu-desktop.jsx-448242505{display:block;}@media (max-width:992px){.burger-yesmom.jsx-448242505{display:block;}.navbar-yesmom.jsx-448242505{padding:0.5rem 1rem;}.box-items-menu-responsive.jsx-448242505{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.box-items-menu.jsx-448242505{width:100%;}.item-menu-yesmom.jsx-448242505{margin:0.5rem 1rem;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.box-items-menu-desktop.jsx-448242505{display:none;}.text-navbar.jsx-448242505{margin:0;margin-left:0.5rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamNxdWlcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxoZW5yaV9iYXJyZXR0XFx5ZXMtbW9tXFx5ZXNtb21fbmV4dFxcY29tcG9uZW50c1xcSGVhZGVyTnVldm8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUZTLEFBR3VCLEFBTUcsQUFVSyxBQUlMLEFBT0EsQUFJSSxBQU9ILEFBS0UsQUFHTSxBQUdFLEFBR1gsQUFHUSxBQUlOLEFBR0osU0FDVSxDQTlETixDQW9EZixFQU9BLENBckJGLEFBS0UsR0FaYSxDQWZBLENBdUNRLENBVHJCLEtBN0NnQixHQThEaEIsR0E5Q0YsVUFmQSxpQ0FJcUIsQUFjRyxBQU9ILElBc0JuQixVQU9BLEdBeEIyQixvREFKN0IsU0FQeUIsZUFkUiw2QkEwQkksNEJBekJELGtCQUNGLFNBYUcsT0FaSixlQUNGLGFBQ0YsR0FzQmIsUUFyQkEsK0NBVXFCLG1CQUNyQiIsImZpbGUiOiJDOlxcVXNlcnNcXGpjcXVpXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcaGVucmlfYmFycmV0dFxceWVzLW1vbVxceWVzbW9tX25leHRcXGNvbXBvbmVudHNcXEhlYWRlck51ZXZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQWN0aXZlTGluayBmcm9tIFwiLi4vY29tcG9uZW50cy9BY3RpdmVMaW5rXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IEhlYWRlck51ZXZvID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrXCIsIGFjdGl2ZSk7XHJcbiAgICBzZXRBY3RpdmUoIWFjdGl2ZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIteWVzbW9tXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXJnZXIteWVzbW9tXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9oZWFkZXIvYnVyZ2VyLnN2Z1wiXHJcbiAgICAgICAgICAgIGFsdD1cImJ1cmdlciB5ZXNtb21cIlxyXG4gICAgICAgICAgICB3aWR0aD17NDB9XHJcbiAgICAgICAgICAgIGhlaWdodD17NDB9XHJcbiAgICAgICAgICAgIC8vIGxheW91dD1cImludHJpbnNpY1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlL2hlYWRlci9sb2dvLXllc21vbS5zdmdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cImxvZ28geWVzbW9tXCJcclxuICAgICAgICAgICAgICB3aWR0aD17NjV9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXs2NX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHthY3RpdmUgPyBcIlwiIDogXCJib3gtaXRlbXMtbWVudS1kZXNrdG9wXCJ9IGJveC1pdGVtcy1tZW51YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1pdGVtcy1tZW51LXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgPEFjdGl2ZUxpbmsgaHJlZj1cIi9cIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIiAgcHJlZmV0Y2g+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbS1tZW51LXllc21vbVwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9oZWFkZXIvYmxvZy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvIGJsb2cgeWVzbW9tIFwiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMn1cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC1uYXZiYXJcIj5CbG9nPC9oNj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvQWN0aXZlTGluaz5cclxuICAgICAgICAgICAgPEFjdGl2ZUxpbmsgaHJlZj1cIi9ibG9nXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCIgIHByZWZldGNoID4gXHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbS1tZW51LXllc21vbVwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9oZWFkZXIvYmxvZy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvIGJsb2cgeWVzbW9tIFwiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMn1cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC1uYXZiYXJcIj5CbG9nPC9oNj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvQWN0aXZlTGluaz5cclxuICAgICAgICAgICAgPEFjdGl2ZUxpbmsgaHJlZj1cIi9ob2xpdGFzXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbS1tZW51LXllc21vbVwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9oZWFkZXIvYmxvZy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvIGJsb2cgeWVzbW9tIFwiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMn1cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC1uYXZiYXJcIj5CbG9nPC9oNj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvQWN0aXZlTGluaz5cclxuICAgICAgICAgICAgPEFjdGl2ZUxpbmsgaHJlZj1cIi9ob2xhXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbS1tZW51LXllc21vbVwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9oZWFkZXIvYmxvZy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvIGJsb2cgeWVzbW9tIFwiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMn1cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC1uYXZiYXJcIj5CbG9nPC9oNj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvQWN0aXZlTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubmF2YmFyLXllc21vbSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbSA0cmVtO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJ1cmdlci15ZXNtb20ge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXRlbS1tZW51LXllc21vbSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDByZW0gMC41cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJveC1pdGVtcy1tZW51LXJlc3BvbnNpdmUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJveC1pdGVtcy1tZW51IHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYm94LWl0ZW1zLW1lbnUtZGVza3RvcCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAuYnVyZ2VyLXllc21vbSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5hdmJhci15ZXNtb20ge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ib3gtaXRlbXMtbWVudS1yZXNwb25zaXZlIHtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ib3gtaXRlbXMtbWVudSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLml0ZW0tbWVudS15ZXNtb20ge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMC41cmVtIDFyZW07XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYm94LWl0ZW1zLW1lbnUtZGVza3RvcCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGV4dC1uYXZiYXIge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJOdWV2bztcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\jcqui\\\\OneDrive\\\\Escritorio\\\\henri_barrett\\\\yes-mom\\\\yesmom_next\\\\components\\\\HeaderNuevo.js */"
    }, void 0, false, void 0, _this)]
  }, void 0, true);
};

_s(HeaderNuevo, "c8LLMscGuM1hB5tKl6q8aVkKW9A=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

_c = HeaderNuevo;
/* harmony default export */ __webpack_exports__["default"] = (HeaderNuevo);

var _c;

$RefreshReg$(_c, "HeaderNuevo");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXJOdWV2by5qcyJdLCJuYW1lcyI6WyJIZWFkZXJOdWV2byIsInVzZVN0YXRlIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlQ2xpY2siLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLGtCQUNJQyxzREFBUSxDQUFDLEtBQUQsQ0FEWjtBQUFBLE1BQ2pCQyxNQURpQjtBQUFBLE1BQ1RDLFNBRFM7O0FBRXhCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkMsV0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQk4sTUFBckI7QUFDQUMsYUFBUyxDQUFDLENBQUNELE1BQUYsQ0FBVDtBQUNELEdBSEQ7O0FBSUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBLHlDQUFlLGVBQWY7QUFBQSw4QkFDRTtBQUErQixlQUFPLEVBQUVJLFdBQXhDO0FBQUEsMkNBQWUsZUFBZjtBQUFBLCtCQUNFLHFFQUFDLGlEQUFEO0FBQ0UsYUFBRyxFQUFDLDBCQUROO0FBRUUsYUFBRyxFQUFDLGVBRk47QUFHRSxlQUFLLEVBQUUsRUFIVDtBQUlFLGdCQUFNLEVBQUUsRUFKVixDQUtFOztBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFVRSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQUEsK0JBQ0U7QUFBQTtBQUFBLGlDQUNFLHFFQUFDLGlEQUFEO0FBQ0UsZUFBRyxFQUFDLCtCQUROO0FBRUUsZUFBRyxFQUFDLGFBRk47QUFHRSxpQkFB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Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQWN0aXZlTGluayBmcm9tIFwiLi4vY29tcG9uZW50cy9BY3RpdmVMaW5rXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IEhlYWRlck51ZXZvID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrXCIsIGFjdGl2ZSk7XHJcbiAgICBzZXRBY3RpdmUoIWFjdGl2ZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIteWVzbW9tXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXJnZXIteWVzbW9tXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9oZWFkZXIvYnVyZ2VyLnN2Z1wiXHJcbiAgICAgICAgICAgIGFsdD1cImJ1cmdlciB5ZXNtb21cIlxyXG4gICAgICAgICAgICB3aWR0aD17NDB9XHJcbiAgICAgICAgICAgIGhlaWdodD17NDB9XHJcbiAgICAgICAgICAgIC8vIGxheW91dD1cImludHJpbnNpY1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlL2hlYWRlci9sb2dvLXllc21vbS5zdmdcIlxyXG4gICAgICAgICAgICAgIGFsdD1cImxvZ28geWVzbW9tXCJcclxuICAgICAgICAgICAgICB3aWR0aD17NjV9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXs2NX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHthY3RpdmUgPyBcIlwiIDogXCJib3gtaXRlbXMtbWVudS1kZXNrdG9wXCJ9IGJveC1pdGVtcy1tZW51YH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1pdGVtcy1tZW51LXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgPEFjdGl2ZUxpbmsgaHJlZj1cIi9cIiBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIiAgcHJlZmV0Y2g+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbS1tZW51LXllc21vbVwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9oZWFkZXIvYmxvZy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvIGJsb2cgeWVzbW9tIFwiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMn1cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC1uYXZiYXJcIj5CbG9nPC9oNj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvQWN0aXZlTGluaz5cclxuICAgICAgICAgICAgPEFjdGl2ZUxpbmsgaHJlZj1cIi9ibG9nXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCIgIHByZWZldGNoID4gXHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbS1tZW51LXllc21vbVwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9oZWFkZXIvYmxvZy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvIGJsb2cgeWVzbW9tIFwiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMn1cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC1uYXZiYXJcIj5CbG9nPC9oNj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvQWN0aXZlTGluaz5cclxuICAgICAgICAgICAgPEFjdGl2ZUxpbmsgaHJlZj1cIi9ob2xpdGFzXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbS1tZW51LXllc21vbVwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9oZWFkZXIvYmxvZy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvIGJsb2cgeWVzbW9tIFwiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMn1cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC1uYXZiYXJcIj5CbG9nPC9oNj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvQWN0aXZlTGluaz5cclxuICAgICAgICAgICAgPEFjdGl2ZUxpbmsgaHJlZj1cIi9ob2xhXCIgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbS1tZW51LXllc21vbVwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9oZWFkZXIvYmxvZy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvIGJsb2cgeWVzbW9tIFwiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMn1cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGV4dC1uYXZiYXJcIj5CbG9nPC9oNj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvQWN0aXZlTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubmF2YmFyLXllc21vbSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbSA0cmVtO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJ1cmdlci15ZXNtb20ge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXRlbS1tZW51LXllc21vbSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDByZW0gMC41cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJveC1pdGVtcy1tZW51LXJlc3BvbnNpdmUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJveC1pdGVtcy1tZW51IHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYm94LWl0ZW1zLW1lbnUtZGVza3RvcCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgICAgICAgICAuYnVyZ2VyLXllc21vbSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5hdmJhci15ZXNtb20ge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ib3gtaXRlbXMtbWVudS1yZXNwb25zaXZlIHtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ib3gtaXRlbXMtbWVudSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLml0ZW0tbWVudS15ZXNtb20ge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMC41cmVtIDFyZW07XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYm94LWl0ZW1zLW1lbnUtZGVza3RvcCB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGV4dC1uYXZiYXIge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJOdWV2bztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==