import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import AppLayout from "../../components/AppLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { CardDeck, Col, Container, Row } from "react-bootstrap";
import CardProduct from "../../components/CardProduct";

const Product = () => {
  const [respuesta, setRespuesta] = useState([]);
  useEffect(async () => {
    const consulta = await axios("https://fakestoreapi.com/products");
    setRespuesta(consulta.data);
  }, []);

  return (
    <AppLayout>
      <div className="container--firstProductBlock">
        <section className="firstProductBlock--carousel">
          <Carousel>
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT33_pESsQm9_ibShiVq11PuPcNIuR3w4JOf8_oTFubhYW81Kj7Ux8fc6Mr1qwT6DF76i0&usqp=CAU" />
            </div>
            <div>
              <img src="https://kinsta.com/es/wp-content/uploads/sites/8/2017/04/cambiar-url-wordpress.jpg" />
            </div>
            <div>
              <img src="https://kinsta.com/es/wp-content/uploads/sites/8/2017/04/cambiar-url-wordpress.jpg" />
            </div>
            <div>
              <img src="https://kinsta.com/es/wp-content/uploads/sites/8/2017/04/cambiar-url-wordpress.jpg" />
            </div>
            <div>
              <img src="https://kinsta.com/es/wp-content/uploads/sites/8/2017/04/cambiar-url-wordpress.jpg" />
            </div>
          </Carousel>
        </section>
        <section className="firstProductBlock--details">
          <h1> Conjunto Bebe 4 piezas</h1>
          <p className="sub-title">Único - Baby plaza</p>
          <p className="short-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
            tenetur error doloribus harum reprehenderit porro ut, sapiente
          </p>
          <p className="price-text">S/ 68.00</p>
          <div className="box--select">
            <div>
              <p>Color</p>
              <select name="" id="" className="style-select">
                <option value="">sdssd</option>
                <option value="">sdsdsd</option>
                <option value="">sds</option>
              </select>
            </div>
            <div>
              <p>Talla</p>
              <select name="" id="" className="style-select">
                <option value="">sdssd</option>
                <option value="">sdsdsd</option>
                <option value="">sds</option>
              </select>
            </div>
          </div>
          <div className="box-quantity">
            <p>Cantidad</p>
            <div className="box-input-quantity">
              <input type="button" className="btn--subtract" />
              <input type="number" className="btn--number" />
              <input type="button" className="btn--plus" />
            </div>
          </div>
          <div className="box-btn">
            <button className="btn-cart">Agregar al Carrito</button>
            <button className="btn-store">Ver la tienda</button>
          </div>
        </section>
      </div>
      <section className="container--product_description">
        <h6>Detalle del Producto</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A tortor,
          diam molestie et rhoncus, amet lacus, velit. Ac ipsum fames gravida
          habitant aliquet orci. Imperdiet egestas morbi egestas posuere diam.
          Pharetra, sit volutpat varius sed sit urna euismod. Viverra nunc
          turpis nulla at et venenatis vitae, facilisis fringilla. Quam aliquet
          et proin nulla lacus aliquet quam
        </p>
        <h6>Puntos destacados del producto</h6>
        <ul>
          <li>Haretra, sit volutpat varius</li>
          <li>Sed sit urna euismod - Viverra nunc turpis </li>
          <li>Quam aliquet et </li>
          <li>Proin nulla lacus quam</li>
        </ul>
        <h6>País de producción</h6>
        <p>Pharetra, sit volutpat variusam</p>
        <h6>Dimenciones</h6>
        <p>xx-xx cm</p>
        <h6>Material de producto</h6>
        <p>Pharetra, sit volutpat varius</p>
        <h6>Terminos y condiciones</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A tortor,
          diam molestie et rhoncus, amet lacus, velit. Ac ipsum fames gravida
          habitant aliquet orci. Imperdiet{" "}
        </p>
      </section>
      <section className="container--similarProducts">
        <div className="box--title__similarProducts">
          <FontAwesomeIcon
            icon={faStar}
            className="star-blog heartbeat cl-yellow"
          ></FontAwesomeIcon>
          <div className="title__similarProducts">
            Otros productos que te pueden interesar
          </div>
          <FontAwesomeIcon
            icon={faStar}
            className="star-blog heartbeat cl-yellow"
          ></FontAwesomeIcon>
        </div>
        <div className="box-card-group">
          <CardDeck className="card-deck-h">
            {respuesta.map((cardProduct) => (
              <CardProduct product={cardProduct} key={cardProduct.id} />
            ))}
          </CardDeck>
        </div>
      </section>
      <style jsx>
        {`
          .container--firstProductBlock {
            width: 100%;
            display: flex;
            flex-direction: column;
            padding: 1rem;
            position: relative;
            top: 4rem;
          }
          .firstProductBlock--carousel {
            width: 100%;
          }
          .firstProductBlock--details {
            width: 100%;
            padding: 0rem 1rem;
          }
          .firstProductBlock--details h1 {
            font-family: "mont-semibold" !important;
            font-style: normal;
            font-size: 1rem;
            font-weight: 600;
            color: #5a5a5a;
          }
          .firstProductBlock--details .sub-title {
            font-family: "mont-regular" !important;
            font-style: normal;
            font-size: 1rem;
            color: #5a5a5a;
          }
          .firstProductBlock--details .short-description {
            font-family: "mont-regular" !important;
            font-style: normal;
            font-size: 0.7rem;
            color: #5a5a5a;
          }
          .firstProductBlock--details .price-text {
            font-family: "mont-semibold" !important;
            font-style: normal;
            font-size: 1.3rem;
            color: #4b64a4;
          }
          :global(.carousel li img) {
            border-radius: 10px !important;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
          }
          :global(.carousel .thumb img) {
            vertical-align: top;
            height: 60px;
          }
          :global(.carousel .slide img) {
            width: 100%;
            height: 350px;
            vertical-align: top;
            border: 0;
          }
          :global(.carousel .control-dots) {
            display: none;
          }
          .style-select {
            display: block;
            font-size: 20px;
            font-family: "mont-regular" !important;
            color: #556ea1;
            line-height: 1.3;
            padding: 0.4em 1.4em 0.3em 0.8em;
            width: 9rem;
            box-sizing: border-box;
            border: 1px solid #556ea1;
            box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.03);
            border-radius: 15px;
            -moz-appearance: none;
            -webkit-appearance: none;
            appearance: none;
            background-color: #fff;
            background-image: url("https://www.pinclipart.com/picdir/middle/186-1864292_select-the-law-down-to-the-single-arrow.png"),
              linear-gradient(to bottom, #ffffff 0%, #f7f7f7 100%);
            background-repeat: no-repeat, repeat;
            background-position: right 0.7em top 50%, 0 0;
            background-size: 0.65em auto, 100%;
            outline: none;
            margin-right: 0.5rem;
          }
          .box--select div p {
            font-family: "mont-regular";
          }
          .box-quantity {
            margin-top: 1rem;
          }
          .box-quantity p {
            font-family: "mont-regular";
          }
          .btn--plus {
            background-image: url("/image/icon/plus.svg");
            background-color: #ffffff;
            background-repeat: no-repeat;
            background-position: center;
            background-size: 10px 10px;
            padding: 10px 15px;
            border: 1px solid #556ea1;
            box-sizing: border-box;
            border-radius: 4px;
            height: 42px;
            width: 42px;
          }

          .btn--subtract {
            background-image: url("/image/icon/subtract.svg");
            background-color: #ffffff;
            background-repeat: no-repeat;
            background-position: center;
            background-size: 10px 10px;
            padding: auto 15px;
            border: 1px solid #556ea1;
            box-sizing: border-box;
            border-radius: 4px;
            height: 42px;
            width: 42px;
          }
          .btn--number {
            height: 42px;
            width: 42px;
            border: 1px solid #556ea1;
            box-sizing: border-box;
            border-radius: 4px;
            outline: none;
            text-align: center;
            font-family: "mont-light";
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 36px;
            /* identical to box height, or 180% */

            display: flex;
            align-items: center;

            color: #5a5a5a;
          }
          .box-input-quantity {
            display: flex;
            justify-content: left;
            align-items: center;
          }
          .btn-store {
            padding: 1.5rem;
            text-align: center;
            font-family: "omnes-regular";
            font-weight: 500;
            font-size: 1.3rem;
            width: 310px;
            height: 60px;
            margin: auto;
            background-color: #febf41;
            border-radius: 20px;
            color: #fff !important;
            line-height: 1.3rem;
            position: relative;
            top: -3%;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #febf41;
            cursor: pointer;
          }
          .btn-cart {
            padding: 1.5rem;
            text-align: center;
            font-family: "omnes-regular";
            font-weight: 500;
            font-size: 1.3rem;
            width: 310px;
            height: 60px;
            margin: auto;
            background-color: #ec608d;
            border-radius: 20px;
            color: #fff !important;
            line-height: 1.3rem;
            position: relative;
            top: -3%;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #ec608d;
            cursor: pointer;
          }
          .box--select {
            display: flex;
            flex-direction: row;
          }
          .box-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin: 2rem 0rem;
          }
          .box-btn button {
            margin: 1rem 0.5rem;
          }
          .container--product_description {
            padding: 0rem 2rem;
            font-family: "mont-regular";
            font-size: 0.8rem;
            font-weight: 300;
            line-height: 35px;
            color: #5a5a5a;
          }
          .container--product_description p {
            line-height: 35px;
          }
          .container--product_description h6 {
            font-family: "mont-semibold";
            font-size: 1rem;
            font-weight: 600;
            line-height: 36px;
          }
          .box--title__similarProducts {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 3rem;
          }
          :global(.styleStart) {
            color: #febf41;
            transform: rotate(36.46deg);
          }
          .title__similarProducts {
            font-family: "mont-semibold";
            font-weight: bold;
            font-size: 1rem;
            line-height: 1rem;
            text-align: center;
            color: #506da5;
            margin:0rem 1rem
          }
          :global(.card-deck) {
            padding: 0rem 8rem !important;
            justify-content: center;
            /* margin-right: -15px; */
            /* margin-left: -15px; */
          }
          .box-card-group {
            padding: 0rem 2rem;
          }
          @media (min-width: 768px) {
            .container--firstProductBlock {
              width: 100%;
              display: flex;
              flex-direction: row;
              padding: 8rem 8rem 3rem 8rem;
            }
            .firstProductBlock--carousel {
              width: 50%;
            }
            .firstProductBlock--details {
              display: flex;
              justify-content: center;
              flex-direction: column;
              width: 50%;
              padding: 0rem 2rem;
            }
            .firstProductBlock--details h1 {
              font-size: 1.2rem;
            }
            .firstProductBlock--details .sub-title {
              font-size: 1.2rem;
            }
            .firstProductBlock--details .short-description {
              font-size: 1rem;
            }
            .firstProductBlock--details .price-text {
              font-size: 1.5rem;
            }
            .box--select {
              display: flex;
            }
            .box-btn {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: row;
              margin: 2rem 0rem;
            }
            .style-select {
              width: 250px;
            }
            .btn-store,
            .btn-cart {
              font-family: "omnes-bold";
              font-weight: 700;
              width: 300px;
              height: 60px;
            }

            .container--product_description {
              padding: 0rem 8rem;
              font-family: "mont-regular";
              font-size: 1rem;
              line-height: 25px;
              font-weight: 500;
            }
            .container--product_description h6 {
              font-family: "mont-semibold";
              font-size: 1.2rem;
              line-height: 36px;
              font-weight: 800;
            }
            :global(.styleStart) {
              font-size: 1.8rem;
            }
            .title__similarProducts {
              font-size: 30px;
            }
          }
        `}
      </style>
    </AppLayout>
  );
};

export default Product;
