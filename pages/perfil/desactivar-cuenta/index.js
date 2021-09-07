import React, { useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";

import AppLayout from "../../../components/AppLayout";
import CustomButton from "../../../components/Perfil/CustomButton";
import TitlePerfil from "../../../components/Perfil/TitlePerfil";
import Description from "../../../components/Perfil/Description";
import Sidebar from "../../../components/Perfil/Sidebar";

const PerfilDesactivarCuenta = () => {
  const refPassword = useRef();
  const [password, setPassword] = useState();

  const handleInputChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRef = () => {
    const type = refPassword.current.type;
    type === "password"
      ? (refPassword.current.type = "text")
      : (refPassword.current.type = "password");
  };

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
      <div className="contenedor fade-in animated ">
        <div className="container-contenido">
          <div className="all-content">
            <div className="contenedor-flex">
              <div className="flex-left">
                <TitlePerfil name="Lucia" email="lucia@henribarrett.com" />
                <Sidebar active="desactivar" />
              </div>
              <div className="flex-right">
                <Description
                  path="Desactivar cuenta"
                  description="Aquí podrás desactivar tu cuenta si así lo deseas"
                />
                <div className="about-account">
                  <div className="ft-m-regular">
                    <div>
                      <p>
                        Para desactivar tu cuenta, debes ingresar tu contraseña.
                        <br className="show-br" /> Si la has olvidado puedes
                        <Link href="/registro">
                          <span className="link-registro ft-m-heavy">
                            {" "}
                            crear una nueva
                          </span>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="container-form">
                  <form>
                    <div className="wrapper-input">
                      <label className="show" htmlFor="password">
                        Ingresar contraseña actual:
                      </label>
                      <input
                        className="color-input input-placeholder"
                        type="password"
                        id="password"
                        name="password"
                        ref={refPassword}
                        value={password}
                        onChange={handleInputChange}
                        placeholder="Ingresa la contraseña"
                      />
                      <div
                        className="eye-icon"
                        onClick={() => handleRef(refPassword)}
                      >
                        <img src="/image/login/eye-reset.svg" alt="eye-icon" />
                      </div>
                    </div>
                    <div className="forgot-password">
                      <Link href="/recuperar-password">
                        <p className="ft-m-regular">
                          ¿Olvidaste tu contraseña?
                        </p>
                      </Link>
                    </div>
                  </form>
                </div>
                <div className="container-save">
                  <hr className="hide" />
                  <div className="f-to-right">
                    <CustomButton type="confirm">Guardar</CustomButton>
                    <CustomButton outline>Cancelar</CustomButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <WarningDesactivar /> */}
        </div>
      </div>

      <style jsx>
        {`
          .input-placeholder::placeholder {
            background-color: #ffffff;
            color: #ffffff;
          }
          /*RESET*/
          /********/
          .hide {
            display: none;
          }
          .show-br {
            display: none;
          }
          input {
            text-align: left !important;
          }
          input::placeholder {
            background: none !important;
          }
          input:focus {
            outline: none;
            box-shadow: none;
          }
          /**GLOBALS */
          p {
            margin: 0;
          }
          .ft-m-heavy {
            font-family: "mont-heavy" !important;
            font-weight: 800;
          }
          .ft-m-600 {
            font-family: "mont-semibold" !important;
            font-weight: 600;
          }
          .ft-m-regular {
            font-family: "mont-regular" !important;
          }
          .ft-m-light {
            font-family: "mont-light" !important;
          }
          .contenedor {
            padding: 10rem 1rem;
            margin: 0 1rem;
          }

          /* .container-contenido{
                        display:flex;
                        justify-content:center;
                        align-items:center;
                    } */

          /**about de la cuenta */

          .about-account {
            margin: 1rem 0 0 0;
            display: flex;
            align-items: center;
          }
          .about-account p {
            font-size: 1.5rem;
            color: #575650;
          }

          .link-registro {
            color: #ec608d !important;
          }

          /**Forgot */
          .forgot-password {
            margin-top: -1.5rem;
            margin-bottom: 1rem;
            display: flex;
            justify-content: flex-end;
          }
          .forgot-password p {
            font-size: 1.3rem;
            text-decoration-line: underline;
            color: #556ea1;
            mix-blend-mode: normal;
            opacity: 0.8;
          }

          /*Form */
          .container-form {
            width: 85%;
            background: #ffffff;
            border-radius: 20px;
            padding: 2rem 0.5rem 0 0.5rem;
          }
          .wrapper-input {
            position: relative;
            display: flex;
            flex-direction: column;
            margin-bottom: 2.5rem;
          }
          .eye-icon {
            cursor: pointer;
            position: absolute;
            right: 0.5rem;
            bottom: 0.6rem;
          }
          .wrapper-input label {
            font-family: "mont-light" !important;
            color: #575650;
            opacity: 0.8;
            font-size: 1.3rem;
            margin-bottom: 0.4rem;
          }
          .wrapper-input input {
            border: none;
            border-bottom: 1px solid #dadada;
            padding: 0.1rem 0.3rem;
            font-family: "mont-regular" !important;
            font-weight: 600;
            color: #575756;
            font-size: 1.3rem;
            margin-top: 0.5rem;
          }

          /**SAVE */
          .container-save {
            margin-top: 8rem;
          }
          /********Bloquear******/
          .opacity {
            opacity: 0.5;
          }

          /** */
          @media (min-width: 480px) and (max-width: 767px) {
            .container-contenido {
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .all-content {
              width: 45rem;
            }
          }

          @media (min-width: 768px) {
            .input-placeholder::placeholder {
              color: #556ea1;
            }
            .contenedor {
              padding: 8rem 0 12rem 0;
            }
            .show {
              display: none;
            }
            .hide {
              display: block;
            }
            .container-form {
              width: 50%;
            }
            .contenedor-flex {
              display: flex;
              padding: 0 2rem;
            }
            .flex-desktop {
              display: flex;
              justify-content: space-between;
            }
            .flex-left {
              flex-basis: 20%;
            }
            .flex-right {
              margin-left: 5rem;
              flex-basis: 70%;
            }

            .wrapper-input input {
              background: #ffffff;
              border: 1px solid #556ea1;
              box-sizing: border-box;
              border-radius: 15px;
              font-size: 1.4rem;
              padding: 1rem 1.5rem;
              color: #556ea1;
            }
            input::placeholder {
              background: none;
              text-align: left;
              font-weight: 600;
              font-size: 1.1rem;
              color: #556ea1;
            }
            .eye-icon {
              right: 1.4rem;
              bottom: 1.4rem;
            }
            .f-to-right {
              margin-top: 2rem;
              display: flex;
              flex-direction: row-reverse;
              align-items: center;
              justify-content: flex-start;
            }
            .forgot-password p {
              font-size: 1rem;
            }
            .container-save {
              margin-top: 12.75rem;
            }
          }
          @media (min-width: 1024px) {
            .contenedor-flex {
              justify-content: flex-start;
              padding: 0 3rem;
            }
            .flex-right {
              flex-basis: 60%;
            }
            .about-account p {
              font-size: 1.5rem;
            }
            .container-form {
              width: 35rem;
            }
            input::placeholder {
              font-size: 1.3rem;
            }
            .forgot-password p {
              font-size: 1.2rem;
            }

            .container-save {
              margin-top: 15.75rem;
            }
          }

          @media (min-width: 1280px) {
            .container-save {
              margin-top: 14.2rem;
            }
            .contenedor-flex {
              padding: 0 6rem;
            }
            .flex-right {
              flex-basis: 60%;
            }
            .container-form {
              width: 40rem;
            }
            .wrapper-input input,
            input::placeholder {
              font-size: 1.5rem;
            }
            .forgot-password p {
              font-size: 1.4rem;
            }
            .show-br {
              display: inline-block;
            }
          }
        `}
      </style>
    </AppLayout>
  );
};

export default PerfilDesactivarCuenta;
