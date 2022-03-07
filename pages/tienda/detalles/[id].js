import React, { useContext, useEffect, useState, useMemo } from "react";
import chroma from "chroma-js";
import Link from "next/link";
import Image from "next/image";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import { object, array } from "prop-types";
import AppLayout from "../../../components/AppLayout";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import CardProduct from "../../../components/CardProduct";
import YesmomContext from "../../../context/Context";
import { startAddToCart, startRemoveProduct } from "../../../context/actions/ui";
import OtherProducts from "../../../components/tienda/detalle/OtherProducts";
import Select from "react-select";
import { getProductsById, getProducts } from "../../api/request";
import { setProduct } from "../../../context/actions/ui";
import moment from 'moment';

const defaultImage =
  "https://bicentenario.gob.pe/biblioteca/themes/biblioteca/assets/images/not-available-es.png";


const DetallesID = ({
  product,
  supplier,
  images,
  productList,
  productsQty,
  pages,
}) => {
  const { _id: idTienda, nombreTienda, nombreTiendaUrl } = supplier;
  const {
    _id: idProducto,
    color,
    talla,
    descripcion,
    cantidadDisponible,
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
  //Disparador para state UI
  const { dispatchUi, ui: { cart: cartContext } } = useContext(YesmomContext);
  const [disabled, setDisabled] = useState(true);
  const [amount, setAmount] = useState(0);
	const [numberProductCart, setNumberProductCart] = useState(1);
	const [sizeSelected, setSizeSelected] = useState(null)
	const [colourSelected, setColourSelected] = useState(null)
	const [listSize, setListSize] = useState([])

	let arrayColoresGen = [
		{ value: 'verde', label: 'verdes', color: 'green' },
		{ value: 'morado', label: 'morado', color: '#8512BE' },
		{ value: 'turqueza', label: 'turqueza', color: '#87E4EC' },
		{ value: 'rosado', label: 'rosado', color: 'pink' },
		{ value: 'amarillo', label: 'amarillo', color: '#F9EB37' },
		{ value: 'anaranjado', label: 'anaranjado', color: '#FF8C00' },
		{ value: 'rojo', label: 'rojo', color: '#FF0000' },
		{ value: 'azul', label: 'azul', color: '#0000CD' }
	];
	
  const handleAdd = () => {
    /* if (cantidadDisponible > 0 && amount < cantidadDisponible && sizeSelected !== null && colourSelected !== null) { */
		if (cantidadDisponible > 0) {
      setAmount((amount) => amount += 1);
    }
  };

  const handleMinus = () => {
    if (amount > 0) {
      setAmount((amount) => amount - 1);
    }
  };

  const handleChange = (e) => {
    if(cantidadDisponible >0){
      setAmount(e.target.value);
    }
  };

  useEffect(() => {
		let	optionsSize= talla.map(t => ({
      "value" : t,
      "label" : t,
    }))
		setListSize(optionsSize)
    if (amount === 0) {
      setDisabled(true);
    } else {
      if(color && color.length>0 && !colourSelected){
        setDisabled(true);
        return;
      }
      if(talla && talla.length>0 && !sizeSelected){
        setDisabled(true);
        return;
      }
      setDisabled(false);
    }
  }, [colourSelected,sizeSelected,amount, setDisabled]);

  //CART
  const handleAddCart = () => {
    if (!disabled ) {
			//* NOTE: si hay item en l carrito 
			if(cartContext?.length > 0 && cartContext !== undefined ) {
				//* NOTE: buscar si existe un obj con id igual 
				let filterCart = cartContext.filter(cart => cart._id === product._id && cart?.colourSelected === colourSelected && cart?.sizeSelected === sizeSelected) || cartContext.filter(cart => cart._id === product._id) 
				//* NOTE:  si existe 
				if(filterCart.length = 1) {
					//* NOTE:  si existe buscar si todo el objeto es igual
					if( filterCart[0]?.colourSelected === colourSelected && filterCart[0]?.sizeSelected === sizeSelected ) {
						const realProduct = {
							...product,
							idProductCart: filterCart[0].idProductCart,
							imagen: images[0].url,
							quantity: filterCart[0].quantity + amount,
							supplier: nombreTienda,
							urlSupplier: nombreTiendaUrl,
							sizeSelected: sizeSelected || '',
							colourSelected: colourSelected || '',
						};
						dispatchUi(startRemoveProduct(filterCart[0].idProductCart));
						dispatchUi(startAddToCart(realProduct));
					}else if( filterCart[0]?.colourSelected !== colourSelected || filterCart[0]?.sizeSelected !== sizeSelected ) {
						const realProduct = {
							...product,
							idProductCart: cartContext?.length + 1 || 1,
							imagen: images[0].url,
							quantity: amount,
							supplier: nombreTienda,
							urlSupplier: nombreTiendaUrl,
							sizeSelected: sizeSelected || '',
							colourSelected: colourSelected || '',
						};
						dispatchUi(startAddToCart(realProduct));
					}else {
						console.log('-')
					}
				} else {
					console.log('-')
				}
			}else {
				
				const realProduct = {
					...product,
					idProductCart: cartContext?.length + 1 || 1,
					imagen: images[0].url,
					quantity: amount,
					supplier: nombreTienda,
					urlSupplier: nombreTiendaUrl,
					sizeSelected: sizeSelected || '',
					colourSelected: colourSelected || '',
				};
				dispatchUi(startAddToCart(realProduct));
			}
			setAmount(0)
    }
		console.log('---------------------------------------')
  };

	const handleChangeColor = selectedOptionColor => {
		setColourSelected( selectedOptionColor.label );
	};

	const handleChangeTalla = selectedOptionTalla => {
		setSizeSelected( selectedOptionTalla.label );
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
			height: 12,
			width: 12,
		},
	});
  const colourStyles = {
    control: (styles) => ({
			...styles,  
			backgroundColor: "white",
			borderColor: "#556EA1",
			color: "#556EA1",
			borderRadius: "20px",
			width: "200px",
			fontFamily: "mont-regular",
			fontSize: '14px',
			outline: 'none',
			padding: '3px 8px',
			boxShadow: 'none',
			':hover': {
				borderColor: '#556EA1',
				boxShadow: 'none'
			}, 
		}),
		option: (styles, { data, isSelected }) => {
			return {
				...styles,
				...dot(data.value),
				fontSize: '14px',
				lineHeight: '20px',
				height: '4.5rem',
				color: "#556EA1",
				padding: '0px 8px 0px 12px',
				transition: 'all 0.6s ease',
				backgroundColor: isSelected
				? "#556EA1"
				: "#FFFFFF",
				color: isSelected
				? "#FFFFFF": "#556EA1",
				':active': {
					...styles[':active'],
					backgroundColor: 
						 isSelected
							? "#556EA1"
							: "#556EA120",
					color: 
							isSelected
							 ? "#FFFFFF"
							 : "#5a5a5a"
					 
				},
				':hover': {
					backgroundColor: '#1d5bd915',
					color: "#556EA1"
				}, 
			};
		},
		input: (styles) => ({ ...styles }),
		placeholder: (styles) => ({ ...styles }),
		singleValue: (styles, { data }) => ({ 
			...styles, 
			...dot(data.value),
			color: '#5a5a5a', 
			padding: '5px 8px',
		}),
  };

	const sizeStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
			borderColor: "#556EA1",
			color: "#556EA1",
			borderRadius: "20px",
			width: "200px",
			fontFamily: "mont-regular",
			fontSize: '14px',
			outline: 'none',
			padding: '3px 8px',
			boxShadow: 'none',
			':hover': {
				borderColor: '#556EA1',
				boxShadow: 'none'
			}, 
    }),
		option: (styles, { isSelected }) => {
			return {
				...styles,
				fontSize: '14px',
				lineHeight: '20px',
				height: '4.5rem',
				color: "#556EA1",
				padding: '10px 8px 0px 20px',
				transition: 'all 0.6s ease',
				backgroundColor: isSelected
				? "#556EA1"
				: "#FFFFFF",
				color: isSelected
				? "#FFFFFF": "#556EA1",
				':active': {
					...styles[':active'],
					backgroundColor: 
						 isSelected
							? "#556EA1"
							: "#556EA120",
					color: 
							isSelected
							 ? "#FFFFFF"
							 : "#5a5a5a"
					 
				},
				':hover': {
					backgroundColor: '#1d5bd915',
					color: "#556EA1"
				}, 
			};
		},
		input: (styles) => ({ ...styles }),
		placeholder: (styles) => ({ ...styles }),
		singleValue: (styles) => ({ 
			...styles, 
			bcolor: '#5a5a5a', 
			padding: '0 8px',
		}),
  };

  const haveDiscount = useMemo(()=>{
    if(product.precioPromocional > 0 ) return true;
    if( !product || !product.fechaInicioPromocion || !product.fechaFinPromocion) return false;

    const init_promo = moment(product.fechaInicioPromocion);
    const end_promo = moment(product.fechaFinPromocion);
    const now = moment(new Date());

    if(end_promo.isAfter(init_promo) && end_promo.isAfter(now)){
      return true;
    }else{
      return false;
    }

  },[product])


  return (
    <>
      <AppLayout>
        <Head>
          <title>YesMom - {product.nombre.toUpperCase()}</title>
          <meta name="description" content="YesMom es ..."></meta>
          <meta property="og:type" content="website" />
          <meta property="og:title" content={`YesMom - ${product.nombre}`} />
          <meta
            property="og:description"
            content={descripcion}
          />
          <meta property="og:image:width" content="1280" />
          <meta property="og:image:height" content="855" />
          <meta property="og:site_name" content="Yes Mom" />
          {/* <meta property="og:url" content={`${user.id}`} />  */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={nombre} />
          <meta
          property="og:image"
          itemprop="image"
          content={images[0].url}
        />
          
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
                    Inicio / Tienda / Ropa / {nombre}
                  </h4>
                </div>
                <div className="show--container-content">
                  <div className="show--flex-content-product">
                    <div className="show--container-images">
                      <Carousel>
                        {images.map((imag) => (
                          <div className="box-img-detail">
                            <img
                              src={imag?.url ? imag?.url : defaultImage}
                              className=""
                            />
                          </div>
                        ))}
                      </Carousel>
                    </div>
                    <div className="show--container-details">
                      <section className="show--some-info-product">
                        {
                          cantidadDisponible === 0 
                          &&
                          <h2 className="product_out_stock">¡Producto agotado!</h2>
                        }
                        <h5 className="show--ft-semibold">{nombre}</h5>
                        <h6 className="show--ft-light">
                          <Link href={`/tienda/${nombreTiendaUrl}`}>
                            <a className="show--ft-light name-store">{nombreTienda}</a>
                          </Link>
                        </h6>

                        <p className="show--price">S/ {haveDiscount ? precioPromocional?.toFixed(2) : precio.toFixed(2)}</p>
												{haveDiscount && <p className="show--price-dcto">S/ {precio?.toFixed(2)}</p>}
                        <div className="show--container-selects">
                          {
                            color && color.length > 0 
                            && 
                            <div className="show--group-select">
                              <label className="show--text-label" htmlFor="talla">
                                Color
                              </label>
                              <Select
                                options={color}
                                styles={colourStyles}
                                isSearchable={true}
                                onChange={handleChangeColor}
                                placeholder="Selecciona color"
                              />
                            </div>
                          }
                          {
                            talla && talla.length > 0 
                            &&
                          <div className="show--group-select">
                            <label className="show--text-label" htmlFor="talla">
                              Talla
                            </label>
														<Select
															options={listSize}
															styles={sizeStyles}
															isSearchable={true}
															onChange={handleChangeTalla}
															placeholder="Selecciona talla"
														/>
                          </div>
                          }
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
                              disabled={cantidadDisponible===0}
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
                      <p className="show--text-description">{accesorios}</p>
                      <div className="show--flex-desktop">
                        <div>
                          <h5 className="show--ft-semibold">Dimensiones</h5>
                          <p className="show--text-description">
                            {dimensiones?.largo} x {dimensiones?.ancho} x{" "}
                            {dimensiones?.alto} cm
                          </p>
                        </div>
                      </div>

                      <h5 className="show--ft-semibold">
                        Términos y condiciones
                      </h5>
                      <p className="show--text-description">{terminos}</p>
                    </section>
                    <OtherProducts
                      productList={productList}
                      category={categoria}
                      id={idProducto}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AppLayout>
      <style jsx>
        {`
          
          .product_out_stock{
            font-family:"mont-regular"!important;
            color : #ec608d;
          }
          :global(.carousel .carousel-status){
            display : none!important;
          }
          .container-select {
            width: 200px !important;
          }
          .input-amount {
            border: none;
            border: 1px solid #556ea1;
            font-family: "mont-light";
            font-size: 2rem;
            color: #5a5a5a;
            width: 4rem;
            border-radius: 15px;
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
          :global(.carousel .thumb ){
            border-radius: 15px;
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
					.name-store:hover {
						color: #f22c74;
						transition:0.2s ease-in-out;
					}

          h5.show--ft-semibold,
          h6.show--ft-light {
            text-align: left;
            font-size: 1.5rem;
            color: #5a5a5a;
            margin: 1.5rem 0;
            text-decoration: none;
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
            margin: 3rem 0rem;
          }

          .show--text-description {
            font-family: "mont-light" !important;
            font-size: 1.25rem;
            color: #5a5a5a;
            margin: 1rem 0;
            letter-spacing: 0.01rem;
          }

          .show--price {
            font-family: "mont-heavy" !important;
            color: #4b64a4;
            font-size: 3rem;
          }
					.show--price-dcto {
            font-family: "mont-regular" !important;
            /* color: #575650; */
						color: #4b64a4;
            font-size: 1.6rem;
						text-decoration-line: line-through;
          }

          .show--container-selects {
            margin: 1rem 0;
            display: flex;
						flex-direction: column;
						max-width: 440px;
          }

          .show--group-select {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
          }
          .show--group-select > div {
            width: auto;
          }

          .show--group-select select {
            cursor: pointer;
            width: 22rem;
						height: 4.5rem;
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
						.show--container-selects {
							flex-direction: row;
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
              padding-top: 16rem;
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
            .show--some-info-product {
            margin: 3rem 3rem;
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

            .btn-detalle {
              margin: 0;
              width: 100%;
            }
            .show--group-select {
              display: flex;
              flex-direction: column;
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
  console.log(id);
  const { producto, tienda, imagenes } = await getProductsById(id);

  console.log('PRODUCTOO',producto);
  if(!producto){
    return  {
      redirect: {
        permanent: false,
        destination: "/404",
      },
      props:{},
    };
  }

  const { productosGeneral, totalDeProductos, pages } = await getProducts(
    null,
    producto?.categoria,
    0,
    4,
    null,
    null,
    null
  );

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
      supplier: tienda,
      images: imagenes,
      productList: productosGeneral,
      productsQty: totalDeProductos,
      pages: pages,
    },
  };
};

export default DetallesID;
