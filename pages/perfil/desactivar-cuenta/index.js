import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import AppLayout from '../../../components/AppLayout'
import CustomButton from '../../../components/Perfil/CustomButton'
import TitlePerfil from '../../../components/Perfil/TitlePerfil'
import Description from '../../../components/Perfil/Description'



const index = () => {
    return (
        <AppLayout>
            <Head>
                <title>YesMom - Desactivar cuenta</title>
                <meta name="description" content="YesMom es ..."></meta>
                <meta property="og:type" content="website" />
                <meta property="og:title" content="YesMom - Desactivar_cuenta" />
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
                <meta name="twitter:title" content="YesMom - Desactivar_cuenta" />
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
                        
                        <TitlePerfil name="Lucia" email="lucia@henribarrett.com" />
                        <Description path="Desactivar cuenta" description="Aquí podrás desactivar tu cuenta si así lo deseas" />
                        <div className="about-account">
                            <div className="ft-m-regular">
                                <div>
                                    <p>
                                    Para desactivar tu cuenta, debes ingresar tu contraseña. Si la has olvidado puedes
                                    </p>
                                    <Link href="/registro">
                                        <p className="link-registro ft-m-heavy hover-efect-letter">crear una nueva</p>
                                    </Link>
                                </div>
                                
                            </div>
                        </div>
                        <div className="container-form">
                            <form>
                                <div className="wrapper-input">
                                    <label htmlFor="password" >Ingresar contraseña actual:</label>
                                    <input className="show color-input" type="password" id="password" name="password"/>
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
                            </form>
                        </div>
                        <div className="container-save">
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
                        padding:14rem 1rem;
                        margin:0 1rem;
                    }
                    
                    /* .container-contenido{
                        display:flex;
                        justify-content:center;
                        align-items:center;
                    } */
                    
                    /**Descriptiom */
                    .description{
                        margin-top:2.5rem;
                    }
                    .p-description-secondary{
                        margin:1rem 0;
                        font-size:1.3rem;
                        color: #575650;
                    }
                    .p-description-primary{
                        font-size:1.8rem;
                        color: #5A5A5A;
                    }
                    /**about de la cuenta */

                    .about-account{
                        margin:1rem 0 0 0;
                        display:flex;
                        align-items:center;
                    }
                    .about-account p{
                        font-size:1.5rem;
                        color: #575650;
                    }
                    
                    .link-registro{
                        color:#EC608D!important;
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
                        margin-top:8rem;
                    }
                    /********Bloquear******/
                    .opacity{
                        opacity:0.5;
                    }
                `}
            </style>

        </AppLayout>
    )
}

export default index
