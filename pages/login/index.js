import AppLayout from "../../components/AppLayout";

import Head from 'next/head';
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faFacebookF,
    faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import {faEye} from "@fortawesome/free-solid-svg-icons";


const index = () => {
    return (
        <AppLayout>
            <Head>
                <title>YesMom - Login</title>
                <meta name="description" content="YesMom es ..."></meta>
                <meta property="og:type" content="website" />
                <meta property="og:title" content="YesMom - Nosotros" />
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
            <div className="container">
                <div className="container-login">
                    <div className="text-login">
                        <div className="icon-head">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.6059 0C10.6008 0 0 10.6008 0 23.6059C0 26.7752 0.655717 29.9446 1.85787 32.786C2.07644 33.2232 2.40431 33.4417 2.84145 33.4417C2.95074 33.4417 3.16931 33.4417 3.2786 33.3324C3.82503 33.1139 4.04361 32.4581 3.82503 31.9117C2.73217 29.2888 2.07645 26.4474 2.07645 23.4966C2.07645 11.6937 11.6937 2.07645 23.4966 2.07645C35.2996 2.07645 44.9168 11.6937 44.9168 23.4966C44.9168 26.3381 44.3704 29.1795 43.2775 31.8024C43.059 32.3489 43.2775 33.0046 43.824 33.2232C44.3704 33.4417 45.0261 33.2232 45.2447 32.6767C46.4468 29.726 47.1026 26.666 47.1026 23.4966C47.2119 10.6008 36.611 0 23.6059 0Z" fill="#EC668D"/>
                                <path d="M32.6768 17.8137C32.6768 12.7865 28.6331 8.74292 23.606 8.74292C18.5788 8.74292 14.5352 12.7865 14.5352 17.8137C14.5352 22.8409 18.5788 26.8845 23.606 26.8845C28.6331 26.8845 32.6768 22.8409 32.6768 17.8137ZM16.6116 17.8137C16.6116 13.9887 19.7809 10.8194 23.606 10.8194C27.431 10.8194 30.6003 13.9887 30.6003 17.8137C30.6003 21.6388 27.431 24.8081 23.606 24.8081C19.7809 24.8081 16.6116 21.6388 16.6116 17.8137Z" fill="#EC668D"/>
                                <path d="M23.6059 31.256C14.863 31.256 9.28936 35.846 6.88506 38.6875C6.5572 39.1246 6.5572 39.7803 6.88506 40.1082C11.3658 44.589 17.2673 47.1026 23.6059 47.1026C29.9445 47.1026 35.9553 44.589 40.4361 40.1082C40.8732 39.6711 40.8732 39.0153 40.4361 38.6875C37.9225 35.846 32.3489 31.256 23.6059 31.256ZM23.6059 45.0261C18.1416 45.0261 13.1144 43.0589 9.07079 39.3432C11.9122 36.5017 16.6116 33.4417 23.6059 33.4417C30.491 33.4417 35.1903 36.5017 38.1411 39.3432C34.2067 42.9497 29.0703 45.0261 23.6059 45.0261Z" fill="#EC668D"/>
                            </svg>


                        </div>
                        <p className="p-purple ft-regular log-in">Iniciar Sesión</p>
                        <p className="ft-regular welcome">¡Hola, Bienvenid@ a Yes Mom!</p>
                    </div>

                    <div className="card-login">
                        <form>
                            <div className="wrapper-input ft-light">
                                <label htmlFor="email">Dirección de correo electrónico o número de teléfono:</label>
                                <input name="email" id="email" type="text" />
                            </div>

                            <div className="wrapper-input ft-light icon-div">
                                <label htmlFor="password">Contraseña:</label>
                                <input name="password" id="password" type="password" />
                                <div className="icon-eye">
                                    <FontAwesomeIcon  icon={faEye} />
                                </div>

                            </div>
                            <div className="check ft-light">
                                <div className="container-check">
                                    <input className="checkbox" id="checkbox" name="checkbox"type="checkbox"/>
                                    <label htmlFor="checkbox">Recuerdame</label>
                                </div>
                                <Link href="#" className="href"><p className="forgot-password">¿Olvidaste tu contraseña?</p></Link>

                            </div>
                            {/* Boton */}

                            <div className="button pink">
                                <p className="text-center f-o-regular f-white lt-3 sign m-h">Ingresar</p>
                            </div>
                            <div className="container-line">
                                <hr/> 
                                <p className="ft-light">o</p>
                                <hr/> 
                            </div>
                            <div className="button blue container-icon">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </div>
                                <p className="text-center f-o-regular f-white lt-3 m-h">Ingresar con Facebook</p>
                            </div>

                            <div className="button-google container-icon">
                                <div className="icon-google">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.8249 7.23731H17.1V7.19996H9V10.7999H14.0864C13.3443 12.8956 11.3503 14.3999 9 14.3999C6.01785 14.3999 3.6 11.9821 3.6 8.99996C3.6 6.01782 6.01785 3.59998 9 3.59998C10.3765 3.59998 11.6289 4.11928 12.5824 4.96753L15.1281 2.42189C13.5207 0.923845 11.3706 0 9 0C4.02975 0 0 4.02973 0 8.99996C0 13.9702 4.02975 17.9999 9 17.9999C13.9703 17.9999 18 13.9702 18 8.99996C18 8.39651 17.9379 7.80746 17.8249 7.23731Z" fill="#FFC107"/>
                                    <path d="M1.0376 4.81093L3.99455 6.97947C4.79465 4.99857 6.73235 3.59998 8.9999 3.59998C10.3764 3.59998 11.6288 4.11928 12.5823 4.96752L15.128 2.42189C13.5206 0.923845 11.3705 0 8.9999 0C5.543 0 2.5451 1.95164 1.0376 4.81093Z" fill="#FF3D00"/>
                                    <path d="M8.99992 18.0001C11.3246 18.0001 13.4369 17.1105 15.034 15.6637L12.2485 13.3067C11.3145 14.0169 10.1733 14.4011 8.99992 14.4001C6.65902 14.4001 4.67137 12.9075 3.92257 10.8245L0.987671 13.0857C2.47717 16.0003 5.50207 18.0001 8.99992 18.0001Z" fill="#4CAF50"/>
                                    <path d="M17.825 7.23742H17.1V7.20007H9V10.8001H14.0864C13.7314 11.7974 13.092 12.669 12.2472 13.307L12.2485 13.3061L15.034 15.6632C14.8369 15.8423 18 13.5 18 9.00006C18 8.39662 17.9379 7.80757 17.825 7.23742Z" fill="#1976D2"/>
                                </svg>

                                </div>
                                <p className="text-center f-o-regular lt-3 m-h">Ingresar con Google</p>
                            </div>

                        </form>
                    </div>
                    <div className="container-google">
                        <div className="container-line">
                            <hr/> 
                            <p className="ft-light">¿Eres nuevo en Yes mom?</p>
                            <hr/> 
                        </div>
                        
                        <div className="button yellow">
                            <p className="text-center f-o-regular f-white">Crear cuenta</p>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    
                    .pink{
                        background-color:#DC6A8D;
                    }
                    .blue{
                        background-color:#556EA1;
                    }
                    .yellow{
                        background-color:#FEBF41;
                    }
                    .f-white{
                        color:#FFFFFF;
                    }
                    .f-o-regular{
                        font-family: "omnes-regular"!important;
                    }

                    .ft-regular{
                        font-family: "mont-regular" !important;
                    }
                    .ft-heavy{
                        font-family: "mont-heavy" !important;
                    }
                    .ft-light{
                        font-family: "mont-light" !important;  
                    }
                    .ft-bold{
                        font-family: "omnes-bold" !important;
                    }
                    .ft-semibold{
                        font-family: "mont-semibold"!important;
                    }
                    .lt-3{
                        letter-spacing:0.5px;
                    }

                    .welcome{
                        text-align:center;
                        font-weight: 600;
                        font-size: 15px;
                        color: #5A5A5A;
                    }
                    .container{
                        padding-top:6rem;
                        padding-bottom:3rem;
                    }
                    .container-login{
                        margin:2rem auto;
                    }
                    .p-purple{
                        color:#EC668D;
                        line-height: 46px;
                        margin-bottom:1rem;
                    }
                    .container-login p{
                        margin:0;
                        
                    }
                    .text-login{
                        display:flex;
                        flex-direction:column;
                        align-items:center;
                        justify-content:center;
                    }
                    .card-login{
                        background: #FFFFFF;
                        border: 10px solid #FFFFFF;
                        box-shadow: 0px 0px 33px rgba(0, 0, 0, 0.13);
                        border-radius: 20px;
                        margin:1rem 0;
                        padding:0 0 2.5rem 0;
                    }
                    .wrapper-input{
                        margin-top:1rem;
                        margin-bottom:1rem;
                        display:flex;
                        flex-direction:column;
                        color: #575650;
                        opacity: 0.8;
                    }
                    .icon-eye{
                        display:none;
                    }
                    .wrapper-input input{
                        background: #FFFFFF;
                        opacity: 0.8;
                        border:none;
                        border-bottom: 1px solid #556EA1;
                        box-sizing: border-box;
                        padding-left:0.5rem;
                    }
                    .wrapper-input label{
                        font-size:12px;
                    }
                    .check{
                        display:flex;
                        align-items:center;
                        justify-content:space-between;
                    }

                    .href{
                        display:inline-block;
                        color: #556EA1;
                        mix-blend-mode: normal;
                        opacity: 0.8;
                        font-size:5px!important;
                        background-color:red;
                        margin:0;
                    }

                    .container-check{
                        display:flex;
                        align-items:center;
                        justify-content:center;
                    }
                    .checkbox{
                        height:0.7rem;
                        width:0.7rem;
                    }
                    .container-check label{
                        margin:0 0 0 0.2rem;
                        color: #575650;
                        mix-blend-mode: normal;
                        opacity: 0.8;
                        font-size:11px;
                    }
                    .forgot-password{
                        font-size:11px;
                        color: #556EA1;
                        mix-blend-mode: normal;
                        opacity: 0.8;
                    }

                    .container-icon{
                        display:flex;
                        justify-content:center;
                        align-items:center;
                    }
                    .icon{
                        margin-right:1rem;
                        color:#FFFFFF;
                    }
                    .icon-google{
                        margin-top:-0.225rem;
                        margin-right:1rem;
                    }
                    .button{
                        border-radius:30px;
                        padding-top:0.8rem;
                        padding-bottom:0.8rem;
                        margin:1rem 0.6rem;
                        
                        font-weight:500;
                        cursor:pointer;
                    }

                    .button p{
                        margin:0;
                        font-size:16px;
                    }
                    .sign {
                        font-size:18px!important;
                    }
                    .text-center{
                        text-align:center;
                        font-size:0.9rem;
                    }
                    .button-google{
                        background: #FFFFFF;
                        border: 1px solid #575756;
                        border-radius: 30px;
                        margin-left:0.6rem;
                        margin-right:0.6rem;
                        padding-top:0.8rem;
                        padding-bottom:0.8rem;
                        color: #575756;
                        cursor:pointer;
                        font-weight:500;
                    }
                    .button-google p{
                        margin:0;
                        font-size:16px;
                    }
                    
                    .container-line{
                        display:flex;
                        align-items:center;
                    }
                    .container-line hr{
                        flex-grow:1;
                    }
                    .container-line p{
                        margin-right:1rem;
                        margin-left:1rem;
                        color: #575650;
                        opacity:0.6;
                        font-size:10px;
                        font-weight:600;
                    }
                    @media (min-width:420px){
                        .container{
                            padding-top:4.5rem;
                        }
                        .wrapper-input input{
                            height:1.2rem;
                            font-size:1rem;
                            padding:0.5rem;
                            
                        }
                        .wrapper-input label{
                            font-size:14px;
                        }
                        .forgot-password{
                            font-size:13px;
                        }
                        .container-check label{
                            font-size:13px;
                        }
                        .container-line p{
                            font-size:12px;
                        }
                        .container-login{
                            width:400px;
                        }
                        
                        .button{
                            padding-top:0.6rem;
                            padding-bottom:0.6rem;
                        }
                        .button-google{
                            padding-top:0.6rem;
                            padding-bottom:0.6rem;
                        }
                        .icon, .icon-google{
                            font-size:16px;
                        }
                        .welcome{
                            font-size:0.7rem;
                        }

                    }
                    @media (min-width:769px){
                        .welcome{
                            font-size:20px;
                        }
                        .container-login{
                            width:500px;
                        }
                        .p-purple{
                            font-family : "mont-heavy"!important;
                            font-size:35px;
                        }
                        .button, .button-google{
                            padding-top:1.2rem;
                            padding-bottom:1.2rem;
                            margin:3rem 5rem;
    
                        }
                        .container-google{
                            padding:0 5rem;
                        }
                        .button-google{  
                            color: #575756;
                        }
                        .button p{
                            font-size:1.3rem;
                        }
                        .button-google p{
                            font-size:1.3rem;
                        }
                        .icon, .icon-google{
                            margin-right:3rem;
                        }
                        .sign{
                            font-size:1.4rem!important;
                        }
                        .m-h{
                            font-family:"mont-heavy"!important;
                        }
                        .lt-3{
                            letter-spacing:0;
                        }
                        .card-login{
                            padding-top:2rem;
                            padding-bottom:3rem;
                            padding-left:6rem;
                            padding-right:6rem;
                            margin:0 auto;
                        }
                        .container-line{
                            margin-top:2rem;
                            margin-left:2rem;
                            margin-right:2rem;
                        }
                        .wrapper-input label{
                            font-size:1.4rem;
                        }
                        .wrapper-input input{
                            height:5rem;
                            margin-top:1rem;
                            border: 1px solid #556EA1;
                            border-radius:20px;
                            font-size:2rem;
                            padding-left:1.5rem;
                        }
                        .wrapper-input label{
                            font-size:11px;
                        }
                        .checkbox{
                            height:2rem;
                            width:2rem;
                        }
                        .container-check label{
                            font-size:10px;
                        }
                        .icon-div{
                            position :relative;
                        }
                        .icon-eye{
                            display:block;
                            position:absolute;
                            right:2.25rem;
                            bottom:1.5rem;
                            color:#556EA1;
                            font-size:1.5rem;
                        }
                        .text-login{
                            margin-bottom:1rem;
                        }
                        .container{
                            width:500px;
                            padding-top:13rem;
                            margin:0 auto;
                        }
                    }

                    @media(min-width:992px){
                        .container{
                            width:500px;
                            padding-top:6rem;
                        }
                        .card-login{
                            padding-left:4rem;
                            padding-right:4rem;
                        }
                        .wrapper-input input{
                            height:3rem;
                            margin-top:0.5rem;
                            font-size:1.5rem;
                            padding-left:1.5rem;
                        }
                        .wrapper-input label{
                            font-size:12px;
                        }
                        .button,.button-google{
                            margin: 1.5rem 3rem;
                            border-radius:15px;
                            padding-top:1rem;
                            padding-bottom:1rem;
                        }
                        .button p{
                            font-size:13px!important;
                        }
                        .button-google p{
                            font-size:13px!important;
                        }
                        
                        .icon-eye{
                            display:block;
                            position:absolute;
                            right:1rem;
                            bottom:.25rem;
                        }
                        .container-check label{
                            font-size:11px;
                        }

                    }
                    @media (min-width: 1800px){
                        .container{
                            width:700px;
                        }
                        .container-login{
                            width:700px;
                        }
                        .card-login{
                            padding-left:2rem;
                            padding-right:2rem;
                        }
                        .button p{
                            font-size:18px!important;
                        }
                        .button-google p{
                            font-size:18px!important;
                        }
                        .wrapper-input label{
                            font-size:15px;
                        }
                        .container-check label{
                            font-size:12px;
                        }
                        .container-google{
                            padding:0 3rem;
                        }

                    }

                `}
            </style>
        </AppLayout>
    )
}
 
export default index;
