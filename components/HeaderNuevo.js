import Link from "next/link";
import ActiveLink from "../components/ActiveLink";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import SearchBlog from "./Search/SearchBlog";
import MenuTienda from "./MenuTienda/MenuTienda";
import PopupCart from "./Popup/PopupCart/PopupCart";
import DropMenuMobile from "./DropMenuMobile";
import AvatarLogged from "./AvatarLogged";
import YesmomContext from "../context/Context";
import MenuProveedor from "./Proveedor/MenuProveedor";

const HeaderNuevo = () => {
  const {
    auth: { logged },
    ui: { cart = [] },
  } = useContext(YesmomContext);

  const [active, setActive] = useState(false);

  const [onlyStore, setOnlyStore] = useState(false);
  const [onlyBlog, setOnlyBlog] = useState(false);
  const [onlyProveedor, setOnlyProveedor] = useState(false);

  const { pathname } = useRouter();

  const handleClick = () => {
    console.log("click", active);
    setActive(!active);
  };

  const validateSeekerStore = () => {
    if (pathname.includes("/tienda")) {
      setOnlyStore(true);
    } else {
      setOnlyStore(false);
    }
  };
  const validateSeekerBlog = () => {
    if (pathname.includes("/blog")) {
      setOnlyBlog(true);
    } else {
      setOnlyBlog(false);
    }
  };
  const validateSelectProveedor = () => {
    if (pathname.includes("/proveedor")) {
      setOnlyProveedor(true);
    } else {
      setOnlyProveedor(false);
    }
  };
  const validateShow = () => {
    validateSeekerStore();
    validateSeekerBlog();
    validateSelectProveedor();
  };
  useEffect(() => {
    validateShow();
  }, []);

  return (
    <div className="box-yesmom">
      <div className="box-nav">
        <nav className="navbar-yesmom">
          <div className="burger-yesmom" onClick={handleClick}>
            <Image
              src="/image/header/burger.svg"
              alt="burger yesmom"
              width={40}
              height={40}
              // layout="intrinsic"
            />
          </div>
          <Link href="/" prefetch>
            <a className="mr-2 logo-yesmom">
              <Image
                src="/image/header/logo-yesmom.svg"
                alt="logo yesmom"
                width={60}
                height={60}
              />
            </a>
          </Link>
          <div className="hide-desktop">
            <Link href="/tienda" prefetch>
              <div>
                {cart.length > 0 && (
                  <div className="box-number-cart ">{cart.length}</div>
                )}

                <a className="mr-2 logo-yesmom">
                  <Image
                    src="/image/header/cesta.svg"
                    alt="logo tienda yesmom"
                    width={35}
                    height={35}
                  />
                </a>
              </div>
            </Link>
          </div>
          <div
            className={`box-items-menu ${
              active ? "" : "box-items-menu-desktop"
            }`}
          >
            <div className="box-items-menu-responsive">
              <ActiveLink href="/blog" activeClassName="active">
                <a className="item-menu-yesmom">
                  <Image
                    src="/image/header/blog.svg"
                    alt="logo blog yesmom "
                    width={25}
                    height={25}
                  />
                  <h6 className="text-navbar">Blog</h6>
                </a>
              </ActiveLink>
              <ActiveLink href="/tienda" activeClassName="active">
                <a className="item-menu-yesmom">
                  <Image
                    src="/image/header/tienda.svg"
                    alt="logo tienda yesmom "
                    width={25}
                    height={25}
                  />
                  <h6 className="text-navbar">Tienda</h6>
                </a>
              </ActiveLink>
              <ActiveLink href="/construccion" activeClassName="active">
                <a className="item-menu-yesmom">
                  <Image
                    src="/image/header/regalo.svg"
                    alt="logo regalo yesmom "
                    width={25}
                    height={25}
                  />
                  <h6 className="text-navbar">Regalos</h6>
                </a>
              </ActiveLink>

              {logged ? (
                <AvatarLogged />
              ) : (
                <ActiveLink href="/login" activeClassName="active">
                  <a className="item-menu-yesmom">
                    <Image
                      src="/image/header/iniciar-sesion.svg"
                      alt="logo blog yesmom "
                      width={25}
                      height={25}
                    />
                    <h6 className="text-navbar">Login</h6>
                  </a>
                </ActiveLink>
              )}

              <ActiveLink href="/ayuda" activeClassName="active">
                <a className="item-menu-yesmom">
                  <Image
                    src="/image/header/ayuda.svg"
                    alt="logo ayuda yesmom "
                    width={25}
                    height={25}
                  />
                  <h6 className="text-navbar">Ayuda</h6>
                </a>
              </ActiveLink>
              <ActiveLink href="/shopping-cart" activeClassName="active">
                <a className="item-menu-yesmom-cart">
                  <div className="container-cart-submenu">
                    {cart.length > 0 && (
                      <div className="box-number-cart slide-in-blurred-bottom">
                        {cart.length}
                      </div>
                    )}
                    <div className="dropdown-content scale-up-tr ">
                      <PopupCart />
                      {/* {isVisibleSubMenu && <PopupCart />} */}
                    </div>
                  </div>
                  <Image
                    src="/image/header/cesta.svg"
                    alt="logo blog yesmom "
                    width={25}
                    height={25}
                  />
                  <h6 className="text-navbar">Carrito</h6>
                </a>
              </ActiveLink>
            </div>
          </div>
        </nav>

        {onlyBlog && <SearchBlog />}
        {onlyStore && <MenuTienda />}
        {onlyProveedor && <MenuProveedor />}
      </div>
      <DropMenuMobile active={active} setActive={handleClick} logged={logged} />
      <style jsx>
        {`
          .container-cart-submenu {
            position: relative;
            display: inline-block;
          }
          .dropdown-content {
            visibility: hidden;
            position: absolute;
            z-index: 1;
            right: 0;
            top: 20;
            max-height: calc(100% - 7rem);
          }
          .container-cart-submenu:hover .dropdown-content {
            visibility: visible;
          }
          .container-cart-submenu:hover .box-cart {
            visibility: visible;
          }
          .container-cart-submenu:hover .scale-up-tr {
            transform: scale(1);
            transform-origin: 100% 0%;
          }
          .container-cart-submenu .scale-down-tr {
            -webkit-transform: scale(0);
            -moz-transform: scale(0);
            -ms-transform: scale(0);
            -o-transform: scale(0);
            transform: scale(0);
            transition: all 1.6s;
            transform-origin: 100% 0%;
          }
          .hover-active {
            visibility: hidden;
          }
          .active .text-navbar {
            color: #ec608d !important;
            text-decoration: none !important;
          }
          .box-nav {
            position: fixed;
            z-index: 9999;
            width: inherit;
            max-width: inherit;
            box-shadow: 0px 1px 10px #999;
          }
          .navbar-yesmom {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            padding: 0.3rem 4rem;
            background: #fff;
            width: inherit;
            max-width: inherit;
            box-shadow: 0px 1px 10px #999;
          }
          .burger-yesmom {
            display: none;
          }
          .item-menu-yesmom {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0rem 0.6rem;
            color: #616160;
            justify-content: flex-start;
            cursor: pointer;
          }
          .item-menu-yesmom-cart {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0rem 0.5rem;
            color: #616160;
            justify-content: flex-start;
            cursor: pointer;
          }

          .logo-yesmom:hover {
            transform: scale(1.1);
            animation: animateHeart 0.3s linear forwards !important;
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

          .item-menu-yesmom:hover {
            text-decoration: none !important;
            transform: scale(1.1);
            animation: animateHeart 0.3s linear forwards !important;
          }
          .item-menu-yesmom-cart:hover {
            text-decoration: none !important;
            transform: scale(1.1);
            animation: animateHeart 0.3s linear forwards !important;
          }
          .item-menu-yesmom-cart .text-navbar:hover ~ .hover-active {
            visibility: visible;
          }
          .text-navbar {
            font-size: 1.3rem;
            font-family: "mont-semibold";
            margin-top: 0.2rem;
          }
          .box-items-menu-responsive {
            display: flex;
            flex-direction: row;
            align-items: center;
          }
          .box-items-menu {
            margin-left: auto;
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }

          .box-items-menu-desktop {
            display: block;
          }
          .box-number-cart {
            width: 2.1rem;
            height: 2.1rem;
            border-radius: 50%;
            background: #dc6a8d;
            color: #ffff;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            font-family: "mont-semibold";
            font-size: 1.2rem;
            top: -0.8rem;
            right: -1.8rem;
            z-index: 999;
            cursor: pointer;
            box-shadow: 1px 1px 1px #999;
            -webkit-animation: puff-in-center 0.7s
              cubic-bezier(0.47, 0, 0.745, 0.715) both;
            animation: puff-in-center 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
              both;
          }

          .puff-in-center {
            -webkit-animation: puff-in-center 0.7s
              cubic-bezier(0.47, 0, 0.745, 0.715) both;
            animation: puff-in-center 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
              both;
          }

          @-webkit-keyframes puff-in-center {
            0% {
              -webkit-transform: scale(2);
              transform: scale(2);
              -webkit-filter: blur(4px);
              filter: blur(4px);
              opacity: 0;
            }
            100% {
              -webkit-transform: scale(1);
              transform: scale(1);
              -webkit-filter: blur(0px);
              filter: blur(0px);
              opacity: 1;
            }
          }
          @keyframes puff-in-center {
            0% {
              -webkit-transform: scale(2);
              transform: scale(2);
              -webkit-filter: blur(4px);
              filter: blur(4px);
              opacity: 0;
            }
            100% {
              -webkit-transform: scale(1);
              transform: scale(1);
              -webkit-filter: blur(0px);
              filter: blur(0px);
              opacity: 1;
            }
          }

          @media (min-width: 993px) {
            .box-items-menu {
              display: block;
            }
            .hide-desktop {
              display: none;
            }
          }
          @media (max-width: 992px) {
            .burger-yesmom {
              display: block;
            }
            .navbar-yesmom {
              padding: 0.5rem 2rem;
            }
            .box-items-menu-responsive {
              flex-direction: column;
            }
            .box-items-menu {
              width: 100%;
              margin: 1.5rem 0;
            }
            .item-menu-yesmom {
              margin: 0.5rem 1rem;
              flex-direction: row;
            }
            . .item-menu-yesmom-cart {
              margin: 0.5rem 1rem;
              flex-direction: row;
            }
            .box-items-menu-desktop {
              display: none;
            }
            .box-items-menu {
              display: none !important;
            }

            .text-navbar {
              margin: 0;
              margin-left: 0.5rem;
            }
            .box-number-cart {
            width: 2.2rem;
            height: 2.2rem;
            font-size: 1.2rem;
            top: 0.5rem;
            right: 1.5rem;
          }

          }
        `}
      </style>
    </div>
  );
};

export default HeaderNuevo;
