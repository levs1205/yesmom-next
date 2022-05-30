import { types } from "../types";


const initialState = []

export const saleReducer = ( state = initialState , action ) => {
    switch (action.type) {
        case types.setDelivery:
            
            return {
                ...state,
                delivery : action.payload
            }
    
        default:
            return state;
    }
}