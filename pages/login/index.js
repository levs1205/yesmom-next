import Swal from "sweetalert2";
import { GoogleLogin } from 'react-google-login';
import AppLayout from "../../components/AppLayout";
import Head from "next/head";
import Link from "next/link";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import YesmomContext from "../../context/Context";
import { startLogin, startLoginWithGoogle, startLoginWithFacebook, initializeData } from "../../context/actions/auth";
import { useRouter } from "next/router";
import LoaderPage from '../../components/LoaderPage';
//manejadores
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { getAccess } from "../../helpers/getAccess";


const schemaValidator = yup.object().shape({
  email: yup
    .string()
    .email("*Ingresa un correo válido")
    .required("*Correo es requerido"),
  password: yup
    .string()
    .required("*Contraseña es requerida")
    .min(5, "*La contraseña debe tener minimo 5 caracteres"),
});

const index = ( ) => {

  const router = useRouter();

  const { query : { redirect_uri } } = router;
  
  const refPassword = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue
  } = useForm({
    resolver: yupResolver(schemaValidator),
  });

  const [ loading , setLoading ] = useState(true);
  const flagRef = useRef(true);
  const { dispatchAuth, dispatchClient , auth : { logged } } = useContext(YesmomContext);


  const email = watch('email');
  useEffect(()=>{
    if(email){
      setValue('email',email.toLowerCase());
    }
  },[email])

  const submitForm = async (values) => {
    // console.log(values);
    //Ya sin errores
    //Enviar un object con { email , password }
    try {

      const axiosAuth = axios.create({
        baseURL : process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_SECURITY,
      })

      const { data } = await axiosAuth.post('/autenticar?email=1&type=U', values);

      if (data?.MensajeRespuesta === "REQUEST INVÁLIDO") {
        Swal.fire("Info", "No existe usuario con esos accesos", "info");
      }
      if (data?.mensaje === "Autenticación Correcta") {
        // router.push("/");

        dispatchClient(await initializeData(data.token));
        dispatchAuth(startLogin({token : data.token , isSocialMedia : false}));
        redirectLogged();
      }
    } catch (e) {
      Swal.fire("Info", "No existe usuario con esos accesos", "info");
    }
  };


  const redirectLogged = () => {
    if(redirect_uri){
      return router.push(`/${redirect_uri}`)
    }else{
      return router.push('/perfil/miperfil');
    }
  }

  const handleRef = () => {
    const type = document.getElementById("password").type;
    type === "password"
      ? (document.getElementById("password").type = "text")
      : (document.getElementById("password").type = "password");
  };


  const handleSuccessGoogle = async ( data ) => {
    console.log(data);

    const { token , isSocialMedia} = await startLoginWithGoogle(data);
    if(token){
      const infoAction = await initializeData(token);
      dispatchClient(infoAction);
      dispatchAuth( startLogin({ token ,isSocialMedia}))
      redirectLogged();
    }
  }

  const responseFacebook = async ( data ) => {

    // const token = response.accessToken;
    console.log(data);
    const { token } = await startLoginWithFacebook(data);
    if(token){
      dispatchClient(await initializeData(token));
      dispatchAuth( startLogin({ token ,isSocialMedia}))
      redirectLogged();
    }

  }

  const handleFailureGoogle = (error) => {
    console.log(error);
  }


   //Redirigir
  //  useEffect(()=>{
    
  //   if(logged){
  //     flagRef.current = false;
  //     if(redirect_uri){
  //       router.push(`/${redirect_uri}`)
  //     }else{
  //       router.push('/perfil/miperfil');
  //     }
  //   }
  //   setTimeout(() => {
  //     if(flagRef.current){
  //       setLoading(false)
  //     }
  //   }, 1000)
  //  },[logged])

  // if(loading){
  //   return <LoaderPage />
  // }
  

  return (
    <AppLayout>
      <Head>
        <title>YesMom - Login</title>
        <meta name="description" content="YesMom es ..."></meta>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="YesMom - Login" />
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
        <meta name="twitter:title" content="YesMom - Login" />
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
            <div className="center">
              <img src="/image/login/icon-user.svg" alt="user yesmom" />
              <p className="iniciar-sesion">Iniciar Sesión</p>
              <p className="bienvenido">¡Hola, Bienvenid@ a Yes Mom!</p>
            </div>
            <div className="container-center">
              <div className="container-form">
                <form
                  /* onSubmit={ handleSubmit } */
                  noValidate={true}
                  onSubmit={handleSubmit(submitForm)}
                >
                  <div className="wrapper-input">
                    <label htmlFor="email">
                      Dirección de correo electrónico o numero de teléfono:
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      /* value={email}
                                                onChange={handleInputChange} */
                      {...register("email")}
                    />
                  </div>
                  <p className="error-input">{errors.email?.message}</p>

                  <div className="wrapper-input">
                    <label htmlFor="password">Contraseña:</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      /* value={password}
                                                onChange={handleInputChange} */
                      ref={refPassword}
                      {...register("password")}
                    />
                    <div className="eye-icon" onClick={handleRef}>
                      <img src="/image/login/eye-login.svg" />
                    </div>
                  </div>
                  <p className="error-input">{errors.password?.message}</p>

                  <div className="wrapper-checkbox">
                    <div className="container-checkbox">
                      {/* <input
                        type="checkbox"
                        id="checkbox"
                        className="box-remember__checkbox"
                      />
                      <label
                        htmlFor="checkbox"
                        className="box-remember__text"
                      ></label>
                      <label htmlFor="checkbox">
                        <p>Recuerdame</p>
                      </label> */}
                    </div>
                    <Link href="/recuperar-password">
                      <a>
                        <p className="forgot-password">
                          ¿Olvidaste tu contraseña?
                        </p>
                      </a>
                    </Link>
                  </div>

                  <input type="submit" style={{ display: "none" }} />
                  <div
                    className="boton-normal pink"
                    onClick={handleSubmit(submitForm)}
                  >
                    <p>Ingresar</p>
                  </div>

                  <div className="container-line">
                    <hr />
                    <p>O</p>
                    <hr />
                  </div>

                  <FacebookLogin
                    appId="852286165441996"
                    // appId="602718880858377"
                    autoLoad = {false}
                    fields="name,email,picture"
                    render={renderProps => (
                      <div 
                        onClick={renderProps.onClick}
                        className="boton-icon facebook"
                      >
                        <div className="icon">
                          <img
                            src="/image/login/facebook-login.svg"
                            alt="fb login"
                          />
                        </div>
                        <p>Ingresar con Facebook</p>
                      </div>
                    )}
                    callback={responseFacebook}
                  />

                  <GoogleLogin
                    // clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
                    clientId="45600196115-9bs7rgqovfrv4tme18rhubp19n6g0k1i.apps.googleusercontent.com"
                    render={renderProps => (
                      <div className="boton-icon google" onClick = { renderProps.onClick }>
                        <div className="icon">
                          <img
                            src="/image/login/google-login.svg"
                            alt="google login"
                          />
                        </div>
                        <p>Ingresar con Google</p>
                      </div>
                    )}
                    buttonText="Login"
                    onSuccess={handleSuccessGoogle}
                    onFailure={handleFailureGoogle}
                    cookiePolicy={'single_host_origin'}
                  />
                </form>
              </div>
              <div className="wrapper-end">
                <div className="container-line">
                  <hr />
                  <p>¿Eres nuevo en Yes mom?</p>
                  <hr />
                </div>
                <Link href="/registro">
                  <div className="boton-normal yellow">
                    <p>Crear cuenta</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`

                    .pink{
                        background-color:#EC608D;
                    }
                    .yellow{
                        background-color: #FEBF41;
                    }
                    input{
                        text-align:left;
                        
                    }
                    input:focus{
                        outline:none;
                        box-shadow:none;
                    }
                    input::placeholder{
                        background:none;
                    }
                    p{
                        margin:0;
                    }
                    .center{
                        display:flex;
                        flex-direction:column;
                        justify-content:center;
                        align-items:center;
                    }
                    .contenedor{
                        padding-top:8rem;
                        padding-bottom:8rem;
                        margin-left:2.5rem;
                        margin-right:2.5rem;
                        margin-top:0;
                    }
                    .container-contenido{
                        display:flex;
                        justify-content:center;
                        align-items:center;
                    }
                    .iniciar-sesion{
                        font-family:"mont-regular"!important;
                        font-weight:600;
                        font-size:2rem;
                        color:#EC668D;
                    }
                    .bienvenido{
                        font-family:"mont-regular"!important;
                        font-weight:600;
                        color:#5A5A5A;
                        font-size:1.5rem;
                    }
                    .container-form{
                        margin:1.5rem 0;
                        padding:2rem 0.5rem;
                        border: 10px solid #FFFFFF;
                        box-shadow: 0px 0px 33px rgba(0, 0, 0, 0.13);
                        border-radius: 20px;
                    }
                    .wrapper-input{
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
                        padding:0.3rem;
                        padding-bottom:0.1rem;
                        font-family:"mont-regular"!important;
                        font-weight:600;
                        color:#575756;
                        font-size:1.3rem;
                        text-align:left;
                        margin-top:1rem;
                    }
                    .container-checkbox{
                        display:flex;
                        align-items:center;
                    }
                    .wrapper-checkbox{
                        display:flex;
                        align-items:center;
                        justify-content:space-between;
                        flex-wrap:wrap;
                        margin-top:1rem;
                    }
                    .box-remember__checkbox{
                        height:2.4rem;
                        width:2.4rem;
                        border: 1px solid #556EA1;
                        position:absolute;
                        padding:0;
                        display:none;
                        overflow:hidden;
                    }
                    .box-remember__text:before{
                    
                        content:"";
                        display:inline-block;
                        width:22px;
                        height:22px;
                        border: 1px solid #556EA1;
                        border-radius: 5px;
                        margin-right: 8px;
                        line-height: 24px;
                        vertical-align: text-top;
                        cursor:pointer;
                    }
                    .box-remember__checkbox:checked + .box-remember__text:before{
                        border: 2px solid #f22c74;
                        background: url("/image/icon/check-pink.svg") center/16px no-repeat;
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
                    .forgot-password{
                        font-family:"mont-regular";
                        text-decoration : underline;
                        font-weight:600;
                        font-size:1.3rem;
                        color:#556EA1;
                    }
                    .boton-normal{
                        cursor:pointer;
                        border-radius:30px;
                        padding:1rem 0;
                        margin:2rem 1rem 1rem 1rem;
                        text-align:center;
                        color:#FFFFFF;
                    }
                    .yellow{
                        margin-left:2.5rem ;
                        margin-right:2.5rem;
                    }
                    .boton-normal{
                        font-family:"omnes-regular"!important;
                        font-size:2.3rem;
                        margin-top:3rem;
                    }
                    .container-line{
                        display:flex;
                        align-items:center;
                        margin:2rem 0;
                    }
                    .container-line hr{
                        flex-grow:1;
                    }
                    .container-line p{
                        margin-right:1.5em;
                        margin-left:1.5rem;
                        color: #575650;
                        opacity:0.6;
                        font-size:1.3rem;
                        font-weight:600;
                        font-family:"mont-regular"!important;
                    }
                    .facebook{
                        color:#FFFFFF;
                        background-color:#506DA5;
                    }
                    .google{
                        color:#575756;
                        border:1px solid #575756;
                    }
                    .boton-icon{
                        cursor:pointer;
                        border-radius:30px;
                        padding:1.4rem 0;
                        margin:1rem 1rem 2rem 1rem;
                        text-align:center;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                    }
                    .boton-icon p{
                        font-family:"omnes-regular";
                        font-weight:500;
                        font-size:1.8rem;
                    }
                    .icon{
                        margin-right:1rem;
                    }
                    .eye-icon{
                        cursor:pointer;
                        display:none;
                    }

                    .error-input{
                        height:1.5rem;
                        margin-top:-1rem;
                        margin-bottom:2rem;
                        font-family:"mont-bold";
                        font-size:1.2rem;
                        color:#ff0033;
                    }
                    /**480 - 768 - 1024 -1280 */
                    @media (min-width: 480px){
                        .contenedor{
                            padding-top:8rem;
                            padding-bottom:10rem;
                        }
                        .container-form{
                            padding:3rem 2rem;
                        }
                        .boton-normal{
                            padding:1rem 0;
                        }
                        .boton-icon{
                            padding:1rem 0;
                        }
                        .yellow{
                            margin-left:4rem;
                            margin-right:4rem;
                        }
                    }

                    @media (min-width: 769px){
                        .google{
                            border:1px solid #dadada;
                        }
                        .pink{
                            background-color:#DC6A8D;
                            margin-top:3rem!important;
                        }
                        .contenedor{
                            padding-top:8rem;
                            padding-bottom:10rem;
                        }
                        .iniciar-sesion{
                            font-family:"mont-heavy"!important;
                            font-size:2.3rem;
                        }
                        .container-form{
                            padding:3rem 5rem;
                            margin-top:2rem;
                            margin-bottom:4rem;
                        }
                        .wrapper-input{
                            position:relative;
                        }
                        .eye-icon{
                            display:block;
                            position:absolute;
                            right:1rem;
                            bottom:0;
                            transform: translate(-50%, -75%);
                        }
                        .wrapper-input input{
                            opacity:0.8;
                            border: 1px solid #556EA1;
                            box-sizing: border-box;
                            border-radius: 10px;
                            padding:0.8rem 1rem;
                        }
                        .boton-normal,.boton-icon{
                            margin:2rem 4rem;
                            border-radius: 15px; 
                            padding:1rem 5rem;     
                        }
                        .boton-normal,.boton-icon p{
                            font-family:'omnes-bold'!important;
                            font-size:1.7rem;
                        }
                        .google{
                            border: 1px solid #575650;
                        }
                        .google p{
                            color:color: #575650;
                            opacity: 0.5;
                        }
                        .wrapper-end{
                            margin-left:4rem;
                            margin-right:4rem;
                        }
                        .yellow{
                            margin-right:6rem;
                            margin-left:6rem;
                        }
                        .icon{
                            margin-right:4rem;
                        }
                    }  

                    @media (min-width: 1024px){
                        .wrapper-input input {
                            height:4rem;
                        }
                        .boton-normal,.boton-icon{
                            padding-left:3rem;
                            padding-right:3rem;
                        }
                        .eye-icon{
                            bottom:0.25rem;
                        }
                    }

                    @media(min-width:1280px){
                        .yellow{
                            margin-left:3.5rem!important;
                            margin-right:3.5rem!important;
                        }
                        .container-form{
                            padding:3rem 4rem;
                        }
                        .boton-normal,.boton-icon{
                            margin:1.5rem 2.5rem;
                            border-radius: 15px; 
                            padding:1rem 4rem;     
                        }

                        .boton-normal,.boton-icon p{
                            font-family:'omnes-bold'!important;
                            font-size:1.5rem;
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
  // console.log(resolvedUrl);
  // console.log(req.url);
  const resp = await getAccess(cleanUrl , token );

  console.log(resp);
  return resp;
    
}
