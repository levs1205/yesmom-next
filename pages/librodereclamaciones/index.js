import React from "react";
import AppLayout from "../../components/AppLayout";
import Head from "next/head";
import CustomButton from "../../components/Perfil/CustomButton";

const index = () => {
  return (
    <AppLayout>
      <Head>
        <title>YesMom - Términos y condiciones</title>
        <meta
          name="description"
          content="YesMom es Yes Mom es una plataforma digital peruana que ayuda a las
                        mamis a disfrutar su maternidad sin preocupaciones. Queremos
                        ser la marca aliada que todos los papás estuvieron buscando,
                        una página web que reúne en un solo lugar todo lo que
                        necesitan para la llegada de su bebé y acompañar su
                        crecimiento."
        ></meta>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="YesMom - Login" />
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
          content="https://www.yesmom.com.pe/_next/image?url=%2Fimage%2Fheader%2Flogo-yesmom.svg&w=128&q=75"
        />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="855" />
        <meta property="og:site_name" content="Yes Mom" />
        {/* <meta property="og:url" content={`${user.id}`} />  */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="YesMom - Login" />
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
          content="https://www.yesmom.com.pe/_next/image?url=%2Fimage%2Fheader%2Flogo-yesmom.svg&w=128&q=75"
        />
      </Head>
      <div className="container">
        <div className="box-terminos">
          <div className="box-title-reclamaciones">
            <p className="title-reclamaciones">Libro de reclamaciones</p>
            <p className="text-reclamaciones">
              ¿Tienes algo que contarnos? Este es el lugar
            </p>
          </div>
          <div className="">
            <div className="container">
              <div className="container-form">
                <form >
                  <div className="">
                    <h4>1.- IDENTIFICACIONES DEL CONSUMIDOR RECLAMANTE</h4>
                    <div className="box-item">
                      <div className="wrapper-input">
                        <label htmlFor="name">Tipo de Documento:</label>
                        <select>
                          <option value="dni">DNI</option>
                          <option value="ce">CE</option>
                          <option value="otros">Otros</option>
                        </select>
                      </div>
                      <div className="wrapper-input">
                        <label htmlFor="numberDoc">
                          Número de Documento (*)
                        </label>
                        <input 
                          type="number" 
                          id="numberDoc" 
                          name="numberDoc"
                          // {...register("numberDoc")}
                          />
                      </div>
                      {/* <p className="error-input">{errors?.fullname?.message}</p> */}
                    </div>
                    <div className="box-item">
                      <div className="wrapper-input">
                        <label htmlFor="apellidoPat">
                          Apellido Paterno (*)
                        </label>
                        <input
                          type="text"
                          id="apellidoPat"
                          name="apellidoPat"
                          // {...register("apellidoPat")}
                        />
                      </div>
                      <div className="wrapper-input">
                        <label htmlFor="apellidoMat">
                          Apellido Materno (*)
                        </label>
                        <input
                          type="text"
                          id="apellidoMat"
                          name="apellidoMat"
                          // {...register("apellidoMat")}
                        />
                      </div>
                    </div>
                    <div className="box-item">
                      <div className="wrapper-input">
                        <label htmlFor="nombres">Nombres (*)</label>
                        <input
                          type="text"
                          id="nombres"
                          name="nombres"
                          // {...register("nombres")}
                          />
                      </div>
                      <div className="wrapper-input">
                        <label htmlFor="telf">Teléfono</label>
                        <input
                          type="text"
                          id="telf"
                          name="telf"
                          // {...register("telf")}
                          />
                      </div>
                    </div>
                    <div className="box-item">
                      <div className="wrapper-input">
                        <label htmlFor="apellidoPat">Domicilio</label>
                        <input
                          type="text"
                          id="domicilio"
                          name="domicilio"
                          // {...register("domicilio")}
                        />
                      </div>
                      <div className="wrapper-input">
                        <label htmlFor="apellidoMat">Email (*)</label>
                        <input
                          type="email"
                          id="mail"
                          name="mail"
                          // {...register("mail")}
                        />
                      </div>
                    </div>
                    <div className="box-item">
                      <div className="wrapper-input">
                        <label htmlFor="apoderado">
                          Padre ó Madre (En el caso de ser menor de edad)
                        </label>
                        <input
                          type="text"
                          id="apoderado"
                          name="apoderado"
                          // {...register("apoderado")}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <h4>2.- IDENTIFICACIONES DEL BIEN CONTRATADO</h4>
                    <div className="box-item">
                      <div className="wrapper-input">
                        <label htmlFor="name">Nombre de la tienda:</label>
                        <input 
                        type="text" 
                        id="name" 
                        name="name" />
                      </div>
                      <div className="wrapper-input">
                        <label htmlFor="name">Monto Reclamado:</label>
                        <input type="number" id="monto" name="monto" />
                      </div>
                    </div>
                    <div className="box-item box-item-checkbox">
                      <div className="wrapper-input">
                        <label htmlFor="name">Tipo:</label>
                        <div className="box-checkbox">
                          <input type="checkbox" id="name" name="name" />
                          <label htmlFor="name">
                            Producto (Relacionado a la compra de un bien,
                            sustentado con comprobante de pago.)
                          </label>
                        </div>
                        <div className="box-checkbox">
                          <input type="checkbox" id="name" name="name" />
                          <label htmlFor="name">
                            Servicio (Relacionado al malestar o descontento
                            respecto a la atención recibida.)
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="box-item box-item-checkbox">
                      <div className="wrapper-input">
                        <label htmlFor="name">
                          Descripción del bien contratado:
                        </label>
                        <div className="box-checkbox">
                          <textarea rows="4" maxLength="4000"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <h4>3.- DETALLE DEL RECLAMACIÓN</h4>

                    <div className="box-item box-item-checkbox">
                      <div className="wrapper-input">
                        <label htmlFor="name">Tipo:</label>
                        <div className="box-checkbox">
                          <input type="checkbox" id="name" name="name" />
                          <label htmlFor="name">Reclamo(1)</label>
                        </div>
                        <div className="box-checkbox">
                          <input type="checkbox" id="name" name="name" />
                          <label htmlFor="name">Queja(2)</label>
                        </div>
                      </div>
                    </div>
                    <div className="box-item box-item-checkbox">
                      <div className="wrapper-input">
                        <label htmlFor="name">Detalle:</label>
                        <div className="box-checkbox">
                          <textarea rows="4" maxLength="4000"></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="box-item box-item-checkbox">
                      <div className="wrapper-input">
                        <label htmlFor="name">Pedido:</label>
                        <div className="box-checkbox">
                          <textarea rows="4" maxLength="4000"></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="box-item box-item-checkbox">
                      <div className="wrapper-input">
                        <div className="box-checkbox">
                          <input type="checkbox" id="name" name="name" />
                          <label htmlFor="name">
                            Estoy de acuerdo con lo ingresado en esta Hoja de
                            Reclamaciones. Asimismo confirmo que los datos
                            ingresados son tomados como firma de esta solicitud.
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <CustomButton >
                  Enviar
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .box-terminos {
            width: 100%;
            padding-top: 7rem;
            padding-bottom: 8rem;
            margin-top: 0;
          }
          .box-title-reclamaciones {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            margin-top: 8rem;
          }

          .title-reclamaciones {
            font-family: "mont-regular" !important;
            font-weight: 600;
            font-size: 2rem;
            color: #ec668d;
          }
          .text-reclamaciones {
            font-family: "mont-regular" !important;
            font-weight: 600;
            color: #5a5a5a;
            font-size: 1.5rem;
          }
          .container-form {
            margin: 1.5rem 0;
            padding: 2rem 0.5rem;
            border: 10px solid #ffffff;
            box-shadow: 0px 0px 33px rgba(0, 0, 0, 0.13);
            border-radius: 20px;
          }
          .box-item {
            display: flex;
            padding: 2rem;
            width: 100%;
          }
          .wrapper-input {
            display: flex;
            flex-direction: column;
            margin-bottom: 1.5rem;
            width: 50%;
          }
          .wrapper-input label {
            font-family: "mont-light" !important;
            color: #575650;
            opacity: 0.8;
            font-size: 1.3rem;
            margin-bottom: 0.4rem;
          }
          .wrapper-input input,
          .wrapper-input select {
            border: none;
            border-bottom: 1px solid #dadada;
            padding: 0.3rem;
            padding-bottom: 0.1rem;
            font-family: "mont-regular" !important;
            font-weight: 600;
            color: #575756;
            font-size: 1.3rem;
            text-align: left;
            margin-top: 1rem;
            width: 90%;
          }
          .box-item-checkbox {
            width: 100%;
          }
          .box-item-checkbox .wrapper-input {
            width: 100%;
          }

          .box-checkbox {
            display: flex;
            justify-content: flex-start;
            width: 100%;
            align-items: center;
          }
          .box-checkbox input {
            width: 3%;
            margin-top: 0rem !important;
          }
          .box-checkbox label {
            margin-bottom: 0rem !important;
          }
          .box-checkbox textarea {
            width: 100%;
          }
        `}
      </style>
    </AppLayout>
  );
};

export default index;
