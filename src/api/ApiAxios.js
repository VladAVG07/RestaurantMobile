import axios from 'axios';
import { loadData } from '../utils/AsyncStorageUtils';
import queryString from 'query-string';

const instance = axios.create({
	baseURL: 'http://10.0.2.2/VanzariRestaurante/api/web/v1/',
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
	return await instance.get('categorii');
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
