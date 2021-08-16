

import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { Button, Collapse, Dropdown } from 'react-bootstrap'

function SelectFilterStore() {
    
    const { pathname } = useRouter();
    const types = [
        { name : "Todos", path : "/"},
        { name : "Solo en Yes Mom", path : "/"},
        { name : "Lo + vendido", path : "/"},
        { name : "Lo + seleccionado", path : "/"},
        { name : "Packs de regalo", path : "/"},
        { name : "Promociones", path : "/"},
        { name : "Pañales y toallitas", path : "/"},
        { name : "Coches", path : "/"},
        { name : "Paseo y Organizacion", path : "/"},
        { name : "Sillas para Auto", path : "/"},
        { name : "Lactancia y Alimentación", path : "/"},
        { name : "Baño", path : "/"},
    ];


    return (
        <>
            <div className="select-filter-store">
                <p className="text-select-filter">Selecciona una categoría</p>
                <div className="expand-icon">
                    <img src="/image/header/search-store.svg" alt="icon-expand" />
                </div>
            </div>

            <div className="container-options-select-filter">
                 <div className="select-filter">
                     <div className="options">
                        {
                            types.map((link)=>(
                                <Link href="">
                                   <a>

                                   </a> 
                                </Link>
                            ))
                        }
                     </div>
                 </div>
            </div>

            <style jsx>{`
                .expand-icon{
                    cursor:pointer;

                }
                .select-filter-store{
                    margin-top:2rem;
                    padding-bottom:0.5rem;
                    display : flex;
                    align-items:center;
                    justify-content :space-between;
                    border-bottom: 2px solid #DADADA;
                }    
                .text-select-filter{
                    margin: 0;
                    font-family:"mont-semibold"!important;
                    font-size:1.3rem;
                    color : #5A5A5A;
                }
                .container-options-select-filter{
                    z-index:999999999999;
                    position:fixed;
                    top:0;
                    left:0;
                    height:100vh;
                    width:100%;

                    display:flex;
                    align-items:center;
                    justify-content:center;
                }

                .select-filter{
                    margin-top:6.5rem;
                    background:#ffffff;
                    width:65%;
                    height:50%;
                }
                .options{
                    padding : 1rem 2rem;
                    max-height:100%;
                    overflow-y:scroll;
                }
                @media (min-width:768px){
                    .select-filter-store{
                        display:none;
                    }
                }
            `}
            </style>
        </>
    )
}

export default SelectFilterStore
