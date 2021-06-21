import AppLayout from "../../components/AppLayout";
import Head from 'next/head';
import Link from "next/link";
import BotonInput from "../../components/Registro/BotonInput";


const index = () => {
    return ( 
        <AppLayout>
            <Head>
                <title>YesMom - Registro</title>
                <meta name="description" content="YesMom es ..."></meta>
                <meta property="og:type" content="website" />
                <meta property="og:title" content="YesMom - Registro" />
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
                <meta name="twitter:title" content="YesMom - Registro" />
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
                        <div className="container-text">
                            <p className="text-create">Crea una cuenta</p>
                            <p className="text-second">¡Tranquil@! Crear una cuenta en Yes Mom es gratis y toma menos de un minuto</p>
                        </div>
                        <div className="container-form">
                            <form>
                                <div className="wrapper-input">
                                    <label htmlFor="name" >Nombre y Apellido:</label>
                                    <input type="text" id="name" name="name"/>  
                                </div>

                                <div className="wrapper-input">
                                    <label htmlFor="email" >Dirección de correo electrónico:</label>
                                    <input type="text" id="email" name="email"/>
                                </div>

                                <div className="wrapper-input password">
                                    <label htmlFor="email" >Contraseña:</label>
                                    <input type="text" id="email" name="email"/>
                                    <div className="eye-icon">
                                        <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.5384 5.25857C13.8534 5.70143 13.8534 6.29929 13.5384 6.74143C12.5463 8.13357 10.1662 11 7.38741 11C4.6086 11 2.22847 8.13357 1.23642 6.74143C1.08318 6.52938 1 6.26851 1 6C1 5.73149 1.08318 5.47062 1.23642 5.25857C2.22847 3.86643 4.6086 1 7.38741 1C10.1662 1 12.5463 3.86643 13.5384 5.25857V5.25857Z" stroke="#575650" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M7.38745 8.14289C8.48838 8.14289 9.38086 7.1835 9.38086 6.00003C9.38086 4.81657 8.48838 3.85718 7.38745 3.85718C6.28652 3.85718 5.39404 4.81657 5.39404 6.00003C5.39404 7.1835 6.28652 8.14289 7.38745 8.14289Z" stroke="#575650" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </div>

                                {/* Country code picker */}
                                <div className="wrapper-input">
                                    <label>Número de teléfono:</label>
                                    <div className="flex-country">
                                        <input className="country" type="select" placeholder="pick"/>
                                        <input className="phone" type="tel"/>  
                                    </div>
                                </div>

                                <div className="wrapper-input">
                                    <label>Tienes hijos?</label>
                                    <div className="contenedor-buttons">
                                        <BotonInput type="filled">
                                            Si
                                        </BotonInput>
                                        <BotonInput type="outlined">
                                            No
                                        </BotonInput>
                                    </div>
                                </div>

                                <div className="wrapper-input">
                                    <label>Eres primeriza?</label>
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
                                
                                
                                {/* Control - class : opacity y disabled */}
                                <div className="opacity">

                                    <div className="container-select">  
                                        <p>Fecha de nacimiento de tú bebé</p>
                                        <div className="wrapper-date">
                                            <div className="select-input">
                                                <select placeholder="Dia">
                                                    <option selected>Dia</option>
                                                </select>
                                            </div>
                                            <div className="select-input">
                                                <select placeholder="Mes">
                                                    <option selected>Mes</option>
                                                </select>
                                            </div>
                                            <div className="select-input">
                                                <select placeholder="Año">
                                                    <option selected>Año</option>
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
                                        <label htmlFor="email">Ingresa su dirección de correo electrónico</label>
                                        <input type="email" id="email" name="email"/>
                                    </div>
                                </div>

                            </form>
                        </div>

                        <div className="contenedor-cuenta">
                            <div className="boton-purple">
                                <p>Crear cuenta</p>
                            </div>
                            <p className="terminos">¡Al hacer clic en crear cuenta! aceptas los 
                                <span> términos de uso y la política de privacidad </span> 
                                de Yes Mom.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>
                {`
                    /*RESET*/
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
                    input:focus{
                        outline:none;
                    }
                    /** */
                    .contenedor{
                        padding:8rem 0;
                        margin:0 1rem;
                    }
                    .container-contenido{
                        display:flex;
                        justify-content:center;
                        align-items:center;
                    }
                    .container-text{
                        text-align:center;
                    }
                    .text-create{
                        margin:0 0.2rem;
                        font-family:"mont-regular"!important;
                        color: #EC668D;
                        font-weight:600;
                        font-size:20px;
                    }
                    .text-second{
                        font-family:"mont-regular"!important;
                        color: #5A5A5A;
                        font-weight:600;
                        font-size:15px;
                    }
                    .text-second{
                        padding:0 1.5rem;
                    }
                    .container-form{
                        background: #FFFFFF;
                        border: 10px solid #FFFFFF;
                        box-shadow: 0px 0px 33px rgba(0, 0, 0, 0.13);
                        border-radius: 20px;
                        padding:1.25rem 0.5rem;
                        margin-bottom:3rem;
                    }
                    .wrapper-input{
                        position:relative;
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
                        padding:0.1rem 0.3rem;
                        font-family:"mont-regular"!important;
                        font-weight:600;
                        color:#575756;
                        font-size:13px;
                    }
                    /*Solo para el password */
                    .password{
                        position:relative;
                    }

                    .eye-icon{
                        position:absolute;
                        right:0.5rem;
                        top: 50%;
                        transform: translate(0, -20%);

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
                        font-size:11px;
                        color: #575650;
                        mix-blend-mode: normal;
                        opacity: 0.8;
                    }
                    .boton-purple{
                        background: #EC608D;
                        border-radius: 30px;
                        padding: 0.5rem 0;
                        margin-left:1rem;
                        margin-right:1rem;
                    }
                    .boton-purple p{
                        margin:0;
                        text-align:center;
                        font-family:"omnes-regular";
                        font-weight:500;
                        color:#FFFFFF;       
                    }
                    .terminos{
                        text-align:center;
                        margin:1rem 0;
                        font-family:"mont-light"!important;
                        font-size:13px;
                        font-weight:300;
                    }
                    .terminos span{
                        color:#556EA1;
                    }
                    .flex-country{
                        display:flex;
                    }
                    .country{
                        width:4rem;
                        margin-right:1rem;
                    }
                    .country::placeholder{
                        
                    }
                    .phone{
                        flex-grow:1;
                    }
                    .container-select{
                        margin:1rem 0;
                        display:flex;
                        flex-direction:column;
                    }
                    .container-select p{
                        margin:0;
                        font-family:"mont-light"!important;
                        font-size:13px;
                        font-weight:300;
                    }

                    .wrapper-date{
                        margin-top:0.5rem;
                        display:flex;
                        justify-content:space-between;
                        flex-wrap:wrap;
                    }
                    .wrapper-date .select-input{
                        flex-basis:calc( 50% - 0.25rem);
                    }
                    .select-input select{
                        width:100%;
                        border: 1px solid #575756;
                        box-sizing: border-box;
                        border-radius: 10px;
                        outline:none;
                        font-family:"mont-light"!important;
                        font-size:13px;
                        padding:0.5rem 0.8rem;
                        margin:0.5rem 0;
                        /** */
                        background: url("http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png") no-repeat right #ffffff;
                        -webkit-appearance: none;
                        -moz-appearance:    none;
                        appearance:         none;
                        background-position-x: calc(7rem);
                    }
                    /********Bloquear******/
                    .opacity{
                        opacity:0.5;
                    }
                `}
            </style>
        </AppLayout>
    );
}
 
export default index;