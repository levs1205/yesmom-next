import { types } from "../types";



export const uiReducer = ( state = {} , action) => {

    switch (action.type) {
        case types.loadBlogs:
            return {
                ...state,
                blogs : action.payload
            }
        
        default:
            return state;
    }
    
}