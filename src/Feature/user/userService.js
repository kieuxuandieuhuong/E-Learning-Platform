import axios from "axios";
import { base_url } from "../../untils/axiosConfig";

const register = async (userData) => {
    try {
      const response = await axios.post(`${base_url}user/register`, userData);
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
  export const authService = {
    register,
  };
  