import Link from "next/link";
import ActiveLink from "../components/ActiveLink";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

const HeaderNuevo = () => {
  const [active, setActive] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    console.log("click", active);
    setActive(!active);
  };
  return (
    <>
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
        <Link href="/"  prefetch>
          <a className="mr-2">
            <Image
              src="/image/header/logo-yesmom.svg"
              alt="logo yesmom"
              width={65}
              height={65}
            />
          </a>
        </Link>
        <div
          className={`${active ? "" : "box-items-menu-desktop"} box-items-menu`}
        >
          <div className="box-items-menu-responsive">
            <ActiveLink href="/blog" activeClassName="active"  prefetch >
              <a className="item-menu-yesmom">
                <Image
                  src="/image/header/blog.svg"
                  alt="logo blog yesmom "
                  width={22}
                  height={22}
                />
                <h6 className="text-navbar">Blog</h6>
              </a>
            </ActiveLink>
            <ActiveLink href="/construccion" activeClassName="active"  prefetch > 
              <a className="item-menu-yesmom">
                <Image
                  src="/image/header/tienda.svg"
                  alt="logo tienda yesmom "
                  width={22}
                  height={22}
                />
                <h6 className="text-navbar">Tienda</h6>
              </a>
            </ActiveLink>
            <ActiveLink href="/construccion" activeClassName="active">
              <a className="item-menu-yesmom">
                <Image
                  src="/image/header/regalo.svg"
                  alt="logo regalo yesmom "
                  width={22}
                  height={22}
                />
                <h6 className="text-navbar">Regalos</h6>
              </a>
            </ActiveLink>
            <ActiveLink href="/construccion" activeClassName="active">
              <a className="item-menu-yesmom">
                <Image
                  src="/image/header/iniciar-sesion.svg"
                  alt="logo blog yesmom "
                  width={22}
                  height={22}
                />
                <h6 className="text-navbar">Login</h6>
              </a>
            </ActiveLink>
          </div>
        </div>
      </nav>
      <style jsx>
        {`
          .active {
            color: red;
            font-size: 2rem;
            font-weight: 900;
          }

          .navbar-yesmom {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            padding: 1rem 4rem;
            background: #fff;
            position: fixed;
            z-index: 9999;
            width: 100%;
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
            }
            .item-menu-yesmom {
              margin: 0.5rem 1rem;
              flex-direction: row;
            }
            .box-items-menu-desktop {
              display: none;
            }
            .text-navbar {
              margin: 0;
              margin-left: 0.5rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default HeaderNuevo;
