import axios from 'axios';
import queryString from 'query-string';
import { loadData } from '../utils/AsyncStorageUtils';

//TODO pune pe server toate APIURILE
const instance = axios.create({
	baseURL: 'http://51.20.48.224/VanzariRestaurante/api/web/index.php?r=v1/',
	timeout: 10000,
	timeoutErrorMessage: 'timeout',
});

instance.interceptors.request.use(async (config) => {
	//const user = await getDataByKey('user');
	// const token = (user === null ? null : user.auth_key);
	// config.headers.Authorization = (token ? `Bearer ${token}` : '');
	//   const state = store.getState();
	let url = config.url;
	if (url !== 'utilizatori/login') {
		const userDetails = await loadData('userDetails'); //(state.data.user === null ? null : state.data.token);
		const token = userDetails.auth_key;
		// console.log(userDetails);
		config.headers.Authorization = token ? `Bearer ${token}` : '';
	}
	return config;
});

export const login = async (loginObject) => {
	return await instance.post(
		'utilizatori/login',
		queryString.stringify(loginObject)
	);
};

export const getProduse = async (url) => {
	return await instance.get(url);
};

export const getCategorii = async () => {
	return await instance.get('categorii/category-product-count');
};

export const getMinMaxPrices = async () => {
	return await instance.get('categorii/min-max-prices');
};

export const sendComanda = async (comanda) => {
	return await instance.post('comenzi', comanda);
};
// export const getConferences = async (
//   // page = 0,
//   // search,
//   // order_by,
//   // order = 'asc',
//   confData,
// ) => {
//   //console.log('[DEBUG] ApiAxios page=', confData.page);
//   return await instance.get('conferences', {
//     params: confData,
//     //   transformResponse: (res) => {
//     //     console.log('ConfResponse',res);
//     //     // Do your own parsing here if needed ie JSON.parse(res);
//     //     return res;
//     // },
//     //responseType: 'json'
//     /*{
//       page,
//       search,
//       order_by,
//       order,
//     },*/
//   },    // {headers: {'Content-Type':'application/json'}},
//   );
// };

// export const forgotPasswordRequest = async (email: string) => {
// 	return await instance.post(
// 		'forgot/password',
// 		QueryString.stringify({ email })
// 	);
// };
