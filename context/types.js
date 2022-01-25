

export const types = {

    //auth
    authLogin : "LOGIN",
    authLogout : "LOGOUT",
    authStartChecking  : "START_CHECK_AUTH",
    authFinishChecking  : "FINISH_CHECK_AUTH",

    //client 
    clientSetInfo : "SET_INFO_CLIENT",


    //ui
    setBlogs : "SET_BLOGS",
    setQueryBlog : "SET_QUERY_BLOG",

		setCategories : "SET_CATEGORIES",
		setCategory : "SET_CATEGORY",

		setProducts : "SET_PRODUCTS",
		setProduct : "SET_PRODUCT",

    addToCart : "ADD_CART",
    removeProduct : "REMOVE_PRODUCT_CART",
		searchProductCart : "SEARCH_PRODUCT_CART",
    
    //sales

    setDelivery : "SET_DELIVERY",
    //errors
    uiSetError: "SET_ERROR",
    uiRemoveError: "REMOVE_ERROR",
}