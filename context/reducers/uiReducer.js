import { types } from "../types";



export const uiReducer = ( state = {} , action) => {

    switch (action.type) {
        //BLOG
        case types.setBlogs:
            return {
                ...state,
                blogs : {
                    totalBlogs : action.payload
                }
            }
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