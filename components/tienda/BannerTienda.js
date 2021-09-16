import React from "react";
// import Image from "next/image";

const BannerTienda = () => {
  return (
    <>
      <div className="fade-in animated">
        <section fluid="true" className="">
          <div className="">
            <img
              src="/image/tienda/banner-page-tienda.png"
              alt="Banner secundario de productos"
              className="w-100"
            />
          </div>
        </section>
      </div>
      <style jsx>
        {`
          .image-baby {
            width: auto;
          }
          .all-content {
            height: 100%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          .box-banner {
            height: 76rem;
            background-image: url("../../../image/tienda/fondo-banner.svg");
            background-color: #febf41;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
          }
          .banner {
            height: 100%;
            padding-top: 8rem;
          }
          .contenedor-text-banner {
            margin: 2rem 4rem;
          }
          .text-banner {
            font-family: "mont-semibold" !important;
            font-size: 2rem;
            line-height: 2.8rem;
            text-align: center;
            color: #556ea1;
          }
          .arrow {
            position: absolute;
            top: 55%;
            left: -2.5rem;
          }
          .other-content {
            max-width: 100%;
            display: flex;
            flex-direction: column;
          }
          .center {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          @media (min-width: 480px) {
            .arrow {
              top: 52.5%;
            }
          }
          @media (min-width: 768px) {
            .box-banner {
              height: 35rem;
              background-image: url("../../../image/tienda/fondo-banner-desktop.svg");
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center center;
              width: 100%;
            }
            .contenedor-text-banner {
              margin: 2rem 0;
            }
            .text-banner {
              font-size: 2.2rem;
            }
            .all-content {
              flex-direction: row;
              padding: 2rem;
            }
            .banner {
              padding-top: 0;
            }
            .other-content {
              position: relative;
              width: 40%;
              margin-left: 4rem;
            }
            .arrow {
              position: absolute;
              top: 17.5%;
              left: -4rem;
            }
            .contenedor-text-banner {
              margin-bottom: 0;
            }
          }

          /* @media (min-width: 1024px) {

            }
            @media (max-width: 1023px){

            }
            @media (max-width: 480px) {

            } */
        `}
      </style>
    </>
  );
};

export default BannerTienda;
