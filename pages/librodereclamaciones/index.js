import { useState , useContext , useEffect , useRef} from "react";
import AppLayout from "../../components/AppLayout";
import Head from "next/head";
import CustomButton from "../../components/Perfil/CustomButton";
import axios from 'axios';

//Validacion
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";


import { registerFormReclamos, startRegisterClient } from '../../context/actions/client'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schemaValidator = yup.object().shape({
  nombres: yup.string().required("El nombre es obligatorio"),
  apellidoPat: yup.string().required("El apellido paterno es obligatorio"),
  apellidoMat: yup.string().required("El apellido materno es obligatorio"),
  telf: yup.string().matches(phoneRegExp, "El teléfono no es válido").required("El teléfono es obligatorio"),
  mail: yup.string().email("El email no es valido").required("El email es obligatorio"),
  domicilio: yup.string().required("Ingrese una dirección de domicilio"),
  numberDoc: yup.string().required("El número de documento es obligatorio"),
  apoderado: yup.string().required("INgrese el nombre del apoderado"),
  monto: yup.string().required("El monto es obligatorio"),
  // name: yup.string().required("Ingrese el nombre de la tienda"),
  pedido: yup.string().required("Ingrese el pedido"),
  detalle: yup.string().required("Ingrese el detalle"),
  monto: yup.string().required("Ingrese el monto reclamado"),
  bienContratado: yup.string().required("Ingrese el bien contratado"),

});



