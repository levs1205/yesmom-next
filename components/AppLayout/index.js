import React from "react";
import Footer from "./../Footer";
import Header from "./../Header";
import Head from "next/head";
import HeaderNuevo from "../HeaderNuevo";
import WsBtn from "../WsBtn";

const appLayout = ({ children }) => {
  return (
    <div className="box-yesmom">
      <Head>
        <title>yesmom</title>
        {/* <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/flatly/bootstrap.min.css"
        /> */}
        <meta name="description" content="esto es descripcion"></meta>
      </Head>
      {/* <Header></Header> */}
      <HeaderNuevo />
      <main>{children}</main>
      <WsBtn/>
      <Footer></Footer>
      <style jsx global>
        {`
          html {
            font-size: 0.98vw !important;
            font-family: "mont-heavy";
          }
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
              "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
              "Helvetica Neue", sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
              monospace;
          }

          @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&display=swap");
          @import url("https://fonts.googleapis.com/css2?family=Clicker+Script&display=swap");

          @font-face {
            font-family: "mont-heavy";
            src: url(/fonts/Mont-Heavy.otf);
          }

          @font-face {
            font-family: "omnes-bold";
            src: url(/fonts/OMNES-BOLD.OTF);
          }

          @font-face {
            font-family: "omnes-regular";
            src: url(/fonts/Omnes-Regular.otf);
          }

          @font-face {
            font-family: "mont-heavy";
            src: url(/fonts/Mont-Heavy.otf);
          }

          @font-face {
            font-family: "mont-thin";
            src: url(/fonts/Mont-Thin.otf);
          }

          @font-face {
            font-family: "mont-regular";
            src: url(/fonts/Mont-Regular.otf);
          }

          @font-face {
            font-family: "mont-semibold";
            src: url(/fonts/Mont-SemiBold.otf);
          }

          @font-face {
            font-family: "mont-light";
            src: url(/fonts/Mont-Light.otf);
          }

          .mt-views {
            padding-top: 0rem;
          }

          .w-80 {
            width: 80%;
          }
          .w-90 {
            width: 90%;
          }

          .sin-margin {
            margin-left: 0px !important;
            margin-right: 0px !important;
          }
          .pl-10 {
            padding-left: 6rem;
          }
          .title-fuxia {
            color: #ec608d;
            font-weight: 1000;
            font-size: 2.4rem;
            font-family: "mont-heavy";
            padding: 0 1rem;
            text-align: center;
          }
          .cl-fuxia {
            color: #ec608d;
          }
          .subtitle-dark {
            color: #575756;
            font-family: "mont-regular";
            font-size: 2rem;
          }

          .btn-yellow {
            background-color: #febf41;
            font-family: "omnes-bold";
            font-weight: 900;
            font-size: 1.4rem;
            color: #fff;
            padding: 1.5rem 0rem;
            margin: 2rem auto;
            width: 13rem;
            border-radius: 30px;
            text-align: center;
            line-height: 1.3rem;
            display: block;
            cursor: pointer;
          }

          .btn-yellow a {
            color: #fff !important;
          }
          .bg-fuxia {
            background: #ec608d !important;
          }

          .bg-verde {
            background-color: #c9dbc3 !important;
          }
          .bg-azul {
            background: #4b64a4 !important;
          }
          .bg-yellow {
            background-color: #febf41 !important;
          }

          .bg-gray {
            background-color: #575650 !important;
          }
           {
            /* @media (min-width: 576px) {
            .box-web {
              max-width: 900px !important;
            }
          }
          @media (min-width: 900px) {
            .box-web {
              max-width: 992px !important;
            }
          }
          @media (min-width: 992px) {
            .box-web {
              max-width: 1200px !important;
            }
          }
          @media (min-width: 1200px) {
            .box-web {
              max-width: 1500px !important;
            }
          } */
          }
          .box-yesmom {
            max-width: 1800px;
            width: 100%;
            margin: auto;
          }
          .link-a {
            color: #575756 !important;
            font-family: "mont-regular";
            font-size: 1.1rem;
            text-decoration: none !important;
          }
          .link-a b {
            font-family: "mont-heavy";
          }

          .view-desktop {
            display: block;
          }
          .view-mobile {
            display: none;
          }

          /* Efeccts hover focus  */
          .btn-efect {
            cursor: pointer;
            display: block;
            position: relative;
          }
          .btn-efect,
          .btn-efect::after {
            -webkit-transition: all 0.3s;
            -moz-transition: all 0.3s;
            -o-transition: all 0.3s;
            transition: all 0.3s;
          }
          .btn-efect::before,
          .btn-efect::after {
            background-color: #fff !important;
            content: "" !important;
            position: absolute;
            z-index: -1;
          }

          .btn-efect:hover {
            color: #ec608d;
            font-weight: 400;
            background-color: #fff !important;
            /* border: 1px solid #ec608d; */
          }

          .btn-efect::after {
            height: 100%;
            left: 0;
            top: 0;
            width: 0;
          }

          .btn-efect:hover:after {
            width: 100%;
          }

          /* hover-fuxia */
          .hover-fuxia {
            color: #fff !important;
            transition: all 0.5s;
            position: relative;
            text-decoration: none !important;
            cursor: pointer;
          }
          .hover-fuxia::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 999;
            background-color: rgba(214, 211, 211, 0.1);
            transition: all 0.3s;
          }
          .hover-fuxia:hover::before {
            opacity: 0;
            transform: scale(0.5, 0.5);
          }
          .hover-fuxia::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 6;
            opacity: 0;
            transition: all 0.3s;
            border: 1px solid #ec608d;
            transform: scale(1.2, 1.2);
            border-radius: 30px;
          }
          .hover-fuxia:hover::after {
            opacity: 1;
            transform: scale(1, 1);
          }

          /* hover-amarillo */
          .hover-amarillo {
            color: #fff !important;
            transition: all 0.7s;
            position: relative;
            text-decoration: none !important;
            cursor: pointer;
          }
          .hover-amarillo::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 999;
            background-color: rgba(214, 211, 211, 0.1);
            transition: all 0.3s;
          }
          .hover-amarillo:hover::before {
            opacity: 0;
            transform: scale(0.7, 0.7);
          }
          .hover-amarillo::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 6;
            opacity: 0;
            transition: all 0.3s;
            border: 1px solid #febf41;
            transform: scale(1.3, 1.3);
            border-radius: 30px;
          }
          .hover-amarillo:hover::after {
            opacity: 1;
            transform: scale(1, 1);
          }

          /* hover-verde */
          .hover-verde {
            color: #fff !important;
            transition: all 0.7s;
            position: relative;
            text-decoration: none !important;
            cursor: pointer;
          }
          .hover-verde::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 999;
            background-color: rgba(214, 211, 211, 0.1);
            transition: all 0.3s;
          }
          .hover-verde:hover::before {
            opacity: 0;
            transform: scale(0.7, 0.7);
          }
          .hover-verde::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 6;
            opacity: 0;
            transition: all 0.3s;
            border: 1px solid #c9dbc3;
            transform: scale(1.3, 1.3);
            border-radius: 30px;
          }
          .hover-verde:hover::after {
            opacity: 1;
            transform: scale(1, 1);
          }

          /* hover-azul */
          .hover-azul {
            color: #fff !important;
            transition: all 0.7s;
            position: relative;
            text-decoration: none !important;
            cursor: pointer;
          }
          .hover-azul::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 999;
            background-color: rgba(214, 211, 211, 0.1);
            transition: all 0.3s;
          }
          .hover-azul:hover::before {
            opacity: 0;
            transform: scale(0.7, 0.7);
          }
          .hover-azul::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 6;
            opacity: 0;
            transition: all 0.3s;
            border: 1px solid #4b64a4;
            transform: scale(1.3, 1.3);
            border-radius: 30px;
          }
          .hover-azul:hover::after {
            opacity: 1;
            transform: scale(1, 1);
          }

          .hover-efect-letter {
            text-decoration: none;
            position: relative;
            transition: all 300ms ease-in-out;
            cursor: pointer;
          }

          .hover-efect-letter:before,
          .hover-efect-letter:after {
            content: "";
            position: absolute;
            transition: all 250ms ease-in-out;
            pointer-events: none;
          }

          .hover-efect-letter:after {
            width: 100%;
            height: 1px;
            background: #575756;
            left: 0;
            bottom: -5px;
            transform: scale(0);
          }

          .hover-efect-letter:hover:after {
            transform: scale(1.1);
          }
          @media (min-width: 1800px) {
            .subtitle-dark {
              font-size: 1.2rem;
            }
          }

          @media (max-width: 768px) {
            html {
              font-size: 4.6vw !important;
            }
            .view-desktop {
              display: none;
            }
            .view-mobile {
              display: block;
            }

            .mt-views {
              padding-top: 5.5rem;
            }

            .title-fuxia {
              font-size: 1.2rem;
            }

            .subtitle-dark {
              font-size: 1rem;
            }

            .btn-yellow {
              font-size: 1rem;
              padding: 1.2rem 0rem;
              width: 10rem;
            }
            .link-a {
              font-size: 0.8rem;
            }
          }

          /*  ****************** ANIMACIONES ************************ */

          .heartbeat {
            -webkit-animation: heartbeat 1.5s ease-in-out infinite both;
            animation: heartbeat 1.5s ease-in-out infinite both;
          }

          @-webkit-keyframes heartbeat {
            from {
              -webkit-transform: scale(1);
              transform: scale(1);
              -webkit-transform-origin: center center;
              transform-origin: center center;
              -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
            }
            10% {
              -webkit-transform: scale(0.91);
              transform: scale(0.91);
              -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
            }
            17% {
              -webkit-transform: scale(0.98);
              transform: scale(0.98);
              -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
            }
            33% {
              -webkit-transform: scale(0.87);
              transform: scale(0.87);
              -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
            }
            45% {
              -webkit-transform: scale(1);
              transform: scale(1);
              -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
            }
          }
          @keyframes heartbeat {
            from {
              -webkit-transform: scale(1);
              transform: scale(1);
              -webkit-transform-origin: center center;
              transform-origin: center center;
              -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
            }
            10% {
              -webkit-transform: scale(0.91);
              transform: scale(0.91);
              -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
            }
            17% {
              -webkit-transform: scale(0.98);
              transform: scale(0.98);
              -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
            }
            33% {
              -webkit-transform: scale(0.87);
              transform: scale(0.87);
              -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
            }
            45% {
              -webkit-transform: scale(1);
              transform: scale(1);
              -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
            }
          }

          .flicker-1 {
            -webkit-animation: flicker-1 2s linear infinite both;
            animation: flicker-1 2s linear infinite both;
          }

          .fade-in {
            -webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1)
              both;
            animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
          }
          @-webkit-keyframes fade-in {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
          @keyframes fade-in {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          .animated {
            -webkit-animation-duration: 3s;
            animation-duration: 3s;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
          }

          .tilt-in-fwd-tr {
            -webkit-animation: tilt-in-fwd-tr 0.6s
              cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
            animation: tilt-in-fwd-tr 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
              both;
          }

          @-webkit-keyframes tilt-in-fwd-tr {
            0% {
              -webkit-transform: rotateY(20deg) rotateX(35deg)
                translate(300px, -300px) skew(-35deg, 10deg);
              transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px)
                skew(-35deg, 10deg);
              opacity: 0;
            }
            100% {
              -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0)
                skew(0deg, 0deg);
              transform: rotateY(0) rotateX(0deg) translate(0, 0)
                skew(0deg, 0deg);
              opacity: 1;
            }
          }
          @keyframes tilt-in-fwd-tr {
            0% {
              -webkit-transform: rotateY(20deg) rotateX(35deg)
                translate(300px, -300px) skew(-35deg, 10deg);
              transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px)
                skew(-35deg, 10deg);
              opacity: 0;
            }
            100% {
              -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0)
                skew(0deg, 0deg);
              transform: rotateY(0) rotateX(0deg) translate(0, 0)
                skew(0deg, 0deg);
              opacity: 1;
            }
          }
          .kenburns-top {
            -webkit-animation: kenburns-top 5s ease-out both;
            animation: kenburns-top 5s ease-out both;
          }
          
          @-webkit-keyframes kenburns-top {
            0% {
              -webkit-transform: scale(1) translateY(0);
              transform: scale(1) translateY(0);
              -webkit-transform-origin: 50% 16%;
              transform-origin: 50% 16%;
            }
            100% {
              -webkit-transform: scale(1.25) translateY(-15px);
              transform: scale(1.25) translateY(-15px);
              -webkit-transform-origin: top;
              transform-origin: top;
            }
          }
          @keyframes kenburns-top {
            0% {
              -webkit-transform: scale(1) translateY(0);
              transform: scale(1) translateY(0);
              -webkit-transform-origin: 50% 16%;
              transform-origin: 50% 16%;
            }
            100% {
              -webkit-transform: scale(1.25) translateY(-15px);
              transform: scale(1.25) translateY(-15px);
              -webkit-transform-origin: top;
              transform-origin: top;
            }
          }
        `}
      </style>
    </div>
  );
};

export default appLayout;
