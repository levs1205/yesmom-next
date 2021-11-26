import React from 'react';

const DetailProductOrden = ({ img , name }) => {


    return (
        <>
            <div className="container__detail-orden">
                <div className="container__detail-orden-image">
                    <img
                        src={img}
                    />
                </div>
                <div className="container__detail-orden-details">
                    <p className="container__detail-orden-details-title">{name.toUpperCase()}</p>
                    <p className="container__detail-orden-details-title">Blanco, 140cm x 100cm</p>
                    <p className="container__detail-orden-details-address">Cll. Augusto Tamayo 600, Barranco Lima</p>
                    
                </div>
            </div> 
            <style jsx>
                {`
                    .container__detail-orden{
                        display : flex;
                        margin : 0.7rem 0;
                    }
                    .container__detail-orden-image{
                        width : 10rem;
                    }
                    .container__detail-orden-image img{
                        max-width:100%;
                    }

                    .container__detail-orden-details{
                        padding : 0 0.5rem;
                    }
                    .container__detail-orden-details-title{
                        margin : 0;
                        font-family : "mont-regular";
                        font-size : 1.2rem;
                    }
                    .container__detail-orden-details-address{
                        margin : 0;
                        font-family : "mont-regular";
                        font-size : 1.2rem;
                        color: #575650;
                    }
                `}
            </style>
        </>
    )
}

export default DetailProductOrden
