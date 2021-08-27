
import React, { useEffect, useReducer, useState } from 'react'
import { startLogin } from './actions/auth';
import { startAddToCart } from './actions/ui';
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
        getInitialAuthState();
        getInitialCartState();

    }, [])

    const getInitialAuthState = () => {
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

    const getInitialCartState = () =>{
        const cart = JSON.parse(localStorage.getItem('cart'));
        if(cart){
            console.log("Existe cart");
            dispatchUi(startAddToCart(cart));
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
