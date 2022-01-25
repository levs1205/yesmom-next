
import React from 'react'
import Head from "next/head";
import Loader from 'react-loader-spinner'

const LoaderPage = ( { type }) => {
    return (
        <>  
            <Head>
                <title>YesMom - Loading...</title>
                <meta name="description" content="YesMom es ..."></meta>
                <meta property="og:type" content="website" />
                <meta property="og:title" content="YesMom - Loading..." />
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
                <meta name="twitter:title" content="YesMom - Loading...." />
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
            <div className={`container-loader ${type}`}>
                <div>
                    <Loader type="ThreeDots" color="#EC608D" height={80} width={80} />
                </div>
            </div>
            <style jsx>
                {`
                    .container-loader{
                        width:100%;
                        height:100vh;

                        display:flex;
                        justify-content:center;
                        align-items:center;
                    }

                    .over{
                        position : fixed;
                        z-index : 10;
                        top: 0;
                        left :0;
                        width :100vw;
                        height : 100vh;
                        
                        background-color : rgb(255,255,255,0.6);
                    }
         
                `}
            </style>
        </>
    )
}

export default LoaderPage
