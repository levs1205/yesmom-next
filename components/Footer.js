import Link from "next/Link"
import { Container, Row, Col } from "react-bootstrap";
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
          <div></div>
          <Row>
            <Col xs={12} md={4}>
              <div className="padding-left text-left">
                <h6 className="title-footer">
                  <b>CONTENIDO</b>
                </h6>
                <Link href="/nosotros">
                  <a>Blog</a>
                </Link>
                <Link href="/nosotros">
                  <a>Tienda</a>
                </Link>
                <Link href="/nosotros">
                  <p>Regalos</p>
                </Link>
                <Link href="/nosotros">
                  <a>Sobre nosotros</a>
                </Link>
                <Link href="/nosotros">
                  <a>Términos y condiciones</a>
                </Link>
                <Link href="/nosotros">
                  <a>Política de privacidad</a>
                </Link>
                <Link href="/nosotros">
                  <a>Libro de reclamaciones</a>
                </Link>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="padding-left text-center">
                <h6 className="title-footer">
                  <b>CONTÁCTANOS</b>
                </h6>
                <p>mibebe@gmail.com</p>
                <p>3333333333</p>
                <p>123 Los Robles Miraflores</p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="padding-left text-center">
                <h6 className="title-footer">
                  <b>SÍGUENOS</b>
                </h6>
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="icon-redes"
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="icon-redes"
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="icon-redes"
                ></FontAwesomeIcon>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <style jsx>
        {`
          .footer {
            background: #556ea1;
            background-image: url("../../assets/trama-footer.svg");
            color: #fff;
            background-position: top center;
            background-size: cover;
            padding: 5rem 0;
            background-repeat: no-repeat;
            font-family: "mont-regular";
          }

          .footer a {
            color: #fff;
            text-decoration: none;
          }

          .footer a:hover {
            color: #000;
            text-decoration: none;
          }

          .tilte-footer {
            margin-bottom: 1.5rem;
          }

          .icon-redes {
            font-size: 1.5rem;
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
            .footer .padding-left {
              padding-left: 0rem;
            }
            .title-footer {
              margin-bottom: 1rem;
              margin-top: 1rem;
              font-size: 0.8rem;
            }
            .footer .padding-left p {
              margin-bottom: 0.2rem;
              font-size: 0.7rem;
            }
          }
          @media (max-width: 768px) {
            .footer {
              background-image: url("../../assets/trama-footer-responsive.svg");
              background-position: top center;
              background-size: cover;
              padding: 3rem 0;
              background-repeat: no-repeat;
              font-family: "Montserrat", sans-serif;
            }

            .footer a {
              color: #fff;
              text-decoration: none;
            }

            .footer a:hover {
              color: #000;
              text-decoration: none;
            }

            .title-footer {
              margin-bottom: 0.5rem;
              margin-top: 1rem;
              font-size: 0.9rem;
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
              font-size: 0.8rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default Footer;