import React, { useCallback, useContext, useMemo } from "react";
import Link from 'next/link'
import YesmomContext from "../../../context/Context";
import DetailProduct from "./DetailProduct";
import moment from 'moment';

const PopupCart = () => {
  const { ui } = useContext(YesmomContext);
  const { cart = [] } = ui;



  const haveDiscountProduct = ( product ) => {
    if(product.precioPromocional > 0) return true;
    if( !product || !product.fechaInicioPromocion || !product.fechaFinPromocion) return false;

    const init_promo = moment(product.fechaInicioPromocion);
    const end_promo = moment(product.fechaFinPromocion);
    const now = moment(new Date());

    if(end_promo.isAfter(init_promo) && end_promo.isAfter(now)){
      return true;
    }else{
      return false;
    }
  }

  const makeTotalPrice = ( cart ) => {
    let acum = 0;
    if(cart.length >0 ){
      cart.map((product)=> {
        if(haveDiscountProduct(product)) {
          acum = acum + product.precioPromocional * product.quantity;
        } else {
          acum = acum + product.precio * product.quantity;
        }
      })
    }else{
        return 0;
    }

    return acum;
  }

  const totalPrice = useCallback(()=> makeTotalPrice(cart) , [cart]);

  return (
    <>
      <div className="box-cart">
        {cart.length === 0 ? (
          <p className="popup--title">No tienes nada en el carrito</p>
        ) : (
          <p className="popup--title">Tu carrito - {cart.length} productos</p>
        )}

        {cart.slice(0,3).map((productCart, i) => (
          <DetailProduct key={i} {...productCart} />
        ))}
        {cart.length > 3 && (
          <p className="popup--plus">
            + {cart.length - 3} articulo más
          </p>
        )}
        {cart.length > 0 && (
          <>
            <div className="popup--total-price">
              <p className="popup--total-price__letter">Total estimado</p>
              <p className="popup--total-price__number">S/ {totalPrice().toFixed(2)}</p>
            </div>
            <Link href="/shopping-cart">
              <div className="btn-cart">Ver carrito</div>
            </Link>
          </>
        )}
      </div>
      <style jsx>
        {`
          .box-cart {
            background: #ffffff;
            box-shadow: 0px 9px 21px rgba(0, 0, 0, 0.15);
            border-radius: 0px 0px 44px 44px;
            height: 100%;
            width: 360px;
            top: 5rem;
            padding: 25px;
            cursor: default;
            position:relative
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
            font-size: 1.2rem;
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
            cursor: pointer !important;
            text-decoration: none!important;
          }

          .btn-cart:hover {
            transform: scale(1.05);
            animation: animateHeart 0.3s linear forwards !important;
            font-weight: 700;
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
