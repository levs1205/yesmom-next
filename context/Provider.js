
import React, { useEffect, useReducer } from 'react'
import { finishChecking, startChecking, validateToken ,startLogout,startLogin, startSettingInfo, initializeData} from './actions/auth';
import { startAddToCart } from './actions/ui';
import YesmomContext from './Context'
import { authReducer } from './reducers/authReducer';
import { uiReducer } from './reducers/uiReducer';
import { clientReducer } from './reducers/clientReducer';
import { saleReducer } from './reducers/saleReducer';


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
    const initialAuthState = {
        logged : false,
        token : null,
        checking : true
    }
    const [ auth , dispatchAuth ] = useReducer( authReducer , initialAuthState);
    const [ client , dispatchClient ] = useReducer( clientReducer , initialState);
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
                console.log(result);
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


    return (
        <YesmomContext.Provider value={{
            auth,
            ui,
            client,
            sale,
            dispatchAuth,
            dispatchClient,
            dispatchUi,
            dispatchSale
        }
        }>
            { children }
        </YesmomContext.Provider>
    )
}

export default Provider
