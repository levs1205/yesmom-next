import React, { useEffect, useState, useContext } from "react";
import AppLayout from "../../../components/AppLayout";
import Head from "next/head";
import Image from "next/image";
import YesmomContext from "../../../context/Context";
import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import CardProduct from "../../../components/CardProduct";
import Pagination from "../../../components/Pagination";
import SidebarProducto from "../../../components/tienda/SidebarProducto";
import LoaderPage from "../../../components/LoaderPage";
import { getProducts, getCategories } from "../../api/request";
import { setProducts, setCategories } from "../../../context/actions/ui";

import Paginaton from "../../../components/Pagination";

export async function getServerSideProps({ query }) {
  //Todos los productos
  const { category = "", sort = "" } = query;
	let filter;
	let categoryItem;
	
	if(category === 'solo-en-yes-mom'){
		filter = 3;
		categoryItem = null;
	} else if(category === 'lo-vendido'){
		filter = 1;
		categoryItem = null;
	} else if(category === 'packs-de-regalo'){
		filter = 4;
		categoryItem = null;
	} else if(category === 'promociones'){
		filter = 2;
		categoryItem = null;
	} else {
		filter = null;
		categoryItem = category;
	}

  const { response } = await getCategories();

  if (!response) {
    return {
      props: {
        category: categoryItem,
        categoryList: {},
				filter
      },
    };
  }
  return {
    props: {
      category: categoryItem,
      categoryList: response,
			filter
    },
  };
}

