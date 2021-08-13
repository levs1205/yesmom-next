import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppLayout from "../../../../components/AppLayout";
import SidebarAyuda from "../../../../components/Ayuda/SidebarAyuda";

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
                                <SidebarAyuda active="registro"/>
                            </div>
                            <div className="container-ayuda">
                                <h4 className="text-title-ayuda">Construyendo su registro</h4>
                                <hr className="hr" />
                                <div className="">
                                    <div className="box-group-ayuda">
                                        <div className="container-item-ayuda">
                                            <Link href="/ayuda/tengo-un-registro/construyendo-registro/creacion-registro"><p className="title-item-ayuda">¿Cómo empiezo a crear mi registro?</p></Link>
                                            <p className="text-item-ayuda">Si está usando una computadora: Haga clic aquí para agregar el botón Babylist. Deberá hacer clic y ...</p>
                                        </div>
                                        <div className="container-item-ayuda">
                                            <p className="title-item-ayuda">¿Cuánto tiempo permanecerá activo mi registro?</p>
                                            <p className="text-item-ayuda">Si está usando una computadora: Haga clic aquí para agregar el botón Babylist. Deberá hacer clic y ...</p>
                                        </div>
                                        <div className="container-item-ayuda">
                                            <p className="title-item-ayuda">¿Yes Mom funciona como todas las tiendas?</p>
                                            <p className="text-item-ayuda">Si está usando una computadora: Haga clic aquí para agregar el botón Babylist. Deberá hacer clic y ...</p>
                                        </div>
                                        <div className="container-item-ayuda">
                                            <p className="title-item-ayuda">¿Cómo agrego otro registro?</p>
                                            <p className="text-item-ayuda">Si está usando una computadora: Haga clic aquí para agregar el botón Babylist. Deberá hacer clic y ...</p>
                                        </div>
                                        <div className="container-item-ayuda">
                                            <p className="title-item-ayuda">¿Cómo agrego artículos a mi registro? </p>
                                            <p className="text-item-ayuda">Si está usando una computadora: Haga clic aquí para agregar el botón Babylist. Deberá hacer clic y ...</p>
                                        </div>
                                        <div className="container-item-ayuda">
                                            <p className="title-item-ayuda">¿Cómo puedo agregar regalos a mi registro?</p>
                                            <p className="text-item-ayuda">Si está usando una computadora: Haga clic aquí para agregar el botón Babylist. Deberá hacer clic y ...</p>
                                        </div>
                                        <div className="container-item-ayuda">
                                            <p className="title-item-ayuda">¿Cómo empiezo a crear mi registro?</p>
                                            <p className="text-item-ayuda">Si está usando una computadora: Haga clic aquí para agregar el botón Babylist. Deberá hacer clic y ...</p>
                                        </div>
                                        <div className="container-item-ayuda">
                                            <p className="title-item-ayuda">¿Cuánto tiempo permanecerá activo mi registro?</p>
                                            <p className="text-item-ayuda">Si está usando una computadora: Haga clic aquí para agregar el botón Babylist. Deberá hacer clic y ...</p>
                                        </div>
                                        <div className="container-item-ayuda">
                                            <p className="title-item-ayuda">¿Yes Mom funciona como todas las tiendas?</p>
                                            <p className="text-item-ayuda">Si está usando una computadora: Haga clic aquí para agregar el botón Babylist. Deberá hacer clic y ...</p>
                                        </div>
                                        <div className="container-item-ayuda">
                                            <p className="title-item-ayuda">¿Cómo agrego otro registro?</p>
                                            <p className="text-item-ayuda">Si está usando una computadora: Haga clic aquí para agregar el botón Babylist. Deberá hacer clic y ...</p>
                                        </div>
                                        <div className="container-item-ayuda">
                                            <p className="title-item-ayuda">¿Cómo agrego artículos a mi registro? </p>
                                            <p className="text-item-ayuda">Si está usando una computadora: Haga clic aquí para agregar el botón Babylist. Deberá hacer clic y ...</p>
                                        </div>
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

                    .articulos-link p{
                        color: #556EA1 !important;
                        font-family:"mont-regular"!important;
                        font-size:1.3rem;
                    }
                    /**ITEMS AYUDA */
                    .title-item-ayuda{
                        color: #556EA1 ;
                        font-family:"mont-regular"!important;
                        font-size:1.3rem;       
                        cursor:pointer;
                    }
                    .text-item-ayuda{
                        font-family:"mont-regular"!important;
                        font-size:1.3rem;
                        color:#575650;
                    }
                    .container-item-ayuda{
                        border-bottom:1px solid #DADADA;
                        margin-bottom:1.5rem;
                    }
                    .container-item-ayuda p{
                        margin-bottom:1.5rem;
                    }



                    @media (min-width:768px){
                        .box-ayuda{
                            padding:13rem 0;
                        }
                        .contenedor{
                            display:flex;
                        }
                        
                    }

                    @media (min-width:1024px){
                        .hr{
                            margin-left:0;
                            margin-right:0;
                        }
                        .box-group-ayuda{
                            padding-left:1rem 0 0 2rem;
                        }
                        .contenedor{
                            padding: 0 8rem;
                        }
                        .text-title-ayuda{
                            padding-left:0;
                            font-family:"mont-regular"!important;
                            font-size:2.5rem;
                            color:#575650
                        }
                        .sidebar{
                            flex-basis:40%;
                        }
                        .container-ayuda{
                            flex-basis:55%;
                        }

                    }
                    @media (min-width:1280px){
                        .sidebar{
                            padding-top:0.5rem;
                        }
                        .text-title-ayuda{
                            font-size:3rem;
                        }
                        .title-item-ayuda{
                            font-size:1.8rem;
                        }
                        .text-item-ayuda{
                            font-size:1.5rem;
                        }
                        .box-group-ayuda{
                            padding-top:1rem;
                            padding-left:3rem;
                        }
                    }
                `}
            </style>
        </AppLayout>
    );
};

export default Ayuda;
