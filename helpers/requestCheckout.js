import axios from 'axios';
import moment from 'moment';
import cookie from 'cookie-cutter';



/* "Av Metropolitana 1173 Comas, Lima" */
const makeAddres = ( {calle, numero , distrito }) => `${calle} ${numero} ${distrito}, Lima`;

const makeDate = ( date ) => {        

    const formatDate =  moment(date).format('YYYY-MM-DD');
    return formatDate;
}


export const generateDelivery = async (dir , products) => {
    try{
        const axiosInstance = axios.create({
            baseURL : process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_BUSINESS
        })

        const direccion = makeAddres( dir );

        const productos = products.map((p) => ({
            id : p._id,
            cantidad : p.quantity
        }) )


        const fecha = makeDate(dir.fechaEntrega);

        const body = {
            direccion,
            fecha,
            productos
        }

        const { data } = await axiosInstance.post('/sale/delivery' , body )


        if(data?.response?.ok){
            return { 
                ok : true,
                data
             }
        }else{
            throw new Error('Error inesperado')
        }
        
    }catch(err){
        console.log(err);
        return { 
            ok : false,
            data : null
         }
    }
}

export const generateSale = async ( dir, products ) => {


    console.log(dir);
    console.log(products);
    try{
        const axiosInstance = axios.create({
            baseURL : process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_BUSINESS
        })

        const direccion = makeAddres( dir );
        const productos = products.map((p) => ({
            id : p._id,
            cantidad : p.quantity,
            color : p.colourSelected,
            talla : p.sizeSelected
        }) )

        const fecha = makeDate(dir.fechaEntrega);
        const body = {
            direccion,
            contacto : dir.phone,
            recibe : dir.recibe,
            fecha,
            adicional : dir.referencia,
            productos,
            numeroDocumento : dir.numeroDocumento,
            tipoDocumento : 'DNI', 
        }

        const token = cookie.get('TokenTest');
        const { data } = await axiosInstance.post('/sale' , body , {
            headers : {
                'access-token' : token
            }
        })


        if(data?.response?.ok){
            return { 
                ok : true,
                idPreference : data?.response?.idPreference
             }
        }else{
            throw new Error('Error inesperado')
        }
        
    }catch(err){
        return { 
            ok : false,
            idPreference : null
         }
    }
}