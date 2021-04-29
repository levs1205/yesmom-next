import React, { Component } from "react";
import AppLayout from '../../components/AppLayout'
import Image from "next/image";
import Head from "next/head";
import { CardDeck, Container } from "react-bootstrap";
import CardProduct from "../../components/CardProduct";

const index = () => {
    return (
        <AppLayout>
            <Head>
                <title>YesMom - Tienda</title>
                <meta name="description" content="YesMom es ..."></meta>
                <meta property="og:type" content="website" />
                <meta property="og:title" content="YesMom - Tienda" />
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
                <meta name="twitter:title" content="YesMom - Tienda" />
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
                <meta name="twitter:site" content="@JudithCristinaQ" />
                <meta name="twitter:creator" content="@JudithCristinaQ" />
            </Head>
            <div className="box-producto">
                <h4 className="text-title-tienda">
                    Lo + vendido
                </h4>
                <div className="box-product-general">
                    <div className="box-card-group">
                        <Container>
                            <CardDeck style={{justifyContent:"center"}}>
                                <CardProduct/>
                            </CardDeck>
                        </Container>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                .box-product-general {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    padding: 3rem 9rem;
                    font-family: "mont-regular";
                }
                .box-producto {
                    background-size: cover;
                    justify-content: left;
                    align-items: right;
                    padding-top: 5rem;
                    border-bottom: 1px solid #5A5A5A;
                }
                .text-title-tienda {
                    font-family: "Arial", cursive;
                    font-size: 20px;
                    font-weight: 600;
                    margin: 0.5rem 0.5rem;
                    color: #5A5A5A;
                    border-bottom: 1px solid #5A5A5A;
                    padding: 0px 0px 5px 0px;
                }
                .card-product{
                    height: 25rem
                }
                .box-card-group {
                    position: relative;
                    top: 0rem;
                    z-index: 10;
                }
                @media (min-width: 1800px) {
                    .box-product-general {
                        padding: 2rem 0rem;
                    }
                }
                @media (max-width: 768px) {
                    .box-product-general {
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        flex-direction: column;
                        padding: 2rem 1.5rem 0rem;
                    }
                    .box-card-group {
                        position: relative;
                        top: 0rem;
                        z-index: 10;
                    }
                }
                `}
            </style>
        </AppLayout>
    );
};

export default index;
