import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Card } from "react-bootstrap";
// import Image from "next/image";
// import {useRouter} from "next/router";

const importJodit = () => import("jodit-react");
const JoditEditor = dynamic(importJodit, {
  ssr: false,
});
const CardBlog = ({ blog }) => {
  // const router = useRouter();

  const [config, setConfig] = useState({
    readonly: true,
    toolbar: false,
  });
  const [contenido, setContenido] = useState(
    '<p><span style="font-family: Tahoma, Geneva, sans-serif;">Tu Baby Shower es uno de los momentos más esperados para ti y los miembros de tu familia que han estado al pendiente del nacimiento de tu próximo bebé. Aquí te dejamos unos consejos para celebrar de una mejor manera tu baby shower virtual.</span></p><ul><li><span style="font-family: Tahoma, Geneva, sans-serif;"><strong><span style="font-family: Tahoma, Geneva, sans-serif;"><span style="color: rgb(75, 100, 164); font-family: Tahoma, Geneva, sans-serif;">Rol de anfitriona</span></span></strong></span></li></ul><p><span style="color: rgb(0, 0, 0); font-family: Tahoma, Geneva, sans-serif;">Si es que tú eres la embarazada que quiere invitar a sus amigos a tu baby shower y no quieres saber nada de la organización, debes elegir una amiga o hermana y nombrarla “anfitriona” del evento. Ella será la encargada de la producción y así tú serás realmente la estrella del evento. </span></p><p><span style="color: rgb(0, 0, 0); font-family: Tahoma, Geneva, sans-serif;">Si es que tú eres la organizadora del evento, debes tomar el rol de anfitriona y ser responsable de invitar a las personas y de planear las actividades y juegos. Puedes diseñar invitaciones y enviarlas por correo o a través de Redes Sociales.</span></p><ul><li><span style="font-family: Tahoma, Geneva, sans-serif;"><strong><span style="color: rgb(75, 100, 164); font-family: Tahoma, Geneva, sans-serif;">Elegir un sitio de video chat</span></strong></span></li></ul><p><span style="color: rgb(0, 0, 0); font-family: Tahoma, Geneva, sans-serif; font-size: 1rem;">Ya sea Zoom, HouseParty, Skype o Hangouts, debes elegir una plataforma que soporte a la cantidad de gente que está invitada y que sea accesible para todos ellos. Quizás debas hacer una prueba de conexión con ciertas personas con anticipación. </span></p><p><span style="color: rgb(0, 0, 0); font-family: Tahoma, Geneva, sans-serif; font-size: 1rem;">Otra opción es transmitir el baby shower en vivo: organiza un livestream e invita a tus familiares y amigos a asistir y comentar. Puede ser a través de Instagram y así todos tus seguidores podrán verte abriendo regalos o realizando actividades entretenidas.</span></p><ul><li><span style="color: rgb(0, 0, 0); font-family: Tahoma, Geneva, sans-serif; font-size: 1rem;"><span style="background-color: rgb(255, 255, 255); color: rgb(74, 134, 232);"><strong style=""><span style="color: rgb(75, 100, 164); font-family: Tahoma, Geneva, sans-serif;">Planifica actividades</span></strong></span></span></li></ul><p><span style="color: rgb(0, 0, 0); font-family: Tahoma, Geneva, sans-serif;">Quizás la parte más importante del baby shower: los invitados participarán en los juegos que organices con la embarazada en el centro de todas las actividades.</span></p><ul><li><span style="color: rgb(75, 100, 164);"><strong><span style="font-family: Tahoma, Geneva, sans-serif;">Hora de los regalos</span></strong></span></li></ul><p><span style="color: rgb(0, 0, 0); font-family: Tahoma, Geneva, sans-serif;">Lo más probable es que la fiesta termine con que la futura mamá abra los regalos. Esto solo es posible si los invitados envían su regalo con anticipación. Una buena idea es que la festejada no sepa quién envió qué, y los vaya abriendo frente la cámara y adivine quién es la dueña de cada regalo. La otra opción es que los invitados abran los regalos y luego se lo envíen por correo. </span></p><p><span style="color: rgb(0, 0, 0); font-family: Tahoma, Geneva, sans-serif;">Si soñabas con tu baby shower, ¡aún puedes planear tu baby shower virtual! Además, es una buena oportunidad para pasar momentos agradables junto a tu familia y amigos.</span></p><p><br></p>'
  );
  return (
    <>
      <div>
        <Card>
          <div className="card-blog">
            <Card.Img
              variant="top"
              src={blog.imagenes[1].url}
              className="card-img"
            />
            <Card.Body>
              <Card.Title>{blog.blog.titulo}</Card.Title>
              <Card.Text>
               <div>
               <JoditEditor
                  config={config}
                  value={contenido}
                  name="contenido"
                  // onBlur={handleBlurAreaChange}
                />
               </div>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link
                href={`/blog/[blog]`}
                as={`/blog/${blog.blog._id}`}
                passHref
              >
                <a
                  // onClick={() => {
                  //   router.push({
                  //     pathname: "/blog/[id]",
                  //     query: { id: blog.blog._id },
                  //   });
                  // }}
                  className=" link-a text-center hover-efect-letter"
                >
                  Leer más &#8594;
                </a>
              </Link>
            </Card.Footer>
          </div>
        </Card>
      </div>
      <style jsx>
        {`
          .box-banner-blog {
            height: 15rem;
            background: url(../../assets/blog/blog.png) no-repeat center;
            background-size: cover;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .text-title-blog {
            font-family: "Clicker Script", cursive;
            font-size: 2.5rem;
            margin: 0rem 1rem 0rem;
            color: #fff;
            text-align: center;
          }

          .subtitle-dark-blog {
            color: #575756;
            font-family: "mont-regular"!important;
            font-size: 1.7rem;
            text-align: center;
            margin: 0rem 15rem;
            margin-bottom: -12rem;
            margin-top: 3rem;
          }
          .box-card-group {
            position: relative;
            top: 16rem;
            z-index: 10;
          }
          :global(.card) {
            border: 0px solid rgba(0, 0, 0, 0.125);
          }
          
          .card-blog {
            text-align: center;
            background: #ffffff;
            box-shadow: 0px 14px 20px -5px rgba(0, 0, 0, 0.2);
            border-radius: 20px;
            font-family: "mont-regular"!important;
            border-radius: 1.28rem !important;
            width: 18rem;
            height: auto;
          }

        
          :global(.card-img) {
            height: 10rem;
            width: 10rem;
          }
          .box-green-blog {
            position: relative;
          }

          .text-bottom-blog {
            color: #abc0a3;
            font-family: "mont-regular";
            font-size: 1.7rem;
            text-align: center;
            /* margin: 3rem 20rem; */
            position: absolute;
            bottom: 16%;
            left: 50%;
            transform: translateX(-50%);
          }

          .text-bottom-blog b {
            font-family: "mont-semibold";
          }
          .font-mont-regular {
            font-family: "mont-regular";
          }

          .box-blog-especifico {
            width: 100%;
            display: flex;
            padding: 4rem 9rem;
            font-family: "mont-regular"!important;
          }

          .box-autor-blog {
            display: flex;
            flex-direction: row;
            justify-content: left;
            align-items: center;
            height: 7rem;
            width: 20%;
          }
          .box-autor-text-blog {
            padding-left: 1rem;
          }
          .box-articulo-blog {
            width: 80%;
            font-family: "mont-regular";
          }
          .text-autor {
            color: #575756;
            font-style: normal;
            font-weight: bold;
            font-size: 1.2rem;
            font-family: "mont-heavy";
          }
          .text-fecha {
            color: #556ea1;
            font-style: normal;
            font-weight: normal;
            font-size: 1rem;
          }
          .box-articulo-title-blog {
            padding: 0rem 2rem;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }
          .box-articulo-title-blog h2 {
            font-family: "mont-semibold";
            font-style: normal;
            font-weight: bold;
            text-align: center;
            color: #575756;
            margin: 2rem 0rem;
          }
          .star-blog {
            color: #febf41;
          }
          .nube1 {
            position: absolute;
            top: 70%;
            left: 2%;
          }
          .nube2 {
            position: absolute;
            top: 50%;
            right: 2%;
          }
          .nube3 {
            position: absolute;
            top: 140%;
            right: 3%;
          }
          .box-articulo-img-principal-blog {
            position: relative;
            z-index: 2;
          }

          :global(.jodit-wysiwyg::-webkit-scrollbar) {
            -webkit-appearance: none;
            
          }

          :global(.jodit-wysiwyg::-webkit-scrollbar:vertical) {
            width: 10px;
          }

          :global(.jodit-wysiwyg::-webkit-scrollbar-button:increment),
          :global(.jodit-wysiwyg::-webkit-scrollbar-button) {
            display: none;
          }

          :global(.jodit-wysiwyg::-webkit-scrollbar:horizontal) {
            height: 10px;
          }

          :global(.jodit-wysiwyg::-webkit-scrollbar-thumb) {
            background-color: #797979;
            border-radius: 20px;
            border: 2px solid #f1f2f3;
          }

          :global(.jodit-wysiwyg::-webkit-scrollbar-track) {
            border-radius: 10px;
          }
          :global(.jodit-wysiwyg:not(.jodit_inline)) {
            border: none !important;
          }
          :global(.jodit-container:not(.jodit_inline) .jodit-wysiwyg) {
            padding: 0px;
            overflow-x: hidden !important;
          }
          :global(.jodit-container:not(.jodit_inline)) {
            border: none !important;
          }
          .box-blog-general {
            width: 100%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            padding: 3rem 9rem;
            font-family: "mont-regular"!important;
          }

          .card-title {
            font-family: "mont-semibold";
          }

          .card-text {
            font-family: "mont-light";
          }
          .jodit,
          .jodit *,
          .jodit-container,
          .jodit-container * span {
            font-family: "mont-regular" !important;
          }
          :global(.jodit-container * span ) {
            font-family: "mont-regular"!important;
          }

          .font-semibold-mont {
            font-family: "mont-semibold";
          }
          :global(.jodit-status-bar) {
            display: none !important;
          }

          :global(.jodit-container) {
            height: 10rem !important;
          }

          @media (min-width: 1800px) {
            .box-blog-general {
              padding: 2rem 0rem;
            }
            .subtitle-dark-blog {
              color: #575756;
              font-family: "mont-semibold";
              font-size: 1.3rem;
              text-align: center;
              margin: 0rem 20rem;
              margin-bottom: -12rem;
              margin-top: 3rem;
            }
            .container,
            .container-lg,
            .container-md,
            .container-sm,
            .container-xl {
              max-width: 1600px !important;
            }
            .card-title {
              font-size: 1rem !important;
            }
            .card-text {
              font-size: 0.8rem;
            }
            .card-blog {
              height: 26rem;
            }
            .nube1 {
              top: 50%;
              left: 20%;
            }
            .nube2 {
              top: 80%;
              right: 15%;
            }
            .nube3 {
              top: 140%;
              right: 15%;
            }
          }

          @media (max-width: 768px) {
            .box-blog-especifico {
              padding: 1rem 1.5rem 3rem;
              display: flex;
              flex-direction: column;
            }

            .box-autor-blog {
              display: flex;
              flex-direction: row;
              justify-content: left;
              align-items: center;
              height: 7rem;
              width: 100%;
            }
            .box-autor-text-blog {
              padding-left: 1rem;
            }
            .box-articulo-blog {
              width: 100%;
            }
            .text-autor {
              font-size: 1.1rem;
              margin-bottom: 0 !important;
            }
            .text-fecha {
              font-size: 0.8rem;
            }
            .box-articulo-title-blog h2 {
              font-size: 1.3rem;
            }
            .star-blog {
              color: #febf41;
              font-size: 1.2rem;
            }
            .nube1 {
              position: absolute;
              top: 160%;
              left: -5%;
            }
            .nube2 {
              position: absolute;
              top: 90%;
              right: 1%;
            }
            .nube3 {
              position: absolute;
              top: 350%;
              right: 1%;
            }
            .box-banner-blog {
              height: 12rem;
            }

            .text-title-blog {
              font-size: 2rem;
              margin: 0rem 0.5rem 0rem;
            }
            .ondas {
              width: 3rem;
            }
            .box-banner-blog {
              height: 12rem;
            }
            .text-title-blog {
              font-family: "Clicker Script", cursive;
              font-size: 2rem;
            }

            .subtitle-dark-blog {
              font-size: 1rem;
              text-align: center;
              margin: 0rem;
              margin-bottom: 0rem;
              margin-top: 2rem;
            }
            .box-card-group {
              position: relative;
              top: 3rem;
              z-index: 10;
            }

            .card-blog {
              text-align: center;
              background: #ffffff;
              box-shadow: 0px 14px 20px -5px rgba(0, 0, 0, 0.2);
              border-radius: 20px;
              font-family: "Montserrat", sans-serif;
              border-radius: 1.28rem !important;
              width: 18rem;
              height: auto;
            }
            .box-green-blog-img-fondo {
              position: absolute;
              height: 30rem;
              bottom: 10%;
            }

            .text-bottom-blog {
              font-size: 1rem;
              padding-bottom: 2rem;
            }

            .box-blog-general {
              width: 100%;
              display: flex;
              justify-content: center;
              flex-direction: column;
              padding: 2rem 1.5rem 12rem;
            }
            .card-deck {
              display: flex;
              flex-direction: column !important;
            }
            .card-deck .card-blog {
              margin-bottom: 1rem !important;
            }
          }

          @media (max-width: 420px) {
            .nube1 {
              position: absolute;
              top: 100%;
              left: -15%;
            }
            .nube2 {
              position: absolute;
              top: 50%;
              right: 1%;
            }
            .nube3 {
              position: absolute;
              right: 1%;
              width: 5rem;
              top: auto;
              bottom: -150%;
            }
          }
        `}
      </style>
    </>
  );
};

export default CardBlog;
