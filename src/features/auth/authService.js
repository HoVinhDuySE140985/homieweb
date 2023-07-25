import { base_url } from "../../utils/baseUrl";
import { instance } from './../../utils/axiosconfig';

const login = async (user) => {
   let res = await instance.post(`${base_url}user/login`, user);
   if (res.data) {
    const data =  {
        access_token: res.data.data,
    }
    localStorage.setItem("user",  JSON.stringify(data));
  }
    return res.data;
};

const logout = () => {
  localStorage.removeItem("user");
 
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};


const authService = {
  login,
  logout, 
  getCurrentUser
};

export default authService;
