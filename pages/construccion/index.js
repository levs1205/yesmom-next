import AppLayout from "../../components/AppLayout";
import Image from "next/image";
import Link from "next/link";

const index = () => {
  return (
    <AppLayout>
      <div className="box-building fade-in animated">
        <div className="section-building">
         <div className="img-foto">
         <Image
            src="/image/construccion/proximamente.png"
            alt="mamá con su bebé"
            
            width="550px"
            height="450px"
          />
         </div>
          <div className="box-text-building">
            <h5 className="text-building">
              En YesMom te queremos ofrecer un mejor servicio web
            </h5>
           <div className="btn-building">
           <Link href="/">
            <a >
            PÁGINA DE INICIO
            </a>
            </Link>
           </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .box-building {
            background-image: url("../../../image/construccion/fondo-construccion.png");
            background-color: #febf41;
            background-position: center;
            background-size: cover;
            height: 97vh;
          }
          .section-building {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            padding: 13rem 8rem;
          }
          .img-foto {
            height: 35rem;
            width: auto;
          }
          .text-building {
            font-style: normal;
            font-weight: 700;
            font-size: 2.5rem;
            line-height: 2.5rem;
            align-items: center;
            text-align: center;
            color: #ffffff;
            font-family: "mont-semibold";
          }
          .btn-building {
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
            margin: 2rem 0rem;
            display: flex;
            justify-content: center;
            align-items:center
          }
          .box-text-building {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          @media (min-width: 1800px) {
            .box-building{
              padding-top:6rem
            }
            .section-building {
              padding: 8rem 4rem;
            }
            .img-foto {
              height: 30rem;
              width: auto;
            }
            .text-building {
              font-size: 1.5rem;
              line-height: 2rem;
            }
            .btn-building {
              width: 16rem;
              height: 3rem;
              font-size: 1.2rem;
            }
            .box-text-building {
              padding: 2rem;
            }
          }
          @media (max-width: 768px) {
            .box-building{
              padding-top:3rem
            }
            .section-building {
              flex-direction: column;
              padding: 17rem 1rem;
              height:100vh
            }
            .img-foto {
              height: 18rem;
              width: 18rem;
            }
            .text-building {
              font-size: 1rem;
              line-height: 1.5rem;
            }
            .btn-building {
              width: 15rem;
              height: 3rem;
              font-style: normal;
              font-size: 1rem;
              margin: 0.5rem;
            }
            .box-text-building {
              margin-top: 1rem;
            }
          }
        `}
      </style>
    </AppLayout>
  );
};

export default index;
