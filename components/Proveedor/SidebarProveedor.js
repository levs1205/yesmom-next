import React from "react";
import { Container } from "react-bootstrap";

function SidebarProveedor() {
  return (
    <Container>
      <div className="side-bar fade-in animated">
        <div className="text-title-filtros">
          <p> Filtros </p>
        </div>
        <hr />
        <ul>
          <li>
            <a href="#">Todos</a>
          </li>
          <li>
            <a href="#">Solo en Baby cuqui's</a>
          </li>
          <li>
            <a href="#">Promociones</a>
          </li>
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
            color: #5a5a5a;
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
            font-size: 1.6rem;
          }
          .side-bar li a {
            display: block;
            color: #5a5a5a;
            font-weight: 700;
            padding: 0.8rem 1.6rem;
            text-decoration: none;
            font-family: "mont-regular" !important;
          }
          .side-bar li a:hover {
            background-color: #555;
            color: white;
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
}

export default SidebarProveedor;
