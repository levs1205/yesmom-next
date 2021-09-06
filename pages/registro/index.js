import AppLayout from "../../components/AppLayout";
import Head from 'next/head';
import Link from "next/link";
import BotonInput from "../../components/Registro/BotonInput";

/**PHONEINPUT */
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/bootstrap.css'
import CustomButton from "../../components/Perfil/CustomButton";
/** */

//Validacion
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";

const schemaValidator = yup.object().shape({
  fullname : yup.string().required('Nombres y apellidos son requeridos'),
  email : yup.string().email().required('Correo electrónico es requerido'),
  password: yup.string().required('Contraseña es requerida').min(5,'La contraseña debe tener al menos 5 caracteres'),

})

const index = () => {

  const { register , handleSubmit , formState : { errors} } = useForm({
    resolver : yupResolver(schemaValidator)
  });

  console.log(errors);
  const submitForm = ( values ) => {
    console.log(values);
    console.log(errors);
  }
  return (
    <AppLayout>
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
                <p className="text-second">¡Tranquil@! Crear una cuenta en Yes Mom es gratis y toma menos de un minuto</p>
              </div>
            </div>
            <div className="container-form">
              <form
                onSubmit = { handleSubmit(submitForm) }
              >
                <div className="wrapper-input">
                  <label htmlFor="fullname" >Nombre y Apellido:</label>
                  <input 
                    type="text" 
                    id="fullname" 
                    name="fullname"  
                    {...register('fullname')}
                    />
                </div>

                <div className="wrapper-input">
                  <label htmlFor="email" >Dirección de correo electrónico:</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    {...register('email')}
                  />
                </div>

                <div className="wrapper-input password">
                  <label htmlFor="password" >Contraseña:</label>
                  <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    {...register('password')}
                  />
                  <div className="eye-icon">
                    <img src="/image/login/eye-login.svg" />
                  </div>
                </div>

                {/* Country code picker */}

                <div className="wrapper-input" >
                  <label className="mb-4">Número de teléfono:</label>
                  <div className="phone-container">
                    <PhoneInput
                      countryCodeEditable={false}
                      country="pe"
                      value={"51933475707"}
                      containerClass="class-contain"
                      inputClass="code-picker"
                      buttonClass='button-class'
                      dropdownClass='dropdown-class'
                      searchClass='search-class'
                      fullWidth={true}
                      inputStyle={
                        {
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
                        }
                      }
                    />
                  </div>
                </div>

                <div className="wrapper-input">
                  <label>¿Tienes hijos?</label>
                  <div className="contenedor-buttons">
                    <BotonInput type="filled">
                      Si
                    </BotonInput>
                    <BotonInput type="outlined">
                      No
                    </BotonInput>
                  </div>
                </div>

                <div className="wrapper-input">
                  <label>¿Eres primeriza?</label>
                  <div className="contenedor-buttons">
                    <BotonInput type="outlined">
                      Si
                    </BotonInput>
                    <BotonInput type="filled">
                      No
                    </BotonInput>
                  </div>
                </div>

                <div className="wrapper-checkbox">
                  <input type="checkbox" id="checkbox" />
                  <label htmlFor="checkbox">Tengo más de un hijo.</label>
                </div>


                {/* Control - class : opacity y disabled */}
                <div className="opacity">

                  <div className="container-select">
                    <p>Fecha de nacimiento de tú bebé</p>
                    <div className="wrapper-date">
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
                    </div>
                  </div>
                  <div className="wrapper-input">
                    <label>Sexo de tú bebé</label>
                    <div className="contenedor-buttons">
                      <BotonInput type="outlined">
                        Niña
                      </BotonInput>
                      <BotonInput type="filled">
                        Niño
                      </BotonInput>
                    </div>
                  </div>

                  <div className="wrapper-input">
                    <label>¿Quieres compartir tu perfil con alguien?</label>
                    <div className="contenedor-buttons">
                      <BotonInput type="outlined">
                        No
                      </BotonInput>
                      <BotonInput type="filled">
                        Si
                      </BotonInput>
                    </div>
                  </div>
                  <div className="wrapper-input">
                    <label htmlFor="email_2">Ingresa su dirección de correo electrónico</label>
                    <input type="email" id="email_2" name="email_2" />
                  </div>
                </div>

              </form>
            </div>

            <div className="contenedor-cuenta">
              <CustomButton fxClick={ handleSubmit ( submitForm)}>
                Crear cuenta
              </CustomButton>
              <p className="terminos">¡Al hacer clic en crear cuenta! aceptas los
                <span> términos de uso y la política de privacidad </span>
                de Yes Mom.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
                    /*RESET*/
                    /********/
                    input{
                        text-align:left!important;
                    }
                    input:focus{
                        outline:none;
                        box-shadow:none;
                    }
                    input::placeholder{
                        background:none;
                    }
                    input:focus{
                        outline:none;
                    }

                    .container-text{
                        margin:0 2rem;
                    }
                    .contenedor{
                        padding:8rem 1rem 14rem 1rem;
                        margin:0 1rem;
                    }
                    .container-contenido{
                        display:flex;
                        justify-content:center;
                        align-items:center;
                    }
                    .container-text{
                        text-align:center;
                    }
                    .text-create{
                        margin:0 0.2rem;
                        font-family:"mont-regular"!important;
                        color: #EC668D;
                        font-weight:600;
                        font-size:2rem;
                    }
                    .text-second{
                        font-family:"mont-regular"!important;
                        color: #5A5A5A;
                        font-weight:600;
                        font-size:1.3rem;
                    }
                    .container-form{
                        background: #FFFFFF;
                        border: 10px solid #FFFFFF;
                        box-shadow: 0px 0px 33px rgba(0, 0, 0, 0.13);
                        border-radius: 20px;
                        padding:2rem 0.5rem;
                        margin-bottom:3rem;
                    }
                    .wrapper-input{
                        position:relative;
                        display:flex;
                        flex-direction:column;
                        margin-bottom:1.5rem;
                    }
                    .wrapper-input label{
                        font-family:"mont-light"!important;
                        color: #575650;
                        opacity: 0.8;
                        font-size:1.3rem;
                        margin-bottom:0.4rem;
                        
                    }
                    .wrapper-input input{
                        border:none;
                        border-bottom:1px solid #DADADA;
                        padding:0.1rem 0.3rem;
                        font-family:"mont-regular"!important;
                        font-weight:600;
                        color:#575756;
                        font-size:1.3rem;
                        margin-top:0.5rem;
                    }
                    /*Solo para el password */
                    .password{
                        position:relative;
                    }

                    .eye-icon{
                        cursor:pointer;
                        position:absolute;
                        right:1rem;
                        bottom:0.5rem;
                    }
                    .contenedor-buttons{
                        width:100%;
                        display:flex;
                        justify-content:space-between;
                        margin-top:0.4rem;
                    }
                    .wrapper-checkbox{
                        display:flex;
                        align-items:center;
                    }
                    .wrapper-checkbox input{
                        height:24px;
                        width:24px;
                    }
                    .wrapper-checkbox label{
                        margin-bottom:0;
                        margin-left:0.5rem;
                        font-family: "mont-light"!important;
                        font-size:1.1rem;
                        color: #575650;
                        mix-blend-mode: normal;
                        opacity: 0.8;
                    }

                    .terminos{
                        text-align:center;
                        margin:1rem 0;
                        font-family:"mont-light"!important;
                        font-size:1.3rem;
                        font-weight:300;
                    }
                    .terminos span{
                        color:#556EA1;
                    }
                    .flex-country{
                        display:flex;
                    }
                    .country{
                        width:4rem;
                        margin-right:1rem;
                    }
                    :global(.code-picker){
                        width:100%!important;
                    }
                    
                    .phone{
                        flex-grow:1;
                    }
                    .container-select{
                        margin:1rem 0;
                        display:flex;
                        flex-direction:column;
                    }
                    .container-select p{
                        margin:0;
                        font-family:"mont-light"!important;
                        font-size:1.3rem;
                        font-weight:300;
                    }

                    .wrapper-date{
                        margin-top:0.5rem;
                        display:flex;
                        justify-content:space-between;
                        flex-wrap:wrap;
                    }
                    .wrapper-date .select-input{
                        flex-basis:calc( 50% - 1rem);
                    }
                    .select-input select{
                        width:100%;
                        height: 38px;
                        border: 1px solid #575756;
                        box-sizing: border-box;
                        border-radius: 10px;
                        outline:none;
                        font-family:"mont-light"!important;
                        font-size:1.3rem;
                        padding:0.5rem 0.8rem;
                        margin:0.5rem 0;
                        /** */
                        background: url("http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png") no-repeat right #ffffff;
                        -webkit-appearance: none;
                        -moz-appearance:    none;
                        appearance:         none;
                        background-position-x: 90%;
                    }
                    .phone-container{
                      border-radius: 0;
                      border-bottom: 1px solid #DADADA;
                    }
                    /********Bloquear******/
                    .opacity{
                        opacity:0.5;
                    }
                    @media(min-width:480px){
                        .all-content{
                            width:45rem;
                        }
                        .phone-container{
                          border-radius: 0;
                          border-bottom: 1px solid #DADADA;
                        }
                    }
                    @media (min-width:768px){
                        .all-content{
                          width: 50rem;
                        }

                        .text-create{
                            font-family:"omnes-regular"!important;
                            color:#DC6A8D;
                            font-size:2rem;
                        }
                        .text-second{
                            padding: 0 1rem;
                            font-size:1.5rem;
                        }
                        .container-form{
                            padding-top:2rem;
                            padding-right:3.5rem;
                            padding-left:3.5rem;
                        }
                        .wrapper-input input{
                            border: 1px solid rgba(85, 110, 161, 1);
                            box-sizing: border-box;
                            border-radius: 15px;
                            font-size:1.75rem;
                            opacity:0.8;
                            padding:0.5rem 1rem;
                            margin-top:0.5rem;
                        }
                        .wrapper-checkbox label{
                            font-size:1.3rem;
                        }
                        .eye-icon{
                            right:1.4rem;
                            bottom:1.3rem;
                        }
                        .contenedor-buttons{
                            justify-content:flex-start;
                        }
                        .wrapper-date .select-input{
                            flex-basis: calc(33.3% - 1rem);
                        }
                        .select-input{
                            margin-right:0.5rem;
                        }
                        .select-input select{
                            font-size:1.1rem;
                            border-radius:15px;
                        }
                        .container-select p{
                            font-size:1.3rem
                        }
                        .contenedor-cuenta{
                            margin: 0 4rem;
                        }

                        .terminos{
                            font-size:1.2rem;
                        }
                        :global(.code-picker){
                            width:100%!important;
                        }
                        :global(.code-picker:focus){
                          outline: none;
                      }
                        input:focus{
                          outline: none;
                      }
                        .phone-container{
                          border-radius: 15px;
                          border: 1px solid #556EA1;
                        }
                    }
                    @media (min-width:1024px){
                        .contenedor-cuenta{
                            margin: 0 5rem;
                        }
                        .all-content{
                          width:55rem;
                        }
                        .select-input select{
                            font-size:1.3rem;
                            padding-top:1rem;
                            padding-bottom:1rem;
                        }
                        .text-create{
                          font-size:2.3rem;
                        }
                        .terminos{
                            font-size:1.3rem;
                        }
                        :global(.code-picker){
                            width:100%!important;
                        }
                        .phone-container{
                          border-radius: 15px;
                          border: 1px solid #556EA1;
                        }
                    }

                    @media (min-width:1280px){
                        .contenedor-cuenta{
                            margin: 0 8rem;
                        }
                        .text-create{
                            font-size:2.5rem;
                        }
                        
                        .wrapper-checkbox label{
                            font-size:1.4rem;
                        }

                        .terminos{
                            font-size:1.5rem;
                        }
                        :global(.code-picker){
                          width:100%!important;
                      }
                      .phone-container{
                        border-radius: 15px;
                        border: 1px solid #556EA1;
                      }
                  } 
              `}
      </style>
    </AppLayout>
  );
}

export default index;