const index = () => {

  const [ tipo, setTipo ] = useState('');
  const [ bien, setBien ] = useState('');
  const [ acuerdo, setAcuerdo ] = useState('');
  const [ tiendas, setTiendas ] = useState([]);
  const [ tiendasSelected, setTiendaSelected ] = useState([]);


  console.log('tiendasSelected', tiendasSelected);
  
  const fetchData = async () => {
    const API_URL = `${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_BUSINESS}/store/listtotal`;
    const { data } = await axios.get(API_URL);
    console.log('get tiendas', data.stores);
    setTiendas(data.stores);
  }

  useEffect(()  =>  {
    fetchData();
  }, [])

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidator),
  });


  const submitForm = (values) => {
    console.log('enviarrr')
    console.log('values h', values)
    let formValues = {
      ...values,
      tiendaSeleccionada: tiendasSelected,
    };
    console.log('formValues', formValues);
    registerFormReclamos(formValues);
  };

  const handleChangeBien = (e) => {
    console.log('e', e.target.value)
    setBien(e.target.value);
  }

  const handleChangeReclamo = (e) => {
    console.log('e', e.target.value)
    setTipo(e.target.value);
  }

  const handleChangeAcuerdo = (e) => {
    console.log('e', e.target.value)
    setAcuerdo(e.target.value);
  }

  const handleChangeTienda = (e) => {
    console.log('tienda', e.target.value)
    setTiendaSelected(e.target.value);
  }


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
                <form onSubmit={handleSubmit(submitForm)}>
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
                          {...register("numberDoc")}
                          />
                          <p className="error-input">{errors?.numberDoc?.message}</p>
                      </div>
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
                          {...register("apellidoPat")}
                        />
                      <p className="error-input">{errors?.apellidoPat?.message}</p>
                      </div>
                      <div className="wrapper-input">
                        <label htmlFor="apellidoMat">
                          Apellido Materno (*)
                        </label>
                        <input
                          type="text"
                          id="apellidoMat"
                          name="apellidoMat"
                          {...register("apellidoMat")}
                        />
                      <p className="error-input">{errors?.apellidoMat?.message}</p>
                      </div>
                    </div>
                    <div className="box-item">
                      <div className="wrapper-input">
                        <label htmlFor="nombres">Nombres (*)</label>
                        <input
                          type="text"
                          id="nombres"
                          name="nombres"
                          {...register("nombres")}
                          />
                      <p className="error-input">{errors?.nombres?.message}</p>
                      </div>
                      <div className="wrapper-input">
                        <label htmlFor="telf">Teléfono</label>
                        <input
                          type="text"
                          id="telf"
                          name="telf"
                          {...register("telf")}
                          />
                          <p className="error-input">{errors?.telf?.message}</p>
                      </div>
                    </div>
                    <div className="box-item">
                      <div className="wrapper-input">
                        <label htmlFor="apellidoPat">Domicilio</label>
                        <input
                          type="text"
                          id="domicilio"
                          name="domicilio"
                          {...register("domicilio")}
                        />
                      <p className="error-input">{errors?.domicilio?.message}</p>
                      </div>
                      <div className="wrapper-input">
                        <label htmlFor="apellidoMat">Email (*)</label>
                        <input
                          type="email"
                          id="mail"
                          name="mail"
                          {...register("mail")}
                        />
                      <p className="error-input">{errors?.mail?.message}</p>
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
                          {...register("apoderado")}
                        />
                      <p className="error-input">{errors?.apoderado?.message}</p>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <h4>2.- IDENTIFICACIONES DEL BIEN CONTRATADO</h4>
                    <div className="box-item">
                      <div className="wrapper-input">
                        <label htmlFor="name">Nombre de la tienda:</label>
                        <select onChange={handleChangeTienda}>
                          {tiendas.map(tienda => (
                            <option key={tienda._id} value={tienda.nombreTienda} >{tienda.nombreTienda}</option>
                          )
                          )}
                        </select>
                        {/* <p className="error-input">{errors?.name?.message}</p> */}
                      </div>
                      <div className="wrapper-input">
                        <label htmlFor="name">Monto Reclamado:</label>
                        <input 
                          type="number"
                          id="monto"
                          name="monto"
                          {...register("monto")}
                          />
                          <p className="error-input">{errors?.monto?.message}</p>
                      </div>
                    </div>
                    <div className="box-item box-item-checkbox">
                      <div className="wrapper-input">
                        <label htmlFor="name">Tipo:</label>
                        <div className="box-checkbox">
                          <input
                            type="radio"
                            value="producto"
                            id="producto"
                            name="bien"
                            {...register("tipoBien")}
                            onChange={handleChangeBien} 
                          />
                          <label htmlFor="producto">Producto (Relacionado a la compra de un bien,
                            sustentado con comprobante de pago.)</label>
                        </div>
                        <div className="box-checkbox">
                          <input
                            type="radio"
                            value="servicio"
                            id="servicio"
                            name="bien"
                            {...register("tipoBien")}
                            onChange={handleChangeBien}
                          />
                          <label htmlFor="servicio">Servicio (Relacionado al malestar o descontento
                            respecto a la atención recibida.)</label>
                        </div>
                      </div>
                    </div>
                    <div className="box-item box-item-checkbox">
                      <div className="wrapper-input">
                        <label htmlFor="name">
                          Descripción del bien contratado:
                        </label>
                        <div className="box-checkbox">
                          <textarea 
                            rows="4" 
                            maxLength="4000"
                            name="bienContratado"
                            {...register("bienContratado")}
                          />
                        </div>
                        <p className="error-input">{errors?.bienContratado?.message}</p>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <h4>3.- DETALLE DEL RECLAMACIÓN</h4>

                    <div className="box-item box-item-checkbox">
                      <div className="wrapper-input">
                        <label htmlFor="name">Tipo:</label>
                        <div className="box-checkbox">
                          <input
                            type="radio"
                            value="reclamo"
                            id="reclamo"
                            name="tipo"
                            {...register("tipoReclamo")}
                            onChange={handleChangeReclamo} 
                          />
                          <label htmlFor="reclamo">Reclamo(1)</label>
                        </div>
                        <div className="box-checkbox">
                          <input
                            type="radio"
                            value="queja"
                            id="queja"
                            name="tipo"
                            {...register("tipoReclamo")}
                            onChange={handleChangeReclamo} 
                          />
                          <label htmlFor="queja">Queja(2)</label>
                        </div>
                      </div>
                    </div>
                    <div className="box-item box-item-checkbox">
                      <div className="wrapper-input">
                        <label htmlFor="name">Detalle:</label>
                        <div className="box-checkbox">
                          <textarea 
                            rows="4" 
                            maxLength="4000"
                            name="detalle"
                            {...register("detalle")}
                          />
                        </div>
                          <p className="error-input">{errors?.detalle?.message}</p>
                      </div>
                    </div>
                    <div className="box-item box-item-checkbox">
                      <div className="wrapper-input">
                        <label htmlFor="name">Pedido:</label>
                        <div className="box-checkbox">
                          <textarea
                          rows="4"
                          maxLength="4000"
                          name="pedido"
                          {...register("pedido")}
                          />
                        </div>
                          <p className="error-input">{errors?.pedido?.message}</p>
                      </div>
                    </div>
                    <div className="box-item box-item-checkbox">
                      <div className="wrapper-input">
                        <div className="box-checkbox">
                          <input
                            type="radio"
                            value="acuerdo"
                            id="acuerdo"
                            name="acuerdo"
                            {...register("acuerdo")}
                            onChange={handleChangeAcuerdo}
                          />
                          <label htmlFor="acuerdo">Estoy de acuerdo con lo ingresado en esta Hoja de
                            Reclamaciones. Asimismo confirmo que los datos
                            ingresados son tomados como firma de esta solicitud.</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <CustomButton  className='btnStyle' fxClick={handleSubmit(submitForm)} >
                  Enviar
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .error-input {
            height: 1.5rem;
            margin-top:1rem;
            margin-bottom:1rem;
            font-family:"mont-bold";
            font-size:1.2rem;
            color:#ff0033;
          }
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
          .box-checkbox textarea {
            font-size: 1.3rem;
            font-weight: 600;
            font-family: "mont-regular"
            color: #575756;
          }
        `}
      </style>
    </AppLayout>
  );
};

export default index;
