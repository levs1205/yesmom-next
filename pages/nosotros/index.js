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
      <div className="box-banner-about fade-in animated ">
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
          <img
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

          <Row className="sin-margin-flex">
            <Col xs={12} md={12} lg={5} xl={5}>
              <div className="box-somos-yesmom">
                <div className="pb-3 subtitle-about">
                  <Image
                    src="/image/somos-yesmom.svg"
                    width={200}
                    height={100}
                    alt="yesmom"
                  />
                </div>
                <div>
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
              </div>
            </Col>
            <Col xs={12} md={12} lg={6} xl={6}>
              <div className="box-img-somos-home">
                <div className="img-somos tilt-in-fwd-tr">
                  <div className="blue-lines-right heartbeat">
                    <Image
                      src="/image/blue-lines-top-right.svg"
                      width={23}
                      height={22}
                      alt="imagen sorteo yesmom home"
                    />
                  </div>
                  <Image
                    src="/image/about.png"
                    width={80}
                    height={63}
                    layout="responsive"
                    alt="imagen sorteo yesmom home"
                  />
                  <div className="blue-lines-left heartbeat">
                    <Image
                      src="/image/blue-lines-bottom-left.svg"
                      width={23}
                      height={22}
                      alt="imagen sorteo yesmom home"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="fondo-video-somos">
        <div className="box-title-nuestra-historia">
          <div className="icon-title-video">
            <FontAwesomeIcon
              icon={faStar}
              className="cl-yellow heartbeat"
            ></FontAwesomeIcon>
          </div>
          <div className="title-fuxia">Nuestra historia</div>
          <div className="icon-title-video">
            <FontAwesomeIcon
              icon={faStar}
              className="cl-yellow heartbeat"
            ></FontAwesomeIcon>
          </div>
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
          .box-title-nuestra-historia .title-fuxia{
            font-size: 2rem;
            color: #556EA1;
          }
          .box-title-nuestra-historia>.icon-title-video:first-child {
            transform: rotate(30.86deg);
            font-size:22px;
          }
          .box-title-nuestra-historia>.icon-title-video:last-child {
            transform: rotate(36.46deg);
            font-size:22px;
          }
          .box-somos-yesmom {
            padding: 3.9rem 3.2rem;
            font-family: "mont-regular" !important;
            font-size: 1rem;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
       
          .box-somos-yesmom p:first-child {
            margin-bottom: 3rem;
          }
          .box-somos-yesmom > .subtitle-about {
            width: 9.8rem;
            height: auto;
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
            background: url(../../../image/fondo-verde-video.png);
            height: 40rem;
            background-position: center;
            background-size: cover;
            padding-top: 7.2rem;
            padding-bottom: 5rem;
          }
          .box-video-somos {
            display: flex;
            justify-content: center;
            position: relative;
            overflow: hidden;
            margin: 2.9rem 4.5rem 0 4.5rem;
            padding: auto;
            height: auto;
          }
          .video-nosotros {
            height: calc(100% - 1rem);
            max-height: 180px;
            position: relative;
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
            padding: 3rem 3.2rem;
            position: relative;
          }
          .blue-lines-left, .blue-lines-right {
            position: absolute;
          }
          .blue-lines-right {
            right: 15px; 
            top: 10px;
          }
          .blue-lines-left {
            left: 15px; 
            bottom: 12px;
          }
          .text-title-blog {
            font-family: "Clicker Script", cursive;
            font-size: 4rem;
            margin: 0rem 0.5rem 0rem;
            color: #fff;
          }
          
          @media (min-width : 768px){
            .fondo-video-somos {
              background: url(../../../image/fondo-verde-video.png);
              height: 50rem;
              background-position: center;
              background-size: cover;
              padding-top: 4.2rem;
              padding-bottom: 5rem;
            }
            .box-somos-yesmom > .subtitle-about {
              width: 13rem;
              height: auto;
              margin-bottom: 2.8px;
            }
            .img-somos {
              max-width: 58rem;
              padding: 0rem auto;
              margin: auto;
            }
            .box-video-somos {
              margin: 6rem 20rem 0 20rem;
            }
            .video-nosotros {
              width: calc(100% - 1rem);
              max-height: 30rem;
              position: relative;
            }
            .box-somos-yesmom p {
              font-size:1.15rem
            }
            
          }          
          @media (min-width : 1024px){
            .fondo-video-somos {
              background: url(../../../image/fondo-verde-video.png);
              height: 60rem;
              background-position: center;
              background-size: cover;
              padding-top: 7.2rem;
              padding-bottom: 5rem;
            }
            .box-title-nuestra-historia .title-fuxia{
              font-size: 3.5rem;
            }
            .box-title-nuestra-historia>.icon-title-video:first-child {
              transform: rotate(30.86deg);
            }
            .box-title-nuestra-historia>.icon-title-video:last-child {
              transform: rotate(36.46deg);
            }
            .box-somos-yesmom {
              padding: 3.9rem 3.2rem;
              font-family: "mont-regular" !important;
              font-size: 1rem;
              position: relative;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
            }
            .box-somos-yesmom > .subtitle-about {
              width: 19rem;
              height: auto;
              margin-bottom: 2.8px;
            }
            .box-somos-yesmom p {
              font-size: 1.30rem;
            }
            .box-video-somos {
              margin: 5rem 32rem 0 32rem;
            }
            .video-nosotros {
              height: calc(100% - 1rem);
              max-height: 40rem;
              position: relative;
            }
          }
          @media (min-width : 1280px){
            .fondo-video-somos {
              background: url(../../../image/fondo-verde-video.png);
              height: 70rem;
              background-position: center;
              background-size: cover;
              padding-top: 6.2rem;
              padding-bottom: 4.5rem;
            }
            .box-title-nuestra-historia .title-fuxia{
              font-size: 4.5rem;
            }
            .box-title-nuestra-historia>.icon-title-video:first-child {
              transform: rotate(30.86deg);
            }
            .box-title-nuestra-historia>.icon-title-video:last-child {
              transform: rotate(36.46deg);
            }
            .box-somos-yesmom {
              padding: 3.9rem 3.2rem;
              font-family: "mont-regular" !important;
              font-size: 1rem;
              position: relative;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              
            }
            .box-somos-yesmom > .subtitle-about {
              width: 23rem;
              height: auto;
              margin-bottom: 2.8px;
            }
            .box-somos-yesmom p {
              font-size: 1.50rem;
            }
            .box-video-somos {
              max-width: 75rem;
              margin: 5.6rem auto 0 auto;
            }
            .video-nosotros {
              height: calc(100% - 1rem);
              max-height: 64rem;
              position: relative;
            }    
          }
        `}
      </style>
    </AppLayout>
  );
};

export default index;
