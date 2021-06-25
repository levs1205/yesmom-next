import React from 'react'
import Image from "next/image";

const BannerTienda = () => {

return (
    <>
        <div className="fade-in animated">
            <section fluid="true" className="box-banner">
                <div className="banner">
                    {/* <Image
                        src="/image/tienda/image-banner.svg"
                        alt="Banner secundario de productos"
                        className="image"
                        width={1200}
                        height={800}
                    /> */}
                    <div className="all-content">
                        <div className="image-baby">
                            <Image
                                src="/image/tienda/image-mobile-banner.png"
                                alt="baby plaza"
                                width="290px"
                                height="290px"
                            />
                        </div>
                        <div className="other-content">
                            <div className="contenedor-text-banner">
                                <h5 className="text-banner">¡Compra en Baby Plaza Store y obtén un descuento para la primero sesión de fotos de tu bebé!</h5>
                            </div>
                            <div className="arrow">
                                <Image
                                    src="/image/tienda/arrow.svg"
                                    alt="flecha"
                                    width="100"
                                    height="240"
                                />
                            </div>
                            <div className="img-discount center">
                                <Image 
                                    src="/image/tienda/discount.png"
                                    alt="descuento"
                                    width="250px"
                                    height="150px"
                                />
                            </div>
                        </div>
                    </div>
    
                </div>
            </section>
        </div>
        <style jsx>
            {`  
                .image-baby{
                    width:auto;
                }
                .all-content{
                    height:100%;
                    position:relative;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    flex-direction:column;
                }
                .box-banner{
                    height:76rem;
                    background-image: url("../../../image/tienda/fondo-banner.svg");
                    background-color:#FEBF41;
                    background-size: cover;
                    background-repeat:no-repeat;
                    background-position:center center;
                }
                .banner{
                    height:100%;
                    padding-top:8rem;
                }
                .contenedor-text-banner{
                    margin:2rem 4rem;
                }
                .text-banner{
                    font-family:"mont-semibold"!important;
                    font-size:2rem;
                    line-height: 2.8rem;
                    text-align:center;
                    color:#556EA1;
                }
                .arrow{
                    position:absolute;
                    top:55%;
                    left:-2.5rem;
                }
                .other-content{
                    max-width:100%;
                    display:flex;
                    flex-direction:column;
                }
                .center{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                }
              
                
                @media(min-width:480px){
                    .arrow{
                        top:52.5%;
                    }
                }
                @media(min-width:768px){
                    
                    .box-banner{
                        height:35rem;
                        background-image: url("../../../image/tienda/fondo-banner-desktop.svg");
                        background-size: cover;
                        background-repeat:no-repeat;
                        background-position:center center;
                        width:100%;
                    }
                    .contenedor-text-banner{
                        margin:2rem 0;
                    }
                    .text-banner{
                        font-size:2.2rem;
                    }
                    .all-content{
                        flex-direction: row;
                        padding:2rem;
                    }
                    .banner{
                        padding-top:0;
                    }
                    .other-content{
                        position:relative;
                        width:40%;
                        margin-left:4rem;
                    }
                    .arrow{
                        position:absolute;
                        top:17.5%;
                        left:-4rem;
                    }
                    .contenedor-text-banner{
                        margin-bottom:0;
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
    )
}

export default BannerTienda;