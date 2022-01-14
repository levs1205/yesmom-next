import axios from 'axios';
import Swal from "sweetalert2";


export const startRegisterClient = () => {
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
            subject : detalle,
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
        const [ response1, response2 ] = await Promise.all([ axios.post(`http://localhost:3700/notificar`, body), axios.post(`http://localhost:3700/claim/register`, body.bodyHtml) ])
        console.log('response1', response1.data)
        console.log('response2', response2.data)

        if(response1.data.result){
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
