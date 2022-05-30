import React from "react";

function BannerProveedor({ img }) {
  return (
    <>
      <div className="fade-in animated">
        <section fluid="true" className="box-banner">
          <div className="banner">
            <img className="img-proveedor" src={img} />
          </div>
        </section>
      </div>
      <style jsx>
        {`
          .img-proveedor {
            width: 100%;
          }
          .banner {
            width: 100%;
            object-fit: cover;
          }
        `}
      </style>
    </>
  );
}

export default BannerProveedor;
