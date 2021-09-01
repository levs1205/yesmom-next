import React, { useContext } from "react";
import YesmomContext from "../../../context/Context";
import DetailProduct from "./DetailProduct";

const PopupCart = () => {

  const { ui } = useContext(YesmomContext);
  //Items del carrito
  const { cart=[] } = ui;


  return (
    <>
      <div className="box-cart">
        <p className="popup--title">Tu carrito - 4 productos</p>
        {
          cart?.map(( productCart , i ) => (
            <DetailProduct key={i}/>
          ))
        }
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
          .popup--plus {
            font-family: "mont-regular";
            font-style: normal;
            font-weight: 500;
            font-size: 1.3rem;
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
            padding-top: 0.8rem;
          }
          .popup--total-price__letter {
            font-family: "mont-semibold";
            font-style: normal;
            font-weight: bold;
            font-size: 1.5rem;
            line-height: 1.2rem;
            color: #5a5a5a;
          }
          .popup--total-price__number {
            font-family: "mont-regular";
            font-style: normal;
            font-weight: bold;
            font-size: 1.5rem;
            line-height: 1.2rem;
            color: #4b64a4;
          }
          .btn-cart {
            margin: 2.5rem auto;
            text-align: center;
            font-family: "omnes-regular";
            font-weight: 500;
            font-size: 1.5rem;
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
          
        `}
      </style>
    </>
  );
};

export default PopupCart;
