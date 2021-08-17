import { types } from "../types/types";


const initialState = {
    logged: true
}
export const testReducer = ( state = initialState , action ) => {

    switch (action.type) {
        case types.test:
            return {
                test : "TEST PASSED"
            };
    
        default:
            return state;
    }
}