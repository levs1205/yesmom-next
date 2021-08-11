import { 
    createStore, 
    applyMiddleware, 
    compose, 
    combineReducers 
} from "redux"
import thunk from "redux-thunk"

import { testReducer } from "../reducers/test";


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    test : testReducer,
})
const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducers, enhancer);

export default store;
