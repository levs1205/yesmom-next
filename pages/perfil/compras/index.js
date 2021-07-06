import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import AppLayout from '../../../components/AppLayout'
import TitlePerfil from '../../../components/Perfil/TitlePerfil'
import Description from '../../../components/Perfil/Description'
import Sidebar from '../../../components/Perfil/Sidebar'
import Pagination from '../../../components/Pagination'


const index = () => {

    return (
        <AppLayout>
            <Head>
                <title>YesMom - Compras</title>
                <meta name="description" content="YesMom es ..."></meta>
                <meta property="og:type" content="website" />
                <meta property="og:title" content="YesMom - Compras" />
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
                <meta name="twitter:title" content="YesMom - Compras" />
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
            <div className="contenedor">
                <div className="container-contenido">
                    <div className="all-content">
                        <Link href="/perfil">
                            <div className="show return">
                                <div className="icon-return">
                                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M6.73017 12.8055C7.02875 13.0722 7.50353 13.0635 7.79062 12.7862C8.07772 12.5089 8.06841 12.0679 7.76983 11.8012L1.83439 6.5L7.76983 1.19882C8.06841 0.932146 8.07772 0.491136 7.79062 0.213797C7.50353 -0.0635432 7.02875 -0.0721905 6.73017 0.194482C6.73017 0.194482 0.232731 5.99252 0.209376 6.01508C0.0689399 6.15075 -0.000572481 6.32557 3.53057e-06 6.5C-0.000572496 6.67443 0.0689399 6.84925 0.209376 6.98492C0.232731 7.00748 6.73017 12.8055 6.73017 12.8055Z" fill="#EC668D"/>
                                    </svg>
                                </div>
                                <p className="ft-m-regular">Volver</p>
                            </div>
                        </Link>
                        <div className="contenedor-flex">
                            <div className="flex-left">
                                <TitlePerfil name="Lucia" email="lucia@henribarrett.com" />
                                <Sidebar active="compras" />
                            </div>
                            <div className="flex-right">
                                <Description path="Mis compras" description="Aquí podrás encontrar todas tus compras y sus estados" /> 
                                <div className="container-select">
                                    SELECT
                                </div>

                                 <div className="container-accordion">
                                    ACORDION
                                 </div>
                                 <div className="box-pagination">
                                    <Pagination />
                                 </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <style jsx>
                {`  
                    /*RESET*/
                    /********/
                    .hide{
                        display:none;
                    }
                    /**GLOBALS */
                    p{
                        margin:0;
                    }
                    .ft-m-heavy{
                        font-family:"mont-heavy"!important;
                        font-weight:800;
                    }
                    .ft-m-600{
                        font-family:"mont-semibold"!important;
                        font-weight:600;
                    }
                    .ft-m-regular{
                        font-family:"mont-regular"!important;
                    }
                    .ft-m-light{
                        font-family:"mont-light"!important;
                    }
                    .contenedor{
                        padding:10rem 1rem;
                        margin:0 1rem;
                    }
                    
                    /* .container-contenido{
                        display:flex;
                        justify-content:center;
                        align-items:center;
                    } */
                    /**Return */
                    .return{
                        cursor:pointer;
                        display:flex;
                        align-items:center;
                        margin-bottom:2rem;
                    }
                    .return:hover{
                        transform:translateY(-1px);
                    }
                    .return p{
                        margin-left:1rem;
                        color:#EC668D;
                        font-size:1.3rem;
                        margin-top:0.5rem;
                    }
                    .box-pagination{
                        display:flex;
                        align-items:center;
                        justify-content:center;
                    }

                    /** */
                    @media (min-width:480px) and (max-width:767px){
                        .container-contenido{
                            display:flex;
                            justify-content:center;
                            align-items:center;
                        } 
                        .all-content{
                            width:45rem;
                        }
                    }

                    @media (min-width: 768px){
                        .contenedor{
                            padding:12rem 0;
                        }
                        .show{
                            display:none;
                        }
                        .hide{
                            display:block;
                        }
                        .contenedor-flex{
                            display:flex;
                            padding : 0 2rem;
                        }
                        .flex-desktop{
                            display:flex;
                            justify-content:space-between;
                        }
                        .flex-left{
                            flex-basis:20%;
                        }
                        .flex-right{
                            margin-left:5rem;
                            flex-basis:70%;
                        }
                        .f-to-right{
                            margin-top:2rem;
                            display:flex;
                            flex-direction:row-reverse;
                            align-items:center;
                            justify-content:flex-start; 
                        }
                   
                    }
                    @media (min-width:1024px){
                        .contenedor-flex{
                            justify-content:flex-start;
                            padding:0 3rem;
                        }
                        .flex-right{
                            flex-basis:60%;
                        }

                    }
                    
                    @media(min-width:1280px){
                        .container-save{
                            margin-top:14.2rem;
                        }
                        .contenedor-flex{
                            padding:0 6rem;
                        }
                        .flex-right{
                            flex-basis:60%;
                        }
                    }
                `}
            </style>

        </AppLayout>
    )
}

export default index
