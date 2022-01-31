
import React, { useEffect, useReducer } from 'react'
import { finishChecking, startChecking, validateToken ,startLogout,startLogin, initializeData} from './actions/auth';
import { startAddToCart } from './actions/ui';
import YesmomContext from './Context'
import { authReducer } from './reducers/authReducer';
import { uiReducer } from './reducers/uiReducer';
import { clientReducer } from './reducers/clientReducer';
import { saleReducer } from './reducers/saleReducer';

import {postApiSecurity} from '../helpers/httpCreators';
import { initRegister, finishRegister, errorRegister, successRegister } from './actions/client';


const Provider = ({children }) => {


    const initialState = {};
    const initialAuthState = {
        logged : false,
        token : null,
        checking : true
    }
    const initialClientState = {
        isRegistering : false,
    }
    const [ auth , dispatchAuth ] = useReducer( authReducer , initialAuthState);
    const [ client , dispatchClient ] = useReducer( clientReducer , initialClientState);
    const [ sale , dispatchSale ] = useReducer( saleReducer , initialState);
    const [ ui , dispatchUi ] = useReducer( uiReducer , initialState );

    useEffect(() => {
        getInitialAuthState();
        getInitialCartState();
    }, [])

    const getInitialAuthState = async() => {
        const token = localStorage.getItem('YesmomToken');
        if(token){
            dispatchAuth( startChecking());
            const result = await validateToken(token);
            if(result){
                const [infoAction] = await Promise.all([
                    initializeData(result.token),
                    dispatchAuth(startLogin(result))
                ])
                
                dispatchClient(infoAction);
            }else{
                dispatchAuth(startLogout)
            }
            dispatchAuth( finishChecking());
            // console.log("Autenticado de nuevo");
            // dispatchAuth( startLogin({ token }))
        }else{
            dispatchAuth({})
        }
    }

    const getInitialCartState = () =>{
        const cart = JSON.parse(localStorage.getItem('cart'));
        if(cart){
            cart.forEach(element => {
                dispatchUi(startAddToCart(element));
            });
        }
    }


    //SOME ACTIONS
    //CLIENT

    const startRegisterClient = async(info) => {
        try{
            dispatchClient( initRegister())
            const { data, err } = await postApiSecurity('/user-add/U', info , {
                params : {
                    shared : 0,
                    create : 1 
                }
            } )
            dispatchClient( finishRegister())
            if(!err){                
                dispatchClient( successRegister(data))
            }else{
                dispatchClient( errorRegister(err))
            }
            
        }catch(err){
            dispatchClient( finishRegister())
            console.log(err);
        }
    }


    return (
        <YesmomContext.Provider value={{
            auth,
            ui,
            client,
            sale,
            dispatchAuth,
            dispatchClient,
            dispatchUi,
            dispatchSale,

            //
            startRegisterClient
        }
        }>
            { children }
        </YesmomContext.Provider>
    )


}

export default Provider
