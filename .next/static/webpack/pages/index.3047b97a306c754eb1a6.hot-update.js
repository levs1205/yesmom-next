webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout/index.js");
/* harmony import */ var _components_CardBlog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/CardBlog */ "./components/CardBlog.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "C:\\Users\\jcqui\\OneDrive\\Escritorio\\henri_barrett\\yes-mom\\yesmom_next\\pages\\index.js",
    _this = undefined;







 // import banner from "../public/image/home/banner.png";
// import bannerM from "../public/image/home/banner-mobile.png";


 // import clienteAxiosBusiness from "../config/axiosBusiness";

 // import fetch from 'isomorphic-fetch'

var Home = function Home(_ref) {
  var currentData = _ref.currentData;
  console.log(currentData, "holis"); // const [currentData, setCurrentData] = useState([]);
  // useEffect(() => {
  //     blogHome();
  //   }, []);
  // const blogHome = async () => {
  //   await axios
  //     .get("http://localhost:5000/getBlogAll/user?limit=2")
  //     .then((res) => {
  //       if (res.data.MensajeRespuesta === "NO EXISTEN DATOS") {
  //        setCurrentData([]);
  //       } else {
  //         setCurrentData(res.data);
  //       }
  //     })
  //     .catch((e) => {
  //       console.log(e, "error");
  //     });
  // };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-2021716576" + " " + "fade-in animated",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        fluid: "true",
        className: "jsx-2021716576" + " " + "box-banner",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-2021716576" + " " + "banner view-desktop",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
            src: "/image/home/banner.png",
            alt: "Picture of the author",
            layout: "responsive",
            width: 500,
            height: 210
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-2021716576" + " " + "banner view-mobile",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
            src: "/image/home/banner-mobile.png",
            layout: "fill",
            alt: "Picture of the author"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "jsx-2021716576" + " " + "box-banner-btns",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-2021716576" + " " + "box-banner-btns-group",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              className: "jsx-2021716576" + " " + "title-fuxia w-80 m-auto",
              children: "Encuentra tu regalo so\xF1ado"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-2021716576" + " " + "ondas d-block m-auto heartbeat",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
                src: "/image/ondas.svg",
                alt: "ondas",
                layout: "fill"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-2021716576" + " " + "box-banner-regalos",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-2021716576" + " " + "btn-regalos bg-fuxia hover-fuxia",
                children: "Crear lista de regalos"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-2021716576" + " " + "btn-regalos hover-amarillo",
                children: "Buscar lista de regalos"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "jsx-2021716576" + " " + "link-a text-center ",
              children: ["\xBFYa registrado?", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "jsx-2021716576" + " " + "hover-efect-letter",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                  className: "jsx-2021716576",
                  children: "Inicia sesi\xF3n"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
        fluid: "true",
        className: "section-sorteo-home",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
          className: "sin-margin",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
            xs: 12,
            md: 6,
            lg: 6,
            xl: 6,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-2021716576" + " " + "box-text-title",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-2021716576" + " " + "ondas d-block m-auto heartbeat",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  src: "/image/ondas.svg",
                  alt: "ondas",
                  layout: "fill"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                className: "jsx-2021716576" + " " + "text-title heartbeat",
                children: "Sorteo"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-2021716576" + " " + "ondas d-block m-auto heartbeat",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  src: "/image/ondas.svg",
                  alt: "ondas",
                  layout: "fill"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-2021716576" + " " + "box-sorteo-home",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "jsx-2021716576" + " " + "title-fuxia",
                children: "Gana un pack Yes Mom"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                className: "jsx-2021716576" + " " + "subtitle-dark",
                children: "Crea una lista de regalo y gana un pack de productos para ti y tu beb\xE9"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-2021716576",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  href: "/pagina-en-construccion",
                  className: "btn-yellow  hover-amarillo",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    className: "jsx-2021716576",
                    children: " \xA1Comenzar! "
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 106,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                href: "/terminos-condiciones",
                className: "link-a hover-efect-letter",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  className: "jsx-2021716576",
                  children: " \xA1Comenzar! "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
            xs: 12,
            md: 6,
            lg: 6,
            xl: 6,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-2021716576" + " " + "box-img-sorteo-home",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
                src: "/image/lineas-rosa1.svg",
                alt: "lineas",
                className: "line-up heartbeat",
                layout: "fill"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
                src: "/image/home/img-sorteo-home.png",
                alt: "imagen sorteo yesmom home",
                className: "img-sorteo",
                layout: "fill"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
                src: "/image/linea-rosa2.svg",
                alt: "lineas",
                className: "line-down heartbeat",
                layout: "fill"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-2021716576" + " " + "section-lo-mejor-home",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
          fluid: "true",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-2021716576" + " " + "nube-up",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
              src: "/image/home/nube.svg",
              alt: "nube yesmom",
              width: 20,
              height: 50,
              layout: "responsive"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-2021716576" + " " + "box-title-lo-mejor-home",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faStar"],
              className: "heartbeat"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              className: "jsx-2021716576" + " " + "title-fuxia",
              children: "Lo mejor para tu beb\xE9"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faStar"],
              className: "heartbeat"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-2021716576" + " " + "onda-rosa heartbeat",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
              src: "/image/onda-rosa.svg",
              alt: "onda rosa yes mom",
              width: 20,
              height: 50,
              layout: "responsive"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
            className: "box-img-lo-mejor",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
              xs: true,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-2021716576" + " " + "img-lo-mejor ",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  src: "/image/home/destacado.png",
                  alt: "destacado",
                  layout: "fill" // className="onda-rosa heartbeat"

                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 176,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 15
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-2021716576",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  href: "/pagina-en-construccion",
                  className: "btn-lo-mejor hover-amarillo",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    className: "jsx-2021716576",
                    children: " Tiendas destacadas"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 188,
                    columnNumber: 19
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 184,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
              xs: true,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-2021716576" + " " + "img-lo-mejor",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  src: "/image/home/buscado.png",
                  alt: "search",
                  layout: "fill" // className="onda-rosa heartbeat"

                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 194,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 193,
                columnNumber: 15
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-2021716576" + " " + "btn-lo-mejor bg-fuxia hover-fuxia",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  href: "/pagina-en-construccion",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    className: "jsx-2021716576",
                    children: [" ", "Lo + ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {
                      className: "jsx-2021716576"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 205,
                      columnNumber: 26
                    }, _this), " buscado", " "]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 203,
                    columnNumber: 19
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 202,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 201,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
              xs: true,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-2021716576" + " " + "img-lo-mejor",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  src: "/image/home/sin-moverte.png",
                  alt: "sin moverte",
                  layout: "fill" // className="onda-rosa heartbeat"

                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 212,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 211,
                columnNumber: 15
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-2021716576" + " " + "btn-lo-mejor bg-verde hover-verde",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  href: "/pagina-en-construccion",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    className: "jsx-2021716576",
                    children: "Sin moverte de casa"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 221,
                    columnNumber: 19
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 220,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
              xs: true,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-2021716576" + " " + "img-lo-mejor",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  src: "/image/home/juguetes.png",
                  alt: "juguetes",
                  layout: "fill" // className="onda-rosa heartbeat"

                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 227,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 226,
                columnNumber: 15
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-2021716576" + " " + "btn-lo-mejor bg-azul hover-azul",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  href: "/pagina-en-construccion",
                  children: "Juguetes"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 235,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 234,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-2021716576" + " " + "nube-down",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
              src: "/image/home/nube.svg",
              alt: "nube yesmom",
              width: 20,
              height: 50,
              layout: "responsive"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 11
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
        fluid: "true",
        className: "section-blog-home",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
          className: "sin-margin",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
            xs: 12,
            md: 6,
            lg: 6,
            xl: 6,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "jsx-2021716576" + " " + "box-true-history",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "jsx-2021716576" + " " + "box-text-title",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  src: "/image/ondas.svg",
                  alt: "ondas",
                  className: "ondas",
                  layout: "fill"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 266,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                  className: "jsx-2021716576" + " " + "text-title heartbeat",
                  children: "Blog"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 272,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  src: "/image/ondas.svg",
                  alt: "ondas",
                  className: "ondas",
                  layout: "fill"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 273,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 265,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "jsx-2021716576" + " " + "title-fuxia mt-2",
                children: "#TrueStoryMom"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 280,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
                className: "container-blog-home",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h6", {
                  className: "jsx-2021716576" + " " + "subtitle-dark text-center",
                  children: "Historias reales de madres que ten\xEDan las mismas dudas que t\xFA tienes en estos momentos. No te preocupes \xA1Lo resolveremos juntas!"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 282,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  href: "/blog",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    className: "jsx-2021716576" + " " + "btn-yellow",
                    children: "Ver m\xE1s"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 288,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 287,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 281,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 264,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 263,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
            xs: 12,
            md: 6,
            lg: 6,
            xl: 6,
            className: "box-blog-card-home",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["CardDeck"], {
                children: currentData.map(function (cardBlog) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CardBlog__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    blog: cardBlog
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 301,
                    columnNumber: 19
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 299,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 298,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 297,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2021716576",
      children: ".box-banner.jsx-2021716576{height:40rem;width:auto;position:relative;}.box-banner-btns.jsx-2021716576{position:absolute;top:0%;left:60%;background:linear-gradient( 270deg, #ffffff -63.19%, rgba(255,251,251,0) 100%, rgba(255,251,251,0) 100%, rgba(255,251,251,0) 100% );height:100%;width:40%;}.box-banner-btns-group.jsx-2021716576{position:relative;top:25%;}.box-banner-regalos.jsx-2021716576{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:1rem;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.box-banner.jsx-2021716576 .banner.jsx-2021716576{width:100%;object-fit:cover;object-position:center;height:100%;position:absolute;}.ondas-banner.jsx-2021716576{width:1rem;}.section-sorteo-home.jsx-2021716576{padding-top:5rem;padding-bottom:5rem;position:relative;}.btn-regalos.jsx-2021716576{background-color:#febf41;font-size:1.31rem;color:#fff;padding:1.5rem 0rem;margin:1rem;width:11rem;border-radius:30px;text-align:center;line-height:1.3rem;font-family:\"omnes-bold\";position:relative;cursor:pointer;}.box-text-title.jsx-2021716576{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-top:4rem;}.text-title.jsx-2021716576{font-family:\"Clicker Script\",cursive;font-size:2rem;margin:0rem 1rem 0rem;color:#4b66ae;}.ondas.jsx-2021716576{width:6rem;}.box-sorteo-home.jsx-2021716576{width:31.5rem;text-align:center;margin:1rem auto;}.box-img-sorteo-home.jsx-2021716576{position:relative;}.img-sorteo.jsx-2021716576{width:90%;}.line-up.jsx-2021716576{position:absolute;top:3rem;left:-2rem;width:2.5rem;}.line-down.jsx-2021716576{position:absolute;bottom:2rem;right:2.8rem;width:2.5rem;}.section-lo-mejor-home.jsx-2021716576{background:linear-gradient( 270deg, rgba(242,211,230,0.5) 0%, rgba(229,209,231,0.5) 13.49%, rgba(150,199,236,0.5) 100% ), url(\"../../image/home/shop.svg\") repeat;padding:6rem 0rem;position:relative;background-position:top bottom;background-size:cover;}.box-title-lo-mejor-home.jsx-2021716576{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.nube-up.jsx-2021716576{position:absolute;top:-10%;left:5%;width:20rem;}.nube-down.jsx-2021716576{position:absolute;-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);width:20rem;right:5%;bottom:-12%;}.box-img-lo-mejor.jsx-2021716576{margin-left:6rem !important;margin-right:6rem !important;margin:5rem 0;}.img-lo-mejor.jsx-2021716576{border:1px #575756;border-style:dashed;padding:0.6rem;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:20rem;height:20rem;border-radius:50%;}.img-lo-mejor.jsx-2021716576 img.jsx-2021716576{width:100%;}.onda-rosa.jsx-2021716576{width:5rem;margin:auto;display:block;position:relative;top:0rem;}.btn-lo-mejor.jsx-2021716576{padding:1.5rem;text-align:center;font-family:\"omnes-bold\";font-weight:1000;font-size:1.3rem;width:13rem;height:6rem;margin:auto;background-color:#febf41;border-radius:25px;color:#fff !important;line-height:1.3rem;position:relative;top:-3%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.btn-lo-mejor.jsx-2021716576 a.jsx-2021716576{color:#fff !important;}.section-blog-home.jsx-2021716576{padding:4rem 0;}.box-img-blog-home.jsx-2021716576{position:relative;padding:5rem 0;}.line-up-azul.jsx-2021716576{position:absolute;top:2.6rem;left:4rem;width:2.5rem;}.line-down-azul.jsx-2021716576{position:absolute;bottom:2.8rem;right:0rem;width:2.5rem;}.img-blog.jsx-2021716576{width:90%;margin:auto;display:block;padding-left:4rem;}.container-blog-home.jsx-2021716576{padding:1rem 0;}.btn-blog-home.jsx-2021716576{width:auto;height:7rem;text-align:center;background:#4b64a4;color:#fff;margin:1rem auto;padding:1rem 2rem;font-family:\"Montserrat\",sans-serif;font-weight:900;font-size:1.1rem;border-radius:35px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:1.2rem;}.box-btn-blog.jsx-2021716576{margin:0rem 5rem 0rem 5rem !important;}.box-true-history.jsx-2021716576{width:32.5rem;text-align:center;margin:auto;}.box-blog-card-home.jsx-2021716576{-webkit-flex:0 0 46% !important;-ms-flex:0 0 46% !important;flex:0 0 46% !important;}@media (min-width:1800px){.box-banner.jsx-2021716576{height:25rem;width:auto;}.section-sorteo-home.jsx-2021716576{padding-top:3rem;padding-bottom:5rem;}.box-text-title.jsx-2021716576{padding-top:5rem;}.ondas.jsx-2021716576{width:6rem;}.box-sorteo-home.jsx-2021716576{width:31.5rem;text-align:center;margin:2rem auto;}.box-sorteo-home.jsx-2021716576 .title-fuxia.jsx-2021716576{font-size:1.5rem;}.box-sorteo-home.jsx-2021716576 .subtitle-dark.jsx-2021716576{font-size:1.2rem;}.img-sorteo.jsx-2021716576{width:80%;}.line-up.jsx-2021716576{position:absolute;top:1rem;left:-2rem;width:2.5rem;}.line-down.jsx-2021716576{position:absolute;bottom:0.5rem;right:4.5rem;width:2.5rem;}.section-lo-mejor-home.jsx-2021716576{padding:4rem 0rem;}.box-title-lo-mejor-home.jsx-2021716576{font-size:0.7rem;}.box-title-lo-mejor-home.jsx-2021716576 .title-fuxia.jsx-2021716576{font-size:1.5rem;}.nube-up.jsx-2021716576{position:absolute;top:-5%;left:5%;width:15rem;}.nube-down.jsx-2021716576{position:absolute;-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);width:15rem;right:5%;bottom:-6%;}.box-img-lo-mejor.jsx-2021716576{margin-left:15rem !important;margin-right:15rem !important;margin:3rem 0;}.img-lo-mejor.jsx-2021716576{width:15rem;height:15rem;}.onda-rosa.jsx-2021716576{width:4rem;}.btn-lo-mejor.jsx-2021716576{padding:1.5rem;font-weight:1000;font-size:1rem;width:10rem;height:4.5rem;}.section-blog-home.jsx-2021716576{padding:3rem 0;}.box-img-blog-home.jsx-2021716576{padding:5rem 0;}.line-up-azul.jsx-2021716576{top:3rem;left:5.5rem;}.line-down-azul.jsx-2021716576{bottom:3rem;right:1.5rem;}.img-blog.jsx-2021716576{width:80%;}.container-blog-home.jsx-2021716576{padding:1rem 0;}.title-fuxia.jsx-2021716576{font-size:1.5rem;}.btn-blog-home.jsx-2021716576{width:auto;height:4.5rem;font-size:0.8rem;}.box-btn-blog.jsx-2021716576{margin:0rem 3rem 0rem 3rem !important;}}@media (max-width:769px){.section-sorteo-home.jsx-2021716576{padding-top:1rem;}.box-text-title.jsx-2021716576{padding-top:1rem;}.box-sorteo-home.jsx-2021716576{width:100% !important;padding-left:1rem;padding-right:1rem;}.box-img-sorteo-home.jsx-2021716576{margin:auto;display:block;}.img-sorteo.jsx-2021716576{width:80%;display:block;margin:auto;}.box-img-lo-mejor.jsx-2021716576{margin:0rem !important;margin-top:2rem !important;}.img-lo-mejor.jsx-2021716576{width:12rem;height:12rem;}.line-up.jsx-2021716576{width:1.5rem;top:0.3rem;left:0.7rem;}.line-down.jsx-2021716576{bottom:-0.2rem;right:0.5rem;width:1.5rem;}.nube-up.jsx-2021716576{width:10rem;left:-2rem;top:-2rem;}.nube-down.jsx-2021716576{width:10rem;right:-1rem;bottom:-2rem;}.btn-lo-mejor.jsx-2021716576{font-size:1rem;width:11rem;height:4rem;border-radius:20px;}.box-img-blog-home.jsx-2021716576{padding:1rem;}.img-blog.jsx-2021716576{padding-left:0rem;width:80%;}.line-up-azul.jsx-2021716576{width:1.5rem;top:-0.7rem;left:1.5rem;}.line-down-azul.jsx-2021716576{width:1.5rem;right:1rem;bottom:-0.3rem;}.box-btn-blog.jsx-2021716576{margin:0rem 3rem 0rem 3rem !important;}.btn-blog-home.jsx-2021716576{font-size:0.9rem;border-radius:25px;height:5rem;}.box-banner-btns.jsx-2021716576{top:0%;left:0;width:100%;height:100%;padding-top:20%;}.box-banner-regalos.jsx-2021716576{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:1rem;}.btn-regalos.jsx-2021716576{width:15rem;margin:0.8rem auto;font-size:1rem;}.box-true-history.jsx-2021716576{width:80%;display:block;margin:auto;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamNxdWlcXE9uZURyaXZlXFxFc2NyaXRvcmlvXFxoZW5yaV9iYXJyZXR0XFx5ZXMtbW9tXFx5ZXNtb21fbmV4dFxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNUUyxBQUcwQixBQU1LLEFBZUEsQUFLTCxBQVFGLEFBUUEsQUFHTSxBQU1RLEFBZVosQUFNeUIsQUFPM0IsQUFJRyxBQUtJLEFBSVIsQUFHUSxBQU1BLEFBYXVCLEFBUTVCLEFBT0ssQUFPQSxBQVFVLEFBTVQsQUFhUixBQUdBLEFBUUksQUFvQk8sQUFHUCxBQUdHLEFBS0EsQUFPQSxBQU9SLEFBT0ssQUFJSixBQWtCMkIsQUFJeEIsQUFNVSxBQUtULEFBS0ksQUFLQSxBQUlOLEFBSUcsQUFLRyxBQUdBLEFBYVAsQUFHUSxBQU1BLEFBT0EsQUFJRCxBQUdBLEFBSUMsQUFPQSxBQVFXLEFBTWpCLEFBS0QsQUFJSSxBQU9BLEFBR0EsQUFJTixBQUtHLEFBS0YsQUFJSyxBQUlFLEFBSU4sQUFNMkIsQUFLckIsQUFHQSxBQUdLLEFBS1YsQUFJRixBQU1hLEFBS1gsQUFLQyxBQU1FLEFBTUgsQUFNQSxBQU1HLEFBT0YsQUFJSyxBQUtMLEFBTUEsQUFLeUIsQUFHckIsQUFLVixBQU9lLEFBS1YsQUFNRixPQWpCSCxFQTNISyxDQXpSaEIsQUErSGMsQUFtRlosQUFpRkEsQUFzQ2dCLEFBNkZBLENBaGVDLEFBUW5CLEFBcUNBLEFBb0ZBLEFBR2MsQUFnRUEsQUErQ1osQUE4RUEsQUF3Q2dCLENBN0NELEFBNEJBLEFBdUNDLEFBZUQsQUFpQkYsQUFNQyxBQXFETyxDQTVmVixBQXVRRSxBQThLQSxBQStCYixBQVNjLEFBTUQsQ0FoWkssQUF5S0EsQUE2QkUsQUF3TlAsQ0FuVUssQUF1QnBCLEFBNkJBLEFBcUlxQixBQU9uQixBQUdBLEFBa0JBLEFBd0RlLEFBa0JELEVBaGFNLEFBK05FLEFBS3RCLEFBYUEsQUFHQSxBQWlDQSxBQUdBLEFBa0VBLEFBZUEsQUFHQSxBQWtGcUIsQ0FyZWQsQUFlQyxBQW1FVixBQU9XLEFBTUcsQUE0QkgsQUFPZ0IsQUFnRVYsQUFLSixBQU9HLEFBNkZILEFBTUssQUFPaEIsQUFXVSxBQU9pQixBQXdJZixDQWxVUSxFQWdPcEIsQ0FwTEYsQUEwQmdCLEFBZ01NLENBclBOLEFBZ0VJLEFBb01XLEFBdUJqQixDQWpjTSxBQXVRbEIsQUE4SmMsQUFnQkEsQUFrQkMsQUE0QkUsQUErQkgsQ0E1ZkwsQUE0Q1MsQUE0U2xCLEFBNEJBLEFBaUJtQixBQXFDbkIsQUE2Q2MsQUFvQkEsQ0E1ZGhCLEFBb1RZLEFBd0ZWLENBbFVXLEFBa0NILEFBZ0xLLEFBNEpDLENBM2FTLEFBNkdNLEFBNFNkLEFBNkJmLENBM1FVLEFBMElzQixDQWxQbkIsQ0F1WkksQ0F6YUEsQUFpSU4sQUF3Q0MsQUE2Qk8sQUE4QkosQUFnREUsQ0F6TFEsQUEwQjNCLEFBMFBFLENBcmJDLEFBNlRhLENBeE1GLENBMEZNLEFBME1sQixBQWdCQSxBQXFEYyxBQXdCZCxDQXRka0IsQUEwQkgsQUFnR0csQUFxR2xCLEFBNExBLEFBc0JBLEFBb0JrQixDQWxaTCxBQXVKZixBQTJEaUIsQUE4RmYsQUF1RkEsQ0FqVmUsQUF3REYsQUFnUVEsQUFzQnJCLENBeEVxQixDQXJMRixBQXFObkIsQ0EzYkYsQUEyWUUsQ0F6VlcsQUFtREUsQUErR0EsQ0F3Q2YsQ0EyRGlCLENBbUJmLEFBa0xBLENBMVhGLEFBcU9nQixDQW9JZCxDQXhaRixBQXNNRSxDQWlKQSxDQXhZWSxBQThEZCxBQWtORSxDQTNPc0IsQUF1SXhCLENBb1NFLENBL2JvQixBQW1HUixBQXNFZCxDQS9LQSxBQTBIVyxDQWpFWCxBQStHQSxDQXRFZ0IsQ0ErQkcsQUEwSWpCLEFBc0pBLENBdkhnQixBQWlCQSxBQW9EaEIsQ0FyTFcsR0FwTU8sQ0FxSXBCLEVBakJlLEtBUGYsQUF3Rm1CLEVBZ0hqQixBQWlCQSxDQWpWdUIsQUE0QlgsQUFZVyxBQVFULEFBZ0RTLENBdUROLEdBc1VDLEdBamRwQixHQTROQSxFQTNNYyxFQW9CZCxBQWdLb0IsSUF6RE4sRUFzVVosSUFoY21CLE1BMkhQLENBMUNBLEFBd01FLENBckd1QixVQXhEekIsQ0EzSE0sQUFpRlQsQUF3TUUsU0F2TUMsQUF3TUMsRUE5SlksT0EzSE4sRUEwUm5CLENBeE1GLEVBY3lCLEVBbUZQLFdBdkRHLENBM0hNLElBbUxSLElBNUhDLElBbkdOLE1Bd0tVLENBNUpILEFBd0NBLEFBd0RBLEVBb0hBLEdBL05ULENBNENRLENBdURBLFFBbEdwQixNQXVLcUIsQUF3RE4sR0FuTEUsQ0F1RGdCLGNBdERqQyxDQTJIb0IsZ0JBcEVJLEVBcUVkLFFBL0JXLEFBZ0NOLFlBckVmLGVBMUZrQixBQXdDQyxBQXlEbkIsRUFvSHlCLGNBcE5KLENBd0NyQiw4QkF1SHlCLG1CQWhDWCxZQUNDLE9BL0hmLE1BZ0lvQixVQW9GQyxRQW5GckIscUNBOEJxQixnREFzREEsbUJBQ3JCLDBCQXREQSIsImZpbGUiOiJDOlxcVXNlcnNcXGpjcXVpXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcaGVucmlfYmFycmV0dFxceWVzLW1vbVxceWVzbW9tX25leHRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sLCBDYXJkLCBDYXJkRGVjayB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYVN0YXIgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbi8vIGltcG9ydCBiYW5uZXIgZnJvbSBcIi4uL3B1YmxpYy9pbWFnZS9ob21lL2Jhbm5lci5wbmdcIjtcclxuLy8gaW1wb3J0IGJhbm5lck0gZnJvbSBcIi4uL3B1YmxpYy9pbWFnZS9ob21lL2Jhbm5lci1tb2JpbGUucG5nXCI7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XHJcbmltcG9ydCBDYXJkQmxvZyBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkQmxvZ1wiO1xyXG5cclxuXHJcbi8vIGltcG9ydCBjbGllbnRlQXhpb3NCdXNpbmVzcyBmcm9tIFwiLi4vY29uZmlnL2F4aW9zQnVzaW5lc3NcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG4vLyBpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcclxuY29uc3QgSG9tZSA9ICh7Y3VycmVudERhdGF9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coY3VycmVudERhdGEsXCJob2xpc1wiKVxyXG4gICAgLy8gY29uc3QgW2N1cnJlbnREYXRhLCBzZXRDdXJyZW50RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIGJsb2dIb21lKCk7XHJcbiAgICAvLyAgIH0sIFtdKTtcclxuICAgIC8vIGNvbnN0IGJsb2dIb21lID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gICBhd2FpdCBheGlvc1xyXG4gICAgLy8gICAgIC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvZ2V0QmxvZ0FsbC91c2VyP2xpbWl0PTJcIilcclxuICAgIC8vICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAvLyAgICAgICBpZiAocmVzLmRhdGEuTWVuc2FqZVJlc3B1ZXN0YSA9PT0gXCJOTyBFWElTVEVOIERBVE9TXCIpIHtcclxuICAgIC8vICAgICAgICBzZXRDdXJyZW50RGF0YShbXSk7XHJcbiAgICAvLyAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICBzZXRDdXJyZW50RGF0YShyZXMuZGF0YSk7XHJcbiAgICAvLyAgICAgICB9XHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKGUsIFwiZXJyb3JcIik7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwTGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhZGUtaW4gYW5pbWF0ZWRcIj5cclxuICAgICAgICA8c2VjdGlvbiBmbHVpZD1cInRydWVcIiBjbGFzc05hbWU9XCJib3gtYmFubmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lciB2aWV3LWRlc2t0b3BcIj5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlL2hvbWUvYmFubmVyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCJcclxuICAgICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgICAgICAgICAgICB3aWR0aD17NTAwfVxyXG4gICAgICAgICAgICAgIGhlaWdodD17MjEwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lciB2aWV3LW1vYmlsZVwiPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2UvaG9tZS9iYW5uZXItbW9iaWxlLnBuZ1wiXHJcbiAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgYWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIDxpbWcgc3JjPXtiYW5uZXJ9IGNsYXNzTmFtZT1cImJhbm5lciB2aWV3LWRlc2t0b3BcIiAvPiAqL31cclxuICAgICAgICAgIHsvKiA8aW1nIHNyYz17YmFubmVyTX0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiYmFubmVyIHZpZXctbW9iaWxlXCIgLz4gKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1iYW5uZXItYnRuc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1iYW5uZXItYnRucy1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZS1mdXhpYSB3LTgwIG0tYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgRW5jdWVudHJhIHR1IHJlZ2FsbyBzb8OxYWRvXHJcbiAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9uZGFzIGQtYmxvY2sgbS1hdXRvIGhlYXJ0YmVhdFwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZS9vbmRhcy5zdmdcIiBhbHQ9XCJvbmRhc1wiIGxheW91dD1cImZpbGxcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LWJhbm5lci1yZWdhbG9zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1yZWdhbG9zIGJnLWZ1eGlhIGhvdmVyLWZ1eGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgIENyZWFyIGxpc3RhIGRlIHJlZ2Fsb3NcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tcmVnYWxvcyBob3Zlci1hbWFyaWxsb1wiPlxyXG4gICAgICAgICAgICAgICAgICBCdXNjYXIgbGlzdGEgZGUgcmVnYWxvc1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGluay1hIHRleHQtY2VudGVyIFwiPlxyXG4gICAgICAgICAgICAgICAgwr9ZYSByZWdpc3RyYWRvP1xyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaG92ZXItZWZlY3QtbGV0dGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxiPkluaWNpYSBzZXNpw7NuPC9iPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPENvbnRhaW5lciBmbHVpZD1cInRydWVcIiBjbGFzc05hbWU9XCJzZWN0aW9uLXNvcnRlby1ob21lXCI+XHJcbiAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cInNpbi1tYXJnaW5cIj5cclxuICAgICAgICAgICAgPENvbCB4cz17MTJ9IG1kPXs2fSBsZz17Nn0geGw9ezZ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LXRleHQtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib25kYXMgZC1ibG9jayBtLWF1dG8gaGVhcnRiZWF0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2Uvb25kYXMuc3ZnXCIgYWx0PVwib25kYXNcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtdGl0bGUgaGVhcnRiZWF0XCI+U29ydGVvPC9oND5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib25kYXMgZC1ibG9jayBtLWF1dG8gaGVhcnRiZWF0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2Uvb25kYXMuc3ZnXCIgYWx0PVwib25kYXNcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LXNvcnRlby1ob21lXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUtZnV4aWFcIj5HYW5hIHVuIHBhY2sgWWVzIE1vbTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwic3VidGl0bGUtZGFya1wiPlxyXG4gICAgICAgICAgICAgICAgICBDcmVhIHVuYSBsaXN0YSBkZSByZWdhbG8geSBnYW5hIHVuIHBhY2sgZGUgcHJvZHVjdG9zIHBhcmEgdGkgeVxyXG4gICAgICAgICAgICAgICAgICB0dSBiZWLDqVxyXG4gICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9wYWdpbmEtZW4tY29uc3RydWNjaW9uXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4teWVsbG93ICBob3Zlci1hbWFyaWxsb1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8YT4gwqFDb21lbnphciEgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvdGVybWlub3MtY29uZGljaW9uZXNcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5rLWEgaG92ZXItZWZlY3QtbGV0dGVyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGE+IMKhQ29tZW56YXIhIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBtZD17Nn0gbGc9ezZ9IHhsPXs2fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1pbWctc29ydGVvLWhvbWVcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2UvbGluZWFzLXJvc2ExLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cImxpbmVhc1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmUtdXAgaGVhcnRiZWF0XCJcclxuICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9ob21lL2ltZy1zb3J0ZW8taG9tZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZW4gc29ydGVvIHllc21vbSBob21lXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLXNvcnRlb1wiXHJcbiAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2UvbGluZWEtcm9zYTIuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwibGluZWFzXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGluZS1kb3duIGhlYXJ0YmVhdFwiXHJcbiAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJzZWN0aW9uLWxvLW1lam9yLWhvbWVcIj5cclxuICAgICAgICA8Q29udGFpbmVyIGZsdWlkPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudWJlLXVwXCI+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9ob21lL251YmUuc3ZnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJudWJlIHllc21vbVwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezIwfVxyXG4gICAgICAgICAgICAgIGhlaWdodD17NTB9XHJcbiAgICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LXRpdGxlLWxvLW1lam9yLWhvbWVcIj5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgIGljb249e2ZhU3Rhcn1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFydGJlYXRcIlxyXG4gICAgICAgICAgICA+PC9Gb250QXdlc29tZUljb24+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZS1mdXhpYVwiPkxvIG1lam9yIHBhcmEgdHUgYmViw6k8L2gzPlxyXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICAgICAgaWNvbj17ZmFTdGFyfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYXJ0YmVhdFwiXHJcbiAgICAgICAgICAgID48L0ZvbnRBd2Vzb21lSWNvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvbmRhLXJvc2EgaGVhcnRiZWF0XCI+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9vbmRhLXJvc2Euc3ZnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJvbmRhIHJvc2EgeWVzIG1vbVwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezIwfVxyXG4gICAgICAgICAgICAgIGhlaWdodD17NTB9XHJcbiAgICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImJveC1pbWctbG8tbWVqb3JcIj5cclxuICAgICAgICAgICAgPENvbCB4cz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1sby1tZWpvciBcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2UvaG9tZS9kZXN0YWNhZG8ucG5nXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiZGVzdGFjYWRvXCJcclxuICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgICAgIC8vIGNsYXNzTmFtZT1cIm9uZGEtcm9zYSBoZWFydGJlYXRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9wYWdpbmEtZW4tY29uc3RydWNjaW9uXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWxvLW1lam9yIGhvdmVyLWFtYXJpbGxvXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGE+IFRpZW5kYXMgZGVzdGFjYWRhczwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctbG8tbWVqb3JcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2UvaG9tZS9idXNjYWRvLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgICAgICAvLyBjbGFzc05hbWU9XCJvbmRhLXJvc2EgaGVhcnRiZWF0XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tbG8tbWVqb3IgYmctZnV4aWEgaG92ZXItZnV4aWFcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcGFnaW5hLWVuLWNvbnN0cnVjY2lvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgTG8gKyA8YnI+PC9icj4gYnVzY2Fkb3tcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1sby1tZWpvclwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9ob21lL3Npbi1tb3ZlcnRlLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cInNpbiBtb3ZlcnRlXCJcclxuICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgICAgIC8vIGNsYXNzTmFtZT1cIm9uZGEtcm9zYSBoZWFydGJlYXRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1sby1tZWpvciBiZy12ZXJkZSBob3Zlci12ZXJkZVwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wYWdpbmEtZW4tY29uc3RydWNjaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlNpbiBtb3ZlcnRlIGRlIGNhc2E8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWxvLW1lam9yXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlL2hvbWUvanVndWV0ZXMucG5nXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwianVndWV0ZXNcIlxyXG4gICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgICAgICAgLy8gY2xhc3NOYW1lPVwib25kYS1yb3NhIGhlYXJ0YmVhdFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWxvLW1lam9yIGJnLWF6dWwgaG92ZXItYXp1bFwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wYWdpbmEtZW4tY29uc3RydWNjaW9uXCI+SnVndWV0ZXM8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51YmUtZG93blwiPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9ob21lL251YmUuc3ZnXCJcclxuICAgICAgICAgICAgYWx0PVwibnViZSB5ZXNtb21cIlxyXG4gICAgICAgICAgICB3aWR0aD17MjB9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXs1MH1cclxuICAgICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Q29udGFpbmVyIGZsdWlkPVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNlY3Rpb24tYmxvZy1ob21lXCI+XHJcbiAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cInNpbi1tYXJnaW5cIj5cclxuICAgICAgICAgICAgey8qIDxDb2wgeHM9ezEyfSBtZD17Nn0gbGc9ezZ9IHhsPXs2fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LWltZy1ibG9nLWhvbWVcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2xpbmVhc0F6dWwxfSBhbHQ9XCJsaW5lYXNcIiBjbGFzc05hbWU9XCJsaW5lLXVwLWF6dWxcIiAvPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPXtibG9nfVxyXG4gICAgICAgICAgICAgIGFsdD1cImltYWdlbiBibG9nIHllc21vbSBob21lXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctYmxvZ1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtsaW5lYXNBenVsMn0gYWx0PVwibGluZWFzXCIgY2xhc3NOYW1lPVwibGluZS1kb3duLWF6dWxcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db2w+ICovfVxyXG4gICAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezZ9IGxnPXs2fSB4bD17Nn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtdHJ1ZS1oaXN0b3J5XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC10ZXh0LXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9vbmRhcy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIm9uZGFzXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvbmRhc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXRpdGxlIGhlYXJ0YmVhdFwiPkJsb2c8L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2Uvb25kYXMuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJvbmRhc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib25kYXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUtZnV4aWEgbXQtMlwiPiNUcnVlU3RvcnlNb208L2gzPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJjb250YWluZXItYmxvZy1ob21lXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJzdWJ0aXRsZS1kYXJrIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSGlzdG9yaWFzIHJlYWxlcyBkZSBtYWRyZXMgcXVlIHRlbsOtYW4gbGFzIG1pc21hcyBkdWRhcyBxdWVcclxuICAgICAgICAgICAgICAgICAgICB0w7ogdGllbmVzIGVuIGVzdG9zIG1vbWVudG9zLiBObyB0ZSBwcmVvY3VwZXMgwqFMb1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVyZW1vcyBqdW50YXMhXHJcbiAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYmxvZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0bi15ZWxsb3dcIj5WZXIgbcOhczwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgey8qIDxhIGhyZWY9XCIvYmxvZ1wiIGNsYXNzTmFtZT1cImxpbmstYSBkLWJsb2NrIHRleHQtY2VudGVyIG10LTRcIj5cclxuICAgICAgICAgICAgICAgIFZlciBtw6FzICYjODU5NDtcclxuICAgICAgICAgICAgICA8L2E+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezZ9IGxnPXs2fSB4bD17Nn0gY2xhc3NOYW1lPVwiYm94LWJsb2ctY2FyZC1ob21lXCI+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPENhcmREZWNrPlxyXG4gICAgICAgICAgICAgICAge2N1cnJlbnREYXRhLm1hcCgoY2FyZEJsb2cpID0+IChcclxuICAgICAgICAgICAgICAgICAgPENhcmRCbG9nIGJsb2c9e2NhcmRCbG9nfSAvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9DYXJkRGVjaz5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmJveC1iYW5uZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5ib3gtYmFubmVyLWJ0bnMge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDYwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgIDI3MGRlZyxcclxuICAgICAgICAgICAgICAjZmZmZmZmIC02My4xOSUsXHJcbiAgICAgICAgICAgICAgcmdiYSgyNTUsIDI1MSwgMjUxLCAwKSAxMDAlLFxyXG4gICAgICAgICAgICAgIHJnYmEoMjU1LCAyNTEsIDI1MSwgMCkgMTAwJSxcclxuICAgICAgICAgICAgICByZ2JhKDI1NSwgMjUxLCAyNTEsIDApIDEwMCVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5ib3gtYmFubmVyLWJ0bnMtZ3JvdXAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRvcDogMjUlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5ib3gtYmFubmVyLXJlZ2Fsb3Mge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYm94LWJhbm5lciAuYmFubmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm9uZGFzLWJhbm5lciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnNlY3Rpb24tc29ydGVvLWhvbWUge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNXJlbTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVyZW07XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYnRuLXJlZ2Fsb3Mge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmViZjQxO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMzFyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMHJlbTtcclxuICAgICAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogMTFyZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuM3JlbTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwib21uZXMtYm9sZFwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYm94LXRleHQtdGl0bGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDRyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGV4dC10aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkNsaWNrZXIgU2NyaXB0XCIsIGN1cnNpdmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcmVtIDFyZW0gMHJlbTtcclxuICAgICAgICAgICAgY29sb3I6ICM0YjY2YWU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm9uZGFzIHtcclxuICAgICAgICAgICAgd2lkdGg6IDZyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJveC1zb3J0ZW8taG9tZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMS41cmVtO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMXJlbSBhdXRvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJveC1pbWctc29ydGVvLWhvbWUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmltZy1zb3J0ZW8ge1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxpbmUtdXAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogM3JlbTtcclxuICAgICAgICAgICAgbGVmdDogLTJyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAyLjVyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGluZS1kb3duIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDJyZW07XHJcbiAgICAgICAgICAgIHJpZ2h0OiAyLjhyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAyLjVyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlY3Rpb24tbG8tbWVqb3ItaG9tZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAgIDI3MGRlZyxcclxuICAgICAgICAgICAgICAgIHJnYmEoMjQyLCAyMTEsIDIzMCwgMC41KSAwJSxcclxuICAgICAgICAgICAgICAgIHJnYmEoMjI5LCAyMDksIDIzMSwgMC41KSAxMy40OSUsXHJcbiAgICAgICAgICAgICAgICByZ2JhKDE1MCwgMTk5LCAyMzYsIDAuNSkgMTAwJVxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgdXJsKFwiLi4vLi4vaW1hZ2UvaG9tZS9zaG9wLnN2Z1wiKSByZXBlYXQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDZyZW0gMHJlbTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgYm90dG9tO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5ib3gtdGl0bGUtbG8tbWVqb3ItaG9tZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAvKiBwYWRkaW5nOiAxcmVtIDByZW0gNHJlbTsgKi9cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubnViZS11cCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAtMTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1JTtcclxuICAgICAgICAgICAgd2lkdGg6IDIwcmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5udWJlLWRvd24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHJlbTtcclxuICAgICAgICAgICAgcmlnaHQ6IDUlO1xyXG4gICAgICAgICAgICBib3R0b206IC0xMiU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJveC1pbWctbG8tbWVqb3Ige1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNnJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDZyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luOiA1cmVtIDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmltZy1sby1tZWpvciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4ICM1NzU3NTY7XHJcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjZyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHJlbTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5pbWctbG8tbWVqb3IgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAub25kYS1yb3NhIHtcclxuICAgICAgICAgICAgd2lkdGg6IDVyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiAwcmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5idG4tbG8tbWVqb3Ige1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwib21uZXMtYm9sZFwiO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAxM3JlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWJmNDE7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjNyZW07XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiAtMyU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5idG4tbG8tbWVqb3IgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2VjdGlvbi1ibG9nLWhvbWUge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA0cmVtIDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYm94LWltZy1ibG9nLWhvbWUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVyZW0gMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubGluZS11cC1henVsIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDIuNnJlbTtcclxuICAgICAgICAgICAgbGVmdDogNHJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDIuNXJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubGluZS1kb3duLWF6dWwge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMi44cmVtO1xyXG4gICAgICAgICAgICByaWdodDogMHJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDIuNXJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaW1nLWJsb2cge1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDRyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNvbnRhaW5lci1ibG9nLWhvbWUge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJ0bi1ibG9nLWhvbWUge1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgaGVpZ2h0OiA3cmVtO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0YjY0YTQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBtYXJnaW46IDFyZW0gYXV0bztcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMnJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYm94LWJ0bi1ibG9nIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcmVtIDVyZW0gMHJlbSA1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJveC10cnVlLWhpc3Rvcnkge1xyXG4gICAgICAgICAgICB3aWR0aDogMzIuNXJlbTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJveC1ibG9nLWNhcmQtaG9tZSB7XHJcbiAgICAgICAgICAgIGZsZXg6IDAgMCA0NiUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTgwMHB4KSB7XHJcbiAgICAgICAgICAgIC5ib3gtYmFubmVyIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDI1cmVtO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2VjdGlvbi1zb3J0ZW8taG9tZSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDNyZW07XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ib3gtdGV4dC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDVyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5vbmRhcyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDZyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ib3gtc29ydGVvLWhvbWUge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAzMS41cmVtO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBtYXJnaW46IDJyZW0gYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYm94LXNvcnRlby1ob21lIC50aXRsZS1mdXhpYSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJveC1zb3J0ZW8taG9tZSAuc3VidGl0bGUtZGFyayB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyogLmJ0bi15ZWxsb3cge1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMXJlbSAwcmVtO1xyXG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgICB3aWR0aDogOHJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJvbW5lcy1ib2xkXCI7XHJcbiAgfSAqL1xyXG4gICAgICAgICAgICAuaW1nLXNvcnRlbyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGluZS11cCB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHRvcDogMXJlbTtcclxuICAgICAgICAgICAgICBsZWZ0OiAtMnJlbTtcclxuICAgICAgICAgICAgICB3aWR0aDogMi41cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5saW5lLWRvd24ge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBib3R0b206IDAuNXJlbTtcclxuICAgICAgICAgICAgICByaWdodDogNC41cmVtO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zZWN0aW9uLWxvLW1lam9yLWhvbWUge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDRyZW0gMHJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJveC10aXRsZS1sby1tZWpvci1ob21lIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYm94LXRpdGxlLWxvLW1lam9yLWhvbWUgLnRpdGxlLWZ1eGlhIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm51YmUtdXAge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IC01JTtcclxuICAgICAgICAgICAgICBsZWZ0OiA1JTtcclxuICAgICAgICAgICAgICB3aWR0aDogMTVyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5udWJlLWRvd24ge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxNXJlbTtcclxuICAgICAgICAgICAgICByaWdodDogNSU7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAtNiU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ib3gtaW1nLWxvLW1lam9yIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAzcmVtIDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pbWctbG8tbWVqb3Ige1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxNXJlbTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDE1cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAub25kYS1yb3NhIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNHJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJ0bi1sby1tZWpvciB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICB3aWR0aDogMTByZW07XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0LjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNlY3Rpb24tYmxvZy1ob21lIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAzcmVtIDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJveC1pbWctYmxvZy1ob21lIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1cmVtIDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5saW5lLXVwLWF6dWwge1xyXG4gICAgICAgICAgICAgIHRvcDogM3JlbTtcclxuICAgICAgICAgICAgICBsZWZ0OiA1LjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5saW5lLWRvd24tYXp1bCB7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAzcmVtO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAxLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pbWctYmxvZyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvbnRhaW5lci1ibG9nLWhvbWUge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRpdGxlLWZ1eGlhIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJ0bi1ibG9nLWhvbWUge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNC41cmVtO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYm94LWJ0bi1ibG9nIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDByZW0gM3JlbSAwcmVtIDNyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OXB4KSB7XHJcbiAgICAgICAgICAgIC5zZWN0aW9uLXNvcnRlby1ob21lIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYm94LXRleHQtdGl0bGUge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ib3gtc29ydGVvLWhvbWUge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJveC1pbWctc29ydGVvLWhvbWUge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW1nLXNvcnRlbyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ib3gtaW1nLWxvLW1lam9yIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDByZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pbWctbG8tbWVqb3Ige1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMnJlbTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEycmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubGluZS11cCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEuNXJlbTtcclxuICAgICAgICAgICAgICB0b3A6IDAuM3JlbTtcclxuICAgICAgICAgICAgICBsZWZ0OiAwLjdyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5saW5lLWRvd24ge1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogLTAuMnJlbTtcclxuICAgICAgICAgICAgICByaWdodDogMC41cmVtO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5udWJlLXVwIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTByZW07XHJcbiAgICAgICAgICAgICAgbGVmdDogLTJyZW07XHJcbiAgICAgICAgICAgICAgdG9wOiAtMnJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm51YmUtZG93biB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwcmVtO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAtMXJlbTtcclxuICAgICAgICAgICAgICBib3R0b206IC0ycmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYnRuLWxvLW1lam9yIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDExcmVtO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNHJlbTtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYm94LWltZy1ibG9nLWhvbWUge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pbWctYmxvZyB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5saW5lLXVwLWF6dWwge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgdG9wOiAtMC43cmVtO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDEuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmxpbmUtZG93bi1henVsIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMS41cmVtO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogLTAuM3JlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYm94LWJ0bi1ibG9nIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDByZW0gM3JlbSAwcmVtIDNyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnRuLWJsb2ctaG9tZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJveC1iYW5uZXItYnRucyB7XHJcbiAgICAgICAgICAgICAgdG9wOiAwJTtcclxuICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ib3gtYmFubmVyLXJlZ2Fsb3Mge1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJ0bi1yZWdhbG9zIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTVyZW07XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwLjhyZW0gYXV0bztcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ib3gtdHJ1ZS1oaXN0b3J5IHtcclxuICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L0FwcExheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gICAgLy8gQ2FsbCBhbiBleHRlcm5hbCBBUEkgZW5kcG9pbnQgdG8gZ2V0IHBvc3RzLlxyXG4gICAgLy8gWW91IGNhbiB1c2UgYW55IGRhdGEgZmV0Y2hpbmcgbGlicmFyeVxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvZ2V0QmxvZ0FsbC91c2VyP2xpbWl0PTJcIilcclxuICAgIGNvbnN0IGN1cnJlbnREYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIFxyXG4gICAgLy8gQnkgcmV0dXJuaW5nIHsgcHJvcHM6IHBvc3RzIH0sIHRoZSBCbG9nIGNvbXBvbmVudFxyXG4gICAgLy8gd2lsbCByZWNlaXZlIGBwb3N0c2AgYXMgYSBwcm9wIGF0IGJ1aWxkIHRpbWVcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgY3VycmVudERhdGEsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\jcqui\\\\OneDrive\\\\Escritorio\\\\henri_barrett\\\\yes-mom\\\\yesmom_next\\\\pages\\\\index.js */"
    }, void 0, false, void 0, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, _this);
};

