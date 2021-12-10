const baseUrl = 'http://localhost:3300';

//let token = JSON.parse(window.localStorage.getItem("YesmomToken"));

//* PRODUCTS
//? get summary data of products
export const getProducts = async (catSlug, category, skip, limit) => {
	const category_slug = catSlug !== null ? `cat_slug=${catSlug}` : '';
	const category_name = category !== null ? `categorie=${category}` : '';
	const num_skip = skip !== null && skip !== undefined ? `&skip=${skip}` : '';
	const num_limit = limit !== null && limit !== undefined ? `&limit=${limit}` : '';

	const response = await fetch(`${process.env.BASE_URL}/product/getbyuser?${category_slug}${category_name}${num_skip}${num_limit}`)
	return await response.json();
};

//? get summary data of product by id
export async function getProductsById(id) {
  const response = await fetch(`${process.env.BASE_URL}/product?id=${id}`);
  return await response.json();
}

//* CATEGORIES
//? get summary data of categories
export async function getCategories() {
  const response = await fetch(`${process.env.BASE_URL}/categorie/list`);
  return await response.json();
}

//? get summary data of principal catecories
export async function getPrincipalCategories() {
  const response = await fetch(`${process.env.BASE_URL}/categorie/listprincipal`);
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