

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
                        flex-basis:calc( 50% - 0.25rem);
                        padding:0.25rem 0;
                    }
                    p{
                        font-family:"omnes-regular"!important;
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
                `}
            </style>
        </>
        
    )
}

export default BotonInput
