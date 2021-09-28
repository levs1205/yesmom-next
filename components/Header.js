import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import Image from "next/image";
import PopupCart from "./Popup/PopupCart/PopupCart"

const Header = () => {
  return (
    <>
      <div className="header-yesmom">
        <Navbar expand="lg" className=" justify-content-between ">
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <Image
              src="/image/header/burger.svg"
              alt="burger yesmom"
              className="burger-yesmom"
              width={50}
              height={50}
              // layout="intrinsic"
            />
          </Navbar.Toggle>

          <Navbar.Brand href="/" className="hover-efect">
            <Image
              src="/image/header/logo-yesmom.svg"
              alt="logo yesmom"
              className="logo-yesmom"
              width={70}
              height={70}
              // layout="responsive"
            />
          </Navbar.Brand>
          {/* <Nav.Link href="#link" className="item-navbar">
            <figure className="item-menu">
              <img src={cesta} alt="logo tienda yesmom" />
            </figure>
          </Nav.Link> */}
          <div className="items-right-navBar">
            <Navbar.Collapse id="basic-navbar-nav">
              {/* <Form inline className="ml-form-search">
            <Button variant="">
              <div className="lupa-img">
              <img
                src="/image/header/lupa.svg"
                alt="lupa yesmom"

                width={20}
                height={20}
              />
              </div>
            </Button>
            <FormControl
              type="text"
              placeholder="¿Que es lo que buscas?"
              className="mr-sm-2 input-search"
            />
          </Form> */}
              <Nav className="nav-items-collapse ">
                <Link
                  href="/blog"
                  className="item-navbar hover-efect"
                  activeClassName="is-active"
                >
                  <a>
                    <figure className="item-menu ">
                      <Image
                        src="/image/header/blog.svg"
                        alt="logo blog yesmom "
                        //   className="lupa-img"
                        width={70}
                        height={70}
                      />
                    </figure>
                    <h6 className="">Blog</h6>
                  </a>
                </Link>
                <Link
                  href="/pagina-en-construccion"
                  className="item-navbar hover-efect "
                  activeClassName="is-active"
                >
                  <a>
                    <figure className="item-menu ">
                      <Image
                        src="/image/header/tienda.svg"
                        alt="logo tienda yesmom"
                        //   className="lupa-img"
                        width={70}
                        height={70}
                      />
                    </figure>
                    <h6>Tienda</h6>
                  </a>
                </Link>
                <Link
                  href="/pagina-en-construccion"
                  className="item-navbar hover-efect"
                  activeClassName="is-active"
                >
                  <a>
                    <figure className="item-menu">
                      <Image
                        src="/image/header/regalo.svg"
                        alt="logo regalo yesmom"
                        //   className="lupa-img"
                        width={70}
                        height={70}
                      />
                    </figure>
                    <h6>Regalos</h6>
                  </a>
                </Link>
                {/* <Nav.Link href="#link" className="item-navbar">
                <img
                  src={registrate}
                  alt="logo regrístrate yesmom"
                  className="item-menu"
                />
                <h6>Regístrate</h6>
              </Nav.Link> */}
                <Link
                  href="/pagina-en-construccion"
                  className="item-navbar hover-efect"
                  activeClassName="is-active"
                >
                  <a>
                    <figure className="item-menu">
                      <Image
                        src="/image/header/iniciar-sesion.svg"
                        alt="logo iniciar sesión yesmom"
                        //   className="lupa-img"
                        width={70}
                        height={70}
                      />
                    </figure>
                    <h6>Login</h6>
                  </a>
                </Link>
                {/* <NavLink to="/cesta" className="item-navbar"  activeClassName='is-active'>
                <figure className="item-menu">
                  <img src={cesta} alt="logo cesta yesmom" />
                </figure>
                <h6>Cesta</h6>
              </NavLink> */}
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>



      <style jsx>
        {`

        .header-yesmom{
          padding: 0rem 5rem !important;
            background: #fff;
            z-index: 99;

            width: 100%
        }

        .items-right-navBar{
          display: flex;
          justify-content: flex-end;

        }

        .jsx-1465798883{
          margin-right:3rem
        }
          {/* .navbar {
            padding: 1rem 5rem !important;
            background: #fff;
            z-index: 99;
          } */}
          {/* :global(#basic-navbar-nav){
            display: flex ;
            justify-content: flex-end;
          } */}

          .logo-yesmom {
            width: 5rem;
          }
          .item-navbar {
            display: flex !important;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-family: "Montserrat", sans-serif;
            margin: 0rem 0.5rem;
            text-decoration: none;
          }

          .item-menu {
            width: 1.6rem;
            height: 1.6rem;
            margin: 0 0 0.5rem !important;
          }

          .item-menu img {
            width: 100%;
            height: 100%;
          }

          .input-search {
            border: none !important;
            border-bottom: 1px solid #000 !important;
            border-radius: 0 !important;
          }

          .nav-items-collapse {
            margin-left: auto;
          }

          .ml-form-search {
            margin-left: auto;
          }

          .lupa-img {
            width: 1.8rem;
          }

          @keyframes animateHeart {
            0% {
              transform: scale(1);
            }
            40% {
              transform: scale(1.09);
            }
            100% {
              transform: scale(1.1);
            }
          }

          .item-navbar h6 {
            color: #616160;
            text-decoration: none;
          }
          .item-navbar h6:hover {
            text-decoration: none !important;
          }
          .item-navbar:link,
          .item-navbar:visited,
          .item-navbar:active {
            text-decoration: none;
          }
          .is-active h6 {
            font-weight: 800;
          }

          .hover-efect {
            animation: animateHeart 0.3s linear forwards !important;
            cursor: pointer;
          }
          .hover-efect:hover,
          .hover-efect:focus {
            transform: scale(1.2) !important;
          }
          {/* @media (max-width: 992px) {
            :global(#basic-navbar-nav){
            justify-content:  flex-start;
          } */}
          }
          @media (min-width: 1800px) {
            .logo-yesmom {
              width: 3.5rem;
            }
            .item-menu {
              width: 1.3rem;
              height: 1.3rem;
            }
            .item-navbar h6 {
              font-size: 0.8rem;
            }
            .lupa-img {
              width: 1.3rem;
            }
            .form-control {
              padding: 0.3rem 0.75rem !important;
              font-size: 0.8rem !important;
            }
            .navbar {
              padding: 0.5rem 5rem !important;
            }
          }

          @media (max-width: 991px) {
            .logo-yesmom {
              width: 3rem;
            }

            .burger-yesmom {
              width: 2rem;
            }
            .navbar {
              padding: 1rem !important;
            }

            .navbar-toggler {
              border: none !important;
            }

            .navbar-collapse {
              display: flex;
              flex-direction: column-reverse;
            }

            .nav-items-collapse {
              padding-left: 5rem;
              width: 100%;
            }

            .nav-items-collapse img {
              display: none;
            }

            .nav-link {
              padding: 0rem 1rem !important;
            }

            .form-inline {
              flex-flow: initial !important;
              padding-top: 2rem;
              padding-bottom: 1rem !important;
            }
            .ml-form-search {
              margin-left: 0;
            }

            .item-navbar {
              align-items: flex-start !important;
            }
            .lupa-img {
              width: 1.5rem;
            }

            .item-navbar h6 {
              font-size: 1.1rem;
            }

            a.item-navbar.nav-link {
              border-bottom: 0.5px solid #575756;
            }
            .navbar {
              position: fixed !important;
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
};

export default Header;
