import React from "react";
import AppLayout from "../../components/AppLayout";
import Head from "next/head";
import Image from 'next/image';

import { Container } from "react-bootstrap";
import CardProduct from "../../components/CardProduct";
import SidebarTienda from "../../components/perfil-tienda/SidebarPerfilTienda";


const Product = () => {



  return (
    <AppLayout>
      <Head>
        <title>YesMom - Perfil-tienda</title>
        <meta name="description" content="YesMom es ..."></meta>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="YesMom - Perfil-Tienda" />
        <meta
          property="og:description"
          content="Yes Mom es una plataforma digital peruana que ayuda a las
                        mamis a disfrutar su maternidad sin preocupaciones. Queremos
                        ser la marca aliada que todos los papás estuvieron buscando,
                        una página web que reúne en un solo lugar todo lo que
                        necesitan para la llegada de su bebé y acompañar su
                        crecimiento."
        />
        <meta
          property="og:image"
          itemprop="image"
          content="https://yesmom.vercel.app/image/about-header.png"
        />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="855" />
        <meta property="og:site_name" content="Yes Mom" />
        {/* <meta property="og:url" content={`${user.id}`} />  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="YesMom - Perfil-Tienda" />
        <meta
          name="twitter:description"
          content="Yes Mom es una plataforma digital peruana que ayuda a las
                        mamis a disfrutar su maternidad sin preocupaciones. Queremos
                        ser la marca aliada que todos los papás estuvieron buscando,
                        una página web que reúne en un solo lugar todo lo que
                        necesitan para la llegada de su bebé y acompañar su
                        crecimiento."
        />
        <meta
          name="twitter:image"
          content="https://yesmom.vercel.app/image/about-header.png"
        />
      </Head>
      <div className="box-producto">
        <div className="banner-baby">
            <img className="show-mobile img-baby" src="/image/perfil-tienda/banner-baby-mobile.png"/>
            <img className="show-desktop img-baby" src="/image/perfil-tienda/banner-baby-desktop.png"/>
            <div className="box-title-ondas">
                <Image
                    src="/image/onda-blanca.svg"
                    alt="ondas"
                    className="ondas"
                    width={50}
                    height={50}
                />
                <h4 className="text-title heartbeat">Tienda Online</h4>
                <Image
                    src="/image/onda-blanca.svg"
                    alt="ondas"
                    className="ondas"
                    width={50}
                    height={50}
                />
            </div>
        </div>
        <Container fluid="true">
          <div className="all-content">
            <div className="contenedor">
                <div className="sidebar show-desktop">
                  <SidebarTienda />
                </div>
                <div className="products">
                    <div className="inline-desktop">
                        <h4 className="text-title-tienda">Solo en Baby Plaza Store</h4>
                        <div className="show-mobile">
                                <hr />
                        </div>
                        <div className="container-selects">
                                <div className="show-mobile">
                                    <select>
                                        <option>Mostrar del 1 al 20</option>
                                        <option>Mostrar del 1 al 20</option>
                                        <option>Mostrar del 1 al 20</option>
                                    </select>
                                </div>
                                <div className="show-desktop">
                                    <p className="show-quantity-desktop">Mostrar del 1 al 20 de 100</p>
                                </div>
                                <select>
                                    <option>Ordenar por </option>
                                    <option>Ordenar por </option>
                                    <option>Ordenar por </option>
                                </select>
                        </div>
                    </div>
                  <div className="all-products">
                      <CardProduct />
                      <CardProduct discount/>
                      <CardProduct />
                      <CardProduct />
                      <CardProduct discount/>
                      <CardProduct />
                      <CardProduct />
                      <CardProduct discount/>
                      <CardProduct />
                      <CardProduct />
                      <CardProduct discount/>
                      <CardProduct />
                  </div>
                </div>
            </div>
            <div className="box-pagination">
                <div className="container-pages">
                    <div className="page page-selected">
                        1
                    </div>
                    <div className="page">
                        2
                    </div>
                    <div className="page">
                        3
                    </div>
                    <div className="page">
                        4
                    </div>
                    
                    <div className="next-page">
                        <svg width="15" height="15" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.98431 10.0157C9.98496 10.3489 9.86892 10.6718 9.65632 10.9284L2.52594 19.4848C2.28388 19.7761 1.93604 19.9592 1.55895 19.994C1.18186 20.0287 0.806401 19.9123 0.515172 19.6702C0.223944 19.4282 0.0408018 19.0803 0.00603441 18.7032C-0.0287329 18.3261 0.0877224 17.9507 0.329782 17.6595L6.7186 10.0157L0.557955 2.37192C0.439497 2.22605 0.351035 2.05821 0.297654 1.87804C0.244274 1.69787 0.227027 1.50893 0.246905 1.32207C0.266784 1.13521 0.323394 0.954128 0.413485 0.789221C0.503576 0.624315 0.62537 0.478838 0.771866 0.361155C0.918497 0.230555 1.09052 0.131643 1.27715 0.0706176C1.46379 0.00959199 1.66102 -0.01223 1.85648 0.00651161C2.05194 0.0252551 2.24143 0.0841617 2.41307 0.179541C2.5847 0.274921 2.73479 0.404722 2.85394 0.560806L9.74188 9.11726C9.92088 9.3812 10.0062 9.69753 9.98431 10.0157Z" fill="#556EA1"/>
                        </svg>
                    </div>
                </div>
            </div>
          </div>
          
        </Container>
      </div>
      <style jsx>
        {`

            hr{
                margin:0;
                border-top:3px solid rgba(0,0,0,.1);
            }
            .contenedor{
                padding:0 1.5rem;
                display:flex;
                justify-content:space-between;
            }
            .banner-baby{
                position:relative;
            }
            .img-baby{
                width:100%;
            }
            .box-title-ondas{
                position:absolute;
                display:flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                top:0;
                left:0;
                bottom:0;
                right:0;
            }
            .text-title {
                font-family: "Clicker Script", cursive;
                font-size: 3em;
                margin: 0rem 1rem 0rem;
                color: #FFFFFF;
            }

            .show-desktop{
                display:none;
            }
            .all-content{
                margin-bottom:8rem;
            }
            .box-producto {
                background-size: cover;
                justify-content: left;
                align-items: right;
                padding-top: 8rem;
                border-bottom: 1px solid #5a5a5a;
            }
            .text-title-tienda {
                font-family: "mont-semibold" !important;
                font-size: 2rem;
                font-weight: 600;
                margin: 3.5rem 0.5rem 0rem;
                color: #5a5a5a;
                /* border-bottom: 0.5px solid #575650; */
                padding: 0px 0px 5px 0px;
            }
            .products{
                flex-basis:100%;
            }
            
            .all-products{
                padding:3rem 0;
                display:flex;
                justify-content:space-between;
                align-items:center;
                flex-wrap:wrap;
            }
            .container-selects{
                display:flex;
                align-items:center;
            }
            select{
                cursor:pointer;
                border: 1px solid #556EA1;
                box-sizing: border-box;
                border-radius: 15px;
                outline:none;
                font-family:"mont-regular"!important;
                font-size:1.3rem;
                color:#556EA1;
                padding:1rem 4rem 1rem 1rem;
                margin:2rem 1rem 0 0;
                /** */
                background: url("https://i.ibb.co/7WKxh8s/image.png") no-repeat right #ffffff;
                background-size:1.25rem;
                -webkit-appearance: none;
                -moz-appearance:none;
                appearance:none;
                background-position-x: 92.5%;
            }
            option{
                font-size:1.3rem;
            }
            .next-page{
                margin-top:-2.5px;
            }
            .page,.next-page{
                
                cursor:pointer;
                font-family:"mont-regular";
                font-size:1.8rem;
                color: #556EA1;
                padding:0.8rem 1.8rem;
            }
            .page:hover{
                color:#FFFFFF;
                background: #DC6A8D;
                border-radius:50%;
            }
            .page-selected{
                color:#FFFFFF;
                background: #DC6A8D;
                border-radius:50%;
            }
            .box-pagination{
                display:flex;
                justify-content:center;
                align-items:center;
            }
            .container-pages{
                display:flex;
                align-items:center;
            }
            .show-quantity-desktop{
                font-family:"mont-regular";
                font-weight:500;
                font-size:1.2rem;
                color:#5a5a5a;
                margin:0 1rem 0 0;
            }


            
            @media(min-width:480px){
                .container-selects select, option{
                    font-size:1.5rem;
                }
                .text-title{
                    font-size:3.5rem;
                }
            }

            @media (min-width:768px){
                .box-producto{
                    padding-top:8.4rem;
                }
                .all-products{
                    padding-top:0;
                }
                .show-mobile{
                    display:none;
                }
                .show-desktop{
                    display:flex;
                }
                .inline-desktop{
                    display:flex;
                    align-items:center;
                    justify-content:space-between;
                }
                .sidebar{
                    flex-basis:20%;
                }
                .products{
                    flex-basis:75%;
                }
                .f-right{
                    justify-content:flex-end;
                }
                .contenedor{
                    padding-left:2.5rem;
                    padding-right:2.5rem;
                    margin-bottom:5rem;
                }
                .text-title-tienda{
                    font-size:1.8rem;
                }
                .text-title{
                    font-size:4rem;
                }
                .container-selects{
                    margin-top:3.5rem;
                }
                select{
                    margin:0;
                    border-radius:10px;
                }
            }

            @media(min-width:1024px){
                .sidebar{
                    flex-basis:30%;
                }
                .box-producto{
                    padding-top:11rem;
                }
                .inline-desktop{
                    flex-direction:row;
                    align-items:center;
                }
                .contenedor{
                    padding-left:8rem;
                    padding-right:8rem;
                } 
                .show-quantity-desktop{
                    font-size:1.5rem;
                }
                .text-title{
                    font-size:5rem;
                }
                select{
                    padding-right: 5rem ;
                }

            }
            @media(min-width:1280px){

                .text-title{
                    font-size:6rem;
                }
                .text-title-tienda{
                    font-size:3rem;
                }
                
                select{
                    padding-right:6rem;
                }


            }
        `}
      </style>
    </AppLayout>
  );
};

export default Product;
