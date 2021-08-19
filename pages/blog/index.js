import React, { Fragment, useEffect, useState } from "react";
import { Card, CardDeck, Container } from "react-bootstrap";
// import CardBlog from "./CardBlog";
import AppLayout from "../../components/AppLayout";
import Image from "next/image";
import Link from "next/link";
import CardBlog from "../../components/CardBlog";
import Head from "next/head";

const Blog = ({ currentData }) => {

  console.log('APIBlog', currentData);

  // const sortFunction=(a, b)=> {
  //   var dateA = new Date(a.blog.fecha).getTime();
  //   console.log(dateA);
  //   var dateB = new Date(b.blog.fecha).getTime();
  //   return dateA < dateB ? 1 : -1;
  // }
  // currentData.sort(sortFunction)

  return (
    <AppLayout>
      <Head>
        <title>YesMom - Blog</title>
        <meta name="description" content="Visita nuestro blog ..."></meta>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="YesMom - Blog" />
        <meta property="og:description" content="Visita nuestro Blog ..." />
        <meta
          property="og:image"
          itemprop="image"
          content="https://yesmom.vercel.app/image/blog/blog.png"
        />
        <meta property="og:site_name" content="Yes Mom" />
        {/* <meta property="og:url" content={`${user.id}`} />  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="YesMom - Blog" />
        <meta name="twitter:description" content="Visitanuestro Blog ..." />
        <meta
          name="twitter:image"
          content="https://yesmom.vercel.app/image/blog/blog.png"
        />
        <meta name="twitter:site" content="@JudithCristinaQ" />
        <meta name="twitter:creator" content="@JudithCristinaQ" />
      </Head>
      <div className="fade-in animated box-container-blog">
        <div className="box-banner-blog">
          <div className="container-content-center">
            <div className="ondas heartbeat">
              <Image
                src="/image/onda-blanca.svg"
                alt="ondas"
                width={70}
                height={20}
              />
            </div>
            <h4 className="text-title-blog">Blog</h4>
            <div className="ondas heartbeat">
              <Image
                src="/image/onda-blanca.svg"
                alt="ondas"
                width={70}
                height={20}
              />
            </div>
          </div>
        </div>

        <div className="box-blog-general">
          <h4 className="subtitle-dark-blog">
            En este espacio compartiremos algunos tips que te servirán para
            cuidar y engreir mucho más a tu bebé
          </h4>
          <div className="box-card-group">
            <Container fluid="true">
              <CardDeck style={{ justifyContent: "center" }}>
                {currentData.map((cardBlog) => (
                  <CardBlog blog={cardBlog} key={cardBlog.blog._id} />
                ))}
              </CardDeck>
            </Container>
          </div>
        </div>

        <div className="box-green-blog">
          {/* <div className="w-100 box-green-blog-img-fondo"> */}
          {/* <Image
              src="/image/blog/fondo-verde.png"
              width={1920}
              height={800}
              layout="responsive"
              alt="Picture of the author"
            /> */}
          {/* </div> */}
          <h6 className="text-bottom-blog ">
            Para el mundo eres una mamá,
            <br />
            <b>para tus hijos eres el mundo</b>
            <div className="waves-blog heartbeat">
              <Image
                src="/image/blog/waves-blog.png"
                width={68}
                height={9}
                alt="ondas blog"
              />
            </div>
          </h6>
        </div>
      </div>
      <style jsx>
        {`
            .box-container-blog {
              margin-bottom: -32.5rem;
            }
            :global(.box-card-group .container-card-blog) {
              margin-bottom: 5rem;
            }
            
            :global(.box-card-group .card-blog-title) {
              font-family: "mont-semibold";
              font-size: 1.6rem;
              line-height: 20px;
              color: #575756;
            }
            :global(.box-card-group .card-blog-descripcion) {
              font-family: "mont-light";
              font-size: 1.3rem;
              line-height: 21px;
              color: #000000;
            }
            .container-content-centered{
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
            .box-banner-blog {
              border:1px solid black;
              height: 25rem;
              background: url(../../image/blog/blog.png) no-repeat center;
              background-size: cover;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top:10rem;
            }
            .container-content-center{
              display : flex;
              align-items :center;
            }
            .container-content-center h4{
              font-size:3rem;
            }
            .container-content-center div{
              width:5rem;
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
              background: url(../../../image/fondo-verde-blog-mobile.png);
              height: 60rem;
              background-position: center;
              background-size: cover;
              padding-top: 5rem;
              padding-bottom: 5rem;
              bottom: 32.5rem;
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
              width: 32rem;
            }

            .text-bottom-blog b {
              font-family: "mont-heavy";
              margin-bottom: 0.8rem;
            }
            .text-bottom-blog .waves-blog {
              margin-top: 0.8rem;
            }
            .font-mont-regular {
              font-family: "mont-regular";
            }

            .box-blog-especifico {
              width: 100%;
              display: flex;
              padding: 4rem 9rem;
              font-family: "mont-regular";
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
            @media (max-width: 789px) {
              .box-blog-general {
                padding: 3rem 3rem;
              }
            } 

            @media (max-width: 768px) {
              .subtitle-dark-blog {
                font-size:1.5rem;
              }
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
                margin-top:10rem;
                padding-top:0;
                height: 25rem;
              }

              .text-title-blog {
                font-size: 2rem;
                margin: 0rem 0.5rem 0rem;
              }
              .ondas {
                width: 3rem;
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

              .box-green-blog {
                height: 52rem;
              }

              .text-bottom-blog {
                font-size: 2rem;
                text-align: center;
                font-weight:600;
                line-height: 20px;
              }

              .box-blog-general {
                width: 100%;
                display: flex;
                justify-content: center;
                flex-direction: column;
                padding: 2rem 1.5rem 0rem;
              }
              .card-deck {
                display: flex;
                flex-direction: column !important;
              }
            }

            @media (max-width: 420px) {
              .subtitle-dark-blog{
                font-size:1.3rem;
              }
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
    </AppLayout>
  );
};
export async function getServerSideProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  let url = `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_BUSINESS}/getBlogAll/user?limit=all`;
  const res = await fetch(url);
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
      currentData,
    },
  };
}

export default Blog;