_c = Home;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImN1cnJlbnREYXRhIiwiY29uc29sZSIsImxvZyIsImZhU3RhciIsIm1hcCIsImNhcmRCbG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBOztBQUNBO0NBSUE7O0NBRUE7O0FBQ0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBbUI7QUFBQSxNQUFqQkMsV0FBaUIsUUFBakJBLFdBQWlCO0FBQzlCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsV0FBWixFQUF3QixPQUF4QixFQUQ4QixDQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0Ysc0JBQ0UscUVBQUMsNkRBQUQ7QUFBQSw0QkFDRTtBQUFBLDBDQUFlLGtCQUFmO0FBQUEsOEJBQ0U7QUFBUyxhQUFLLEVBQUMsTUFBZjtBQUFBLDRDQUFnQyxZQUFoQztBQUFBLGdDQUNFO0FBQUEsOENBQWUscUJBQWY7QUFBQSxpQ0FDRSxxRUFBQyxpREFBRDtBQUNFLGVBQUcsRUFBQyx3QkFETjtBQUVFLGVBQUcsRUFBQyx1QkFGTjtBQUdFLGtCQUFNLEVBQUMsWUFIVDtBQUlFLGlCQUFLLEVBQUUsR0FKVDtBQUtFLGtCQUFNLEVBQUU7QUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVVFO0FBQUEsOENBQWUsb0JBQWY7QUFBQSxpQ0FDRSxxRUFBQyxpREFBRDtBQUNFLGVBQUcsRUFBQywrQkFETjtBQUVFLGtCQUFNLEVBQUMsTUFGVDtBQUdFLGVBQUcsRUFBQztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtB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QUFBO0FBQUE7QUFBQSxtQkFaRixlQThDRSxxRUFBQyxtREFBRDtBQUFLLGNBQUUsRUFBRSxFQUFUO0FBQWEsY0FBRSxFQUFFLENBQWpCO0FBQW9CLGNBQUUsRUFBRSxDQUF4QjtBQUEyQixjQUFFLEVBQUUsQ0FBL0I7QUFBa0MscUJBQVMsRUFBQyxvQkFBNUM7QUFBQSxtQ0FDQSxxRUFBQyx5REFBRDtBQUFBLHFDQUNFLHFFQUFDLHdEQUFEO0FBQUEsMEJBQ0dILFdBQVcsQ0FBQ0ksR0FBWixDQUFnQixVQUFDQyxRQUFEO0FBQUEsc0NBQ2YscUVBQUMsNERBQUQ7QUFBVSx3QkFBSSxFQUFFQTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURlO0FBQUEsaUJBQWhCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTlDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBcE5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ3lCRCxDQXB6QkQ7O0tBQU1OLEk7O0FBcTBCU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzA0N2I5N2EzMDZjNzU0ZWIxYTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sLCBDYXJkLCBDYXJkRGVjayB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYVN0YXIgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbi8vIGltcG9ydCBiYW5uZXIgZnJvbSBcIi4uL3B1YmxpYy9pbWFnZS9ob21lL2Jhbm5lci5wbmdcIjtcclxuLy8gaW1wb3J0IGJhbm5lck0gZnJvbSBcIi4uL3B1YmxpYy9pbWFnZS9ob21lL2Jhbm5lci1tb2JpbGUucG5nXCI7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XHJcbmltcG9ydCBDYXJkQmxvZyBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkQmxvZ1wiO1xyXG5cclxuXHJcbi8vIGltcG9ydCBjbGllbnRlQXhpb3NCdXNpbmVzcyBmcm9tIFwiLi4vY29uZmlnL2F4aW9zQnVzaW5lc3NcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG4vLyBpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcclxuY29uc3QgSG9tZSA9ICh7Y3VycmVudERhdGF9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coY3VycmVudERhdGEsXCJob2xpc1wiKVxyXG4gICAgLy8gY29uc3QgW2N1cnJlbnREYXRhLCBzZXRDdXJyZW50RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIGJsb2dIb21lKCk7XHJcbiAgICAvLyAgIH0sIFtdKTtcclxuICAgIC8vIGNvbnN0IGJsb2dIb21lID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gICBhd2FpdCBheGlvc1xyXG4gICAgLy8gICAgIC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvZ2V0QmxvZ0FsbC91c2VyP2xpbWl0PTJcIilcclxuICAgIC8vICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAvLyAgICAgICBpZiAocmVzLmRhdGEuTWVuc2FqZVJlc3B1ZXN0YSA9PT0gXCJOTyBFWElTVEVOIERBVE9TXCIpIHtcclxuICAgIC8vICAgICAgICBzZXRDdXJyZW50RGF0YShbXSk7XHJcbiAgICAvLyAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICBzZXRDdXJyZW50RGF0YShyZXMuZGF0YSk7XHJcbiAgICAvLyAgICAgICB9XHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKGUsIFwiZXJyb3JcIik7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwTGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhZGUtaW4gYW5pbWF0ZWRcIj5cclxuICAgICAgICA8c2VjdGlvbiBmbHVpZD1cInRydWVcIiBjbGFzc05hbWU9XCJib3gtYmFubmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lciB2aWV3LWRlc2t0b3BcIj5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlL2hvbWUvYmFubmVyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCJcclxuICAgICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgICAgICAgICAgICB3aWR0aD17NTAwfVxyXG4gICAgICAgICAgICAgIGhlaWdodD17MjEwfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lciB2aWV3LW1vYmlsZVwiPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2UvaG9tZS9iYW5uZXItbW9iaWxlLnBuZ1wiXHJcbiAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgYWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIDxpbWcgc3JjPXtiYW5uZXJ9IGNsYXNzTmFtZT1cImJhbm5lciB2aWV3LWRlc2t0b3BcIiAvPiAqL31cclxuICAgICAgICAgIHsvKiA8aW1nIHNyYz17YmFubmVyTX0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiYmFubmVyIHZpZXctbW9iaWxlXCIgLz4gKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1iYW5uZXItYnRuc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1iYW5uZXItYnRucy1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZS1mdXhpYSB3LTgwIG0tYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgRW5jdWVudHJhIHR1IHJlZ2FsbyBzb8OxYWRvXHJcbiAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9uZGFzIGQtYmxvY2sgbS1hdXRvIGhlYXJ0YmVhdFwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZS9vbmRhcy5zdmdcIiBhbHQ9XCJvbmRhc1wiIGxheW91dD1cImZpbGxcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LWJhbm5lci1yZWdhbG9zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1yZWdhbG9zIGJnLWZ1eGlhIGhvdmVyLWZ1eGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgIENyZWFyIGxpc3RhIGRlIHJlZ2Fsb3NcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tcmVnYWxvcyBob3Zlci1hbWFyaWxsb1wiPlxyXG4gICAgICAgICAgICAgICAgICBCdXNjYXIgbGlzdGEgZGUgcmVnYWxvc1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGluay1hIHRleHQtY2VudGVyIFwiPlxyXG4gICAgICAgICAgICAgICAgwr9ZYSByZWdpc3RyYWRvP1xyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaG92ZXItZWZlY3QtbGV0dGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxiPkluaWNpYSBzZXNpw7NuPC9iPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPENvbnRhaW5lciBmbHVpZD1cInRydWVcIiBjbGFzc05hbWU9XCJzZWN0aW9uLXNvcnRlby1ob21lXCI+XHJcbiAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cInNpbi1tYXJnaW5cIj5cclxuICAgICAgICAgICAgPENvbCB4cz17MTJ9IG1kPXs2fSBsZz17Nn0geGw9ezZ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LXRleHQtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib25kYXMgZC1ibG9jayBtLWF1dG8gaGVhcnRiZWF0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2Uvb25kYXMuc3ZnXCIgYWx0PVwib25kYXNcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtdGl0bGUgaGVhcnRiZWF0XCI+U29ydGVvPC9oND5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib25kYXMgZC1ibG9jayBtLWF1dG8gaGVhcnRiZWF0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2Uvb25kYXMuc3ZnXCIgYWx0PVwib25kYXNcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LXNvcnRlby1ob21lXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUtZnV4aWFcIj5HYW5hIHVuIHBhY2sgWWVzIE1vbTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwic3VidGl0bGUtZGFya1wiPlxyXG4gICAgICAgICAgICAgICAgICBDcmVhIHVuYSBsaXN0YSBkZSByZWdhbG8geSBnYW5hIHVuIHBhY2sgZGUgcHJvZHVjdG9zIHBhcmEgdGkgeVxyXG4gICAgICAgICAgICAgICAgICB0dSBiZWLDqVxyXG4gICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9wYWdpbmEtZW4tY29uc3RydWNjaW9uXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4teWVsbG93ICBob3Zlci1hbWFyaWxsb1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8YT4gwqFDb21lbnphciEgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvdGVybWlub3MtY29uZGljaW9uZXNcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5rLWEgaG92ZXItZWZlY3QtbGV0dGVyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGE+IMKhQ29tZW56YXIhIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBtZD17Nn0gbGc9ezZ9IHhsPXs2fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC1pbWctc29ydGVvLWhvbWVcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2UvbGluZWFzLXJvc2ExLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cImxpbmVhc1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmUtdXAgaGVhcnRiZWF0XCJcclxuICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9ob21lL2ltZy1zb3J0ZW8taG9tZS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZW4gc29ydGVvIHllc21vbSBob21lXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLXNvcnRlb1wiXHJcbiAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2UvbGluZWEtcm9zYTIuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwibGluZWFzXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGluZS1kb3duIGhlYXJ0YmVhdFwiXHJcbiAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJzZWN0aW9uLWxvLW1lam9yLWhvbWVcIj5cclxuICAgICAgICA8Q29udGFpbmVyIGZsdWlkPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudWJlLXVwXCI+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9ob21lL251YmUuc3ZnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJudWJlIHllc21vbVwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezIwfVxyXG4gICAgICAgICAgICAgIGhlaWdodD17NTB9XHJcbiAgICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LXRpdGxlLWxvLW1lam9yLWhvbWVcIj5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgIGljb249e2ZhU3Rhcn1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFydGJlYXRcIlxyXG4gICAgICAgICAgICA+PC9Gb250QXdlc29tZUljb24+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZS1mdXhpYVwiPkxvIG1lam9yIHBhcmEgdHUgYmViw6k8L2gzPlxyXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICAgICAgaWNvbj17ZmFTdGFyfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYXJ0YmVhdFwiXHJcbiAgICAgICAgICAgID48L0ZvbnRBd2Vzb21lSWNvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvbmRhLXJvc2EgaGVhcnRiZWF0XCI+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9vbmRhLXJvc2Euc3ZnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJvbmRhIHJvc2EgeWVzIG1vbVwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezIwfVxyXG4gICAgICAgICAgICAgIGhlaWdodD17NTB9XHJcbiAgICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cImJveC1pbWctbG8tbWVqb3JcIj5cclxuICAgICAgICAgICAgPENvbCB4cz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1sby1tZWpvciBcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2UvaG9tZS9kZXN0YWNhZG8ucG5nXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiZGVzdGFjYWRvXCJcclxuICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgICAgIC8vIGNsYXNzTmFtZT1cIm9uZGEtcm9zYSBoZWFydGJlYXRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9wYWdpbmEtZW4tY29uc3RydWNjaW9uXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWxvLW1lam9yIGhvdmVyLWFtYXJpbGxvXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGE+IFRpZW5kYXMgZGVzdGFjYWRhczwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgeHM+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctbG8tbWVqb3JcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2UvaG9tZS9idXNjYWRvLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgICAgICAvLyBjbGFzc05hbWU9XCJvbmRhLXJvc2EgaGVhcnRiZWF0XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tbG8tbWVqb3IgYmctZnV4aWEgaG92ZXItZnV4aWFcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcGFnaW5hLWVuLWNvbnN0cnVjY2lvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgTG8gKyA8YnI+PC9icj4gYnVzY2Fkb3tcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCB4cz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1sby1tZWpvclwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9ob21lL3Npbi1tb3ZlcnRlLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cInNpbiBtb3ZlcnRlXCJcclxuICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgICAgIC8vIGNsYXNzTmFtZT1cIm9uZGEtcm9zYSBoZWFydGJlYXRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1sby1tZWpvciBiZy12ZXJkZSBob3Zlci12ZXJkZVwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wYWdpbmEtZW4tY29uc3RydWNjaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlNpbiBtb3ZlcnRlIGRlIGNhc2E8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLWxvLW1lam9yXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlL2hvbWUvanVndWV0ZXMucG5nXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwianVndWV0ZXNcIlxyXG4gICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgICAgICAgLy8gY2xhc3NOYW1lPVwib25kYS1yb3NhIGhlYXJ0YmVhdFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWxvLW1lam9yIGJnLWF6dWwgaG92ZXItYXp1bFwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wYWdpbmEtZW4tY29uc3RydWNjaW9uXCI+SnVndWV0ZXM8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51YmUtZG93blwiPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9ob21lL251YmUuc3ZnXCJcclxuICAgICAgICAgICAgYWx0PVwibnViZSB5ZXNtb21cIlxyXG4gICAgICAgICAgICB3aWR0aD17MjB9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXs1MH1cclxuICAgICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Q29udGFpbmVyIGZsdWlkPVwidHJ1ZVwiIGNsYXNzTmFtZT1cInNlY3Rpb24tYmxvZy1ob21lXCI+XHJcbiAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cInNpbi1tYXJnaW5cIj5cclxuICAgICAgICAgICAgey8qIDxDb2wgeHM9ezEyfSBtZD17Nn0gbGc9ezZ9IHhsPXs2fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LWltZy1ibG9nLWhvbWVcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e2xpbmVhc0F6dWwxfSBhbHQ9XCJsaW5lYXNcIiBjbGFzc05hbWU9XCJsaW5lLXVwLWF6dWxcIiAvPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPXtibG9nfVxyXG4gICAgICAgICAgICAgIGFsdD1cImltYWdlbiBibG9nIHllc21vbSBob21lXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctYmxvZ1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtsaW5lYXNBenVsMn0gYWx0PVwibGluZWFzXCIgY2xhc3NOYW1lPVwibGluZS1kb3duLWF6dWxcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db2w+ICovfVxyXG4gICAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezZ9IGxnPXs2fSB4bD17Nn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtdHJ1ZS1oaXN0b3J5XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC10ZXh0LXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZS9vbmRhcy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIm9uZGFzXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvbmRhc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXRpdGxlIGhlYXJ0YmVhdFwiPkJsb2c8L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2Uvb25kYXMuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJvbmRhc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib25kYXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGUtZnV4aWEgbXQtMlwiPiNUcnVlU3RvcnlNb208L2gzPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJjb250YWluZXItYmxvZy1ob21lXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJzdWJ0aXRsZS1kYXJrIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSGlzdG9yaWFzIHJlYWxlcyBkZSBtYWRyZXMgcXVlIHRlbsOtYW4gbGFzIG1pc21hcyBkdWRhcyBxdWVcclxuICAgICAgICAgICAgICAgICAgICB0w7ogdGllbmVzIGVuIGVzdG9zIG1vbWVudG9zLiBObyB0ZSBwcmVvY3VwZXMgwqFMb1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVyZW1vcyBqdW50YXMhXHJcbiAgICAgICAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYmxvZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0bi15ZWxsb3dcIj5WZXIgbcOhczwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgey8qIDxhIGhyZWY9XCIvYmxvZ1wiIGNsYXNzTmFtZT1cImxpbmstYSBkLWJsb2NrIHRleHQtY2VudGVyIG10LTRcIj5cclxuICAgICAgICAgICAgICAgIFZlciBtw6FzICYjODU5NDtcclxuICAgICAgICAgICAgICA8L2E+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezZ9IGxnPXs2fSB4bD17Nn0gY2xhc3NOYW1lPVwiYm94LWJsb2ctY2FyZC1ob21lXCI+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPENhcmREZWNrPlxyXG4gICAgICAgICAgICAgICAge2N1cnJlbnREYXRhLm1hcCgoY2FyZEJsb2cpID0+IChcclxuICAgICAgICAgICAgICAgICAgPENhcmRCbG9nIGJsb2c9e2NhcmRCbG9nfSAvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9DYXJkRGVjaz5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLmJveC1iYW5uZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5ib3gtYmFubmVyLWJ0bnMge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDYwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgIDI3MGRlZyxcclxuICAgICAgICAgICAgICAjZmZmZmZmIC02My4xOSUsXHJcbiAgICAgICAgICAgICAgcmdiYSgyNTUsIDI1MSwgMjUxLCAwKSAxMDAlLFxyXG4gICAgICAgICAgICAgIHJnYmEoMjU1LCAyNTEsIDI1MSwgMCkgMTAwJSxcclxuICAgICAgICAgICAgICByZ2JhKDI1NSwgMjUxLCAyNTEsIDApIDEwMCVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5ib3gtYmFubmVyLWJ0bnMtZ3JvdXAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRvcDogMjUlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5ib3gtYmFubmVyLXJlZ2Fsb3Mge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYm94LWJhbm5lciAuYmFubmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm9uZGFzLWJhbm5lciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnNlY3Rpb24tc29ydGVvLWhvbWUge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNXJlbTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVyZW07XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYnRuLXJlZ2Fsb3Mge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmViZjQxO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMzFyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMHJlbTtcclxuICAgICAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogMTFyZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuM3JlbTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwib21uZXMtYm9sZFwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYm94LXRleHQtdGl0bGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDRyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGV4dC10aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkNsaWNrZXIgU2NyaXB0XCIsIGN1cnNpdmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcmVtIDFyZW0gMHJlbTtcclxuICAgICAgICAgICAgY29sb3I6ICM0YjY2YWU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm9uZGFzIHtcclxuICAgICAgICAgICAgd2lkdGg6IDZyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJveC1zb3J0ZW8taG9tZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMS41cmVtO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMXJlbSBhdXRvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJveC1pbWctc29ydGVvLWhvbWUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmltZy1zb3J0ZW8ge1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxpbmUtdXAge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogM3JlbTtcclxuICAgICAgICAgICAgbGVmdDogLTJyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAyLjVyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGluZS1kb3duIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDJyZW07XHJcbiAgICAgICAgICAgIHJpZ2h0OiAyLjhyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAyLjVyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnNlY3Rpb24tbG8tbWVqb3ItaG9tZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAgIDI3MGRlZyxcclxuICAgICAgICAgICAgICAgIHJnYmEoMjQyLCAyMTEsIDIzMCwgMC41KSAwJSxcclxuICAgICAgICAgICAgICAgIHJnYmEoMjI5LCAyMDksIDIzMSwgMC41KSAxMy40OSUsXHJcbiAgICAgICAgICAgICAgICByZ2JhKDE1MCwgMTk5LCAyMzYsIDAuNSkgMTAwJVxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgdXJsKFwiLi4vLi4vaW1hZ2UvaG9tZS9zaG9wLnN2Z1wiKSByZXBlYXQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDZyZW0gMHJlbTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgYm90dG9tO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5ib3gtdGl0bGUtbG8tbWVqb3ItaG9tZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAvKiBwYWRkaW5nOiAxcmVtIDByZW0gNHJlbTsgKi9cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubnViZS11cCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAtMTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1JTtcclxuICAgICAgICAgICAgd2lkdGg6IDIwcmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5udWJlLWRvd24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHJlbTtcclxuICAgICAgICAgICAgcmlnaHQ6IDUlO1xyXG4gICAgICAgICAgICBib3R0b206IC0xMiU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJveC1pbWctbG8tbWVqb3Ige1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNnJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDZyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luOiA1cmVtIDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmltZy1sby1tZWpvciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4ICM1NzU3NTY7XHJcbiAgICAgICAgICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjZyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHJlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHJlbTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5pbWctbG8tbWVqb3IgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAub25kYS1yb3NhIHtcclxuICAgICAgICAgICAgd2lkdGg6IDVyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiAwcmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5idG4tbG8tbWVqb3Ige1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwib21uZXMtYm9sZFwiO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAxM3JlbTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWJmNDE7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjNyZW07XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiAtMyU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5idG4tbG8tbWVqb3IgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2VjdGlvbi1ibG9nLWhvbWUge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA0cmVtIDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYm94LWltZy1ibG9nLWhvbWUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVyZW0gMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubGluZS11cC1henVsIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDIuNnJlbTtcclxuICAgICAgICAgICAgbGVmdDogNHJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDIuNXJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubGluZS1kb3duLWF6dWwge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMi44cmVtO1xyXG4gICAgICAgICAgICByaWdodDogMHJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDIuNXJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaW1nLWJsb2cge1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDRyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNvbnRhaW5lci1ibG9nLWhvbWUge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJ0bi1ibG9nLWhvbWUge1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgaGVpZ2h0OiA3cmVtO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0YjY0YTQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBtYXJnaW46IDFyZW0gYXV0bztcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMnJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYm94LWJ0bi1ibG9nIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcmVtIDVyZW0gMHJlbSA1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJveC10cnVlLWhpc3Rvcnkge1xyXG4gICAgICAgICAgICB3aWR0aDogMzIuNXJlbTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJveC1ibG9nLWNhcmQtaG9tZSB7XHJcbiAgICAgICAgICAgIGZsZXg6IDAgMCA0NiUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTgwMHB4KSB7XHJcbiAgICAgICAgICAgIC5ib3gtYmFubmVyIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDI1cmVtO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2VjdGlvbi1zb3J0ZW8taG9tZSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDNyZW07XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ib3gtdGV4dC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDVyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5vbmRhcyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDZyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ib3gtc29ydGVvLWhvbWUge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAzMS41cmVtO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBtYXJnaW46IDJyZW0gYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYm94LXNvcnRlby1ob21lIC50aXRsZS1mdXhpYSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJveC1zb3J0ZW8taG9tZSAuc3VidGl0bGUtZGFyayB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyogLmJ0bi15ZWxsb3cge1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMXJlbSAwcmVtO1xyXG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgICB3aWR0aDogOHJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJvbW5lcy1ib2xkXCI7XHJcbiAgfSAqL1xyXG4gICAgICAgICAgICAuaW1nLXNvcnRlbyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGluZS11cCB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHRvcDogMXJlbTtcclxuICAgICAgICAgICAgICBsZWZ0OiAtMnJlbTtcclxuICAgICAgICAgICAgICB3aWR0aDogMi41cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5saW5lLWRvd24ge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBib3R0b206IDAuNXJlbTtcclxuICAgICAgICAgICAgICByaWdodDogNC41cmVtO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zZWN0aW9uLWxvLW1lam9yLWhvbWUge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDRyZW0gMHJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJveC10aXRsZS1sby1tZWpvci1ob21lIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYm94LXRpdGxlLWxvLW1lam9yLWhvbWUgLnRpdGxlLWZ1eGlhIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm51YmUtdXAge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IC01JTtcclxuICAgICAgICAgICAgICBsZWZ0OiA1JTtcclxuICAgICAgICAgICAgICB3aWR0aDogMTVyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5udWJlLWRvd24ge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxNXJlbTtcclxuICAgICAgICAgICAgICByaWdodDogNSU7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAtNiU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ib3gtaW1nLWxvLW1lam9yIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAzcmVtIDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pbWctbG8tbWVqb3Ige1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxNXJlbTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDE1cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAub25kYS1yb3NhIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNHJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJ0bi1sby1tZWpvciB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICB3aWR0aDogMTByZW07XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0LjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNlY3Rpb24tYmxvZy1ob21lIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAzcmVtIDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJveC1pbWctYmxvZy1ob21lIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1cmVtIDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5saW5lLXVwLWF6dWwge1xyXG4gICAgICAgICAgICAgIHRvcDogM3JlbTtcclxuICAgICAgICAgICAgICBsZWZ0OiA1LjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5saW5lLWRvd24tYXp1bCB7XHJcbiAgICAgICAgICAgICAgYm90dG9tOiAzcmVtO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAxLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pbWctYmxvZyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvbnRhaW5lci1ibG9nLWhvbWUge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRpdGxlLWZ1eGlhIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJ0bi1ibG9nLWhvbWUge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNC41cmVtO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYm94LWJ0bi1ibG9nIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDByZW0gM3JlbSAwcmVtIDNyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OXB4KSB7XHJcbiAgICAgICAgICAgIC5zZWN0aW9uLXNvcnRlby1ob21lIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYm94LXRleHQtdGl0bGUge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ib3gtc29ydGVvLWhvbWUge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJveC1pbWctc29ydGVvLWhvbWUge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW1nLXNvcnRlbyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ib3gtaW1nLWxvLW1lam9yIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDByZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pbWctbG8tbWVqb3Ige1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMnJlbTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEycmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubGluZS11cCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEuNXJlbTtcclxuICAgICAgICAgICAgICB0b3A6IDAuM3JlbTtcclxuICAgICAgICAgICAgICBsZWZ0OiAwLjdyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5saW5lLWRvd24ge1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogLTAuMnJlbTtcclxuICAgICAgICAgICAgICByaWdodDogMC41cmVtO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5udWJlLXVwIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTByZW07XHJcbiAgICAgICAgICAgICAgbGVmdDogLTJyZW07XHJcbiAgICAgICAgICAgICAgdG9wOiAtMnJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm51YmUtZG93biB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwcmVtO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAtMXJlbTtcclxuICAgICAgICAgICAgICBib3R0b206IC0ycmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYnRuLWxvLW1lam9yIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDExcmVtO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNHJlbTtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYm94LWltZy1ibG9nLWhvbWUge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pbWctYmxvZyB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5saW5lLXVwLWF6dWwge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgdG9wOiAtMC43cmVtO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDEuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmxpbmUtZG93bi1henVsIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMS41cmVtO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogLTAuM3JlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYm94LWJ0bi1ibG9nIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDByZW0gM3JlbSAwcmVtIDNyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnRuLWJsb2ctaG9tZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJveC1iYW5uZXItYnRucyB7XHJcbiAgICAgICAgICAgICAgdG9wOiAwJTtcclxuICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ib3gtYmFubmVyLXJlZ2Fsb3Mge1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJ0bi1yZWdhbG9zIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTVyZW07XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwLjhyZW0gYXV0bztcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5ib3gtdHJ1ZS1oaXN0b3J5IHtcclxuICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L0FwcExheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gICAgLy8gQ2FsbCBhbiBleHRlcm5hbCBBUEkgZW5kcG9pbnQgdG8gZ2V0IHBvc3RzLlxyXG4gICAgLy8gWW91IGNhbiB1c2UgYW55IGRhdGEgZmV0Y2hpbmcgbGlicmFyeVxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvZ2V0QmxvZ0FsbC91c2VyP2xpbWl0PTJcIilcclxuICAgIGNvbnN0IGN1cnJlbnREYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIFxyXG4gICAgLy8gQnkgcmV0dXJuaW5nIHsgcHJvcHM6IHBvc3RzIH0sIHRoZSBCbG9nIGNvbXBvbmVudFxyXG4gICAgLy8gd2lsbCByZWNlaXZlIGBwb3N0c2AgYXMgYSBwcm9wIGF0IGJ1aWxkIHRpbWVcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgY3VycmVudERhdGEsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==