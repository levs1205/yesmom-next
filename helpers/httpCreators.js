import axios from 'axios';

const BASE_ENDPOINT_SECURITY = process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_SECURITY;
const BASE_ENDPOINT_BUSINESS = process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_BUSINESS;


const axiosBusiness = axios.create({
    baseURL : BASE_ENDPOINT_BUSINESS,
});

const axiosSecurity = axios.create({
    baseURL : BASE_ENDPOINT_SECURITY,
});


export const getApiSecurity = async ( path, config ) => {

    try{

        const { data } = await axiosSecurity.get(path,config);
    
        return {data};
    }catch(err){
        console.log('ERROR GET SECURITY',err);
        return { data:null, err: err };
    }
}

export const putApiSecurity = async ( path, body,config ) => {

    try{
        
        const { data } = await axiosSecurity.put(path, body , config);
    
        return {data};
    }catch(err){
        console.log('ERROR PUT SECURITY',err);
        return { data:null, err: err };
    }
}

export const postApiSecurity = async ( path, body,config ) => {

    try{
        
        const { data } = await axiosSecurity.post(path, body , config);
    
        return {data};
    }catch(err){
        console.log('ERROR POST SECURITY',err);
        return { data:null, err: err };
    }
}

export const getApiBusiness = async ( path , config ) => {

    try{

        const { data } = await axiosBusiness.get(path,config);
    
        return {data};
    }catch(err){
        console.log('ERROR GET BUSINESS',err);
        return { data:null, err: err };
    }
}

export const putApiBusiness = async ( path, body, config ) => {

    try{

        const { data } = await axiosBusiness.put(path, body , config);
    
        return {data};
    }catch(err){
        console.log('ERROR PUT BUSINESS',err);
        return { data:null, err: err };
    }
}

export const postApiBusiness = async ( path, body, config ) => {

    try{

        const { data } = await axiosBusiness.post(path, body , config);
    
        return {data};
    }catch(err){
        console.log('ERROR POST BUSINESS',err);
        return { data:null, err: err };
    }
}