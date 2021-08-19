import React from 'react'
import {Container } from "react-bootstrap";
const SidebarAyuda = ({ active}) => {

    console.log(active);
    const categories = [
        {
            activeRuta : "covid",
            title :"INFORMACIÓN COVID-19" ,
            path: "informacion-covid",
            items :[
                {name :"Información COVID-19", path: "info-covid"},
                {name :"Cómo está afectando los pedidos", path: "pedidos-afectados"},
                {name :"Cómo está afectando las devoluciones", path: "devoluciones-afectadas"},
                {name :"Seguridad y soporte", path: "seguridad-y-soporte"}
            ] 
        },
        {
            activeRuta : "registro",
            title :"TENGO UN REGISTRO" , 
            path: "tengo-un-registro",
            items :[
                {name :"Construyendo un registro", path: "construyendo-registro"},
                {name :"Configuración del registro", path: "configuracion-registro"},
                {name :"Administrar su registro", path: "administracion-registro"},
                {name :"Compartiendo su registro", path: "compartiendo-registro"},
                {name :"Solución de problemas", path: "solucion-de-problemas"}
            ] 
        },
        {
            activeRuta : "compras",
            title :"COMPRAS EN LA TIENDA" ,
            path: "compras", 
            items :[
                {name :"Salud y cuidado", path: "salud-y-cuidado"},
                {name :"Juguetes", path: "juguetes"},
                {name :"Ropa y zapatos", path: "ropa-y-zapatos"},
            ] 
        }
    ]

return (
    <Container>
        <div className="side-bar-ayuda">
            <div>
                <p className="text-title-filtros">Categorías</p>
                <hr />
            </div>
            <div className="container-items-ayuda">
                {
                    categories.map(({activeRuta, title , path , items} , index)=>(
                        <div key={index}>
                           <h6 className={`sidebar-subtitle-ayuda ${active === activeRuta ? "cat-actived" : ""}`}>{title}</h6>
                           <ul>
                               {items.map((item,i)=>(
                                    <li key={i}><a href={`/ayuda/${path}/${item.path}`}>{item.name}</a></li>
                               ))}
                            </ul>
                        </div>
                    ))
                }
                
            </div>
        </div>
        <style jsx>
            {`
                .sidebar-subtitle-ayuda {
                    
                    font-family: "mont-regular" !important;
                    font-size: 16px;
                    font-weight: 800;
                    margin: 1.5rem 0.5rem 0rem;
                    color: #5A5A5A;
                    padding: 0px 0px 5px 0px;
                }
                .cat-actived{
                    font-family:"mont-semibold"!important;
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