import React from "react";

const PopupCart = () => {
  return (
    <>
      <div className="box-cart">
        <p className="popup--title">Tu carrito - 4 productos</p>
        <div className="card--shopping-cart">
          <div className="card--shopping-cart__iconDelete"></div>
          <img src="https://i.blogs.es/ee0424/ropa-bebe-rosa/450_1000.jpeg" alt=""/>
          <div className="card--shopping-cart__text">
            <p className="card--shopping-cart__title">Coche de bebé + funda - blanca </p>
            <p className="card--shopping-cart__price">S/XX.XX</p>
          </div>
        </div>
        <div className="card--shopping-cart">
          <div className="card--shopping-cart__iconDelete"></div>
          <img src="https://i.blogs.es/ee0424/ropa-bebe-rosa/450_1000.jpeg" alt="" />
          <div className="card--shopping-cart__text">
            <p className="card--shopping-cart__title">Coche de bebé + funda - blanca </p>
            <p className="card--shopping-cart__price">S/XX.XX</p>
          </div>
        </div>
        <div className="card--shopping-cart">
          <div className="card--shopping-cart__iconDelete"></div>
          <img src="https://i.blogs.es/ee0424/ropa-bebe-rosa/450_1000.jpeg" alt="" />
          <div className="card--shopping-cart__text">
            <p className="card--shopping-cart__title">Coche de bebé + funda - blanca </p>
            <p className="card--shopping-cart__price">S/XX.XX</p>
          </div>
        </div>
        <p className="popup--plus">+ 1 articulo más</p>
        <div className="popup--total-price">
          <p className="popup--total-price__letter">Total estimado</p>
          <p className="popup--total-price__number">S/ XX.XX</p>
        </div>
        <button className="btn-cart">Ver carrito</button>
      </div>
      <style jsx>
        {`
        .box-cart{
          position:absolute;
          z-index:10000;
          background: #FFFFFF;
          box-shadow: 0px 9px 21px rgba(0, 0, 0, 0.15);
          border-radius: 0px 0px 44px 44px;
          height:800px;
          width:420px;
          top: 50px;
          right:0px;
          padding:25px
        }
        .popup--title{
          font-family:  "mont-semibold";
          font-style: normal;
          font-weight: 800;
          font-size: 20px;
          line-height: 36px;
          color: #5A5A5A;
          padding-bottom:10px;
          border-bottom: 1px solid #DADADA;
        }
        .card--shopping-cart{
          display:flex;
          justify-content:center;
          align-content:center;
          flex-direction:row;
          padding-bottom:1rem;
          padding-top:1rem;
          border-bottom:1px solid #DADADA;
        }
        .card--shopping-cart img {
          width: 35%;
          height: 130px;
          border-radius: 20px;
        }
        .card--shopping-cart__text{
          padding:0rem 0.5rem;
          width:65%
        }
        .card--shopping-cart__title{
           font-family:  "mont-regular";
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 26px;
          text-align:center
        }
        .card--shopping-cart__price{
          font-family: "mont-semibold";
          font-style: normal;
          font-weight: bold;
          font-size: 20px;
          line-height: 23px;
          color: #4B64A4;
          text-align:center
        }
        .popup--plus{
          font-family:"mont-regular";
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 42px;
          text-align:center;
          color: #4B64A4;
          padding-top:1rem;
           padding-bottom:1rem;
          border-bottom:1px solid #DADADA;
        }
        .popup--total-price{
          display:flex;
          justify-content:space-around;
          align-items:center
        }
        .popup--total-price__letter{
          font-family: "mont-semibold";
          font-style: normal;
          font-weight: bold;
          font-size: 20px;
          line-height: 22px;
          color: #5A5A5A;
        }
        .popup--total-price__number{
          font-family: "mont-regular";
          font-style: normal;
          font-weight: bold;
          font-size: 20px;
          line-height: 22px;
          color: #4B64A4;
        }
        .btn-cart {
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
        .card--shopping-cart__iconDelete{
          position:absolute;
           background-image: url("/image/icon/delete.svg");
           height:20px;
           width:20px;
           left:15px

        }
        `}
      </style>
    </>
  );
};

export default PopupCart;
