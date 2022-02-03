import { types } from "../types";



export const clientReducer = ( state= { } , action) => {
    switch(action.type){
        case types.clientSetInfo : 
            return {
                ...state,
                data : action.payload.data
            }
        case types.initRegister:
            return {
                isRegistering: true
            }
        case types.finishRegister:
            return {
                isRegistering: false
            }
        default : 
            return state;
    }
}