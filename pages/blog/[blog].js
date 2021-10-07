import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import AppLayout from "../../components/AppLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";
import Head from "next/head";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";

const importJodit = () => import("jodit-react");
const JoditEditor = dynamic(importJodit, {
  ssr: false,
});

const CardBlogEspecific = ({ currentData }) => {
  const [config, setConfig] = useState({
    readonly: true,
    toolbar: false,
  });
  const router = useRouter();
  // if(router.isFallback){
  //     return <div>CARGANDO...</div>
  // }

  return (
    <AppLayout>
      <Head>
        <title>{currentData.blog.titulo}</title>
        <meta name="description" content={currentData.blog.descripcion}></meta>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={currentData.blog.titulo} />
        <meta
          property="og:description"
          content={currentData.blog.descripcion}
        />
        <meta
          property="og:image"
          content={
            currentData.imagenes[0].typeImage === "P"
              ? currentData.imagenes[0].url
              : currentData.imagenes[1].url
          }
        />
        <meta property="og:site_name" content="Yes Mom" />
        {/* <meta property="og:url" content={`${user.id}`} />  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={currentData.blog.titulo} />
        <meta
          name="twitter:description"
          content={currentData.blog.descripcion}
        />
        <meta
          name="twitter:image"
          content={
            currentData.imagenes[0].typeImage === "P"
              ? currentData.imagenes[0].url
              : currentData.imagenes[1].url
          }
        />
        <meta name="twitter:site" content="@JudithCristinaQ" />
        <meta name="twitter:creator" content="@JudithCristinaQ" />
      </Head>
      <div className="fade-in animated">
        <div className="box-banner-blog">
          <div className="ondas heartbeat">
            <Image
              src="/image/onda-blanca.svg"
              alt="ondas"
              width={100}
              height={20}
              // layout="responsive"
            />
          </div>
          <h4 className="text-title-blog">Detalles de blog</h4>
          <div className="ondas heartbeat">
            <Image
              src="/image/onda-blanca.svg"
              alt="ondas"
              width={100}
              height={20}
              // layout="responsive"
            />
          </div>
        </div>
        <div className="box-blog-especifico">
          <div className="nube1 heartbeat">
            <Image
              src="/image/blog/nube1.png"
              width={190}
              height={130}
              // layout="responsive"
              alt="nube"
            />
          </div>
          <div className="nube2 heartbeat">
            <Image
              src="/image/blog/nube2.png"
              width={190}
              height={130}
              alt="nube"
            />
          </div>
          <div className="nube3 heartbeat">
            <Image
              src="/image/blog/nube3.png"
              width={190}
              height={130}
              alt="nube"
            />
          </div>
          <div className="box-autor-blog">
            <figure className="figure-autor-blog">
              <img
                src="/image/blog/logo-yesmom.png"
                alt=""
                className="w-100 "
              />
            </figure>
            <div className="box-autor-text-blog">
              <h5 className="text-autor">{currentData.blog.autor}</h5>
              <h5 className="text-fecha">
                {currentData.blog.fecha.substr(0, 10)}
              </h5>
            </div>
          </div>
          <div className="box-articulo-blog">
            <figure className="box-articulo-img-principal-blog">
              <img
                src={
                  currentData.imagenes[0].typeImage === "P"
                    ? currentData.imagenes[0].url
                    : currentData.imagenes[1].url
                }
                alt=""
                className="img-blog-especific m-auto d-block tilt-in-fwd-tr"
              />
            </figure>
            <div className="box-articulo-title-blog">
              <FontAwesomeIcon
                icon={faStar}
                className="star-blog heartbeat cl-fuxia"
              ></FontAwesomeIcon>
              <h2> {currentData.blog.titulo}</h2>
              <FontAwesomeIcon
                icon={faStar}
                className="star-blog heartbeat cl-fuxia"
              ></FontAwesomeIcon>
            </div>
            <JoditEditor
              config={config}
              value={currentData.blog.contenido}
              name="contenido"
              // onBlur={handleBlurAreaChange}
            />

            <div className="box-fb">
              <a
                className="btn-cirle-especific"
                href={`https://www.facebook.com/sharer/sharer.php?u=https://yesmom.com.pe${router.asPath}`}
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="btn-share-especific"
                />
                <span>Compartir</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .box-banner-blog {
            height: 25rem;
            background: url(../../image/blog/blog.png) no-repeat center;
            background-size: cover;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 5rem;
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
            font-family: "mont-regular";
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
            font-family: "mont-regular" !important;
            padding-bottom: 1rem;
          }

          .box-autor-blog {
            display: flex;
            flex-direction: row;
            justify-content: left;
            align-items: center;
            height: 7rem;
            width: 20%;
          }

          .figure-autor-blog {
            height: 7rem;
            width: 7rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 2px solid #ec668d;
            border-radius: 50%;
            padding: 1rem;
          }
          .box-autor-text-blog {
            padding-left: 1rem;
          }
          .box-articulo-blog {
            width: 80%;
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
          :global(.jodit-container:not(.jodit_inline)) {
            border: none !important;
          }
          .box-blog-general {
            width: 100%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            padding: 3rem 9rem;
            font-family: "mont-regular";
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
          :global(.jodit-container * span) {
            font-family: "mont-regular" !important;
            font-size:1.15rem!important
          }
          :global(.jodit-container p) {
            margin-left: 0px !important;
          }
          :global(.jodit-status-bar) {
            display: none !important;
          }

           {
            /* :global(.jodit-container) {
            height: 10rem !important;
          } */
          }

          .img-blog-especific {
            width: 90%;
          }
          .box-fb {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding-bottom: 3rem;
          }
          .btn-cirle-especific {
            text-align: center;
            background: #566ea1;
            color: #fff;
            padding: 0.7rem 1.5rem;
            font-family: "mont-semibold";
            border-radius: 5px;
            font-size: 1.2rem;
            box-shadow: 2px 2px 5px #566ea1;
          }
          .btn-cirle-especific span {
            font-family: "mont-semibold";
            margin-left: 0.5rem;
            font-size: 1.25rem;
          }
          .btn-cirle-especific:hover {
            text-decoration: none !important;
            background: #3c4c6f;
          }
          .btn-cirle-especific span:hover {
            text-decoration: none !important;
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

            .img-blog-especific {
              width: 80%;
            }
            .figure-autor-blog {
              height: 5rem;
              width: 5rem;
            }
            .box-articulo-title-blog {
              padding: 0rem 0rem;
            }
            .box-fb {
              justify-content: center;
              padding-bottom: 1rem;
            }
            :global(.jodit-container * span) {
              font-size: 0.9rem !important;
            }
            :global(.jodit-container p) {
              font-size: 0.9rem !important;
            }
            :global(.jodit-container ul, .jodit-container ul li) {
              font-size: 0.9rem !important;
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
            .img-blog-especific {
              width: 100%;
            }
          }
        `}
      </style>
    </AppLayout>
  );
};

// export async function getStaticPaths() {
//   // Call an external API endpoint to get posts
//   const res = await fetch(
//     "https://yesmom-backend.herokuapp.com/getBlogAll/user?limit=all"
//   );
//   const blogs = await res.json();
//   // Get the paths we want to pre-render based on posts
//   const paths = blogs.map((blog) => ({
//     params: { blog: String(blog.blog._id) },
//   }));

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false };
// }

export async function getServerSideProps(params) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  //hola
  const routerParams = params
  console.log(routerParams)
  let url = `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_BUSINESS}/getBlogParameters/user?id=${routerParams.query.id}`
  const res = await fetch(
    url
  );

  const currentData = await res.json();
  if (!currentData) {
    return {
      notFound: true,
    };
  }
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      currentData: currentData[0],
    },
  };
}
// export async function getStaticProps({ params }) {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch(
//     `https://yesmom-backend.herokuapp.com/getBlog/${params.blog}`
//   );
//   const currentData = await res.json();

//   // By returning { props: posts }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       currentData: currentData[0],
//     },
//   };
// }

export default CardBlogEspecific;
