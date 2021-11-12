const baseUrl = 'http://localhost:3700';
//const baseUrl = process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_BUSINESS;

//* PRODUCTS
//? get summary data of products
export const getProducts = async (categorie, skip, limit) => {
	const response = await fetch(`${baseUrl}/product/getbyuser?categorie=${categorie}&skip=${skip}&limit=${limit}`);
	return await response.json();
};

//? get summary data of product by id
export async function getProductsById(id) {
	//const baseUrl = 'http://localhost:3700';
	//const baseUrl = process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_BUSINESS;
  const response = await fetch(`${baseUrl}/product?id=${id}`);
  return await response.json();
}

//* CATEGORIES
//? get summary data of categories
export async function getCategories() {
	//const baseUrl = 'http://localhost:3700';
	//const baseUrl = process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_BUSINESS;
  const response = await fetch(`${baseUrl}/categorie/list`);
  return await response.json();
}

//? get summary data of principal catecories
export async function getPrincipalCategories() {
	//const baseUrl = 'http://localhost:3700';
	//const baseUrl = process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_BUSINESS;
  const response = await fetch(`${baseUrl}/categorie/listprincipal`);
  return await response.json();
}