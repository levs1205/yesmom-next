import React from "react";
import AppLayout from "../../components/AppLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

const Identification = () => {
  return (
    <AppLayout>
      <div className="container-checkout">
        <div className="container__text">
          <Link href="/shopping-cart">
            <a className="container__text--link">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="container__text-icon"
              ></FontAwesomeIcon>
              Volver a carrito
            </a>
          </Link>
        </div>
        <div className="icon-checkout">
          <Image
            src="/image/icon/checkout-first-step.svg"
            alt="Checkout primer paso"
            width={200}
            height={50}
          />
        </div>
        <section className="checkout-block">
          <div className="checkout-block__card">
            <div className="checkout-block__text">
              <p className="checkout-block__text--font-size-and-bold">
                1. Identificación:
              </p>
              <p className="checkout-block__text--font-size">
                Solicitamos únicamente la información esencial para la
                finalización de la compra.
              </p>
            </div>
            <form action="" className="identification-form">
              <div className="identification-form__wrapper">
                <label for="email" className="identification-form__label" >Dirección de correo electrónico:</label>
                <input
                  type="text"
                  className="identification-form__input"
                  name="email"
                  id="email"
                />
              </div>
              <div className="identification-form__wrapper">
                <label for="name" className="identification-form__label" >Nombre y Apellido:</label>
                <input
                  type="text"
                  className="identification-form__input"
                  name="name"
                  id="name"
                />
              </div>
              <div className="identification-form__wrapper">
                <label for="identity" className="identification-form__label">Documento de identidad:</label>
                <input
                  type="text"
                  className="identification-form__input"
                  name="identity"
                  id="identity"
                />
              </div>
              <div className="identification-form__wrapper">
                <label for="phone" className="identification-form__label">Teléfono / Móvil:</label>
                <input
                  type="text"
                  className="identification-form__input"
                  name="phone"
                  id="phone"
                />
              </div>
            </form>
            <div className="checkout-block__text">
              <p className="checkout-block__text--font-size-and-bold">
                2. Datos para la entrega:
              </p>
              <p className="checkout-block__text--font-size">
                Aún falta llenar algunos datos.
              </p>
            </div>
            <div className="checkout-block__text">
              <p className="checkout-block__text--font-size-and-bold">
                3. Método de pago:
              </p>
              <p className="checkout-block__text--font-size">
                Aún falta llenar algunos datos.
              </p>
            </div>
          </div>
          <div className="shopping-cart-block__checkout">
            <section className="discount-coupon__text">
              <div className="discount-coupon__input">
                <label for="coupon" className="discount-coupon__text">
                  ¿Tienes un código de descuento?
                </label>
                <div className="discount-coupon__group-input">
                  <input
                    type="text"
                    placeholder="Ingresa código"
                    className="discount-coupon__input-text"
                    id="coupon"
                  />
                  <input
                    type="submit"
                    name=""
                    id=""
                    value="Aplicar"
                    className="discount-coupon__input-submit"
                  />
               </div>
              </div>
            </section>
            <section className="price-table">
              <table className=" price-table__table">
                <tbody className="price-table__tbody">
                  <tr className="price-table__tbody--fount-padding ">
                    <td className="price-table__tbody--text-align-left">
                      Subtotal
                    </td>
                    <td className="price-table__tbody--text-align-right">
                      S/ XX.XX
                    </td>
                  </tr>
                  <tr className="price-table__tbody--fount-padding">
                    <td className="price-table__tbody--text-align-left">IGV</td>
                    <td className="price-table__tbody--text-align-right">
                      S/ XX.XX
                    </td>
                  </tr>
                  <tr className="price-table__tbody--fount-bold-padding price-table__tbody--border-top">
                    <td className="price-table__tbody--text-align-left">
                      <strong>Total</strong>
                    </td>
                    <td className="price-table__tbody--text-align-right">
                      <strong>S/ XX.XX</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>
        </section>
      </div>
      <style jsx>
        {`
        .container-checkout {
          padding: 8rem 1rem;
          max-width:1500px;
          margin: 0 auto
        }
        .container__text {
          font-family: "mont-semibold";
          font-size: 14px;
          line-height: 26px;
          color: #575650;
          text-align:right;
          padding-bottom:10px;
          border-bottom:1px solid #DADADA;
        }
        .container__text--link{
          text-decoration:none;
          color: #575650;
          cursor:pointer
        }
        :global(.container__text-icon){
          margin-right:10px
        }
        .icon-checkout{
          margin:40px auto;
          text-align:center
        }
        .checkout-block__text{
          color: #575650;
           font-family: "mont-regular";
           text-align:left;
           border-bottom:1px solid #DADADA;
           padding-top:20px

        }
        .checkout-block__text--font-size-and-bold{
           font-size: 16px;
           font-family: "mont-semibold";
        }
         .checkout-block__text--font-size{
           font-size: 13px;
        }
        .container__text-items {
          font-family: "mont-regular";
          font-style: normal;
          font-weight: 600;
          font-size: 13px;
          line-height: 13px;
          color: #5a5a5a;
        }
        .checkout-block {
          display: flex;
          justify-content: center;
          align-content: center;
          flex-direction: column;
        }
        .checkout-block__card {
          display:flex;
          justify-content:center;
          align-content:center;
          flex-direction:column;
          width: 100%;
          height: auto;
          background: #ffffff;
          border: 10px solid #ffffff;
          box-shadow: 0px 0px 33px rgba(0, 0, 0, 0.13);
          border-radius: 20px;
          padding:1rem
        }

        .card__block-first{
          display:flex;
          justify-content:center;
          align-content:center;
          flex-direction:row;
        }
      .card__block-first .card__img{
        width:35%;
        height: 104px;
        border-radius: 15px;
      }
       .card__block-first .card__block-text{
        width:65%;
        padding:0.5rem
      }
      .block-text__title{
        font-family: "mont-regular";
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 17px;
        color: #575650;
        margin-bottom: 0rem;
      }
      .block-text__short-description{
        font-family: "mont-light";
        font-style: normal;
        font-weight: 300;
        font-size: 13px;
        line-height: 40px;
        color: #575650;
        margin-bottom: 0rem;
        }


      .card__block-second{
        display:flex;
        justify-content:center;
        align-items:  center!important;
        flex-direction:row;
      }
      .block-second__block-store-text{
         display:flex;
        justify-content:center;
        align-items: center;
        flex-direction:row;
        width:60%
      }
      .block-store-text__img{
        width: 20%;
        height: 40px;
         border-radius: 50%;
      }
      .block-store-text__text{
        width: 80%;
         padding-left:0.5rem;
         font-family: "mont-light";
        font-style: normal;
        font-weight: 300;
        font-size: 10px;
        color: #575650;
        margin-bottom: 0rem;
      }
      .block-second__block-store-price{
           font-family: "mont-regular";
           padding-top:0.5rem;
          font-style: normal;
          font-weight: 300;
          font-size: 18px;
        color: #4B64A4;
      }
      .shopping-cart-block__checkout{
        padding:2rem 0rem
      }
      .discount-coupon__text{
         font-family: "mont-light";
        font-style: normal;
        font-weight: 300;
        font-size: 13px;
        color: #575650;
      }
      .discount-coupon__group-input{
        display:flex;

      }
      .discount-coupon__input-text{
        border:1px solid #FEBF41;
        box-sizing:border-box;
        box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
        border-radius:10px;
        width:190px;
        height:39px;
        font-size:18px;
      }
      .discount-coupon__input-text::placeholder{
        color: #575650;
        font-size:14px;
      }
      .discount-coupon__input-submit{
        font-family:"omnes-regular";
        background:#FEBF41;
        font-size:18px;
        color:#FFf;
        border-radius:10px;
        border:0px;
        height:39px;
        width:90px;
        margin-left:0.5rem
      }
      .price-table{
       padding:2rem 0rem;
      }
       .price-table__tbody--fount-padding {
        font-family: "mont-regular";
        height: 40px;
       }
       .price-table__tbody--text-align-left{
         text-align:left
       }
       .price-table__tbody--text-align-right{
         text-align:right
       }
       .price-table__tbody--fount-bold-padding{
         font-family: "mont-semibold";
        height: 40px;
       }
      .price-table__tbody--border-top{

        border-top:1px solid #DADADA
      }
      .price-table__table{
        width:100%
      }
      .box-terms{
        display:flex;
        align-items:top;
         cursor: pointer;
      }
      .box-terms__text{
        font-family: "mont-light";
        font-style: normal;
        font-weight: 300;
        font-size: 13px;
        line-height: 25px;
        color:#575650;
        padding:0 5px
      }
      .box-terms__checkbox{
        position:absolute;
        padding:0;
        border:0;
        height:1px;
        width:1px;
        overflow:hidden
      }
       .box-terms__text:before{
         content:"";
         display:inline-block;
         width:22px;
         height:22px;
         border: 2px solid #4B64A4;
        border-radius: 5px;
        margin-right:8px;
        line-height:24px;
        vertical-align:text-top
       }
       .box-terms__checkbox:checked + .box-terms__text:before{
         border:2px solid #F22C74;
         background:url('/image/icon/check-pink.svg') center/16px no-repeat
       }
      .buy-button {
        margin: 2.5rem auto;
        text-align: center;
        font-family: "omnes-regular";
        font-weight: 500;
        font-size: 1.3rem;
        width: 310px;
        height: 60px;
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
      .restriction-text{
        font-family: "mont-light";
        font-size: 13px;
        line-height: 25px;
        text-align: center;
        color: #575650;

      }
      .identification-form__label{
         font-family: "mont-light";
        color: #575650;
        font-size: 14px;
        line-height: 15px;
        padding-top:30px
      }
      .identification-form__input{
         font-family: "mont-regular";
        color: #556EA1;
        border:1px solid #556EA1;
        border-radius: 20px;
        width:100%;
        padding:5px;
        font-size: 14px;
      }
      @media (min-width: 480px) {
         .discount-coupon__input-text{
          width:300px;
        }

        .discount-coupon__input-submit{
          width:150px;
        }
      }
       @media (min-width: 768px) {
         .container-checkout {
          padding: 8rem 3rem;
        }
         .shopping-cart-block {
          display: flex;
          justify-content: center;
          align-content: center;
          flex-direction: row;
          width:100%
        }
         .checkout-block {
          display: flex;
          justify-content: center;
          align-content: center;
          flex-direction: row;
          width:100%
        }
        .shopping-cart-block__card {
          display:flex;
          justify-content:center;
          align-content:center;
          flex-direction:column;
          width: 50%;
          height: auto;
          background: #ffffff;
          border: 10px solid #ffffff;
          box-shadow: 0px 0px 33px rgba(0, 0, 0, 0.13);
          border-radius: 20px;
        }
         .card__block-first .card__img{
          width:20%;
          height: 104px;
          border-radius: 15px;
        }
         .card__block-first .card__block-text{
          width:80%;
          padding:1rem
        }
        .shopping-cart-block__checkout{
          width:50%;
          padding:40px
        }
        .checkout-block__card {
         padding:3rem
        }
         .discount-coupon__input-text{
          width:200px;
        }

        .discount-coupon__input-submit{
          width:100px;
        }

      }
      `}
      </style>
    </AppLayout>
  );
};

export default Identification;
