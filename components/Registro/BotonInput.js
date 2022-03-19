

function BotonInput({children , type , width, onClick}) {
    //type -> filled - outlined

    return (
        <>
            <div className={`boton ${type} ${width ? width : ""}`} onClick = { onClick}>
                <p>
                    {children}
                </p>
            </div>
            <style jsx>
                {`  
                    .boton{
                        cursor:pointer;
                        border-radius: 10px;
                        letter-spacing: 0.222222px;
                        text-align:center;
                        width:calc( 50% - 1rem);
                        padding:0.5rem 0;
                        transition:background 0.3s ease-in-out;
                    }
                    .boton:hover{
                        transform: scale(1.05);
												transition: 0.4s ease-in-out;
											transform: scale(1.05);
											background: #FEBF41;		
                    }
                    .boton:hover p{
												transition: 0.4s ease-in-out;
												color:#FFFFFF;	
                    }
                    p{
                        font-family:"omnes-regular"!important;
                        font-size:1.8rem;
                        margin:0;
                    }
                    .filled{
                        background: #FEBF41;
                        color:#FFFFFF;
                    }
                    .outlined{
                        border: 1px solid #FEBF41;
                        box-sizing: border-box;
                        color:#FEBF41;
                    }

                    @media (min-width:768px){
                        .boton{
                            border-radius:15px;
                            padding:1.6rem;
                            font-size:1.3rem;
                            width:8rem;
                            margin-right:1rem;
                            border-radius:2rem;
                        }
                        p{
                            font-family:"omnes-bold"!important;
                        }

                    }
                    @media(min-width:1024px){
                        .boton{
                            width:
                            padding:1.8rem;
                            font-size:2rem;
                        }
                        .small{
                            width:8rem;
                        }
                        
                    }
                `}
            </style>
        </>
        
    )
}

export default BotonInput
