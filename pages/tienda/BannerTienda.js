import React from 'react'
import Image from "next/image";

const BannerTienda = () => {

return (
    <>
        <div className="fade-in animated">
            <section fluid="true" className="box-banner">
                <div className="banner">
                    <div className="banner-image">
                        <Image
                            src="/image/tienda/img-banner.svg"
                            alt="Banner secundario de productos"
                            className="image"
                            width={500}
                            height={400}
                        />
                    </div>
                    <div className="banner-texto">
                        <h5>¡Compra en Baby Plaza Store y obtén un descuento para la primero sesión de fotos de tu bebé!</h5>
                        <div className="banner-texto-descuento">
                            <p>20% <span>DE DESCUENTO</span></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <style jsx>
            {`
            .banner {
                display:flex;
                padding: 50px 130px;
                justify-content:center;
                background-color: #FEBF41;
                margin: 25px auto;
            }
            .banner-image img{
                padding: 5px;
            }
            .banner-texto h5 {
                align-self: center;
                text-align: center;
                margin: 0px 90px 30px 90px;
                font-family: "mont-normal";
                color: #556EA1;

            }
            .banner-texto-descuento{
                text-align: center;
                padding: 1px 0px;
                background-color: #ffffff;
                margin: 0px 160px;
                font-weight: 700;
            }
            .banner-texto-descuento p{
                font-family: "mont-normal";
                color: #DC6A8D;
                font-weight: 800;
                font-size: 30px;
            }
            .banner-texto-descuento span{
                font-family: "mont-normal";
                color: #DC6A8D;
                font-weight: 800;
                font-size: 17px;
            }
            @media (min-width: 1024px) {

            }
            @media (max-width: 1023px){

            }
            @media (max-width: 480px) {

            }
            `}
        </style>
    </>
    )
}

export default BannerTienda;