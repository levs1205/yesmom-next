import { types } from "../types"



export const startLogin = ( data ) => {

    return {
        type : types.authLogin,
        payload : {
            token : data.token
        }
    }
}

export const startLoginWithGoogle = ( data) => {
    try {
        const { profileObj , tokenId } = data ;
        console.log(data);

        //LLamar endpoint para generar token


    }catch(error){
        console.log(error);
        alert('Error');
    }
}

export const startLogout = {
    type : types.authLogout
}