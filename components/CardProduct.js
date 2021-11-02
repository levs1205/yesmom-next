import Link from "next/link";
import React from "react";
import { Card } from "react-bootstrap";

function CardProduct({ product, imagen }) {
	const { descripcion, nombre, precio, precioPromocional, _id } = product;
	const { url } = imagen;
	const defaultImage = "https://bicentenario.gob.pe/biblioteca/themes/biblioteca/assets/images/not-available-es.png"
  return (
    <>
      <Link href="/tienda/detalles/:id" as={`/tienda/detalles/${_id}`}>
        <div className={`card-container size-${nombre}`}> {/* TODO: size-${size} */}
          <Card border="light">
            {/* https://picsum.photos/200/300 
                        https://thumbs.dreamstime.com/b/beb%C3%A9-muy-disgustado-con-el-pelo-travieso-parado-en-pajama-rosa-ilustraci%C3%B3n-vectorial-al-estilo-de-las-caricaturas-planas-un-164575107.jpg
                        */}
            <div className="card-img-product">
              <Card.Img
                variant="top"
                src={ url ? url : defaultImage }
                className="h-100"
              />
            </div>
            <Card.Body>
              <Card.Title className="title">{nombre}</Card.Title>
              <Card.Text>
								{descripcion}
              </Card.Text>
              <div className="card-text">
                <div className="container-prices">
                  <p className={`hide ${precioPromocional && "price-before"}`}> {/* TODO:  <p className={`hide ${discount && "price-before"}`}> */}
                    S/ XX.XX
                  </p>
                  <div className={`text-price ${precioPromocional && "discount"}`}> {/* TODO:  <div className={`text-price ${discount && "discount"}`}> */}
                    <p className={`${precioPromocional ? "price-now" : "price"}`}> {/* TODO:   <p className={`${discount ? "price-now" : "price"}`}>  */}
                      S/ {precio}
                    </p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Link>
      <style jsx>
        {`
          p {
            margin: 0;
          }
          :global(.card) {
            box-shadow: 0px 10px 20px -3px rgba(0, 0, 0, 0.13);
            border-radius: 3rem !important;
          }
          :global(.card-title) {
            color: #575756;
            font-family: "mont-semibold" !important;
            font-size: 1.2rem;
          }
          :global(.card-text) {
            color: #000000;
            font-family: "mont-light" !important;
            font-size: 1rem;
          }

          .card-img-product {
            height: 12rem;
          }
          :global(.card-img-product img) {
            object-fit: cover;
            object-position: center center;
          }
          .card-container {
            cursor: pointer;
            flex-basis: calc(50% - 1rem);
            margin: 1.5rem 0.5rem;
          }
          .container-prices {
            margin-top: 3rem;
            margin-bottom: 1rem;
          }
          .hide {
            font-family: "mont-regular" !important;
            font-size: 1.5rem;
            color: transparent;
            margin: 1rem 0;
          }
          .price {
            color: #4b64a4;
          }
          .price-before {
            color: #4b64a4;
            text-decoration-line: line-through;
          }
          .price-now {
            color: #f22c74;
          }
          .text-price {
            display: inline-block;
            padding: 0 0.2rem;
            border-radius: 0.5rem;
            border: 0.25rem solid transparent;
          }
          .text-price p {
            font-family: "mont-semibold" !important;
            font-size: 2rem;
          }
          .discount {
            border: 0.2rem solid #f22c74;
          }

          @media (min-width: 480px) {
            .text-price p {
              font-size: 2.5rem;
            }
            .text-price {
              padding: 0 0.8rem;
            }
          }
          @media (min-width: 768px) {
            .card-container {
              flex-basis: calc(33.3% - 1rem);
            }
             {
              /* .size-4{
                            flex-basis:calc( 50% - 1rem);
                        } */
            }
            :global(.card-title) {
              color: #575756;
              font-family: "mont-semibold" !important;
              font-size: 1.6rem;
            }
            :global(.card-text) {
              color: #000000;
              font-family: "mont-light" !important;
              font-size: 1.4rem;
            }
            .card-img-product {
              height: 20rem;
            }
          }
          @media (min-width: 1024px) {
            .size-4 {
              flex-basis: calc(25% - 1rem);
            }
          }
        `}
      </style>
    </>
  );
}

export default CardProduct;
