import React, { useContext, useEffect, useState } from "react";
import chroma from "chroma-js";
import Link from "next/link";
import Image from "next/image";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import { object, array } from 'prop-types';
import AppLayout from "../../../components/AppLayout";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import CardProduct from "../../../components/CardProduct";
import YesmomContext from "../../../context/Context";
import { startAddToCart } from "../../../context/actions/ui";
import OtherProducts from "../../../components/tienda/detalle/OtherProducts";
import Select from "react-select";
import { getProductsById, getProducts } from '../../api/request';
import { setProduct } from "../../../context/actions/ui";

const DetallesID = ({ product, supplier, images, productList, productsQty, pages }) => {
	//Disparador para state UI
	const { dispatchUi } = useContext(YesmomContext);
	const [disabled, setDisabled] = useState(true);
	const [amount, setAmount] = useState(0);
	const [colorNew, setColorNew] = useState([])
	const [tallaNew, setTallaNew] = useState([])
	const [selectedOptionColor, setSelectedOptionColor] = useState(null)
	const [selectedOptionTalla, setSelectedOptionTalla] = useState(null)
	const { _id: idTienda, nombreTienda, nombreTiendaUrl, } = supplier;
	const { 
		_id: idProducto,
		color,
		talla,
		descripcion,
		cantDisponible,
		precio,
		precioPromocional,
		proveedorId,
		sku,
		accesorios,
		categoria,
		categoriaadicional,
		dimensiones,
		nombre,
		terminos,
  } = product;
	
	const defaultImage = "https://bicentenario.gob.pe/biblioteca/themes/biblioteca/assets/images/not-available-es.png"
  
	let arrayColoresGen = [
		{ value: 'verde', label: 'verde', color: 'green' },
		{ value: 'morado', label: 'morado', color: '#8512BE' },
		{ value: 'turqueza', label: 'turqueza', color: '#87E4EC' },
		{ value: 'rosado', label: 'rosado', color: 'pink' },
		{ value: 'amarillo', label: 'amarillo', color: '#F9EB37' },
		{ value: 'anaranjado', label: 'anaranjado', color: '#FF8C00' },
		{ value: 'rojo', label: 'rojo', color: '#FF0000' },
		{ value: 'azul', label: 'azul', color: '#0000CD' }
	];

	const arrayTallasGen = [
		{ value: '0', label: '0' },
		{ value: '2', label: '2' },
		{ value: '4', label: '4' },
		{ value: '6', label: '6' },
		{ value: '8', label: '8' },
		{ value: '10', label: '10' },
	];

	const handleAdd = () => {
		if(cantDisponible > 0){
			setAmount((amount) => amount + 1);
		}
  };

  const handleMinus = () => {
    if (amount > 0) {
      setAmount((amount) => amount - 1);
    }
  };

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  useEffect(() => {
    if (amount === 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [amount, setDisabled]);
  
	//CART
  const handleAddCart = () => {
    if (!disabled) {
      /* console.log(product); */
      const realProduct = {
        ...product,
        quantity: amount,
      };
      dispatchUi(startAddToCart(realProduct));
    }
  };

/* 	const functionCompareColor = () => {
		let newArray = []
		let iguales = 0;
		for (let i in arrayColoresGen) {
			for (let j in arrayColoresGen) {
				if (arrayColoresGen[i].value == color[j]) {
					iguales++;
					newArray.push(arrayColoresGen[parseInt(i)])
				}
			}
		}
		setColorNew(newArray)
	}
	const functionCompareTalla = () => {
		let newArray = []
		let iguales = 0;
		for (let i in arrayTallasGen) {
			for (let j in arrayTallasGen) {
				if (arrayTallasGen[i].value == talla[j]) {
					iguales++;
					newArray.push(arrayTallasGen[parseInt(i)])
				}
			}
		}
		setTallaNew(newArray)
	}

	useEffect(() => {
		functionCompareColor()
		functionCompareTalla()
	}, []) */

	const handleChangeColor = selectedOptionColor => {
		console.log('selectedOptionColor',selectedOptionColor)
		setSelectedOptionColor({ selectedOptionColor });
	};

	const handleChangeTalla = selectedOptionTalla => {
		console.log('selectedOptionTalla',selectedOptionTalla)
		setSelectedOptionTalla({ selectedOptionTalla });
	};

	const dot = (color = 'transparent') => ({
		alignItems: 'center',
		display: 'flex',
		':before': {
			backgroundColor: color,
			borderRadius: 10,
			content: '" "',
			display: 'block',
			marginRight: 8,
			height: 10,
			width: 10,
		},
	});
  const colourStyles = {
    control: (styles) => ({
			...styles,  
			backgroundColor: "white",
			borderColor: "#556EA1",
			borderRadius: "15px",
			width: "200px",
			fontFamily: "mont-regular",
			fontSize: '14px',
			outline: 'none',
			padding: '0 8px',
			boxShadow: 'none',
			':hover': {
				borderColor: '#556EA1',
				boxShadow: 'none'
			}, 
		}),
		option: (styles, { data, isDisabled, isFocused, isSelected }) => {
			const color = chroma(data.color);
			return {
				...styles,
				fontSize: '14px',
				lineHeight: '20px',
				height: '25px',
				padding: '2px 8px 2px 12px',
				backgroundColor: isDisabled
					? undefined
					: isSelected
					? data.color
					: isFocused
					? color.alpha(0.1).css()
					: undefined,
				color: isDisabled
					? '#ccc'
					: isSelected
					? chroma.contrast(color, 'white') > 2
						? 'white'
						: 'black'
					: data.color,
				cursor: isDisabled ? 'not-allowed' : 'default',
				':active': {
					...styles[':active'],
					backgroundColor: !isDisabled
						? isSelected
							? data.color
							: color.alpha(0.3).css()
						: undefined,
				},
			};
		},
		input: (styles) => ({ ...styles }),
		placeholder: (styles) => ({ ...styles }),
		singleValue: (styles, { data }) => ({ 
			...styles, 
			...dot(data.color),
			color: data.color, 
			backgroundColor: `${data.color}20`,
			padding: '0 8px',
			borderRadius: '5px',
			transition: 'all 0.6s',
			/* ':hover': {
				backgroundColor: data.color,
				color: 'white',
				padding: '0 8px',
				borderRadius: '5px',
			},  */
		}),
  };
	const sizeStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      borderColor: "#556EA1",
      borderRadius: "15px",
      width: "200px",
			fontFamily: "mont-regular",
			fontSize: '14px',
			outline: 'none',
			padding: '0 8px',
			boxShadow: 'none',
			':hover': {
				borderColor: '#556EA1',
				boxShadow: 'none'
			}, 
    }),
		option: (styles) => {
			return {
				...styles,
				fontSize: '14px',
				lineHeight: '20px',
				height: '25px',
				padding: '2px 8px 2px 12px',
			};
		},
		singleValue: (styles) => ({ 
			...styles, 
			backgroundColor: 'white',
		}),
  };

  return (
    <>
      <AppLayout>
        <Head>
          <title>YesMom - Detalles</title>
          <meta name="description" content="YesMom es ..."></meta>
          <meta property="og:type" content="website" />
          <meta property="og:title" content="YesMom - Detalles" />
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
          <meta name="twitter:title" content="YesMom - Detalles" />
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
        <div className="fade-in animated ">
          <div className="show--box-main-proveedor">
            <div className="show--contenedor-centered">
              <div className="show--all-content">
                <div className="show--title-content hide-desktop">
                  <h4 className="title-breadcrumb">
                    Inicio / Tienda / Solo en Yes Mom / Ropa{" "}
                  </h4>
                </div>
                <div className="show--container-content">
                  <div className="show--flex-content-product">
                    <div className="show--container-images">
                      <Carousel>
                        {images.map((imag) => (
                          <div className="box-img-detail">
                            <img src={imag?.url ? imag?.url: defaultImage} className="" />
                          </div>
                        ))}
                      </Carousel>
                    </div>
                    <div className="show--container-details">
                      <section className="show--some-info-product">
                        <h5 className="show--ft-semibold">{nombre}</h5>
                        {/* <h6 className="show--ft-light">{nombreTienda}</h6> */}
												<h6 className="show--ft-light">
													<Link href={`/tienda/${nombreTiendaUrl}`}>
														<a className="show--ft-light">{nombreTienda}</a>
													</Link>
												</h6>
												
                        {/* <p className="show--text-description">{decripcion}</p> */}
                        <p className="show--price">S/ {precio?.toFixed(2)}</p>
                        <div className="show--container-selects">
                          {/* <div className="show--group-select">
                            <label className="show--text-label" htmlFor="talla">
                              Color
                            </label>
                            <select id="color">
                              <option selected disabled>
                                Selecciona el color
                              </option>
                              {color?.length > 0 ? color.map((col) => (
                                <option value={col.name}>
																	{col.name}
                                </option>
                              )): ''}
                            </select>
                          </div> */}
													<div className="show--group-select">
														<label className="show--text-label" htmlFor="talla">
                              Color
                            </label>
															{/* <SelectMultipleColor defaultArray={colorNew} allCollors={arrayColoresGen} onChange={handleChangeColor} /> */}
															<div className="container-select">
																{/* {defaultArray.length !== 0 
															? */}
																<Select
																	defaultValue={arrayColoresGen[0]}
																	options={arrayColoresGen}
																	styles={colourStyles}
																	isSearchable={true}
																	onChange={handleChangeColor}
																	placeholder="Selecciona..."
																/>
																{/* : null} */}
															</div>
													</div>
                          {/* <div className="show--group-select">
                            <label className="show--text-label" htmlFor="talla">
                              Talla
                            </label>
                            <select id="talla">
                              <option selected disabled>
                                Selecciona la talla
                              </option>
                              {talla?.length > 0 ? talla.map((tall) => (
                                <option value={Object.values(tall)}>
                                  {tall}
                                </option>
                              )): ''}
                            </select>
                          </div> */}
													<div className="updprod-section">
														<label className="show--text-label" htmlFor="talla">
                              Talla
                            </label>
														{/* <SelectMultiple defaultArray={tallaNew} allSizes={arrayTallasGen} onChange={handleChangeTalla} /> */}
														<Select
															closeMenuOnSelect={false}
															defaultValue={tallaNew}
															name="colors"
															options={arrayTallasGen}
															styles={sizeStyles}
															isSearchable={true}
															placeholder='Selecciona...'
															onChange={handleChangeTalla}
														/> 
													</div>
                        </div>
                        <div className="show--container-cantidad">
                          <p className="show--text-label">Cantidad</p>
                          <div className="show--control-buttons">
                            <div
                              className="show--control-cantidad"
                              onClick={handleMinus}
                            >
                              <Image
                                src="/image/tienda/icon-minus.svg"
                                height={25}
                                width={25}
                              />
                            </div>

                            <input
                              type="number"
                              className="input-amount"
                              value={amount}
                              onChange={handleChange}
                              min={0}
                            />

                            <div
                              className="show--control-cantidad"
                              onClick={handleAdd}
                            >
                              <Image
                                src="/image/tienda/icon-add.svg"
                                height={25}
                                width={25}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="show--container-buttons">
                          <div
                            className="show--btn-normal btn-fix"
                            onClick={handleAddCart}
                          >
                            <div
                              className={`btn-detalle ${
                                disabled ? "bg-gray" : "bg-pink"
                              }`}
                            >
                              Agregar al carrito
                            </div>
                          </div>
                          <div className="show--btn-normal">
                            <Link href={`/tienda/${nombreTiendaUrl}`}>
                              <div className="btn-detalle bg-amarillo">
                                Ver la tienda
                              </div>
                            </Link>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                  <div className="show--container-details">
                    <section className="show--all-info-producto">
                      <h5 className="show--ft-semibold">
                        Detalle del Producto
                      </h5>
                      <p className="show--text-description">{descripcion}</p>

                      <h5 className="show--ft-semibold">Accesorios</h5>
                      {/* <ol>
                        <li>haretra, sit volutpat varius</li>
                        <li>
                          Sed sit urna euismod
                          <ul>
                            <li>Viverra nunc turpis</li>
                            <li>Nulla at et venenatis vitae</li>
                            <li>Facilisis fringilla</li>
                          </ul>
                        </li>
                        <li>Quam aliquet et</li>
                        <li>Proin nulla lacus quam</li>
                      </ol> */}
												<p className="show--text-description">{accesorios}</p>
                      <div className="show--flex-desktop">
                        {/* <div>
                          <h5 className="show--ft-semibold">
                            Pais de producción
                          </h5>
                          <p className="show--text-description">
                            Pharetra, sit volutpat varius
                          </p>
                        </div> */}
                        <div>
                          <h5 className="show--ft-semibold">Dimensiones</h5>
                          <p className="show--text-description">
														{dimensiones?.largo} x {dimensiones?.ancho} x {dimensiones?.alto} cm
													</p>
                        </div>
                        {/* <div>
                          <h5 className="show--ft-semibold">
                            Material de producto
                          </h5>
                          <p className="show--text-description">
                            Pharetra, sit volutpat varius
                          </p>
                        </div> */}
                      </div>

                      <h5 className="show--ft-semibold">
                        Términos y condiciones
                      </h5>
                      <p className="show--text-description">
                        {terminos}
                      </p>
                    </section>
										<OtherProducts
												productList={productList}
                        category={categoria}
                        id={idProducto}
                      />
                    {/* <section className="show--other-products">
                      <div className="box-title-otros-productos">
                        <div className="icon-title-video">
                          <FontAwesomeIcon
                            icon={faStar}
                            className="cl-yellow heartbeat"
                          ></FontAwesomeIcon>
                        </div>
                        <div className="title-fuxia">
                          Otros productos
                          <br className="hide-desktop" /> que te pueden
                          interesar
                        </div>
                        <div className="icon-title-video">
                          <FontAwesomeIcon
                            icon={faStar}
                            className="cl-yellow heartbeat"
                          ></FontAwesomeIcon>
                        </div>
                      </div>

                      <OtherProducts
												productList={productList}
                        category={categoria}
                        id={idProducto}
                      />
                    </section> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AppLayout>
      <style jsx>
        {`
					.container-select  {
						width: 200px !important;
					}
          .input-amount {
            border: none;
            border: 1px solid #556ea1;
            font-family: "mont-light";
            font-size: 2rem;
            color: #5a5a5a;
            width: 4rem;
            border-radius: 10px;
            pointer-events: none;
          }
          .input-amount:focus {
            outline: none;
            box-shadow: none;
          }
          .input-amount::-webkit-inner-spin-button,
          .input-amount::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          .input-amount {
            -moz-appearance: textfield;
          }

          :global(.carousel li img) {
            border-radius: 10px !important;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
          }
          :global(.carousel .thumb img) {
            vertical-align: top;
            height: 100%;
            object-fit: cover;
            object-position: center center;
          }
          :global(.carousel .slide img) {
            width: 100%;
            height: 100%;
            vertical-align: top;
            border: 0;
            max-height: 250px;
            object-fit: cover;
            object-position: center center;
          }
          :global(.carousel .control-dots) {
            display: none;
          }
          :global(.carousel .thumb.selected, .carousel .thumb:hover) {
            border-color: #ec608d;
            border-radius: 15px;
          }

          :global(.thub.selected) {
            border-radius: 15px !important;
          }

          :global(.carousel .thumbs-wrapper) {
            margin: 0px;
            margin-top: 20px;
          }
          :global(ul.thumbs.animated) {
            padding-left: 0px !important;
          }
          .box-img-detail {
            max-width: 100%;
            max-height: 250px;
            height: 250px;
          }
          .bg-pink {
            background: #ec608d;
          }
          .bg-gray {
            background-color: #dadada !important;
          }
          .bg-amarillo {
            background: #febf41;
          }
          .btn-detalle {
            cursor: pointer;
            border-radius: 30px;
            font-family: "omnes-regular" !important;
            font-size: 1.8rem;
            padding: 1rem 0;
            text-align: center;

            color: white;
          }
          /**Global */
          .title-breadcrumb {
            text-align: left;
            font-family: "mont-regular" !important;
            font-size: 1.3rem;
            color: #5a5a5a;
          }
          .show--box-main-proveedor p {
            margin: 0;
          }

          .show--ft-semibold {
            font-family: "mont-semibold" !important;
          }

          .show--ft-light {
            font-family: "mont-light" !important;
						color: #5a5a5a;
						text-decoration: none;
          }

          h5.show--ft-semibold,
          h6.show--ft-light {
            text-align: left;
            font-size: 2rem;
            color: #5a5a5a;
            margin: 1.5rem 0;
						text-decoration: none
          }

          .show--box-main-proveedor ol {
            padding-inline-start: 2.75rem;
          }

          .show--box-main-proveedor ol li {
            font-family: "mont-light" !important;
            font-size: 1.5rem;
            color: #5a5a5a;
          }

          .show--box-main-proveedor li {
            padding-left: 1rem;
            margin: 0.5rem 0;
          }

          .show--box-main-proveedor {
            padding: 16rem 0 10rem 0;
          }

          .show--contenedor-centered {
            /* display:flex;
                        justify-content: center;
                        align-items: center; */
            margin: 0 2.5rem;
          }

          .show--line-end {
            margin: 5rem -1rem;
          }

          /* TITLE */

          .show--title-content {
            margin-bottom: 2rem;
          }

          /**CONTENEDOR DE IMAGENES */
          .show--container-image-selected {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .show--images-secondary {
            margin-top: 1rem;
            display: flex;
            justify-content: center;
          }

          /**FIRST INFO PRODUCT */
          .show--some-info-product {
            margin: 3rem 0;
          }

          .show--text-description {
            font-family: "mont-light" !important;
            font-size: 1.5rem;
            color: #5a5a5a;
            margin: 1rem 0;
            letter-spacing: 0.01rem;
          }

          .show--price {
            font-family: "mont-heavy" !important;
            color: #4b64a4;
            font-size: 3rem;
          }

          .show--container-selects {
            margin: 1rem 0;
            display: flex;
          }

          .show--group-select {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
          }

          .show--group-select select {
            cursor: pointer;
            width: calc(100% - 1rem);
            padding: 1rem;
            border: 1px solid #556ea1;
            box-sizing: border-box;
            border-radius: 20px;

            background: url(https://i.ibb.co/mtG2wk2/image.png) no-repeat right
              #ffffff;
            background-size: 1.25rem;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background-position-x: 92.5%;

            font-family: "mont-regular" !important;
            font-size: 1.2rem;
            color: #556ea1;
          }

          .show--group-select select:focus {
            outline: none;
          }

          .show--text-label {
            margin: 0;
            font-family: "mont-regular" !important;
            font-size: 1.3rem;
            color: #575650;
            margin-bottom: 0.5rem;
          }

          .show--container-cantidad {
            margin: 2rem 0;
          }

          .show--control-buttons {
            display: flex;
          }

          .show--control-buttons p {
            font-family: "mont-light" !important;
            color: #5a5a5a !important;
          }

          .show--control-cantidad {
            cursor: pointer;
          }

          .show--control-cantidad,
          .show--control-buttons p {
            font-size: 2.4rem;
            color: #d3dee3;
            width: 4rem;
            height: 4rem;
            border: 1.5px solid #556ea1;
            box-sizing: border-box;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .show--container-buttons,
          .show--container-actions {
            margin: 3rem 2rem;
          }

          .show--container-buttons > div,
          .show--container-actions > div {
            margin: 1.5rem 0;
          }

          .show--opacity-btn {
            opacity: 0.5;
          }

          .box-title-otros-productos {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .box-title-otros-productos .title-fuxia {
            font-size: 2rem;
            color: #556ea1;
          }
          .box-title-otros-productos > .icon-title-video:first-child {
            transform: rotate(30.86deg);
            font-size: 22px;
          }
          .box-title-otros-productos > .icon-title-video:last-child {
            transform: rotate(36.46deg);
            font-size: 22px;
          }

          .show--other-products {
            margin: 2rem 0;
          }
          :global(li.thumb) {
            width: 6rem !important;
            height: 6rem !important;
          }

          @media (min-width: 480px) {
            .show--contenedor-centered {
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .show--all-content {
              width: 45rem;
            }
            .box-img-detail {
              max-width: 100%;
              max-height: 500px;
              height: 500px;
            }
            :global(.carousel .slide img) {
              max-height: 500px;
            }
            :global(li.thumb) {
              width: 9rem !important;
              height: 9rem !important;
            }
          }

          @media (min-width: 768px) {
            .show--box-main-proveedor {
              padding-top: 18rem;
            }
            .hide-desktop {
              display: none;
            }
            .show--all-content {
              width: 60rem;
            }

            .show--title-add-producto {
              font-size: 2.7rem;
            }

            .show--container-buttons,
            .show--container-actions {
              margin-left: 6.5rem;
              margin-right: 6.5rem;
            }
            .show--flex-desktop {
              display: flex;
            }
            .show--flex-desktop > div {
              margin-left: 5rem;
            }
            .show--flex-desktop > div:first-of-type {
              margin-left: 0;
            }
            .show--container-buttons {
              display: flex;
              justify-content: center;
            }
            .btn-detalle {
              border-radius: 15px;
              padding: 1rem 2rem;
              width: 20rem;
              margin: 0 1rem;

              font-size: 1.5rem;
              font-family: "omnes-bold" !important;
            }
            .bg-pink {
              background: #dc6a8d;
            }
            .bg-yellow {
              background: #febf41;
            }
            .show--group-select select {
              width: 60%;
              font-size: 1.3rem;
            }
          }

          @media (min-width: 1024px) {
            .show--title-add-producto {
              font-size: 3rem;
            }

            .show--all-content {
              width: 90%;
            }

            .show--flex-content-product {
              display: flex;
              justify-content: space-between;
            }

            .show--container-images {
              flex-basis: 45%;
            }

            .show--container-details {
              margin-left: 2rem;
              flex-basis: 50%;
            }

            .show--all-info-producto {
              margin: 5rem 0;
            }

            .show--container-buttons {
              margin: 0;
              display: flex;
              justify-content: space-between;
            }

            .show--container-actions {
              margin: 0;
              display: flex;
              flex-direction: row-reverse;
              justify-content: flex-start;
            }

            .show--btn-normal {
              width: 20rem;
            }

            .show--container-buttons > div {
              margin: 0;
              flex-basis: calc(50% - 1rem);
            }

            .show--container-actions > div {
              margin-left: 1rem;
            }

            .show--group-select select {
              font-size: 1.5rem;
              padding: 1.5rem;
            }
            .btn-detalle {
              margin: 0;
              width: 100%;
            }
            .show--group-select {
              display: flex;
              flex-direction: column;
            }
            .show--group-select select {
              width: 85%;
              font-size: 1.3rem;
            }
          }

          @media (min-width: 1280px) {
            .show--flex-desktop > div {
              margin-left: 10rem;
            }
            .btn-detalle {
              width: 25rem;
            }
          }
        `}
      </style>
    </>
  );
};

DetallesID.propTypes = {
  product: object.isRequired,
	supplier: object.isRequired,
	images: array.isRequired,	
};

export const getServerSideProps = async ({ query }) => {
	const { id } = query;
  const { producto, proveedor, imagenes }  = await getProductsById(id);
	const { productosGeneral, totalDeProductos, pages } = await getProducts(null, producto?.categoria, 0, 4);

	if (!producto) {
    return {
      props: {
        product: {},
        supplier: {},
        images: [],
				productList: [],
        productsQty: 0,
        pages: 0,
      },
    };
  }

  return {
    props: {
      product: producto,
			supplier: proveedor,
			images: imagenes,
			productList: productosGeneral,
      productsQty: totalDeProductos,
      pages: pages,
    },
  };
};

export default DetallesID;
