
import OutsideClickHandler from 'react-outside-click-handler';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react'

function SelectFilterStore() {
    
    const [isVisible , setIsVisible ] = useState(false);
    const clickOutside = useRef(null);
    const { pathname } = useRouter();
    const types = [
        { name : "Todos", path : "/tienda/categoria/todos"},
        { name : "Solo en Yes Mom", path : "/tienda/categoria/Solo en YesMom"},
        { name : "Lo + vendido", path : "/tienda/categoria/Lo+vendido"},
        { name : "Lo + seleccionado", path : "/tienda/categoria/Lo+seleccionado"},
        { name : "Packs de regalo", path : "/tienda/categoria/pack de regalos"},
        { name : "Promociones", path : "/tienda/categoria/promociones"},
        { name : "Pañales y toallitas", path : "/tienda/categoria/pañales y toallitas"},
        { name : "Coches", path : "/tienda/categoria/coches"},
        { name : "Paseo y Organizacion", path : "/tienda/categoria/paseo y organizacion"},
        { name : "Sillas para Auto", path : "/tienda/categoria/sillas para auto"},
        { name : "Lactancia y Alimentación", path : "/tienda/categoria/lactancia y alimentacion"},
        { name : "Baño", path : "/tienda/categoria/baño"},
    ];


    const handleExpandFilters = () => {
        setIsVisible(true);
    }

    const handleOffFilters = () => {
        setIsVisible(false);
    }

    return (
        <>
            <div className="select-filter-store">
                <p className="text-select-filter">Selecciona una categoría</p>
                <OutsideClickHandler display="inline"onOutsideClick={handleOffFilters}>
                    <div className="expand-icon" onClick={handleExpandFilters} >
                        <img src="/image/header/search-store.svg" alt="icon-expand" />
                    </div>
                </OutsideClickHandler>
            </div>
            {
                isVisible &&

                    <div className="container-options-select-filter">
                        <div className="select-filter">
                            <div className="options">
                                {
                                    types.map((link)=>(
                                        <Link key={link.name} href={link.path}>
                                        <a className={`link-to ${pathname===link.path ? "active-link-to" :""}`}>
                                                {link.name}
                                        </a> 
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
            }

            <style jsx>{`
                {/* :global(.box-producto){
                    position: ${isVisible ? "fixed" : "unset"} ;
                    overflow-y :${isVisible ? "scroll" : "unset"}
                } */}
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
                    font-family:"mont-heavy"!important;
                    font-size:1.3rem;
                    color : #5A5A5A;
                }
                .container-options-select-filter{
                    margin-top:15.5rem;
                    z-index:999999999999;
                    position:fixed;
                    top:0;
                    left:0;
                    height:100%;
                    width:100%;

                }

                .select-filter{
                    margin: 0 auto;
                    background:#ffffff;
                    width:25rem;
                    max-width:80%;
                    height:70%;
                }
                .options{
                    padding : 3rem 3rem;
                    height:100%;
                    overflow-y:scroll;

                    display:flex;
                    flex-direction:column;
                }
                .link-to:hover{
                    text-decoration:none;
                }
                .link-to{
                    font-family:"mont-regular"!important;
                    font-size:1.5rem;
                    color:#5A5A5A;
                    margin:1rem 0;
                }
                .active-link-to{
                    font-family:"mont-semibold"!important;
                }
                @media (min-width:768px){
                    .select-filter-store ,.container-options-select-filter{
                        display:none;
                    }
                }
            `}
            </style>
        </>
    )
}

export default SelectFilterStore
