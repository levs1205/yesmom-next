import Link from 'next/link';
import React from 'react'
import {Container } from "react-bootstrap";
const SidebarProducto = () => {

    const linksMobile = [
        { path : "/tienda/categoria/todos" , name : "Todos"},
        { path : "/tienda/categoria/solo en yesmom" , name : "Solo en YesMom"},
        { path : "/tienda/categoria/lo+vendido" , name : "Lo + vendido"},
        { path : "/tienda/categoria/lo+seleccionado" , name : "Lo + seleccionado"},
        { path : "/tienda/categoria/pack de regalos" , name : "Pack de regalos"},
        { path : "/tienda/categoria/promociones" , name : "Promociones"},
        { path : "/tienda/categoria/pañales y toallitas" , name : "Pañales y Toallitas"},
        { path : "/tienda/categoria/coches" , name : "Coches"},
        { path : "/tienda/categoria/paseo y organizacion" , name : "Paseo y Organización"},
        { path : "/tienda/categoria/sillas para auto" , name : "Sillas para Auto"},
        { path : "/tienda/categoria/lactancia y alimentacion" , name : "Lactancia y Alimentación"},
        { path : "/tienda/categoria/baño" , name : "Baño"},
    ]

    const linksDesktop = [
        {path : "/tienda/categoria/salud y cuidado" , name :"Salud y Cuidado"},
        {path : "/tienda/categoria/juguetes" , name :"Juguetes"},
        {path : "/tienda/categoria/ropa y zapatos" , name :"Ropa y Zapatos"},
        {path : "/tienda/categoria/accesorios" , name :"Accesorios"},
        {path : "/tienda/categoria/dormitorio y decoracion" , name :"Dormitorio y Decoración"},
        {path : "/tienda/categoria/seguridad" , name :"Seguridad"},
        {path : "/tienda/categoria/maternidad" , name :"Maternidad"},
        {path : "/tienda/categoria/servicios" , name :"Servicios"},
        {path : "/tienda/categoria/educativo" , name :"Educativo"},
    ]

return (
    <Container>
        <div className="side-bar">
            <div className="text-title-filtros">
                <p> Filtros </p>
            </div>
            <hr />
            <ul>
                {
                    linksMobile.map(({path, name} , i) => (
                        <li key={name}>
                            <Link href={path}>
                                <a>
                                    {name}
                                </a>
                            </Link>
                        </li>
                    ))
                }
                <div className="show-desktop">
                {
                    linksDesktop.map(({path, name} , i) => (
                        <li key={name}>
                            <Link href={path}>
                                <a>
                                    {name}
                                </a>
                            </Link>
                        </li>
                    ))
                }
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