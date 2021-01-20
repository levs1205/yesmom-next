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

  return (
    <>
      <div>
        <Card>
          <div className="card-blog">
            <div className="card-img">
              <Card.Img
                variant="top"
                src={blog.imagenes[1].url}
                className="card-img-blog"
              />
            </div>
            <Card.Body>
              <Card.Title>
                <div className="card-blog-title">{blog.blog.titulo}</div>
              </Card.Title>

              <Card.Text>
                <div className="card-blog-descripcion">
                  {blog.blog.descripcion}
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
                  className=" link-a text-center hover-efect-letter leer-mas"
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
            font-family: "mont-regular" !important;
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
            margin-bottom: 1rem !important;
          }

          .card-blog {
            text-align: center;
            background: #ffffff;
            box-shadow: 0px 14px 20px -5px rgba(0, 0, 0, 0.2);
            border-radius: 20px;
            font-family: "mont-regular" !important;
            border-radius: 1.28rem !important;
            width: 22rem;
            height: auto;
          }

           {
            /*
          :global(.card-img) {
            width:10rem;
            height: 10rem;
            margin:auto
          } */
          }

          .card-img {
            width: 12rem;
            height: 12rem;
            margin: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 1rem;
          }
          :global(.card-img img) {
            height: 100% !important;
            width: auto !important;
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
            font-family: "mont-regular" !important;
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
          }

          .font-semibold-mont {
            font-family: "mont-semibold";
          }
          :global(.jodit-status-bar) {
            display: none !important;
          }

          :global(.jodit-container) {
            height: 10rem !important;
            min-width: 100px;
          }

          @media (min-width: 2449px) {
            .card-blog {
              width: 18rem !important;
              height: auto;
            }
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

            .card-blog {
              text-align: center;
              background: #ffffff;
              box-shadow: 0px 14px 20px -5px rgba(0, 0, 0, 0.2);
              border-radius: 20px;
              font-family: "Montserrat", sans-serif;
              border-radius: 1.28rem !important;
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
            .card-blog-title {
              font-size: 1rem ;
              font-weight:bold
            }
            .card-blog-descripcion {
              font-size: 0.8rem ;
            }
            .leer-mas{
              font-size: 1rem ;
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
            .card-blog {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
};

export default CardBlog;
