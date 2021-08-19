import { types } from "../types";



export const uiReducer = ( state = {} , action) => {

    switch (action.type) {
        case types.uiSetError:
            return {
               ...state,
               mssgError: action.payload
            }
        case types.uiRemoveError:
            return {
                ...state,
                mssgError: null
            }
        
        default:
            return state;
    }
    
}