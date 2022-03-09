import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import AppLayout from "../../components/AppLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Stepper from "../../components/Stepper";
// import { useForm } from "../../hooks/useForm";
import CheckoutStep1 from "../../components/Checkout/CheckoutStep1";
import CheckoutStep2 from "../../components/Checkout/CheckoutStep2";
import CheckoutStep3 from "../../components/Checkout/CheckoutStep3";
import CheckoutStep4 from "../../components/Checkout/CheckoutStep4";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import YesmomContext from "../../context/Context";
import { useRouter } from "next/router";
import { generateDelivery, generateSale } from "../../helpers/requestCheckout";
import { makeDelivery } from "../../context/actions/sale";
import LoaderPage from "../../components/LoaderPage";
import { startValidateToken } from "../../helpers/validateToken";
import Swal from "sweetalert2";
import SubtotalComponent from "../../components/Checkout/SubtotalComponent";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const identityRegex = /^\d{8,9}$/

const schemaFirst = yup.object().shape({
  email: yup.string().email('Ingrese un email válido').required('Ingrese un correo electrónico'),
  name: yup.string().required('Ingrese su nombre'),
  identity: yup.string().matches(identityRegex, 'Ingrese un número de documento válido'),
  phone: yup.string().matches(phoneRegExp, 'El número de celular no es válido'),
});

const schemaSecond = yup.object().shape({
  calle: yup.string().required('Ingrese calle'),
  numero: yup.string().matches(/^[0-9]+$/g,'Numero incorrecto').required('Ingrese el número'),
  interior: yup.string(),
  referencia : yup.string().required('Ingrese referencia'),
  recibePedido : yup.string().oneOf(['yo','otro'],'Campo obligatorio'),
  // departamento : yup.string().required('Seleccione departamento'),
  // provincia : yup.string().required('Seleccione provincia'),
  distrito : yup.string().required('Seleccione distrito'),
  fechaEntrega : yup.date().required('Fecha es obligatoria'),
});

const schemaThird = yup.object().shape({
  typeDocument : yup.string().oneOf(['on'],'Campo obligatorio'),
})


