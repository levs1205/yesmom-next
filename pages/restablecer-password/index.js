import { useContext, useRef, useState , useEffect} from "react";
import AppLayout from "../../components/AppLayout";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import LoaderPage from "../../components/LoaderPage";
import YesmomContext from "../../context/Context";

const schemaValidator = yup.object().shape({
  password:  yup.string().required('*Contraseña es requerida').min(5,'*La contraseña debe tener como mínimo 5 caracteres'),
  password_2: yup.string().oneOf([yup.ref('password'),null], '*Las contraseñas no coinciden'),
})
const ResetPassword = () => {


  const {  auth : { logged } } = useContext(YesmomContext);
  const [ loading , setLoading ] = useState(true);
  const flagRef = useRef(true);
  const router = useRouter();

  const { register , formState: { errors } , handleSubmit } = useForm({
    resolver : yupResolver(schemaValidator)
  });

  const handleResetPassword = (data) => {
    console.log('oksss');
  };

  const handleShow = (id) => {
    const type = document.getElementById(id).type;
    type === "password"
      ? (document.getElementById(id).type = "text")
      : (document.getElementById(id).type = "password");
  };

  //Redirigir
useEffect(()=>{
  if(logged){
    router.push('/');
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
        <title>YesMom - Restablecer contraseña</title>
        <meta name="description" content="YesMom es ..."></meta>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="YesMom - Restablecer contraseña" />
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
        <meta name="twitter:title" content="YesMom - Restablecer-contraseña" />
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
            <div className="center">
              <img src="/image/login/icon-user.svg" alt="user-yesmom" />
            </div>
            <div className="container-center">
              <div className="container-text">
                <p className="forgot-password">¿Olvidaste tu contraseña?</p>
                <p className="texto">
                  Este es el último paso para que <br /> restablecer tu
                  contraseña
                </p>
              </div>
              <div className="container-form">
                <form
                  onSubmit={handleSubmit(handleResetPassword)}
                >
                  <div className="wrapper-input">
                    <label htmlFor="password">
                      Por favor ingresa una nueva contraseña
                    </label>
                    <input
                      className="color-input"
                      placeholder="Ingresar contraseña"
                      type="password"
                      id="password"
                      name="password"
                      {...register('password')}
                    />
                    <div
                      className="eye-icon"
                      onClick={() => handleShow('password')}
                    >
                      <img className="show" src="/image/login/eye-reset.svg" alt="eye-icon" />
                      <img className="hide" src="/image/login/eye-login.svg" alt="eye-icon" />
                    </div>
                  </div>
                  <p className="error-input">{errors?.password?.message}</p>
                  <div className="wrapper-input">
                    <input
                      className="color-input"
                      placeholder="Repetir contraseña"
                      type="password"
                      id="password_2"
                      name="password_2"
                      {...register('password_2')}
                    />
                    <div
                      className="eye-icon"
                      onClick={() => handleShow('password_2')}
                    >
                      <img className="show" src="/image/login/eye-reset.svg" alt="eye-icon" />
                      <img className="hide" src="/image/login/eye-login.svg" alt="eye-icon" />
                    </div>
                  </div>

                  <p className="error-input">{errors?.password_2?.message}</p>

                  <div className="boton pink" onClick={ handleSubmit(handleResetPassword)}>
                    <p className="show">Continuar</p>
                    <p className="hide">Confirmar contraseña</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hide {
            display: none;
          }
          input {
            text-align: left;
            border: none;
          }
          input:focus {
            outline: none;
            box-shadow: none;
          }
          input::placeholder {
            background: none;
            text-align: left;
            font-family: "mont-regular" !important;
            font-weight: 600;
            font-size: 0.6rem;
            color: #575756;
          }
          .center {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .contenedor {
            padding-top: 8rem;
            padding-bottom: 8rem;
            margin-left: 2.5rem;
            margin-right: 2.5rem;
            margin-top: 0;
          }
          /* .container-contenido{
                        display:flex;
                        justify-content:center;
                        align-items:center;
                    } */
          .container-text {
            text-align: center;
          }
          .forgot-password {
            margin: 0.2rem 0;
            font-family: "mont-regular" !important;
            color: #ec668d;
            font-weight: 600;
            font-size: 2rem;
          }

          .texto {
            text-align: center;
            margin: 0.2rem 0;
            font-family: "mont-regular" !important;
            color: #575650;
            font-weight: 500;
            font-size: 1.3rem;
          }
          .container-form {
            margin: 1.5rem 0;
            padding: 2rem 0.5rem;
            border: 10px solid #ffffff;
            box-shadow: 0px 0px 33px rgba(0, 0, 0, 0.13);
            border-radius: 20px;
          }
          .wrapper-input {
            position: relative;
            display: flex;
            flex-direction: column;
            margin-bottom: 4rem;
          }
          .eye-icon {
            cursor: pointer;
            position: absolute;
            right: 0.5rem;
            bottom: 0.6rem;
          }
          .wrapper-input label {
            font-family: "mont-light" !important;
            color: #575650;
            opacity: 0.8;
            font-size: 1.3rem;
            margin-bottom: 1rem;
          }
          .wrapper-input input {
            border: none;
            border-bottom: 1px solid #dadada;
            padding: 0.3rem;
            padding-bottom: 0.1rem;
            font-family: "mont-regular" !important;
            font-weight: 600;
            color: #575756;
            font-size: 1.3rem;
          }
          .wrapper-input input::placeholder {
            font-size: 1.3rem;
          }
          .boton {
            text-align: center;
            border-radius: 30px;
            padding: 0.5rem 0;
            margin-bottom: 1rem;
            cursor: pointer;
          }
          .boton p {
            font-family: "omnes-regular" !important;
            color: #ffffff;
            font-size: 2.3rem;
            margin: 0;
          }
          .pink {
            background-color: #ec608d;
          }
          .yellow {
            background-color: #febf41;
          }
          .error-input{
              min-height:1.5rem;
              margin-top:-3rem;
              margin-bottom:1rem;
              font-family:"mont-bold";
              font-size:1.2rem;
              color:#ff0033;
          }
          .error-input p{
            margin : 0;
          }
          @media (min-width: 480px) {
            .container-contenido {
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .all-content {
              width: 40rem;
            }
            .contenedor {
              padding-bottom: 6rem;
            }
            .container-form {
              padding: 1rem 0.5rem;
            }
            .boton {
              padding: 1rem 0;
            }

            .forgot-password {
              font-size: 2rem;
            }
            .wrapper-input label {
              font-size: 1.4rem;
            }
            .wrapper-input input {
              font-size: 1.4rem;
            }
          }

          @media (min-width: 768px) {
            .all-content {
              width: 40rem;
            }
            .show {
              display: none;
            }
            .hide {
              display: block;
            }
            .contenedor {
              padding-bottom: 10rem;
            }
            .container-form {
              padding: 4rem 4rem;
            }
            .wrapper-input input {
              border: 1px solid #556ea1;
              box-sizing: border-box;
              border-radius: 15px;
              padding: 1rem;
              font-family: "mont-regular" !important;
              color: #556ea1;
              font-size: 1.4rem;
            }
            .wrapper-input input::placeholder {
              font-size: 1.4rem;
              color: #556ea1;
            }
            .boton {
              border-radius: 15px;
              margin-top: 1rem;
              padding: 1.5rem 0;
            }
            .boton p {
              font-family: "omnes-bold" !important;
              font-size: 1.5rem;
            }
            .eye-icon {
              right: 2rem;
              bottom: 1.75rem;
            }
          }

          @media (min-width: 1024px) {
            .forgot-password {
              font-size: 3rem;
            }
            .wrapper-input label {
              font-size: 1.2rem;
            }
          }
          @media (min-width: 1280px) {
            .eye-icon {
              right: 1.25rem;
              bottom: 1.5rem;
            }
          }
        `}
      </style>
    </AppLayout>
  );
};

export default ResetPassword;
