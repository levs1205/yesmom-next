import React from 'react'
import Image from "next/image";

const BannerTienda = () => {

return (
    <>
        <div className="fade-in animated">
            <section fluid="true" className="box-banner">
                <div className="banner">
                    <Image
                        src="/image/tienda/image-banner.svg"
                        alt="Banner secundario de productos"
                        className="image"
                        width={1200}
                        height={800}
                    />
                </div>
            </section>
        </div>
        <style jsx>
            {`
            .banner {
                display:flex;
                justify-content:center;
                align-item:center;
            }
            @media (min-width: 1024px) {

            }
            @media (max-width: 1023px){

            }
            @media (max-width: 480px) {

            }
            `}
        </style>
    </>
    )
}

export default BannerTienda;