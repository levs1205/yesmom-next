import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import AppLayout from '../../components/AppLayout';
import PaymentSuccess from '../../components/Payments/PaymentSuccess';
import PaymentFailure from '../../components/Payments/PaymentFailure';

const PaymentResult = () => {

    const { query } = useRouter();
    const [ state, setState ] = useState(false);
    
    console.log(query);
    return (
        <AppLayout>
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
                        {
                            state ? <PaymentSuccess /> : <PaymentFailure />
                        }

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


                `}
            </style>
        </AppLayout>
    )
}

export default PaymentResult
