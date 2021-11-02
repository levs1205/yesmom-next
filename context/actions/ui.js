import { types } from "../types"


//BLOGS
export const setBlogs = ( blogs ) => {
    return {
        type : types.setBlogs,
        payload : blogs
    }
}

//PRODUCTS
export const setProducts = ( products ) => {
	return {
			type : types.setProducts,
			payload : products
	}
}

export const setProduct = ( product ) => {
	return {
			type : types.setProduct,
			payload : product
	}
}

//Control errors 

export const setError = (error) => {
    return {
        type : types.uiSetError,
        payload: error
    }
}

export const removeError = () => {
    return {
        type : types.uiRemoveError,
    }
}

//Cart

export const startAddToCart = (product) => {
    return {
        type : types.addToCart,
        payload : product
    }
}

export const startRemoveProduct = (id) => {
    return {
        type : types.removeProduct,
        payload : id
    }
}