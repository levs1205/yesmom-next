import React, { useContext, useRef, useState  , useEffect} from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

import AppLayout from "../../../components/AppLayout";
import CustomButton from "../../../components/Perfil/CustomButton";
import Description from "../../../components/Perfil/Description";
import Sidebar from "../../../components/Perfil/Sidebar";
import TitlePerfil from "../../../components/Perfil/TitlePerfil";
import BotonInput from "../../../components/Registro/BotonInput";

//Validacion
import * as yup from 'yup';
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import LoaderPage from "../../../components/LoaderPage";
import YesmomContext from "../../../context/Context";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schemaValidator = yup.object().shape({
  fullname : yup.string('*Nombres incorrectos').required('*Nombres y apellidos son requeridos'),
  email : yup.string().email('*Ingresa un correo válido').required('*Correo electrónico es requerido'),
  phone : yup.string().matches(phoneRegExp, '*Número de teléfono no es válido'),
})


const index = () => {


  const {  auth : { logged } } = useContext(YesmomContext);
  const [ loading , setLoading ] = useState(true);
  const flagRef = useRef(true);
  const router = useRouter();

  //Datos fake
  const defaultValues = {
    fullname : "Lucia Quiñonez",
    email : "lucia@henribarrett.com",
    phone : "51933475707",
  }

  const { register , handleSubmit , formState : { errors } , control } = useForm({
    resolver: yupResolver(schemaValidator),
    defaultValues
  });
  
  //Botones de selección
  const defaultSelection = {
    haveChildren  : true,
    firstTime : false,
  }

  const [ selection , setSelection ] = useState(defaultSelection);
  const [ moreChildren , setMoreChildren ] = useState(true);
  
/*   
  Si es primeriza -> demas datos , fecha nacimiento y sexo
  Si no -> borrar estos datos
 */
  const handleSelectionChange = ( name , value) => {
    setSelection({
      ...selection,
      [name] : value
    })
  }

  /* Mas de un hijo*/
  const handleMoreChildren = () => {
    setMoreChildren(!moreChildren);
  }

  //SUBMIT
  const submitForm = async(values) => {
    let formValues = {
      ...values,
      ...selection
    };

    //Si presiona no , no se deben añadir mas campos
    if(selection.haveChildren){
      //Si no es primeriza , activa o no el boton de mas de un hijo
      if(!selection.firstTime){
        formValues.moreThanOne = moreChildren
        delete formValues.genderBaby;
      }
    }else{
      //No tiene hijos
      delete formValues.firstTime;
    }
    
    alert('actualizado');
    alert(JSON.stringify(formValues));
  };

  useEffect(()=>{
    if(!logged){
      console.log('Entro aqui causaaa');
      router.push('/login');
      flagRef.current = false;
    }
    setTimeout(() => {
      if(flagRef.current){
        setLoading(false)
      }
    }, 1000)
   },[logged])

  if(loading){
    return <LoaderPage />
  }

  return (
    <AppLayout>
      <Head>
        <title>YesMom - Información Perfil</title>
        <meta name="description" content="YesMom es ..."></meta>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="YesMom - Informacion Perfil" />
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
        <meta name="twitter:title" content="YesMom - Informacion Perfil" />
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
          <div className="all-content">
            <div className="contenedor-flex">
              <div className="flex-left">
                <TitlePerfil name="Lucia" email="lucia@henribarrett.com" />
                <Sidebar active="miperfil" />
              </div>
              <div className="flex-right">
                <Description
                  path="Mi perfil"
                  description="Aquí encontrarás tus datos personales"
                />
                <div className="about-account">
                  <p className="ft-m-regular">Información de la cuenta</p>
                  <div className="icon-pencil">
                    <img src="/image/perfil/icon-pencil.svg" alt="icon-pencil" />
                  </div>
                </div>
                <div className="container-form">
                  <form>
                    <div className="flex-desktop">
                      <div className="wrapper-input">
                        <label htmlFor="name">Nombre y Apellido:</label>
                        <input 
                          type="text" 
                          id="fullname"
                          name="fullname" 
                          {...register('fullname')}
                        />
                      </div>

                      <div className="wrapper-input">
                        <label htmlFor="email">
                          Dirección de correo electrónico:
                        </label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          {...register('email')}
                        />
                      </div>
                    </div>

                    {/* Country code picker */}

                    <div className="wrapper-input">
                      <label className="mb-4">Número de teléfono:</label>
                      <div className="phone-container">
                        <Controller 
                         name="phone"
                         /* defaultValue={defaultValues.phone} */
                         control ={ control}
                         render={
                           ( { field } ) =>
                           <PhoneInput
                            {...field}
                            countryCodeEditable={false}
                            country="pe"
                            containerClass="class-contain"
                            inputClass="code-picker"
                            buttonClass="button-class"
                            dropdownClass="dropdown-class"
                            searchClass="search-class"
                            fullWidth={true}
                            inputStyle={{
                              width: "100%",
                              height: "4.4rem",
                              textAlign: "left",
                              borderRadius: "20px",
                              opacity: 0.8,
                              fontFamily: "Mont-regular",
                              fontStyle: "normal",
                              fontWeight: 600,
                              fontSize: "13px",
                              margin: 0,
                              border: 0,
                              outline: 0,
                            }}
                          />
                         }
                        />
                        
                      </div>
                    </div>

                    <div className="flex-desktop">
                      <div className="w-28r">
                        <div className="wrapper-input">
                          <label className="change-color">¿Tienes hijos?</label>
                          <div className="contenedor-buttons" large="small">
                          <BotonInput 
                            onClick = {() => handleSelectionChange('haveChildren',true)}
                            type = {`${selection.haveChildren ? "filled" : "outlined"}`}
                          >
                            Si
                          </BotonInput>
                          <BotonInput 
                            onClick= {() => handleSelectionChange('haveChildren',false)}
                            type = {`${!selection.haveChildren ? "filled" : "outlined"}`}
                            large = "small"
                          >
                            No
                          </BotonInput>
                          </div>
                        </div>
                      </div>
                      {
                        selection.haveChildren &&
                          <div className="w-28r">
                            <div className="wrapper-input">
                              <label className="change-color">
                                ¿Eres primeriza?
                              </label>
                              <div className="contenedor-buttons">
                              <BotonInput 
                                onClick={ () => handleSelectionChange('firstTime',true)}
                                type = {`${selection.firstTime ? "filled" : "outlined"}`}
                                large = "small"
                              >
                                Si
                              </BotonInput>
                              <BotonInput 
                                onClick={ () => handleSelectionChange('firstTime',false)}
                                type = {`${!selection.firstTime ? "filled" : "outlined"}`}
                                large = "small"
                              >
                                No
                              </BotonInput>
                              </div>
                            </div>
                            {
                              (!selection.firstTime && selection.haveChildren) &&
                              <div className="wrapper-checkbox">
                                <input
                                  type="checkbox"
                                  id="checkbox"
                                  className="box-children__checkbox"
                                  onChange={ handleMoreChildren }
                                  checked = { moreChildren}
                                />
                                <label
                                  htmlFor="checkbox"
                                  className="box-children__text"
                                ></label>
                                <label htmlFor="checkbox">Tengo más de un hijo.</label>
                              </div>
                            }
                          </div>
                      }
                    </div>
                    {
                      selection.firstTime && selection.haveChildren &&
                      <>
                          <div className="container-select">
                            <p>Fecha de nacimiento de tú bebé</p>
                            <div className="wrapper-date">
                              <div className="select-input">
                                <select placeholder="Mes">
                                  <option>Dia</option>
                                </select>
                              </div>
                              <div className="select-input">
                                <select placeholder="Dia">
                                  <option>Mes</option>
                                </select>
                              </div>
                              <div className="select-input">
                                <select placeholder="Año">
                                  <option>Año</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="wrapper-input">
                            <label>Sexo de tú bebé</label>
                            <div className="contenedor-buttons">
                              <BotonInput 
                                type={`${selection?.genderBaby === "girl" ? "filled" : "outlined"}`}
                                onClick={ () => handleSelectionChange('genderBaby','girl')}
                              >
                                Niña
                              </BotonInput>
                              <BotonInput 
                                type={`${selection?.genderBaby === "boy" ? "filled" : "outlined"}`}
                                onClick={ () => handleSelectionChange('genderBaby','boy')}
                              >
                                Niño
                              </BotonInput>
                            </div>
                          </div>

                          {/* <div className="wrapper-input">
                            <label>¿Quieres compartir tu perfil con alguien?</label>
                            <div className="contenedor-buttons">
                              <BotonInput type="outlined">No</BotonInput>
                              <BotonInput type="filled">Si</BotonInput>
                            </div>
                          </div>
                          <div className="wrapper-input">
                            <label htmlFor="email_2">
                              Ingresa su dirección de correo electrónico
                            </label>
                            <input type="email" id="email_2" name="email_2" />
                          </div> */}
                      </>
                    }
                    {/* Control - class : opacity y disabled */}
                  </form>
                  <hr />
                </div>
                <div className="container-save">
                  <div className="btn-save">
                    <CustomButton fxClick={handleSubmit(submitForm)}>Guardar</CustomButton>
                  </div>
                  <div className="btn-cancel">
                    <CustomButton outline>Cancelar</CustomButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          /*RESET*/
          /********/
          input {
            text-align: left !important;
          }
          input::placeholder {
            background: none;
          }
          input:focus {
            outline: none;
            box-shadow: none;
          }
          .code-picker {
            width: 100%;
            padding: 0;
            border-radius:15px;
            color: #575756;
          }
          /**GLOBALS */
          p {
            margin: 0;
          }
          .ft-m-heavy {
            font-family: "mont-heavy" !important;
            font-weight: 800;
          }
          .ft-m-600 {
            font-family: "mont-semibold" !important;
            font-weight: 600;
          }
          .ft-m-regular {
            font-family: "mont-regular" !important;
          }
          .ft-m-light {
            font-family: "mont-light" !important;
          }
          .contenedor {
            padding: 10rem 1rem;
            margin: 0 1rem;
          }

          /**about de la cuenta */

          .about-account {
            margin: 1rem 0 0 0;
            display: flex;
            align-items: center;
          }
          .about-account p {
            font-size: 1.3rem;
            color: #575650;
          }
          .icon-pencil {
            margin-left: 1rem;
            margin-top: -2.5px;
          }

          /*Form */
          .container-form {
            width: 85%;
            background: #ffffff;
            border-radius: 20px;
            padding: 2rem 0.5rem 0 0.5rem;
          }
          .container-form hr {
            width: 100%;
            display: none;
          }
          .wrapper-input {
            display: flex;
            flex-direction: column;
            margin-bottom: 2.5rem;
          }
          .wrapper-input label {
            font-family: "mont-light" !important;
            color: #575650;
            opacity: 0.8;
            font-size: 1.3rem;
            margin-bottom: 0.4rem;
          }
          .wrapper-input input {
            border: none;
            border-bottom: 1px solid #dadada;
            padding: 0.1rem 0.3rem;
            font-family: "mont-regular" !important;
            font-weight: 600;
            color: #575756;
            font-size: 1.3rem;
            margin-top: 0.5rem;
          }
          .contenedor-buttons {
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin-top: 0.4rem;
          }
          .wrapper-checkbox {
            display: flex;
            align-items: center;
          }
          .box-children__checkbox{
            height:2.4rem;
            width:2.4rem;
            border: 2px solid #575756;
            position:absolute;
            padding:0;
            display:none;
            overflow:hidden;
          }
          .box-children__text:before{
            content:"";
            display:inline-block;
            width:22px;
            height:22px;
            border: 2px solid #575756;
            border-radius: 5px;
            line-height: 24px;
            vertical-align: text-top;
            cursor:pointer;
          }
          .box-children__checkbox:checked + .box-children__text:before{
            border: 2px solid #f22c74;
            background: url("/image/icon/check-pink.svg") center/16px no-repeat;
          }
          .wrapper-checkbox label {
            margin-bottom: 0;
            margin-left: 0.5rem;
            font-family: "mont-light" !important;
            font-size: 1.1rem;
            color: #575650;
            mix-blend-mode: normal;
            opacity: 0.8;
          }

          .flex-country {
            display: flex;
          }
          .country {
            width: 4rem;
            margin-right: 1rem;
          }
          .phone {
            flex-grow: 1;
          }
          /**SELECT */
          .container-select {
            margin: 2.5rem 0;
            display: flex;
            flex-direction: column;
          }
          .container-select p {
            margin: 0;
            font-family: "mont-light" !important;
            font-size: 1.3rem;
            font-weight: 300;
            color: #575650;
            opacity: 0.8;
          }
          .select-input select {
            width: 100%;
            color: rgba(87,86,80,1);
            border: 1px solid #DADADA;
            box-sizing: border-box;
            border-radius: 10px;
            outline: none;
            font-family: "mont-light" !important;
            font-size: 1.3rem;
            padding: 1rem;
            margin: 0.5rem 0;
            /** */
            background: url("https://i.ibb.co/Hz6T04Y/image.png")
              no-repeat right #ffffff;
            -webkit-appearance: none;
            background-size:1.25rem;
            -moz-appearance: none;
            appearance: none;
            background-position-x: 87.5%;
          }
          /**FECHAS */
          .wrapper-date {
            margin-top: 0.5rem;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
          }
          .wrapper-date .select-input {
            flex-basis: calc(50% - 1rem);
          }
          /**SAVE */
          .container-save {
            margin-top: 4rem;
          }
          /********Bloquear******/
          .opacity {
            opacity: 0.5;
          }
          .phone-container {
            border-radius: 0;
            border-bottom: 1px solid #dadada;
          }

          @media (min-width: 480px) and (max-width: 767px) {
            .container-contenido {
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .all-content {
              width: 45rem;
            }
            .phone-container {
              border-radius: 0;
              border-bottom: 1px solid #dadada;
            }
          }

          @media (min-width: 768px) {
            :global(.phone-container .react-tel-input .form-control){
              font-family:"mont-regular"!important;
              font-size:1.4rem!important;
              color :#556ea1!important;
            }
            .contenedor {
              padding: 8rem 0 12rem 0;
            }
            .show {
              display: none;
            }
            .container-form {
              width: 95%;
            }
            .container-form hr {
              width: 100%;
              display: flex;
              margin-top: 4.5rem;
            }
            .contenedor-flex {
              display: flex;
              padding: 0 2rem;
            }
            hr {
              margin-left: 0;
              margin-right: 0;
            }
            .flex-left {
              flex-basis: 20%;
            }
            .flex-right {
              margin-left: 5rem;
              flex-basis: 70%;
            }
            .wrapper-input input {
              width: 35rem;
              background: #ffffff;
              border: 1px solid #556ea1;
              box-sizing: border-box;
              border-radius: 15px;
              font-size: 1.4rem;
              padding: 1rem 1.5rem;
              color: #556ea1;
            }
            .contenedor-buttons {
              justify-content: flex-start;
            }
            .wrapper-date {
              justify-content: flex-start;
            }
            .wrapper-date .select-input {
              max-width: 15rem;
              margin-right: 1rem;
            }

            .change-color {
              font-family: "mont-regular" !important;
              opacity: 1 !important;
              color: #5a5a5a !important;
            }
            :global(.code-picker) {
              width: 35rem;
            }
            .container-save {
              display: flex;
              justify-content: center;
            }
            .btn-save,
            .btn-cancel {
              margin-bottom: 1rem;
            }
            .phone-container {
              width: 35rem;
              border-radius: 15px;
              border: 1px solid #556ea1;
              padding: 1px;
            }
          }

          @media (min-width: 1024px) {
            .contenedor-flex {
              justify-content: flex-start;
              padding: 0 3rem;
            }
            .container-form hr {
              width: 100%;
              display: flex;
              margin-top: 6.2rem;
            }
            .flex-right {
              flex-basis: 60%;
            }
            .flex-desktop {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
            }
            .wrapper-input input,
            .w-28r {
              width: 28rem;
            }
            .container-save {
              width: 95%;
              flex-direction: row-reverse;
              justify-content: flex-start;
            }
            .phone-container {
              width: 28rem;
              border-radius: 20px;
              border: 1px solid #556ea1;
            }
          }
          @media (min-width: 1280px) {
            .contenedor-flex {
              padding: 0 6rem;
            }
            .container-form hr {
              width: 100%;
              display: flex;
              margin-top: 6.2rem;
            }
            .flex-right {
              flex-basis: 60%;
            }
            .wrapper-checkbox label {
              font-size: 1.3rem;
            }
            .wrapper-input input {
              font-size: 1.6rem;
            }
            .wrapper-date .select-input {
              max-width: 14rem;
            }
            .phone-container {
              border-radius: 20px;
              border: 1px solid #556ea1;
            }
          }
        `}
      </style>
    </AppLayout>
  );
};

export default index;
