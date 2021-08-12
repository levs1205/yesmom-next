import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import ActiveLink from './ActiveLink'

function DropMenuMobile({active , setActive , logged}) {


    const { pathname } = useRouter();

    const linksPush = [
        { src : "/image/header/nosotros.svg" , to  : "/nosotros" , name :"Nosotros"},
        { src : "/image/header/blog.svg" , to  : "/blog", name :"Blog" },
        { src : "/image/header/tienda.svg" , to  : "/tienda", name :"Tienda" },
        { src : "/image/header/regalo.svg" , to  : "/regalo", name :"Lista" },
    ]
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
                    <Link href="/">
                        <h6 className="title-drop-menu">Inicio</h6>
                    </Link>
                    <hr className="line-under-title"/>
                </div>
                
                <div className="contenedor-items">
                    <div className="container-options">
                        <ul className="list-group list-group-flush">

                            {linksPush.map(({src , name , to} , i)=> (
                                <Link key={i} href={to}>
                                    <li  className="list-group-item">
                                        <div>
                                            <Image
                                                    src={src}
                                                    alt={`logo ${name.toLocaleLowerCase()} yesmom`}
                                                    width={30}
                                                    height={30}
                                            />
                                        </div>
                                        <h6 className={`text-navbar ${pathname === to ? "active" : ""}`}>{name}</h6>
                                    </li>
                                </Link> 
                            ))}

                            {!logged ?
                                <Link href="/image/header/iniciar-sesion.svg">
                                    <li  className="list-group-item">
                                        <div>
                                            <Image
                                                    src="/image/header/iniciar-sesion.svg"
                                                    alt="logo login yesmom"
                                                    width={30}
                                                    height={30}
                                            />
                                        </div>
                                        <h6 className={`text-navbar ${pathname === "/image/header/iniciar-sesion.svg" ? "active" : ""}`}>Iniciar sesión</h6>
                                    </li>
                                </Link> 
                            :
                                <li  className="list-group-item">
                                    <div>
                                        <Image
                                                src="/image/header/skinbaby-mob.svg"
                                                alt="logo login yesmom"
                                                width={30}
                                                height={30}
                                        />
                                    </div>
                                    <h6 className="text-navbar">Perfil - Lucia Q.</h6>
                                </li>
                            }
                        </ul>
                    </div>
                </div>

                
            </div>
            <style jsx>
                {`
                    
                    :global(.list-group-flush>.list-group-item){
                        padding:1.5rem;
                        display:flex;
                        align-items:center;
                        flex-direction:row;
                    }
                    .list-group-item h6{
                        margin-left:1rem;
                    }
                    .drop-menu{
                        padding:4rem 0;
                        position:fixed;
                        z-index:999999;
                        width:75%;
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
                    .active{
                        font-family:"mont-regular"!important;
                    }
                    @media (min-width:993px){
                        .drop-menu{
                            visibility:hidden;
                        }
                    }

                    @media (min-width: 480px){
                        .drop-menu{
                            width:35rem;
                        }
                    }
                    @media (min-width:769px){
                        .drop-menu{
                            width: 40rem;
                        }
                    }
                `}
            </style>
        </>
    )
}

export default DropMenuMobile
