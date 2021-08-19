import { types } from "../types";



export const authReducer = ( state={} , action) => {

    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
            }
        case types.login:
            return {}
    
        default:
            return state;
    }
    
}