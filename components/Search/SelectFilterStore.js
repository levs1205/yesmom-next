import { useContext } from "react";
import YesmomContext from "../../context/Context";
import OutsideClickHandler from "react-outside-click-handler";
// import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { setCategory } from "../../context/actions/ui";

function SelectFilterStore() {
  const [isVisible, setIsVisible] = useState(false);
  const clickOutside = useRef(null);
  const { query, pathname } = useRouter();
  const {
    dispatchUi,
    ui: { categories },
  } = useContext(YesmomContext);
  const { category } = query;
  const lisCategories = categories?.totalCategories?.categories;
  const path = "/tienda/categoria";

  const handleCategorie = (cat) => () => {
    if (cat) {
      dispatchUi(setCategory(cat));
    }
  };

  const handleExpandFilters = () => {
    setIsVisible(true);
  };

  const handleOffFilters = () => {
    setIsVisible(false);
  };

  return (
    <>
      <div className="select-filter-store" onClick={() => setIsVisible(!isVisible)}>
        <p className="text-select-filter">Selecciona una categoría</p>
            <img src="/image/header/search-store.svg" alt="icon-expand" />
      </div>
      {isVisible && (
        <div className="container-options-select-filter">
          <div className="select-filter">
            <div className="options">
              <div className="text-title-filtros">
                <p> Filtros </p>
              </div>
              <ul>
                <div className="show-desktop">
                  <li
                    className={`${
                      pathname === "/tienda" ? "active-link-categoria" : ""
                    }`}
                    onClick={handleCategorie("Todos")}
                  >
                    {/* <Link href="/tienda"> */}
                      <a href="/tienda/">Todos</a>
                    {/* </Link> */}
                  </li>
                  {lisCategories
                    ?.filter((category) => category.type === "filter")
                    .map((cat, i) => (
                      <li
                        onClick={handleCategorie(cat)}
                        key={cat._id}
                        className={`${
                          category == cat.slug ? "active-link-categoria" : ""
                        }`}
                      >
                        {/* <Link href={`${path}/${cat.slug}`}> */}
                          <a href={`/tienda/categoria/${cat.slug}`}>
														<p>
															{cat.name}
														</p>
													</a>
                        {/* </Link> */}
                      </li>
                    ))}
                </div>
              </ul>

              <div className="text-title-filtros">
                <p> Categorías </p>
              </div>
              <ul>
                <div className="show-desktop">
                  {lisCategories
                    ?.filter((category) => category.type === "categorie")
                    .map((cat, i) => (
                      <li
                        onClick={handleCategorie(cat)}
                        key={cat._id}
                        className={`${
                          category == cat.slug ? "active-link-categoria" : ""
                        }`}
                      >
                        {/* <Link href={`${path}/${cat.slug}`}> */}
                          <a href={`/tienda/categoria/${cat.slug}`}>{cat.name}</a>
                        {/* </Link> */}
                      </li>
                    ))}
                </div>
              </ul>
            </div>
          </div>
        </div>
      )}

      <style jsx>
        {`
           {
            /* :global(.box-producto){
                    position: ${isVisible ? "fixed" : "unset"} ;
                    overflow-y :${isVisible ? "scroll" : "unset"}
                } */
          }
          .expand-icon {
            cursor: pointer;
          }
          .select-filter-store {
            margin-top: 2rem;
            padding-bottom: 0.5rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 2px solid #dadada;
          }
					.text-title-filtros {
            font-family: "mont-heavy" !important;
            font-size: 1.5rem;
            font-weight: 700;
            margin: 3.5rem 0.5rem 0rem;
            color: #575650;
            /* border-bottom: 1px solid #5A5A5A; */
            padding: 0 0 0.5rem 0;
          }
          .text-select-filter {
            margin: 0;
            font-family: "mont-heavy" !important;
            font-size: 1.3rem;
            color: #5a5a5a;
          }
          .container-options-select-filter {
            margin-top: 15.5rem;
            z-index: 999999999999;
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
          }

          .select-filter {
            margin: 0 auto;
            background: #ffffff;
            width: 25rem;
            max-width: 80%;
            height: 65%;
          }
          .options {
            padding: 3rem 3rem;
            height: 100%;
            overflow-y: scroll;

            display: flex;
            flex-direction: column;
          }
          .options ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            font-size: 1.3rem;
          }
          .options li a {
            display: block;
            color: #5a5a5a;
            font-weight: 700;
            padding: 0.8rem 1.6rem;
            text-decoration: none;
            font-family: "mont-regular";
          }
          .options li a:hover {
            background-color: #555;
            color: white;
          }
          .link-to:hover {
            text-decoration: none;
          }
          .link-to {
            font-family: "mont-regular" !important;
            font-size: 1.5rem;
            color: #5a5a5a;
            margin: 1rem 0;
          }
          .active-link-to {
            font-family: "mont-semibold" !important;
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
            .select-filter-store,
            .container-options-select-filter {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
}

export default SelectFilterStore;
