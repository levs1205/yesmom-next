import axios from "axios";



export const startValidateToken = async(token) => {
    try{
        const axiosInstance = axios.create({
            baseURL : process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_SECURITY
        })
        const { data } = await axiosInstance.get('/autenticar/token?delivery=no',{ headers : {
            'access-token' : token
        }})

        // console.log(data);
        if( data?.mensaje === "Token válido"){
            return { valid : true , data}
        }else{
            return { valid : false }
        }
    }catch(err){
        return {valid : false};
    }
}