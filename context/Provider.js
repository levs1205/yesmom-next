
import React, { useEffect, useReducer, useState } from 'react'
import { startLogin } from './actions/auth';
import YesmomContext from './Context'
import { authReducer } from './reducers/authReducer';
import { uiReducer } from './reducers/uiReducer';


/* export async function getServerSideProps(){
    const res = await fetch("http://localhost:3000/api/product");
    const product = await res.json();
  
  
    return {
      props : {
        product
      }
    }
  
  } */

const Provider = ({children }) => {
    const initialState = {};
    const [ auth , dispatchAuth ] = useReducer( authReducer , initialState);
    const [ ui , dispatchUi ] = useReducer( uiReducer , initialState );

    useEffect(() => {
        getInitialState();
    }, [])

    const getInitialState = () => {
        const token = localStorage.getItem('YesmomToken');
        if(token){
            console.log("Autenticado de nuevo");
            dispatchAuth( startLogin({
                token: token
            }))
        }else{
            dispatchAuth({})
        }
    }


    return (
        <YesmomContext.Provider value={{
            auth,
            ui,
            dispatchAuth,
            dispatchUi,
        }
        }>
            { children }
        </YesmomContext.Provider>
    )
}

export default Provider
