import React, { Component, useEffect, useState } from "react";
import AppLayout from "../../components/AppLayout";
import Head from "next/head";
import axios from "axios";
import { CardDeck, CardColumns , Carousel, Col, Container, Row } from "react-bootstrap";
/* import CardProduct from "../../components/CardProduct"; */
import CardProduct from "../../components/CardProduct";
import SidebarProducto from "../../components/tienda/SidebarProducto";
import BannerTienda from "../../components/tienda/BannerTienda";
import { useRouter } from "next/router";
import Swal from "sweetalert2";


export async function getServerSideProps( {query} ){

  const res = await fetch(`http://localhost:3003/api/product/product`);
  const product = await res.json();


  return {
    props : {
      product
    }
  }

}
const Product = ({ product}) => {

  const { query: { q = "" } } = useRouter();

  /* console.log(product); */
  const imagesMobile = [
    { id: 1, image: "/image/tienda/banner-first.svg" },
    { id: 2, image: "/image/tienda/banner-first.svg" },
    { id: 3, image: "/image/tienda/banner-first.svg" },
  ];

  const imagesDesktop=[
    { id: 1 , image : "/image/tienda/banner1.svg" },
    { id: 2 , image : "/image/tienda/banner1.svg" },
  ]

  const [storeFiltered, setStoreFiltered] = useState([]);


  useEffect(() => {
    const query = q.toLowerCase().trim();
    const filterData = product.filter(( el ) => el.nombre.toLowerCase().trim().includes(query));
    if (filterData.length === 0) {
      setStoreFiltered(product);
      Swal.fire('No encontrado', "No existen productos asociados con la búsqueda!", "info")
    } else {
      setStoreFiltered(filterData);
    }
  }, [q])

/*   const [banner, setBanner] = useState(initialState);

  const [respuesta, setRespuesta] = useState([]);
  useEffect(async () => {
    const consulta = await axios("https://fakestoreapi.com/products");
    setRespuesta(consulta.data);
  }, []); */

  return (
    <AppLayout>
      <Head>
        <title>YesMom - Tienda</title>
        <meta name="description" content="YesMom es ..."></meta>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="YesMom - Tienda" />
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
        <meta name="twitter:title" content="YesMom - Tienda" />
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
      <div className="box-producto">
        {/* Carousel mobile */}
        <div className="show-mobile">
            <Carousel className="box-carousel">
              {imagesMobile.map((ban) => (
                <Carousel.Item key={ban.id} className="carousel-item">
                  <img src={ban.image} alt="" className="w-100" />
                </Carousel.Item>
              ))}
            </Carousel>
        </div>
        {/* Carousel desktop */}

        <div className="show-desktop mt-5r">
            <Carousel className="box-carousel">
              {imagesDesktop.map((ban) => (
                <Carousel.Item key={ban.id} className="carousel-item">
                  <img src={ban.image} alt="" className="w-100" />
                  {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Siula_Grande_072530032013.jpg/1200px-Siula_Grande_072530032013.jpg" alt=""/> */}
                </Carousel.Item>
              ))}
            </Carousel>
        </div>

        <Container fluid="true">
          <div className="all-content">
            <div className="contenedor">
                <div className="sidebar show-desktop">
                  <SidebarProducto />
                </div>
                <div className="products">
                  <h4 className="text-title-tienda">Destacados</h4>
                  <hr />
                  <div className="all-products">
                    {
                      storeFiltered.slice(0,6).map(( product , i)=>(
                        <CardProduct key={i} {...product}/>
                      ))
                    }
                  </div>
                </div>
            </div> 
            <BannerTienda />
            <div className="contenedor f-right">
                <div className="products">
                  <div className="all-products">
                    {
                      storeFiltered.slice(6,12).map(( product , i)=>(
                        <CardProduct key={i} {...product}/>
                      ))
                    }
                  </div>
                </div>
            </div> 
          </div>
          
        </Container>
      </div>
      <style jsx>
        {`

          :global(.carousel-indicators li){
            border-radius:50%;
            height:1.5rem;
            width:1.5rem;
          }
          hr{
            margin:0;
          }
          .show-desktop{
            display:none;
          }
          /*******/
          :global(.carousel-control-next-icon){
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23556EA1' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e");
          }
          :global(.carousel-control-prev-icon){
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23556EA1' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e");
          }
          :global(.carousel-indicators li){
            background-color:#DC6A8D;
          }
        .all-content{
          margin-bottom:8rem;
        }
        .box-producto {
            background-size: cover;
            justify-content: left;
            align-items: right;
            padding-top: 5rem;
            border-bottom: 1px solid #5a5a5a;
          }
        .text-title-tienda {
            font-family: "mont-regular" !important;
            font-size: 2.5rem;
            font-weight: 600;
            margin: 3.5rem 0.5rem 0rem;
            color: #5a5a5a;
            /* border-bottom: 0.5px solid #575650; */
            padding: 0px 0px 5px 0px;
          }
        .contenedor{
          padding:0 1.5rem;
          display:flex;
          justify-content:space-between;
        }
        .products{
          flex-basis:100%;
        }
        
        .all-products{
          padding:3rem 0;
          display:flex;
          justify-content:space-between;
          align-items:center;
          flex-wrap:wrap;
        }
        

        @media (min-width:768px){
          .show-mobile{
            display:none;
          }
          .show-desktop{
            display:flex;
          }
          .sidebar{
            flex-basis:25%;
          }
          .products{
            flex-basis:70%;
          }
          .f-right{
            justify-content:flex-end;
          }
          .contenedor{
            padding-left:2.5rem;
            padding-right:2.5rem;
            margin-bottom:5rem;
          }
          .text-title-tienda{
            font-size:1.8rem;
          }
        }
        @media(min-width:768px){
          .mt-5r{
            margin-top:9.5rem;
          }
        }
        @media(min-width:1024px){
          .contenedor{
            padding-left:8rem;
            padding-right:8rem;
          }
        }

        `}
      </style>
    </AppLayout>
  );
};

export default Product;
