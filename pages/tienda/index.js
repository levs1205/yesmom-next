import React, { useEffect, useState, useContext } from "react";
import { object, array, number } from "prop-types";
import AppLayout from "../../components/AppLayout";
import Head from "next/head";
import YesmomContext from "../../context/Context";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import CardProduct from "../../components/CardProduct";
import SidebarProducto from "../../components/tienda/SidebarProducto";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { getProducts, getCategories } from "../api/request";
import { setProducts, setCategories } from "../../context/actions/ui";
import Pagination from "../../components/Pagination";
import LoaderPage from '../../components/LoaderPage';

const imagesMobile = [
  { id: 1, image: "/image/tienda/banner-mobile1.png" },
  { id: 2, image: "/image/tienda/banner-mobile2.png" },
  { id: 3, image: "/image/tienda/banner-mobile3.png" },
];

const imagesDesktop = [
  { id: 1, image: "/image/tienda/banner-desktop1.png" },
  { id: 2, image: "/image/tienda/banner-desktop2.png" },
  { id: 3, image: "/image/tienda/banner-desktop3.png" },
];

const Product = ({ categoryList, path }) => {
  const [skip, setSkip] = useState(0);
	const [order, setOrder] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(12);
  const [productList, setProductList] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentpage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [storeFiltered, setStoreFiltered] = useState([]);
  const {
    query: { q = "" },
  } = useRouter();
  const {
    dispatchUi,
    ui: { category: categorySelected },
  } = useContext(YesmomContext);

  useEffect(() => {
    dispatchUi(setProducts(productList));
    dispatchUi(setCategories(categoryList));
  }, []);

  useEffect(() => {
    getListProducts();
  }, [skip, currentpage, q, order]);


  const getListProducts = async () => {
    try {
      setLoading(true);
      const response = await getProducts(null, "all", skip, productsPerPage, null, order, null);
			setProductList(response?.productosGeneral);
      setTotalProducts(response?.totalDeProductos);
      setTotalPages(response?.pages);
      setLoading(false);
    } catch (error) {
			setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    const query = q.toLowerCase().trim();
    let filterData = productList.filter((el) =>
      el.product.nombre.toLowerCase().trim().includes(query)
    );

    if (filterData.length === 0) {
      setStoreFiltered(productList);
      if (query.length > 0) {
        Swal.fire(
          "No encontrado",
          "No existen productos asociados con la búsqueda!",
          "info"
        );
      }
    } else {
      setStoreFiltered(filterData);
      const roundNumber =
        Math.round(filterData.length / 9) < 1
          ? 1
          : Math.round(filterData.length / 9);
      setTotalProducts(filterData.length);
      setTotalPages(roundNumber);
    }
  }, [q]);

	const handleChangeOrder = (e) => {
    setOrder(e.target.value);
  };
	
  return (
    <AppLayout>
      <Head>
        <title>YesMom - Tienda</title>
        <meta
          name="description"
          content="Yes Mom es una plataforma digital peruana que ayuda a las
                        mamis a disfrutar su maternidad sin preocupaciones. Queremos
                        ser la marca aliada que todos los papás estuvieron buscando,
                        una página web que reúne en un solo lugar todo lo que
                        necesitan para la llegada de su bebé y acompañar su
                        crecimiento."
        ></meta>
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
          content="https://www.yesmom.com.pe/_next/image?url=%2Fimage%2Fheader%2Flogo-yesmom.svg&w=128&q=75"
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
          content="https://www.yesmom.com.pe/_next/image?url=%2Fimage%2Fheader%2Flogo-yesmom.svg&w=128&q=75"
        />
      </Head>
      <div className="box-producto fade-in animated ">
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
								<div className="container-title">
									<h4 className="text-title-tienda">
										{categorySelected?.name ? categorySelected?.name : "Todos"}
									</h4>
									<div className="container-select">
									<select value={order} onChange={handleChangeOrder}>
                      <option value={0} disabled>
                        Ordenar por
                      </option>
                      <option value={2}>Precio de mayor a menor </option>
                      <option value={1}>Precio de menor a mayor </option>
											<option value={3}>A-Z (alfabéticamente) </option>
											<option value={4}>Z-A (alfabéticamente) </option>
										{/*	<option value="">Últimos 30 días </option>
											<option value="">Últimos 6 meses </option> */}
										</select>
									</div>
                </div>
                {loading ? (
                  <p>
                    <LoaderPage type="inline" />
                  </p>
                ) : (
                  <Row>
                    {q.trim().length > 0 ? (
                      <>
                        {storeFiltered.length > 0 ? (
                          storeFiltered.map((product, i) => (
                            <Col xs={6} sm={4}>
                              <CardProduct key={i} {...product} />
                            </Col>
                          ))
                        ) : (
                          <p>
                            No se ha encontrado ningún resultado de producto
                          </p>
                        )}
                      </>
                    ) : (
                      <>
                        {productList?.length > 0 ? (
                          productList.map((product, i) => (
                            <Col xs={6} sm={4}>
                              <CardProduct key={i} {...product} />
                            </Col>
                          ))
                        ) : (
                          <p>
                            No se ha encontrado ningún resultado de producto
                          </p>
                        )}
                      </>
                    )}
                  </Row>
                )}
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
        </Container>
      </div>
      <style jsx>
        {`
          :global(.carousel-indicators li) {
            border-radius: 50%;
            height: 1.5rem;
            width: 1.5rem;
          }
          hr {
            margin: 0;
          }
          .show-desktop {
            display: none;
          }
          /*******/
          :global(.carousel-control-next-icon) {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23556EA1' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e");
          }
          :global(.carousel-control-prev-icon) {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23556EA1' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e");
          }
          :global(.carousel-indicators li) {
            background-color: #dc6a8d;
          }
          .all-content {
            margin-bottom: 8rem;
          }
          .box-producto {
            background-size: cover;
            justify-content: left;
            align-items: right;
            padding-top: 5rem;
            border-bottom: 1px solid #5a5a5a;
          }
					.container-title {
						display: flex;
						justify-content: space-between;
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
					.container-select {
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }
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
          .contenedor {
            padding: 0 1.5rem;
            display: flex;
            justify-content: space-between;
          }
          .products {
            flex-basis: 100%;
          }

          .all-products {
            padding: 3rem 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
          }
          .show-mobile {
            margin-top: 8.5rem;
          }
					@media (min-width: 480px) {
            .container-select select,
            option {
              font-size: 1.5rem;
            }
            .text-title {
              font-size: 3.5rem;
            }
          }

          @media (min-width: 768px) {
            .show-mobile {
              display: none;
            }
            .show-desktop {
              display: flex;
            }
            .sidebar {
              flex-basis: 25%;
            }
            .products {
              flex-basis: 70%;
            }
            .f-right {
              justify-content: flex-end;
            }
            .contenedor {
              padding-left: 2.5rem;
              padding-right: 2.5rem;
              margin-bottom: 5rem;
            }
            .text-title-tienda {
              font-size: 1.8rem;
            }
          }
          @media (min-width: 768px) {
            .mt-5r {
              margin-top: 5rem;
            }
						select {
							width: 20rem;
						}
          }
          @media (min-width: 1024px) {
            .contenedor {
              padding-left: 8rem;
              padding-right: 8rem;
            }
          }
        `}
      </style>
    </AppLayout>
  );
};

Product.propTypes = {
  categoryList: object.isRequired,
};

export const getServerSideProps = async () => {
  const { response } = await getCategories();

  if (response.ok) {
    return {
      props: {
        categoryList: response,
      },
    };
  }

  return {
    props: {
      categoryList: response,
    },
  };
};

export default Product;
