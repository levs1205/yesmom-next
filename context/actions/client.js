
import { types } from "../types";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';



export const initRegister = () => ({
    type : types.initRegister
})

export const finishRegister = () => ({
    type : types.finishRegister
})

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