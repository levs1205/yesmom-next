import { useContext, useMemo } from "react";
import moment from 'moment';
import Swal from 'sweetalert2';
import YesmomContext from "../../context/Context";
import CostSale from "../Sale/CostSale";
import Orden from "../Sale/Orden";

moment.locale('es');

const CheckoutStep3 = ({ formValues, setSelected , infoDatos ,infoEntrega , register }) => {

  const { sale : { delivery }, ui : { cart }, sale} = useContext(YesmomContext);
  const { email , name , identity , phone } = infoDatos();
  const {calle , numero, interior, referencia, distrito , fechaEntrega , recibePedido} = infoEntrega();

  console.log(fechaEntrega);
  const makeDate = ( date ) => {

    const dayWord = moment(date).format('dddd');
    // const dayNumber = moment(date).format('Do');
    const dayNumber = date.getDate();
    const monthWord = moment(date).format('MMMM');
    const year = moment(date).get('year');
    
    return { dayWord , dayNumber , monthWord , year } ;
  }

  const capitalize = ( str ) => {

    return str[0].toUpperCase()+str.slice(1,str.length);
  }
  const makeSpanishDate = (date) => {
  
    const { dayWord , dayNumber , monthWord , year} = makeDate(date);
    // console.log({ dayWord , dayNumber , monthWord , year})
    return `${capitalize(dayWord)}, ${dayNumber} de ${monthWord} del ${year}`
  }


  const haveDiscountProduct = ( product ) => {
    if(product.precioPromocional >0) return true;
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

  const getTotalPriceDelivery = useMemo(() => {
    if(cart && cart.length >0 && sale && sale.delivery){
        let sum=0;
        sale.delivery.forEach((val , i) => {
            sum = sum+val.total;
        })

        return sum;
    }else{
        return 0;
    }
  },[sale,cart])

  const makeTotalPrice = useMemo(( ) => {
    let acum = 0;
    if(cart.length >0 ){
      cart.map((product)=> {
        if(haveDiscountProduct(product)) {
          acum = acum + product.precioPromocional * product.quantity;
        } else {
          acum = acum + product.precio * product.quantity;
        }
      })
      acum = acum+ getTotalPriceDelivery;
    }else{
        return 0;
    }

    return acum;
  },[cart])

  const memorizedDate = useMemo(() => makeSpanishDate(fechaEntrega) , [fechaEntrega]);

  const openModalEnvio = () => {
    return Swal.fire({
      text : 'Para poder cumplir con tu orden hemos tenido que separarla en distintos despachos, ya que hay productos que tienen distintos métodos de despacho.',
      customClass : {
        popup :'popup-container-checkout',
        htmlContainer :'popup-container-checkout-text'    
      },
      showCancelButton : false,
      showConfirmButton : false
    })
  }

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
              Email: {email}
            </p>
            <p className="checkout-identification-block__text--font-size">
              Nombre: {name}
            </p>
            <p className="checkout-identification-block__text--font-size">
              DNI: {identity}
            </p>
            <p className="checkout-identification-block__text--font-size">
              Teléfono / Móvil: {phone}
            </p>
          </div>
        </div>
      </div>
      <div className="fade-in animated checkout-identification-block">
        <div className="checkout-identification-block__text">
          <div className="checkout-identification-block__text-wrapper">
            <p className="checkout-identification-block__text--font-size-and-bold">
              2. Datos para la entrega:
            </p>
            <div
              className="checkout-identification-block__button"
              onClick={() => setSelected(1)}
            >
              Editar
            </div>
          </div>
          <div className="checkout-identification-block__text-container m-3 flex-container">
            <div className="checkout-identification-block__text-container_left">
              <div className="checkout-identification-block__text--font-size">
                {`${calle} ${numero} ${interior}`}
                <br />
                {distrito}
                <br />
                {memorizedDate}
              </div>
            </div>
            <div className="checkout-identification-block__text-container_right">
              <div className="checkout-identification-block__text--font-size">
                S/ {makeTotalPrice.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="checkout-identification-block border-off">
        <div className="checkout-identification-block__text">
          <div className="fade-in animated  checkout-block__text">
            <p className="checkout-block__text--font-size-and-bold">
              3. Envio de producto:
            </p>
          </div>
        </div>
        {
           delivery.length > 1 && 
           <div className="checkout-envio_separacion">
            <img src="/image/exclamacion.svg" alt="exclamacion" />
            <p className="checkout-envio_separacion-text">Hemos dividido tu orden en múltiples envíos <span onClick={openModalEnvio}>¿Por qué?</span></p>
           </div>
        }
        <div className="checkout-location-form__box-ordenes">
          {
            delivery.map(( { productos , total , nombreTienda} , i)=>(
              <div key={i}>
                <p className="delivery-numero_envio">{`Envío ${i+1} de ${delivery.length}`}</p>
                <Orden products = { productos } nombreTienda = { nombreTienda }/>
                <CostSale price= {total} />
              </div>
            ))
          }
          {/* <Orden /> */}
        </div>
      </div>

      <style jsx>
        {`

          :global(.popup-container-checkout){
            border : 2px solid #DC6A8D;
            border-radius : 20px;
            padding : 2rem 0;
            border-style : dashed;
          }

          :global(.popup-container-checkout-text){
            font-family : "mont-regular";
            font-size : 1.3rem;
            color : #575650;
          }
          .delivery-numero_envio{
            font-family:"mont-bold";
            color : #556EA1;
            font-size:1.1rem;
            margin: 1.5rem 0 0 0;
            text-decoration : underline;
          }
          .checkout-block__text--font-size-and-bold {
            font-size: 1.6rem;
            font-family: "mont-semibold";
            margin-top : 1rem;
          }
          .m-3 {
            margin-top: 3rem !important;
            margin-bottom: 3rem !important;
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
          .border-off {
            border: none;
          }
          .flex-container {
            display: flex;
            justify-content: space-between;
            margin: 3rem 1rem;
          }
          .checkout-identification-block__text-container {
            margin: 1rem;
          }
          .checkout-identification-block__text-container_left {
            border-right: 1px solid rgba(87, 86, 80, 0.5);
            flex-basis: 80%;
          }
          .checkout-identification-block__text-container_right {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-basis: 20%;
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
            color: #556ea1;
            border: 1px solid #556ea1;
            border-radius: 20px;
            width: 100%;
            padding: 5px;
            font-size: 1.4rem;
          }
          .checkout-location-form__box-ordenes{
            margin : 2rem 0;
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
            text-align: left;
            color: #556ea1;
            border: none;
            border-bottom: 1px solid #dadada;
            width: 100%;
            padding: 0.5rem 0;
            font-size: 1.4rem;
            height: 3.5rem;
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
            margin: 2rem 1rem;
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
            margin-top : -0.5rem;
          }
          .checkout-location-form__input-radio:checked
            + .checkout-location-form__label-radio:before {
            border: 2px solid #556ea1;
            background: url("/image/icon/circle_blue.svg") center/10px no-repeat;
          }

          .checkout-envio_separacion{
            display : flex;
            align-items : center;
            background-color : #F8F8F8;
            padding: 1rem 0.5rem ;
          }
          .checkout-envio_separacion-text{
            margin : 0;
            margin-left : 1rem;
            font-size : 1.1rem;
            font-family : 'mont-regular';
            color : #000000;
          }

          .checkout-envio_separacion-text span{
            cursor: pointer;
            text-decoration : underline;
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

            .checkout-envio_separacion-text{
              font-size : 1.25rem;
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

export default CheckoutStep3;
