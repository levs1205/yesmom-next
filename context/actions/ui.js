import { types } from "../types"


//BLOGS
export const setBlogs = ( blogs ) => {
    return {
        type : types.setBlogs,
        payload : blogs
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