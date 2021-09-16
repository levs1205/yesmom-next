import Link from 'next/link';
import AppLayout from "../components/AppLayout";
import Image from "next/image";


export default function FourOhFour() {
  return (
    <AppLayout>
    <div className="box-error fade-in animated">
      <div className="section-error">
        <div className="img-osito tilt-in-fwd-tr">
        <img
          src="/image/error/osito_triste.png"
          alt="Osito triste, no encuentra la página"
          width="450px"
          height="500px"
        />
        </div>
        <div className="box-text-error">
        <img
          src="/image/error/letter_error.png"
          alt="Error 404"
          className="img-foto"
          width="450px"
          height="200px"
        />
          <p>
            Página no encontrada
          </p>
         <div className="btn-error">
         <Link  href="/"><a >PÁGINA DE INICIO</a></Link>
         </div>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        .box-error {
          background-image: url("../../../image/error/vector_fondo.svg");
          background-color: #D9E1D7;
          background-position: center;
          background-size: contain;
          height: 97vh;
         
        }
        .section-error {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
          position:relative;
            top:50%;
            transform: translateY(-50%)
        }
        .img-foto {
          height: 35rem;
          width: auto;
        }
        p {
          font-style: normal;
          font-weight: 700;
          font-size: 1.5rem;
          align-items: center;
          text-align: center;
          color: #ABC0A3;
          font-family: "mont-semibold";
          margin-top:2rem
        }
        .btn-error {
          text-decoration:none;
          width: 20rem;
          height: 4rem;
          background: #ffffff;
          border-radius: 40px;
          border-color: #ffffff;
          color: #dc6a8d;
          font-weight: 700;
          font-style: normal;
          font-size: 1.2rem;
          line-height: 1.5rem;
          font-family: "Montserrat", sans-serif;
          margin: 0.5rem 0rem;
          text-align:center;
          padding:1rem;
          display:flex;
          justify-content:center;
          align-items:center
}

        .btn-error:hover {
          transition: all 0.3s ease;
          background: #dc6a8d;
          color:#fff

        }
        .box-text-error {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        @media (min-width: 1800px) {
        
          .img-foto {
            height: 30rem;
            width: auto;
          }
          .text-error {
            font-size: 1.5rem;
            line-height: 2rem;
          }
          .btn-error {
            width: 16rem;
            height: 3rem;
            font-size: 1.2rem;
          }
          .box-text-error {
            padding: 2rem;
          }
        }
        @media (max-width: 768px) {
          .box-error{
            padding-top:7rem
          }
          .section-error {
            flex-direction: column;
          }
          .img-foto {
            height: 18rem;
            width: 18rem;
          }
          .img-osito {
          display:none
        }
          .text-error {
            font-size: 1rem;
            line-height: 1.5rem;
          }
          .btn-error {
            width: 15rem;
            height: 3rem;
            font-style: normal;
            font-size: 1rem;
            margin: 0.5rem;
            padding:0.8rem
          }
          .box-text-error {
            margin-top: 1rem;
          }
        }
      `}
    </style>
  </AppLayout>
  )
}
