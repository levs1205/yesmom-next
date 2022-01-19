import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useRef, useState } from "react";

import AppLayout from "../../components/AppLayout";
import DetailItemCart from "../../components/Shopping-cart/DetailItemCart";
import YesmomContext from "../../context/Context";
import { getTotalPrice } from "../../helpers/getTotalPrice";

const shoppingCart = () => {
  const router = useRouter();
  const {
    auth : { logged },
    ui: { cart = [] },
  } = useContext(YesmomContext);
  const [accept, setAccept] = useState(false);

  const totalPrice = getTotalPrice(cart);
  const subTotal = (totalPrice / 1.18).toFixed(2);
  const igv = (totalPrice - subTotal).toFixed(2);


  const handleAccept = () => {
    setAccept((accept) => !accept);
  };

  const handleStartCheckout = () => {
    if (accept) {
      if(!logged){
        router.push('/login?redirect_uri=checkout')
      }else{
        router.push("/checkout");
      }
    }
  };

  
  return (
    <AppLayout>
      <Head>
        <title>YesMom - Shopping Cart</title>
        <meta name="description" content="YesMom es ..."></meta>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="YesMom - Shopping Cart" />
        <meta
          property="og:description"
          content="Yes Mom es una plataforma digital peruana que ayuda a las
                        mamis a disfrutar su maternidad sin preocupaciones. Queremos
                        ser la marca aliada que todos los papás estuvieron buscando,
                        una página web que reúne en un solo lugar todo lo que
                        necesitan para la llegada de su bebé y acompañar su
                        crecimiento."
        />
        <meta
          property="og:image"
          itemprop="image"
          content="https://yesmom.vercel.app/image/about-header.png"
        />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="855" />
        <meta property="og:site_name" content="Yes Mom" />
        {/* <meta property="og:url" content={`${user.id}`} />  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="YesMom - Shopping Cart" />
        <meta
          name="twitter:description"
          content="Yes Mom es una plataforma digital peruana que ayuda a las
                        mamis a disfrutar su maternidad sin preocupaciones. Queremos
                        ser la marca aliada que todos los papás estuvieron buscando,
                        una página web que reúne en un solo lugar todo lo que
                        necesitan para la llegada de su bebé y acompañar su
                        crecimiento."
        />
        <meta
          name="twitter:image"
          content="https://yesmom.vercel.app/image/about-header.png"
        />
      </Head>
      <div className="container fade-in animated ">
        <p className="container__text">Carrito de compras</p>
        {cart.length === 0 ? (
          <p className="container__text-items">No tienes nada en el carrito</p>
        ) : (
          <p className="container__text-items">({cart.length} items)</p>
        )}
        {cart.length > 0 && (
          <section className="shopping-cart-block">
            <div className="flex-shopping-cart">
              <div className="shopping-cart-block__card">
                {cart.map((product, i) => (
                  <DetailItemCart
                    {...product}
                    key={i}
                    noBorder={i === cart.length - 1 ? true : false}
                  />
                ))}
              </div>

              <div className="shopping-cart-block__checkout">
                {/* <section className="discount-coupon__text">
                  <p className="discount-coupon__text">
                    ¿Tienes un código de descuento?
                  </p>
                  <div className="discount-coupon__input">
                    <input
                      type="text"
                      placeholder="Ingresa código"
                      className="discount-coupon__input-text"
                    />
                    <input
                      type="submit"
                      name=""
                      id=""
                      value="Aplicar"
                      className="discount-coupon__input-submit"
                    />
                  </div>
                </section> */}
                <section className="price-table">
                  <table className=" price-table__table">
                    <tbody className="price-table__tbody">
                      <tr className="price-table__tbody--fount-padding ">
                        <td className="price-table__tbody--text-align-left">
                          Productos
                        </td>
                        <td className="price-table__tbody--text-align-right">
                          S/ {subTotal}
                        </td>
                      </tr>
                      <tr className="price-table__tbody--fount-padding">
                        <td className="price-table__tbody--text-align-left">
                          IGV
                        </td>
                        <td className="price-table__tbody--text-align-right">
                          S/ {igv}
                        </td>
                      </tr>
                      <tr className="price-table__tbody--fount-bold-padding price-table__tbody--border-top">
                        <td className="price-table__tbody--text-align-left">
                          <strong>Subtotal</strong>
                        </td>
                        <td className="price-table__tbody--text-align-right">
                          <strong>S/ {totalPrice}</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </section>
                <section className="box-terms">
                  <input
                    type="checkbox"
                    id="term"
                    name="term"
                    className="box-terms__checkbox"
                    onChange={handleAccept}
                    value={accept}
                  />
                  <label for="term" className="box-terms__text"></label>
                  <p className="box-terms__text-style">
                    He leído y acepto los nuevos Términos y Condiciones de
                    compra del sitio. Acepto también la Política de Privacidad y
                    Seguridad y la Política de Cookies.
                  </p>
                </section>
                <button
                  className={`buy-button ${!accept ? "bg-gray" : ""}`}
                  onClick={handleStartCheckout}
                >
                  Comprar
                </button>
                <p className="restriction-text">
                  *Pueden aplicarse restricciones. No todos los productos son
                  elegibles. Pueden aplicarse recargas por manejo y ubicaciónes
                </p>
              </div>
            </div>
          </section>
        )}
      </div>
      <style jsx>
        {`
          .bg-gray {
            background-color: #dadada !important;
            border: 1px solid #dadada !important;
          }
          .card--shopping-cart__iconDelete {
            position: absolute;
            height: 2rem;
            width: 2rem;
            right: 0;
            top: 2rem;
          }
          .container {
            padding: 8rem 2rem 0 2rem;
          }
          .container__text {
            font-family: "mont-semibold";
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 26px;
            color: #ec668d;
            padding-bottom: 10px;
            border-bottom: 1px solid #dadada;
          }
          .container__text-items {
            font-family: "mont-regular";
            font-style: normal;
            font-weight: 600;
            font-size: 13px;
            line-height: 13px;
            color: #5a5a5a;
          }
          .shopping-cart-block {
            margin: 3rem 0;
            display: flex;
            justify-content: center;
            align-content: center;
            flex-direction: column;
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
          .shopping-cart-block__card {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: auto;
            background: #ffffff;
            border: 10px solid #ffffff;
            box-shadow: 0px 0px 33px rgba(0, 0, 0, 0.13);
            border-radius: 20px;
          }
          .shopping-cart-block__checkout {
            padding: 2rem 0rem;
          }
          .discount-coupon__text {
            font-family: "mont-light";
            font-style: normal;
            font-weight: 300;
            font-size: 13px;
            color: #575650;
            display: none;
          }
          .discount-coupon__input-text {
            border: 1px solid #febf41;
            box-sizing: border-box;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
            width: 200px;
            height: 39px;
          }
          .discount-coupon__input-submit {
            font-family: "omnes-regular";
            background: #febf41;
            font-size: 18px;
            color: #fff;
            border-radius: 10px;
            border: 0px;
            height: 39px;
            width: 102px;
            margin-left: 0.5rem;
          }
          .price-table {
            padding-bottom: 2rem;
            /* padding-top: 2rem; */
          }
          .price-table__tbody--fount-padding {
            font-family: "mont-regular";
            height: 40px;
            font-size: 1.4rem;
          }
          .price-table__tbody--text-align-left {
            text-align: left;
          }
          .price-table__tbody--text-align-right {
            text-align: right;
          }
          .price-table__tbody--fount-bold-padding {
            font-family: "mont-semibold";
            height: 40px;
            font-size: 1.5rem;
          }
          .price-table__tbody--border-top {
            border-top: 1px solid #dadada;
          }
          .price-table__table {
            width: 100%;
          }
          .box-terms {
            display: flex;
            align-items: top;
          }
          .box-terms__text-style {
            font-family: "mont-light";
            font-style: normal;
            font-weight: 300;
            font-size: 13px;
            color: #575650;
          }
          .box-terms__checkbox {
            position: absolute;
            padding: 0;
            border: 0;
            height: 1px;
            width: 1px;
            overflow: hidden;
            cursor: pointer;
          }
          .box-terms__text:before {
            content: "";
            display: inline-block;
            width: 22px;
            height: 22px;
            border: 2px solid #4b64a4;
           font-size: 13px;
            color: #575650;
          }
          .box-terms__checkbox {
            position: absolute;
            padding: 0;
            border: 0;
            height: 1px;
            width: 1px;
            overflow: hidden;
          }
          .box-terms__text:before {
            content: "";
            display: inline-block;
            width: 22px;
            height: 22px;
            border: 2px solid #4b64a4;
            font-size: 13px;
            color: #575650;
          }
          .box-terms__checkbox {
            position: absolute;
            padding: 0;
            border: 0;
            height: 1px;
            width: 1px;
            overflow: hidden;
          }
          .box-terms__text:before {
            content: "";
            display: inline-block;
            width: 22px;
            height: 22px;
            border: 2px solid #4b64a4;
           border-radius: 5px;
            margin-right: 8px;
            line-height: 24px;
            vertical-align: text-top;
            cursor: pointer;
          }
          .box-terms__checkbox:checked + .box-terms__text:before {
            border: 2px solid #f22c74;
            background: url("/image/icon/check-pink.svg") center/16px no-repeat;
          }
          .buy-button {
            text-align: center;
            font-family: "omnes-regular";
            font-weight: 700;
            font-size: 1.8rem;
            width: 22.5rem;
            margin: 0 auto;
            padding: 1.5rem;
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
          .buy-button a {
            color: #ffffff;
            text-decoration: none;
          }
          .restriction-text {
            margin: 2rem 0 0 0;
            font-family: "mont-light";
            font-size: 1.3rem;
            line-height: 25px;
            text-align: center;
            color: #575650;
          }

          @media (min-width: 769px) {
            .flex-shopping-cart {
              display: flex;
            }
            .container {
              padding: 8rem 2rem;
            }
            .container__text {
              font-family: "mont-heavy";
            }
            .buy-button {
              font-family: "omnes-bold";
              color: #dc6a8d;
              border-radius: 10px;
            }
            .shopping-cart-block {
              display: flex;
              justify-content: center;
              align-content: center;
              flex-direction: row;
              width: 100%;
            }
            .shopping-cart-block__card {
              display: flex;
              flex-direction: column;
              width: 60%;
              height: auto;
              background: #ffffff;
              border: 10px solid #ffffff;
              box-shadow: 0px 0px 33px rgba(0, 0, 0, 0.13);
              border-radius: 20px;
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
          }
          @media (min-width: 1200px) {
            .card__block-second {
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center !important;
              flex-direction: row;
            }
            .shopping-cart-block__card {
              padding: 0 3rem 0 2rem;
            }
          }
        `}
      </style>
    </AppLayout>
  );
};

export default shoppingCart;