const Checkout = () => {

  const router = useRouter();
  const  { auth : { logged } , dispatchSale , ui : { cart } , client} = useContext(YesmomContext);
  const [selected, setSelected] = useState(0);
  const [ checking , setChecking] = useState(false);
  const [idPreference , setIdPreference] = useState(null);

  const { register, handleSubmit, formState:{ errors }, watch, setValue  } = useForm({
    resolver: yupResolver(schemaFirst),
  })

  const { register : register_2, control, handleSubmit : handleSubmit_2, formState: formState_2, watch : watch_2 } = useForm({
    resolver : yupResolver(schemaSecond),
    defaultValues :{
      recibePedido :'yo'
    },
  })
  const { register : register_3, handleSubmit : handleSubmit_3, formState: formState_3,reset_3} = useForm({
    resolver : yupResolver(schemaThird),
    defaultValues:{
      typeDocument : 'on',
    }
  })



  const initSale = async() => {

    try{

      const { phone , name, identity } = watch();
      const { calle, numero , interior, referencia , distrito , fechaEntrega , recibePedido, nameRecibeTercero} = watch_2();


      const recibe = recibePedido==='yo' ? name :  nameRecibeTercero;

      setChecking(true);
      const { ok , idPreference } = await generateSale({
        calle,
        numero,
        interior,
        distrito,
        fechaEntrega,
        phone,
        recibe,
        referencia,
        tipoDocumento : 'DNI',
        numeroDocumento : identity
      },cart);
      setChecking(false);
      if(ok){
        setIdPreference(idPreference);
      }
      
    }catch(err){
      console.log(err);
    }

  };

  const handleSelection = async ( data ) => {
    if (selected !== 3) {

      //Generar el pedido
      if(selected===1){

        setChecking(true);

        const { calle, numero , interior, distrito, fechaEntrega } = watch_2();
        
        const { ok , data } = await generateDelivery({
          calle,
          numero,
          interior,
          distrito,
          fechaEntrega
        }, cart);
        setChecking(false);
        
        if(!ok){
          return Swal.fire({
            text : 'No se pudo generar el delivery',
            customClass :{
              popup :'popup-error-delivery',
              htmlContainer : 'text-error-delivery'
            },
            showConfirmButton : false
          });
        }

        //Ya pasó
        dispatchSale(makeDelivery(data))

      }
      setTimeout(() => {
        window.scrollTo(0,0);
      },[300])
      setSelected( selected => selected + 1);

    } else {
      console.log('HOLAAAAAA');
      initSale();
    }
  };

  const openMercadoPago = () => {
    try{
      // const mp = new MercadoPago(process.env.NEXT_PUBLIC_MERCADO_PAGO_PUBLIC_KEY,{
      //   locale : 'es-PE'
      // })
      
      if (idPreference?.length > 0 ) {
        //Intentar conexion mercado pago
        // console.log(idPreference);
        const MERCADO_URL = 'https://www.mercadopago.com.pe/checkout/v1/redirect';
        router.push(`${MERCADO_URL}?pref_id=${idPreference}`)
        // const checkout = mp.checkout({
  
        //   preference : {
        //     id: idPreference
        //   },
        //   theme: {
        //     elementsColor: '#ec608d',
        //   },
        // })
        // setTimeout(() => {
        //   checkout.open();
        // }, 2000);
        
      }
    }catch(err){
      console.log(err);
    }
  }


  useEffect(()=>{
    if(cart?.length === 0 ){
      return router.push('/tienda');
    }
  },[ cart ])

  useEffect(()=>{
    if(client && client.data){
      setValue('email' ,client.data.principalEmail);
      setValue('name',  client.data.fullname);
      setValue('phone',client.data.phone);
    }
  },[client])
  useEffect(()=>{
    openMercadoPago();
  },[idPreference])


  return (
    <AppLayout>
      {
        checking && <LoaderPage type="over"/>
      }
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
      <div className="fade-in animated container-checkout">
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
          <Stepper selected={selected} />
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
            {/* <section className="price-table">
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
            </section> */}
            <SubtotalComponent />
          </div>
          <div className="checkout-block__card">
            <form 
              action="" 
              className="identification-form" 
            >
                {
                    selected === 0 && 
                    <CheckoutStep1 
                        register={register}
                        handleSubmit={handleSubmit}
                        errors={errors}
                        // formValues={formValues}
                        // handleInputChange={handleInputChange}
                    /> 
                }
                {
                    selected === 1 && 
                    <CheckoutStep2
                        register={register_2}
                        handleSubmit={handleSubmit_2}
                        watch={watch}
                        thirdPart={watch_2}
                        errors={formState_2.errors}
                        setSelected = { setSelected }
                        control = { control }
                        // formValues={formValues} 
                        // handleInputChange={handleInputChange}
                        // setSelected={setSelected}
                    /> 
                }
                {
                    selected === 2 && 
                    <CheckoutStep3
                        register={register}
                        infoDatos = { watch }
                        infoEntrega = { watch_2 }
                        setSelected={setSelected}
                        // formValues={formValues} 
                        // handleInputChange={handleInputChange}
                    /> 
                }
                {
                    selected === 3 && 
                    <CheckoutStep4
                        register={register_3}
                        infoDatos = { watch }
                        infoEntrega = { watch_2 }
                        setSelected={setSelected}
                        // formValues={formValues} 
                        // handleInputChange={handleInputChange}
                    /> 
                }
              <div className="only-button-submit" onClick={
                    selected === 0 && handleSubmit(handleSelection)   ||   
                    selected === 1 && handleSubmit_2(handleSelection)   ||
                    selected === 2 && handleSubmit_3(handleSelection)  ||
                    selected === 3 && handleSubmit_3(handleSelection) 
                }>
                {selected === 3 ? (
                  <div className="btn-checkout btn-pink">Comprar</div>
                ) : (
                  <div className="btn-checkout btn-amarillo">Continuar</div>
                )}
              </div>
              {/* <div className="cho-container">
                <a href="http://localhost:3003/iniciar-sesion" target="_blank">Pagar</a>  
              </div> */}
            </form>
          </div>
          
        </section>
      </div>
      <style jsx>
        {`

          :global(.popup-error-delivery){
            padding : 3rem 0;
            border : 2px dashed #ec608d;
            border-radius : 25px;
          }

          :global(.text-error-delivery){
            font-family : "mont-regular";
            font-size : 1.5rem;
            color : #5a5a5a;
          }
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


export const getServerSideProps = async ({ req, res , resolvedUrl}) => {

  const token = req?.cookies?.TokenTest;
  const redirected = {
    redirect: {
      permanent: false,
      destination: "/login?redirect_uri=checkout",
    },
    props:{},
  };
  const accepted = {
    props : {}
  }

  if(token){
    const { valid } = await startValidateToken(token);

    console.log('Checkout valid ', valid)
    if(!valid) return redirected;
    return accepted;
  }else{
    return redirected;
  }
  
}
