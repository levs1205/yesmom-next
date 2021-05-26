import React from "react";
import SearchStore from "../../components/Search/SearchStore"

const MenuTienda = () => {
  return (
    <>
      <div className="box-menu-tienda">
        <div className="submenu-tienda">
          <h5>Tiendas destacadas</h5>
          <h5>Solo en Yes Mom</h5>
          <h5>Lo + vendido</h5>
          <h5>Packs de  regalos</h5>
          <h5>Promociones</h5>
          <h5>Servicios</h5>
          <h5>Ayuda</h5>
        </div>
        <div>
        <SearchStore/>

        </div>
      </div>
      <style jsx>{`
        .box-menu-tienda {
          padding: 1.5rem 3rem;
          background: #e4ede1;
          background-blend-mode: multiply;
          mix-blend-mode: normal;
        }
        .submenu-tienda {
          display: flex;
          justify-content: center;
          margin-bottom:1rem
        }
        .submenu-tienda h5{
            margin: 0rem 1rem;
            font-family: "mont-regular";
            font-size: .95rem
        }

        @media (max-width: 768px) {
          .submenu-tienda{
            display:none
          }
          .box-menu-tienda {
            padding: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default MenuTienda;
