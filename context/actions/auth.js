import axios from 'axios';
import { startValidateToken } from '../../helpers/validateToken';
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

        const { valid , data } = await startValidateToken(token);

        // console.log(data);
        if(!valid) return startLogout;
        return startLogin( data )
         
    }catch(err){
        console.log(err.message);
    }
}

export const startLoginWithGoogle = async ( values ) => {
    try {

        console.log(values);

        const { tokenId } = values ;
        console.log(tokenId);
        // LLamar endpoint para generar token
        const { data } = await axios.get(`https://security.yesmom.com.pe/auth/google-profile?userType=U`,{ headers :  {
            'google-token' : tokenId
        }})

        if(data?.token){
            return { token : data.token}
            // return { token : tokenId}
        }

    }catch(error){
        console.log(error);
        alert('Error');
        return {}
    }
}

export const startLoginWithFacebook = async ( values ) => {
    try {
        const { accessToken, userID } = values

        // const { tokenId } = values ;
        // console.log(tokenId);
        // //LLamar endpoint para generar token

        // const { data } = await axiosAuth.get(`/auth/facebook-profile?userId=${userID}`,{ headers :  {
        //     'facebook-token' : accessToken
        // }})
        // console.log('data', data)
        return { token : accessToken}

    }catch(error){
        console.log(error);
        alert('Error');
        return {}
    }
}

export const startLogout = {
    type : types.authLogout
}

export const startChecking = () => ({
    type : types.authStartChecking
})
export const finishChecking = () => ({
    type : types.authFinishChecking
})