
import React, { useReducer } from 'react'
import YesmomContext from './Context'
import { authReducer } from './reducers/authReducer';
import { uiReducer } from './reducers/uiReducer';

const Provider = ({children }) => {

    const initialState = {};
    const [ auth , dispatchAuth ] = useReducer( authReducer , initialState );
    const [ ui , dispatchUi ] = useReducer( uiReducer , initialState );

    return (
        <YesmomContext.Provider value={
            auth,
            ui,
            dispatchAuth,
            dispatchUi
        }>
            { children }
        </YesmomContext.Provider>
    )
}

export default Provider
