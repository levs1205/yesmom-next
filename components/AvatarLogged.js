
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { ButtonGroup, Dropdown } from 'react-bootstrap'
import { startLogout } from '../context/actions/auth'
import YesmomContext from '../context/Context'



const AvatarLogged = () => {

    const router = useRouter();
    const { dispatchAuth } =useContext(YesmomContext); 

    const handleLogout = () => {
        router.push('/');
        dispatchAuth(startLogout);
        
    }

    return (
        <>
            <div className="container-logged">
            <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle id="dropdown-custom-1">
                    <div className="dropdown-logged">
                        <Image
                            src="/image/header/skinbaby.svg"
                            width={30}
                            height={30}
                        />
                        <p className="name-logged">Admin</p>
                    </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <div>
                        <Link href="/perfil/miperfil" >
                            <p className="items-dropdown-menu cursor-pointer">Mi perfil</p>
                        </Link>
                        <p className="items-dropdown-menu-2">Admin</p>
                    </div>
                    <Link href="/perfil/miscompras">
                        <p className="items-dropdown-menu cursor-pointer">Mis compras</p>
                    </Link>
                    {/* <Link href="#">
                        <p className="items-dropdown-menu cursor-pointer">Ayuda</p>
                    </Link> */}
                    <Dropdown.Divider />
                    <p 
                        className="items-dropdown-menu-2 cursor-pointer"
                        onClick= { handleLogout }
                    >Cerrar sesión</p>
                </Dropdown.Menu>
            </Dropdown>
            </div>
            <style jsx>{`
                .cursor-pointer{
                    cursor:pointer;
                }
                .container-logged{
                    margin:0 1rem;
                    width:11rem;
                }
                .dropdown-logged{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                }
                :global(.dropdown){
                    width:100%;
                }
                :global(.dropdown-toggle){
                    display:flex;
                    align-items:center;
                    
                }
                :global(.btn-primary, .btn-primary:hover , .btn-primary:focus){
                    color:#DC6A8D;
                    background:white;
                    border : 2px solid #DC6A8D;
                    border-radius : 15px;
                    box-shadow:none;
                }
                :global(.btn-primary:not(:disabled):not(.disabled).active, 
                .btn-primary:not(:disabled):not(.disabled):active, 
                .show>.btn-primary.dropdown-toggle){
                    color:#DC6A8D;
                    background:white;
                    border : 2px solid #DC6A8D;
                    border-radius : 15px;
                    box-shadow:none!important;
                }
                :global(.dropdown-menu){
                    background: #DC6A8D;
                    border: 2px solid #DC6A8D;
                    box-sizing: border-box;
                    box-shadow: 1px 6px 10px rgba(0, 0, 0, 0.17);
                    border-radius: 10px;

                    display:flex;
                    flex-direction:column;
                    padding: 1.5rem;
                    width:15rem;
                }
                .items-dropdown-menu{
                    font-family:"mont-heavy";
                    font-size:1.3rem;
                    color:#FFFFFF;
                }
                .items-dropdown-menu-2{
                    font-family:"mont-regular";
                    font-size:1.3rem;
                    color:#FFFFFF;
                }
                .name-logged{
                    color:#DC6A8D;
                    font-family:"mont-semibold"!important;
                    font-size:1.4rem;
                    margin: 0 ;
                    margin-left:0.5rem
                }

            `}
            </style>
        </>
    )
}

export default AvatarLogged
