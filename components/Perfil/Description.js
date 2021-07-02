import React from 'react'

function Description({ path , description}) {
    return (
        <>
            <div className="description">
                <p className="p-description-primary ft-m-heavy">{path}</p>
                <p className="p-description-secondary ft-m-light">{description}</p>
            </div>
            <hr />
            <style jsx>
                {`
                    p{
                        margin:0;
                    }
                    .ft-m-heavy{
                        font-family:"mont-heavy"!important;
                        font-weight:800;
                    }
                    .ft-m-light{
                        font-family:"mont-light"!important;
                    }
                    .description{
                        margin-top:2.5rem;
                    }
                    .p-description-secondary{
                        font-size:1.3rem;
                        color: #575650;
                    }
                    .p-description-primary{
                        font-size:1.8rem;
                        color: #5A5A5A;
                    }
                    hr{
                        margin:1.5rem -2rem;                       
                    }

                    @media (min-width:768px){
                        hr{
                            margin-left:0;
                            margin-right:0;
                        }
                    }
                    @media(min-width:1024px){
                        .p-description-primary{
                            font-family:"mont-semibold"!important;
                            font-size:3.5rem;
                        }
                        .p-description-secondary{
                            font-size:1.5rem;
                        }
                        
                    }
                `}
            </style>
        </>
    )
}

export default Description
