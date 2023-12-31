import axios from "axios";  
import authService from './../features/auth/authService';

 export const instance = axios.create({
  headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
  }
})

instance.interceptors.request.use(config => {
  const getTokenFromLocalStorage = authService.getCurrentUser();
  const token = getTokenFromLocalStorage?.access_token; // retrieve the authentication token from local storage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // add the token to the Authorization header
  }
  return config;
});
instance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});