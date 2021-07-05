import React from 'react';
import Link from 'next/dist/client/link';

function Sidebar({ active }) {

    const options=[
        { text:"Mi perfil" ,name:"miperfil" , path:"/perfil/miperfil" },
        { text:"Contraseña" ,name:"password" , path:"/perfil/password" },
        { text:"Desactivar cuenta" ,name:"desactivar" , path:"/perfil/desactivar-cuenta" },
        { text:"Mis compras" ,name:"miscompras" , path:"/perfil/miscompras" },
    ]
    return (
        <>
            <div className="sidebar">
                <hr />
                <ul>
                    {options.map((el,i)=>(
                        <Link key={i} href={`${el.path}`}>
                            <li className={`${active===el.name ? "active" : ""}`}>
                                <p>{el.text}</p>
                                {active === el.name &&
                                    <div className="star-icon">
                                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.4877 8.16373C18.7007 8.00619 18.8588 7.78641 18.9396 7.53522C19.0205 7.28403 19.0201 7.01402 18.9386 6.76304C18.857 6.51207 18.6984 6.29272 18.485 6.13575C18.2715 5.97878 18.0139 5.89206 17.7483 5.88775L12.5895 5.69429C12.5642 5.69255 12.5398 5.68357 12.5195 5.66843C12.4992 5.65329 12.4837 5.63263 12.4749 5.60894L10.6922 0.829395C10.6027 0.58623 10.44 0.376258 10.2262 0.227909C10.0125 0.0795604 9.75796 0 9.49713 0C9.23631 0 8.98179 0.0795604 8.76803 0.227909C8.55426 0.376258 8.39159 0.58623 8.30202 0.829395L6.52511 5.62601C6.51633 5.6497 6.50084 5.67036 6.4805 5.6855C6.46016 5.70064 6.43584 5.70962 6.41048 5.71136L1.25171 5.90482C0.986099 5.90913 0.728501 5.99584 0.51504 6.15281C0.301579 6.30978 0.142959 6.52914 0.061422 6.78011C-0.0201152 7.03109 -0.020481 7.3011 0.0603758 7.55229C0.141233 7.80348 0.299257 8.02326 0.512292 8.1808L4.55905 11.3387C4.57931 11.3545 4.59444 11.3759 4.60259 11.4002C4.61074 11.4244 4.61155 11.4506 4.60491 11.4753L3.21204 16.3743C3.13987 16.6238 3.14686 16.8893 3.23207 17.1347C3.31728 17.38 3.47658 17.5934 3.68828 17.7457C3.89999 17.8981 4.15383 17.982 4.41527 17.986C4.67671 17.9901 4.93306 17.9141 5.14944 17.7683L9.42548 14.9234C9.44655 14.9089 9.47154 14.9012 9.49713 14.9012C9.52273 14.9012 9.54772 14.9089 9.56878 14.9234L13.8448 17.7683C14.0583 17.919 14.3137 18 14.5756 18C14.8376 18 15.093 17.919 15.3065 17.7683C15.5182 17.6174 15.6777 17.4051 15.7629 17.1606C15.8481 16.916 15.8548 16.6513 15.7822 16.4028L14.3779 11.4867C14.3705 11.462 14.3709 11.4356 14.3791 11.4112C14.3873 11.3867 14.4029 11.3654 14.4238 11.3501L18.4877 8.16373Z" fill="#FEBF41"/>
                                        </svg>
                                    </div>
                                }
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>

            <style jsx>
                {`
                    .sidebar{
                        display:none;
                    }
                    p{
                        margin:0;
                        font-family:"mont-regular"!important;
                        font-weight:500;
                        font-size:1.5rem;
                        color:#575650;
                    }
                    ul{
                        padding-top:0.5rem;
                    }
                    li{
                        margin:1rem 0;
                        list-style:none;
                        cursor:pointer;
                        display:flex;
                    }
                    .active p{
                        position:relative;
                        font-family:"mont-heavy"!important;
                    }
                    .star-icon{
                        margin-left:1rem;
                    }
                    @media (min-width:768px){
                        .sidebar{
                            display:block;
                        }
                    }
                `}
            </style>
        </>
    )
}

export default Sidebar
