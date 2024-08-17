export const API_BASE_URL = "https://dummyjson.com";
export const getApiUrl = (endPoint) => API_BASE_URL + endPoint;

export const LOGIN = getApiUrl('/auth/login');
export const Register = getApiUrl('/user/add');
export const PRODUCTURL= getApiUrl('/products/category/smartphones');
export const CATAGORYURL = getApiUrl('/products/categories');

