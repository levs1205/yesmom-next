import React from 'react'

function CustomButton({outline , children}) {

    return (
        <>
            <div className="boton">
                <p>
                    {children}
                </p>
            </div>
            <style jsx>
                {`
                    .boton{
                        cursor:pointer;
                        border-radius: 30px;
                        border : ${outline ? "1px solid #EC608D" : ""};
                        background-color:${outline ? "#FFFFFF" : "#EC608D"};
                        padding: 1rem 0;
                        margin:2rem 3rem;
                        transition:0.3s ease-in-out;
                    }
                    .boton:hover{
                        transform:scale(1.05);
                    }
                    p{
                        margin:0;
                        text-align:center;
                        font-family:"omnes-regular";
                        font-weight:500;
                        color:${outline ? "#EC608D" : "#FFFFFF"};
                        font-size:2.3rem; 
                    }
                `
                }
            </style>
        </>
    )
}

export default CustomButton
