import axios from "axios";
import { base_url } from "../../untils/axiosConfig";

const getCourse = async () => {
      const response = await axios.get(`${base_url}course`);
        return response.data;
  };


  
  export const courseService = {
    getCourse
  };
  