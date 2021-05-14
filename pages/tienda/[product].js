import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import AppLayout from "../../components/AppLayout";

const Product = () => {
  return (
    <AppLayout>
      <div className="container--firstProductBlock">
        <section className="firstProductBlock--carousel">
          <Carousel>
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT33_pESsQm9_ibShiVq11PuPcNIuR3w4JOf8_oTFubhYW81Kj7Ux8fc6Mr1qwT6DF76i0&usqp=CAU" />
            </div>
            <div>
              <img src="https://kinsta.com/es/wp-content/uploads/sites/8/2017/04/cambiar-url-wordpress.jpg" />
            </div>
            <div>
              <img src="https://kinsta.com/es/wp-content/uploads/sites/8/2017/04/cambiar-url-wordpress.jpg" />
            </div>
            <div>
              <img src="https://kinsta.com/es/wp-content/uploads/sites/8/2017/04/cambiar-url-wordpress.jpg" />
            </div>
            <div>
              <img src="https://kinsta.com/es/wp-content/uploads/sites/8/2017/04/cambiar-url-wordpress.jpg" />
            </div>
          </Carousel>
        </section>
        <section className="firstProductBlock--details">
          <h1> Conjunto Bebe 4 piezas</h1>
          <p className='sub-title'>Único - Baby plaza</p>
          <p className='short-description'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
            tenetur error doloribus harum reprehenderit porro ut, sapiente
          </p>
          <p className='price-text'>S/ 68.00</p>
          <div>
            <select name="" id="">
              <option value="">sdssd</option>
              <option value="">sdsdsd</option>
              <option value="">sds</option>
            </select>
            <select name="" id="">
              <option value="">sdssd</option>
              <option value="">sdsdsd</option>
              <option value="">sds</option>
            </select>
          </div>
          <div>
            <p>Cantidad</p>
          </div>
          <div>
            <button>Agregar al Carrito</button>
            <button>Ver la tienda</button>
          </div>
        </section>
      </div>
      <style jsx>
        {`
          .container--firstProductBlock {
            width: 100%;
            display: flex;
            flex-direction: column;
            padding: 6rem 1rem 3rem 1rem;
          }
          .firstProductBlock--carousel {
            width: 100%;
          }
          .firstProductBlock--details {
            width: 100%;
            padding: 0rem 1rem;
          }
          .firstProductBlock--details h1{
            font-family: "mont-semibold"!important;
            font-style: normal;
            font-size:1rem;
            font-weight: 600;
            color: #5A5A5A;
          }
        .firstProductBlock--details .sub-title{
          font-family: "mont-light"!important;
          font-style: normal;
          font-size:1rem;
          color: #5A5A5A;
        }
         .firstProductBlock--details .short-description{
          font-family: "mont-light"!important;
          font-style: normal;
          font-size:0.7rem;
          color: #5A5A5A;
        }
         .firstProductBlock--details .price-text{
          font-family: "mont-semibold"!important;
          font-style: normal;
          font-size:1.3rem;
          color:#4B64A4;
        }
        :global(.carousel li img){
           border-radius: 10px!important;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);

        }
        :global(.carousel .thumb img) {
        vertical-align: top;
        height: 60px;
        }
        :global(.carousel .slide img) {
            width: 100%;
            height: 350px;
            vertical-align: top;
            border: 0;
        }
        :global(.carousel .control-dots){
          display:none
        }
        @media (min-width: 768px) {
           .container--firstProductBlock {
            width: 100%;
            display: flex;
            flex-direction: row;
            padding: 8rem 8rem 3rem 8rem;
          }
          .firstProductBlock--carousel {
            width: 50%;
          }
          .firstProductBlock--details {
            width: 50%;
            padding: 0rem 2rem;
          }
          .firstProductBlock--details h1 {
            font-size:1.2rem;
          }
          .firstProductBlock--details .sub-title{
            font-size:1.2rem;
          }
           .firstProductBlock--details .short-description{
            font-size:1rem;
          }
           .firstProductBlock--details .price-text{
            font-size:1.5rem;
          }
        }
        `}
      </style>
    </AppLayout>
  );
};

export default Product;
