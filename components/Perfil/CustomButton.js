import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function CustomButton({outline , children, fxClick, type}) {

    const handleConfirm = () => {

        const MySwal = withReactContent(Swal);
        MySwal.fire({
            title: <p className="title-warning">Pretium lectus quam id leo in vitae. Luctus venenatis lectus magna fringilla.</p>,
            html:
                <form className="form-checkbox">
                    <input id="checkbox" type="checkbox" name="checkbox"/>
                    <label htmlFor="checkbox">Sí,acepto</label>
                </form>,
            text:"Sí,acepto",
            showConfirmButton:true ,
            showCancelButton : true,
            confirmButtonText:'Guardar',
            cancelButtonText:'Cancelar'
          })
    }

    return (
        <>
            <div onClick={type === "confirm" ? handleConfirm : fxClick} className="boton">
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

                    /**WARNING */
                    :global(.swal2-title){
                        padding-top:5rem!important;
                    }
                    :global(.title-warning){
                        font-family:"mont-semibold"!important;
                        font-weight:600;
                        font-size:2rem;
                        color:#575650;
                    }
                    :global(.swal2-popup){
                        margin-top:8rem!important;
                        border-radius:50px!important;
                        width:34rem!important;
                        height:40rem!important;
                        border:4px dashed #DC6A8D!important;
                    }
                    :global(.form-checkbox){
                        display:flex;
                        align-items:center;
                        justify-content:center;
                    }
                    :global(.form-checkbox input){
                        height:2rem;
                        width:2rem;
                        border-radius:10px;
                    }
                    :global(.form-checkbox label){
                        margin-left:1rem!important;
                        margin:0;
                        font-family:'mont-semibold'!important;
                        font-size:2rem;
                    }
                    :global(.swal2-actions){
                        flex-direction:column;
                    }
                    :global(.swal2-styled.swal2-confirm){
                        background-color:#EC608D!important;
                    }
                    :global(.swal2-styled.swal2-cancel){
                        border :1px solid #EC608D!important;
                        background-color:#FFFFFF!important;
                        color:#EC608D!important;
                    }
                    :global(.swal2-styled.swal2-cancel ,.swal2-styled.swal2-confirm ){
                        width:80%;
                        cursor:pointer!important;
                        border-radius: 30px!important;
                        padding: 1rem 0!important;
                        padding: 1rem 0!important;
                        transition:0.3s ease-in-out!important;

                        text-align:center!important;
                        font-family:"omnes-regular"!important;
                        font-weight:500!important;
                        font-size:2.3rem!important;
                    }
                    /** */

                    @media (min-width:768px){
                        .boton{
                            border-radius:15px;
                            background-color:${outline ? "#FFFFFF" : "#DC6A8D"};
                            padding:1.5rem;
                            margin:auto 1rem;
                        }
                        p{
                            font-family:"omnes-bold";
                            font-weight:500;
                            color:${outline ? "#DC6A8D" : "#FFFFFF"};
                            font-size:1.5rem;
                        }

                        /**WARNING */
                        :global(.swal2-popup){
                            width:50rem!important;
                            height:25rem!important;
                        }
                        :global(.title-warning){
                            font-family:"mont-semibold"!important;
                            font-size:2rem;
                        }
                        :global(.swal2-title){
                            padding-top:2.5rem!important;
                        }
                        :global(.swal2-actions){
                            flex-direction:row-reverse;
                        }
                        :global(.swal2-styled.swal2-cancel){
                            color:#DC6A8D;
                            background-color:#FFFFFF;
                        }
                        :global(.swal2-styled.swal2-confirm){
                            color:#FFFFFF;
                            background-color:#DC6A8D;
                            margin-left:1.5rem!important;
                        }
                        
                        :global(.swal2-styled.swal2-cancel ,.swal2-styled.swal2-confirm ){
                            width:19%;
                            padding:1.5rem 0!important;
                            border-radius:15px!important;
                            font-family:"omnes-bold"!important;
                            font-size:1.5rem!important;
                        }
                        :global(.form-checkbox input){
                            height:3rem;
                            width:3rem;
                            border-radius:20px!important;
                        }
                    }
                    @media (min-width:1024px){
                        p{
                            font-size:1.8rem;
                        }
                        :global(.swal2-popup){
                            width:52.5rem!important;
                            height:27.5rem!important;
                        }

                        :global(.swal2-styled.swal2-cancel ,.swal2-styled.swal2-confirm ){
                            font-size:1.8rem!important;
                        }
                    }
                    @media (min-width:1280px){
                        :global(.swal2-popup){
                            width:55rem!important;
                            height:30rem!important;
                        }
                    }
                `}
            </style>
        </>
    )
}

export default CustomButton
