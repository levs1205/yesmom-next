import Image from 'next/image'
import React from 'react'
import ActiveLink from './ActiveLink'

function DropMenuMobile({active , setActive}) {

    return (
        <>
            <div className={`drop-menu ${active ? "" : "drop-menu-off"}`}>
                <div className="container-close">
                    <div className="icon-close" onClick={setActive}>
                        <Image
                            src="/image/header/close.svg"
                            alt="icon close menu"
                            width={30}
                            height={30}
                        />
                    </div>
                </div>
                <div className="container-title">
                    <h6 className="title-drop-menu">Inicio</h6>
                    <hr className="line-under-title"/>
                </div>
                
                <div className="contenedor-items">
                    <div className="container-options">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <ActiveLink href="/nosotros" activeClassName="active">
                                    <a className="item-menu-yesmom">
                                    <Image
                                        src="/image/header/nosotros.svg"
                                        alt="logo nosotros yesmom "
                                        width={30}
                                        height={30}
                                    />
                                    <h6 className="text-navbar">Nosotros</h6>
                                    </a>
                                </ActiveLink>
                            </li>
                            <li className="list-group-item">
                                <ActiveLink href="/blog" activeClassName="active">
                                    <a className="item-menu-yesmom">
                                    <Image
                                        src="/image/header/blog.svg"
                                        alt="logo blog yesmom "
                                        width={30}
                                        height={30}
                                    />
                                    <h6 className="text-navbar">Blog</h6>
                                    </a>
                                </ActiveLink>
                            </li>
                            <li className="list-group-item">
                                <ActiveLink href="/tienda" activeClassName="active">
                                    <a className="item-menu-yesmom">
                                    <Image
                                        src="/image/header/tienda.svg"
                                        alt="logo tienda yesmom "
                                        width={30}
                                        height={30}
                                    />
                                    <h6 className="text-navbar">Tienda</h6>
                                    </a>
                                </ActiveLink>
                            </li>
                            <li className="list-group-item">
                                <ActiveLink href="/regalo" activeClassName="active">
                                    <a className="item-menu-yesmom">
                                    <Image
                                        src="/image/header/regalo.svg"
                                        alt="logo blog yesmom "
                                        width={30}
                                        height={30}
                                    />
                                    <h6 className="text-navbar">Lista</h6>
                                    </a>
                                </ActiveLink>
                            </li>
                            <li className="list-group-item">
                                <ActiveLink href="/iniciar-sesion" activeClassName="active">
                                    <a className="item-menu-yesmom">
                                    <Image
                                        src="/image/header/iniciar-sesion.svg"
                                        alt="logo blog yesmom "
                                        width={30}
                                        height={30}
                                    />
                                    <h6 className="text-navbar">Iniciar sesión</h6>
                                    </a>
                                </ActiveLink>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <style jsx>
                {`
                    :global(.list-group-flush>.list-group-item){
                        padding:1.5rem;
                    }
                    .drop-menu{
                        padding:4rem 0;
                        position:fixed;
                        z-index:999999;
                        width:90%;
                        height:100%;
                        left:0;
                        background:white;
                        transition:0.3s ease-in-out;
                        opacity:1;
                    } 
                    .drop-menu-off{
                        opacity:0;
                        left:-100%;
                    }
                    .container-close{
                        padding:0 2rem;
                        display:flex;
                        justify-content:flex-end;
                    }

                    .container-title{
                        margin-top:2rem;
                    }
                    .line-under-title{
                        border-top: 0.25px solid #EC668D;
                    }
                    .title-drop-menu{
                        margin: 0 0 2rem 6.5rem;
                        font-family:"mont-semibold"!important;
                        font-size:2rem;
                        text-transform:uppercase;
                        color:#EC668D;
                    }
                    .text-navbar{
                        margin:0;
                        font-family:"mont-light"!important;
                        font-size:2rem;
                        color:#575756;
                    }
                    .item-menu-yesmom{
                        display:flex;
                        align-items:center;
                    }
                    .item-menu-yesmom h6{
                        margin-left:2rem;
                    }

                    @media (min-width:993px){
                        .drop-menu{
                            visibility:hidden;
                        }
                    }
                `}
            </style>
        </>
    )
}

export default DropMenuMobile
