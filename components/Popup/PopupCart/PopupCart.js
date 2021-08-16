import React from "react";

const PopupCart = () => {
  return (
    <>
      <div className="box-cart">
        <p className="popup--title">Tu carrito - 4 productos</p>
        <div className="card--shopping-cart">
          <div className="container--shopping-card">
            <div className="card--shopping-cart__image">
              <div className="card--shopping-cart__iconDelete"></div>
              <img
                src="https://i.blogs.es/ee0424/ropa-bebe-rosa/450_1000.jpeg"
                alt=""
              />
            </div>
          </div>
          <div className="card--shopping-cart__text">
            <p className="card--shopping-cart__title">
              Coche de bebé + funda - blanca{" "}
            </p>
            <p className="card--shopping-cart__price">S/XX.XX</p>
          </div>
        </div>
        <div className="card--shopping-cart">
          <div className="container--shopping-card">
            <div className="card--shopping-cart__image">
              <div className="card--shopping-cart__iconDelete"></div>
              <img
                src="https://i.blogs.es/ee0424/ropa-bebe-rosa/450_1000.jpeg"
                alt=""
              />
            </div>
          </div>
          <div className="card--shopping-cart__text">
            <p className="card--shopping-cart__title">
              Coche de bebé + funda - blanca{" "}
            </p>
            <p className="card--shopping-cart__price">S/XX.XX</p>
          </div>
        </div>
        <div className="card--shopping-cart">
          <div className="container--shopping-card">
            <div className="card--shopping-cart__image">
              <div className="card--shopping-cart__iconDelete"></div>
              <img
                src="https://i.blogs.es/ee0424/ropa-bebe-rosa/450_1000.jpeg"
                alt=""
              />
            </div>
          </div>
          <div className="card--shopping-cart__text">
            <p className="card--shopping-cart__title">
              Coche de bebé + funda - blanca{" "}
            </p>
            <p className="card--shopping-cart__price">S/XX.XX</p>
          </div>
        </div>
        <p className="popup--plus">+ 1 articulo más</p>
        <div className="popup--total-price">
          <p className="popup--total-price__letter">Total estimado</p>
          <p className="popup--total-price__number">S/ XX.XX</p>
        </div>
        <button className="btn-cart">Ver carrito</button>
      </div>
      <style jsx>
        {`
          .box-cart {
            background: #ffffff;
            box-shadow: 0px 9px 21px rgba(0, 0, 0, 0.15);
            border-radius: 0px 0px 44px 44px;
            height: 100%;
            width: 360px;
            top: 80px;
            padding: 25px;
            transition: all 0.8s;
          }
          .popup--title {
            font-family: "mont-semibold";
            font-style: normal;
            font-weight: 800;
            font-size: 1.2rem;
            line-height: 1.2rem;
            color: #5a5a5a;
            padding-bottom: 10px;
            border-bottom: 1px solid #dadada;
          }
          .card--shopping-cart {
            display: flex;
            justify-content: center;
            align-content: center;
            align-items: center;
            flex-direction: row;
            padding-bottom: 1rem;
            padding-top: 1rem;
            border-bottom: 1px solid #dadada;
          }
          .container--shopping-card{
            width: 105px;
            height: 95px;
            display: flex;
          }
          .card--shopping-cart__image{
            position:relative;
            width: 90px;
            height: 90px;
            margin: auto;
          }
          .card--shopping-cart img {
            width:100%;
            height: 100%;
            border-radius: 20px;
            object-fit: cover;
            object-position: center center;
          }
          .card--shopping-cart__text {
            padding: 0rem 0.5rem;
            width: 65%;
          }
          .card--shopping-cart__title {
            font-family: "mont-regular";
            font-style: normal;
            font-weight: 500;
            font-size: 1rem;
            line-height: 1.2rem;
            text-align: center;
          }
          .card--shopping-cart__price {
            font-family: "mont-semibold";
            font-style: normal;
            font-weight: bold;
            font-size: 1.2rem;
            line-height: 1.2rem;
            color: #4b64a4;
            text-align: center;
          }
          .popup--plus {
            font-family: "mont-regular";
            font-style: normal;
            font-weight: 500;
            font-size: 1rem;
            line-height: 1rem;
            text-align: center;
            color: #4b64a4;
            padding-top: 1rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid #dadada;
          }
          .popup--total-price {
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
          .popup--total-price__letter {
            font-family: "mont-semibold";
            font-style: normal;
            font-weight: bold;
            font-size: 1.2rem;
            line-height: 1.2rem;
            color: #5a5a5a;
          }
          .popup--total-price__number {
            font-family: "mont-regular";
            font-style: normal;
            font-weight: bold;
            font-size: 1.2rem;
            line-height: 1.2rem;
            color: #4b64a4;
          }
          .btn-cart {
            margin: 2.5rem auto;
            text-align: center;
            font-family: "omnes-regular";
            font-weight: 500;
            font-size: 1.1rem;
            padding: 1rem 0rem;
            margin: 2rem auto;
            width: 13rem;
            background-color: #ec608d;
            border-radius: 20px;
            color: #fff !important;
            line-height: 1.3rem;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #ec608d;
            cursor: pointer;
          }
          .card--shopping-cart__iconDelete {
            position: absolute;
            background-image: url("/image/icon/delete.svg");
            background-position: contain;
            height: 20px;
            width: 20px;
            left: -8px;
            top: -8px;
          }
          @media (min-width : 1366px){
            .container--shopping-card{
              width: 135px;
              height: 125px;
              display: flex;
            }
            .card--shopping-cart__image{
              position:relative;
              width: 110px;
              height: 110px;
              margin: auto;
            }
            .card--shopping-cart__iconDelete {
              position: absolute;
              background-image: url("/image/icon/delete.svg");
              background-position: contain;
              height: 20px;
              width: 20px;
              left: -8px;
              top: -8px;
            }
          }
          
        `}
      </style>
    </>
  );
};

export default PopupCart;
