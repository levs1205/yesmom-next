import { types } from "../types";



/* const initialState= {
    cart :[{id :"20"}]
} */

export const uiReducer = ( state = {} , action) => {
    /* console.log("STATEINICIAL",state);
    console.log(action.payload); */
    /* debugger */
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
        //CART
        case types.addToCart:

        //Añades uno
            const cart = state.cart ? [...state.cart,action.payload] : [ action.payload] ;  
            localStorage.setItem('cart',JSON.stringify(cart));
            return {
                ...state,
                cart
            }
        
        default:
            return state;
    }
    
}