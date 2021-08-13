import AppLayout from "../../components/AppLayout";
import Head from 'next/head';


const index = () => {
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
                                <p className="texto">Este es el último paso para que <br/> restablecer tu contraseña</p>
                            </div>
                            <div className="container-form">
                                <form>
                                    <div className="wrapper-input">
                                        <label htmlFor="email" >Por favor ingresa una nueva contraseña</label>
                                        <input className="show color-input" placeholder="Ingresar contraseña" type="password" id="password" name="password"/>
                                        <input className="hide color-input" placeholder="Nueva contraseña" type="password" id="password" name="password"/>
                                        <div className="eye-icon">
                                            <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.5384 5.25857C13.8534 5.70143 13.8534 6.29929 13.5384 6.74143C12.5463 8.13357 10.1662 11 7.38741 11C4.6086 11 2.22847 8.13357 1.23642 6.74143C1.08318 6.52938 1 6.26851 1 6C1 5.73149 1.08318 5.47062 1.23642 5.25857C2.22847 3.86643 4.6086 1 7.38741 1C10.1662 1 12.5463 3.86643 13.5384 5.25857V5.25857Z" stroke="#575650" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M7.38745 8.14289C8.48838 8.14289 9.38086 7.1835 9.38086 6.00003C9.38086 4.81657 8.48838 3.85718 7.38745 3.85718C6.28652 3.85718 5.39404 4.81657 5.39404 6.00003C5.39404 7.1835 6.28652 8.14289 7.38745 8.14289Z" stroke="#575650" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>

                                    </div>
                                    <div className="wrapper-input">
                                        <input className="color-input" placeholder="Repetir contraseña" type="password" id="new_password" name="new_password"/>
                                        <div className="eye-icon">
                                            <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.5384 5.25857C13.8534 5.70143 13.8534 6.29929 13.5384 6.74143C12.5463 8.13357 10.1662 11 7.38741 11C4.6086 11 2.22847 8.13357 1.23642 6.74143C1.08318 6.52938 1 6.26851 1 6C1 5.73149 1.08318 5.47062 1.23642 5.25857C2.22847 3.86643 4.6086 1 7.38741 1C10.1662 1 12.5463 3.86643 13.5384 5.25857V5.25857Z" stroke="#575650" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M7.38745 8.14289C8.48838 8.14289 9.38086 7.1835 9.38086 6.00003C9.38086 4.81657 8.48838 3.85718 7.38745 3.85718C6.28652 3.85718 5.39404 4.81657 5.39404 6.00003C5.39404 7.1835 6.28652 8.14289 7.38745 8.14289Z" stroke="#575650" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="boton pink">
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
                    .hide{
                        display:none;
                    }
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
                        text-align:left;
                        font-family: "mont-regular"!important;
                        font-weight: 600;
                        font-size: 0.6rem;
                        color: #575756;
                    }
                    .center{
                        display:flex;
                        justify-content:center;
                        align-items:center;
                    }
                    .contenedor{
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

                    .texto{
                        text-align:center;
                        margin:0.2rem 0;
                        font-family:"mont-regular"!important;
                        color: #575650;
                        font-weight:500;
                        font-size:1.3rem;
                    }
                    .container-form{
                        margin:1.5rem 0;
                        padding:2rem 0.5rem;
                        border: 10px solid #FFFFFF;
                        box-shadow: 0px 0px 33px rgba(0, 0, 0, 0.13);
                        border-radius: 20px;
                    }
                    .wrapper-input{
                        position:relative;
                        display:flex;
                        flex-direction:column;
                        margin-bottom:3rem;
                    }
                    .eye-icon{
                        cursor:pointer;
                        position:absolute;
                        right:0.5rem;
                        bottom:0.6rem;
                    }
                    .wrapper-input label{
                        font-family:"mont-light"!important;
                        color: #575650;
                        opacity: 0.8;
                        font-size:1.3rem;
                        margin-bottom:1rem;
                        
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
                    }
                    .wrapper-input input::placeholder{
                        font-size:1.3rem;
                    }
                    .boton{
                        text-align:center;
                        border-radius:30px;
                        padding:0.5rem 0;
                        margin-bottom:1rem;
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

                    @media(min-width:480px){
                        .container-contenido{
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        }
                        .all-content{
                            width:40rem;
                        }
                        .contenedor{
                            padding-bottom: 6rem;
                        }
                        .container-form{
                            padding:1rem 0.5rem;
                        }
                        .boton{
                            padding:1rem 0;
                        }

                        .forgot-password{
                            font-size:2rem;
                        }
                        .wrapper-input label{
                            font-size:1.4rem;
                        }
                        .wrapper-input input{
                            font-size:1.4rem;
                        }

                    }

                    @media (min-width:769px){
                        .all-content{
                            width:40rem;
                        }
                        .show{
                            display:none;
                        }
                        .hide{
                            display:block;
                        }
                        .contenedor{
                            padding-bottom:10rem;
                        }
                        .container-form{
                            padding:4rem 4rem;
                        }
                        .wrapper-input input{
                            border: 1px solid #556EA1;
                            box-sizing: border-box;
                            border-radius: 15px;
                            padding:1rem;
                            font-family:"mont-regular"!important;
                            color:#556EA1;
                            font-size:1.4rem;
                        }
                        .wrapper-input input::placeholder{
                            font-size:1.4rem;
                            color:#556EA1;
                        }
                        .boton{
                            border-radius:15px;
                            margin-top:3rem;
                            padding:1.5rem 0;
                        }
                        .boton p{
                            font-family:"omnes-bold"!important;
                            font-size:1.5rem;
                        }
                        .eye-icon{
                            right:2rem;
                            bottom:1.75rem;
                        }
                    }

                    @media (min-width:1024px){
                        .forgot-password{
                            font-size:3rem;
                        }
                        .wrapper-input label{
                            font-size:1.2rem;
                        }
                    }
                    @media (min-width:1280px){
                        .eye-icon{
                            right:1.25rem;
                            bottom:1.5rem;
                        }
                    }
                    
                `}
            </style>
        </AppLayout>
    );
}
 
export default index;