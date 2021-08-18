import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import ActiveLink from './ActiveLink'

function DropMenuMobile({active , setActive , logged}) {


    const [expand ,setExpand] = useState(false);
    const { pathname } = useRouter();

    const linksPush = [
        { src : "/image/header/nosotros.svg" , to  : "/nosotros" , name :"Nosotros"},
        { src : "/image/header/blog.svg" , to  : "/blog", name :"Blog" },
        { src : "/image/header/tienda.svg" , to  : "/tienda", name :"Tienda" },
        { src : "/image/header/regalo.svg" , to  : "/regalo", name :"Lista" },
    ]
    
    const linkPushPerfil = [
        { path : "/perfil/miperfil", name : "Mi perfil"},
        { path : "/perfil/password", name : "Contraseña"},
        { path : "/perfil/desactivar-cuenta", name : "Desactivar cuenta"},
        { path : "/perfil/miscompras", name : "Mis compras"},
    ]

    const handleExpandOptions = ( ) => {
        setExpand( expand => !expand);
    }
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
                                    <li className="list-group-item">
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
                            :   <>
                                    <li className="list-group-item justify-content">
                                        <div className="flex">
                                            <div>
                                                <Image
                                                        src="/image/header/skinbaby-mob.svg"
                                                        alt="logo login yesmom"
                                                        width={30}
                                                        height={30}
                                                />
                                            </div>
                                            <div>
                                                <h6 className="text-navbar">Perfil - Lucia Q.</h6>
                                                
                                            </div>
                                        </div>
                                        <div 
                                            className="expand-more-options"
                                            onClick={ handleExpandOptions }
                                        >
                                        <Image 
                                            src="/image/header/expand-more-options.svg" 
                                            alt="logo login yesmom"
                                            width={25}
                                            height={25}
                                        />
                                        </div>
                                    </li>
                                    {
                                        expand	&&
                                        <div className="expanded-options">
                                            {
                                                linkPushPerfil.map((link)=>(
                                                    <Link href={link.path}>
                                                        <a>
                                                            <p 
                                                                className={`name-link ${pathname===link.path ?"link-perfil-active" :""}`}
                                                            >
                                                                {link.name}
                                                            </p>
                                                        </a>
                                                    </Link>
                                                ))
                                            }
                                        </div>
                                    }
                                </>
                            }
                        </ul>
                    </div>
                </div>

                
            </div>
            <style jsx>
                {`  
                    .name-link{
                        font-family:"mont-light";
                        font-size:1.5rem;
                        color:#575756;
                    }
                    .link-perfil-active{
                        font-family:"mont-regular";
                    }
                    .flex{
                        display:flex;
                    }
                    .justify-content{
                        display:flex;
                        justify-content:space-between;
                    }
                    .expand-more-options{
                        margin-right:1rem;
                        margin-top:-1rem;
                    }
                    .expanded-options{
                        padding:1rem 0;
                        margin-left:6.5rem;
                        display:flex;
                        flex-direction:column;
                    }
                    .expanded-options p:focus,a:focus{
                        margin:0;
                        text-decoration:none!important;
                        
                    }
                    .list-group-item{
                        padding:0.8rem 1.5rem!important;
                        display:flex!important;
                        align-items:center!important;
                        flex-direction:row!important;

                    }
                    .list-group-item h6{
                        margin-left:2rem;
                    }
                    .drop-menu{
                        overflow-y:scroll;
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
