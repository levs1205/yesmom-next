

export const getOtherProducts = async( category , id) =>{

    const res = await fetch('http://localhost:3000/api/product');
    const product = await res.json();

    const productsFiltered = product.filter(product => 
        product.categoria.toLowerCase().trim().includes(category.toLowerCase().trim())
        && product.id !== id
        )
    return productsFiltered;
}