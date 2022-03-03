//const baseUrl = 'http://localhost:3300';
// const baseUrlBA = 'http://localhost:3700';
const baseUrl = process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_SECURITY;
const baseUrlBA = process.env.NEXT_PUBLIC_REACT_APP_BACKEND_URL_BUSINESS;

//let token = JSON.parse(window.localStorage.getItem("YesmomToken"));

//* BLOGS
//? get summary data of blogs
export async function getBlogs() {
  const response = await fetch(`${baseUrlBA}/getBlogAll/user?limit=2`);
  return await response.json();
}


//* PRODUCTS
//? get summary data of products
export const getProducts = async (catSlug, category, skip, limit) => {
	const category_slug = catSlug !== null ? `cat_slug=${catSlug}` : '';
	const category_name = category !== null ? `categorie=${category}` : '';
	const num_skip = skip !== null && skip !== undefined ? `&skip=${skip}` : '';
	const num_limit = limit !== null && limit !== undefined ? `&limit=${limit}` : '';

	const response = await fetch(`${baseUrlBA}/product/getbyuser?${category_slug}${category_name}${num_skip}${num_limit}`)
	return await response.json();
};

//? get summary data of products by id
export const getProductsByIdStore = async (storeId, skip, limit, order, filter) => {
	const store_id = storeId !== null ? `store=${storeId}` : '';
	const num_skip = skip !== null && skip !== undefined ? `&skip=${skip}` : '';
	const num_limit = limit !== null && limit !== undefined ? `&limit=${limit}` : '';
	const num_order = order !== null && order !== undefined ? `&order=${order}` : '';
	const num_filter = filter !== null && filter !== undefined ? `&filter=${filter}` : '';

	const response = await fetch(`${baseUrlBA}/product/getbyuser?${store_id}${num_skip}${num_limit}${num_order}${num_order}${num_filter}`)
	return await response.json();
};

//? get summary data of products by url store
export const getProductsByUrlStore = async (storeSlug, skip, limit) => {
	const store_slug = storeSlug !== null ? `nombreTiendaUrl=${storeSlug}` : '';
	const num_skip = skip !== null && skip !== undefined ? `&skip=${skip}` : '';
	const num_limit = limit !== null && limit !== undefined ? `&limit=${limit}` : '';

	const response = await fetch(`${baseUrlBA}/product/getbyuser?${store_slug}${num_skip}${num_limit}`)
	return await response.json();
};

export const getStoreByName = async (storeName) => {
	const store_name = storeName !== null ? `storename=${storeName}` : '';
	const response = await fetch(`${baseUrlBA}/store/byname?${store_name}`)
	return await response.json();
}

//? get summary data of product by id
export async function getProductsById(id) {
  const response = await fetch(`${baseUrlBA}/product?id=${id}`);
  return await response.json();
}

//* CATEGORIES
//? get summary data of categories
export async function getCategories() {
  const response = await fetch(`${baseUrlBA}/categorie/list`);
  return await response.json();
}

//? get summary data of principal catecories
export async function getPrincipalCategories() {
  const response = await fetch(`${baseUrlBA}/categorie/listprincipal`);
  return await response.json();
}

//* PROFILE
//? get summary data of profile
export async function getProfileInfo(token, userType) {
  const response = await fetch(`${baseUrl}/profile/${userType}`,{ 
		headers: { 
			'Content-Type': 'application/json', 
			'access-token': token 
		}
	});
  return await response.json();
}

//? post - update profile
export async function updateProfileInfo(
	token, 
	userType,
	principalEmail,
	fullname,
	genderBaby,
	haveChildren,
	firstTime,
	moreThanOne,
	password,
	phone,
	dateOfBirth) {
	const data = { 
		principalEmail,
		fullname,
		genderBaby,
		haveChildren,
		firstTime,
		moreThanOne,
		password,
		phone,
		dateOfBirth
	};
  const response = await fetch(`${baseUrl}/profile-add/${userType}?delivery=no`,{ 
		method: 'POST',
		headers: { 
			'Content-Type': 'application/json', 
			'access-token': token 
		},
		body: JSON.stringify(data),
	});
  return await response.json();
}


//* PURCHASES
//? get purchases
export async function getPurchases(token, delivery, userType, skip, limit){
	const is_delivery = delivery !== null ? `delivery=${delivery}` : '';
	const type_user = userType !== null ? `&userType=${userType}` : '';
	const num_skip = skip !== null && skip !== undefined ? `&skip=${skip}` : '';
	const num_limit = limit !== null && limit !== undefined ? `&limit=${limit}` : '';

	const response = await fetch(`${baseUrlBA}/sale/pagination?${is_delivery}${type_user}${num_skip}${num_limit}`,{ 
		headers: { 
			'access-token': token 
		},
	})
	return await response.json();
}