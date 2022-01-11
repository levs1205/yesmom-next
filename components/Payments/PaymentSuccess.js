import React from 'react'

const PaymentSuccess = () => {
    return (
        <>
            <div className='container_disclaimer'>
                <img className='img_disclaimer' src="/image/payment/icon-success.svg" alt="success-payment" />
                <p className='text-payment'>Gracias por tu compra</p>
                <p className='text-disclaimer'>Tu compra fue procesada con éxito, te hemos enviado un correo de confirmación con todos los detalles.</p>
                <p className='text-disclaimer-pedido'>Numero de pedido : #0806</p>
                <p className='nav-to-option'>Ver detalle del pedido</p>

                <div className='container-redes'>
                    <p className='text-disclaimer-pedido'>Siguenos también en nuestras redes sociales</p>
                    <div className='redes-box'>
                        {/* TODO: add redes */}
                        <a href='/' target='_blank'>
                            <img className='img_redes' src="/image/payment/icon-fb.svg" alt="redes-fb" />
                        </a>
                        <a href='/' target="_blank">
                            <img className='img_redes' src="/image/payment/icon-ig.svg" alt="redes-ig" />
                        </a>
                    </div>
                </div>
            </div>
            <style jsx>
                {`  
                
                    .container_disclaimer{
                        margin : 5rem 0;
                        display : flex;
                        flex-direction : column;
                        align-items : center;
                        padding : 1rem 2rem;

                        background: #FFFFFF;
                        border: 10px solid #FFFFFF;
                        box-shadow: 0px 0px 33px rgba(0, 0, 0, 0.13);
                        border-radius: 20px;
                    }

                    .img_disclaimer{
                        margin : 2rem 0;
                    }
                    .text-disclaimer {
                        font-family : 'mont-regular';
                        font-size : 1.2rem;
                        color: #5A5A5A;
                        text-align:center;
                    }
                    .text-disclaimer-pedido{
                        font-family : 'mont-bold';
                        font-size : 1.2rem;
                        color: #5A5A5A;
                        text-align:center;
                    }
                    .text-payment {
                        font-family: 'mont-bold';
                        font-style: normal;
                        font-size: 1.5rem;
                        text-align:center;
                        color: #DC6A8D;
                        text-transform : uppercase;
                    }

                    .redes-box{
                        display : flex;
                        align-items: center;
                        justify-content : center;
                    }
                    .redes-box a{
                        display: inline-block;
                        cursor : pointer;
                        margin: 0 0.5rem;
                    }
                    .nav-to-option {
                        cursor : pointer;
                        font-family : 'mont-light';
                        font-size : 1.1rem;
                        color: #556EA1;
                        mix-blend-mode: normal;
                        opacity: 0.8;
                        text-decoration: underline;
                    }

                    @media (min-width:768px){
                        .container_disclaimer{
                            width :80%;
                            margin : 5rem auto;
                        }

                    }

                    @media (min-width:768px){
                        .nav-to-option{
                            font-size : 1.2rem;
                        }

                    }
                `}
            </style>
        </>
    )
}

export default PaymentSuccess
