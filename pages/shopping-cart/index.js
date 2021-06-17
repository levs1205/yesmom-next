import React from "react";
import AppLayout from "../../components/AppLayout";

const shoppingCart = () => {
  return (
    <AppLayout>
      <div className="container">
        <p className="container__text">Carrito de compras</p>
        <p className="container__text-items">(4 items)</p>
        <section className="shopping-cart-block">
          <div className="shopping-cart-block__card">
            <div className="card">
              <div className="card__block-first">
                <img
                  src="https://http2.mlstatic.com/D_NQ_NP_835990-MPE44064655755_112020-V.jpg"
                  alt=""
                  className="card__img"
                />
                <div className="card__block-text">
                  <p className="block-text__title">
                    COCHE DE BEBÉ + FUNDA - Blanco, 140cm x 100cm{" "}
                  </p>
                  <p className="block-text__short-description">
                    Modelo - Marca
                  </p>
                  <select name="" id="" className="block-text__select">
                    <option value="">Cantidad: 1</option>
                  </select>
                </div>
              </div>
              <div className="card__block-second">
                <div className="block-second__block-store-text">
                  <img
                    className="block-store-text__img"
                    src="https://img.freepik.com/vector-gratis/plantilla-logotipo-bebe-detallada_23-2148776913.jpg?size=338&ext=jpg"
                    alt=""
                  />
                  <p className="block-store-text__text">Nombre de la tienda</p>
                </div>
                <p className="block-second__block-store-price">S/ XX.XX</p>
              </div>
            </div>
            <div className="card">
              <div className="card__block-first">
                <img
                  src="https://http2.mlstatic.com/D_NQ_NP_835990-MPE44064655755_112020-V.jpg"
                  alt=""
                  className="card__img"
                />
                <div className="card__block-text">
                  <p className="block-text__title">
                    COCHE DE BEBÉ + FUNDA - Blanco, 140cm x 100cm{" "}
                  </p>
                  <p className="block-text__short-description">
                    Modelo - Marca
                  </p>
                  <select name="" id="" className="block-text__select">
                    <option value="">Cantidad: 1</option>
                  </select>
                </div>
              </div>
              <div className="card__block-second">
                <div className="block-second__block-store-text">
                  <img
                    className="block-store-text__img"
                    src="https://img.freepik.com/vector-gratis/plantilla-logotipo-bebe-detallada_23-2148776913.jpg?size=338&ext=jpg"
                    alt=""
                  />
                  <p className="block-store-text__text">Nombre de la tienda</p>
                </div>
                <p className="block-second__block-store-price">S/ XX.XX</p>
              </div>
            </div>
            <div className="card">
              <div className="card__block-first">
                <img
                  src="https://http2.mlstatic.com/D_NQ_NP_835990-MPE44064655755_112020-V.jpg"
                  alt=""
                  className="card__img"
                />
                <div className="card__block-text">
                  <p className="block-text__title">
                    COCHE DE BEBÉ + FUNDA - Blanco, 140cm x 100cm{" "}
                  </p>
                  <p className="block-text__short-description">
                    Modelo - Marca
                  </p>
                  <select name="" id="" className="block-text__select">
                    <option value="">Cantidad: 1</option>
                  </select>
                </div>
              </div>
              <div className="card__block-second">
                <div className="block-second__block-store-text">
                  <img
                    className="block-store-text__img"
                    src="https://img.freepik.com/vector-gratis/plantilla-logotipo-bebe-detallada_23-2148776913.jpg?size=338&ext=jpg"
                    alt=""
                  />
                  <p className="block-store-text__text">Nombre de la tienda</p>
                </div>
                <p className="block-second__block-store-price">S/ XX.XX</p>
              </div>
            </div>
            <div className="card">
              <div className="card__block-first">
                <img
                  src="https://http2.mlstatic.com/D_NQ_NP_835990-MPE44064655755_112020-V.jpg"
                  alt=""
                  className="card__img"
                />
                <div className="card__block-text">
                  <p className="block-text__title">
                    COCHE DE BEBÉ + FUNDA - Blanco, 140cm x 100cm{" "}
                  </p>
                  <p className="block-text__short-description">
                    Modelo - Marca
                  </p>
                  <select name="" id="" className="block-text__select">
                    <option value="">Cantidad: 1</option>
                  </select>
                </div>
              </div>
              <div className="card__block-second">
                <div className="block-second__block-store-text">
                  <img
                    className="block-store-text__img"
                    src="https://img.freepik.com/vector-gratis/plantilla-logotipo-bebe-detallada_23-2148776913.jpg?size=338&ext=jpg"
                    alt=""
                  />
                  <p className="block-store-text__text">Nombre de la tienda</p>
                </div>
                <p className="block-second__block-store-price">S/ XX.XX</p>
              </div>
            </div>
          </div>
          <div className="shopping-cart-block__checkout">
            <section className="discount-coupon__text">
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
            </section>
            <section className="price-table">
              <table className=" price-table__table">
                <tbody className="price-table__tbody">
                  <tr className="price-table__tbody--fount-padding ">
                    <td className="price-table__tbody--text-align-left">Subtotal</td>
                    <td className="price-table__tbody--text-align-right">S/ XX.XX</td>
                  </tr>
                  <tr className="price-table__tbody--fount-padding">
                    <td className="price-table__tbody--text-align-left">IGV</td>
                    <td className="price-table__tbody--text-align-right">S/ XX.XX</td>
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
            <section className="box-terms">
              <input type="checkbox" id="term" name="term" className="box-terms__checkbox" />
              <label for="term" className="box-terms__text">
                He leído y acepto los nuevos Términos y Condiciones de compra
                del sitio. Acepto también la Política de Privacidad y Seguridad
                y la Política de Cookies.
              </label>
            </section>
            <button className="buy-button">Comprar</button>
            <p className="restriction-text">
              *Pueden aplicarse restricciones. No todos los productos son
              elegibles. Pueden aplicarse recargas por manejo y ubicaciónes
            </p>
          </div>
        </section>
      </div>
      <style jsx>
        {`
          .container {
            padding: 8rem 1rem;
          }
          .container__text {
            font-family: "mont-semibold";
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 26px;
            color: #ec668d;
            padding-bottom: 10px;
            border-bottom: 0.5px solid #575650;
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
            display: flex;
            justify-content: center;
            align-content: center;
            flex-direction: column;
          }
          .shopping-cart-block__card {
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
          }
          .shopping-cart-block__card .card{
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            border: 0px solid rgba(0,0,0,.125)!important;
            border-bottom: 1px solid rgba(0,0,0,.125)!important;
            padding:1rem 0rem
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
        .discount-coupon__input-text{
          border:1px solid #FEBF41;
          box-sizing:border-box;
          box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
          border-radius:10px;
          width:200px;
          height:39px
        }
        .discount-coupon__input-submit{
          font-family:"omnes-regular";
          background:#FEBF41;
          font-size:18px;
          color:#FFf;
          border-radius:10px;
          border:0px;
          height:39px;
          width:102px;
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

         @media (min-width: 768px) {
           .shopping-cart-block {
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
            width: 60%;
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
            width:40%;
            padding:20px
          }
        }

        `}
      </style>
    </AppLayout>
  );
};

export default shoppingCart;
