import React from "react";
import { useRouter } from "next/dist/client/router";
import { useForm } from "../../hooks/useForm";


const SearchBlog = () => {

  const router = useRouter();
  //si no existe query , string vacio
  const { query : {q=""} } = router;
  
  //Controlar cambio del input
  const initialForm = {
    nameBlog : q,
  }
  const [ formValues , handleInputChange ] = useForm(initialForm);

  const { nameBlog } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    if(nameBlog.trim()===""){
      router.push("",undefined,{ shallow: true });  
    }else{
      router.push(`/blog?q=${nameBlog}`,undefined,{ shallow: true });
    }
  }
  
  return (
    <div className="box-yesmom">
      <div className="box-menu-tienda">
            <div className="box-search-tienda">
              <form onSubmit={ handleSubmit }>
                <input
                  type="text"
                  placeholder="¿Qué es lo que buscas?"
                  id="search"
                  name="nameBlog"
                  onChange={ handleInputChange }
                  value={nameBlog}
                />
              </form>
          </div>
      </div>
      <style jsx>
      {`
          .box-menu-tienda{
            background: #FEBF41;
            padding:1.5rem;
          }
          .box-search-tienda {
            text-align: center;
            margin-top: 0rem;
            margin-bottom: 0rem;
          }
          .box-search-tienda input::placeholder , .box-search-tienda input{
            font-size:1.3rem;
            font-family:"mont-regular"!important;
          }
          .box-search-tienda input {
            width: 70%;
            height:3rem;
            margin: auto;
            border: none;
            padding: 0.2rem;
            border-radius: 1rem;
          }
          .box-search-tienda input:focus-visible {
            outline-color: #dc6a8d;
          }

          @media (max-width: 768px) {
            .box-search-tienda input {
              width: 100%;
          }
        }
        `}
      </style>
    </div>
  );
};

export default SearchBlog;
