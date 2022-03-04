import { useEffect, useState } from "react";
import AppLayout from "../../components/AppLayout";
import Head from "next/head";
import Image from "next/image";
import { array, number, string, bool } from "prop-types";
import Pagination from "../../components/Pagination";

import { Carousel, Row, Col, Container } from "react-bootstrap";
import BannerProveedor from "../../components/Proveedor/BannerProveedor";
import CardProduct from "../../components/CardProduct";
/* import SidebarProveedor from "../../components/Proveedor/SidebarProveedor"; */
import SidebarProducto from "../../components/tienda/SidebarProducto";
import {
  getProductsByUrlStore,
  getCategories,
  getStoreByName,
  getProductsByIdStore,
} from "../api/request";
import { setProducts, setCategories } from "../../context/actions/ui";
import { getApiBusiness } from "../../helpers/httpCreators";
import SidebarProductoProveedor from "../../components/tienda/SidebarProductProveedor";

const ProveedorSlug = ({ dataSupplier, productsQty, pages, slug, isSale }) => {
  const [skip, setSkip] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(9);
  const [productList, setProductList] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentpage, setCurrentPage] = useState(1);
	const [loading, setLoading] = useState(false);

  let logoStore = dataSupplier.imagenLogo && dataSupplier.imagenLogo[0].url;
  let portadaStore =
    dataSupplier.imagenPortada && dataSupplier.imagenPortada[0].url;
  let bannerStore = dataSupplier && dataSupplier.imagenBanner;

  const alternativeLogo = "https://static.thenounproject.com/png/340719-200.png";

  useEffect(() => {
    getProducts();
  }, [skip, currentpage, slug]);

  const getProducts = async () => {
    try {
			setLoading(true);
      const { productosGeneral, totalDeProductos, pages } =
        await getProductsByIdStore(dataSupplier._id, skip, productsPerPage, null, isSale ? 2 : 1);
      
      setTotalProducts(totalDeProductos);
      setProductList(productosGeneral);
      setTotalPages(pages);
			setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppLayout>
      <Head>
        <title>YesMom - {dataSupplier.nombreTienda}</title>
        <meta name="description" content="Yes Mom es una plataforma digital peruana que ayuda a las
          mamis a disfrutar su maternidad sin preocupaciones. Queremos
          ser la marca aliada que todos los papás estuvieron buscando,
          una página web que reúne en un solo lugar todo lo que
          necesitan para la llegada de su bebé y acompañar su
          crecimiento."></meta>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Yesmom - ${dataSupplier.nombreTienda}`} />
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
          // content="https://yesmom.vercel.app/image/about-header.png"
          content={
            dataSupplier.imagenLogo[0].url
          }
        />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="855" />
        <meta property="og:site_name" content="Yes Mom" />
        {/* <meta property="og:url" content={`${user.id}`} />  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`Yesmom - ${dataSupplier.nombreTienda}`} />
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
          content={
            dataSupplier.imagenLogo[0].url
          }
        />
      </Head>
      <div className="contenedor fade-in animated ">
        <div className="container-contenido">
          <div className="container-contenido-filtro">
            <div className="sidebar-proveedor show-desktop">
              <SidebarProductoProveedor
                name={dataSupplier.nombreTienda}
                slug={dataSupplier.nombreTiendaUrl}
              />
            </div>
            {currentpage === 1 ? (
              <div className="container-products">
                <div className="container-banner center">
                  <Image
                    loader={() => logoStore}
                    src={logoStore}
                    width="446px"
                    height="168px"
                  />
                </div>
                <div className="show-mobile">
                  <BannerProveedor img={portadaStore} />
                </div>
                <div className="show-desktop">
                  <BannerProveedor img={portadaStore} />
                </div>

                {loading ? (
                  <p>Cargando...</p>
                ) : (
                  <div className="products">
                    <Container>
                      <Row>
                        {productList?.length > 0 ? (
                          productList.slice(0, 3).map((product, i) => (
                            <Col xs={12} sm={6} md={4}>
                              <CardProduct key={i} {...product} />
                            </Col>
                          ))
                        ) : (
                          <p>Se encontraron 0 productos</p>
                        )}
                      </Row>
                    </Container>
                  </div>
                )}
              </div>
            ) : (
              <div className="container-products">
                {loading ? (
                  <p>Cargando...</p>
                ) : (
                  <div className="products">
                    <Container>
                      <Row>
                        {productList?.length > 0 ? (
                          productList.map((product, i) => (
                            <Col xs={12} sm={6} md={4}>
                              <CardProduct key={i} {...product} />
                            </Col>
                          ))
                        ) : (
                          <p>Se encontraron 0 productos</p>
                        )}
                      </Row>
                    </Container>
                  </div>
                )}
              </div>
            )}
          </div>
          {currentpage === 1 && (
            <>
              {/* CAROUSEL */}
              {/* Carousel mobile */}
              <div className="show-mobile">
                <Carousel className="box-carousel">
                  {bannerStore.length > 0
                    ? bannerStore.map((ban) => (
                        <Carousel.Item key={ban._id} className="carousel-item">
                          <img src={ban.url} alt="" className="w-100" />
                        </Carousel.Item>
                      ))
                    : ""}
                </Carousel>
              </div>
              {/* Carousel desktop */}

              <div className="show-desktop">
                <Carousel className="box-carousel">
                  {bannerStore.length > 0
                    ? bannerStore.map((ban) => (
                        <Carousel.Item key={ban._id} className="carousel-item">
                          <img src={ban.url} alt="" className="w-100" />
                        </Carousel.Item>
                      ))
                    : ""}
                </Carousel>
              </div>
            </>
          )}
          {/*  */}
          {currentpage === 1 && (
            <section className="f-right">
              <div className="container-products">
                <div className="products">
                  {/* <h4 className="text-title-tienda">Lo + vendido</h4> */}
                  <div className="show-mobile">
                    <hr />
                  </div>
                  <Container>
                    <Row>
                      {productList?.length > 0 ? (
                        productList.slice(3, 9).map((product, i) => (
                          <Col xs={12} sm={6} md={4}>
                            <CardProduct key={i} {...product} />
                          </Col>
                        ))
                      ) : (
                        <p>Se encontraron 0 productos</p>
                      )}
                    </Row>
                  </Container>
                </div>
              </div>
            </section>
          )}

          <div className="box-pagination">
            <Pagination
              totalPages={totalPages}
              currentpage={currentpage}
              setCurrentPage={setCurrentPage}
              skip={skip}
              setSkip={setSkip}
              productsPerPage={productsPerPage}
            />
          </div>
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
					.container-banner img {
            
          }
          .products {
            padding-right: 2rem;
            padding-left: 2rem;
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
          .box-pagination {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 3.5rem 0 0 0;
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
  dataSupplier: array.isRequired,
  productList: array.isRequired,
  productsQty: number.isRequired,
	slug: string.isRequired,
  pages: number,
	isSale: bool.isRequired
};

export const getServerSideProps = async ({ query }) => {
  const { proveedor } = query;
	console.log('proveedor', proveedor)
	let responseData;
	let slugString;
	let isSale = false;
	if(proveedor.includes('promociones-')){
		let stringSplit = proveedor.split('promociones-')
		slugString = stringSplit[1]
		console.log('SI existe', proveedor.split('promociones-'))
		responseData = await getStoreByName(stringSplit[1]);
		isSale = true;
	} else {
		console.log('NO existe')
		responseData = await getStoreByName(proveedor);
		slugString = proveedor
	}
  /* const responseData = await getStoreByName(proveedor); */

  if (responseData.proveedor !== null) {
    return {
      props: {
        dataSupplier: responseData.proveedor,
				slug: proveedor,
				isSale: isSale
      },
    };
  }
  return {
    props: {
      dataSupplier: [],
			slug: proveedor,
			isSale: isSale
    },
  };

  const { data, err = null } = await getApiBusiness("/store/verifyname", {
    params: {
      storeName: proveedor,
    },
  });

  const notFound = {
    redirect: {
      destination: "/404",
      permanent: false,
    },
  };

  if (!err) {
    if (data.ok) {
      return notFound;
    }
  } else {
    return notFound;
  }
};

export default ProveedorSlug;
