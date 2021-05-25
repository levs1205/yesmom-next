import React from "react";

const SearchStore = () => {
  return (
    <>
      <div className="box-search-tienda">
        <input
          type="text"
          placeholder="¿Qué es lo que buscas?"
          id="search"
          name="search"
        />
      </div>
      <style jsx>
        {`
          .box-search-tienda {
            text-align: center;
            margin-top: 0rem;
            margin-bottom: 0rem;
          }
          .box-search-tienda input {
            width: 70%;
            margin: auto;
            border: none;
            padding: 0.2rem;
            border-radius: 1rem;
          }
          .box-search-tienda input:focus-visible {
            outline-color: #dc6a8d;
          }

          
        `}
      </style>
    </>
  );
};

export default SearchStore;
