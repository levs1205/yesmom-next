import AppLayout from "../../components/AppLayout";

import Head from 'next/head';
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF ,faGoogle} from "@fortawesome/free-brands-svg-icons";


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
                <meta name="twitter:title" content="YesMom - Nosotros" />
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
                        <p>Icon Login</p>
                        <p className="p-purple ft-regular">Iniciar Sesión</p>
                        <p className="ft-regular welcome">¡Hola, Bienvenid@ a Yes Mom!</p>
                    </div>

                    <div className="card-login">
                        <form>
                            <div className="wrapper-input ft-light">
                                <label for="email">Dirección de correo electrónico o número de teléfono:</label>
                                <input name="email" id="email" type="text" />
                            </div>

                            <div className="wrapper-input ft-light">
                                <label for="email">Contraseña:</label>
                                <input name="password" id="password" type="password" />
                            </div>
                            <div className="check ft-light">
                                <div className="container-check">
                                    <input type="checkbox"/>
                                    <label for="checkbox">Recuerdame</label>
                                </div>
                                <Link href="#" className="href">aa</Link>

                            </div>
                            {/* Boton */}

                            <div className="button pink">
                                <p className="text-center f-o-regular f-white lt-3 sign">Ingresar</p>
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
                                <p className="text-center f-o-regular f-white lt-3">Ingresar con Facebook</p>
                            </div>

                            <div className="button-google container-icon">
                                <div className="icon-google">
                                    <FontAwesomeIcon icon={faGoogle} />
                                </div>
                                <p className="text-center f-o-regular lt-3">Ingresar con Google</p>
                            </div>

                        </form>
                    </div>
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
                        padding-top:5rem;
                        padding-bottom:3rem;
                    }
                    .container-login{
                        margin:2rem auto;
                    }
                    .p-purple{
                        color:#DC6A8D;
                        line-height: 46px;
                        font-size:1.5rem;
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
                        padding:0 0 3rem 0;
                    }
                    .wrapper-input{
                        margin-top:1rem;
                        margin-bottom:1rem;
                        display:flex;
                        flex-direction:column;
                        color: #575650;
                        opacity: 0.8;
                        font-size:1rem;
                        
                    }
                    .wrapper-input input{
                        height:2.5rem;
                        background: #FFFFFF;
                        opacity: 0.8;
                        border:none;
                        border-bottom: 1px solid #556EA1;
                        box-sizing: border-box;
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

                    }
                    .container-check label{
                        margin:0 0 0 1rem;
                        color: #575650;
                        mix-blend-mode: normal;
                        opacity: 0.8;
                        font-size:11px;
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
                        margin-right:1rem;
                    }
                    .button{
                        border-radius:30px;
                        padding-top:1rem;
                        padding-bottom:1rem;
                        margin:1rem 0;
                        cursor:pointer;
                        font-weight:500;
                    }

                    .button p{
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
                        padding-top:1rem;
                        padding-bottom:1rem;
                        color: #575756;
                        cursor:pointer;
                        font-weight:500;
                    }
                    .button-google p{
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
                    
                    /* Escalamiento */
                    
                `}
            </style>
        </AppLayout>
    )
}
 
export default index;
