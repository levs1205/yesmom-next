import React, { useEffect, useState } from 'react'
import { getOtherProducts } from '../../../helpers/getOtherProducts'
import CardProduct from '../../CardProduct';

const OtherProducts = ( { category , id}) => {

    
    const [ products , setOtherProducts] = useState([]);

    const getProducts = async() => {
        const temp = await getOtherProducts(category,id);
        if(temp.length > 4){
            setOtherProducts(temp.slice(0,4));//[0 , 1 ,2 ,3 ,4 ,5] -> hasta el 3
        }else{
            setOtherProducts(temp);
        }
        console.log(temp);
    }
    
    useEffect(()=>{
        getProducts();
    },[category])

    return (
        <>
            <div className="other-products-content">
                {
                    products.map((el,i)=>(
                        <CardProduct discount={el.discount} size={4} id={el.id}/>
                    ))
                }
            </div>
            <style jsx>
                {`
                    .other-products-content {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                    }
                `}
            </style>
        </>
    )
}

export default OtherProducts
