import React from "react";
import { Card } from "react-bootstrap";
import Image from "next/image";

const CardProduct = ({ product }) => {
  return (
    <>
      <div>
        <Card>
          <div className="card-product">
            <div className="card-img">
              <Card.Img
                variant="top"
                src={product.image}
                className="card-img-product"
              />
            </div>
            <Card.Body>
              <Card.Title>
                <div className="card-product-title">{product.title}</div>
              </Card.Title>

              <Card.Text>
                <div className="card-product-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima velit.
                </div>
                <div className="card-product-descuento">{product.id}% Sale</div>
                <div className="card-product-precio">S/. {product.price}</div>
              </Card.Text>
            </Card.Body>
          </div>
        </Card>
      </div>
      <style jsx>
        {`
          .card-product {
            text-align: center;
            background: #ffffff;
            box-shadow: 0px 14px 20px -5px rgba(0, 0, 0, 0.2);
            border-radius: 20px;
            font-family: "mont-regular" !important;
            width: 20rem;
            height: auto;
            margin-bottom: 30px;
          }
          .card-img {
            margin: auto;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .card-product-title {
            font-size: 1.5rem;
            font-weight: 600;
            font-family: "mont-regular" !important;
            text-align: start;
            letter-spacing:.01rem;
            line-height:1.6rem
          }
          .card-product-description {
            font-size: 1.2rem;
            font-family: "mont-regular" !important;
            font-weight: 300;
            text-align: start;
            line-height:1.5rem
          }
      
          :global(.card-img .card-img-product) {
            height: auto !important;
            width: auto !important;
            max-width: 150px;
            max-height: 180px;
            padding: 20px;
          }
          :global(.card) {
            border: 0px solid rgba(0, 0, 0, 0.125) !important;
          }
          .card-product-descuento {
            font-size: 1.2rem;
            border: 2px solid #f22c74;
            margin: 1rem 0rem;
            text-align-last: start;
            max-width: max-content;
            padding: 0.2rem 1.5rem;
            border-radius: 0.5rem;
            color: #f22c74;
          }
          .card-product-precio {
            font-size: 2.3rem;
            text-align-last: start;
            font-family: "mont-regular" !important;
            font-weight: 300;
            color: #4b64a4;
          }
          @media (min-width: 2449px) {
            .card-product {
              width: 18rem;
              height: auto;
            }
            .card-product-description {
              font-size: 14px;
              font-family: "mont-regular" !important;
              font-weight: 300;
              text-align: start;
            }
          }
          @media (max-width: 768px) {
            .card-blog {
              text-align: center;
              background: #ffffff;
              box-shadow: 0px 14px 20px -5px rgba(0, 0, 0, 0.2);
              border-radius: 20px;
              font-family: "Montserrat", sans-serif;
              border-radius: 1.28rem !important;
              width: 100%;
            }
            .card-product-title {
              font-size: 1rem;
              font-weight: bold;
            }
            .card-product-description {
              font-size: 14px;
              font-family: "mont-regular" !important;
              font-weight: 300;
              text-align: start;
            }
            .card-product-descuento {
              font-size: 1.2rem;
            }
          }
          @media (max-width: 420px) {
            .card-product {
              width: 100%;
            }
            .card-product-description {
              font-size: 14px;
              font-family: "mont-regular" !important;
              font-weight: 300;
              text-align: start;
            }
          }
        `}
      </style>
    </>
  );
};

export default CardProduct;
