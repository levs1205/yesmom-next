import React from "react";
import Image from "next/image";

const WsBtn = () => {
  return (
    <>
      <a target="blank" href="https://api.whatsapp.com/send?phone=+51947234452&text=%C2%A1Hola%20Yes%20Mom!%20">
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
