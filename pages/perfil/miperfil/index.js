import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/bootstrap.css'

import AppLayout from '../../../components/AppLayout'
import CustomButton from '../../../components/Perfil/CustomButton'
import Description from '../../../components/Perfil/Description'
import Sidebar from '../../../components/Perfil/Sidebar'
import TitlePerfil from '../../../components/Perfil/TitlePerfil'
import BotonInput from '../../../components/Registro/BotonInput';



const index = () => {
    return (
        <AppLayout>
            <Head>
                <title>YesMom - Información Perfil</title>
                <meta name="description" content="YesMom es ..."></meta>
                <meta property="og:type" content="website" />
                <meta property="og:title" content="YesMom - Informacion Perfil" />
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
                <meta name="twitter:title" content="YesMom - Informacion Perfil" />
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
                                <Sidebar active="miperfil" />
                            </div>
                            <div className="flex-right">
                                <Description path="Mi perfil" description="Aquí encontrarás tus datos personales"/>
                                <div className="about-account">
                                    <p className="ft-m-regular">Información de la cuenta</p>
                                    <div className="icon-pencil">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.5642 1.69742C13.646 1.77942 13.6919 1.8905 13.6919 2.00629C13.6919 2.12209 13.646 2.23316 13.5642 2.31517L12.6516 3.22867L10.9016 1.47867L11.8142 0.565167C11.8963 0.483148 12.0075 0.437073 12.1236 0.437073C12.2396 0.437073 12.3508 0.483148 12.4329 0.565167L13.5642 1.69654V1.69742ZM12.033 3.84642L10.283 2.09642L4.32162 8.05867C4.27346 8.10681 4.23721 8.16554 4.21575 8.23017L3.51137 10.3424C3.4986 10.3809 3.49678 10.4222 3.50613 10.4617C3.51548 10.5012 3.53563 10.5373 3.56431 10.566C3.593 10.5947 3.6291 10.6148 3.66858 10.6242C3.70806 10.6335 3.74936 10.6317 3.78787 10.6189L5.90012 9.91454C5.96466 9.89333 6.02338 9.85738 6.07162 9.80954L12.033 3.84729V3.84642Z" fill="#575650"/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0.875 11.8125C0.875 12.1606 1.01328 12.4944 1.25942 12.7406C1.50556 12.9867 1.8394 13.125 2.1875 13.125H11.8125C12.1606 13.125 12.4944 12.9867 12.7406 12.7406C12.9867 12.4944 13.125 12.1606 13.125 11.8125V6.5625C13.125 6.44647 13.0789 6.33519 12.9969 6.25314C12.9148 6.17109 12.8035 6.125 12.6875 6.125C12.5715 6.125 12.4602 6.17109 12.3781 6.25314C12.2961 6.33519 12.25 6.44647 12.25 6.5625V11.8125C12.25 11.9285 12.2039 12.0398 12.1219 12.1219C12.0398 12.2039 11.9285 12.25 11.8125 12.25H2.1875C2.07147 12.25 1.96019 12.2039 1.87814 12.1219C1.79609 12.0398 1.75 11.9285 1.75 11.8125V2.1875C1.75 2.07147 1.79609 1.96019 1.87814 1.87814C1.96019 1.79609 2.07147 1.75 2.1875 1.75H7.875C7.99103 1.75 8.10231 1.70391 8.18436 1.62186C8.26641 1.53981 8.3125 1.42853 8.3125 1.3125C8.3125 1.19647 8.26641 1.08519 8.18436 1.00314C8.10231 0.921094 7.99103 0.875 7.875 0.875H2.1875C1.8394 0.875 1.50556 1.01328 1.25942 1.25942C1.01328 1.50556 0.875 1.8394 0.875 2.1875V11.8125Z" fill="#575650"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="container-form">
                                    <form>
                                        <div className="flex-desktop">
                                            <div className="wrapper-input">
                                                <label htmlFor="name" >Nombre y Apellido:</label>
                                                <input type="text" id="name" name="name"/>  
                                            </div>

                                            <div className="wrapper-input">
                                                <label htmlFor="email" >Dirección de correo electrónico:</label>
                                                <input type="email" id="email" name="email"/>
                                            </div>
                                        </div>

                                        {/* Country code picker */}
                                        
                                        <div className="wrapper-input">
                                            <label className="mb-4">Número de teléfono:</label>
                                            <PhoneInput
                                                countryCodeEditable={false}
                                                country="pe"
                                                inputClass="code-picker" 
                                                inputStyle={
                                                    {
                                                        width:"100%",
                                                        textAlign:"left",
                                                        borderRadius:"10px",
                                                        color:"#575650",
                                                        opacity: 0.8
                                                    }
                                                }
                                            />
                                        </div>

                                        <div className="flex-desktop">
                                            <div className="wrapper-input">
                                                <label className="change-color">¿Tienes hijos?</label>
                                                <div className="contenedor-buttons">
                                                    <BotonInput type="filled">
                                                        Si
                                                    </BotonInput>
                                                    <BotonInput type="outlined">
                                                        No
                                                    </BotonInput>
                                                </div>
                                            </div>
                                            <div className="w-45p">
                                                <div className="wrapper-input">
                                                    <label className="change-color">¿Eres primeriza?</label>
                                                    <div className="contenedor-buttons">
                                                        <BotonInput type="outlined">
                                                            No
                                                        </BotonInput>
                                                        <BotonInput type="filled">
                                                            Si
                                                        </BotonInput>
                                                    </div>
                                                </div>
                                                
                                                <div className="wrapper-checkbox">
                                                    <input type="checkbox" id="checkbox"/>
                                                    <label htmlFor="checkbox">Tengo más de un hijo.</label>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        
                                        {/* Control - class : opacity y disabled */}
                                        <div className="opacity">

                                            <div className="container-select">  
                                                <p>Fecha de nacimiento de tú bebé</p>
                                                <div className="wrapper-date">
                                                    <div className="select-input">
                                                        <select  placeholder="Mes">
                                                            <option>Dia</option>
                                                        </select>
                                                    </div>
                                                    <div className="select-input">
                                                        <select  placeholder="Dia">
                                                            <option>Mes</option>
                                                        </select>
                                                    </div>
                                                    <div className="select-input">
                                                        <select  placeholder="Año">
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
                                                <input type="email" id="email_2" name="email_2"/>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                                <div className="container-save">
                                    <div className="btn-save">
                                        <CustomButton >
                                            Guardar
                                        </CustomButton>
                                    </div>
                                    <div className="btn-cancel">
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

                    .flex-country{
                        display:flex;
                    }
                    .country{
                        width:4rem;
                        margin-right:1rem;
                    }
                    .phone{
                        flex-grow:1;
                    }
                    /**SELECT */
                    .container-select{
                        margin:2.5rem 0;
                        display:flex;
                        flex-direction:column;
                    }
                    .container-select p{
                        margin:0;
                        font-family:"mont-light"!important;
                        font-size:1.3rem;
                        font-weight:300;
                    }
                    .select-input select{
                        width:100%;
                        border: 1px solid #575756;
                        box-sizing: border-box;
                        border-radius: 10px;
                        outline:none;
                        font-family:"mont-light"!important;
                        font-size:1.3rem;
                        padding:1rem;
                        margin:0.5rem 0;
                        /** */
                        background: url("http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png") no-repeat right #ffffff;
                        -webkit-appearance: none;
                        -moz-appearance:    none;
                        appearance:         none;
                        background-position-x: 90%;
                    }
                    /**FECHAS */
                    .wrapper-date{
                        margin-top:0.5rem;
                        display:flex;
                        justify-content:space-between;
                        flex-wrap:wrap;
                    }
                    .wrapper-date .select-input{
                        flex-basis:calc( 50% - 1rem);
                    }
                    /**SAVE */
                    .container-save{
                        margin-top:4rem;
                    }
                    /********Bloquear******/
                    .opacity{
                        opacity:0.5;
                    }

                    @media (min-width:480px ) and (max-width:767px){
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
                        .container-form{
                            width:95%;
                        }
                        .contenedor-flex{
                            display:flex;
                            padding: 0 2rem;
                        }
                        hr{
                            margin-left:0;
                            margin-right:0;
                        }
                        {/* .flex-desktop{
                            display:flex;
                            justify-content:space-between;
                        } */}
                        .flex-left{
                            flex-basis:20%;
                        }
                        .flex-right{
                            margin-left:5rem;
                            flex-basis:70%;
                        }
                        .wrapper-input input{
                            width:70%;
                            background: #FFFFFF;
                            border: 1px solid #556EA1;
                            box-sizing: border-box;
                            border-radius: 20px;
                            font-size:1.4rem;
                            padding:1rem 1.5rem;
                            color:#556EA1;
                        }
                        .contenedor-buttons{
                            justify-content:flex-start;
                        }

                        .wrapper-date .select-input{
                            flex-basis:calc( 33.3% - 1rem);
                        }
                        .change-color{
                            font-family:"mont-regular"!important;
                            opacity:1!important;
                            color:#5A5A5A!important;
                        }
                        :global(.code-picker){
                            width:70%!important;
                        }
                        .btn-save,.btn-cancel{
                            margin-bottom:1rem;
                            padding:0 15rem;
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
                    }
                    @media (min-width:1280px){
                        .contenedor-flex{
                            padding: 0 6rem;
                        }
                        .flex-right{
                            flex-basis:60%;
                        }
                    }
                `}
            </style>

        </AppLayout>
    )
}

export default index
