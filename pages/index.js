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
  return (
    <AppLayout>
      <Head>
        <title>YesMom - Home</title>
        {/* <link rel="icon" type="image/x-icon"  href="/yesmom-favicon.png" /> */}
        <meta name="description" content="YesMom es ..."></meta>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="YesMom - Home" />
        <meta property="og:description" content="YesMom es ..." />
        <meta
          property="og:image"
          content="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.es%2Fvector-premium%2Fmama-bebe-elefante-sosteniendo-globo_5186775.htm&psig=AOvVaw35dH9pk-kNaZ4wBMF87bS9&ust=1610582748885000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPiyzbrOl-4CFQAAAAAdAAAAABAD"
        />
        <meta property="og:site_name" content="La Ganga" />
        {/* <meta property="og:url" content={`${user.id}`} />  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="YesMom - Home" />
        <meta name="twitter:description" content="YesMom es ..." />
        <meta
          name="twitter:image"
          content="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.es%2Fvector-premium%2Fmama-bebe-elefante-sosteniendo-globo_5186775.htm&psig=AOvVaw35dH9pk-kNaZ4wBMF87bS9&ust=1610582748885000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPiyzbrOl-4CFQAAAAAdAAAAABAD"
        />
        <meta name="twitter:site" content="@JudithCristinaQ" />
        <meta name="twitter:creator" content="@JudithCristinaQ" />
      </Head>
      <div className="fade-in animated">
        <section fluid="true" className="box-banner">
          <div className="banner view-desktop">
            <Image
              src="/image/home/banner.png"
              alt="Picture of the author"
              layout="responsive"
              width={500}
              height={210}
            />
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
                <Image src="/image/ondas.svg" alt="ondas" layout="fill" />
              </div>
              <div className="box-banner-regalos">
                <div className="btn-regalos bg-fuxia hover-fuxia">
                  Crear lista de regalos
                </div>
                <div className="btn-regalos hover-amarillo">
                  Buscar lista de regalos
                </div>
              </div>
              <p className="link-a text-center ">
                ¿Ya registrado?
                <span className="hover-efect-letter">
                  <b> Inicia sesión</b>
                </span>
              </p>
            </div>
          </div>
        </section>
        <div className="section-sorteo-home">
          <Container fluid="true">
            <Row className="sin-margin">
              <Col xs={12} md={6} lg={6} xl={6}>
                <div className="box-text-title">
                  <div className="ondas d-block  heartbeat">
                    <Image
                      src="/image/ondas.svg"
                      alt="ondas"
                      width={50}
                      height={50}
                    />
                  </div>
                  <h4 className="text-title heartbeat">Sorteo</h4>
                  <div className="ondas d-block  heartbeat">
                    <Image
                      src="/image/ondas.svg"
                      alt="ondas"
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
                <div className="box-sorteo-home">
                  <h3 className="title-fuxia">Gana un pack Yes Mom</h3>
                  <h6 className="subtitle-dark">
                    Crea una lista de regalo y gana un pack de productos para ti
                    y tu bebé
                  </h6>
                  <div className="btn-yellow  hover-amarillo">
                    <Link href="/construccion">
                      <a> ¡Comenzar! </a>
                    </Link>
                  </div>
                  <Link href="/terminos-condiciones">
                    <a className=" link-a text-center hover-efect-letter">
                      {" "}
                      Términos y condiciones{" "}
                    </a>
                  </Link>
                </div>
              </Col>
              <Col xs={12} md={6} lg={6} xl={6}>
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
                      src="/image/home/img-sorteo-home.png"
                      alt="imagen sorteo yesmom home"
                      layout="responsive"
                      width={300}
                      height={250}
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
              <Row className="sin-margin">
                <Col xs>
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
                  <div className="btn-lo-mejor hover-amarillo">
                    <Link href="/construccion">
                      <a> Tiendas destacadas</a>
                    </Link>
                  </div>
                </Col>
                <Col xs>
                  <div className="img-lo-mejor">
                    <Image
                      src="/image/home/buscado.png"
                      alt="search"
                      width={400}
                      height={400}
                      // className="onda-rosa heartbeat"
                    />
                  </div>
                  <div className="btn-lo-mejor bg-fuxia hover-fuxia">
                    <Link href="/construccion">
                      <a>
                        {" "}
                        Lo + <br></br> buscado{" "}
                      </a>
                    </Link>
                  </div>
                </Col>
                <Col xs>
                  <div className="img-lo-mejor">
                    <Image
                      src="/image/home/sin-moverte.png"
                      alt="sin moverte"
                      width={400}
                      height={400}
                      // className="onda-rosa heartbeat"
                    />
                  </div>
                  <div className="btn-lo-mejor bg-verde hover-verde">
                    <Link href="/construccion">
                      <a>Sin moverte de casa</a>
                    </Link>
                  </div>
                </Col>
                <Col xs>
                  <div className="img-lo-mejor">
                    <Image
                      src="/image/home/juguetes.png"
                      alt="juguetes"
                      width={400}
                      height={400}
                      // className="onda-rosa heartbeat"
                    />
                  </div>
                  <div className="btn-lo-mejor bg-azul hover-azul">
                    <Link href="/construccion">
                      <a>Juguetes</a>
                    </Link>
                  </div>
                </Col>
              </Row>
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
        <div className="section-blog-home">
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
              <Col xs={12} md={5} lg={5} xl={5}>
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
                      <h6 className="subtitle-dark text-center">
                        Historias reales de madres que tenían las mismas dudas
                        que tú tienes en estos momentos. No te preocupes ¡Lo
                        resolveremos juntas!
                      </h6>
                      <div className="btn-yellow hover-amarillo">
                        <Link href="/blog">
                          <a>Ver más</a>
                        </Link>
                      </div>

                      {/* <a href="/blog" className="link-a d-block text-center mt-4">
                Ver más &#8594;
              </a> */}
                    </Container>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={7} lg={7} xl={7}>
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
          .box-banner {
            height: 43rem;
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
            top: 45%;
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
            color: #fff;
            padding: 1.5rem 0rem;
            margin: 1rem;
            width: 11rem;
            border-radius: 30px;
            text-align: center;
            line-height: 1.3rem;
            font-family: "omnes-bold";
            position: relative;
            cursor: pointer;
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
            font-size: 2.5rem;
            margin: 0rem 1rem 0rem;
            color: #4b66ae;
          }

          .ondas {
            width: 6rem;
          }

          .box-sorteo-home {
            width: 31.5rem;
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
            top: 3rem;
            left: -2rem;
            width: 2.5rem;
          }
          .line-down {
            position: absolute;
            bottom: 2rem;
            right: 2.8rem;
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
            border: 1px #575756;
            border-style: dashed;
            padding: 0.6rem;
            margin: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 20rem;
            height: 20rem;
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
          }

          .btn-lo-mejor a {
            color: #fff !important;
          }
          .section-blog-home {
            padding: 4rem 0;
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
            align-items: center!important;
            margin-bottom:1rem
          }
        
          @media (min-width: 1800px) {
            .box-banner {
              height: 25rem;
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
            /* .btn-yellow {
    font-weight: 900;
    font-size: 1rem;
    color: #fff;
    padding: 1rem 0rem;
    margin: 1rem auto;
    width: 8rem;
    border-radius: 30px;
    font-family: "omnes-bold";
  } */
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

            .img-lo-mejor {
              width: 15rem;
              height: 15rem;
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
          @media (max-width: 769px) {
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
              width: 12rem;
              height: 12rem;
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
              width: 11rem;
              height: 4rem;
              border-radius: 20px;
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
              width: 15rem;
              margin: 0.8rem auto;
              font-size: 1rem;
            }

            .box-true-history {
              width: 80%;
              display: block;
              margin: auto;
            }
          }
        `}
      </style>
    </AppLayout>
  );
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    "https://yesmom-backend.herokuapp.com/getBlogAll/user?limit=2"
  );
  const currentData = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      currentData,
    },
  };
}

export default Home;
