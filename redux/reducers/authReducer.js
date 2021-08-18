import { types } from "../types/types";


const initialState = {
    logged: false
}
export const authReducer = ( state = initialState , action ) => {

    switch (action.type) {
        case types.login:
            return {
                logged:true
            };
    
        default:
            return state;
    }
}