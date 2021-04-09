import React from "react";
import AppLayout from "../../components/AppLayout";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const index = () => {
  return (
    <AppLayout>
      <Head>
        <title>YesMom - Nosotros</title>
        <meta name="description" content="YesMom es ..."></meta>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="YesMom - Nosotros" />
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
        <meta name="twitter:title" content="YesMom - Nosotros" />
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
      <div className="box-banner-about">
        <div className="ondas heartbeat">
          <Image
            src="/image/onda-blanca.svg"
            alt="ondas"
            width={70}
            height={70}
          />
        </div>
        <h4 className="text-title-blog">Sobre nosotros</h4>
        <div className="ondas heartbeat">
          <Image
            src="/image/onda-blanca.svg"
            alt="ondas"
            width={70}
            height={70}
            //   layout="responsive"
          />
        </div>
      </div>
      <div className="section-somos-home">
        <Container fluid="true">
          <div className="nube1-somos heartbeat">
            <Image
              src="/image/nube1.svg"
              width={150}
              height={60}
              // layout="responsive"
              alt="nube"
            />
          </div>
          <div className="nube2-somos heartbeat">
            <Image
              src="/image/nube2.svg"
              width={150}
              height={60}
              //   layout="responsive"
              alt="nube"
            />
          </div>

          <Row className="sin-margin">
            <Col xs={12} md={12} lg={6} xl={6}>
              <div className="box-somos-yesmom">
                <div className="pb-3 subtitle-about ">
                  <Image
                    src="/image/somos-yesmom.svg"
                    width={200}
                    height={100}
                    alt="yesmom"
                  />
                </div>
                <p>
                  Yes Mom es una plataforma digital peruana que ayuda a las
                  mamis a disfrutar su maternidad sin preocupaciones. Queremos
                  ser la marca aliada que todos los papás estuvieron buscando,
                  una página web que reúne en un solo lugar todo lo que
                  necesitan para la llegada de su bebé y acompañar su
                  crecimiento. Desde la comodidad de tu hogar podrás crear
                  listas de bebé online de forma rápida para compartirla con tu
                  familia y amigos, hacer compras de manera segura y tener la
                  guía que necesitas, para vivir esta etapa con ilusión y
                  tranquilidad.
                </p>
                <p>Yes Mom. Tus listas, listas.</p>
              </div>
            </Col>
            <Col xs={12} md={12} lg={6} xl={6}>
              <div className="box-img-somos-home">
                <div className="line-up-somos ">
                  <Image
                    src="/image/lineas-azul1.svg"
                    width={60}
                    height={40}
                    layout="responsive"
                    alt="lineas"
                  />
                </div>
                <div className="img-somos tilt-in-fwd-tr">
                  <Image
                    src="/image/about.png"
                    width={80}
                    height={63}
                    layout="responsive"
                    alt="imagen sorteo yesmom home"
                  />
                </div>
                <div className="line-down-somos ">
                  <Image
                    src="/image/lineas-azul2.svg"
                    width={40}
                    height={40}
                    layout="responsive"
                    alt="lineas"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="fondo-video-somos">
        <div className="box-title-nuestra-historia">
          <FontAwesomeIcon
            icon={faStar}
            className="cl-fuxia heartbeat"
          ></FontAwesomeIcon>
          <div className="title-fuxia">Nuestra historia</div>
          <FontAwesomeIcon
            icon={faStar}
            className="cl-fuxia heartbeat"
          ></FontAwesomeIcon>
        </div>
        <div className="box-video-somos">
          {/* <video src={require('./../../public/video-oficial.mp4')} /> */}
          <video autoPlay loop muted controls className="video-nosotros">
            <source src="/video-oficial.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <style jsx>
        {`
          .box-banner-about {
            height: 25rem;
            background: url(../../../image/about-header.png) no-repeat center;
            background-size: cover;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 5rem;
          }
          .box-title-nuestra-historia {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .box-somos-yesmom {
            padding: 3.9rem 3.5rem;
            font-family: "mont-regular" !important;
            font-size: 1rem;
            position: relative;
          }

          .line-up-somos {
            position: absolute;
            top: -1.5rem;
            right: 2.5rem;
            width: 2.5rem;
            transform: rotate(90deg);
          }

          .line-down-somos {
            position: absolute;
            bottom: -2rem;
            left: -2rem;
            width: 2.5rem;
            transform: rotate(90deg);
          }

          .nube1-somos {
            position: absolute;
            top: 5%;
            left: 2%;
          }

          .nube2-somos {
            position: absolute;
            right: 2%;
            bottom: 5%;
          }

          .fondo-video-somos {
            background: url(../../../image/fondo-verde-somos.png);
            height: 50rem;
            background-position: center;
            background-size: cover;
            padding-top: 5rem;
            padding-bottom: 5rem;
          }

          .box-video-somos {
            display: flex;
            justify-content: center;
            position: relative;
            overflow: hidden;
            margin: 3rem 2rem;
            height: auto;
          }
          .video-nosotros {
            width: 50%;
            margin: auto;
            height: 100%;
            position: relative;
          }
          .box-video-somos iframe {
            position: absolute;
            width: 50%;
            height: 50%;
          }
          .section-somos-home {
            padding-top: 5rem;
            padding-bottom: 5rem;
            position: relative;
          }

          .box-img-somos-home {
            position: relative;
          }

          .img-somos {
            width: 90%;
          }

          .text-title-blog {
            font-family: "Clicker Script", cursive;
            font-size: 2.5rem;
            margin: 0rem 0.5rem 0rem;
            color: #fff;
          }

          @media (min-width: 1800px) {
            .box-somos-yesmom {
              padding: 1rem 3.5rem;
              font-family: "mont-regular" !important;
              font-size: 0.8rem;
              position: relative;
            }

            .fondo-video-somos {
              background: url(../../../image/fondo-verde-somos.png);
              height: 34rem;
              padding-top: 3.5rem;
              padding-bottom: 3.5rem;
            }

            .img-somos {
              width: 87%;
            }
          }

          @media (min-width: 769px) and (max-width: 991px) {
            .box-img-somos-home {
              width: 60%;
              margin: auto;
            }
            .box-somos-yesmom {
              width: 70%;
              margin: auto;
            }
            .subtitle-about {
              text-align: center;
            }
          }

          @media (max-width: 768px) {
            .box-banner-about {
              height: 15rem;
            }
            .box-somos-yesmom {
              padding: 1rem 2rem;
              font-size: 0.7rem;
              display: flex;
              justify-content: center;
              flex-direction: column;
              align-items: center;
            }
            .section-somos-home {
              padding-top: 1rem;
              padding-bottom: 1rem;
            }
            .subtitle-about {
              width: 8rem;
            }
            .nube1-somos {
              position: absolute;
              top: 5%;
              left: 0%;
              height: 3rem;
            }

            .nube2-somos {
              position: absolute;
              right: 2%;
              bottom: 3%;
              height: 2rem;
            }
            .fondo-video-somos {
              background: url(../../../image/fondo-verde-somos-responsive.png);
              height: 20rem;
              background-position: center;
              background-size: cover;
              padding-top: 2rem;
              padding-bottom: 5rem;
            }
            .box-video-somos {
              position: relative;
              padding-bottom: 56.25%; /* 16/9 ratio */
              padding-top: 1rem; /* IE6 workaround*/
              overflow: hidden;
              margin: 2rem;
            }
            .box-video-somos iframe {
              position: absolute;
              width: 100%;
              height: 100%;
            }
            .box-img-somos-home {
              margin: auto;
              display: block;
            }
            .img-somos {
              width: 80%;
              display: block;
              margin: auto;
            }
            .line-up-somos {
              top: -1.1rem;
              right: 0.3rem;
              width: 2rem;
            }

            .line-down-somos {
              bottom: -1.3rem;
              left: 0.4rem;
              width: 1.8rem;
            }
            .video-nosotros {
              width: 100%;
            }
            .text-title-blog {
              font-size: 1.5rem;
            }
          }
        `}
      </style>
    </AppLayout>
  );
};

export default index;
