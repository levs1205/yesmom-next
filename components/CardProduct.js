import Link from "next/link";
import React from "react";
import { Card } from "react-bootstrap";



function CardProduct({ discount, size , id , nombre }) {

  return (
    <>
      <Link href="tienda/detalles/:id" as={`tienda/detalles/${id}`}>
        <div className={`card-container size-${size}`}>
          <Card border="light">
            {/* https://picsum.photos/200/300 
                        https://thumbs.dreamstime.com/b/beb%C3%A9-muy-disgustado-con-el-pelo-travieso-parado-en-pajama-rosa-ilustraci%C3%B3n-vectorial-al-estilo-de-las-caricaturas-planas-un-164575107.jpg
                        */}
            <div className="card-img-product">
              <Card.Img
                variant="top"
                src="https://www.elblogdetubebe.com/wp-content/uploads/2021/03/ropa-bebe-online-original.jpg" className="h-100"
              />
            </div>
            <Card.Body>
              <Card.Title className="title">baby clothes</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac
              </Card.Text>
              <div className="card-text">
                <div className="container-prices">
                  <p className={`hide ${discount && "price-before"}`}>
                    S/ XX.XX
                  </p>
                  <div className={`text-price ${discount && "discount"}`}>
                    <p className={`${discount ? "price-now" : "price"}`}>
                      S/ XX.XX
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
            font-size: 1.6rem;
          }
          :global(.card-text) {
            color: #000000;
            font-family: "mont-light" !important;
            font-size: 1.4rem;
          }
         

          .card-img-product{
            height: 20rem;

          }
           :global(.card-img-product img){
             object-fit:cover;
             object-position:center center
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
