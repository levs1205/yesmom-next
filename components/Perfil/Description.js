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
                `}
            </style>
        </>
    )
}

export default Description
