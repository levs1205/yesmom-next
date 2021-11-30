import React from 'react'

const CostSale = ( { price }) => {
    return (
        <>
            <div className="container_price-ordenes">
                <p className="container_price-ordenes-text">
                    Costo de envío: 
                </p>
                <p className="container_price-ordenes-price">
                    S/. {parseFloat(price).toFixed(2)}
                </p>
            </div>
            <style jsx>
                {`
                    .container_price-ordenes{
                        margin : 0.5rem 0;
                        display : flex;
                        justify-content : space-between;
                    }
                    .container_price-ordenes-text{
                        margin : 0;
                        font-family : "mont-regular";
                        font-size : 1.2rem;
                        color: #575650;
                    }
                    .container_price-ordenes-price{
                        margin : 0;
                        font-family:"mont-heavy";
                        font-size:1.3rem;
                        color: #4B64A4;
                    }
                `}
            </style>
        </>
    )
}

export default CostSale
