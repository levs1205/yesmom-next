import React from "react";
import Image from "next/image";

const SearchBlog = () => {
  return (
    <div className="box-yesmom">
      <div className="search-Blog">
        <span className="box-search">
          {/* <Image
            src="/image/header/lupa.svg"
            alt="burger yesmom"
            width={28}
            height={28}
          /> */}
          <input
            type="text"
            placeholder="¿Qué es lo que buscas?"
            id="search"
            name="search"
          />
        </span>
      </div>
      <style jsx>
        {`
          .search-Blog {
            background-color: rgba(254, 191, 65, 1);
            padding-bottom: 1rem;
            padding-top: 6.5rem;
            position: fixed;
            width: 100%;
            z-index: 99;
          }
          .box-search {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }
          input#search {
            background-image: url("/image/header/lupa.svg");
            background-size: contain;
            background-repeat: no-repeat;
            text-indent: 20px;
          }
        `}
      </style>
    </div>
  );
};

export default SearchBlog;
