import React from 'react'

const DetailProduct = ({}) => {
    return (
        <>
            <div className="card--shopping-cart">
                <div className="container--shopping-card">
                    <div className="card--shopping-cart__image">
                    <div className="card--shopping-cart__iconDelete"></div>
                    <img
                        src="https://i.blogs.es/ee0424/ropa-bebe-rosa/450_1000.jpeg"
                        alt=""
                    />
                    </div>
                </div>
                <div className="card--shopping-cart__text">
                    <p className="card--shopping-cart__title">
                    Coche de bebé + funda - blanca{" "}
                    </p>
                    <p className="card--shopping-cart__price">S/XX.XX</p>
                </div>
            </div>
            <style jsx>
                {`
                    .card--shopping-cart {
                        display: flex;
                        justify-content: center;
                        align-content: center;
                        align-items: center;
                        flex-direction: row;
                        padding-bottom: 1rem;
                        padding-top: 1rem;
                        border-bottom: 1px solid #dadada;
                    }
                    .card--shopping-cart img {
                        width:100%;
                        height: 100%;
                        border-radius: 20px;
                        object-fit: cover;
                        object-position: center center;
                    }

                    .container--shopping-card{
                        width: 105px;
                        height: 95px;
                        display: flex;
                    }

                    .card--shopping-cart__image{
                        position:relative;
                        width: 90px;
                        height: 90px;
                        margin: auto;
                    }
                    .card--shopping-cart__iconDelete {
                        position: absolute;
                        background-image: url("/image/icon/delete.svg");
                        background-position: contain;
                        height: 20px;
                        width: 20px;
                        left: -8px;
                        top: -8px;
                    }

                    .card--shopping-cart__text {
                        padding: 0rem 0.5rem;
                        width: 65%;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                    }
                    .card--shopping-cart__title {
                        font-family: "mont-regular";
                        font-style: normal;
                        font-weight: 500;
                        font-size: 12px;
                        line-height: 1.2rem;
                        text-align: left;
                    }
                    .card--shopping-cart__price {
                        font-family: "mont-semibold";
                        font-style: normal;
                        font-weight: bold;
                        font-size: 14px;
                        line-height: 1.2rem;
                        color: #4b64a4;
                        text-align: center;
                    }

                    @media (min-width : 1366px){
                        .container--shopping-card{
                            width: 135px;
                            height: 125px;
                            display: flex;
                        }
                        .card--shopping-cart__image{
                            position:relative;
                            width: 110px;
                            height: 110px;
                            margin: auto;
                        }
                        .card--shopping-cart__iconDelete {
                            position: absolute;
                            background-image: url("/image/icon/delete.svg");
                            background-position: contain;
                            height: 20px;
                            width: 20px;
                            left: -8px;
                            top: -8px;
                        }
                    }
                `}
            </style>
        </>
    )
}

export default DetailProduct
