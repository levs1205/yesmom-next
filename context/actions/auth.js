import { types } from "../types"



export const startLogin = ( data ) => {

    return {
        type : types.authLogin,
        payload : {
            token : data.token
        }
    }
}

export const startLogout = {
    type : types.authLogout
}