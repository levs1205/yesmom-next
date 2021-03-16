import React from "react";
import Image from "next/image";

const WsBtn = () => {
  return (
    <>
      <a target="blank" href="https://api.whatsapp.com/send?phone=+51947234452&text=Hola!%20Bienvenid@%20a%20Yes%20Mom.%20Estamos%20muy%20felices%20de%20que%20seas%20parte%20de%20nuestra%20comunidad.%20Te%20contestaremos%20antes%20de%20las%2024%20hrs.%20Mientras%20tanto,%20puedes%20revisar%20el%20blog%20en%20nuestra%20web.%20Hemos%20puesto%20mucho%20esfuerzo%20para%20que%20mam%C3%A1s%20reales%20creen%20contenido%20importante%20para%20ti.%20%20En%20caso%20est%C3%A9s%20interesado%20en%20vender%20en%20Yes%20Mom,%20puedes%20escribirnos%20a%20info@yesmom.com.pe%20%20Gracias,%20Yes%20Mom%20Team">
        <div className="btn-ws">
          <Image
            src="/image/ws-yesmom.png"
            alt="sin moverte"
            width={40}
            height={40}
            // className="onda-rosa heartbeat"
          />
        </div>
      </a>
      <style jsx>{`
        .btn-ws {
          position: fixed;
          bottom: 5%;
          right: 4%;
          background: #fff;
          padding: 0.8rem;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          box-shadow: 0px 1px 10px #999999d4;
        }

        @keyframes animateHeart {
          0% {
            transform: scale(1);
          }
          40% {
            transform: scale(1.09);
          }
          100% {
            transform: scale(1.1);
          }
        }

        .btn-ws:hover {
          transform: scale(1.1);
          animation: animateHeart 0.3s linear forwards !important;
           {
            /* background: #4b66ae6e; */
          }
        }
      `}</style>
    </>
  );
};

export default WsBtn;
