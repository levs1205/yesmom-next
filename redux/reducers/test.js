import { types } from "../types/types";


const initialState = {
    test : "Testeando"
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