import React from 'react'
import {Container } from "react-bootstrap";
const SidebarAyuda = () => {

return (
    <Container>
        <div className="side-bar-ayuda">
            <div>
                <p className="text-title-filtros">Categorías</p>
                <hr />
            </div>
            <div className="container-items-ayuda">
                <h6 className="sidebar-subtitle-ayuda">INFORMACIÓN COVID-19</h6>
                <ul>
                    <li><a href="#home">Información COVID-19</a></li>
                    <li><a href="#news">Cómo está afectando los pedidos</a></li>
                    <li><a href="#contact">Cómo está afectando las devoluciones</a></li>
                    <li><a href="#about">Seguridad y soporte</a></li>
                </ul>
                <h6 className="sidebar-subtitle-ayuda">TENGO UN REGISTRO</h6>
                <ul>
                    <li><a href="#home">Construyendo un registro</a></li>
                    <li><a href="#news">Configuración del registro</a></li>
                    <li><a href="#contact">Administrar su registro</a></li>
                    <li><a href="#about">Compratiendo su registro</a></li>
                    <li><a href="#about">Solución de problemas</a></li>
                </ul>
                <h6 className="sidebar-subtitle-ayuda">TENGO UN REGISTRO</h6>
                <ul>
                    <li><a href="#home">Salud y cuidado</a></li>
                    <li><a href="#news">Juguetes</a></li>
                    <li><a href="#contact">Ropa y zapatos</a></li>
                </ul>
            </div>
        </div>
        <style jsx>
            {`
                hr{
                    
                }
                .sidebar-subtitle-ayuda {
                    
                    font-family: "mont-regular" !important;
                    font-size: 16px;
                    font-weight: 800;
                    margin: 1.5rem 0.5rem 0rem;
                    color: #5A5A5A;
                    padding: 0px 0px 5px 0px;
                }
                .text-title-filtros {
                    font-family: "mont-heavy" !important;
                    font-size: 1.6rem;
                    font-weight: 600;
                    margin: 1rem 0.5rem 0rem;
                    color: #5A5A5A;
                    padding: 0px 0px 5px 0px;
                }
                .side-bar-ayuda {
                    display:none;
                    margin: 0;
                    padding: 1rem;
                }
                .side-bar-ayuda ul {
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                    font-size: 15px;
                }
                .side-bar-ayuda li a {
                    display: block;
                    color: #5A5A5A;
                    font-weight: 700;
                    padding: 0.5rem 1.6rem;
                    text-decoration: none;
                    font-family: "mont-regular" !important;
                }
                .side-bar-ayuda li a:hover {
                    background-color: #555;
                    color: white;
                }

                @media (min-width:768px){
                    .side-bar-ayuda{
                        display:flex;
                        flex-direction:column;
                    }
                }
                @media(min-width:1024px){
                    .text-title-filtros{
                        font-size:1.8rem;
                        padding-left:1rem;
                    }
                    .side-bar-ayuda li a {
                        padding-left:2rem;
                    }
                    .container-items-ayuda{
                        padding-left:1rem;
                    }
                }
                @media(min-width:1280px){
                    .text-title-filtros{
                        font-size:2rem;
                        padding-left:2rem;
                    }
                    .side-bar-ayuda li a {
                        padding-left:3rem;
                    }
                    .container-items-ayuda{
                        padding-left:2rem;
                    }
                }
            `}
        </style>
    </Container>
    )
}

export default SidebarAyuda;