import React from "react";
import Head from "next/head";
import AppLayout from "../../components/AppLayout";
import LoginInput from "../../components/Login/Logininput";

const Signin = () => {
  return (
    <AppLayout>
      <Head>
        <title>YesMom - Iniciar Sesión</title>
        <meta name="description" content="YesMom es ..."></meta>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="YesMom - Iniciar Sesión" />
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
        <meta name="twitter:title" content="YesMom - Ayuda" />
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
        <meta name="twitter:site" content="@JudithCristinaQ" />
        <meta name="twitter:creator" content="@JudithCristinaQ" />
      </Head>
      <div className="container box-login fade-in animated ">
        <form>
          <div className="form-container">
            <input
              name="correo"
              label="Dirección de correo electrónico o número de teléfono"
            />
            <input name="password" label="Contraseña" />
            <button type="submit" className="submit-signin">
              Ingresar
            </button>
          </div>
        </form>
      </div>
      <style jsx>
        {`
          .box-login {
            height: 25rem;
            padding-top: 15rem;
          }
        `}
      </style>
    </AppLayout>
  );
};

export default Signin;
