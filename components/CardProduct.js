import React from 'react';
import { Card } from "react-bootstrap";

const CardProduct = () => {

    return(
        <>
            <div>
                <Card>
                    <div className="card-product">
                        <div className="card-img">
                            <Card.Img
                                variant="top"
                                src="https://sites.google.com/site/productosnaturacba/_/rsrc/1369237728498/mama-y-bebe/productos%20natura%20mam%C3%A1%20y%20beb%C3%A9%20cosmeticos%20argentina%20como%20comprar%20y%20vender%20en%20cordoba.jpg"
                                className="card-img-product"
                            />
                        </div>
                        <Card.Body>
                            <Card.Title>
                                <div className="card-product-title">Titulo product</div>
                            </Card.Title>

                            <Card.Text>
                                <div className="card-product-description">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, nesciunt voluptatem a deserunt minus ipsa.
                                </div>
                                <div className="card-product-descuento">
                                    40% Sale
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </div>
                </Card>
            </div>
            <style jsx >
                {`
                .card-product {
                    text-align: center;
                    background: #ffffff;
                    box-shadow: 0px 14px 20px -5px rgba(0, 0, 0, 0.2);
                    border-radius: 20px;
                    font-family: "mont-regular" !important;
                    border-radius: 1.28rem !important;
                    width: 22rem;
                    height: auto;
                }
                .card-img {

                    margin: auto;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                }
                :global(.card-img img) {
                    height: auto !important;
                    width: 100% !important;
                }
                .card-product-description {
                    font-size: 0.8rem ;
                    text-align: start;
                }
                .card-product-descuento{
                    font-size: 1.5rem;
                    border: 2px solid #F22C74;
                    margin: 1rem 0rem;
                    text-align-last: start;
                    max-width: max-content;
                    padding: 0.2rem 1.5rem;
                    border-radius: 0.5rem;
                    color: #F22C74;
                }
                @media (min-width: 2449px) {
                    .card-product {
                        width: 18rem;
                        height: auto;
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
                        font-size: 1rem ;
                        font-weight:bold
                    }
                    .card-product-description {
                        font-size: 0.8rem ;
                    }
                }
                @media (max-width: 420px) {
                    .card-product {
                        width: 100%;
                    }
                }
                `}
            </style>
        </>
    );
};

export default CardProduct;