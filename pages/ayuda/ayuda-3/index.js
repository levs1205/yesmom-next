import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppLayout from "../../../components/AppLayout";
import SidebarAyuda from "../../../components/Ayuda/SidebarAyuda";

const Ayuda = () => {
    return (
        <AppLayout>
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
                    <div className="all-content">
                        <div className="contenedor">
                            <div className="sidebar show-desktop">
                                <SidebarAyuda />
                            </div>
                            <div className="container-ayuda">
                                <h4 className="text-title-ayuda">Tengo un registro</h4>
                                <h4 className="text-subtitle-ayuda">Aquí encontrarás información sobre el registro y su proceso</h4>
                                <hr className="hr" />
                                <div className="">
                                    <div className="box-group-ayuda">
                                        <h5 className="title-group-ayuda">Construyendo su registro</h5>
                                        <Row>
                                            <Col sm={6}>
                                                <ul>
                                                    <li>
                                                        <Link href=""><p>¿Cómo empiezo a crear mi registro?</p></Link>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <Link href=""><p>¿Cuánto tiempo permanecerá activo mi registro?</p></Link>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <Link href=""><p>¿Yes Mom funciona como todas las tiendas?</p></Link>
                                                    </li>
                                                </ul>
                                            </Col>
                                            <Col sm={6}>
                                                <ul>
                                                    <li>
                                                        <Link href=""><p>¿Cómo agrego otro registro?</p></Link>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <Link href=""><p>¿Cómo agrego artículos a mi registro?</p></Link>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <Link href=""><p>¿Cómo puedo agregar regalos a mi registro?</p></Link>
                                                    </li>
                                                </ul>
                                            </Col>
                                        </Row>
                                        <div className="navigate-articles">
                                            <h5 className="articulos-link"><p>VER LOS 10 ARTÍCULOS <img src="./image/ayuda/arrow.svg"/></p></h5>
                                        </div>
                                        <h5 className="title-group-ayuda">Configuración del registro</h5>
                                        <Row>
                                            <Col sm={6}>
                                                <ul>
                                                    <li>
                                                        <Link href=""><p>¿Cómo empiezo a crear mi registro?</p></Link>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <Link href=""><p>¿Cuánto tiempo permanecerá activo mi registro?</p></Link>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <Link href=""><p>¿Yes Mom funciona como todas las tiendas?</p></Link>
                                                    </li>
                                                </ul>
                                            </Col>
                                            <Col sm={6}>
                                                <ul>
                                                    <li>
                                                        <Link href=""><p>¿Cómo agrego otro registro?</p></Link>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <Link href=""><p>¿Cómo agrego artículos a mi registro?</p></Link>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <Link href=""><p>¿Cómo puedo agregar regalos a mi registro?</p></Link>
                                                    </li>
                                                </ul>
                                            </Col>
                                        </Row>
                                        <div className="navigate-articles">    
                                            <h5 className="articulos-link">
                                                <Link href=""><p> VER LOS 7 ARTÍCULOS <img src="./image/ayuda/arrow.svg"/></p></Link>
                                            </h5>
                                        </div>
                                        <h5 className="title-group-ayuda">Administrar su registro</h5>
                                        <Row>
                                            <Col sm={6}>
                                                <ul>
                                                    <li>
                                                        <Link href=""><p>¿Cómo empiezo a crear mi registro?</p></Link>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <Link href=""><p>¿Cuánto tiempo permanecerá activo mi registro?</p></Link>
                                                    </li>
                                                </ul>
                                            </Col>
                                            <Col sm={6}>
                                                <ul>
                                                    <li>
                                                        <Link href=""><p>¿Cómo agrego otro registro?</p></Link>
                                                    </li>
                                                </ul>
                                            </Col>
                                        </Row>
                                        <h5 className="title-group-ayuda">Compartiendo su registro</h5>
                                        <Row>
                                            <Col sm={6}>
                                                <ul>
                                                    <li>
                                                        <Link href=""><p>¿Cómo empiezo a crear mi registro?</p></Link>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <Link href=""><p>¿Cuánto tiempo permanecerá activomi registro?</p></Link>
                                                    </li>
                                                </ul>
                                            </Col>
                                            <Col sm={6}>
                                                <ul>
                                                    <li>
                                                        <Link href=""><p>¿Cómo agrego otro registro?</p></Link>
                                                    </li>
                                                </ul>
                                            </Col>
                                        </Row>
                                        <h5 className="title-group-ayuda">Solución de problemas</h5>
                                        <Row>
                                            <Col sm={6}>
                                                <ul>
                                                    <li>
                                                        <Link href=""><p>¿Cómo empiezo a crear mi registro?</p></Link>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <Link href=""><p>¿Cuánto tiempo permanecerá activo mi registro?</p></Link>
                                                    </li>
                                                </ul>
                                            </Col>
                                            <Col sm={6}>
                                                <ul>
                                                    <li>                                                
                                                        <Link href=""><p>¿Cómo agrego otro registro?</p></Link>                                                  
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>                                                        
                                                        <Link href=""><p>¿Cómo agrego artículos a mi registro?</p></Link>                                                  
                                                    </li>
                                                </ul>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <style jsx>
                {`

                    .hr{
                        border-color:#DADADA;
                        margin: 1rem -2.5rem;
                    }
                    ul{
                        padding-inline-start:1.5rem;
                        margin-bottom:2rem;
                    }
                    ul li p{
                        color: #556EA1 !important;
                        font-family:"mont-regular"!important;
                        font-size:1.3rem;       
                        cursor:pointer;
                    }
                    .box-ayuda{
                        padding:10rem 0;
                    }
                    .contenedor{
                        padding:0 1.5rem;
                    }
                    .container-ayuda{
                        margin: 0;
                        padding: 1rem;
                    }
                    .text-title-ayuda {
                        font-family: "mont-heavy" !important;
                        font-size: 1.8rem;
                        font-weight: 600;
                        margin: 1rem 0rem 0rem;
                        color: #5a5a5a;
                        padding: 0rem 0rem 0.3rem 0rem;
                    }
                    .text-subtitle-ayuda{
                        font-family: "mont-light" !important;
                        font-size: 1.3rem;
                        font-weight: 300;
                        margin: 0.5rem 0.5rem 0rem 0rem;
                        color: #5a5a5a;
                    }
                    .title-group-ayuda{
                        font-family:"mont-semibold"!important;
                        color:#575650;
                        padding: 0.6rem 0rem 1rem 0rem;
                        font-size:1.5rem;
                    }

                    .navigate-articles{
                        display:flex;
                        justify-content:flex-start;
                        margin-bottom:2rem;
                    }
                    .articulos-link{
                        cursor:pointer;
                        text-align: center;
                        padding: 1.5rem 0rem 0rem 0rem;
                        font-size: 1rem;
                        text-decoration: none;
                    }

                    .articulos-link img{
                        margin-left:1rem;
                    }
                    .box-group-ayuda a ,.articulos-link p{
                        color: #556EA1 !important;
                        font-family:"mont-regular"!important;
                        font-size:1.3rem;
                    }

                    @media (min-width:768px){
                        .box-ayuda{
                            padding:13rem 0;
                        }
                        .contenedor{
                            display:flex;
                        }
                        .navigate-articles{
                            justify-content:center;
                        }
                        
                    }

                    @media (min-width:1024px){
                        .contenedor{
                            padding: 0 8rem;
                        }
                        .text-title-ayuda{
                            font-family:"mont-regular"!important;
                            font-size:2.5rem;
                            color:#575650
                        }
                        ul{
                            padding-inline-start:3rem;
                        }
                        .sidebar{
                            flex-basis:30%;
                        }
                        .container-ayuda{
                            flex-basis:60%;
                            margin-left:10rem;
                        }
                        .box-group-ayuda a{
                            font-size:1rem;
                        }

                    }
                    @media (min-width:1280px){
                        .text-title-ayuda{
                            font-size:4rem;
                        }
                        ul{
                            padding-inline-start:4rem;
                        }

                        .box-group-ayuda a{
                            font-size:1.1rem;
                        }
                        .articulos-link p{
                            font-size:1rem!important;
                        }
                        /* .sidebar{
                            width:25%;
                            margin-right:5rem;
                        }
                        .container-ayuda{
                            width:50%;
                        } */
                        
                    }
                `}
            </style>
        </AppLayout>
    );
};

export default Ayuda;
