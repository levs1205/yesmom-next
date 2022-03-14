import { useState , useContext , useEffect , useRef} from "react";

import AppLayout from "../../components/AppLayout";
import Head from "next/head";
import BotonInput from "../../components/Registro/BotonInput";

/**PHONEINPUT */
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import CustomButton from "../../components/Perfil/CustomButton";
/** */
/* DATE INPUT */
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";
// import DatePicker from "react-date-picker/dist/entry.nostyle";
//Validacion
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import YesmomContext from "../../context/Context";
import LoaderPage from "../../components/LoaderPage";
import { getAccess } from "../../helpers/getAccess";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schemaValidator = yup.object().shape({
  fullname : yup.string('*Nombres incorrectos').required('*Nombres y apellidos son requeridos'),
  principalEmail : yup.string().email('*Ingresa un correo válido').required('*Correo electrónico es requerido'),
  password: yup.string().required('*Contraseña es requerida').min(5,'*La contraseña debe tener al menos 5 caracteres'),
  phone : yup.string().matches(phoneRegExp, '*Número de teléfono no es válido'),
})



// import DatePicker from "react-date-picker";

const index = () => {

  const { auth : { logged } , client : { isRegistering}} = useContext(YesmomContext);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue
  } = useForm({
    resolver: yupResolver(schemaValidator),
  });

  // const email = watch('principalEmail');

  // useEffect(()=>{
  //   if(email){
  //     setValue('principalEmail',email.toLowerCase());
  //   }
  // },[email])

  //Botones de selección
  const initialSelection = {
    haveChildren  : false,
    firstTime : false,
  }

  const [ selection , setSelection ] = useState(initialSelection);

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

    //Actualizar el mas de un hijo
    if( name==="firstTime"){
      if(value){
        setMoreChildren(false);
      }else{
        setMoreChildren(true);
      }
    }
  }

  /* Mas de un hijo*/

  const handleMoreChildren = () => {
    setMoreChildren(!moreChildren);
  }

  const handleRef = () => {
    const type = document.getElementById("password").type;
    type === "password"
      ? (document.getElementById("password").type = "text")
      : (document.getElementById("password").type = "password");
  };

  /* console.log(errors); */
  const submitForm = (values , muah) => {
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
      formValues.firstTime = false;
      delete formValues.genderBaby;
    }
    if(!formValues.fechaNacimiento){
      delete formValues.fechaNacimiento
    }

    formValues.type = 'U';
    const {principalEmail} = formValues;
    const username = principalEmail.toLowerCase().split('@')[0];
    formValues.username = username;
   
    // startRegisterClient(formValues);
  };


  return (
    <AppLayout>
      {
        isRegistering &&<LoaderPage type="over"/>
      }
      <Head>
        <title>YesMom - Registro</title>
        <meta name="description" content="YesMom es ..."></meta>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="YesMom - Registro" />
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
        <meta name="twitter:title" content="YesMom - Registro" />
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
      <div className="contenedor">
        <div className="container-contenido">
          <div className="all-content">
            <div className="container-text">
              <p className="text-create">Crea una cuenta</p>
              <div>
                <p className="text-second">
                  ¡Tranquil@! Crear una cuenta en Yes Mom es gratis y toma menos
                  de un minuto
                </p>
              </div>
            </div>
            <div className="container-form">
              <form onSubmit={handleSubmit(submitForm)}>
                <div className="wrapper-input">
                  <label htmlFor="fullname">Nombre y Apellido:</label>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    {...register("fullname")}
                  />
                </div>
                <p className="error-input">{errors?.fullname?.message}</p>

                <div className="wrapper-input">
                  <label htmlFor="email">
                    Dirección de correo electrónico:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    {...register("principalEmail")}
                  />
                </div>
                <p className="error-input">{errors?.principalEmail?.message}</p>

                <div className="wrapper-input password">
                  <label htmlFor="password">Contraseña:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    {...register("password")}
                  />

                  <div className="eye-icon" onClick={handleRef}>
                    <img className="show-desktop" src="/image/login/eye-login.svg" />
                    <img className ="hide-desktop" src="/image/login/eye-reset.svg" />
                  </div>
                </div>
                <p className="error-input">{errors?.password?.message}</p>

                {/* Country code picker */}

                <div className="wrapper-input">
                  <label className="mb-4">Número de teléfono:</label>
                  <div className="phone-container">
                   <Controller
                    name="phone"
                    defaultValue=""
                    control ={ control}
                    render={
                      ({field}) => <PhoneInput
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
                        textAlign: "left",
                        borderRadius: "15px",
                        color: "#575650",
                        opacity: 0.8,
                        fontFamily: "Mont-regular",
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: "13px",
                        margin: 0,
                        border: 0,
                        outline: 0,
                      }}
                      
                      /* {...register('phone')} */
                    />
                    }
                   />
                  </div>
                </div>
                <p className="error-input">{errors?.phone?.message}</p>
                
                <div className="wrapper-input">
                  <label>¿Tienes hijos?</label>
                  <div className="contenedor-buttons">
                      <BotonInput 
                        onClick = {() => handleSelectionChange('haveChildren',true)}
                        type = {`${selection.haveChildren ? "filled" : "outlined"}`}
                      >
                        Si
                      </BotonInput>
                      <BotonInput 
                        onClick= {() => handleSelectionChange('haveChildren',false)}
                        type = {`${!selection.haveChildren ? "filled" : "outlined"}`}
                      >
                        No
                      </BotonInput>
                  </div>
                </div>
                {
                  selection.haveChildren &&

                  <div className="wrapper-input">
                    <label>¿Eres primeriza?</label>
                    <div className="contenedor-buttons">
                      <BotonInput 
                        onClick={ () => handleSelectionChange('firstTime',true)}
                        type = {`${selection.firstTime ? "filled" : "outlined"}`}
                      >
                        Si
                      </BotonInput>
                      <BotonInput 
                        onClick={ () => handleSelectionChange('firstTime',false)}
                        type = {`${!selection.firstTime ? "filled" : "outlined"}`}
                      >
                        No
                      </BotonInput>
                    </div>
                  </div>
                }
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
                {
                  selection.firstTime && selection.haveChildren &&
                  <>

                    {/* Control - class : opacity y disabled */}
                      <div className="container-select">
                        <p>Fecha de nacimiento de tú bebé</p>

                        {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                        <input type="date" />
                        {/* <Controller
                            name='fechaNacimiento'
                            control = { control }
                            render={({ field }) => <DatePicker maxDate={new Date()} {...field} />}
                        /> */}
                        {/* <div className="wrapper-date">
                          <div className="select-input">
                            <select placeholder="Mes">
                              <option>Mes</option>
                            </select>
                          </div>
                          <div className="select-input">
                            <select placeholder="Dia">
                              <option>Dia</option>
                            </select>
                          </div>
                          <div className="select-input">
                            <select placeholder="Año">
                              <option>Año</option>
                            </select>
                          </div>
                        </div> */}
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
              </form>
            </div>

            <div className="contenedor-cuenta">
              <CustomButton fxClick={handleSubmit(submitForm)}>
                Crear cuenta
              </CustomButton>
              <p className="terminos">
                ¡Al hacer clic en crear cuenta! aceptas los
                <span> términos de uso y la política de privacidad </span>
                de Yes Mom.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`

          :global(.react-date-picker){
            font-size : 1.4rem;
            font-family : "mont-regular";
          }
          :global(.react-date-picker input::placeholder){
            background-image : none;
          }
          :global(.react-date-picker__wrapper){
            border: none;
            border-bottom: 1px solid #dadada;
            padding : 0.5rem;
          }

          :global(.react-date-picker__inputGroup__input){
            color : #556ea1;
            
          }
          /*RESET*/
          .show-desktop{
            display:none;
          }
          /********/
          input {
            text-align: left !important;
          }
          input:focus , :global(.form-control:focus){
            outline: none;
            box-shadow: none!important;
          }
          input::placeholder {
            background: none;
          }

          .container-text {
            margin: 0 2rem;
          }
          .contenedor {
            padding: 8rem 1rem 14rem 1rem;
            margin: 0 1rem;
          }
          .container-contenido {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .container-text {
            text-align: center;
          }
          .text-create {
            margin: 0 0.2rem;
            font-family: "mont-regular" !important;
            color: #ec668d;
            font-weight: 600;
            font-size: 2rem;
          }
          .text-second {
            font-family: "mont-regular" !important;
            color: #5a5a5a;
            font-weight: 600;
            font-size: 1.3rem;
          }
          .container-form {
            background: #ffffff;
            border: 10px solid #ffffff;
            box-shadow: 0px 0px 33px rgba(0, 0, 0, 0.13);
            border-radius: 20px;
            padding: 2rem 0.5rem;
            margin-bottom: 3rem;
          }
          .wrapper-input {
            position: relative;
            display: flex;
            flex-direction: column;
            margin-bottom: 1.5rem;
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
          /*Solo para el password */
          .password {
            position: relative;
          }

          .eye-icon {
            cursor: pointer;
            position: absolute;
            right: 1rem;
            bottom: 0.5rem;
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

          .terminos {
            text-align: center;
            margin: 1rem 0;
            font-family: "mont-light" !important;
            font-size: 1.3rem;
            font-weight: 300;
          }
          .terminos span {
            color: #556ea1;
          }
          .flex-country {
            display: flex;
          }
          .country {
            width: 4rem;
            margin-right: 1rem;
          }
          :global(.code-picker) {
            width: 100% !important;
          }

          .phone {
            flex-grow: 1;
          }
          .container-select {
            margin: 1rem 0;
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

          .wrapper-date {
            margin-top: 0.5rem;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
          }
          .wrapper-date .select-input {
            flex-basis: calc(50% - 1rem);
          }
          .select-input select {
            width: 100%;
            height: 38px;
            color: rgba(87, 86, 80, 1);
            border: 1px solid #DADADA;
            box-sizing: border-box;
            border-radius: 10px;
            outline: none;
            font-family: "mont-light" !important;
            font-size: 1.3rem;
            padding: 0.5rem 0.8rem;
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
          .phone-container {
            border-radius: 0;
            border-bottom: 1px solid #dadada;
          }
          /********Bloquear******/
          .opacity {
            opacity: 0.5;
          }

          .error-input{
              height:1.5rem;
              margin-top:-1rem;
              margin-bottom:1rem;
              font-family:"mont-bold";
              font-size:1.2rem;
              color:#ff0033;
          }

          {/* POPUP registro */}

          :global(.register-error-popup){
            margin-top: 0!important;
            border : 2px solid #DC6A8D;
            border-radius : 20px;
            padding : 2rem 0;
            border-style : dashed;
            height:20rem!important;
          }

          :global(.register-error-container){
            font-family : "mont-regular";
            font-size : 1.3rem;
            color : #575650;

            display:flex!important;
            justify-content:center!important;
            align-items:center!important;
          }

          :global(.register-error-actions){
            margin-top:0!important;
          }

          @media (min-width: 480px) {
            .all-content {
              width: 45rem;
            }
            .phone-container {
              border-radius: 0;
              border-bottom: 1px solid #dadada;
            }
          }
          @media (min-width: 768px) {
            :global(.react-date-picker__wrapper){
              border: 1px solid #556ea1;
              border-radius : 10px;
            }
            .show-desktop{
              display:block;
            }
            .hide-desktop{
              display:none;
            }
            .all-content {
              width: 50rem;
            }

            .text-create {
              font-family: "omnes-regular" !important;
              color: #dc6a8d;
              font-size: 2rem;
            }
            .text-second {
              padding: 0 1rem;
              font-size: 1.5rem;
            }
            .container-form {
              padding-top: 2rem;
              padding-right: 3.5rem;
              padding-left: 3.5rem;
            }
            .wrapper-input input {
              border: 1px solid #556EA1;
              box-sizing: border-box;
              border-radius: 10px;
              opacity: 0.8;
              padding: 0.8rem 1rem;
              margin-top: 0.5rem;
              font-size:1.3rem;
            }
            .wrapper-checkbox label {
              font-size: 1.3rem;
            }
            .eye-icon {
              right: 1.4rem;
              bottom: 1.3rem;
            }
            .contenedor-buttons {
              justify-content: flex-start;
            }
            .wrapper-date .select-input {
              flex-basis: calc(33.3% - 1rem);
            }
            .select-input {
              margin-right: 0.5rem;
            }
            .select-input select {
              font-size: 1.1rem;
              border-radius: 15px;
            }
            .container-select p {
              font-size: 1.3rem;
            }
            .contenedor-cuenta {
              margin: 0 4rem;
            }

            .terminos {
              font-size: 1.2rem;
            }
            :global(.code-picker) {
              width: 100% !important;
            }
            :global(.code-picker:focus) {
              outline: none;
            }
            input:focus {
              outline: none;
            }
            .phone-container {
              border-radius: 10px;
              border: 1px solid #556ea1;
            }

            :global(.register-error-popup){
              width: 40rem!important;
              height : 18rem!important;
            }
          }
          @media (min-width: 1024px) {
            .contenedor-cuenta {
              margin: 0 5rem;
            }
            .all-content {
              width: 55rem;
            }
            .select-input select {
              font-size: 1.3rem;
              padding-top: 1rem;
              padding-bottom: 1rem;
            }
            .text-create {
              font-size: 2.3rem;
            }
            .terminos {
              font-size: 1.3rem;
            }
            :global(.code-picker) {
              width: 100% !important;
            }
          }

          @media (min-width: 1280px) {
            .contenedor-cuenta {
              margin: 0 8rem;
            }
            .text-create {
              font-size: 2.5rem;
            }

            .wrapper-checkbox label {
              font-size: 1.4rem;
            }
          }
        `}
      </style>
    </AppLayout>
  );
};

export default index;

export const getServerSideProps = async ({ req , resolvedUrl}) => {
  const token = req?.cookies?.TokenTest;
  
  const cleanUrl = req.url.split("?")[0];
  // console.log(req.url);
  const resp = await getAccess(cleanUrl , token );

  return resp;

}
