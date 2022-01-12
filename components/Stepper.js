import React from 'react'


const Stepper = ({selected}) => {

    return (
        <>
            <div className="stepper-container">
                <div 
                    className={`stepper-item ${selected===0 && "stepper-active-step"}`}
                >
                    1
                </div>
                <div 
                    className={`stepper-item ${selected===1 && "stepper-active-step"}`}
                >
                    2
                </div>
                <div 
                    className={`stepper-item ${selected===2 && "stepper-active-step"}`}
                >
                    3
                </div>
                <div 
                    className={`stepper-item ${selected===3 && "stepper-active-step"}`}
                >
                    4
                </div>
            </div>

            <style jsx>
                {`
                    .stepper-container{
                        position: relative;
                        display:flex;
                        align-items:center;
                    }
                    .stepper-container::before{
                        content:"";
                        z-index: 0;
                        border:1px dashed rgba(220, 106, 141, 0.5);
                        position: absolute;
                        height:0.2rem;
                        width:100%;
                    }

                    .stepper-item{
                        cursor:pointer;
                        z-index: 2;
                        background-color: white;
                        height:2rem;
                        width:2rem;
                        border-radius:50%;
                        padding:1.5rem;
                        border: 2px solid rgba(220, 106, 141, 0.5);
                        margin-right:2rem;

                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-family: 'Roboto', sans-serif;
                        font-size:2rem;
                        color:rgba(220, 106, 141, 0.5);
                    }
                    .stepper-item:last-of-type{
                        margin-right:0;
                    }
                    .stepper-active-step{
                        padding:2rem;
                        border: 4px solid #DC6A8D;
                        color: #DC6A8D;
                    }   
                `}
            </style>
        </>
    )
}

export default Stepper
