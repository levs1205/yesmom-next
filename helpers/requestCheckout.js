import axios from 'axios';

const body = {
    direccion :"Jr Piura 1155 Miraflores, Lima",
    fecha :"2021-12-25",
    productos: [
        {
            id: "6196dcc179dc97768a8ff805",
            cantidad: 1
        },
        {
            id: "6196dcc179dc97768a8ff835",
            cantidad: 2
        },
        {
            id: "6196dcc179dc97768a8ff85c",
            cantidad: 3
        },
        {
            id: "6197da7d79dc97768aff0bb4",
            cantidad: 2
        }
    ]
}


export const generateDelivery = async () => {
    try{
        const axiosInstance = axios.create({
            baseURL : 'http://localhost:3700'
        })

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
        return { 
            ok : false,
            data : null
         }
    }
}