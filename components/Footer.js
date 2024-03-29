import Link from "next/link";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={3} lg={3} xl={3}>
              <div className="padding-left text-left">
                <h6 className="title-footer">
                  <b>CONTENIDO</b>
                </h6>
                <div className="box-contenido-footer">
                  <Link href="/nosotros">
                    <a>Nosotros</a>
                  </Link>
                  <Link href="/blog">
                    <a>Blog</a>
                  </Link>
                  <Link href="/tienda">
                    <a>Tienda</a>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} xl={3}>
              <div className="padding-left text-left pb-1">
                <h6 className="title-footer off-mobile">
                  <b className="p-1">SERVICIO AL CLIENTE</b>
                </h6>
                <div className="box-contenido-footer">
                  <Link href="/terminosycondiciones">
                    <a>Términos y condiciones</a>
                  </Link>
                  <Link href="/politicasdeprivacidad">
                    <a>Política de privacidad</a>
                  </Link>
                  <Link href="/librodereclamaciones">
                    <a>
                      <img
                        src="/image/libro-de-reclamaciones.png"
                        layout="responsive"
                        width={"50%"}
                        height={"50%"}
                      />
                      <br />
                    </a>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} xl={3}>
              <div className="padding-left text-center">
                <h6 className="title-footer">
                  <b>CONTÁCTANOS</b>
                </h6>
                {/* <a href="info@yesmom.com.pe">info@yesmom.com.pe</a> */}
                <p>info@yesmom.com.pe</p>
                <p>+51 947 234 452</p>
                <p>Calle Roma 316, Miraflores</p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} xl={3}>
              <div className="padding-left text-center">
                <h6 className="title-footer">
                  <b>SÍGUENOS</b>
                </h6>
                <a
                  className="icon-redes"
                  href="https://www.facebook.com/Yes-Mom-Per%C3%BA-104308198182894"
                  target="blank"
                >
                  <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                </a>
                <a
                  className="icon-redes"
                  href="https://www.instagram.com/yesmomperu/"
                  target="blank"
                >
                  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </a>
                <h6 className="title-footer">
                  <b>MEDIOS DE PAGO</b>
                </h6>
                <div className="container-payment">
                  <img
                    src="/image/payment/payment-methods.png"
                    layout="responsive"
                    width={"100%"}
                    height={"100%"}
                  />
                  <br />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <style jsx>
        {`
          .footer {
            background: #556ea1;
            background-image: url("../../image/trama-footer.svg");
            color: #fff;
            background-position: top center;
            background-size: cover;
            padding: 5rem 0;
            background-repeat: no-repeat;
            font-family: "mont-regular";
          }

          .box-contenido-footer a {
            display: block;
          }
          .box-contenido-footer {
            display: flex;
            flex-direction: column;
          }
					.container-payment {
						background: #ffffff;
						padding: 0.5rem;
					}
          .footer a {
            color: #fff;
            font-size: 1.3rem;
            text-decoration: none;
          }
          .title-footer {
            font-size: 1.6rem;
          }
          .footer .padding-left p {
            font-size: 1.3rem;
          }
          .footer a:hover {
            color: #ec608d;
            text-decoration: none;
            font-weight: bolder;
          }

          .tilte-footer {
            margin-bottom: 1.5rem;
          }

          .icon-redes {
            font-size: 2rem !important;
            margin-right: 0.7rem;
            margin-left: 0.7rem;
          }
          .padding-left {
            padding-left: 6rem;
          }

          .title-footer {
            font-family: "mont-semibold";
          }
          @media (min-width: 1800px) {
            .footer {
              padding: 2.5rem 0;
            }
            .footer a {
              font-size: 1.8rem;
            }
            .footer .padding-left {
              padding-left: 0rem;
            }
            .title-footer {
              margin-bottom: 1rem;
              margin-top: 1rem;
              font-size: 2.3rem;
            }
            .footer .padding-left p {
              margin-bottom: 0.2rem;
              font-size: 1.8rem;
            }
          }

          @media (max-width: 769px) {
            .footer {
              background-image: url("../../image/trama-footer-responsive.svg");
              background-position: top center;
              background-size: cover;
              padding: 3rem 0;
              background-repeat: no-repeat;
            }

            .footer a {
              color: #fff;
              text-decoration: none;
              font-size: 1.5rem;
            }

            .footer a:hover {
              color: #000;
              text-decoration: none;
            }

            .title-footer {
              margin-bottom: 0.5rem;
              margin-top: 1rem;
              font-size: 2rem;
            }

            .icon-redes {
              font-size: 1.6rem;
              margin-right: 0.7rem;
              margin-left: 0.7rem;
              margin-top: 0.5rem;
            }
            .footer .padding-left {
              padding-left: 0rem;
              text-align: center !important;
            }
            .footer .padding-left p {
              margin-bottom: 0.4rem;
              font-size: 1.5rem;
            }
            .off-mobile {
              display: none !important;
            }
          }
          @media (min-width: 576px) and (max-width: 769px) {
            .icon-redes {
              font-size: 1rem;
            }

            /* 
            .footer .padding-left p {
              font-size: 0.65rem;
            }
            .title-footer {
              font-size: 0.75rem;
            }
            .footer a {
              font-size: 0.65rem;
            } */
          }
        `}
      </style>
    </>
  );
};

export default Footer;