const Categoria = ({ category, categoryList, filter }) => {
  const {
    dispatchUi,
    ui: { category: categorySelected },
  } = useContext(YesmomContext);
  const [skip, setSkip] = useState(0);
  const [currentpage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [productList, setProductList] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [productsPerPage, setProductsPerPage] = useState(12);

  useEffect(() => {
    dispatchUi(setCategories(categoryList));
  }, []);

  useEffect(() => {
    getListProducts();
  }, [skip, currentpage, category, order, filter]);

  useEffect(() => {
    setOrder(0);
  }, [category]);
	
  const getListProducts = async () => {
    try {
      setLoading(true);
      const response = await getProducts(category, null, skip, productsPerPage, null, order, filter);
     	setProductList(response?.productosGeneral);
      setTotalProducts(response?.totalDeProductos);
      setTotalPages(response?.pages);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleChangeOrder = (e) => {
    setOrder(e.target.value);
  };

  return (
    <AppLayout>
      <Head>
        <title>YesMom - Tienda-categoria</title>
        <meta name="description" content="YesMom es ..."></meta>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="YesMom - Tienda-categoria" />
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
        <meta name="twitter:title" content="YesMom - Tienda-categoria" />
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
      <div className="box-producto fade-in animated ">
        <div className="banner-baby">
          <img
            className="show-mobile img-baby"
            src="/image/perfil-tienda/banner-baby-mobile.png"
          />
          <img
            className="show-desktop img-baby"
            src="/image/perfil-tienda/banner-baby-desktop.png"
          />
          <div className="box-title-ondas">
            <Image
              src="/image/onda-blanca.svg"
              alt="ondas"
              className="ondas"
              width={50}
              height={50}
            />
            <h4 className="text-title heartbeat">Tienda Online</h4>
            <Image
              src="/image/onda-blanca.svg"
              alt="ondas"
              className="ondas"
              width={50}
              height={50}
            />
          </div>
        </div>
        <Container fluid="true">
          <div className="all-content">
            <div className="contenedor">
              <div className="sidebar show-desktop">
                <SidebarProducto />
              </div>
              <div className="products">
                <div className="inline-desktop">
                  <h4 className="text-title-tienda">
                    {categorySelected?.name}
                  </h4>
                  <div className="show-mobile">
                    <hr />
                  </div>
                  <div className="container-selects">
                    <select value={order} onChange={handleChangeOrder}>
											<option value={0}>
                        Todos
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
                  <p>Cargando...</p>
                ) : (
                  <Row>
                    {productList && productList.length ? (
                      productList?.map((product, i) => (
                        <Col xs={6} sm={4}>
                          <CardProduct key={i} {...product} />
                        </Col>
                      ))
                    ) : (
                      <p className="out-result">
                        No se ha encontrado ningún resultado de producto.
                      </p>
                    )}
                  </Row>
                )}
              </div>
            </div>

            {productList && productList.length > 0 && (
              <div className="container-pagination">
                <Pagination
                  totalPages={totalPages}
                  currentpage={currentpage}
                  setCurrentPage={setCurrentPage}
                  skip={skip}
                  setSkip={setSkip}
                  productsPerPage={productsPerPage}
                />
              </div>
            )}
          </div>
        </Container>
      </div>
      <style jsx>
        {`
          .container-pagination {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .out-result {
            font-family: "mont-regular" !important;
            margin: 2rem;
            font-size: 1.4rem;
          }
          .container-selects {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .show-between {
            font-family: "mont-regular" !important;
            font-size: 1.3rem;
            color: #5a5a5a;
            margin: 0;
            margin-top: 2rem;
          }
          hr {
            margin: 0;
            border-top: 3px solid rgba(0, 0, 0, 0.1);
          }
          .contenedor {
            padding: 0 1.5rem;
            display: flex;
            justify-content: space-between;
          }
          .banner-baby {
            position: relative;
          }
          .img-baby {
            width: 100%;
          }
          .box-title-ondas {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
          }
          .text-title {
            font-family: "Clicker Script", cursive;
            font-size: 3em;
            margin: 0rem 1rem 0rem;
            color: #ffffff;
          }

          .show-desktop {
            display: none;
          }
          .all-content {
            margin-bottom: 8rem;
          }
          .box-producto {
            background-size: cover;
            justify-content: left;
            align-items: right;
            padding-top: 8rem;
            border-bottom: 1px solid #5a5a5a;
          }
          .text-title-tienda {
            font-family: "mont-semibold" !important;
            font-size: 2rem;
            font-weight: 600;
            margin: 3.5rem 0.5rem 0rem;
            color: #5a5a5a;
            /* border-bottom: 0.5px solid #575650; */
            padding: 0px 0px 5px 0px;
          }
          .products {
            flex-basis: 100%;
          }

          .all-products {
            padding: 3rem 0;
            display: flex;
            /* justify-content:space-between; */
            align-items: center;
            flex-wrap: wrap;
          }
          .container-selects {
            display: flex;
            align-items: center;
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
          }
          option {
            font-size: 1.3rem;
          }

          .box-pagination {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .show-quantity-desktop {
            font-family: "mont-regular";
            font-weight: 500;
            font-size: 1.2rem;
            color: #5a5a5a;
            margin: 0 1rem 0 0;
          }

          @media (min-width: 480px) {
            .container-selects select,
            option {
              font-size: 1.5rem;
            }
            .text-title {
              font-size: 3.5rem;
            }
          }

          @media (min-width: 768px) {
            .box-producto {
              padding-top: 10rem;
            }
            .all-products {
              padding-top: 0;
            }
            .show-mobile {
              display: none;
            }
            .show-desktop {
              display: flex;
            }
            .inline-desktop {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
            .sidebar {
              flex-basis: 20%;
            }
            .products {
              flex-basis: 75%;
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
            .text-title {
              font-size: 4rem;
            }
            .container-selects {
              margin-top: 3.5rem;
            }
            select {
              margin: 0;
              border-radius: 15px;
            }
          }

          @media (min-width: 1024px) {
            .sidebar {
              flex-basis: 30%;
            }
            .inline-desktop {
              flex-direction: row;
              align-items: center;
            }
            .contenedor {
              padding-left: 8rem;
              padding-right: 8rem;
            }
            .show-quantity-desktop {
              font-size: 1.5rem;
            }
            select {
              padding-right: 5rem;
            }
          }
          @media (min-width: 1280px) {
            select {
              padding-right: 6rem;
            }
          }
					@media (max-width: 403px) {
						@media not all and (min-resolution:.001dpcm) {
							.products {
								width: 100%;
							}
						}
					}
        `}
      </style>
    </AppLayout>
  );
};

export default Categoria;
