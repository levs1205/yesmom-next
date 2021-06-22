

function BotonInput({children , type }) {
    //type -> filled - outlined

    return (
        <>
            <div className={`boton ${type}`}>
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
                        flex-basis:calc( 50% - 1rem);
                        padding:0.5rem 0;
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

                    @media (min-width:769px){
                        .boton{
                            padding:1.4rem 1.4rem;
                            font-size:1.3rem;
                            flex-basis:calc( 20% - 0.25rem);
                            margin-right:1rem;
                            border-radius:2rem;
                        }
                        p{
                            font-family:"omnes-bold"!important;
                        }

                    }
                `}
            </style>
        </>
        
    )
}

export default BotonInput
