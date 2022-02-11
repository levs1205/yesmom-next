import AppLayout from "../../components/AppLayout";
import Head from "next/head";
import Image from "next/image";
import { object, array, number } from "prop-types";

import { Carousel } from "react-bootstrap";
import BannerProveedor from "../../components/Proveedor/BannerProveedor";
import CardProduct from "../../components/CardProduct";
/* import SidebarProveedor from "../../components/Proveedor/SidebarProveedor"; */
import SidebarProducto from "../../components/tienda/SidebarProducto";
import { getProductsByUrlStore, getCategories, getStoreByName } from "../api/request";
import { setProducts, setCategories } from "../../context/actions/ui";

const ProveedorSlug = ({ productList, productsQty, pages }) => {
  
  console.log('lista proveedor', productList)
  
  let logoStore = productList.imagenLogo[0].url;
  let portadaStore = productList.imagenPortada[0].url;
  let bannerStore = productList.imagenBanner;

  const alternativeLogo = "https://static.thenounproject.com/png/340719-200.png"

  return (
    <AppLayout>
      <Head>
        <title>YesMom - Proveedor</title>
        <meta name="description" content="YesMom es ..."></meta>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="YesMom - Proveedor" />
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
        <meta name="twitter:title" content="YesMom - Proveedor" />
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
          <div className="container-contenido-filtro">
            <div className="sidebar-proveedor show-desktop">
              <SidebarProducto />
            </div>
            <div className="container-products">
              <div className="container-banner center">
                <Image
                  loader={() => logoStore}
                  src= {  logoStore }
                  width="290px"
                  height="110px"
                />
              </div>
              <div className="show-mobile">
                <BannerProveedor 
                  img={portadaStore}
                />
              </div>
              <div className="show-desktop">
                <BannerProveedor 
                  img={portadaStore}
                  />
              </div>

              <div className="products">
								<div className="all-products">
										{productList.length > 0
											? productList
													.slice(0, 3)
													.map((product, i) => (
														<CardProduct key={i} {...product} />
													))
											: <p>Se encontraron 0 productos</p>}
									</div>
              </div>
            </div>
          </div>

          {/* CAROUSEL */}
          {/* Carousel mobile */}
          <div className="show-mobile">
            <Carousel className="box-carousel">
              {bannerStore.map((ban) => (
                <Carousel.Item key={ban._id} className="carousel-item">
                  <img src={ban.url} alt="" className="w-100" />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          {/* Carousel desktop */}

          <div className="show-desktop">
            <Carousel className="box-carousel">
              {bannerStore.map((ban) => (
                <Carousel.Item key={ban._id} className="carousel-item">
                  <img src={ban.url} alt="" className="w-100" />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

          {/*  */}
          <section className="f-right">
            <div className="container-products">
              <div className="products">
                <h4 className="text-title-tienda">Lo + vendido</h4>
                <div className="show-mobile">
                  <hr />
                </div>
                <div className="all-products">
										{productList.length > 0
											? productList
													.slice(3, 9)
													.map((product, i) => (
														<CardProduct key={i} {...product} />
													))
											: <p>Se encontraron 0 productos</p>}
									</div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <style jsx>
        {`
          :global(.carousel-control-next-icon) {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23556EA1' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e");
          }
          :global(.carousel-control-prev-icon) {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23556EA1' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e");
          }
          :global(.carousel-indicators li) {
            background-color: #dc6a8d;
          }
          :global(.carousel-indicators li) {
            border-radius: 50%;
            height: 1.5rem;
            width: 1.5rem;
          }

          hr {
            border-top: 1px solid rgba(0, 0, 0, 0.5);
          }
          .show-desktop {
            display: none;
          }
          .center {
            display: flex;
            justify-content: center;
          }
          .contenedor {
            padding: 8.5rem 0;
          }
          .container-banner {
            margin-top: 4rem;
            margin-bottom: 4rem;
          }
          .products {
            padding-right: 2rem;
            padding-left: 2rem;
          }
          .all-products {
            padding: 3rem 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
          }
          .text-title-tienda {
            font-family: "mont-regular" !important;
            font-size: 2rem;
            font-weight: 600;
            margin: 3.5rem 0.5rem 0rem;
            color: #5a5a5a;
            /* border-bottom: 0.5px solid #575650; */
            padding: 0px 0px 5px 0px;
          }
          .container-contenido-filtro {
            display: flex;
          }

          @media (min-width: 768px) {
            .show-mobile {
              display: none;
            }
            .show-desktop {
              display: block;
            }
            .contenedor {
              padding-top: 14rem;
            }
            .show-desktop {
              display: block;
            }
            .sidebar-proveedor {
              flex-basis: 25%;
            }
            .container-products {
              flex-basis: 70%;
            }
            .container-contenido-filtro {
              padding: 0 1.5rem;
              justify-content: space-between;
            }
            .container-banner {
              margin: 1rem;
            }
            .container-products-end {
              flex-basis: 70%;
            }
            .products {
              padding-left: 0;
              padding-right: 0;
            }
            .f-right {
              padding: 0 1.5rem;
              display: flex;
              justify-content: flex-end;
            }
            .all-products {
              padding-top: 1.5rem;
            }
          }

          @media (min-width: 1024px) {
            .container-contenido-filtro,
            .f-right {
              padding: 0 2rem;
            }
          }

          @media (min-width: 1280px) {
            .container-contenido-filtro,
            .f-right {
              padding: 0 4rem;
            }
          }
        `}
      </style>
    </AppLayout>
  );
};

ProveedorSlug.propTypes = {
  productList: array.isRequired,
  productsQty: number.isRequired,
  pages: number,
};

export const getServerSideProps = async ({ query }) => {
	const { proveedor } = query;
  const responseData = await getStoreByName(proveedor);
  if (responseData.proveedor == null) {
    return {
      props: {
        productList: [],
      },
    };
  }

  return {
    props: {
      productList : responseData.proveedor
    },
  };
};

export default ProveedorSlug;
``