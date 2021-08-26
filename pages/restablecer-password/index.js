import AppLayout from "../../components/AppLayout";
import Head from 'next/head';
import { useForm } from "../../hooks/useForm";
import { useRef } from "react";


const ResetPassword = () => {

    const refPassword = useRef();
    const refPassword_2 = useRef();

    const initialForm = {
        password : "",
        password_2 : "",
    }
    const [ formValues , handleInputChange ] = useForm(initialForm);

    const { password , password_2 } = formValues;


    const handleResetPassword = () => {

        if(password===password_2) {
            alert("oksss");
        }else{
            alert("no match")
        }
    }

    const handleRef = (refPassword) => {
        const type = refPassword.current.type;
        type === "password" ?  refPassword.current.type="text" : refPassword.current.type="password"
    }

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
                            <img src="/image/login/icon-user.svg" alt="user-yesmom" />
                        </div>
                        <div className="container-center">
                            <div className="container-text">
                                <p className="forgot-password">¿Olvidaste tu contraseña?</p>
                                <p className="texto">Este es el último paso para que <br/> restablecer tu contraseña</p>
                            </div>
                            <div className="container-form">
                                <form>
                                    <div className="wrapper-input">
                                        <label htmlFor="password" >Por favor ingresa una nueva contraseña</label>
                                        <input 
                                            className="color-input" 
                                            placeholder="Ingresar contraseña" 
                                            type="password" 
                                            id="password" 
                                            name="password"
                                            ref= { refPassword }
                                            value={ password }
                                            onChange ={ handleInputChange }
                                        />
                                        <div className="eye-icon" onClick={() => handleRef(refPassword)} >
                                            <img src="/image/login/eye-reset.svg" alt="eye-icon"/>
                                        </div>

                                    </div>
                                    <div className="wrapper-input">
                                        <input 
                                            className="color-input" 
                                            placeholder="Repetir contraseña" 
                                            type="password" 
                                            id="password_2" 
                                            name="password_2"
                                            ref= { refPassword_2 }
                                            value={ password_2}
                                            onChange={handleInputChange}
                                        />
                                        <div className="eye-icon" onClick={() => handleRef(refPassword_2)}>
                                            <img src="/image/login/eye-reset.svg" alt="eye-icon"/>
                                        </div>
                                    </div>
                                    <div className="boton pink" onClick={ handleResetPassword } >
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
 
export default ResetPassword;