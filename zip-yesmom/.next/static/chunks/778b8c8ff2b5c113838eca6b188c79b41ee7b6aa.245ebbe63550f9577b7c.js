(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"2qu3":function(e,t,r){"use strict";var o=r("lSNA"),n=r("lwsE"),i=r("W8MJ");function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var o=0,n=function(){};return{s:n,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){l=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(l)throw i}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}t.__esModule=!0,t.default=void 0;var d,b=(d=r("q1tI"))&&d.__esModule?d:{default:d},u=r("8L3h"),f=r("jwwS");var m=[],x=[],p=!1;function g(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}function j(e){var t={loading:!1,loaded:{},error:null},r=[];try{Object.keys(e).forEach((function(o){var n=g(e[o]);n.loading?t.loading=!0:(t.loaded[o]=n.loaded,t.error=n.error),r.push(n.promise),n.promise.then((function(e){t.loaded[o]=e})).catch((function(e){t.error=e}))}))}catch(o){t.error=o}return t.promise=Promise.all(r).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function y(e,t){return b.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function h(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:y,webpack:null,modules:null},t),o=null;function n(){if(!o){var t=new w(e,r);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()}if(!p&&"function"===typeof r.webpack){var i=r.webpack();x.push((function(e){var t,r=s(i);try{for(r.s();!(t=r.n()).done;){var o=t.value;if(-1!==e.indexOf(o))return n()}}catch(a){r.e(a)}finally{r.f()}}))}var a=function(e,t){n();var i=b.default.useContext(f.LoadableContext),a=(0,u.useSubscription)(o);return b.default.useImperativeHandle(t,(function(){return{retry:o.retry}}),[]),i&&Array.isArray(r.modules)&&r.modules.forEach((function(e){i(e)})),b.default.useMemo((function(){return a.loading||a.error?b.default.createElement(r.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:o.retry}):a.loaded?r.render(a.loaded,e):null}),[e,a])};return a.preload=function(){return n()},a.displayName="LoadableComponent",b.default.forwardRef(a)}var w=function(){function e(t,r){n(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return i(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=l(l({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function k(e){return h(g,e)}function v(e,t){for(var r=[];e.length;){var o=e.pop();r.push(o(t))}return Promise.all(r).then((function(){if(e.length)return v(e,t)}))}k.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return h(j,e)},k.preloadAll=function(){return new Promise((function(e,t){v(m).then(e,t)}))},k.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return p=!0,t()};v(x,e).then(r,r)}))},window.__NEXT_PRELOADREADY=k.preloadReady;var O=k;t.default=O},"9iQ+":function(e,t,r){"use strict";var o=r("nKUr"),n=r("MX0m"),i=r.n(n),a=r("q1tI"),l=r.n(a),s=r("YFqc"),c=r.n(s),d=r("Vvt1"),b=r.n(d),u=r("wx14"),f=r("zLVn"),m=r("TSYQ"),x=r.n(m),p=r("vUet"),g=r("YdCC"),j=function(e){return l.a.forwardRef((function(t,r){return l.a.createElement("div",Object(u.a)({},t,{ref:r,className:x()(t.className,e)}))}))},y=r("Wzyw"),h=l.a.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,n=e.variant,i=e.as,a=void 0===i?"img":i,s=Object(f.a)(e,["bsPrefix","className","variant","as"]),c=Object(p.a)(r,"card-img");return l.a.createElement(a,Object(u.a)({ref:t,className:x()(n?c+"-"+n:c,o)},s))}));h.displayName="CardImg",h.defaultProps={variant:null};var w=h,k=j("h5"),v=j("h6"),O=Object(g.a)("card-body"),_=Object(g.a)("card-title",{Component:k}),P=Object(g.a)("card-subtitle",{Component:v}),z=Object(g.a)("card-link",{Component:"a"}),E=Object(g.a)("card-text",{Component:"p"}),N=Object(g.a)("card-header"),S=Object(g.a)("card-footer"),C=Object(g.a)("card-img-overlay"),D=l.a.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,n=e.bg,i=e.text,s=e.border,c=e.body,d=e.children,b=e.as,m=void 0===b?"div":b,g=Object(f.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),j=Object(p.a)(r,"card"),h=Object(a.useMemo)((function(){return{cardHeaderBsPrefix:j+"-header"}}),[j]);return l.a.createElement(y.a.Provider,{value:h},l.a.createElement(m,Object(u.a)({ref:t},g,{className:x()(o,j,n&&"bg-"+n,i&&"text-"+i,s&&"border-"+s)}),c?l.a.createElement(O,null,d):d))}));D.displayName="Card",D.defaultProps={body:!1},D.Img=w,D.Title=_,D.Subtitle=P,D.Body=O,D.Link=z,D.Text=E,D.Header=N,D.Footer=S,D.ImgOverlay=C;var M=D;b()((function(){return Promise.all([r.e(7),r.e(8)]).then(r.t.bind(null,"cioW",7))}),{ssr:!1}),t.a=function(e){var t=e.blog,r=Object(a.useState)({readonly:!0,toolbar:!1});r[0],r[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"jsx-980006982",children:Object(o.jsx)(M,{children:Object(o.jsxs)("div",{className:"jsx-980006982 card-blog",children:[Object(o.jsx)("div",{className:"jsx-980006982 card-img",children:Object(o.jsx)(M.Img,{variant:"top",src:t.imagenes[1].url,className:"card-img-blog"})}),Object(o.jsxs)(M.Body,{children:[Object(o.jsx)(M.Title,{children:Object(o.jsx)("div",{className:"jsx-980006982 card-blog-title",children:t.blog.titulo})}),Object(o.jsx)(M.Text,{children:Object(o.jsx)("div",{className:"jsx-980006982 card-blog-descripcion",children:t.blog.descripcion})})]}),Object(o.jsx)(M.Footer,{children:Object(o.jsx)(c.a,{href:"/blog/[blog]?id=".concat(t.blog._id),as:"?"===t.blog.titulo.charAt(t.blog.titulo.length-1)?"/blog/".concat(t.blog.titulo.replace("?",""),"-?id=").concat(t.blog._id):"/blog/".concat(t.blog.titulo,"?id=").concat(t.blog._id),children:Object(o.jsx)("a",{className:"jsx-980006982  link-a text-center hover-efect-letter leer-mas",children:"Leer m\xe1s \u2192"})})})]})})}),Object(o.jsx)(i.a,{id:"980006982",children:[".box-banner-blog.jsx-980006982{height:15rem;background:url(../../assets/blog/blog.png) no-repeat center;background-size:cover;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",'.text-title-blog.jsx-980006982{font-family:"Clicker Script",cursive;font-size:2.5rem;margin:0rem 1rem 0rem;color:#fff;text-align:center;}','.subtitle-dark-blog.jsx-980006982{color:#575756;font-family:"mont-regular" !important;font-size:1.7rem;text-align:center;margin:0rem 15rem;margin-bottom:-12rem;margin-top:3rem;}',".box-card-group.jsx-980006982{position:relative;top:16rem;z-index:10;}",".card{border:0px solid rgba(0,0,0,0.125);margin-bottom:1rem !important;}",'.card-blog.jsx-980006982{text-align:center;background:#ffffff;box-shadow:0px 14px 20px -5px rgba(0,0,0,0.2);border-radius:20px;font-family:"mont-regular" !important;border-radius:1.28rem !important;width:22rem;height:auto;}',".card-img.jsx-980006982{width:12rem;height:12rem;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:1rem;}",".card-img img{height:100% !important;width:auto !important;}",".box-green-blog.jsx-980006982{position:relative;}",'.text-bottom-blog.jsx-980006982{color:#abc0a3;font-family:"mont-regular";font-size:1.7rem;text-align:center;position:absolute;bottom:16%;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}','.text-bottom-blog.jsx-980006982 b.jsx-980006982{font-family:"mont-semibold";}','.font-mont-regular.jsx-980006982{font-family:"mont-regular";}','.box-blog-especifico.jsx-980006982{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:4rem 9rem;font-family:"mont-regular" !important;}',".box-autor-blog.jsx-980006982{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:left;-webkit-justify-content:left;-ms-flex-pack:left;justify-content:left;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:7rem;width:20%;}",".box-autor-text-blog.jsx-980006982{padding-left:1rem;}",'.box-articulo-blog.jsx-980006982{width:80%;font-family:"mont-regular";}','.text-autor.jsx-980006982{color:#575756;font-style:normal;font-weight:bold;font-size:1.2rem;font-family:"mont-heavy";}',".text-fecha.jsx-980006982{color:#556ea1;font-style:normal;font-weight:normal;font-size:1rem;}",".box-articulo-title-blog.jsx-980006982{padding:0rem 2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",'.box-articulo-title-blog.jsx-980006982 h2.jsx-980006982{font-family:"mont-semibold";font-style:normal;font-weight:bold;text-align:center;color:#575756;margin:2rem 0rem;}',".star-blog.jsx-980006982{color:#febf41;}",".nube1.jsx-980006982{position:absolute;top:70%;left:2%;}",".nube2.jsx-980006982{position:absolute;top:50%;right:2%;}",".nube3.jsx-980006982{position:absolute;top:140%;right:3%;}",".box-articulo-img-principal-blog.jsx-980006982{position:relative;z-index:2;}",".jodit-wysiwyg::-webkit-scrollbar{-webkit-appearance:none;}",".jodit-wysiwyg::-webkit-scrollbar:vertical{width:10px;}",".jodit-wysiwyg::-webkit-scrollbar-button:increment,.jodit-wysiwyg::-webkit-scrollbar-button{display:none;}",".jodit-wysiwyg::-webkit-scrollbar:horizontal{height:10px;}",".jodit-wysiwyg::-webkit-scrollbar-thumb{background-color:#797979;border-radius:20px;border:2px solid #f1f2f3;}",".jodit-wysiwyg::-webkit-scrollbar-track{border-radius:10px;}",".jodit-wysiwyg:not(.jodit_inline){border:none !important;}",".jodit-container:not(.jodit_inline) .jodit-wysiwyg{padding:0px;overflow-x:hidden !important;}",".jodit-container:not(.jodit_inline){border:none !important;}",'.box-blog-general.jsx-980006982{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:3rem 9rem;font-family:"mont-regular" !important;}','.card-title.jsx-980006982{font-family:"mont-semibold";}','.card-text.jsx-980006982{font-family:"mont-light";}','.jodit.jsx-980006982,.jodit.jsx-980006982 *.jsx-980006982,.jodit-container.jsx-980006982,.jodit-container.jsx-980006982 *.jsx-980006982 span.jsx-980006982{font-family:"mont-regular" !important;}','.jodit-container * span{font-family:"mont-regular" !important;}','.font-semibold-mont.jsx-980006982{font-family:"mont-semibold";}',".jodit-status-bar{display:none !important;}",".jodit-container{height:10rem !important;min-width:100px;}","@media (min-width:2449px){.card-blog.jsx-980006982{width:18rem;height:auto;}}",'@media (min-width:1800px){.box-blog-general.jsx-980006982{padding:2rem 0rem;}.subtitle-dark-blog.jsx-980006982{color:#575756;font-family:"mont-semibold";font-size:1.3rem;text-align:center;margin:0rem 20rem;margin-bottom:-12rem;margin-top:3rem;}.container.jsx-980006982,.container-lg.jsx-980006982,.container-md.jsx-980006982,.container-sm.jsx-980006982,.container-xl.jsx-980006982{max-width:1600px !important;}.card-title.jsx-980006982{font-size:1rem !important;}.card-text.jsx-980006982{font-size:0.8rem;}.nube1.jsx-980006982{top:50%;left:20%;}.nube2.jsx-980006982{top:80%;right:15%;}.nube3.jsx-980006982{top:140%;right:15%;}}','@media (max-width:768px){.box-blog-especifico.jsx-980006982{padding:1rem 1.5rem 3rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.box-autor-blog.jsx-980006982{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:left;-webkit-justify-content:left;-ms-flex-pack:left;justify-content:left;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:7rem;width:100%;}.box-autor-text-blog.jsx-980006982{padding-left:1rem;}.box-articulo-blog.jsx-980006982{width:100%;}.text-autor.jsx-980006982{font-size:1.1rem;margin-bottom:0 !important;}.text-fecha.jsx-980006982{font-size:0.8rem;}.box-articulo-title-blog.jsx-980006982 h2.jsx-980006982{font-size:1.3rem;}.star-blog.jsx-980006982{color:#febf41;font-size:1.2rem;}.nube1.jsx-980006982{position:absolute;top:160%;left:-5%;}.nube2.jsx-980006982{position:absolute;top:90%;right:1%;}.nube3.jsx-980006982{position:absolute;top:350%;right:1%;}.box-banner-blog.jsx-980006982{height:12rem;}.text-title-blog.jsx-980006982{font-size:2rem;margin:0rem 0.5rem 0rem;}.ondas.jsx-980006982{width:3rem;}.box-banner-blog.jsx-980006982{height:12rem;}.text-title-blog.jsx-980006982{font-family:"Clicker Script",cursive;font-size:2rem;}.subtitle-dark-blog.jsx-980006982{font-size:1rem;text-align:center;margin:0rem;margin-bottom:0rem;margin-top:2rem;}.box-card-group.jsx-980006982{position:relative;top:3rem;z-index:10;}.card-blog.jsx-980006982{text-align:center;background:#ffffff;box-shadow:0px 14px 20px -5px rgba(0,0,0,0.2);border-radius:20px;font-family:"Montserrat",sans-serif;border-radius:1.28rem !important;width:100%;}.box-green-blog-img-fondo.jsx-980006982{position:absolute;height:30rem;bottom:10%;}.text-bottom-blog.jsx-980006982{font-size:1rem;padding-bottom:2rem;}.box-blog-general.jsx-980006982{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:2rem 1.5rem 12rem;}.card-deck.jsx-980006982{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column !important;-ms-flex-direction:column !important;flex-direction:column !important;}.card-blog-title.jsx-980006982{font-size:1rem;font-weight:bold;}.card-blog-descripcion.jsx-980006982{font-size:0.8rem;}.leer-mas.jsx-980006982{font-size:1rem;}}',"@media (max-width:420px){.nube1.jsx-980006982{position:absolute;top:100%;left:-15%;}.nube2.jsx-980006982{position:absolute;top:50%;right:1%;}.nube3.jsx-980006982{position:absolute;right:1%;width:5rem;top:auto;bottom:-150%;}.card-blog.jsx-980006982{width:100%;}}"]})]})}},Vvt1:function(e,t,r){e.exports=r("a6RD")},a6RD:function(e,t,r){"use strict";var o=r("lSNA");function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.__esModule=!0,t.noSSR=s,t.default=function(e,t){var r=a.default,o={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?o.loader=function(){return e}:"function"===typeof e?o.loader=e:"object"===typeof e&&(o=i(i({},o),e));if(o=i(i({},o),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(o.render=function(t,r){return e.render(r,t)}),e.modules)){r=a.default.Map;var n={},l=e.modules();Object.keys(l).forEach((function(e){var t=l[e];"function"!==typeof t.then?n[e]=t:n[e]=function(){return t.then((function(e){return e.default||e}))}})),o.loader=n}o.loadableGenerated&&delete(o=i(i({},o),o.loadableGenerated)).loadableGenerated;if("boolean"===typeof o.ssr){if(!o.ssr)return delete o.ssr,s(r,o);delete o.ssr}return r(o)};l(r("q1tI"));var a=l(r("2qu3"));function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){return delete t.webpack,delete t.modules,e(t)}},jwwS:function(e,t,r){"use strict";var o;t.__esModule=!0,t.LoadableContext=void 0;var n=((o=r("q1tI"))&&o.__esModule?o:{default:o}).default.createContext(null);t.LoadableContext=n},uG1v:function(e,t,r){"use strict";var o=r("YdCC");t.a=Object(o.a)("card-deck")}}]);