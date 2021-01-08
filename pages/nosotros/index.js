import React from "react";
import AppLayout from "../../components/AppLayout";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

const index = () => {
  return (
    <AppLayout>
      <div className="box-banner-about">
        <Image
          src="/image/onda-blanca.svg"
          alt="ondas"
          width={70}
          height={70}
        //   layout="responsive"
          className="ondas"
        />
        <h4 className="text-title-blog">Sobre nosotros</h4>
        <Image
          src="/image/onda-blanca.svg"
          alt="ondas"
          width={70}
          height={70}
        //   layout="responsive"
          className="ondas"
        />
      </div>
      <Container fluid="true" className="section-sorteo-home">
        <Image
          src="/image/nube1.svg"
          className="nube1-somos"
          width={10}
          height={10}
        //   layout="responsive"
          alt="nube"
        />
        <Image
          src="/image/nube2.svg"
          className="nube2-somos"
          width={10}
          height={10}
        //   layout="responsive"
          alt="nube"
        />

        <Row>
          <Col xs={12} md={6} lg={6} xl={6}>
            <div className="box-somos-yesmom">
              <Image
                src="/image/somos-yesmom.svg"
                className="pb-3 subtitle-about"
                width={70}
                height={70}
                layout="responsive"
                alt="yesmom"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem mi
                netus id elementum tellus mattis lorem ut scelerisque. Faucibus
                leo tellus nam tincidunt lectus morbi eget elementum. Sed fames
                mollis duis duis adipiscing nisi, eleifend orci, lacinia.
                Feugiat elementum elementum sit arcu scelerisque aliquam quisque
                imperdiet congue. Aliquam adipiscing amet netus ac habitant
                faucibus ut morbi nam. Augue cursus vulputate pulvinar ut vitae
                bibendum viverra nisi. Enim quam tellus, ipsum vitae id ultrices
                feugiat.
              </p>
              <p>
                Eget nulla elementum et, bibendum at adipiscing. Tempus lectus
                accumsan morbi velit interdum ultrices odio sagittis Augue
                cursus vulputate pulvinar ut vitae bibendum viverra nisi. Enim
                quam tellus, ipsum vitae id ultrices feugiat. Eget nulla
                elementum et, bibendum at adipiscing. Tempus lectus accumsan
                morbi velit interdum ultrices odio sagittis.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6} xl={6}>
            <div className="box-img-sorteo-home">
              <Image
                src="/image/lineas-azul1.svg"
                className="line-up-somos"
                width={40}
                height={40}
                layout="responsive"
                alt="lineas"
              />
              <Image
                src="/image/about.png"
                className="img-sorteo"
                width={150}
                height={150}
                layout="responsive"
                alt="imagen sorteo yesmom home"
              />
              <Image
                src="/image/lineas-azul2.svg"
                className="line-down-somos"
                width={40}
                height={40}
                layout="responsive"
                alt="lineas"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="fondo-video-somos">
        <h3 className="title-fuxia">&#9733; Nuestra historia &#9733;</h3>
        <div className="box-video-somos">
          <iframe
            src="https://www.youtube.com/embed/HmvCTcrR8fA"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <style jsx>
        {`
          .box-banner-about {
            height: 15rem;
            background: url(../../../image/about-header.png) no-repeat center;
            background-size: cover;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .box-somos-yesmom {
            padding: 3.5rem;
            font-family: "Montserrat", sans-serif;
            font-size: 1.1rem;
            position: relative;
          }

          .line-up-somos {
            position: absolute;
            top: -2rem;
            right: 2rem;
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
            padding-bottom: 56.25%; /* 16/9 ratio */
            overflow: hidden;
            margin: 3rem 2rem;
          }
          .box-video-somos iframe {
            position: absolute;
            width: 50%;
            height: 50%;
          }
          @media (min-width: 1800px) {
            .box-somos-yesmom {
              padding: 1rem 3.5rem;
              font-family: "Montserrat", sans-serif;
              font-size: 0.8rem;
              position: relative;
            }
            .line-up-somos {
              position: absolute;
              top: -2rem;
              right: 4.5rem;
              width: 2.5rem;
              transform: rotate(85deg);
            }
            .fondo-video-somos {
              background: url(../../../image/fondo-verde-somos.png);
              height: 34rem;
              padding-top: 3.5rem;
              padding-bottom: 3.5rem;
            }
          }
          @media (max-width: 768px) {
            .box-banner-about {
              height: 15rem;
            }
            .box-somos-yesmom {
              padding: 1rem 2rem;
              font-size: 0.9rem;
              display: flex;
              justify-content: center;
              flex-direction: column;
              align-items: center;
            }
            .section-sorteo-home {
              padding-top: 1rem;
              padding-bottom: 1rem;
            }
            .subtitle-about {
              height: 4rem;
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
          }
        `}
      </style>
    </AppLayout>
  );
};

export default index;
