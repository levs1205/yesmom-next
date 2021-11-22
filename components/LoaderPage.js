
import React from 'react'
import Loader from 'react-loader-spinner'

const LoaderPage = () => {
    return (
        <>
            <div className="container-loader">
                <div>
                    <Loader type="ThreeDots" color="#EC608D" height={80} width={80} />
                </div>
            </div>
            <style jsx>
                {`
                    .container-loader{
                        width:100%;
                        height:100vh;

                        display:flex;
                        justify-content:center;
                        align-items:center;
                    }
         
                `}
            </style>
        </>
    )
}

export default LoaderPage
