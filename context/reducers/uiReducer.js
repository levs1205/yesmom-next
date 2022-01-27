import { types } from "../types";



/* const initialState= {
    cart :[{id :"20"}]
} */

export const uiReducer = ( state = {} , action) => {
	console.log('action',state.cart);
    /* console.log("STATEINICIAL",state);
    console.log('action',action.payload); */
    /* debugger */
    switch (action.type) {
        //BLOG
        case types.setBlogs:
            return {
                ...state,
                blogs : {
                    totalBlogs : action.payload
                }
            }
				//PRODUCT
				case types.setProducts:
            return {
                ...state,
                products : {
                    totalProducts : action.payload
                }
            }
				case types.setProduct:
            return {
                ...state,
                product : action.payload
            }
				//CATEGORY
				case types.setCategories:
						const totalCategories = action.payload ;  
						localStorage.setItem('totalCategories',JSON.stringify(totalCategories));

						return {
								...state,
								categories : {
										totalCategories
								}
						}
				case types.setCategory:
							return {
									...state,
									category : action.payload
									
							}
        case types.uiSetError:
            return {
               ...state,
               mssgError: action.payload
            }
        case types.uiRemoveError:
            return {
                ...state,
                mssgError: null
            }
        //CART
        case types.addToCart:
						/* const idProduct = action.payload._id
						const quantity = action.payload.quantity
        //Añades uno
					//const cart = state.cart ? [...state.cart,action.payload] : [ action.payload] ;  
					let cart = []
					if(state.cart) {
						console.log('carro lleno')
						console.log('action.payload',action.payload)
						// let objIndex = state.cart.findIndex(cart => cart._id == action.payload._id); 
						// //const cartCopy = state.cart.map(cartItem => cartItem._id === action.payload._id ? ({...cartItem, ...action.payload}) : ({...state.cart,action.payload}) );
						let findById = state.cart.filter((item, index) => item._id === action.payload._id)
						console.log('findById',findById)
						if ( findById.length = 1 ) {
							let filterCart = state.cart.filter((item, index) => item._id !== action.payload._id )
							console.log('filterCart',filterCart)
							cart = [...filterCart, ...findById]
							if (JSON.stringify(findById[0]) === JSON.stringify(action.payload)) {
								
							}
						}else {
							cart = [...state.cart,action.payload]
						}
						console.log('datooo',cart) */

						/* if (objIndex >= 0) {
							console.log('existe item-----')
							console.log('cant',state.cart[objIndex].quantity + quantity)
							cart = [...state.cart, state.cart[objIndex].quantity + quantity]
						}else {
							console.log('NO existe item')
							cart = [...state.cart,action.payload]
						} */
						
				/* 	}else {
						console.log('carro vacio')
						cart = [ action.payload] 
					} */
					const cart = state.cart ? [...state.cart,action.payload] : [ action.payload] ;   
            localStorage.setItem('cart',JSON.stringify(cart));
            return {
                ...state,
                cart
            }
		case types.cleanCart:
			localStorage.setItem('cart',JSON.stringify([]));
			return {
				...state,
				cart:[]
			}
        
        case types.removeProduct :

            const cartUpdated = state.cart.filter(product => product.idProductCart !== action.payload);
				
            //TO -DO - VALIDAR QUE EL MISMO ID NO SE ELIMINEN TODOS LOS DEL MISMO ID , SOLO EL QUE SELECCIONO
            localStorage.setItem('cart',JSON.stringify(cartUpdated));
            return {
                ...state,
                cart : cartUpdated
            }

				case types.searchProductCart :

							const cartUpdate = state.cart.filter(product => product.id !== action.payload._id).map(product => product.quantity + action.payload.quantity);
							//TO -DO - VALIDAR QUE EL MISMO ID NO SE ELIMINEN TODOS LOS DEL MISMO ID , SOLO EL QUE SELECCIONO
							localStorage.setItem('cart',JSON.stringify(cartUpdate));
							return {
									...state,
									cart : cartUpdate
							}

        default:
            return state;
    }
    
}