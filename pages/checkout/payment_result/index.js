import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import cookie from 'cookie-cutter';
import Head from 'next/head';
import { useRouter } from 'next/router';
import AppLayout from '../../../components/AppLayout';
import PaymentSuccess from '../../../components/Payments/PaymentSuccess';
import PaymentFailure from '../../../components/Payments/PaymentFailure';
import LoaderPage from '../../../components/LoaderPage';
import YesmomContext from '../../../context/Context';
import { cleanCart } from '../../../context/actions/ui';

const PaymentResult = () => {

    const { dispatchUi } = useContext(YesmomContext);
    const { query } = useRouter();
    const [ status, setStatus ] = useState();
    const [ checking, setChecking ] = useState(true);
    const [orderId, setOrderId] = useState();
    

    const verifyPayment = async () => {

        try{
            setChecking(true);
            const url = process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_BUSINESS;
            // const url = 'http://localhost:3700';

            const token = cookie.get('TokenTest');
            const { data } = await axios.post(`${url}/sale/paymentverification`, { id : query.payment_id } , {
                headers : {
                    'access-token' : token
                }
            })

            if(data.ok && data.sale){
                dispatchUi(cleanCart())
                setStatus(data.status)
                setOrderId(data.sale.numeroUnico);
            }else{
                setStatus('rejected');
            }
            setChecking(false);
        }catch(err){
            setChecking(false);
            setStatus('rejected');
            console.log(err);
        }
    }
    
    useEffect(()=>{
        if(Object.keys(query).length >0){
            verifyPayment();
        }
    },[query])
    return (
        <AppLayout>
            {
                checking && <LoaderPage type="over"/>
            }
            <Head>
                <title>YesMom - Payments</title>
                <meta name="description" content="YesMom es ..."></meta>
                <meta property="og:type" content="website" />
                <meta property="og:title" content="YesMom - Payments" />
                <meta
                property="og:description"
                content="Yes Mom es una plataforma digital peruana que ayuda a las
                                mamis a disfrutar su maternidad sin preocupaciones. Queremos
                                ser la marca aliada que todos los papás estuvieron buscando,
                                una página web que reúne en un solo lugar todo lo que
                                necesitan para la llegada de su bebé y acompañar su
                                crecimiento."
                />
                <meta
                property="og:image"
                itemprop="image"
                content="https://yesmom.vercel.app/image/about-header.png"
                />
                <meta property="og:image:width" content="1280" />
                <meta property="og:image:height" content="855" />
                <meta property="og:site_name" content="Yes Mom" />
                {/* <meta property="og:url" content={`${user.id}`} />  */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="YesMom - Payments" />
                <meta
                name="twitter:description"
                content="Yes Mom es una plataforma digital peruana que ayuda a las
                                mamis a disfrutar su maternidad sin preocupaciones. Queremos
                                ser la marca aliada que todos los papás estuvieron buscando,
                                una página web que reúne en un solo lugar todo lo que
                                necesitan para la llegada de su bebé y acompañar su
                                crecimiento."
                />
                <meta
                name="twitter:image"
                content="https://yesmom.vercel.app/image/about-header.png"
                />
            </Head>
            <div className='contenedor'>
                <div className='container-contenido'>
                    <div className='all-content'>
                        <p className='text-rosa'>Estado de pago: </p>
                        { checking && <div className="container-hidden"></div> }
                        { !checking && status==='approved' && <PaymentSuccess orderId={orderId} /> }
                        { !checking && status==='rejected' && <PaymentFailure /> }

                    </div>
                </div>
            </div>

            <style jsx>
                {`
                    .contenedor{
                        padding-top:8rem;
                        padding-bottom:8rem;
                        margin-left:2.5rem;
                        margin-right:2.5rem;
                        margin-top:0;
                    }
                    .container-contenido{
                        display:flex;
                        justify-content:center;
                        align-items:center;
                    }
                    
                    .text-rosa{
                        font-family:"mont-regular"!important;
                        font-weight:600;
                        font-size:2rem;
                        color:#EC668D;
                        text-align : center;
                    }

                    .container-hidde{
                        height : 30rem;
                    }

                `}
            </style>
        </AppLayout>
    )
}

export default PaymentResult
