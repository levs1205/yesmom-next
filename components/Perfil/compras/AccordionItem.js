import React from "react";
import Link from "next/link";

import { Accordion, Card } from "react-bootstrap";
import Expand from "./Expand";
import Stepper from "./Stepper";
import moment from "moment";

const AccordionItem = ({
  ek,
  productos,
  fechaCreacion,
  numeroUnico,
  direccion,
  total,
  fechaPedido,
  estado
}) => {
  const getDate = (date) => {
    return moment(date).format("DD-MM-YYYY");
  };

  return (
    <>
      <Card>
        <Card.Header>
          <div className="header-compra">
            <div className="header-title">
              <div className="container-logo-tienda">
                {/* <img src="" /> - width :100% || object-fit:cover */}
              </div>
              <p>{productos[0].nombre}</p>
            </div>
            <Expand eventKey={`${ek}`} />
          </div>
          <p className="title-compra">
            <span>Fecha de compra:</span> {`${getDate(fechaCreacion)}`}
          </p>
        </Card.Header>
        <Accordion.Collapse eventKey={`${ek}`}>
          <>
            {
              productos.map(( prod , i)=>(
              <>
                <Card.Body>
                  <div className="all-details">
                    <div className="description-compra">
                      <div className="img-description">
                        <img src={prod.urlImagen} />
                      </div>
                      <div className="description">
                        {/* ESTATICOS - > DINAMICOS */}
                        <p>Baby Plaza Store</p>
                        <p>N° de compra: {numeroUnico}</p>
                        <p>Sku: SKUUU</p>
                        <p>Cantidad: {prod.cantidad}</p>
                        <p>Acción: Confirmación recibida</p>
                        <p>Precio: S/ {total.toFixed(2)}</p>
                        <Link href="#">
                          <p className="contact-tienda">Contactar Tienda</p>
                        </Link>
                      </div>
                    </div>
                    <div className="stepper">
                      <Stepper active={estado} />
                    </div>
                  </div>
                </Card.Body>
                <Card.Footer>
                  <div className="container-details">
                    <div className="ship-details">
                      <img src="/image/calendarImage.svg" alt="fecha de envio" />
                      <p className="title-compra">
                        <span>Recibe tu compra: </span>{`${getDate(fechaPedido)}`}
                      </p>
                    </div>
                    <div className="ship-details">
                      <img src="/image/shipImage.svg" alt="envio" />
                      <p className="title-compra">
                        <span>Dirección de entrega: </span>
                        {direccion}
                      </p>
                    </div>
                  </div>
                </Card.Footer>
              </>
              ))
            }
          </>
        </Accordion.Collapse>
      </Card>

      <style jsx>
        {`
          p {
            margin: 0;
          }
          :global(.accordion .card) {
            margin: 3rem 0;
            border: 0 solid #ffffff;
            box-shadow: 0px 0px 33px rgba(0, 0, 0, 0.13);
            border-radius: 2rem !important;
          }
          :global(.accordion > .card > .card-header) {
            background: none;
            padding: 2rem 3rem;
            border-bottom: 1.5px solid #dadada;
          }
          :global(.accordion .card .card-body) {
            padding: 2rem 1.5rem;
          }
          :global(.accordion .card .card-footer) {
            border-top: 1.5px solid #dadada;
            padding: 1.5rem;
          }
          .header-compra {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2.5rem;
          }
          .header-compra p {
            font-size: 1.8rem;
            font-family: "mont-heavy" !important;
            color: #556ea1;
          }
          .container-logo-tienda {
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            background-color: #c4c4c4;
          }
          .header-title {
            display: flex;
            align-items: center;
          }
          .header-title p {
            margin-left: 2rem;
          }
          .title-compra {
            font-family: "mont-regular" !important;
            color: #575650;
            letter-spacing: 0.05rem;
            font-size: 1.3rem;
          }
          .title-compra span {
            font-family: "mont-heavy" !important;
            color: #575650;
            letter-spacing: 0;
          }
          /**DESCRIPCION COMPRA */
          .img-description {
            margin-bottom: 1rem;
          }
          .description-compra {
            display: flex;
            flex-wrap: wrap;
          }
          .img-description {
            max-width: 40%;
          }
          .img-description img {
            width: 15rem;
          }
          .description {
            max-width: 60%;
            margin-left: 1rem;
          }
          .description p {
            font-size: 1.4rem;
            font-family: "mont-light" !important;
            color: #575650;
            margin-bottom: 0.2rem;
          }
          .description p:first-child {
            font-family: "mont-heavy" !important;
            color: #575650;
            font-size: 1.8rem;
            margin: 0;
          }
          .description p:last-child {
            font-family: "mont-semibold" !important;
            color: #556ea1;
            text-decoration: underline;
          }

          /**DETAILS */
          .container-details {
            display: flex;
            flex-direction: column;
          }
          .ship-details {
            display: flex;
            align-items: center;
            padding: 0 2rem;
            margin: 1rem 0;
          }
          .ship-details p {
            margin-left: 2rem;
          }
          .stepper {
            margin: 3rem 0;
          }

          @media (min-width: 768px) {
            .description-compra {
              justify-content: center;
            }
            .img-description {
              margin-right: 1.5rem;
            }
            .description {
              margin-left: 1.5rem;
            }
          }
          @media (min-width: 1024px) {
            .all-details {
              display: flex;
            }
            .description-compra {
              width: 50%;
              flex-wrap: nowrap;
              justify-content: flex-start;
            }
            .stepper {
              width: 50%;
              margin: 0;
            }
            .container-details {
              flex-direction: row;
              display: flex;
              align-items: center;
            }
          }
        `}
      </style>
    </>
  );
};

export default AccordionItem;
