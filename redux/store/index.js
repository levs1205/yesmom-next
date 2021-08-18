import { 
    createStore, 
    applyMiddleware, 
    combineReducers, 
} from "redux"

import { HYDRATE ,createWrapper } from "next-redux-wrapper";

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk"

import { testReducer } from "../reducers/test";


const bindMiddleware = (middleware) => {
    return composeWithDevTools(applyMiddleware(...middleware));
}

const reducer = combineReducers({
    test :testReducer
}) 

const generalReducer = (state,action) => {
    if(action.type === HYDRATE){
        return {
            ...state,
            ...action.payload,
        }
    }else{
        return reducer(state,action);
    }
}


const initStore = () => {
    return createStore(generalReducer, bindMiddleware([thunk]))
}

export const wrapper = createWrapper(initStore);