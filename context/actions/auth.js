import axios from "axios"
import { types } from "../types"


const axiosAuth = axios.create({
    baseUrl : process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_SECURITY
})

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

        // console.log(token);
        // console.log(process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_SECURITY);
        // console.log(data);
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_SECURITY}/autenticar/token?delivery=no`,{
            headers : {
                'Content-Type' : 'application/json',
                'access-token' : token
            }
        })

        // console.log(data);
        if( data?.mensaje === "Token válido"){
           console.log('Autenticacion correcta');
            return startLogin( data )
        }else{
            console.log('Sesión terminada');   
            return startLogout;
        }

    }catch(err){
        console.log(err.message);
    }
}

export const startLoginWithGoogle = async ( values ) => {
    try {
        const { tokenId } = values ;
        console.log(tokenId);
        //LLamar endpoint para generar token
        // const { data } = await axiosAuth.get('/auth/google-profile',{ headers :  {
        //     'google-token' : tokenId
        // }})

        return { token : tokenId}

    }catch(error){
        console.log(error);
        alert('Error');
        return {}
    }
}

export const startLogout = {
    type : types.authLogout
}