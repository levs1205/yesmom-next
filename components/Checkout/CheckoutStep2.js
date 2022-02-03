import axios from "axios";
import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import DatePicker from "react-date-picker/dist/entry.nostyle";

const today = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)

const CheckoutStep2 = ({ register, errors, control, watch, setSelected, thirdPart }) => {


  const [ locations , setLocations ] = useState([]);
  const { email , name , identity , phone} = watch();
  const { recibePedido} = thirdPart();

  const getLocations = async () => {
    try{
      
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_BUSINESS}/sale/locations`);
      if(data?.response?.ok){
        const makeLocations = data.response.locations.map( ({_id , descripcion}) => ({ id : _id , descripcion}) );
        setLocations(makeLocations); 
      }
    }catch(err){
      console.log(err);
      setLocations([]);
    }
  }


  useEffect(()=>{
    getLocations();

    return () => setLocations([])
  },[])


  return (
    <>
      <div className="fade-in animated checkout-identification-block">
        <div className="checkout-identification-block__text">
          <div className="checkout-identification-block__text-wrapper">
            <p className="checkout-identification-block__text--font-size-and-bold">
              1. Identificación:
            </p>
            <div
              className="checkout-identification-block__button"
              onClick={() => setSelected(0)}
            >
              Editar
            </div>
          </div>
          <div className="checkout-identification-block__text-container">
            <p className="checkout-identification-block__text--font-size">
              Email: 
              <span className="ml-3">{email}</span>
            </p>
            <p className="checkout-identification-block__text--font-size">
              Nombre: 
              <span className="ml-3">{name}</span>
            </p>
            <p className="checkout-identification-block__text--font-size">
              DNI: 
              <span className="ml-3">{identity}</span>
            </p>
            <p className="checkout-identification-block__text--font-size">
              Teléfono / Móvil: 
              <span className="ml-3">{phone}</span>
            </p>
          </div>
        </div>
      </div>
  
      <div className="fade-in animated  checkout-block__text">
        <p className="checkout-block__text--font-size-and-bold">
          2. Datos para la entrega:
        </p>
      </div>
      <div className="checkout-location-form__wrapper wrapper_date">
        <label htmlFor="numero" className="checkout-location-form__label">
          Fecha de entrega : 
        </label>

        <Controller
          name='fechaEntrega'
          control = { control }
          render={({ field }) => <DatePicker minDate={tomorrow} {...field} />}
        />

        <p className="msg-error">{errors?.fechaEntrega?.message && 'Fecha inválida'}</p>
      </div>
      <div className="checkout-location-form__wrapper">
        <label htmlFor="calle" className="checkout-location-form__label">
          Av/Jirón/Calle: <span className="ml-4"> EJM : * Jr. Los Valles</span>
        </label>
        <input
          type="text"
          className="checkout-location-form__input"
          name="calle"
          id="calle"
          {...register("calle")}
        />
        <p className="msg-error">{errors?.calle?.message}</p>
      </div>


      <div className="checkout-location-form__wrapper">
        <label htmlFor="numero" className="checkout-location-form__label">
          Nro.: <span className="ml-4"> EJM : * Jr. 205</span>
        </label>
        <input
          type="text"
          className="checkout-location-form__input"
          name="numero"
          id="numero"
          {...register("numero")}
        />
        <p className="msg-error">{errors?.numero?.message}</p>
      </div>
      <div className="checkout-location-form__wrapper">
        <label htmlFor="identity" className="checkout-location-form__label">
          Interior:
        </label>
        <input
          type="text"
          className="checkout-location-form__input"
          name="interior"
          id="interior"
          {...register("interior")}
        />
        <p className="msg-error">{errors?.interior?.message}</p>
      </div>
      <div className="checkout-location-form__wrapper">
        <label htmlFor="direccion" className="checkout-location-form__label">
          Referencia de Dirección*:
        </label>
        <input
          type="text"
          className="checkout-location-form__input"
          name="referencia"
          id="referencia"
          {...register("referencia")}
        />
        <p className="msg-error">{errors?.referencia?.message}</p>
      </div>
      <div className="checkout-location-form__wrapper">
        <p className="checkout-location-form__label">Departamento</p>
        <select 
          name="" 
          id="" className="checkout-location-form__select" 
          { ...register('departamento')}
        >
          <option value="lima" selected>Lima</option>
          {/* <option value="">sdsdsd</option>
          <option value="">sds</option> */}
        </select>
      </div>
      {/* <div className="checkout-location-form__wrapper">
        <p className="checkout-location-form__label">Provincia</p>
        <select 
          name="provincia" 
          id="provincia" 
          className="checkout-location-form__select"
          { ...register('provincia')}
        >
          <option value="lima" selected>Lima</option>
        </select>
      </div> */}
      <div className="checkout-location-form__wrapper">
        <p className="checkout-location-form__label">Distrito</p>
        <select 
          name="distrito" 
          id="distrito" 
          className="checkout-location-form__select"
          {...register('distrito')}
          defaultValue="Lima"
        >
          {
            locations.length>0 && locations.map( loc =>(
              <option key={loc.id} value={loc.descripcion}>{loc.descripcion}</option>
            ))
          }

        </select>
      </div>
      <div className="checkout-location-form__wrapper">
        <p className="checkout-location-form__subtitle-radio">
          ¿Quién recibirá el pedido?
        </p>
        <div className="checkout-location-form__box-radio">
          <input
            className="checkout-location-form__input-radio"
            type="radio"
            id="f-option"
            value="yo"
            {...register('recibePedido')}
          />
          <label className="checkout-location-form__label-radio" htmlFor="f-option">
            Yo
          </label>
          <input
            className="checkout-location-form__input-radio"
            type="radio"
            id="f-option2"
            value="otro"
            {...register('recibePedido')}
          />
          <label
            className="checkout-location-form__label-radio"
            htmlFor="f-option2"
          >
            Otra persona
          </label>

        </div>
        
        <p className="msg-error">{errors?.recibePedido?.message && 'Campo obligatorio'}</p>
         {
            recibePedido === 'otro' && 
            <div className="checkout-location-form__wrapper">
              <label htmlFor="recibe-tercero" className="checkout-location-form__label">
                Nombre de quién recibira el pedido:
              </label>
              <input
                  id="recibe-tercero"
                  className="checkout-location-form__input"
                  type="text"
                  {...register('nameRecibeTercero')}
                />
            </div>
          }

      </div>
      <style jsx>
        {`


          :global(.react-date-picker){
            font-size : 1.4rem;
            font-family : "mont-regular";
          }
          :global(.react-date-picker__wrapper){
            border: none;
            border-bottom: 1px solid #dadada;
            padding : 0.5rem;
          }

          :global(.react-date-picker__inputGroup__input){
            color : #556ea1;
            
          }

          .wrapper_date{
            display : flex!important;
            flex-direction : column!important;
          }

          .checkout-block__text--font-size-and-bold {
            font-size: 1.6rem;
            font-family: "mont-semibold";
            margin-top : 1rem;
          }
          .msg-error{
            font-family:"omnes-bold";
            font-size: 1.4rem;
            color : #ff3333;
          }
          .container-checkout {
            padding: 8rem 1rem;
            max-width: 1500px;
            margin: 0 auto;
          }
          .container__text {
            font-family: "mont-semibold";
            font-size: 14px;
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
          .checkout-identification-block__text-wrapper {
            display: flex;
            justify-content: space-between;
          }
          .checkout-identification-block {
            width: 100%;
            align-items: top;
            padding-top: 2rem;
            border-bottom: 1px solid #dadada;
          }
          .checkout-identification-block__text-container {
            margin: 1rem;
          }
          .checkout-identification-block__text--font-size-and-bold {
            font-family: "mont-semibold";
            color: #575650;
            font-size: 1.6rem;
            opacity: 0.5;
          }
          .checkout-identification-block__text--font-size {
            font-family: "mont-light";
            margin-bottom: 0;
            font-size: 1.2rem;
            color: #575650;
            opacity: 0.5;
          }
          .checkout-location-block__text {
            margin-top: 10px;
          }
          .checkout-location-block__text--font-size-and-bold {
            font-family: "mont-semibold";
            color: #575650;
            font-size: 1.4rem;
          }
          .checkout-location-block__text--font-size {
            font-family: "mont-light";
            margin-bottom: 0;
            font-size: 1.2rem;
            color: #575650;
          }
          .checkout-identification-block__button {
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: "mont-regular";
            font-size: 14px;
            width: 100px;
            height: 38px;
            background-color: #ec608d;
            border-radius: 15px;
            color: #fff;
            border: 1px solid #ec608d;
            cursor: pointer;
          }
          .checkout-location-form__select {
            display: block;
            font-size: 1.4rem;
            font-family: "mont-regular";
            color: #556ea1;
            padding: 0.4em 1.4em 0.3em 0.8em;
            width: 100%;
            box-sizing: border-box;
            border: 1px solid #556ea1;
            box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.03);
            border-radius: 15px;
            background: url(https://i.ibb.co/mtG2wk2/image.png) no-repeat right
              #ffffff;
            background-size: 1.5rem;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background-position-x: 95%;
            outline: none;
            margin-right: 0.5rem;
          }
          .checkout-location-form__label,
          .checkout-location-form__subtitle-radio {
            font-size: 1.2rem;
            font-family: "mont-light";
            margin-bottom: 0;
            margin-top: 10px;
            font-style: normal;
            font-weight: 300;
            line-height: 34px;
            color: #575650;
          }
          .checkout-location-form__input {
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
          .checkout-location-form__input:focus {
            outline: none;
            box-shadow: none;
          }
          .discount-coupon__text {
            font-family: "mont-light";
            font-style: normal;
            font-weight: 300;
            font-size: 1.2rem;
            color: #575650;
          }
          .discount-coupon__group-input {
            display: flex;
          }
          .discount-coupon__input-text {
            border: 1px solid #febf41;
            box-sizing: border-box;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
            width: 190px;
            height: 39px;
            font-size: 1.8rem;
          }
          .discount-coupon__input-text::placeholder {
            color: #575650;
            font-size: 1.4rem;
          }
          .discount-coupon__input-submit {
            font-family: "omnes-regular";
            background: #febf41;
            font-size: 1.8rem;
            color: #fff;
            border-radius: 10px;
            border: 0px;
            height: 39px;
            width: 90px;
            margin-left: 0.5rem;
          }
          .price-table {
            padding: 2rem 0rem;
          }
          .price-table__tbody--fount-padding {
            font-family: "mont-regular";
            height: 40px;
          }
          .price-table__tbody--text-align-left {
            text-align: left;
            font-size: 1.2rem;
          }
          .price-table__tbody--text-align-right {
            text-align: right;
            font-size: 1.2rem;
          }
          .price-table__tbody--fount-bold-padding {
            font-family: "mont-semibold";
            height: 40px;
          }
          .price-table__tbody--border-top {
            border-top: 1px solid #dadada;
          }
          .price-table__table {
            width: 100%;
          }
          .restriction-text {
            font-family: "mont-light";
            font-size: 1.4rem;
            line-height: 25px;
            text-align: center;
            color: #575650;
          }
          .identification-form__label {
            font-family: "mont-light";
            color: #575650;
            font-size: 1.4rem;
            line-height: 15px;
            padding-top: 30px;
          }
          .identification-form__input {
            font-family: "mont-regular";
            color: #556ea1;
            border: 1px solid #556ea1;
            border-radius: 20px;
            width: 100%;
            padding: 5px;
            font-size: 1.4rem;
          }

          .checkout-location-form__input-submit {
            display: flex;
            justify-content: center;
            background: #febf41;
            border: 1px solid #febf41;
            border-radius: 20px;
            margin: 2.5rem auto;
            text-align: center;
            font-family: "omnes-bold";
            font-size: 1.6rem;
            color: #fff;
            width: 250px;
            height: 50px;
            cursor: pointer;
          }
          .shopping-cart-block__checkout {
            width: 100%;
            padding: 2rem 3rem;
          }
          .checkout-location-form__box-radio {
            display: flex;
            justify-content: left;
            align-items: center;
          }
          .checkout-location-form__input-radio {
            position: absolute;
            padding: 0;
            border: 0;
            height: 1px;
            width: 1px;
            overflow: hidden;
          }
          .checkout-location-form__label-radio {
            font-family: "mont-regular";
            font-size: 1.2rem;
            padding-right: 20px;
          }
          .checkout-location-form__label-radio:before {
            content: "";
            display: inline-block;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            border: 1px solid #556ea1;
            box-sizing: border-box;
            margin-right: 5px;
            line-height: 24px;
            vertical-align: text-top;
          }
          .checkout-location-form__input-radio:checked
            + .checkout-location-form__label-radio:before {
            border: 2px solid #556ea1;
            background: url("/image/icon/circle_blue.svg") center/10px no-repeat;
          }
          @media (min-width: 480px) {
            .container-checkout {
              padding: 9rem 2rem;
            }
            .checkout-block__card {
              padding: 2rem;
            }
            .discount-coupon__input-text {
              width: 300px;
            }

            .discount-coupon__input-submit {
              width: 150px;
            }
            .shopping-cart-block__checkout {
              width: 100%;
              padding: 2rem 5rem;
            }
          }
          @media (min-width: 768px) {
            .checkout-location-form__input {
              padding: 0.5rem 1rem;
              border: 1px solid #556ea1;
              border-radius: 10px;
            }
            .container-checkout {
              padding: 8rem 3rem;
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
              padding: 3rem;
            }
            .discount-coupon__input-text {
              width: 200px;
            }

            .discount-coupon__input-submit {
              width: 100px;
            }

            :global(.react-date-picker__wrapper){
              border: 1px solid #556ea1;
              border-radius : 10px;
            }
          }
          @media (min-width: 1280px) {
            .checkout-block__card {
              padding: 3rem 5rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default CheckoutStep2;
