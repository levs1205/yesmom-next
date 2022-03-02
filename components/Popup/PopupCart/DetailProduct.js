import Image from "next/image";
import React, { useContext, useMemo } from "react";
import { startRemoveProduct } from "../../../context/actions/ui";
import YesmomContext from "../../../context/Context";
import moment from 'moment';

const DetailProduct = ({
  _id,
  nombre,
  imagen,
  quantity,
  precio,
  precioPromocional,
  fechaInicioPromocion,
  fechaFinPromocion,
  sizeSelected,
  colourSelected,
  idProductCart,
}) => {
  const { dispatchUi } = useContext(YesmomContext);
  const handleRemoveProduct = () => {
    dispatchUi(startRemoveProduct(idProductCart));
  };

  const haveDiscount = useMemo(() => {
    if (!fechaInicioPromocion || !fechaFinPromocion)
      return false;

    const init_promo = moment(fechaInicioPromocion);
    const end_promo = moment(fechaFinPromocion);
    const now = moment(new Date());

    if (end_promo.isAfter(init_promo) && end_promo.isAfter(now)) {
      return true;
    } else {
      return false;
    }
  }, []);


  const makeDetails = useMemo(()=>{
    let tempStr='';
    if(sizeSelected || colourSelected){
      if(sizeSelected && sizeSelected.length> 0){
        tempStr+=`Talla: ${sizeSelected}`
      }
      if(colourSelected && colourSelected.length>0){
        tempStr+=`${sizeSelected.length ? ' |' : ''}  Color: ${colourSelected}`
      }
    }

    return tempStr;
  },[sizeSelected,colourSelected])

  return (
    <>
      <div className="card--shopping-cart">
        <div className="container--shopping-card">
          <div className="card--shopping-cart__image">
            <div
              className="card--shopping-cart__iconDelete"
              onClick={handleRemoveProduct}
            >
              <Image
                src="/image/cart/delete-icon.svg"
                width="20px"
                height="20px"
              />
            </div>
            <img src={imagen} alt="imagen carrito" />
          </div>
        </div>
        <div className="card--shopping-cart__text">
          <p className="card--shopping-cart__title">{nombre}</p>
          <p className="card--shopping-cart__size-color">
            {makeDetails}
          </p>
          <p className="card--shopping-cart__price">
            S/
            {haveDiscount
              ? precioPromocional.toFixed(2)
              : precio.toFixed(2)}
          </p>
          <p className="card--shopping-cart__quantity"> x {quantity}</p>
        </div>
      </div>
      <style jsx>
        {`
          .card--shopping-cart__iconDelete {
            position: absolute;
            top: -0.5rem;
            left: -0.5rem;
            cursor: pointer;
          }
          .card--shopping-cart__iconDelete:hover {
            transform: scale(1.05);
            animation: animateHeart 0.3s linear forwards !important;
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
          .card--shopping-cart img {
            width: 100%;
            height: 100%;
            border-radius: 20px;
            object-fit: cover;
            object-position: center center;
          }

          .container--shopping-card {
            width: 105px;
            height: 95px;
            display: flex;
          }

          .card--shopping-cart__image {
            position: relative;
            width: 90px;
            height: 90px;
            margin: auto;
          }

          .card--shopping-cart__text {
            padding: 0rem 0.5rem;
            width: 65%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
          .card--shopping-cart__title {
            font-family: "mont-regular";
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 1rem;
            text-align: left;
          }
          .card--shopping-cart__size-color {
            font-family: "mont-regular";
            font-style: normal;
            font-weight: 500;
            font-size: 11px;
            line-height: 0.9rem;
            text-align: left;
          }
          .card--shopping-cart__price {
            font-family: "mont-semibold";
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            line-height: 1rem;
            color: #4b64a4;
            text-align: center;
          }
          .card--shopping-cart__quantity {
            font-family: "mont-light";
            font-size: 1.2rem;
            line-height: 1rem;
          }

          @media (min-width: 1366px) {
            .container--shopping-card {
              width: 135px;
              height: 125px;
              display: flex;
            }
            .card--shopping-cart__image {
              position: relative;
              width: 110px;
              height: 110px;
              margin: auto;
            }
          }
        `}
      </style>
    </>
  );
};

export default DetailProduct;
