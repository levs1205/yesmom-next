import { types } from "../types";
import cookieCutter from 'cookie-cutter'



export const authReducer = ( state = {} , action) => {

    switch (action.type) {
        case types.authLogin:
            //Setear siempre el token , con el autenticado
            localStorage.setItem('YesmomToken',action.payload.token);
						cookieCutter.set('YesmomToken', action.payload.token)
            return {
                ...state,
                logged: true,
                token : action.payload.token
            }
        case types.authLogout:
            localStorage.removeItem('YesmomToken');
						cookieCutter.set('YesmomToken', '')
            return {
                logged:false
            }
    
        default:
            return state;
    }
    
}