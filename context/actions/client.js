import axios from 'axios';
import Swal from "sweetalert2";


export const startRegisterClient = (data) => {
    console.log(data);
}


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
        const response = await axios.post(`http://localhost:3700/claim/register`, body)
        console.log('response after register', response);
        console.log('res after register', response.data.claim);
        if(response.data.isSuccess){
            const dataResponse = await axios.post(`http://localhost:3700/notificar`, response.data.claim)
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
