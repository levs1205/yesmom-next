const baseUrl = 'http://localhost:3700';
// const baseUrl = process.env.BASE_URL;

//* PRODUCTS
//? get summary data of products
export const getProducts = async (catSlug, category, skip, limit) => {
	const category_slug = catSlug !== null ? `cat_slug=${catSlug}` : '';
	const category_name = category !== null ? `categorie=${category}` : '';
	const num_skip = skip !== null && skip !== undefined ? `&skip=${skip}` : '';
	const num_limit = limit !== null && limit !== undefined ? `&limit=${limit}` : '';
	//console.log(`${baseUrl}/product/getbyuser?${category_slug}${category_name}${num_skip}${num_limit}`)
	const response = await fetch(`${process.env.BASE_URL}/product/getbyuser?${category_slug}${category_name}${num_skip}${num_limit}`)
	return await response.json();
};

//? get summary data of product by id
export async function getProductsById(id) {
	//const baseUrl = 'http://localhost:3700';
	//const baseUrl = process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_BUSINESS;
  const response = await fetch(`${process.env.BASE_URL}/product?id=${id}`);
  return await response.json();
}

//* CATEGORIES
//? get summary data of categories
export async function getCategories() {
	//const baseUrl = 'http://localhost:3700';
	//const baseUrl = process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_BUSINESS;
  const response = await fetch(`${process.env.BASE_URL}/categorie/list`);
  return await response.json();
}

//? get summary data of principal catecories
export async function getPrincipalCategories() {
	//const baseUrl = 'http://localhost:3700';
	//const baseUrl = process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_BUSINESS;
  const response = await fetch(`${process.env.BASE_URL}/categorie/listprincipal`);
  return await response.json();
}