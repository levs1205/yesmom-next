

export const getTotalPrice = (cart) => {

    let totalPrice = 0;
    if(cart.length >0 ){
        cart.map(({precio , quantity})=> {
            totalPrice = totalPrice + precio*quantity;
        })
    }else{
        return 0;//No hay nada en el carro
    }
    
    return totalPrice;
}