import axios from "axios"
import { types } from "../types"



export const startLogin = ( data ) => {

    return {
        type : types.authLogin,
        payload : {
            token : data.token
        }
    }
}

export const validateToken = async (token) => {
    try{

        console.log(token);
        console.log(process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_SECURITY);
        // console.log(data);
        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_SECURITY}/autenticar/token?delivery=no`,{},{
            headers : {
                'Content-Type' : 'application/json',
                'access-token' : token

            }
        })
    }catch(err){
        console.log(err);
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