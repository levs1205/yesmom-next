import AppLayout from "../../components/AppLayout";

import Head from 'next/head';
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";


const index = () => {
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
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.6059 0C10.6008 0 0 10.6008 0 23.6059C0 26.7752 0.655717 29.9446 1.85787 32.786C2.07644 33.2232 2.40431 33.4417 2.84145 33.4417C2.95074 33.4417 3.16931 33.4417 3.2786 33.3324C3.82503 33.1139 4.04361 32.4581 3.82503 31.9117C2.73217 29.2888 2.07645 26.4474 2.07645 23.4966C2.07645 11.6937 11.6937 2.07645 23.4966 2.07645C35.2996 2.07645 44.9168 11.6937 44.9168 23.4966C44.9168 26.3381 44.3704 29.1795 43.2775 31.8024C43.059 32.3489 43.2775 33.0046 43.824 33.2232C44.3704 33.4417 45.0261 33.2232 45.2447 32.6767C46.4468 29.726 47.1026 26.666 47.1026 23.4966C47.2119 10.6008 36.611 0 23.6059 0Z" fill="#EC668D"/>
                                    <path d="M32.6768 17.8137C32.6768 12.7865 28.6331 8.74292 23.606 8.74292C18.5788 8.74292 14.5352 12.7865 14.5352 17.8137C14.5352 22.8409 18.5788 26.8845 23.606 26.8845C28.6331 26.8845 32.6768 22.8409 32.6768 17.8137ZM16.6116 17.8137C16.6116 13.9887 19.7809 10.8194 23.606 10.8194C27.431 10.8194 30.6003 13.9887 30.6003 17.8137C30.6003 21.6388 27.431 24.8081 23.606 24.8081C19.7809 24.8081 16.6116 21.6388 16.6116 17.8137Z" fill="#EC668D"/>
                                    <path d="M23.6059 31.256C14.863 31.256 9.28936 35.846 6.88506 38.6875C6.5572 39.1246 6.5572 39.7803 6.88506 40.1082C11.3658 44.589 17.2673 47.1026 23.6059 47.1026C29.9445 47.1026 35.9553 44.589 40.4361 40.1082C40.8732 39.6711 40.8732 39.0153 40.4361 38.6875C37.9225 35.846 32.3489 31.256 23.6059 31.256ZM23.6059 45.0261C18.1416 45.0261 13.1144 43.0589 9.07079 39.3432C11.9122 36.5017 16.6116 33.4417 23.6059 33.4417C30.491 33.4417 35.1903 36.5017 38.1411 39.3432C34.2067 42.9497 29.0703 45.0261 23.6059 45.0261Z" fill="#EC668D"/>
                            </svg>
                            <p className="iniciar-sesion">Iniciar Sesión</p>
                            <p className="bienvenido">¡Hola, Bienvenid@ a Yes Mom!</p>
                        </div>
                        <div className="container-center">
                            <div className="container-form">
                                    <form>
                                        <div className="wrapper-input">
                                            <label htmlFor="email" >Dirección de correo electrónico o numero de teléfono:</label>
                                            <input type="email" id="email" name="email"/>
                                        </div>

                                        <div className="wrapper-input">
                                            <label htmlFor="password">Contraseña:</label>
                                            <input type="password" id="password" name="password"/>
                                            <div className="eye-icon">
                                            <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.5384 5.25857C13.8534 5.70143 13.8534 6.29929 13.5384 6.74143C12.5463 8.13357 10.1662 11 7.38741 11C4.6086 11 2.22847 8.13357 1.23642 6.74143C1.08318 6.52938 1 6.26851 1 6C1 5.73149 1.08318 5.47062 1.23642 5.25857C2.22847 3.86643 4.6086 1 7.38741 1C10.1662 1 12.5463 3.86643 13.5384 5.25857V5.25857Z" stroke="#556EA1" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M7.38745 8.14289C8.48838 8.14289 9.38086 7.1835 9.38086 6.00003C9.38086 4.81657 8.48838 3.85718 7.38745 3.85718C6.28652 3.85718 5.39404 4.81657 5.39404 6.00003C5.39404 7.1835 6.28652 8.14289 7.38745 8.14289Z" stroke="#556EA1" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>


                                            </div>
                                        </div>

                                        <div className="wrapper-checkbox">
                                            <div className="container-checkbox">
                                                <input type="checkbox" id="checkbox"/>
                                                <label htmlFor="checkbox">Recuerdame</label>
                                            </div>
                                            <Link href="recuperar-password">
                                                <p className="forgot-password">¿Olvidaste tu contraseña?</p>
                                            </Link> 
                                        </div>

                                        <div className="boton-normal pink">
                                            <p>Ingresar</p>
                                        </div>

                                        <div className="container-line">
                                            <hr />
                                            <p>O</p>
                                            <hr />
                                        </div>

                                        <div className="boton-icon facebook">
                                            <div className="icon">
                                            <svg width="13" height="25" viewBox="0 0 16 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.9515 16.875L15.7812 11.4457H10.5935V7.92246C10.5935 6.43711 11.3182 4.98926 13.6416 4.98926H16V0.366797C16 0.366797 13.8598 0 11.8136 0C7.54139 0 4.74889 2.60039 4.74889 7.30781V11.4457H0V16.875H4.74889V30H10.5935V16.875H14.9515Z" fill="white"/>
                                            </svg>

                                            </div>
                                            <p>Ingresar con Facebook</p>
                                        </div>

                                        <div className="boton-icon google">
                                            <div className="icon">
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.8249 7.23731H17.1V7.19996H9V10.7999H14.0864C13.3443 12.8956 11.3503 14.3999 9 14.3999C6.01785 14.3999 3.6 11.9821 3.6 8.99996C3.6 6.01782 6.01785 3.59998 9 3.59998C10.3765 3.59998 11.6289 4.11928 12.5824 4.96753L15.1281 2.42189C13.5207 0.923845 11.3706 0 9 0C4.02975 0 0 4.02973 0 8.99996C0 13.9702 4.02975 17.9999 9 17.9999C13.9703 17.9999 18 13.9702 18 8.99996C18 8.39651 17.9379 7.80746 17.8249 7.23731Z" fill="#FFC107"/>
                                                    <path d="M1.0376 4.81093L3.99455 6.97947C4.79465 4.99857 6.73235 3.59998 8.9999 3.59998C10.3764 3.59998 11.6288 4.11928 12.5823 4.96752L15.128 2.42189C13.5206 0.923845 11.3705 0 8.9999 0C5.543 0 2.5451 1.95164 1.0376 4.81093Z" fill="#FF3D00"/>
                                                    <path d="M8.99992 18.0001C11.3246 18.0001 13.4369 17.1105 15.034 15.6637L12.2485 13.3067C11.3145 14.0169 10.1733 14.4011 8.99992 14.4001C6.65902 14.4001 4.67137 12.9075 3.92257 10.8245L0.987671 13.0857C2.47717 16.0003 5.50207 18.0001 8.99992 18.0001Z" fill="#4CAF50"/>
                                                    <path d="M17.825 7.23742H17.1V7.20007H9V10.8001H14.0864C13.7314 11.7974 13.092 12.669 12.2472 13.307L12.2485 13.3061L15.034 15.6632C14.8369 15.8423 18 13.5 18 9.00006C18 8.39662 17.9379 7.80757 17.825 7.23742Z" fill="#1976D2"/>
                                                </svg>
                                            </div>
                                            <p>Ingresar con Google</p>

                                        </div>

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
                        margin-left:0.5rem!important;
                        margin-right:0.5rem!important;
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
                        margin-left:1rem;
                        margin-right:1rem;
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
                        font-size:20px;
                        color:#EC668D;
                    }
                    .bienvenido{
                        font-family:"mont-regular"!important;
                        font-weight:600;
                        color:#5A5A5A;
                        font-size:15px;
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
                        font-size:13px;
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
                        font-size:13px;
                        text-align:left;
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
                    }
                    .wrapper-checkbox input{
                        height:24px;
                        width:24px;
                    }
                    .wrapper-checkbox label{
                        margin-bottom:0;
                        margin-left:0.5rem;
                        font-family: "mont-light"!important;
                        font-size:11px;
                        color: #575650;
                        mix-blend-mode: normal;
                        opacity: 0.8;
                    }
                    .forgot-password{
                        font-family:"mont-regular";
                        font-weight:600;
                        font-size:13px;
                        color:#556EA1;
                    }
                    .boton-normal{
                        cursor:pointer;
                        border-radius:30px;
                        padding:0.8rem 0;
                        margin:2rem 0 1rem 0;
                        text-align:center;
                        color:#FFFFFF;
                    }
                    .boton-normal{
                        font-family:"omnes-regular"!important;
                        font-size:23px;
                    }
                    .container-line{
                        display:flex;
                        align-items:center;
                    }
                    .container-line hr{
                        flex-grow:1;
                    }
                    .container-line p{
                        margin-top:-0.25rem;
                        margin-right:1rem;
                        margin-left:1rem;
                        color: #575650;
                        opacity:0.6;
                        font-size:13px;
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
                        padding:0.8rem 0;
                        margin:1rem 0;
                        text-align:center;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                    }
                    .boton-icon p{
                        font-family:"omnes-regular";
                        font-weight:500;
                        font-size:18px;
                    }
                    .icon{
                        margin-right:1rem;
                    }
                    .eye-icon{
                        cursor:pointer;
                        display:none;
                    }
                    /**480 - 768 - 1024 -1280 */
                    @media (min-width: 480px){
                        .contenedor{
                            padding-top:6rem;
                            padding-bottom:6rem;
                        }
                        .all-content{
                            min-width:450px;
                        }
                        .boton-normal{
                            padding:0.4rem 0;
                        }
                        .boton-icon{
                            padding:0.2rem 0;
                        }
                        .yellow{
                            margin:0;
                            margin-top:0.5rem;
                        }
                    }

                    @media (min-width: 769px){
                        .pink{
                            background-color:#DC6A8D;
                        }
                        .all-content{
                            min-width:550px;
                        }
                        .contenedor{
                            padding-top:18rem;
                            padding-bottom:6rem;
                        }
                        .iniciar-sesion{
                            font-family:"mont-heavy"!important;
                            font-size:23px;
                        }
                        .container-form{
                            padding:3rem 5rem;
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
                            border-radius: 20px;
                            padding:0.8rem 1rem;
                        }
                        .boton-normal,.boton-icon{
                            margin:1.5rem 4rem;
                            border-radius: 15px; 
                            padding:1rem 0;     
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
                            margin-right:5rem!important;
                            margin-left:5rem!important;
                        }
                        .icon{
                            margin-right:4rem;
                        }
                    }  

                    @media (min-width: 1024px){
                        .contenedor{
                            padding-top:16rem;
                        }
                        .boton-normal,.boton-icon{
                            padding-left:3rem;
                            padding-right:3rem;
                        }
                    }

                    @media(min-width:1280px){
                        .contenedor{
                            padding-top:13rem;
                        }
                        .container-form{
                            padding:3rem 4rem;
                        }
                        .wrapper-input input{
                            height:3rem;
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
    )
}
 
export default index;
