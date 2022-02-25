
import Head from "next/head";

import AppLayout from "../../../components/AppLayout";
import TitlePerfil from "../../../components/Perfil/TitlePerfil";
import Description from "../../../components/Perfil/Description";
import Sidebar from "../../../components/Perfil/Sidebar";
import Pagination from "../../../components/Pagination";
import AccordionCompras from "../../../components/Perfil/compras/AccordionCompras";
import { getAccess } from "../../../helpers/getAccess";
import { getPurchases } from "../../api/request";

const index = ({ listPurchases, token }) => {

  const { salesGeneral=[] } = listPurchases;
  console.log('TOTAL DE COMPRAS : ',salesGeneral)
  return (
    <AppLayout>
      <Head>
        <title>YesMom - Compras</title>
        <meta name="description" content="YesMom es ..."></meta>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="YesMom - Compras" />
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
        <meta name="twitter:title" content="YesMom - Compras" />
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
      <div className="contenedor fade-in animated ">
        <div className="container-contenido">
          <div className="all-content">
            <div className="contenedor-flex">
              <div className="flex-left">
                <TitlePerfil name="Lucia" email="lucia@henribarrett.com" />
                <Sidebar active="miscompras" />
              </div>
              <div className="flex-right">
                <Description
                  path="Mis compras"
                  description="Aquí podrás encontrar todas tus compras y sus estados"
                />
                <div className="container-select">
                  <select>
                    <option selected disabled>
                      Ordenar por{" "}
                    </option>
                    <option value="">Precio de mayor a menor </option>
                    <option value="">Precio de menor a mayor </option>
                    <option value="">A-Z (alfabéticamente) </option>
                    <option value="">Z-A (alfabéticamente) </option>
                    <option value="">Últimos 30 días </option>
                    <option value="">Últimos 6 meses </option>
                  </select>
                </div>

                <div className="container-accordion">
                  {
                    salesGeneral.length >0 && <AccordionCompras compras={salesGeneral} />
                  }
                  
                </div>
                <div className="box-pagination">
                  <Pagination />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          /*RESET*/
          /********/
          .hide {
            display: none;
          }
          /**GLOBALS */
          p {
            margin: 0;
          }
          .ft-m-heavy {
            font-family: "mont-heavy" !important;
            font-weight: 800;
          }
          .ft-m-600 {
            font-family: "mont-semibold" !important;
            font-weight: 600;
          }
          .ft-m-regular {
            font-family: "mont-regular" !important;
          }
          .ft-m-light {
            font-family: "mont-light" !important;
          }
          .contenedor {
            padding: 10rem 1rem;
            margin: 0 1rem;
          }

          /* .container-contenido{
                        display:flex;
                        justify-content:center;
                        align-items:center;
                    } */

          select {
            cursor: pointer;
            border: 1px solid #556ea1;
            box-sizing: border-box;
            border-radius: 15px;
            outline: none;
            font-family: "mont-regular" !important;
            font-size: 1.3rem;
            color: #556ea1;
            padding: 1rem 4rem 1rem 1rem;
            margin: 2rem 1rem 0 0;
            /** */
            background: url("https://i.ibb.co/7WKxh8s/image.png") no-repeat
              right #ffffff;
            background-size: 1.25rem;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background-position-x: 92.5%;
            width: 17rem;
          }
          .container-accordion {
            margin: 3rem 0 5rem 0;
            padding: 0 1rem;
          }
          .box-pagination {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          /** */
          @media (min-width: 480px) and (max-width: 767px) {
            .container-contenido {
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .all-content {
              width: 45rem;
            }
          }

          @media (min-width: 768px) {
            .contenedor {
              padding: 8rem 0 12rem 0;
            }
            .show {
              display: none;
            }
            .hide {
              display: block;
            }
            .contenedor-flex {
              display: flex;
              padding: 0 2rem;
            }
            .flex-desktop {
              display: flex;
              justify-content: space-between;
            }
            .flex-left {
              flex-basis: 20%;
            }
            .flex-right {
              margin-left: 5rem;
              flex-basis: 70%;
            }
            .f-to-right {
              margin-top: 2rem;
              display: flex;
              flex-direction: row-reverse;
              align-items: center;
              justify-content: flex-start;
            }
            .container-select {
              display: flex;
              justify-content: flex-end;
            }

            select {
              width: 20rem;
            }
          }
          @media (min-width: 1024px) {
            .contenedor-flex {
              justify-content: flex-start;
              padding: 0 3rem;
            }
            .flex-right {
              flex-basis: 80%;
            }
          }

          @media (min-width: 1280px) {
            .container-save {
              margin-top: 14.2rem;
            }
            .contenedor-flex {
              padding: 0 6rem;
            }
            .flex-right {
              flex-basis: 87.5%;
            }
          }
        `}
      </style>
    </AppLayout>
  );
};

export default index;

export const getServerSideProps = async ({ req , resolvedUrl}) => {
  const token = req?.cookies?.TokenTest;
	//const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbnRpdHlJZCI6IjYxZTE4ZTA0OGQ2ZDUxMzJmZjZkNzM1YiIsImlhdCI6MTY0NDkwMzY0NCwiZXhwIjoxNjQ0OTA3MjQ0fQ.L7QF0r-jeaI8-7ZGbkJwx2u5-aZmSeMuGUPXpVCwAi0'
  const cleanUrl = req.url.split("?")[0];
  console.log(resolvedUrl);

  const resp = await getAccess(cleanUrl , token );
	if(resp.hasOwnProperty('redirect')){
    return resp;
  }

	const response = await getPurchases(token, 'no', 'user', 0, 20);
  if (response.CodigoRespuesta === "15") {
    return {
      props: {
        listPurchases: {},
        token
      },
    };
  }
  return {
    props: {
      listPurchases: response,
			token
    },
  };
    
}