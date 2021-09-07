import React from "react";

const CheckoutStep1 = ({ formValues, handleInputChange }) => {
  return (
    <>
      <div className="fade-in animated  checkout-block__text">
        <p className="checkout-block__text--font-size-and-bold">
          1. Identificación:
        </p>
        <p className="checkout-block__text--font-size">
          Solicitamos únicamente la información esencial para la finalización de
          la compra.
        </p>
      </div>
      <div className="identification-form__wrapper">
        <label htmlFor="email" className="identification-form__label">
          Dirección de correo electrónico:
        </label>
        <input
          type="text"
          className="identification-form__input"
          name="email"
          id="email"
          value={formValues.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="identification-form__wrapper">
        <label htmlFor="name" className="identification-form__label">
          Nombre y Apellido:
        </label>
        <input
          type="text"
          className="identification-form__input"
          name="name"
          id="name"
          value={formValues.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="identification-form__wrapper">
        <label htmlFor="identity" className="identification-form__label">
          Documento de identidad:
        </label>
        <input
          type="text"
          className="identification-form__input"
          name="identity"
          id="identity"
          value={formValues.identity}
          onChange={handleInputChange}
        />
      </div>
      <div className="identification-form__wrapper">
        <label htmlFor="phone" className="identification-form__label">
          Teléfono / Móvil:
        </label>
        <input
          type="text"
          className="identification-form__input"
          name="phone"
          id="phone"
          value={formValues.phone}
          onChange={handleInputChange}
        />
      </div>
      <style jsx>
        {`
          .container__text {
            font-family: "mont-semibold";
            font-size: 1.4rem;
            line-height: 26px;
            color: #575650;
            text-align: right;
            padding-bottom: 10px;
            border-bottom: 1px solid #dadada;
          }
          .container__text--link {
            text-decoration: none;
            color: #575650;
            cursor: pointer;
          }
          :global(.container__text-icon) {
            margin-right: 10px;
          }
          .icon-checkout {
            margin: 40px auto;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .checkout-block {
            padding: 0 1rem;
          }
          .checkout-block__text {
            color: #575650;
            font-family: "mont-regular";
            text-align: left;
            border-bottom: 1px solid #dadada;
            padding-top: 20px;
          }
          .checkout-block__text--font-size-and-bold {
            font-size: 1.6rem;
            font-family: "mont-semibold";
          }
          .checkout-block__text--font-size {
            font-size: 1.3rem;
          }
          .container__text-items {
            font-family: "mont-regular";
            font-style: normal;
            font-weight: 600;
            font-size: 1.3rem;
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
            padding: 1rem;
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
            font-size: 1.3rem;
            line-height: 17px;
            color: #575650;
            margin-bottom: 0rem;
          }
          .block-text__short-description {
            font-family: "mont-light";
            font-style: normal;
            font-weight: 300;
            font-size: 1.3rem;
            line-height: 40px;
            color: #575650;
            margin-bottom: 0rem;
          }

          .card__block-second {
            display: flex;
            justify-content: center;
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
            font-size: 1.8rem;
            color: #4b64a4;
          }
          .shopping-cart-block__checkout {
            padding: 2rem 0rem;
          }

          .box-terms {
            display: flex;
            align-items: top;
            cursor: pointer;
          }
          .box-terms__text {
            font-family: "mont-light";
            font-style: normal;
            font-weight: 300;
            font-size: 1.3rem;
            line-height: 2.5rem;
            color: #575650;
            padding: 0 5px;
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
            width: 2.2rem;
            height: 2.2rem;
            border: 2px solid #4b64a4;
            border-radius: 5px;
            margin-right: 8px;
            line-height: 24px;
            vertical-align: text-top;
          }
          .box-terms__checkbox:checked + .box-terms__text:before {
            border: 2px solid #f22c74;
            background: url("/image/icon/check-pink.svg") center/16px no-repeat;
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
          .restriction-text {
            font-family: "mont-light";
            font-size: 1.3rem;
            line-height: 25px;
            text-align: center;
            color: #575650;
          }
          .identification-form__label {
            font-family: "mont-light";
            color: #575650;
            font-size: 1.3rem;
            line-height: 15px;
            padding-top: 30px;
          }
          .identification-form__input {
            font-family: "mont-regular";
            text-align: left;
            color: #556ea1;
            border: none;
            border-bottom: 1px solid #dadada;
            width: 100%;
            padding: 0.5rem 0;
            font-size: 1.4rem;
            height: 3.5rem;
          }
          .identification-form__input:focus {
            outline: none !important;
            box-shadow: none !important;
          }
          @media (min-width: 480px) {
            .discount-coupon__input-text {
              width: 300px;
            }

            .discount-coupon__input-submit {
              width: 150px;
            }

            .checkout-block {
              width: 46rem;
              margin: 0 auto;
            }
          }
          @media (min-width: 768px) {
            .identification-form__input {
              padding: 0.5rem 1rem;
              border: 1px solid #556ea1;
              border-radius: 10px;
            }
            .btn-checkout {
              width: 20rem;
              margin: 0 auto;
            }
            .checkout-block {
              width: 100%;
            }
            .shopping-cart-block {
              display: flex;
              justify-content: center;
              align-content: center;
              flex-direction: row;
              width: 100%;
            }
            .checkout-block {
              display: flex;
              justify-content: center;
              align-content: center;
              flex-direction: row;
              width: 100%;
            }
            .shopping-cart-block__card {
              /*flex-basis: 30%;
                        margin: 0 4rem;*/
              display: flex;
              justify-content: center;
              align-content: center;
              flex-direction: column;
              width: 50%;
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
              width: 50%;
              padding: 40px;
            }
            .checkout-block__card {
              /*margin: 0 4rem;
                        flex-basis: 50%; */
              padding: 3rem;
            }
            .discount-coupon__input-text {
              width: 200px;
            }

            .discount-coupon__input-submit {
              width: 100px;
            }
          }

          @media (min-width: 1024px) {
            .btn-checkout {
              width: 100%;
            }
            .shopping-cart-block__card {
              flex-basis: 30%;
              margin: 0 4rem;
            }
            .checkout-block__card {
              flex-basis: 70%;
              margin: 0 4rem;
            }
          }
          @media (min-width: 1280px) {
          }
        `}
      </style>
    </>
  );
};

export default CheckoutStep1;
