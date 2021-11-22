import { types } from "../types";



export const makeDelivery = ( data ) => {
    try{
        const { response : { envios } } = data;
        return setDelivery(envios)
    }catch(err){
        console.log(err)
    }
}
export const setDelivery = ( orden ) => ({
    type : types.setDelivery,
    payload : orden
})