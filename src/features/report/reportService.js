import { instance } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";

const getReports = async (page) => {
  const response = await instance.get(
    `${base_url}report/get-all-report`,
    page,
    instance
  );
  return response.data;
};

const reportService = {
  getReports 
  };
  
  export default reportService;