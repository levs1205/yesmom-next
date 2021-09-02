import React from "react";
import SelectFilterStore from "./SelectFilterStore";
import { useRouter } from 'next/dist/client/router'
import { useForm } from '../../hooks/useForm'

const SearchStore = () => {

  const router = useRouter();
  //si no existe query , string vacio
  const { query : {q=""} } = router;
  
  //Controlar cambio del input
  const initialForm = {
    nameStore : q,
  }
  const [ formValues , handleInputChange ] = useForm(initialForm);

  const { nameStore } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    if(nameStore.trim()===""){
      router.push("",undefined,{ shallow: true });  
    }else{
      router.push(`/tienda?q=${nameStore}`,undefined,{ shallow: true });
    }
  }

  return (
    <>
      <div className="box-search-tienda">
        <form onSubmit={ handleSubmit }>
          <input
            type="text"
            placeholder="¿Qué es lo que buscas?"
            id="search"
            name="nameStore"
            onChange={ handleInputChange }
            value={nameStore}
          />
        </form>
      </div>
      <div className="container-search-filter">
        <SelectFilterStore />
      </div>
      <style jsx>
        {`
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
            .container-search-filter{
              padding: 0 2rem;
            }
            .box-search-tienda input {
              width: 100%;
          }
        }
        `}
      </style>
    </>
  );
};

export default SearchStore;
