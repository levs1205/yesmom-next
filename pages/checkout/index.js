import React, { useEffect, useState } from "react";
import Head from "next/head";
import AppLayout from "../../components/AppLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Stepper from "../../components/Stepper";
// import { useForm } from "../../hooks/useForm";
import CheckoutStep1 from "./CheckoutStep1";
import CheckoutStep3 from "./CheckoutStep3";
import CheckoutStep2 from "./CheckoutStep2";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email(),
  identity: yup.number().integer().required().min(8, 'Ingrese los 8 digitos de su DNI'),
  phone: yup.string().matches(phoneRegExp, 'El número de celular no es válido')
});



const Checkout = () => {
  const [selected, setSelected] = useState(0);
  const [idPreference , setIdPreference] = useState(null);

  const { register, handleSubmit, formState:{ errors }, watch  } = useForm({
    resolver: yupResolver(schema)
  })

  // const initialForm = {
  //   email: "",
  //   name: "",
  //   identity: "",
  //   phone: "",
  // };

  // const [formValues, handleInputChange] = useForm(initialForm);

  // const { email, name, identity, phone } = formValues;
  console.log('errors',errors)

const submitTest = (data) => {
  console.log('dentro submit test')
  console.log(data)
}

  const submitForm = async() => {

    const data = {
      "quantity" : 50,
      "description" : "Esto es una prueba",
      "price" : 1
  };
    const response = await fetch('http://localhost:8080/create_preference',{
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });


    const { id } = await response.json();
    setIdPreference(id);
    console.log(id);
  };

  const handleStep = () => {
    if (selected != 2) {
      handleSubmit(submitTest);
      console.log('errors handle step', errors)
      console.log('entro')
      // setSelected((step) => step + 1);
    } else {
      submitForm();
    }
  };

  useEffect(()=>{
    if (idPreference) {
      const mp = new MercadoPago('TEST-00e86e9f-751f-42c9-a278-7a9f97340aa8',{
        locale : 'es-PE'
      })
      console.log(mp);
      console.log(idPreference);

      const checkout = mp.checkout({
        preference : {
          id: idPreference
        },
        theme: {
          elementsColor: '#ec608d'
        }
      })
      setTimeout(() => {
        checkout.open();
      }, 2000);
      console.log(mp);

      
      /* const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src =
        'https://www.mercadopago.cl/integrations/v1/web-payment-checkout.js';
      script.setAttribute('data-preference-id', preferenceId);
      const form = document.getElementById("id_div");
      form.appendChild(script); */
    
    }

  },[idPreference])

  return (
    <AppLayout>
      <Head>
        <title>YesMom - Checkout</title>
        <meta name="description" content="YesMom es ..."></meta>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="YesMom - Checkout" />
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
        <meta name="twitter:title" content="YesMom - Checkout" />
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
          <Stepper selected={selected} setSelected={setSelected} />
        </div>
        <section className="checkout-block">
          <div className="shopping-cart-block__checkout">
            {/* <section className="discount-coupon__text">
              <div className="discount-coupon__input">
                <label htmlFor="coupon" className="discount-coupon__text">
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
            </section> */}
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
                      <strong className="ft-15">Total</strong>
                    </td>
                    <td className="price-table__tbody--text-align-right">
                      <strong className="ft-15">S/ XX.XX</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>
          <div className="checkout-block__card">
            <form action="" className="identification-form" onSubmit={handleSubmit(submitTest)}>
                {
                    selected === 0 && 
                    <CheckoutStep1 
                        register={register}
                        handleSubmit={handleSubmit}
                        watch={watch}
                        errors={errors}
                        // formValues={formValues}
                        // handleInputChange={handleInputChange}
                    /> 
                }
                {
                    selected === 1 && 
                    <CheckoutStep2
                        register={register}
                        // formValues={formValues} 
                        // handleInputChange={handleInputChange}
                        setSelected={setSelected}
                    /> 
                }
                {
                    selected === 2 && 
                    <CheckoutStep3
                        register={register}
                        // formValues={formValues} 
                        // handleInputChange={handleInputChange}
                        setSelected={setSelected}
                    /> 
                }
              <div className="only-button-submit" onClick={handleSubmit(submitTest)}>
                {selected === 2 ? (
                  <div className="btn-checkout btn-pink">Comprar</div>
                ) : (
                  <div className="btn-checkout btn-amarillo">Continuar</div>
                )}
              </div>
              <div>

              </div>
            </form>
              <form 
                id="btn_checkout" 
                className="btn_checkout"
                onSubmit={ (e) => {
                  e.preventDefault();
                  console.log("hola");
                }}
              >

              </form>
          </div>
          
        </section>
      </div>
      <style jsx>
        {`
          .only-button-submit {
            padding: 0 3rem;
            margin: 3rem 0 2rem 0;
          }
          .btn-checkout {
            width: 100%;
            cursor: pointer;
            padding: 1rem;
            border-radius: 3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.3s ease-in-out;
            color: #ffffff;

            font-family: "mont-regular" !important;
            font-size: 1.8rem;
          }
          .btn-amarillo {
            background-color: #febf41;
          }
          .btn-pink {
            background-color: #ec608d;
            padding: 1rem;
          }
          .container-checkout {
            padding: 6.5rem 1rem;
            max-width: 1500px;
            margin: 0 auto;
          }
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
          .discount-coupon__text {
            font-family: "mont-light";
            font-style: normal;
            font-weight: 300;
            font-size: 1.3rem;
            color: #575650;
          }
          .discount-coupon__group-input {
            display: flex;
          }
          .discount-coupon__input {
            display: flex;
            flex-direction: column;
          }
          .discount-coupon__input-text {
            text-align: left;
            border: 1px solid #febf41;
            box-sizing: border-box;
            border-radius: 10px;
            height: 39px;
            flex-basis: 75%;
            font-size: 1.4rem;
            padding: 0.5rem 1rem;
          }
          .discount-coupon__input-text:focus {
            outline: none;
            box-shadow: none;
          }
          .discount-coupon__input-text::placeholder {
            text-align: left;
            background-image: none !important;
            color: #575650;
            font-size: 1.4rem;
            opacity: 0.5;
          }
          .discount-coupon__input-submit {
            font-family: "omnes-regular";
            background: #febf41;
            font-size: 1.8rem;
            color: #fff;
            border-radius: 10px;
            border: 0;
            width: 100%;
            flex-basis: 25%;
            height: 3.9rem;
            margin-left: 0.5rem;
          }
          .discount-coupon__input-submit:focus {
            outline: none;
            box-shadow: none;
          }
          .price-table {
            padding: 2rem 0rem;
          }
          .price-table__tbody--fount-padding {
            font-family: "mont-regular";
            height: 4rem;
            font-size: 1.3rem;
          }
          .price-table__tbody--text-align-left {
            font-size: 1.4rem;
            text-align: left;
          }
          .price-table__tbody--text-align-right {
            font-size: 1.3rem;
            text-align: right;
          }
          .price-table__tbody--fount-bold-padding {
            font-family: "mont-semibold";
            height: 4rem;
          }
          .price-table__tbody--border-top {
            border-top: 1px solid #dadada;
          }
          .price-table__table {
            width: 100%;
          }
          .ft-15 {
            font-size: 1.5rem !important;
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
            border:none;
            border-bottom:1px solid #DADADA;
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
                padding : 0.5rem 1rem;
                border: 1px solid #556ea1;
                border-radius: 10px;
            }
            .btn-checkout{
                width:20rem;
                margin: 0 auto;

                border-radius:15px;
                font-family:"omnes-bold"!important;
            }
            .checkout-block {
              width: 100%;
            }
            .container-checkout {
              padding: 6.5rem 3rem;
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
              flex-direction: row-reverse;
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
            .container-checkout{
              width:85%;
            }
              .btn-checkout{
                  width:50%;
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
            .container-checkout{
              width:82.5%;
            }
          }
        `}
      </style>
    </AppLayout>
  );
};

export default Checkout;
