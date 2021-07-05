import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import AppLayout from '../../components/AppLayout'
import TitlePerfil from '../../components/Perfil/TitlePerfil'


const index = () => {
    return (
        <AppLayout>
            <Head>
                <title>YesMom - Información de perfil</title>
                <meta name="description" content="YesMom es ..."></meta>
                <meta property="og:type" content="website" />
                <meta property="og:title" content="YesMom - Información de perfil" />
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
                <meta name="twitter:title" content="YesMom - Información de perfil" />
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
                        <div className="welcome-user">
                            <TitlePerfil main name="Lucia" email="lucia@henribarrett.com" />
                            <div className="container-options">
                                <ul className="list-group list-group-flush">
                                    <Link href="/perfil/miperfil">
                                        <li className="list-group-item selected">
                                            <p className="link-actived">Mi Perfil</p>
                                            <div className="star-icon">
                                                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.4877 8.16373C18.7007 8.00619 18.8588 7.78641 18.9396 7.53522C19.0205 7.28403 19.0201 7.01402 18.9386 6.76304C18.857 6.51207 18.6984 6.29272 18.485 6.13575C18.2715 5.97878 18.0139 5.89206 17.7483 5.88775L12.5895 5.69429C12.5642 5.69255 12.5398 5.68357 12.5195 5.66843C12.4992 5.65329 12.4837 5.63263 12.4749 5.60894L10.6922 0.829395C10.6027 0.58623 10.44 0.376258 10.2262 0.227909C10.0125 0.0795604 9.75796 0 9.49713 0C9.23631 0 8.98179 0.0795604 8.76803 0.227909C8.55426 0.376258 8.39159 0.58623 8.30202 0.829395L6.52511 5.62601C6.51633 5.6497 6.50084 5.67036 6.4805 5.6855C6.46016 5.70064 6.43584 5.70962 6.41048 5.71136L1.25171 5.90482C0.986099 5.90913 0.728501 5.99584 0.51504 6.15281C0.301579 6.30978 0.142959 6.52914 0.061422 6.78011C-0.0201152 7.03109 -0.020481 7.3011 0.0603758 7.55229C0.141233 7.80348 0.299257 8.02326 0.512292 8.1808L4.55905 11.3387C4.57931 11.3545 4.59444 11.3759 4.60259 11.4002C4.61074 11.4244 4.61155 11.4506 4.60491 11.4753L3.21204 16.3743C3.13987 16.6238 3.14686 16.8893 3.23207 17.1347C3.31728 17.38 3.47658 17.5934 3.68828 17.7457C3.89999 17.8981 4.15383 17.982 4.41527 17.986C4.67671 17.9901 4.93306 17.9141 5.14944 17.7683L9.42548 14.9234C9.44655 14.9089 9.47154 14.9012 9.49713 14.9012C9.52273 14.9012 9.54772 14.9089 9.56878 14.9234L13.8448 17.7683C14.0583 17.919 14.3137 18 14.5756 18C14.8376 18 15.093 17.919 15.3065 17.7683C15.5182 17.6174 15.6777 17.4051 15.7629 17.1606C15.8481 16.916 15.8548 16.6513 15.7822 16.4028L14.3779 11.4867C14.3705 11.462 14.3709 11.4356 14.3791 11.4112C14.3873 11.3867 14.4029 11.3654 14.4238 11.3501L18.4877 8.16373Z" fill="#FEBF41"/>
                                                </svg>
                                            </div>
                                        </li> 
                                    </Link>
                                    <Link href="/perfil/password">
                                        <li className="list-group-item">Contraseña</li>
                                    </Link>
                                    <Link href="/perfil/desactivar-cuenta">
                                        <li className="list-group-item">Desactivar cuenta</li>
                                    </Link>
                                    <Link href="/perfil/miscompras">
                                        <li className="list-group-item">Mis compras</li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>
                {`  
                    p{
                        margin:0;
                    }
                    .ft-m-600{
                        font-family:"mont-semibold"!important;
                        font-weight:600;
                    }
                    .ft-m-regular{
                        font-family:"mont-regular"!important;
                    }
                    .contenedor{
                        padding:14.4rem 1rem;
                        margin:0 1rem;
                    }
                    /* .container-contenido{
                        display:flex;
                        justify-content:center;
                        align-items:center;
                    }*/
                    
                    /*Options Li */
                    :global(.list-group-flush>.list-group-item){
                        border-width:1px 0 0 0;
                        font-size:1.8rem;
                        font-family:"mont-regular"!important;
                        color: #575650;
                        padding:1.5rem 0;
                        display:flex;
                        align-items:center;
                        cursor:pointer;
                    }
                    :global(.list-group-flush>.list-group-item .selected){
                        font-family:"mont-heavy"!important;
                    }
                    .star-icon{
                        margin-left:2rem;
                        margin-top:-5px;
                    }
                    .container-options{
                        margin-top:2.5rem;
                    }
                    .link-actived{
                        font-family:"mont-heavy"!important;
                    }

                    @media (min-width:480px){
                        .container-contenido{
                            display:flex;
                            justify-content:center;
                            align-items:center;
                        } 
                        .all-content{
                            width:45rem;
                        }
                    }

                    @media (min-width:480px){
                        .container-contenido{
                            display:flex;
                            justify-content:center;
                            align-items:center;
                        } 
                        .all-content{
                            width:45rem;
                        }
                    }

                `}
            </style>

        </AppLayout>
    )
}

export default index
