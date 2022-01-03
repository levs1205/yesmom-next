import axios from 'axios';


/* "Av Metropolitana 1173 Comas, Lima" */
const makeAddres = ( {calle, numero , distrito }) => `${calle} ${numero} ${distrito}, Lima`

export const generateDelivery = async (dir , products) => {
    try{
        const axiosInstance = axios.create({
            baseURL : 'http://localhost:3700'
        })

        console.log(products);
        const direccion = makeAddres( dir );

        const body = {
            direccion,
            fecha :"2022-01-05",
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

export const generateSale = async () => {
    try{
        const axiosInstance = axios.create({
            baseURL : 'http://localhost:3700'
        })

        const body = {
            direccion : "Jr Piura 1155 Miraflores, Lima",
            contacto : "969670765",
            recibe : "Lincoln Vs",
            fecha : "2022-01-05",
            adicional : "",
            productos : [
                {
                    id: "6196dcc179dc97768a8ff805",
                    cantidad: 2,
                    color: "azul",
                    talla: "xl"
                },
                {
                    id : "6196dcc179dc97768a8ff835",
                    cantidad : 2,
                    color : "rojo",
                    talla : "l"
                },
                {
                    id : "6196dcc179dc97768a8ff85c",
                    cantidad : 3,
                    color : "azul",
                    talla : "xxl"
                }
            ]
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