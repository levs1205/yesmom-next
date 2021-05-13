import React from 'react'

const SidebarProducto = () => {

return (
    <>
        <div className="side-bar">
            <div className="text-title-filtros">
                Filtros
            </div>
            <ul>
                <li><a href="#home">Todos</a></li>
                <li><a href="#news">Solo en Yes Mom</a></li>
                <li><a href="#contact">Lo + Vnedido</a></li>
                <li><a href="#about">Lo + seleccionado</a></li>
                <li><a href="#home">Pack de regalos</a></li>
                <li><a href="#news">Promociones</a></li>
                <li><a href="#contact">Pañales y Toallitas</a></li>
                <li><a href="#about">Coches</a></li>
                <li><a href="#home">Paseo y Organización</a></li>
            </ul>
        </div>
        <style jsx>
            {`
                .text-title-filtros {
                    font-family: "mont-regular" !important;
                    font-size: 15px;
                    font-weight: 600;
                    margin: 3.5rem 0.5rem 0rem;
                    color: #5A5A5A;
                    border-bottom: 1px solid #5A5A5A;
                    padding: 0px 0px 5px 0px;
                }
                .side-bar ul {
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                    font-size: 16px;
                }
                .side-bar li a {
                    display: block;
                    color: #5A5A5A;
                    font-weight: 700;
                    padding: 8px 16px;
                    text-decoration: none;
                    font-family: "mont-regular" !important;
                }
                .side-bar li a:hover {
                    background-color: #555;
                    color: white;
                }
                @media (max-width: 768px) {
                    .side-bar{
                        display: none;
                    }
                }
            `}
        </style>
    </>
    )
}

export default SidebarProducto;