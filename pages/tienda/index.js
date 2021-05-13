import React, { Component, useEffect, useState } from "react";
import AppLayout from '../../components/AppLayout'
import Head from "next/head";
import axios from 'axios';
import { CardDeck, Carousel, Col, Container, Row } from "react-bootstrap";
import CardProduct from "../../components/CardProduct";
import SidebarProducto from "../../components/tienda/SidebarProducto";
import BannerTienda from "../../components/tienda/BannerTienda";

const Product = () => {

    const initialState = [
        {
            id: 1,
            image: '/image/tienda/banner1.svg'
        },
        {
            id: 2,
            image: '/image/tienda/banner1.svg'
        }
    ]

    const [banner, setBanner] = useState(initialState)


    const [respuesta, setRespuesta] = useState([]);
    useEffect(async () => {
        const consulta = await axios('https://fakestoreapi.com/products');
        setRespuesta(consulta.data);
    }, []);

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
                <Carousel className="box-carousel">
                    {banner.map(ban => (
                        <Carousel.Item className="carousel-item">
                            <img src={ban.image} alt=""/>
                            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Siula_Grande_072530032013.jpg/1200px-Siula_Grande_072530032013.jpg" alt=""/> */}
                        </Carousel.Item>
                    ))}
                </Carousel>
                <Container>
                    <Row>
                        <Col sm={3}>
                            <SidebarProducto/>
                        </Col>
                        <Col sm={9}>
                            <h4 className="text-title-tienda">
                                Lo + vendido
                            </h4>
                            <div className="box-product-general">
                                <div className="box-card-group">
                                    <CardDeck className="card-deck-h">
                                        {respuesta.map(cardProduct => (
                                            <CardProduct product={cardProduct} key={cardProduct.id}/>
                                        ))}
                                    </CardDeck>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <BannerTienda/>
                </Container>
            </div>
            <style jsx>
                {`
                .box-product-general {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    padding: 3rem 0rem;
                }
                .box-producto {
                    background-size: cover;
                    justify-content: left;
                    align-items: right;
                    padding-top: 5rem;
                    border-bottom: 1px solid #5A5A5A;
                }
                .text-title-tienda {
                    font-family: "mont-regular" !important;
                    font-size: 20px;
                    font-weight: 600;
                    margin: 3.5rem 0.5rem 0rem;
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
                    display: flex;
                }

                @media (min-width: 1024px) {
                    .box-product-general {
                        padding: 2rem 0rem;
                    }
                    .carousel-item{
                        max-height: 34rem !important;
                        margin-top: 0px !important;
                    }
                    .box-card-group {
                        position: relative;
                        top: 0rem;
                        z-index: 10;
                    }
                }
                @media (max-width: 1023px){

                }
                @media (max-width: 480px) {
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
                    .carousel-item{
                        max-height: 32rem !important;
                        margin-top: 0px !important;
                    }
                    .carousel-item img{
                        max-height: 32rem !important;
                        margin-top: 0px !important;
                    }
                }

                `}
            </style>
        </AppLayout>
    );
};

export default Product;
