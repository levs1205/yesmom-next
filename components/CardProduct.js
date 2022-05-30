import Link from "next/link";
import React, { useMemo } from "react";
import moment from "moment";
import { Card } from "react-bootstrap";

const defaultImage =
  "https://bicentenario.gob.pe/biblioteca/themes/biblioteca/assets/images/not-available-es.png";

const CardProduct = ({ product, imagen }) => {
  const haveDiscount = useMemo(() => {
    if(product.precioPromocional > 0) return true;
    if (!product || !product.fechaInicioPromocion || !product.fechaFinPromocion)
      return false;

    const init_promo = moment(product.fechaInicioPromocion);
    const end_promo = moment(product.fechaFinPromocion);
    const now = moment(new Date());

    if (end_promo.isAfter(init_promo) && end_promo.isAfter(now)) {
      return true;
    } else {
      return false;
    }
  }, [product]);

  return (
    <>
      <Link href={`/tienda/detalles/${product._id}`}>
        <div className={`card-container`}>
          <Card border="light">
            <div className="card-img-product">
              <Card.Img
                variant="top"
                src={imagen && imagen.url ? imagen.url : defaultImage}
                className="h-100"
              />
            </div>
            <Card.Body>
						<Card.Title className="title">{product?.nombre}</Card.Title>
              <Card.Text>
                <div className="card-container-description">
                  {product?.descripcion}
                </div>
              </Card.Text>
            </Card.Body>
            <div className="container-prices">
              {haveDiscount ? (
                <>
                  <p className="price price-before">
                    S/ {product.precio.toFixed(2)}
                  </p>
                  <div className={`text-price discount`}>
                    <p
                      className={`${
                        product?.precioPromocional ? "price-now" : "price"
                      }`}
                    >
                      S/ {product.precioPromocional.toFixed(2)}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <p className="price price-out">
                    S/ {product.precio.toFixed(2)}
                  </p>
                  <p className="price price-without-discount">
                    S/ {product.precio.toFixed(2)}
                  </p>
                </>
              )}
            </div>
          </Card>
        </div>
      </Link>
      <style jsx>
        {`
          p {
            margin: 0;
          }
          :global(.carousel.carousel-slider .control-arrow:hover) {
            background: none;
          }
          :global(.carousel .control-next.control-arrow:before){
            border-left: 8px solid #EC608D;
          }
          :global(.carousel .control-prev.control-arrow:before){
            border-right: 8px solid #EC608D
          }
         
          :global(.card) {
            box-shadow: 0px 10px 20px -3px rgba(0, 0, 0, 0.13);
            border-radius: 3rem !important;
          }
          :global(.card-title) {
            color: #575756;
            font-family: "mont-semibold" !important;
            font-size: 1.2rem;
						/* cortar texto con puntos suspensivos */
						height: 3.8rem;
						min-height: 3.8rem;
						max-height: 3.8rem;

						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					
          }
          :global(.card-text) {
            color: #000000;
            font-family: "mont-light" !important;
            font-size: 1rem;
          }
          .card-container-description {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            height: 6rem;
            margin-bottom: 1;
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
            margin: 1.5rem 0.5rem;
          }
          .container-prices {
            margin: 2rem 2rem;
          }
          .hide {
            font-family: "mont-regular" !important;
            font-size: 1.5rem;
            color: transparent;
            margin: 1rem 0;
          }
          .price {
            color: #4b64a4;
            font-size: 2rem;
            font-weight: 600;
          }
          .price-before {
            font-size: 1.5rem;
          }
          .price-before,
          .price-out {
            color: #4b64a4;
            text-decoration-line: line-through;
          }
          .price-now {
            color: #f22c74;
          }
          .price-out {
            visibility: hidden;
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
            border: 2px solid #f22c74;
          }
          .price-without-discount {
            font-size: 2rem;
            border: 2px solid transparent;
          }
          @media (min-width: 480px) {
            .text-price p {
              font-size: 2.5rem;
            }
            .price-without-discount {
              font-size: 2.5rem;
            }
            .price-before {
              font-size: 1.6rem;
            }
            .text-price {
              padding: 0 0.8rem;
            }
            .card-container-description {
              -webkit-line-clamp: 3;
            }
          }
          @media (min-width: 768px) {
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
            .price-before {
              font-size: 1.7rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default CardProduct;
