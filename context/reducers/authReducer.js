import { types } from "../types";
import cookieCutter from 'cookie-cutter'
import cookie from 'js-cookie';


export const authReducer = ( state = {} , action) => {

    switch (action.type) {
        case types.authLogin:
            //Setear siempre el token , con el autenticado
            localStorage.setItem('YesmomToken',action.payload.token);
						// cookieCutter.set('YesmomToken', action.payload.token)
            cookie.set('TokenTest',action.payload.token, { expires : 1/24})
            return {
                ...state,
                logged: true,
                token : action.payload.token
            }
        case types.authLogout:
            localStorage.removeItem('YesmomToken');
						// cookieCutter.set('YesmomToken', '')
                        cookie.remove('TokenTest');
            return {
                logged:false
            }
        case types.authStartChecking :
             return {
                 ...state,
                checking : true
             }
        case types.authFinishChecking :
             return {
                 ...state,
                checking : false
             }
        default:
            return state;
    }
    
}