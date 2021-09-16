// import Image from "next/image";
import React, { useContext } from "react";
import { startRemoveProduct } from "../../context/actions/ui";
import YesmomContext from "../../context/Context";

const DetailItemCart = ({ id, nombre, imagen, noBorder, precio, quantity}) => {
  const { dispatchUi } = useContext(YesmomContext);

  const handleRemoveProduct = () => {
    dispatchUi(startRemoveProduct(id));
  };
  return (
    <>
      <div className={`card card-edited ${noBorder ? "no-border" : ""}`}>
        <div
          className="card--shopping-cart__iconDelete"
          onClick={handleRemoveProduct}
        >
          <img src="/image/cart/delete-icon.svg" width="20px" height="20px" />
        </div>
        <div className="card__block-first">
          <img src={imagen[0]} alt="" className="card__img" />
          <div className="card__block-text">
            <p className="block-text__title">
              COCHE DE BEBÉ + FUNDA - Blanco, 140cm x 100cm
            </p>
            <p className="block-text__short-description">Modelo - Marca</p>
            <select name="" id="" className="block-text__select">
              <option value="">Cantidad: {quantity}</option>
            </select>
          </div>
        </div>
        <div className="card__block-second">
          <div className="block-second__block-store-text">
            <img
              className="block-store-text__img"
              src="https://img.freepik.com/vector-gratis/plantilla-logotipo-bebe-detallada_23-2148776913.jpg?size=338&ext=jpg"
              alt=""
            />
            <p className="block-store-text__text">Nombre de la tienda</p>
          </div>
          <p className="block-second__block-store-price">S/ {precio}</p>
        </div>
      </div>
      <style jsx>
        {`
         
         
          .card-edited {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            border: 0px solid rgba(0, 0, 0, 0.125) !important;
            border-bottom-left-radius: 0px !important;
            border-bottom-right-radius: 0px !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.125) !important;
            padding: 2.5rem 0rem;
          }
          .no-border {
            border-bottom: none !important;
          }
          .card--shopping-cart__iconDelete {
            position: absolute;
            height: 2rem;
            width: 2rem;
            right: 0;
            top: 2rem;
            cursor: pointer!important;
          }
          .card--shopping-cart__iconDelete:hover {
            transform: scale(1.05);
            animation: animateHeart 0.3s linear forwards !important;
          }
          .shopping-cart-block {
            margin: 3rem 0;
            display: flex;
            justify-content: center;
            align-content: center;
            flex-direction: column;
          }
          .shopping-cart-block__card {
            display: flex;
            justify-content: center;
            align-content: center;
            flex-direction: column;
            width: 100%;
            height: auto;
            background: #ffffff;
            border: 10px solid #ffffff;
            box-shadow: 0px 0px 33px rgba(0, 0, 0, 0.13);
            border-radius: 20px;
          }
          .shopping-cart-block__card .card {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            border: 0px solid rgba(0, 0, 0, 0.125) !important;
            border-bottom-left-radius: 0px !important;
            border-bottom-right-radius: 0px !important;
            border-bottom: 1px solid rgba(0, 0, 0, 0.125) !important;
            padding: 2.5rem 0rem;
          }
          .shopping-cart-block__card > .card:last-child {
            border-bottom: none !important;
          }
          .card__block-first {
            display: flex;
            justify-content: center;
            align-content: center;
            flex-direction: row;
          }
          .card__block-first .card__img {
            width: 35%;
            height: 104px;
            border-radius: 15px;
          }
          .card__block-first .card__block-text {
            width: 65%;
            padding: 0.5rem;
          }
          .block-text__title {
            font-family: "mont-regular";
            font-style: normal;
            font-weight: 600;
            font-size: 13px;
            line-height: 17px;
            color: #575650;
            margin-bottom: 0rem;
          }
          .block-text__short-description {
            font-family: "mont-light";
            font-style: normal;
            font-weight: 300;
            font-size: 13px;
            line-height: 40px;
            color: #575650;
            margin-bottom: 0rem;
          }

          .block-text__select {
            display: block;
            font-size: 12px;
            font-family: "mont-regular" !important;
            color: #556ea1;
            line-height: 1.3;
            padding: 0.4em 1.4em 0.3em 0.8em;
            width: 120px;
            box-sizing: border-box;
            border: 1px solid #556ea1;
            box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.03);
            border-radius: 10px;
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
          .card__block-second {
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center !important;
            flex-direction: row;
          }
          .block-second__block-store-text {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            width: 60%;
          }
          .block-store-text__img {
            width: 20%;
            height: 40px;
            border-radius: 50%;
          }
          .block-store-text__text {
            width: 80%;
            padding-left: 0.5rem;
            font-family: "mont-light";
            font-style: normal;
            font-weight: 300;
            font-size: 10px;
            color: #575650;
            margin-bottom: 0rem;
          }
          .block-second__block-store-price {
            font-family: "mont-regular";
            padding-top: 0.5rem;
            font-style: normal;
            font-weight: 300;
            font-size: 18px;
            color: #4b64a4;
          }

          @media (min-width: 769px) {
            .shopping-cart-block {
              display: flex;
              justify-content: center;
              align-content: center;
              flex-direction: row;
              width: 100%;
            }
            .shopping-cart-block__card {
              display: flex;
              justify-content: center;
              align-content: center;
              flex-direction: column;
              width: 60%;
              height: auto;
              background: #ffffff;
              border: 10px solid #ffffff;
              box-shadow: 0px 0px 33px rgba(0, 0, 0, 0.13);
              border-radius: 20px;
            }
            .card__block-first{
              width:95%
            }
            .card-edited{
              width:100%
            }        
      
            .card__block-first .card__img {
              width: 20%;
              height: 104px;
              border-radius: 15px;
            }
            .card__block-first .card__block-text {
              width: 80%;
              padding: 1rem;
            }
            .shopping-cart-block__checkout {
              width: 40%;
              padding: 20px;
            }
            .discount-coupon__text .discount-coupon__input {
              display: flex;
              justify-content: space-between;
            }
            .shopping-cart-block__checkout .buy-button {
              width: 100%;
            }
          }
          @media (min-width: 1200px) {
            .card__block-second {
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center !important;
              flex-direction: row;
            }
            .card__block-first{
              width:95%
            }
            .card-edited{
              width:100%
            }
          }
        `}
      </style>
    </>
  );
};

export default DetailItemCart;
