
import OutsideClickHandler from 'react-outside-click-handler';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

function SearchFilterProveedor() {
    
    const [isVisible , setIsVisible ] = useState(false);
    const { pathname } = useRouter();
    const types = [
        { name : "Todos", path : "/a"},
        { name : "Solo en Baby Plaza Store", path : "/b"},
        { name : "Promociones", path : "/c"},
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

                }
                .options{
                    padding : 1rem 3rem;
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

export default SearchFilterProveedor
