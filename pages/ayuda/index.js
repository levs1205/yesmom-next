import Head from "next/head";
import React, { Component, useEffect, useState } from "react";
import { CardDeck, Col, Container, Row } from "react-bootstrap";
import appLayout from "../../components/AppLayout";
import CardProduct from "../../components/CardProduct";
import BannerTienda from "../../components/tienda/BannerTienda";
import SidebarAyuda from "../../components/Ayuda/SidebarAyuda";

const Ayuda = () => {
    return (
        <appLayout>
            <Head>
                <title>YesMom - Ayuda</title>
                <meta name="description" content="YesMom es ..."></meta>
                <meta property="og:type" content="website" />
                <meta property="og:title" content="YesMom - Ayuda" />
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
                <meta name="twitter:title" content="YesMom - Ayuda" />
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
            <div className="box-ayuda">
                <Container fluid="true">
                    <Row>
                        <Col sm={3}>
                            <SidebarAyuda />
                        </Col>
                        <Col sm={9}>
                            <div className="container-ayuda">
                                <h4 className="text-title-ayuda">Tengo un registro</h4>
                                <h4 className="text-subtitle-ayuda">Aquí encontrarás información sobre el registro y su proceso</h4>
                                <div className="box-ayuda">
                                    <div className="box-group-ayuda">
                                        <h5 className="title-group-ayuda">Construyendo su registro</h5>
                                        <Row>
                                            <Col sm={6}>
                                                <ul>
                                                    <li><a href="">¿Cómo empiezo a crear mi registro?</a></li>
                                                </ul>
                                                <ul>
                                                    <li><a href="">¿Cuánto tiempo permanecerá activo mi registro?</a></li>
                                                </ul>
                                                <ul>
                                                    <li><a href="">¿Yes Mom funciona como todas las tiendas?</a></li>
                                                </ul>
                                            </Col>
                                            <Col sm={6}>
                                                <ul>
                                                    <li><a href="">¿Cómo agrego otro registro?</a></li>
                                                </ul>
                                                <ul>
                                                    <li><a href="">¿Cómo agrego artículos a mi registro?</a></li>
                                                </ul>
                                                <ul>
                                                    <li><a href="">¿Cómo puedo agregar regalos a mi registro?</a></li>
                                                </ul>
                                            </Col>
                                        </Row>
                                        <h5 className="articulos-link"><a href="">VER LOS 10 ARTÍCULOS <img src="./image/ayuda/arrow.svg"/></a></h5>
                                        <h5 className="title-group-ayuda">Configuración del registro</h5>
                                        <Row>
                                            <Col sm={6}>
                                                <ul>
                                                    <li><a href="">¿Cómo empiezo a crear mi registro?</a></li>
                                                </ul>
                                                <ul>
                                                    <li><a href="">¿Cuánto tiempo permanecerá activo mi registro?</a></li>
                                                </ul>
                                                <ul>
                                                    <li><a href="">¿Yes Mom funciona como todas las tiendas?</a></li>
                                                </ul>
                                            </Col>
                                            <Col sm={6}>
                                                <ul>
                                                    <li><a href="">¿Cómo agrego otro registro?</a></li>
                                                </ul>
                                                <ul>
                                                    <li><a href="">¿Cómo agrego artículos a mi registro?</a></li>
                                                </ul>
                                                <ul>
                                                    <li><a href="">¿Cómo puedo agregar regalos a mi registro?</a></li>
                                                </ul>
                                            </Col>
                                        </Row>
                                        <h5 className="articulos-link"><a href="">VER LOS 7 ARTÍCULOS <img src="./image/ayuda/arrow.svg"/></a></h5>
                                        <h5 className="title-group-ayuda">Administrar su registro</h5>
                                        <Row>
                                            <Col sm={6}>
                                                <ul>
                                                    <li><a href="">¿Cómo empiezo a crear mi registro?</a></li>
                                                </ul>
                                                <ul>
                                                    <li><a href="">¿Cuánto tiempo permanecerá activo mi registro?</a></li>
                                                </ul>
                                            </Col>
                                            <Col sm={6}>
                                                <ul>
                                                    <li><a href="">¿Cómo agrego otro registro?</a></li>
                                                </ul>
                                            </Col>
                                        </Row>
                                        <h5 className="title-group-ayuda">Compartiendo su registro</h5>
                                        <Row>
                                            <Col sm={6}>
                                                <ul>
                                                    <li><a href="">¿Cómo empiezo a crear mi registro?</a></li>
                                                </ul>
                                                <ul>
                                                    <li><a href="">¿Cuánto tiempo permanecerá activomi registro?</a></li>
                                                </ul>
                                            </Col>
                                            <Col sm={6}>
                                                <ul>
                                                    <li><a href="">¿Cómo agrego otro registro?</a></li>
                                                </ul>
                                            </Col>
                                        </Row>
                                        <h5 className="title-group-ayuda">Solución de problemas</h5>
                                        <Row>
                                            <Col sm={6}>
                                                <ul>
                                                    <li><a href="">¿Cómo empiezo a crear mi registro?</a></li>
                                                </ul>
                                                <ul>
                                                    <li><a href="">¿Cuánto tiempo permanecerá activo mi registro?</a></li>
                                                </ul>
                                            </Col>
                                            <Col sm={6}>
                                                <ul>
                                                    <li><a href="">¿Cómo agrego otro registro?</a></li>
                                                </ul>
                                                <ul>
                                                    <li><a href="">¿Cómo agrego artículos a mi registro?</a></li>
                                                </ul>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <style jsx>
                {`
                .container-ayuda{
                    margin: 0;
                    padding: 1rem;
                }
                .box-ayuda {
                    background-size: cover;
                    justify-content: left;
                    align-items: right;
                }
                .text-title-ayuda {
                    font-family: "mont-regular" !important;
                    font-size: 25px;
                    font-weight: 600;
                    margin: 1rem 0rem 0rem;
                    color: #5a5a5a;
                    padding: 0px 0px 5px 0px;
                }
                .text-subtitle-ayuda{
                    font-family: "mont-regular" !important;
                    border-bottom: 1px solid #575650;
                    font-size: 15px;
                    font-weight: 300;
                    margin: 0.5rem 0.5rem 0rem orem;
                    color: #5a5a5a;
                    padding: 0px 0px 15px 0px;
                }
                .title-group-ayuda{
                    padding: 10px 0px 20px 0px;
                }
                .articulos-link{
                    text-align: center;
                    padding: 25px 0px 0px 0px;
                    font-size: 15px;
                    text-decoration: none;
                }
                `}
            </style>
        </appLayout>
    );
};

export default Ayuda;
