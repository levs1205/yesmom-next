import { useContext } from "react";
import YesmomContext from "../../context/Context";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Container } from "react-bootstrap";
import { setCategory } from "../../context/actions/ui";

const SidebarProductoProveedor = ({ setCategorySelected, name, slug }) => {
  const { query, pathname } = useRouter();
  const {
    dispatchUi,
    ui: { categories, category: categorySelected },
  } = useContext(YesmomContext); /* || allCategories  */

  const { proveedor } = query;
  const path = "/tienda/";

  const handleCategorie = (cat) => () => {
    if (cat) {
      dispatchUi(setCategory(cat));
    }
  };

  return (
    <Container>
      <div className="side-bar">
        <div className="text-title-filtros">
          <p> Filtros </p>
        </div>
        <hr />
        <ul>
          <div className="show-desktop">
            <li
              className={`${
                `${path}${proveedor}` === `${path}${slug}`
                  ? "active-link-categoria"
                  : ""
              }`}
              onClick={handleCategorie("Todos")}
            >
              <Link href={`${path}${slug}`}>
                <a>Solo en {name}</a>
              </Link>
            </li>
            <li
              className={`${
                `${path}${proveedor}` === `${path}promociones-${slug}`
                  ? "active-link-categoria"
                  : ""
              }`}
              onClick={handleCategorie("Todos")}
            >
              <Link href={`${path}promociones-${slug}`}>
                <a>Promociones</a>
              </Link>
            </li>
          </div>
        </ul>
      </div>
      <style jsx>
        {`
          .show-desktop {
            display: none;
          }
          hr {
            margin: 0;
          }
          .text-title-filtros {
            font-family: "mont-heavy" !important;
            font-size: 2rem;
            font-weight: 700;
            margin: 3.5rem 0.5rem 0rem;
            color: #575650;
            /* border-bottom: 1px solid #5A5A5A; */
            padding: 0 0 0.5rem 0;
          }
          .text-title-filtros p {
            margin: 0;
            margin-left: 0.8rem;
          }
          .side-bar ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            font-size: 1.3rem;
          }
          .link-off {
            margin: 0;
            cursor: pointer;
          }
          .side-bar li a {
            display: block;
            color: #5a5a5a;
            font-weight: 700;
            padding: 0.8rem 1.6rem;
            text-decoration: none;
            font-family: "mont-regular";
          }
          .side-bar li a:hover {
            background-color: #555;
            color: white;
          }
          .active-link-categoria a {
            font-family: "mont-heavy" !important;
            color: #5a5a5a !important;
          }
          .active-link-categoria a:hover {
            background-color: #ffffff !important;
            color: #5a5a5a;
          }
          @media (min-width: 768px) {
            .show-desktop {
              display: block;
            }
          }
        `}
      </style>
    </Container>
  );
};

export default SidebarProductoProveedor;
