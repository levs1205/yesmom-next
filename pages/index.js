import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col, Card, CardDeck } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
// import banner from "../public/image/home/banner.png";
// import bannerM from "../public/image/home/banner-mobile.png";
import AppLayout from "../components/AppLayout";
import CardBlog from "../components/CardBlog";
import Head from "next/head";
import CardProduct from "../components/CardProduct";

// import clienteAxiosBusiness from "../config/axiosBusiness";
import axios from "axios";
// import fetch from 'isomorphic-fetch'
const Home = ({ currentData }) => {
  console.log(currentData, "holis");
  // const [currentData, setCurrentData] = useState([]);
  // useEffect(() => {
  //     blogHome();
  //   }, []);
  // const blogHome = async () => {
  //   await axios
  //     .get("http://localhost:5000/getBlogAll/user?limit=2")
  //     .then((res) => {
  //       if (res.data.MensajeRespuesta === "NO EXISTEN DATOS") {
  //        setCurrentData([]);
  //       } else {
  //         setCurrentData(res.data);
  //       }
  //     })
  //     .catch((e) => {
  //       console.log(e, "error");
  //     });
  // };
  /* const [respuesta, setRespuesta] = useState([]);
  useEffect(async () => {
    const consulta = await axios("https://fakestoreapi.com/products");
    setRespuesta(consulta.data);
  }, []); */

  return (
    <AppLayout>
      <Head>
        <title>YesMom - Home</title>
        {/* <link rel="icon" type="image/x-icon"  href="/yesmom-favicon.png" /> */}
        <meta
          name="description"
          content="Yes Mom es una plataforma digital peruana que ayuda a las
                  mamis a disfrutar su maternidad sin preocupaciones. Queremos
                  ser la marca aliada que todos los papás estuvieron buscando,
                  una página web que reúne en un solo lugar todo lo que
                  necesitan para la llegada de su bebé y acompañar su
                  crecimiento."
        ></meta>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="YesMom - Home" />
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
          content="https://scontent.flim16-2.fna.fbcdn.net/v/t1.0-9/126792131_106928704587510_2836457564050845211_o.png?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFSSfa6-XY6Gr86bM0YLSnbg75GzBA7YvSDvkbMEDti9CbHT_bhgekVd4r0lJtcFek&_nc_ohc=WbH5Z7RjRSEAX_W02AR&_nc_ht=scontent.flim16-2.fna&oh=c348092596513f52dfca119589ab6c0b&oe=602D60C9"
        />
        <meta property="og:site_name" content="Yes Mom" />
        {/* <meta property="og:url" content={`${user.id}`} />  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="YesMom - Home" />
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
          content="https://scontent.flim16-2.fna.fbcdn.net/v/t1.0-9/126792131_106928704587510_2836457564050845211_o.png?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFSSfa6-XY6Gr86bM0YLSnbg75GzBA7YvSDvkbMEDti9CbHT_bhgekVd4r0lJtcFek&_nc_ohc=WbH5Z7RjRSEAX_W02AR&_nc_ht=scontent.flim16-2.fna&oh=c348092596513f52dfca119589ab6c0b&oe=602D60C9"
        />
        <meta name="twitter:site" content="@JudithCristinaQ" />
        <meta name="twitter:creator" content="@JudithCristinaQ" />
      </Head>
      <div className="fade-in animated">
        <section fluid="true" className="box-banner">
          <div className="banner view-desktop tilt-in-fwd-tr">
            <div className="h-100">
              <Image
                src="/image/home/banner.png"
                alt="Picture of the author"
                layout="responsive"
                width={500}
                height={245}
              />
            </div>
          </div>
          <div className="banner view-mobile">
            <Image
              src="/image/home/banner-mobile.png"
              layout="fill"
              alt="Picture of the author"
            />
          </div>
          {/* <img src={banner} className="banner view-desktop" /> */}
          {/* <img src={bannerM} alt="" className="banner view-mobile" /> */}
          <div className="box-banner-btns">
            <div className="box-banner-btns-group">
              <h3 className="title-fuxia w-80 m-auto">
                Encuentra tu regalo soñado
              </h3>
              <div className="ondas d-block m-auto heartbeat">
                <Image
                  src="/image/ondas.svg"
                  alt="ondas"
                  width={90}
                  height={9}
                />
              </div>
              <div className="box-banner-regalos">
                <Link href="/construccion">
                  <div className="btn-regalos bg-fuxia hover-fuxia">
                    <a>Crear lista de regalos</a>
                  </div>
                </Link>

                <Link href="/construccion">
                  <div className="btn-regalos hover-amarillo">
                    <a> Buscar lista de regalos</a>
                  </div>
                </Link>
              </div>
              <p className="link-a text-center text-iniciar-sesion">
                ¿Ya registrado?
                <span className="hover-efect-letter">
                  <Link href="/login" >
                    <b> Inicia sesión</b>
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </section>
        <div className="section-sorteo-home">
          <Container fluid="true">
            <Row className="sin-margin">
              <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                <div className="box-text-title">
                  <Image
                    src="/image/ondas.svg"
                    alt="ondas"
                    width={50}
                    height={50}
                  />

                  <h4 className="text-title heartbeat">Sorteo</h4>

                  <Image
                    src="/image/ondas.svg"
                    alt="ondas"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="box-sorteo-home">
                  <h3 className="title-fuxia">Gana un kit Yes Mom</h3>
                  <h6 className="subtitle-dark">
                    Crea una lista de regalo y gana<br/> un kit de productos para ti
                    y tu bebé
                  </h6>

                  <Link href="/construccion">
                    <div className="btn-yellow hover-amarillo mb-5">
                      <a className="text-change-font"> ¡Comenzar! </a>
                    </div>
                  </Link>

                  <Link href="/construccion">
                    <a className="ft-3 link-a text-center hover-efect-letter mb-5">
                      Términos y condiciones
                    </a>
                  </Link>
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                <div className="box-img-sorteo-home">
                  <div className="line-up heartbeat">
                    <Image
                      src="/image/lineas-rosa1.svg"
                      alt="lineas"
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className="img-sorteo">
                    <Image
                      src="/image/home/regalo2.png"
                      alt="imagen sorteo yesmom home"
                      layout="responsive"
                      width={280}
                      height={230}
                    />
                  </div>
                  <div className="line-down heartbeat">
                    <Image
                      src="/image/linea-rosa2.svg"
                      alt="lineas"
                      width={30}
                      height={30}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section-lo-mejor-home">
          <Container fluid="true">
            <div className="nube-up">
              <Image
                src="/image/home/nube.svg"
                alt="nube yesmom"
                width={40}
                height={30}
                layout="responsive"
              />
            </div>
            <div className="box-title-lo-mejor-home">
              <FontAwesomeIcon
                icon={faStar}
                className="heartbeat"
              ></FontAwesomeIcon>
              <div className="title-fuxia">Lo mejor para tu bebé</div>
              <FontAwesomeIcon
                icon={faStar}
                className="heartbeat"
              ></FontAwesomeIcon>
            </div>
            <div className="onda-rosa heartbeat">
              <Image
                src="/image/onda-rosa.svg"
                alt="onda rosa yes mom"
                width={90}
                height={20}
                // layout="responsive"
              />
            </div>
            <div className="box-img-lo-mejor">
              <Container>
                <Row className="sin-margin">
                  <Col className="mt-5" sm={12} md={6} lg={3}>
                    <div className="img-lo-mejor ">
                      <Image
                        src="/image/home/destacado.png"
                        alt="destacado"
                        width={400}
                        height={400}
                        // layout="responsive"

                        // className="onda-rosa heartbeat"
                      />
                    </div>
                    <Link href="/construccion">
                      <div className="btn-lo-mejor hover-amarillo">
                        <a> Tiendas destacadas</a>
                      </div>
                    </Link>
                  </Col>
                  <Col className="mt-5" sm={12} md={6} lg={3}>
                    <div className="img-lo-mejor">
                      <Image
                        src="/image/home/vendido.png"
                        alt="search"
                        width={400}
                        height={400}
                        // className="onda-rosa heartbeat"
                      />
                    </div>
                    <Link href="/construccion">
                      <div className="btn-lo-mejor bg-fuxia hover-fuxia">
                        <a>
                          {" "}
                          Lo + vendido{" "}
                        </a>{" "}
                      </div>
                    </Link>
                  </Col>
                  <Col className="mt-5" sm={12} md={6} lg={3}>
                    <div className="img-lo-mejor">
                      <Image
                        src="/image/home/sin-moverte.png"
                        alt="sin moverte"
                        width={400}
                        height={400}
                        // className="onda-rosa heartbeat"
                      />
                    </div>
                    <Link href="/construccion">
                      <div className="btn-lo-mejor bg-verde hover-verde">
                        <a>Servicios</a>
                      </div>
                    </Link>
                  </Col>
                  <Col className="mt-5" sm={12} md={6} lg={3}>
                    <div className="img-lo-mejor">
                      <Image
                        src="/image/home/juguetes.png"
                        alt="juguetes"
                        width={400}
                        height={400}
                        // className="onda-rosa heartbeat"
                      />
                    </div>

                    <Link href="/construccion">
                      <div className="btn-lo-mejor bg-azul hover-azul">
                        <a>Solo en Yes Mom</a>
                      </div>
                    </Link>
                  </Col>
                </Row>
              </Container>
            </div>

            <div className="nube-down">
              <Image
                src="/image/home/nube.svg"
                alt="nube yesmom"
                width={40}
                height={20}
                layout="responsive"
              />
            </div>
          </Container>
        </div>
        <div className="section-tienda-home">
          <Container>
            <div className="box-text-title">
              <Image
                src="/image/ondas.svg"
                alt="ondas"
                className="ondas"
                width={50}
                height={50}
              />
              <h4 className="text-title heartbeat">Tienda online</h4>
              <Image
                src="/image/ondas.svg"
                alt="ondas"
                className="ondas"
                width={50}
                height={50}
              />
            </div>
            <h3 className="title-fuxia mt-2">Nuestros productos</h3>
            <h6 className="text-explora subtitle-dark text-center">
              ¡Explora nuestro marketplace y vive la experiencia de encontrar lo
              mejor para tu pequeño!
            </h6>
          </Container>
          <Container fluid="true">
            <Col>
                <div className="all-products">
                    <CardProduct size="4"/>
                    <CardProduct discount size="4"/>
                    <CardProduct discount size="4"/>
                    <CardProduct size="4"/>
                </div>
            </Col>
            <Link href="/tienda">
            <div className="btn-yellow bg-fuxia hover-fuxia text-omnes">
              <a>Ver más</a>
            </div>
          </Link>
          </Container>

        </div>
        <div className="section-blog-home">
          <div className="nube-blanca1">
            <Image
              src="/image/nube-blanca2.png"
              alt="nube yes mom"
              width={60}
              height={30}
            />
          </div>
          <div className="nube-blanca2">
            <Image
              src="/image/nube-blanca1.png"
              alt="nube yes mom"
              width={100}
              height={60}
            />
          </div>
          <div className="nube-blanca3">
            <Image
              src="/image/nube-blanca1.png"
              alt="nube yes mom"
              width={90}
              height={60}
            />
          </div>
          <div className="nube-blanca4">
            <Image
              src="/image/nube-blanca2.png"
              alt="nube yes mom"
              width={110}
              height={60}
            />
          </div>
          <Container fluid="true">
            <Row className="sin-margin">
              {/* <Col xs={12} md={6} lg={6} xl={6}>
          <div className="box-img-blog-home">
            <img src={lineasAzul1} alt="lineas" className="line-up-azul" />
            <img
              src={blog}
              alt="imagen blog yesmom home"
              className="img-blog"
            />
            <img src={lineasAzul2} alt="lineas" className="line-down-azul" />
          </div>
        </Col> */}
              <Col xs={12} md={12} lg={5} xl={5}>
                <div className="box-true-history">
                  <div className="box-text-title">
                    <Image
                      src="/image/ondas.svg"
                      alt="ondas"
                      className="ondas"
                      width={50}
                      height={50}
                    />
                    <h4 className="text-title heartbeat">Blog</h4>
                    <Image
                      src="/image/ondas.svg"
                      alt="ondas"
                      className="ondas"
                      width={50}
                      height={50}
                    />
                  </div>
                  <h3 className="title-fuxia mt-2">#TrueStoryMom</h3>
                  <div className="container-blog-home">
                    <Container>
                      <h6 className="subtitle-dark text-center cl-blanco ">
                        Historias reales de mamis que tenían las mismas dudas
                        que tú en estos momentos. No te preocupes, ¡lo
                        resolveremos juntas!
                      </h6>

                      <Link href="/blog">
                        <div className="btn-yellow bg-fuxia hover-fuxia text-omnes">
                          <a>Ver más</a>
                        </div>
                      </Link>

                      {/* <a href="/blog" className="link-a d-block text-center mt-4">
                Ver más &#8594;
              </a> */}
                    </Container>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={12} lg={7} xl={7}>
                <div className="box-blog-card-home">
                  <Container>
                    <CardDeck>
                      {currentData.map((cardBlog) => (
                        <CardBlog blog={cardBlog} key={cardBlog.blog._id} />
                      ))}
                    </CardDeck>
                  </Container>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <style jsx>
        {`
          :global(.card-blog){
              width:30rem!important;
            }
          .text-change-font{
            font-family:"omnes-bold"!important;
            font-size:1.6rem;
          }
          .text-omnes{
            width:17.5rem;
          }
          .text-omnes a {
            font-size:2rem;
          }

          .all-products{
              width : 75%;
              margin : 0 auto;
              padding:3rem 0;
              display:flex;
              justify-content:center;
              align-items:center;
              flex-wrap:wrap;
            }
          .box-banner {
            height: 100vh;
            width: auto;
            position: relative;
          }

          .box-banner-btns {
            position: absolute;
            top: 0%;
            left: 60%;
            background: linear-gradient(
              270deg,
              #ffffff -63.19%,
              rgba(255, 251, 251, 0) 100%,
              rgba(255, 251, 251, 0) 100%,
              rgba(255, 251, 251, 0) 100%
            );
            height: 100%;
            width: 40%;
          }

          .box-banner-btns-group {
            position: relative;
            top: 38%;
          }

          .box-banner-regalos {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 1rem;
            flex-direction: row;
          }

          .box-banner .banner {
            width: 100%;
            object-fit: cover;
            object-position: center;
            height: 100%;
            position: absolute;
          }

          .ondas-banner {
            width: 1rem;
          }
          .section-sorteo-home {
            padding-top: 5rem;
            padding-bottom: 5rem;
            position: relative;
          }

          .btn-regalos {
            background-color: #febf41;
            font-size: 1.31rem;
            color: #fff !important;
            padding: 1.5rem 0rem;
            margin: 1rem;
            width: 15rem;
            border-radius: 30px;
            text-align: center;
            line-height: 1.3rem;
            font-family: "omnes-bold";
            position: relative;
            cursor: pointer;
          }
          .btn-regalos a {
            color: #fff !important;
            font-size:1.6rem;
          }
          .text-iniciar-sesion{
            font-size:1.5rem;
          }
          .box-text-title {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 4rem;
            text-align: center;
          }
          .text-title {
            font-family: "Clicker Script", cursive;
            font-size:4rem;
            margin: 0rem 1rem 0rem;
            color: #4b66ae;
          }

          .ondas {
            width: 8rem;
            text-align: center;
          }

          .box-sorteo-home {
            width: 35rem;
            text-align: center;
            margin: 1rem auto;
          }
          .box-img-sorteo-home {
            position: relative;
          }

          .img-sorteo {
            width: 90%;
          }
          .line-up {
            position: absolute;
            top: 2.5rem;
            left: -1.5rem;
            width: 2.5rem;
          }
          .line-down {
            position: absolute;
            bottom: 2rem;
            right: 2.5rem;
            width: 2.5rem;
          }

          .section-lo-mejor-home {
            background: linear-gradient(
                270deg,
                rgba(242, 211, 230, 0.5) 0%,
                rgba(229, 209, 231, 0.5) 13.49%,
                rgba(150, 199, 236, 0.5) 100%
              ),
              url("../../image/home/shop.svg") repeat;
            padding: 6rem 0rem;
            position: relative;
            background-position: top bottom;
            background-size: cover;
            width: 100%;
          }

          .box-title-lo-mejor-home {
            display: flex;
            justify-content: center;
            align-items: center;
            /* padding: 1rem 0rem 4rem; */
          }

          .nube-up {
            position: absolute;
            top: -10%;
            left: 5%;
            width: 20rem;
          }

          .nube-down {
            position: absolute;
            transform: rotate(180deg);
            width: 20rem;
            right: 5%;
            bottom: -12%;
          }

          .box-img-lo-mejor {
            margin-left: 6rem !important;
            margin-right: 6rem !important;
            margin: 5rem 0;
          }

          .img-lo-mejor {
            border: 2px #575756;
            border-style: dashed;
            padding: 0.6rem;
            margin: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 22.5rem;
            height: 22.5rem;
            border-radius: 50%;
          }

          .img-lo-mejor img {
            width: 100%;
          }
          .onda-rosa {
            width: 5rem;
            margin: 0 auto;
            display: block;
            position: relative;
            top: 0rem;
            text-align: center;
          }

          .btn-lo-mejor {
            padding: 1.5rem;
            text-align: center;
            font-family: "omnes-bold";
            font-weight: 1000;
            font-size: 1.3rem;
            width: 13rem;
            height: 6rem;
            margin: auto;
            background-color: #febf41;
            border-radius: 25px;
            color: #fff !important;
            line-height: 1.3rem;
            position: relative;
            top: -3%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
          }

          .btn-lo-mejor a {
            color: #fff !important;
            font-size:1.7rem;
          }
          .section-blog-home {
            padding: 6rem 0;
            background: #febf41;
            position: relative;
          }

          .nube-blanca1 {
            position: absolute;
            left: 5%;
          }
          .nube-blanca2 {
            position: absolute;
            right: 4%;
            top: 6%;
          }
          .nube-blanca3 {
            position: absolute;
            bottom: 5%;
            left: 5%;
          }
          .nube-blanca4 {
            position: absolute;
            right: 6%;
            bottom: 5%;
          }
          .box-img-blog-home {
            position: relative;
            padding: 5rem 0;
          }

          .line-up-azul {
            position: absolute;
            top: 2.6rem;
            left: 4rem;
            width: 2.5rem;
          }

          .line-down-azul {
            position: absolute;
            bottom: 2.8rem;
            right: 0rem;
            width: 2.5rem;
          }

          .img-blog {
            width: 90%;
            margin: auto;
            display: block;
            padding-left: 4rem;
          }

          .container-blog-home {
            padding: 1rem 0;
          }

          .btn-blog-home {
            width: auto;
            height: 7rem;
            text-align: center;
            background: #4b64a4;
            color: #fff;
            margin: 1rem auto;
            padding: 1rem 2rem;
            font-family: "Montserrat", sans-serif;
            font-weight: 900;
            font-size: 1.1rem;
            border-radius: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
            line-height: 1.2rem;
          }

          .box-btn-blog {
            margin: 0rem 5rem 0rem 5rem !important;
          }

          .box-true-history {
            width: 80%;
            text-align: center;
            margin: auto;
          }

          .box-blog-card-home {
            flex: 0 0 46% !important;
          }

          :global(.card-deck .card) {
            align-items: center !important;
            margin-bottom: 1rem;
            justify-content: center !important;
          }

          .section-tienda-home {
            padding: 2rem 0rem 5rem 0rem;
          }

          .box-product-card-home {
            margin-top: 3rem;
          }
          .box-product-card-home .card-deck-h {
            margin: auto;
            display: flex;
            justify-content: center;
          }

          @media (min-width: 1800px) {
            :global(.card-deck) {
              justify-content: center !important;
            }
            .box-banner {
              height: 100vh;
              width: auto;
            }

            .section-sorteo-home {
              padding-top: 3rem;
              padding-bottom: 5rem;
            }

            .box-text-title {
              padding-top: 5rem;
            }

            .ondas {
              width: 6rem;
            }

            .box-sorteo-home {
              width: 31.5rem;
              text-align: center;
              margin: 2rem auto;
            }
            .box-sorteo-home .title-fuxia {
              font-size: 1.5rem;
            }
            .box-sorteo-home .subtitle-dark {
              font-size: 1.2rem;
            }
            .img-sorteo {
              width: 80%;
            }
            .line-up {
              position: absolute;
              top: 1rem;
              left: -2rem;
              width: 2.5rem;
            }
            .line-down {
              position: absolute;
              bottom: 0.5rem;
              right: 4.5rem;
              width: 2.5rem;
            }

            .section-lo-mejor-home {
              padding: 4rem 0rem;
            }

            .box-title-lo-mejor-home {
              font-size: 0.7rem;
            }
            .box-title-lo-mejor-home .title-fuxia {
              font-size: 1.5rem;
            }

            .nube-up {
              position: absolute;
              top: -5%;
              left: 5%;
              width: 15rem;
            }

            .nube-down {
              position: absolute;
              transform: rotate(180deg);
              width: 15rem;
              right: 5%;
              bottom: -6%;
            }

            .box-img-lo-mejor {
              margin-left: 15rem !important;
              margin-right: 15rem !important;
              margin: 3rem 0;
            }

            .onda-rosa {
              width: 4rem;
            }

            .btn-lo-mejor {
              padding: 1.5rem;
              font-weight: 1000;
              font-size: 1rem;
              width: 10rem;
              height: 4.5rem;
            }
            .section-blog-home {
              padding: 3rem 0;
            }
            .box-img-blog-home {
              padding: 5rem 0;
            }

            .line-up-azul {
              top: 3rem;
              left: 5.5rem;
            }

            .line-down-azul {
              bottom: 3rem;
              right: 1.5rem;
            }

            .img-blog {
              width: 80%;
            }

            .container-blog-home {
              padding: 1rem 0;
            }

            .title-fuxia {
              font-size: 1.5rem;
            }

            .btn-blog-home {
              width: auto;
              height: 4.5rem;
              font-size: 0.8rem;
            }

            .box-btn-blog {
              margin: 0rem 3rem 0rem 3rem !important;
            }
          }

          @media (min-width: 769px) and (max-width: 991px) {
            :global(.card-deck) {
              justify-content: center !important;
            }
            .all-products{
              width:70%;
              margin: 0 auto;
            }
            .box-banner-btns-group {
              position: absolute;
              top: 35%;
              right: 10%;
            }

            .text-title {
              font-size: 3rem;
            }
            .img-sorteo {
              width: 60%;
              margin: auto;
            }
            .line-up,
            .line-down {
              display: none;
            }
          }

          @media (max-width: 768px) {
            :global(.card-deck) {
              justify-content: center !important;
            }
            .subtitle-dark{
              font-size:2rem;
            }
            .text-iniciar-sesion{
              font-size:1.2rem;
              margin-top:1rem;
            }
            .text-omnes{
              width:15rem;
            }
            .text-omnes a{
              font-family:"omnes-regular"!important;
              font-size:1.8rem;
              font-weight:500;
            }
            .text-title {
              font-size: 4rem;
            }
            .ft-3{
              font-size:1.3rem;
            }
            .text-explora{
              font-size:1.5rem;
              padding: 0 2rem;
            }
            .box-sorteo-home .subtitle-dark {
              font-size: 1.4rem;
            }
            .title-fuxia{
              font-size:2rem;
            }
            .all-products{
              width : 90%;
              margin : 0 auto;
              padding:3rem 0;
              display:flex;
              justify-content:center;
              align-items:center;
              flex-wrap:wrap;
            }
            .ondas {
              width: 4rem;
            }
            .section-sorteo-home {
              padding-top: 1rem;
            }
            .box-text-title {
              padding-top: 1rem;
            }
            .box-sorteo-home {
              width: 100% !important;
              padding-left: 1rem;
              padding-right: 1rem;
            }
            .box-img-sorteo-home {
              margin: auto;
              display: block;
            }
            .img-sorteo {
              width: 80%;
              display: block;
              margin: auto;
            }

            .box-img-lo-mejor {
              margin: 0rem !important;
              margin-top: 2rem !important;
            }

            .img-lo-mejor {
              width: 17.5rem;
              height: 17.5rem;
            }

            .line-up {
              width: 1.5rem;
              top: 0.3rem;
              left: 0.7rem;
            }

            .line-down {
              bottom: -0.2rem;
              right: 0.5rem;
              width: 1.5rem;
            }

            .nube-up {
              width: 10rem;
              left: -2rem;
              top: -2rem;
            }

            .nube-down {
              width: 10rem;
              right: 0rem;
              bottom: -2rem;
            }

            .btn-lo-mejor {
              font-size: 1rem;
              width: 14rem;
              height: 5rem;
              border-radius: 20px;
            }
            .btn-lo-mejor a{
              font-family:"omnes-regular"!important;
              font-size:1.8rem;
            }
            .text-change-font {
              font-family:"omnes-regular"!important;
            }
            .box-img-blog-home {
              padding: 1rem;
            }

            .img-blog {
              padding-left: 0rem;
              width: 80%;
            }

            .line-up-azul {
              width: 1.5rem;
              top: -0.7rem;
              left: 1.5rem;
            }

            .line-down-azul {
              width: 1.5rem;
              right: 1rem;
              bottom: -0.3rem;
            }
            .box-btn-blog {
              margin: 0rem 3rem 0rem 3rem !important;
            }
            .btn-blog-home {
              font-size: 0.9rem;
              border-radius: 25px;
              height: 5rem;
            }
            .box-banner-btns {
              top: 0%;
              left: 0;
              width: 100%;
              height: 100%;
              padding-top: 20%;
            }
            .box-banner-regalos {
              flex-direction: column;
              margin-top: 1rem;
            }

            .btn-regalos {
              width: 25rem;
              margin: 0.8rem auto;
              padding-left : 0.5rem;
              padding-right:0.5rem;
              font-size: 1rem;
            }
            .btn-regalos a{
              font-family:"omnes-regular"!important;
              font-size:1.8rem;
            }
            .box-true-history {
              width: 85%;
              display: block;
              margin: auto;
            }
          }
        `}
      </style>
    </AppLayout>
  );
};

export async function getServerSideProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  let url = `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_BUSINESS}/getBlogAll/user?limit=2`;
  console.log("**********", url);

  const res = await fetch(url);
  const currentData = await res.json();

  if (!currentData) {
    return {
      notFound: true,
    };
  }
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      currentData,
    },
  };
}

export default Home;
