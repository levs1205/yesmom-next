import Link from "next/link";
import ActiveLink from "../components/ActiveLink";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SearchBlog from "./Search/SearchBlog";
import MenuTienda from "./MenuTienda/MenuTienda";
import PopupCart from "./Popup/PopupCart/PopupCart"
import DropMenuMobile from "./DropMenuMobile";

const HeaderNuevo = () => {
  const [active, setActive] = useState(false);
  const [isVisibleSubMenu, setIsVisibleSubMenu] = useState(false);

  const [onlyStore, setOnlyStore] = useState(false);
  const [onlyBlog, setOnlyBlog] = useState(false);

  const { pathname } = useRouter();

  const handleClick = () => {
    console.log("click", active);
    setActive(!active);
  };

  const validateSeekerStore = () => {
    if (pathname === "/tienda") {
      setOnlyStore(true);
    } else {
      setOnlyStore(false);
    }
  }
  const validateSeekerBlog = () => {
    if (pathname.includes("/blog")) {
      setOnlyBlog(true);
    } else {
      setOnlyBlog(false);
    }
  }
  useEffect(() => {
    validateSeekerStore();
    validateSeekerBlog();
  }, [])

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
          <div
            className={`box-items-menu ${active ? "" : "box-items-menu-desktop"
              }`}
          >
            <div className="box-items-menu-responsive">
              <ActiveLink href="/blog" activeClassName="active">
                <div onClick={() => isVisibleSubMenu === true && setIsVisibleSubMenu(false)}>
                  <a className="item-menu-yesmom">
                    <Image
                      src="/image/header/blog.svg"
                      alt="logo blog yesmom "
                      width={22}
                      height={22}
                    />
                    <h6 className="text-navbar">Blog</h6>
                  </a>
                </div>
              </ActiveLink>
              <ActiveLink href="/tienda" activeClassName="active">
                <div onClick={() => isVisibleSubMenu === true && setIsVisibleSubMenu(false)}>
                  <a className="item-menu-yesmom">
                    <Image
                      src="/image/header/tienda.svg"
                      alt="logo tienda yesmom "
                      width={23}
                      height={23}
                    />
                    <h6 className="text-navbar">Tienda</h6>
                  </a>
                </div>
              </ActiveLink>
              <ActiveLink href="/construccion" activeClassName="active">
                <div onClick={() => isVisibleSubMenu === true && setIsVisibleSubMenu(false)}>
                  <a className="item-menu-yesmom">
                    <Image
                      src="/image/header/regalo.svg"
                      alt="logo regalo yesmom "
                      width={22}
                      height={22}
                    />
                    <h6 className="text-navbar">Regalos</h6>
                  </a>
                </div>
              </ActiveLink>
              <ActiveLink href="/construccion" activeClassName="active">
                <div onClick={() => isVisibleSubMenu === true && setIsVisibleSubMenu(false)}>
                  <a className="item-menu-yesmom">
                    <Image
                      src="/image/header/iniciar-sesion.svg"
                      alt="logo blog yesmom "
                      width={22}
                      height={22}
                    />
                    <h6 className="text-navbar">Iniciar sesión</h6>
                  </a>
                </div>
              </ActiveLink>
              <ActiveLink href="/construccion" activeClassName="active">
                <div onClick={() => setIsVisibleSubMenu(!isVisibleSubMenu)}>
                  <a className="item-menu-yesmom-cart">
                    <Image
                      src="/image/header/cesta.svg"
                      alt="logo blog yesmom "
                      width={22}
                      height={22}

                    />
                    <h6 className="text-navbar">Carrito</h6>

                  </a>
                </div>
              </ActiveLink>
            </div>
          </div>
        </nav>
        <div>
          {isVisibleSubMenu && <PopupCart />}
        </div>
        {onlyBlog && <SearchBlog />}
        {onlyStore && <MenuTienda />}

      </div>
      <DropMenuMobile active={active} setActive={handleClick} />
      <style jsx>
        {`
          .hover-active{
            visibility:hidden
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
            flex-wrap: wrap;
            padding: 0.3rem 4rem;
            background: #fff;
            width: inherit;
            max-width: inherit;
            box-shadow: 0px 1px 10px #999;
          }
          .burger-yesmom {
            margin-right: auto;
            display: none;
          }
          .item-menu-yesmom {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0rem 0.5rem;
            color: #616160;
            justify-content: flex-start;
          }
           .item-menu-yesmom-cart {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0rem 0.5rem;
            color: #616160;
            justify-content: flex-start;
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
          .item-menu-yesmom-cart:hover{
            text-decoration: none !important;
            transform: scale(1.1);
            animation: animateHeart 0.3s linear forwards !important;
          }
          .item-menu-yesmom-cart .text-navbar:hover ~ .hover-active{
            visibility:visible
          }
          .text-navbar {
            font-family: "mont-semibold";
          }
          .box-items-menu-responsive {
            display: flex;
            flex-direction: row;
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

          @media (min-width:993px){
            .box-items-menu{
              display:block;
            }
          }
          @media (max-width: 992px) {
            .burger-yesmom {
              display: block;
            }
            .navbar-yesmom {
              padding: 0.5rem 1rem;
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
            .box-items-menu-desktop{
              display: none;
            }
            .box-items-menu{
              display:none!important;
            }
            
            .text-navbar {
              margin: 0;
              margin-left: 0.5rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default HeaderNuevo;
