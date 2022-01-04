import axios from 'axios';


/* "Av Metropolitana 1173 Comas, Lima" */
const makeAddres = ( {calle, numero , distrito }) => `${calle} ${numero} ${distrito}, Lima`

export const generateDelivery = async (dir , products) => {
    try{
        const axiosInstance = axios.create({
            baseURL : 'http://localhost:3700'
        })

        const direccion = makeAddres( dir );

        const productos = products.map((p) => ({
            id : p._id,
            cantidad : p.quantity
        }) )

        const body = {
            direccion,
            fecha :"2022-01-05",
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
    try{
        const axiosInstance = axios.create({
            baseURL : 'http://localhost:3700'
        })

        console.log('SALEEEE',products);
        const direccion = makeAddres( dir );
        const productos = products.map((p) => ({
            id : p._id,
            cantidad : p.quantity,
            color : p.colourSelected,
            talla : p.sizeSelected
        }) )

        const body = {
            direccion,
            contacto : "969670765",
            recibe : "Lincoln Vs",
            fecha : "2022-01-05",
            adicional : "",
            productos
        }

        const { data } = await axiosInstance.post('/sale' , body )


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