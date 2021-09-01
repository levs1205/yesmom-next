

export const getOtherProducts = async( category , id) =>{

<<<<<<< HEAD
    const res = await fetch('http://localhost:3003/api/product/product');
=======
    const res = await fetch('http://localhost:3000/api/product');
>>>>>>> 24afe51a499d8c45415a15ac29d13d0958019b20
    const product = await res.json();

    const productsFiltered = product.filter(product => 
        product.categoria.toLowerCase().trim().includes(category.toLowerCase().trim())
        && product.id !== id
        )
    return productsFiltered;
}