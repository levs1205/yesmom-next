import Link from 'next/link';
import { string, array, number } from 'prop-types';
import { useRouter } from 'next/router';
import React from 'react'
import {Container } from "react-bootstrap";
import { categorysMobile, categorysDesktop } from '../../data/categorys';
import { getCategories } from '../../pages/api/request';


const SidebarProducto = ({ categoryList }) => {
    const { query , pathname } = useRouter();
    const { category } = query;
		console.log('list-->>',category)
		console.log('categoryList-->>',categoryList)
    const path = "/tienda/categoria";

return (
    <Container>
			{/*  MENU CATEGORIA DESKTOP */}
        <div className="side-bar">
            <div className="text-title-filtros">
                <p> Filtros </p>
            </div>
            <hr />
            <ul>
                {/* <li className={`${pathname === "/tienda" ? "active-link-categoria" : "" }`}>
                    <Link href="/tienda">
                        <a>Destacados</a>
                    </Link>
                </li>
                <li className={`${pathname === "/tienda/categoria/todos" ? "active-link-categoria" : "" }`}>
                    <Link href="/tienda/categoria/todos">
                        <a>Todos</a>
                    </Link>
                </li> */}
								{/* {categoryList?.map(({slug,name, _id} , i) => (
										<li key={_id} className={`${category == slug ? "active-link-categoria" : "" }`}>
												<Link href={`${path}/${slug}`} >
														<a>
																{name}
														</a>
												</Link>
										</li>
								))} */}
                {/* {
                    categoryList.map(({id,name} , i) => (
                        <li key={id} className={`${category == id ? "active-link-categoria" : "" }`}>
                            <Link href={`${path}/${id}`}>
                                <a>
                                    {name}-
                                </a>
                            </Link>
                        </li>
                    ))
                } */}
                <div className="show-desktop">
										{/* <li className={`${pathname === "/tienda" ? "active-link-categoria" : "" }`}>
											<Link href="/tienda">
													<a>Destacados</a>
											</Link>
										</li>
										<li className={`${pathname === "/tienda/categoria/todos" ? "active-link-categoria" : "" }`}>
												<Link href="/tienda/categoria/todos">
														<a>Todos</a>
												</Link>
										</li> */}
										<li className={`${pathname === "/tienda" ? "active-link-categoria" : "" }`}>
											<Link href="/tienda">
													<a>Todos</a>
											</Link>
										</li>
										{categoryList?.map(({slug,name, _id} , i) => (
                        <li key={_id} className={`${category == slug ? "active-link-categoria" : "" }`}>
                            <Link href={`${path}/${slug}`} >
                                <a>
                                    {name}
                                </a>
                            </Link>
                        </li>
                    ))}                
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
                    color: #575650;
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
                .link-off{
                    margin: 0;
                    cursor:pointer;
                }
                .side-bar li a{
                    display: block;
                    color: #5A5A5A;
                    font-weight: 700;
                    padding: 0.8rem 1.6rem;
                    text-decoration: none;
                    font-family: "mont-regular";
                }
                .side-bar li a:hover{
                    background-color: #555;
                    color: white;
                }
                .active-link-categoria a{
                    font-family:"mont-heavy"!important;
                    color : #5A5A5A!important;
                }
                .active-link-categoria a:hover{
                    background-color:#FFFFFF!important;
                    color : #5A5A5A;
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
