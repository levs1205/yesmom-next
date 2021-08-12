import AppLayout from "../../components/AppLayout";
import Head from 'next/head';
import Link from "next/link";


const index = () => {
    return ( 
        <AppLayout>
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
            <div className="contenedor">
                <div className="container-contenido">
                    <div className="all-content">
                        <div className="center">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.6059 0C10.6008 0 0 10.6008 0 23.6059C0 26.7752 0.655717 29.9446 1.85787 32.786C2.07644 33.2232 2.40431 33.4417 2.84145 33.4417C2.95074 33.4417 3.16931 33.4417 3.2786 33.3324C3.82503 33.1139 4.04361 32.4581 3.82503 31.9117C2.73217 29.2888 2.07645 26.4474 2.07645 23.4966C2.07645 11.6937 11.6937 2.07645 23.4966 2.07645C35.2996 2.07645 44.9168 11.6937 44.9168 23.4966C44.9168 26.3381 44.3704 29.1795 43.2775 31.8024C43.059 32.3489 43.2775 33.0046 43.824 33.2232C44.3704 33.4417 45.0261 33.2232 45.2447 32.6767C46.4468 29.726 47.1026 26.666 47.1026 23.4966C47.2119 10.6008 36.611 0 23.6059 0Z" fill="#EC668D"/>
                                    <path d="M32.6768 17.8137C32.6768 12.7865 28.6331 8.74292 23.606 8.74292C18.5788 8.74292 14.5352 12.7865 14.5352 17.8137C14.5352 22.8409 18.5788 26.8845 23.606 26.8845C28.6331 26.8845 32.6768 22.8409 32.6768 17.8137ZM16.6116 17.8137C16.6116 13.9887 19.7809 10.8194 23.606 10.8194C27.431 10.8194 30.6003 13.9887 30.6003 17.8137C30.6003 21.6388 27.431 24.8081 23.606 24.8081C19.7809 24.8081 16.6116 21.6388 16.6116 17.8137Z" fill="#EC668D"/>
                                    <path d="M23.6059 31.256C14.863 31.256 9.28936 35.846 6.88506 38.6875C6.5572 39.1246 6.5572 39.7803 6.88506 40.1082C11.3658 44.589 17.2673 47.1026 23.6059 47.1026C29.9445 47.1026 35.9553 44.589 40.4361 40.1082C40.8732 39.6711 40.8732 39.0153 40.4361 38.6875C37.9225 35.846 32.3489 31.256 23.6059 31.256ZM23.6059 45.0261C18.1416 45.0261 13.1144 43.0589 9.07079 39.3432C11.9122 36.5017 16.6116 33.4417 23.6059 33.4417C30.491 33.4417 35.1903 36.5017 38.1411 39.3432C34.2067 42.9497 29.0703 45.0261 23.6059 45.0261Z" fill="#EC668D"/>
                            </svg>
                        </div>
                        <div className="container-center">
                            <div className="container-text">
                                <p className="forgot-password">¿Olvidaste tu contraseña?</p>
                                <p className="text">Te enviaremos un correo electrónico con los pasos a<br/> seguir para que puedas restablecer tu contraseña</p>
                            </div>
                            <div className="container-form">
                                <form>
                                    <div className="wrapper-input">
                                        <label htmlFor="email" >Por favor ingresa tu correo electronico</label>
                                        <input type="email" id="email" name="email"/>
                                    </div>
                                    
                                    <Link href="/restablecer-password">
                                        <div className="boton pink">
                                            <p>Continuar</p>
                                        </div>
                                    </Link>
                                    <div className="boton yellow">
                                        <p>Cancelar</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>
                {`  
                    input{
                        text-align:left;
                        border:none;
                    }
                    input:focus{
                        outline:none;
                        box-shadow:none;
                    }
                    input::placeholder{
                        background:none;
                    }
                    .center{
                        display:flex;
                        justify-content:center;
                        align-items:center;
                    }
                    .contenedor{
                        padding-top:8rem;
                        padding-bottom:8rem;
                        margin-left:2rem;
                        margin-right:2rem;
                        margin-top:0;
                    }
                    .container-contenido{
                        display:flex;
                        justify-content:center;
                        align-items:center;
                    }
                    .container-text{
                        text-align:center;
                    }
                    .forgot-password{
                        margin:0.2rem 0;
                        font-family:"mont-regular"!important;
                        color: #EC668D;
                        font-weight:600;
                        font-size:2rem;
                    }
                    .text{
                        margin:0.2rem 0;
                        font-family:"mont-regular"!important;
                        color: #575650;
                        font-weight:500;
                        font-size:1.3rem;
                    }
                    .container-form{
                        margin:3rem 0;
                        padding:3rem 1rem;
                        border: 10px solid #FFFFFF;
                        box-shadow: 0px 0px 33px rgba(0, 0, 0, 0.13);
                        border-radius: 20px;
                    }
                    .wrapper-input{
                        display:flex;
                        flex-direction:column;
                        margin-bottom:3rem;
                        font-family:"mont-regular"!important;
                    }
                    .wrapper-input label{
                        font-family:"mont-light"!important;
                        color: #575650;
                        opacity: 0.8;
                        font-size:1.3rem;
                        margin:0.1rem;
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
                        margin-top:1rem;
                    }
                    .boton{
                        text-align:center;
                        border-radius:30px;
                        padding:1rem 0;
                        margin-bottom:2rem;
                        cursor:pointer;
                    }
                    .boton p{
                        font-family:"omnes-regular"!important;
                        color:#FFFFFF;
                        font-size:2.3rem;
                        margin:0;
                    }
                    .pink{
                        background-color:#EC608D;
                        
                    }
                    .yellow{
                        background-color:#FEBF41;
                    }

                    @media (min-width:480px){
                        .contenedor{
                            padding-top:8rem;
                            padding-bottom:10rem;
                        }
                    }
                    @media (min-width:769px){
                        .all-content{
                            width:40rem;
                        }
                        .forgot-password{
                            font-size:2.5rem;
                            color:#DC6A8D;
                        }
                        .container-form{
                            margin-top:2rem;
                            padding:4rem 4rem;
                        }
                        .wrapper-input label{
                            margin-bottom:1rem;
                        }
                        .wrapper-input input{
                            border: 1px solid #556EA1;
                            box-sizing: border-box;
                            border-radius: 10px;
                            padding:1.5rem 2rem;
                            font-family:"mont-regular"!important;
                            color:#556EA1;
                        }
                        .boton{
                            border-radius:15px;
                            margin-top:0;
                        }
                        .boton p{
                            font-family:"omnes-bold"!important;
                            font-size:1.5rem;
                        }
                        .pink{
                            background-color:#DC6A8D;
                        }
                    }
                    @media (min-width:1024px){
                        .all-content{
                            width:40rem;
                        }
                        .forgot-password{
                            font-size:3rem;
                        }
                    }
                    @media (min-width:1280px){
                        .container-form{
                            padding:3rem 2rem;
                        }
                        .wrapper-input label{
                            font-size:1.5rem;
                        }
                        .wrapper-input input{
                            padding:1rem;
                            font-size:1.5rem;
                        }
                        .boton{
                            margin-top:1.5rem;
                        }
                    }

                `}
            </style>
        </AppLayout>
    );
}
 
export default index;