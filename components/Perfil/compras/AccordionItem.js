import React from 'react'
import Link from 'next/link'

import {Accordion,Card } from 'react-bootstrap'; 
import Expand from './Expand';
import Stepper from './Stepper';


function AccordionItem({ek, name, date , shipStep}) {
    return (
        <>
            <Card>
                <Card.Header>
                    <div className="header-compra">
                        <div className="header-title">
                            <div className="container-logo-tienda">
                                {/* <img src="" /> - width :100% || object-fit:cover */}
                            </div>
                            <p>{ name }</p>
                        </div>
                        <Expand eventKey={`${ek}`} />
                    </div>
                    <p className="title-compra"><span>Fecha de compra:</span> {date}</p> 
                </Card.Header>
                <Accordion.Collapse eventKey={`${ek}`}>
                    <>
                        <Card.Body>
                            <div className="all-details">
                                <div className="description-compra">
                                    <div className="img-description">
                                        <img  src="https://i.ibb.co/9HFgQfz/image.png" />
                                    </div>
                                    <div className="description">
                                        {/* ESTATICOS - > DINAMICOS */}
                                        <p>Baby Plaza Store</p>
                                        <p>N° de compra: 80065</p>
                                        <p>Sku: 253336987456</p>
                                        <p>Cantidad: 1</p>
                                        <p>Acción: Confirmación recibida</p>
                                        <p>Precio: S/ 154.00</p>
                                        <Link href="#">
                                            <p className="contact-tienda">Contactar Tienda</p>
                                        </Link>
                                    </div>
                                </div>
                                <div className="stepper">
                                    <Stepper active={shipStep}/>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <div className="container-details">
                                <div className="ship-details">
                                    <svg width="25" height="25" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.3171 2.5542H17.2417V3.83135H19.1575V17.88H1.27732V3.83135H3.19305V2.5542H1.11767C0.968397 2.55669 0.821076 2.58857 0.684122 2.64801C0.547168 2.70745 0.423266 2.79329 0.319492 2.90062C0.215717 3.00795 0.134104 3.13468 0.079313 3.27356C0.0245221 3.41244 -0.00237293 3.56075 0.000164147 3.71002V18.0014C-0.00237293 18.1506 0.0245221 18.299 0.079313 18.4378C0.134104 18.5767 0.215717 18.7034 0.319492 18.8108C0.423266 18.9181 0.547168 19.0039 0.684122 19.0634C0.821076 19.1228 0.968397 19.1547 1.11767 19.1572H19.3171C19.4664 19.1547 19.6137 19.1228 19.7507 19.0634C19.8876 19.0039 20.0115 18.9181 20.1153 18.8108C20.2191 18.7034 20.3007 18.5767 20.3555 18.4378C20.4103 18.299 20.4371 18.1506 20.4346 18.0014V3.71002C20.4371 3.56075 20.4103 3.41244 20.3555 3.27356C20.3007 3.13468 20.2191 3.00795 20.1153 2.90062C20.0115 2.79329 19.8876 2.70745 19.7507 2.64801C19.6137 2.58857 19.4664 2.55669 19.3171 2.5542Z" fill="#556EA1"/>
                                        <path d="M3.83154 7.66309H5.1087V8.94024H3.83154V7.66309Z" fill="#556EA1"/>
                                        <path d="M7.66284 7.66309H8.93999V8.94024H7.66284V7.66309Z" fill="#556EA1"/>
                                        <path d="M11.4944 7.66309H12.7715V8.94024H11.4944V7.66309Z" fill="#556EA1"/>
                                        <path d="M15.3259 7.66309H16.6031V8.94024H15.3259V7.66309Z" fill="#556EA1"/>
                                        <path d="M3.83154 10.856H5.1087V12.1331H3.83154V10.856Z" fill="#556EA1"/>
                                        <path d="M7.66284 10.856H8.93999V12.1331H7.66284V10.856Z" fill="#556EA1"/>
                                        <path d="M11.4944 10.856H12.7715V12.1331H11.4944V10.856Z" fill="#556EA1"/>
                                        <path d="M15.3259 10.856H16.6031V12.1331H15.3259V10.856Z" fill="#556EA1"/>
                                        <path d="M3.83154 14.0488H5.1087V15.326H3.83154V14.0488Z" fill="#556EA1"/>
                                        <path d="M7.66284 14.0488H8.93999V15.326H7.66284V14.0488Z" fill="#556EA1"/>
                                        <path d="M11.4944 14.0488H12.7715V15.326H11.4944V14.0488Z" fill="#556EA1"/>
                                        <path d="M15.3259 14.0488H16.6031V15.326H15.3259V14.0488Z" fill="#556EA1"/>
                                        <path d="M5.10855 5.10861C5.27791 5.10861 5.44033 5.04133 5.56009 4.92158C5.67985 4.80182 5.74712 4.6394 5.74712 4.47004V0.638576C5.74712 0.469215 5.67985 0.306791 5.56009 0.187035C5.44033 0.0672784 5.27791 0 5.10855 0C4.93919 0 4.77676 0.0672784 4.65701 0.187035C4.53725 0.306791 4.46997 0.469215 4.46997 0.638576V4.47004C4.46997 4.6394 4.53725 4.80182 4.65701 4.92158C4.77676 5.04133 4.93919 5.10861 5.10855 5.10861Z" fill="#556EA1"/>
                                        <path d="M15.3258 5.10861C15.4952 5.10861 15.6576 5.04133 15.7774 4.92158C15.8971 4.80182 15.9644 4.6394 15.9644 4.47004V0.638576C15.9644 0.469215 15.8971 0.306791 15.7774 0.187035C15.6576 0.0672784 15.4952 0 15.3258 0C15.1565 0 14.994 0.0672784 14.8743 0.187035C14.7545 0.306791 14.6873 0.469215 14.6873 0.638576V4.47004C14.6873 4.6394 14.7545 4.80182 14.8743 4.92158C14.994 5.04133 15.1565 5.10861 15.3258 5.10861Z" fill="#556EA1"/>
                                        <path d="M7.02441 2.5542H13.4102V3.83135H7.02441V2.5542Z" fill="#556EA1"/>
                                    </svg>
                                    <p className="title-compra"><span>Recibe tu compra:</span> 30/08/2020</p>
                                </div>
                                <div className="ship-details">
                                    <svg width="25" height="25" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M20.8603 4.47005H17.8803V0.745009C17.8803 0.54742 17.8018 0.357925 17.6621 0.218208C17.5224 0.0784919 17.3329 0 17.1353 0H0.7451C0.547511 0 0.358015 0.0784919 0.218299 0.218208C0.0785826 0.357925 9.08673e-05 0.54742 9.08673e-05 0.745009V14.1552L9.08971e-05 14.1553H0V14.9003H0.745009V14.9002H0.7451H1.49011V1.49002H16.3903V8.94007H16.3902V10.4301H17.8802V10.0576H17.8803V5.96007H20.8603C21.2555 5.96007 21.6345 6.11706 21.9139 6.39649C22.1934 6.67592 22.3504 7.05491 22.3504 7.45009V8.1951H19.3703V9.68512H22.3504V13.4102H20.5623C20.301 12.803 19.8674 12.2858 19.3153 11.9224C18.7632 11.5589 18.1167 11.3653 17.4557 11.3653C16.7946 11.3653 16.1481 11.5589 15.596 11.9224C15.0439 12.2858 14.6103 12.803 14.349 13.4102H9.26055C9.00414 12.7986 8.57212 12.2768 8.01912 11.9108C7.46613 11.5448 6.81701 11.351 6.15386 11.3539C5.52379 11.3678 4.91123 11.5639 4.39018 11.9184C3.86913 12.273 3.46189 12.7708 3.21767 13.3518C2.97345 13.9328 2.90269 14.572 3.01395 15.1924C3.12521 15.8127 3.41372 16.3875 3.84463 16.8474C4.27554 17.3073 4.83041 17.6326 5.44219 17.7839C6.05397 17.9353 6.69649 17.9062 7.29212 17.7003C7.88775 17.4944 8.411 17.1203 8.79866 16.6234C9.18631 16.1265 9.42177 15.528 9.4766 14.9002H14.1553C14.2499 15.715 14.6407 16.4667 15.2533 17.0122C15.8659 17.5578 16.6577 17.8592 17.478 17.8592C18.2983 17.8592 19.0901 17.5578 19.7027 17.0122C20.3153 16.4667 20.7061 15.715 20.8007 14.9002H23.0954C23.293 14.9002 23.4825 14.8217 23.6222 14.682C23.7619 14.5423 23.8404 14.3528 23.8404 14.1552V7.45009C23.8404 6.65973 23.5264 5.90175 22.9675 5.34289C22.4087 4.78402 21.6507 4.47005 20.8603 4.47005ZM6.15386 16.3902C5.91185 16.4059 5.66918 16.3718 5.44087 16.29C5.21256 16.2082 5.00346 16.0804 4.8265 15.9146C4.64954 15.7487 4.50848 15.5483 4.41205 15.3258C4.31562 15.1033 4.26587 14.8633 4.26587 14.6208C4.26587 14.3783 4.31562 14.1383 4.41205 13.9158C4.50848 13.6933 4.64954 13.4929 4.8265 13.327C5.00346 13.1612 5.21256 13.0334 5.44087 12.9516C5.66918 12.8698 5.91185 12.8357 6.15386 12.8514C6.39588 12.8357 6.63855 12.8698 6.86686 12.9516C7.09517 13.0334 7.30427 13.1612 7.48123 13.327C7.65819 13.4929 7.79925 13.6933 7.89568 13.9158C7.99211 14.1383 8.04186 14.3783 8.04186 14.6208C8.04186 14.8633 7.99211 15.1033 7.89568 15.3258C7.79925 15.5483 7.65819 15.7487 7.48123 15.9146C7.30427 16.0804 7.09517 16.2082 6.86686 16.29C6.63855 16.3718 6.39588 16.4059 6.15386 16.3902ZM17.4557 16.3902C17.109 16.3727 16.7751 16.2538 16.4953 16.0483C16.2156 15.8428 16.0023 15.5598 15.882 15.2342C15.7616 14.9086 15.7394 14.5549 15.8182 14.2169C15.897 13.8788 16.0733 13.5713 16.3252 13.3325C16.5771 13.0937 16.8935 12.9341 17.2353 12.8735C17.5771 12.8128 17.9291 12.8538 18.2478 12.9914C18.5665 13.129 18.8378 13.357 19.028 13.6474C19.2183 13.9377 19.3192 14.2774 19.3182 14.6245C19.3045 15.1054 19.1008 15.5612 18.7517 15.8922C18.4026 16.2231 17.9366 16.4022 17.4557 16.3902Z" fill="#556EA1"/>
                                    </svg>
                                    <p className="title-compra"><span>Dirección de entrega:</span> Av. Martin Ferrer 259, Miraflores</p>
                                </div>
                            </div>
                        </Card.Footer>
                    </>
                    
                </Accordion.Collapse>
            </Card>

            <style jsx>
                {`
                    p{
                        margin:0;
                    }
                    :global(.accordion .card){
                        margin: 3rem 0;
                        border: 0 solid #FFFFFF;
                        box-shadow: 0px 0px 33px rgba(0, 0, 0, 0.13);
                        border-radius: 2rem!important;
                        
                    }
                    :global(.accordion> .card >.card-header){
                        background:none;
                        padding:2rem 3rem;
                        border-bottom: 1.5px solid #DADADA;
                    }
                    :global(.accordion .card .card-body){
                        padding: 2rem 1.5rem;
                    }
                    :global(.accordion .card .card-footer){
                        border-top: 1.5px solid #DADADA;
                        padding:1.5rem;
                    }
                    .header-compra{
                        display:flex;
                        justify-content:space-between;
                        align-items:center;
                        margin-bottom:2.5rem;
                    }
                    .header-compra p{
                        font-size:1.8rem;
                        font-family:"mont-heavy"!important;
                        color: #556EA1;
                    }
                    .container-logo-tienda{
                        width:4rem;
                        height:4rem;
                        border-radius:50%;
                        background-color:#C4C4C4
                    }
                    .header-title{
                        display:flex;
                        align-items:center;
                    }
                    .header-title p{
                        margin-left:2rem;
                    }
                    .title-compra{
                        font-family:"mont-regular"!important;
                        color:#575650;
                        letter-spacing:0.05rem;
                        font-size:1.3rem;
                    }
                    .title-compra span{
                        font-family:"mont-heavy"!important;
                        color:#575650;
                        letter-spacing:0;
                    }
                    /**DESCRIPCION COMPRA */
                    .img-description{
                        margin-bottom:1rem;
                    }
                    .description-compra{
                        display:flex;
                        flex-wrap:wrap;
                    }
                    .img-description{
                        max-width:40%;
                    }
                    .description{
                        max-width:60%;
                        margin-left:1rem;
                    }
                    .description p{
                        font-size:1.4rem;
                        font-family:"mont-light"!important;
                        color: #575650;
                        margin-bottom:0.2rem;
                    }
                    .description p:first-child{
                        font-family:"mont-heavy"!important;
                        color:#575650;
                        font-size:1.8rem;
                        margin:0;
                    }
                    .description p:last-child{
                        font-family:"mont-semibold"!important;
                        color:#556EA1;
                        text-decoration:underline;
                    }

                    /**DETAILS */
                    .container-details{
                        display:flex;
                        flex-direction:column;
                    }
                    .ship-details{
                        display:flex;
                        align-items:center;
                        padding: 0 2rem;
                        margin:1rem 0;
                    }
                    .ship-details p{
                        margin-left:2rem;
                    }
                    .stepper{
                        margin:3rem 0;
                    }

                    @media (min-width:768px){
                        .description-compra{
                            justify-content:center;
                        }
                        .img-description{
                            margin-right:1.5rem;
                        }
                        .description{
                            margin-left:1.5rem;
                        }
                    }
                    @media (min-width:1024px){
                        .all-details{
                            display:flex;
                        }
                        .description-compra{
                            width:50%;
                            flex-wrap:nowrap;
                            justify-content:flex-start;
                        }
                        .stepper{
                            width:50%;
                            margin:0;
                        }
                        .container-details{
                            flex-direction:row;
                            display:flex;
                            align-items:center;
                        }
                    }
                `}
            </style>
        </>
    )
}

export default AccordionItem
