import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import AppLayout from '../../../components/AppLayout'
import CustomButton from '../../../components/Perfil/CustomButton'
import TitlePerfil from '../../../components/Perfil/TitlePerfil'
import Description from '../../../components/Perfil/Description'
import Sidebar from '../../../components/Perfil/Sidebar'


const index = () => {
    return (
        <AppLayout>
            <Head>
                <title>YesMom - Perfil_contraseña</title>
                <meta name="description" content="YesMom es ..."></meta>
                <meta property="og:type" content="website" />
                <meta property="og:title" content="YesMom - Contraseña" />
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
                <meta name="twitter:title" content="YesMom - Perfil_contraseña" />
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
                        <Link href="/perfil">
                            <div className="show return">
                                <div className="icon-return">
                                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M6.73017 12.8055C7.02875 13.0722 7.50353 13.0635 7.79062 12.7862C8.07772 12.5089 8.06841 12.0679 7.76983 11.8012L1.83439 6.5L7.76983 1.19882C8.06841 0.932146 8.07772 0.491136 7.79062 0.213797C7.50353 -0.0635432 7.02875 -0.0721905 6.73017 0.194482C6.73017 0.194482 0.232731 5.99252 0.209376 6.01508C0.0689399 6.15075 -0.000572481 6.32557 3.53057e-06 6.5C-0.000572496 6.67443 0.0689399 6.84925 0.209376 6.98492C0.232731 7.00748 6.73017 12.8055 6.73017 12.8055Z" fill="#EC668D"/>
                                    </svg>
                                </div>
                                <p className="ft-m-regular">Volver</p>
                            </div>
                        </Link>
                        <div className="contenedor-flex">
                            <div className="flex-left">
                                <TitlePerfil name="Lucia" email="lucia@henribarrett.com" />
                                <Sidebar active="password" />
                            </div>
                            <div className="flex-right">
                                <Description path="Contraseña" description="Aquí encontrarás tu contraseña. Si la quieres modificar asegúrate de que sea segura" />
                                <div className="about-account">
                                    <p className="ft-m-regular">Cambiar contraseña actual</p>
                                    <div className="icon-pencil">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.5642 1.69742C13.646 1.77942 13.6919 1.8905 13.6919 2.00629C13.6919 2.12209 13.646 2.23316 13.5642 2.31517L12.6516 3.22867L10.9016 1.47867L11.8142 0.565167C11.8963 0.483148 12.0075 0.437073 12.1236 0.437073C12.2396 0.437073 12.3508 0.483148 12.4329 0.565167L13.5642 1.69654V1.69742ZM12.033 3.84642L10.283 2.09642L4.32162 8.05867C4.27346 8.10681 4.23721 8.16554 4.21575 8.23017L3.51137 10.3424C3.4986 10.3809 3.49678 10.4222 3.50613 10.4617C3.51548 10.5012 3.53563 10.5373 3.56431 10.566C3.593 10.5947 3.6291 10.6148 3.66858 10.6242C3.70806 10.6335 3.74936 10.6317 3.78787 10.6189L5.90012 9.91454C5.96466 9.89333 6.02338 9.85738 6.07162 9.80954L12.033 3.84729V3.84642Z" fill="#575650"/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0.875 11.8125C0.875 12.1606 1.01328 12.4944 1.25942 12.7406C1.50556 12.9867 1.8394 13.125 2.1875 13.125H11.8125C12.1606 13.125 12.4944 12.9867 12.7406 12.7406C12.9867 12.4944 13.125 12.1606 13.125 11.8125V6.5625C13.125 6.44647 13.0789 6.33519 12.9969 6.25314C12.9148 6.17109 12.8035 6.125 12.6875 6.125C12.5715 6.125 12.4602 6.17109 12.3781 6.25314C12.2961 6.33519 12.25 6.44647 12.25 6.5625V11.8125C12.25 11.9285 12.2039 12.0398 12.1219 12.1219C12.0398 12.2039 11.9285 12.25 11.8125 12.25H2.1875C2.07147 12.25 1.96019 12.2039 1.87814 12.1219C1.79609 12.0398 1.75 11.9285 1.75 11.8125V2.1875C1.75 2.07147 1.79609 1.96019 1.87814 1.87814C1.96019 1.79609 2.07147 1.75 2.1875 1.75H7.875C7.99103 1.75 8.10231 1.70391 8.18436 1.62186C8.26641 1.53981 8.3125 1.42853 8.3125 1.3125C8.3125 1.19647 8.26641 1.08519 8.18436 1.00314C8.10231 0.921094 7.99103 0.875 7.875 0.875H2.1875C1.8394 0.875 1.50556 1.01328 1.25942 1.25942C1.01328 1.50556 0.875 1.8394 0.875 2.1875V11.8125Z" fill="#575650"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="container-form">
                                    <form>
                                        <div className="wrapper-input">
                                            <label className="show" htmlFor="hide password" >Ingresar contraseña actual:</label>
                                            <input className="show color-input" type="password" id="password" name="password"/>
                                            <input className="hide color-input" type="password" id="password" name="password" placeholder="Ingresa contraseña actual"/>
                                            <div className="eye-icon">
                                                <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.5384 5.25857C13.8534 5.70143 13.8534 6.29929 13.5384 6.74143C12.5463 8.13357 10.1662 11 7.38741 11C4.6086 11 2.22847 8.13357 1.23642 6.74143C1.08318 6.52938 1 6.26851 1 6C1 5.73149 1.08318 5.47062 1.23642 5.25857C2.22847 3.86643 4.6086 1 7.38741 1C10.1662 1 12.5463 3.86643 13.5384 5.25857V5.25857Z" stroke="#575650" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M7.38745 8.14289C8.48838 8.14289 9.38086 7.1835 9.38086 6.00003C9.38086 4.81657 8.48838 3.85718 7.38745 3.85718C6.28652 3.85718 5.39404 4.81657 5.39404 6.00003C5.39404 7.1835 6.28652 8.14289 7.38745 8.14289Z" stroke="#575650" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="forgot-password">
                                            <Link href="/recuperar-password">
                                                <p className="ft-m-regular">¿Olvidaste tu contraseña?</p>
                                            </Link>
                                        </div>
                                        <div className="wrapper-input">
                                            <label className="show" htmlFor="new_password" >Nueva contraseña:</label>
                                            <input className="show color-input" type="password" id="new_password" name="new_password"/>
                                            <input className="hide color-input" type="password" id="new_password" name="new_password" placeholder="Nueva contraseña"/>
                                            <div className="eye-icon">
                                                <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.5384 5.25857C13.8534 5.70143 13.8534 6.29929 13.5384 6.74143C12.5463 8.13357 10.1662 11 7.38741 11C4.6086 11 2.22847 8.13357 1.23642 6.74143C1.08318 6.52938 1 6.26851 1 6C1 5.73149 1.08318 5.47062 1.23642 5.25857C2.22847 3.86643 4.6086 1 7.38741 1C10.1662 1 12.5463 3.86643 13.5384 5.25857V5.25857Z" stroke="#575650" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M7.38745 8.14289C8.48838 8.14289 9.38086 7.1835 9.38086 6.00003C9.38086 4.81657 8.48838 3.85718 7.38745 3.85718C6.28652 3.85718 5.39404 4.81657 5.39404 6.00003C5.39404 7.1835 6.28652 8.14289 7.38745 8.14289Z" stroke="#575650" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>

                                        <div className="wrapper-input">
                                            <label className="show" htmlFor="repeat_password" >Repetir nueva contraseña:</label>
                                            <input className="show color-input" type="password" id="repeat_password" name="repeat_password"/>
                                            <input className="hide color-input" type="password" id="repeat_password" name="repeat_password" placeholder="Repetir nueva contraseña"/>
                                            <div className="eye-icon">
                                                <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.5384 5.25857C13.8534 5.70143 13.8534 6.29929 13.5384 6.74143C12.5463 8.13357 10.1662 11 7.38741 11C4.6086 11 2.22847 8.13357 1.23642 6.74143C1.08318 6.52938 1 6.26851 1 6C1 5.73149 1.08318 5.47062 1.23642 5.25857C2.22847 3.86643 4.6086 1 7.38741 1C10.1662 1 12.5463 3.86643 13.5384 5.25857V5.25857Z" stroke="#575650" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M7.38745 8.14289C8.48838 8.14289 9.38086 7.1835 9.38086 6.00003C9.38086 4.81657 8.48838 3.85718 7.38745 3.85718C6.28652 3.85718 5.39404 4.81657 5.39404 6.00003C5.39404 7.1835 6.28652 8.14289 7.38745 8.14289Z" stroke="#575650" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                                <div className="container-save">
                                    <hr className="hide" />
                                    <div className="f-to-right">
                                        <CustomButton>
                                            Guardar
                                        </CustomButton>
                                        <CustomButton outline>
                                            Cancelar
                                        </CustomButton>
                                    </div>
                                </div>       
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>
                {`  
                    /*RESET*/
                    /********/
                    .hide{
                        display:none;
                    }
                    input{
                        text-align:left!important;
                    }
                    input::placeholder{
                        background:none;
                    }
                    input:focus{
                        outline:none;
                        box-shadow:none;
                    }
                    /**GLOBALS */
                    p{
                        margin:0;
                    }
                    .ft-m-heavy{
                        font-family:"mont-heavy"!important;
                        font-weight:800;
                    }
                    .ft-m-600{
                        font-family:"mont-semibold"!important;
                        font-weight:600;
                    }
                    .ft-m-regular{
                        font-family:"mont-regular"!important;
                    }
                    .ft-m-light{
                        font-family:"mont-light"!important;
                    }
                    .contenedor{
                        padding:10rem 1rem;
                        margin:0 1rem;
                    }
                    
                    /**Return */
                    .return{
                        cursor:pointer;
                        display:flex;
                        align-items:center;
                        margin-bottom:2rem;
                    }
                    .return:hover{
                        transform:translateY(-1px);
                    }
                    .return p{
                        margin-left:1rem;
                        color:#EC668D;
                        font-size:1.3rem;
                        margin-top:0.5rem;
                    }


                    /**about de la cuenta */

                    .about-account{
                        margin:1rem 0 0 0;
                        display:flex;
                        align-items:center;
                    }
                    .about-account p{
                        font-size:1.3rem;
                        color: #575650;
                    }
                    .icon-pencil{
                        margin-left:1rem;
                        margin-top:-2.5px;
                    }
                    
                    /**Forgot */
                    .forgot-password{
                        margin-top:-1.5rem;
                        margin-bottom:1rem;
                        display:flex;
                        justify-content:flex-end;
                    }
                    .forgot-password p{
                        
                        font-size:1.3rem;
                        text-decoration-line: underline;
                        color: #556EA1;
                        mix-blend-mode: normal;
                        opacity: 0.8;
                    }

                    /*Form */
                    .container-form{
                        width:85%;
                        background: #FFFFFF;
                        border-radius: 20px;
                        padding:2rem 0.5rem 0 0.5rem;
                    }
                    .wrapper-input{
                        position:relative;
                        display:flex;
                        flex-direction:column;
                        margin-bottom:2.5rem;
                    }
                    .wrapper-input:nth-child(2),.wrapper-input:nth-child(3){
                        margin-bottom:1rem;
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

                    /**SAVE */
                    .container-save{
                        margin-top:4rem;
                    }
                    /********Bloquear******/
                    .opacity{
                        opacity:0.5;
                    }

                    @media (min-width:480px) and (max-width:767px){
                        .container-contenido{
                            display:flex;
                            justify-content:center;
                            align-items:center;
                        } 
                        .all-content{
                            width:45rem;
                        }
                    }
                    @media (min-width: 768px){
                        .contenedor{
                            padding:12rem 0;
                        }
                        .show{
                            display:none;
                        }
                        .hide{
                            display:block;
                        }
                        .container-form{
                            width:25rem;
                        }
                        .contenedor-flex{
                            display:flex;
                            padding: 0 2rem;
                        }
                        .flex-desktop{
                            display:flex;
                            justify-content:space-between;
                        }
                        .flex-left{
                            flex-basis:20%;
                        }
                        .flex-right{
                            margin-left:5rem;
                            flex-basis:70%;
                        }

                        .wrapper-input input{
                            background: #FFFFFF;
                            border: 1px solid #556EA1;
                            box-sizing: border-box;
                            border-radius: 20px;
                            font-size:1.4rem;
                            padding:1rem 1.5rem;
                            color:#556EA1;
                        }
                        input::placeholder{
                            background:none;
                            text-align:left;
                            font-weight: 600;
                            font-size: 1.1rem;
                            color: #556EA1;
                        }
                        .eye-icon{
                            right:1.4rem;
                            bottom:1.4rem;
                        }
                        .f-to-right{
                            margin-top:2rem;
                            display:flex;
                            flex-direction:row-reverse;
                            align-items:center;
                            justify-content:flex-start; 
                        }
                        .forgot-password p{
                            font-size:1rem;
                        }
                    
                    }
                    
                    @media (min-width:1024px){
                        .contenedor-flex{
                            justify-content:flex-start;
                            padding: 0 3rem;
                        }
                        .flex-right{
                            flex-basis:60%;
                        }
                        .about-account p{
                            font-size:1.5rem;
                        }
                        .container-form{
                            width:35rem;
                        }
                        input::placeholder{
                            font-size: 1.3rem;
                        }
                        .forgot-password p{
                            font-size:1.2rem;
                        }
                    }
                    
                    @media(min-width:1280px){
                        .contenedor-flex{
                            padding: 0 6rem;
                        }
                        .flex-right{
                            flex-basis:60%;
                        }
                        .container-form{
                            width:40rem;
                        }
                        .wrapper-input input,input::placeholder{
                            font-size: 1.6rem;
                        }
                        .forgot-password p{
                            font-size:1.4rem;
                        }
                    }
                    

                `}
            </style>

        </AppLayout>
    )
}

export default index
