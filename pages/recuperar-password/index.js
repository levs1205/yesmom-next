
import AppLayout from "../../components/AppLayout";
import Head from "next/head";
import { useForm } from "react-hook-form";

import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { getAccess } from "../../helpers/getAccess";
import { useState } from "react";
import LoaderPage from "../../components/LoaderPage";
import axios from "axios";
import Swal from "sweetalert2";

const schemaValidator = yup.object().shape({
  email : yup.string().email('*Ingresa un correo válido').required('*Correo es requerido')
})


const RecuperarPassword = () => {

  const [loading,setLoading] = useState(false);
  const { register , formState: { errors} , handleSubmit, reset} = useForm({
    resolver : yupResolver(schemaValidator)
  });


  const submitForm = async (values) => {
    try{
      setLoading(true);
      const { email } = values;
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_SECURITY}/users/reset`, { email } , {
          params : {
              userType : 'U'
          }
      });

      setLoading(false);

      if(data?.status === 'success'){
          reset();
          Swal.fire('Email enviado', 'Se ha enviado un email con instrucciones para restablecer la contraseña' , 'success');
      }else{
          Swal.fire('Error','Hubo un error' ,'error');
      }


    }catch(err){
        setLoading(false);
        if(err?.response?.data?.CodigoRespuesta === '34'){
            return Swal.fire('Correo no encontrado', 'El correo no se encuentra registrado' , 'info');
        }     
        console.log(err);
        Swal.fire('Error','Hubo un error' ,'error');
    }
  }

  return (
    <AppLayout>
      {
        loading && <LoaderPage type="over" />
      }
      <Head>
        <title>YesMom - Recuperar contraseña</title>
        <meta name="description" content="YesMom es ..."></meta>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="YesMom - Recuperar contraseña" />
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
        <meta name="twitter:title" content="YesMom - Recuperar_contraseña" />
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
              <img src="/image/login/icon-user.svg" />
            </div>
            <div className="container-center">
              <div className="container-text">
                <p className="forgot-password">¿Olvidaste tu contraseña?</p>
                <p className="text">
                  Te enviaremos un correo electrónico con los pasos a<br />{" "}
                  seguir para que puedas restablecer tu contraseña
                </p>
              </div>
              <div className="container-form">
                <form
                  /* onSubmit={ handleRecoverPassword } */
                  noValidate={true}
                  onSubmit={handleSubmit(submitForm)}
                >
                  <div className="wrapper-input">
                    <label htmlFor="email">
                      Por favor ingresa tu correo electronico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      {...register('email')}
                    />
                  </div>
                  <p className="error-input">{errors?.email?.message}</p>

                  {/* <Link href="/restablecer-password"> */}
                  <div className="boton pink" onClick={handleSubmit(submitForm)}>
                    <p>Continuar</p>
                  </div>
                  {/* </Link> */}
                  <a href="/login" className="link-cancelar">
                  <div className="boton yellow">
                    <p>Cancelar</p>
                  </div>
                  </a>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`

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
          }
          .link-cancelar{
            text-decoration:none
          }
          .center {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .contenedor {
            padding-top: 8rem;
            padding-bottom: 8rem;
            margin-left: 2rem;
            margin-right: 2rem;
            margin-top: 0;
          }
          .container-contenido {
            display: flex;
            justify-content: center;
            align-items: center;
          }
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
          .text {
            margin: 0.2rem 0;
            font-family: "mont-regular" !important;
            color: #575650;
            font-weight: 500;
            font-size: 1.3rem;
          }
          .container-form {
            margin: 3rem 0;
            padding: 3rem 1rem;
            border: 10px solid #ffffff;
            box-shadow: 0px 0px 33px rgba(0, 0, 0, 0.13);
            border-radius: 20px;
          }
          .wrapper-input {
            display: flex;
            flex-direction: column;
            margin-bottom: 2rem;
            font-family: "mont-regular" !important;
          }
          .wrapper-input label {
            font-family: "mont-light" !important;
            color: #575650;
            opacity: 0.8;
            font-size: 1.3rem;
            margin: 0.1rem;
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
            margin-top: 1rem;
          }
          .boton {
            text-align: center;
            border-radius: 30px;
            padding: 1rem 0;
            margin-bottom: 2rem;
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
              height:2rem;
              margin-top:-1.5rem;
              margin-bottom:1rem;
              font-family:"mont-bold";
              font-size:1.2rem;
              color:#ff0033;
          }
          @media (min-width: 480px) {
            .contenedor {
              padding-top: 8rem;
              padding-bottom: 10rem;
            }
          }
          @media (min-width: 768px) {
            .all-content {
              width: 40rem;
            }
            .forgot-password {
              font-size: 2.5rem;
              color: #dc6a8d;
            }
            .wrapper-input {
              margin-bottom: 1.5rem;
            }
            .container-form {
              margin-top: 2rem;
              padding: 4rem 4rem;
            }
            .wrapper-input label {
              margin-bottom: 1rem;
            }
            .wrapper-input input {
              border: 1px solid #556ea1;
              box-sizing: border-box;
              border-radius: 10px;
              padding: 1.5rem 2rem;
              font-family: "mont-regular" !important;
              color: #556ea1;
            }
            .boton {
              border-radius: 15px;
              margin-top: 0;
              padding:1.5rem 0;
            }
            .boton p {
              font-family: "omnes-bold" !important;
              font-size: 1.5rem;
            }
            .pink {
              background-color: #dc6a8d;
            }
          }
          @media (min-width: 1024px) {
            .all-content {
              width: 42.5rem;
            }
            .forgot-password {
              font-size: 3rem;
            }
          }
          @media (min-width: 1280px) {
            .container-form {
              padding: 3rem 2rem;
            }
            .wrapper-input label {
              font-size: 1.5rem;
            }
            .wrapper-input input {
              padding: 1rem;
              font-size: 1.5rem;
            }
            .boton {
              margin-top: 1.5rem;
            }
          }
        `}
      </style>
    </AppLayout>
  );
};

export default RecuperarPassword;

export const getServerSideProps = async ({ req , resolvedUrl}) => {
  const token = req?.cookies?.YesmomToken;
  
  const cleanUrl = req.url.split("?")[0];
  // console.log(resolvedUrl);
  // console.log(req.url);
  const resp = await getAccess(cleanUrl , token );

  return resp;
    
}
