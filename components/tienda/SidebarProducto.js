import React from 'react'
import {Container } from "react-bootstrap";
const SidebarProducto = () => {

return (
    <Container>
        <div className="side-bar">
            <div className="text-title-filtros">
                <p> Filtros </p>
            </div>
            <hr />
            <ul>
                <li><a href="#home">Todos</a></li>
                <li><a href="#news">Solo en Yes Mom</a></li>
                <li><a href="#contact">Lo + Vendido</a></li>
                <li><a href="#about">Lo + seleccionado</a></li>
                <li><a href="#home">Pack de regalos</a></li>
                <li><a href="#news">Promociones</a></li>
                <li><a href="#contact">Pañales y Toallitas</a></li>
                <li><a href="#about">Coches</a></li>
                <li><a href="#home">Paseo y Organización</a></li>
                <li><a href="#">Sillas para Auto</a></li>
                <li><a href="#">Lactancia y Alimentación</a></li>
                <li><a href="#">Baño</a></li>
                <div className="show-desktop">
                    <li><a href="#">Salud y Cuidado</a></li>
                    <li><a href="#">Juguetes</a></li>
                    <li><a href="#">Ropa y Zapatos</a></li>
                    <li><a href="#">Accesorios</a></li>
                    <li><a href="#">Dormitorio y Decoración</a></li>
                    <li><a href="#">Seguridad</a></li>
                    <li><a href="#">Maternidad</a></li>
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Educativo</a></li>
                </div>
            </ul>
        </div>
        <style jsx>
            {`  
                .show-desktop{
                    display:none;
                }
                hr{
                    margin:0;
                }
                .text-title-filtros {
                    font-family: "mont-heavy" !important;
                    font-size: 2rem;
                    font-weight: 700;
                    margin: 3.5rem 0.5rem 0rem;
                    color: #5A5A5A;
                    /* border-bottom: 1px solid #5A5A5A; */
                    padding: 0 0 0.5rem 0;
                }
                .text-title-filtros p{
                    margin:0;
                    margin-left:0.8rem;
                }
                .side-bar ul {
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                    font-size: 1.3rem;
                }
                .side-bar li a {
                    display: block;
                    color: #5A5A5A;
                    font-weight: 700;
                    padding: 0.8rem 1.6rem;
                    text-decoration: none;
                    font-family: "mont-regular" !important;
                }
                .side-bar li a:hover {
                    background-color: #555;
                    color: white;
                }
                @media (min-width:768px){
                    .show-desktop{
                        display:block;
                    }
                }
            `}
        </style>
    </Container>
    )
}

export default SidebarProducto;