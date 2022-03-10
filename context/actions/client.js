import { types } from "../types";
import axios from 'axios';
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';


export const startRegisterClient = (data) => {
    console.log(data);
}

export const initRegister = () => ({
    type : types.initRegister
})

export const finishRegister = () => ({
    type : types.finishRegister
})


export const registerFormReclamos = async ( values ) => {
    console.log('datos de formulario', values);
    try {
        // const { tokenId } = values ;
        // console.log(tokenId);
        // LLamar endpoint para generar token
        const { mail, detalle, acuerdo, apellidoMat, apellidoPat, apoderado, bienContratado, domicilio, monto, nombres, numberDoc, pedido, telf, tipoBien, tipoReclamo, tiendaSeleccionada } = values ;
        const body = { 
            principalEmail: mail,
            subject : 'Solicitud de Reclamo',
            bodyHtml : {
                acuerdo,
                apellidoMat,
                apellidoPat,
                apoderado,
                bienContratado,
                detalle,
                domicilio,
                mail,
                monto,
                nombres,
                numberDoc,
                pedido,
                telf,
                tipoBien,
                tipoReclamo,
                tiendaSeleccionada
            }
        }
        const response = await axios.post(`${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_BUSINESS}/claim/register`, body)
        console.log('response after register', response);
        console.log('res after register', response.data.claim);
        if(response.data.isSuccess){
            const dataResponse = await axios.post(`${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_BUSINESS}/notificar`, response.data.claim)
            console.log('response2', dataResponse);
            // .then(response2 => {
            //     console.log('response exito para notificar', response2);
            // })
            // .catch(error => {
            //     console.log(error);
            // })
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Envió correctamente',
                showConfirmButton: false,
                timer: 3000
            })
        }else{
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Vuelva a intentarlo',
                showConfirmButton: false,
                timer: 3000
            })
        }

    }catch(error){
        console.log(error);
        alert('Error');
        return {}
    }
}

export const successRegister = (data) => {
    if(data){
        const MySwal = withReactContent(Swal);
        MySwal.fire({
            html: <h2>Registro exitoso</h2>,
            customClass:{
                popup: 'register-error-popup',
                range: 'register-error-range',
                title :'register-error-title',
                actions :'register-error-actions',
                htmlContainer:'register-error-container',
            }
        });
        setTimeout(()=>{
            window.location.href="/login";
        },[500])

    }

    return {}
}

export const errorRegister = (err) => {
    if(err && err.response && err.response.data){
        const { data } = err.response;
        let messageError = '';
        if(data.CodigoRespuesta === '32'){
            messageError = 'Correo ya se encuentra en uso';
        }

        const MySwal = withReactContent(Swal);
        MySwal.fire({
            html: <h2>{messageError}</h2>,
            customClass:{
                popup: 'register-error-popup',
                range: 'register-error-range',
                title :'register-error-title',
                actions :'register-error-actions',
                htmlContainer:'register-error-container',
            }
        });
    }else{
        Swal.fire('Error');
    }

    return {};
}
