import { client } from './index';

// export const newCity = (params) => client.post("city/newcity", params);
// export const updateCity = (params) => client.patch("city/updatecity", params);

export const registerUser = params => client.post('api/register', params);
export const LoginUser = params => client.post('api/login', params);
