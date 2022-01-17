import { types } from "../types";



export const clientReducer = ( state= { } , action) => {
    switch(action.type){
        case types.clientSetInfo : 
            return {
                ...state,
                data : action.payload.data
            }
        
        default : 
            return state;
    }
}