import validator from 'validator';

export const isValidLogin = (values) => {

    let error = "";

    if( !validator.isEmail(values.email)){
        error = "Correo electrónico invalido";
        return error;
    }
    if (values.password.trim().length <5 ){
        error = "Contraseña muy corta"
        return error;
    }


    return error;
}