import { instance } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";

const getFeedbacks = async (page) => {
  const response = await instance.get(
    `${base_url}feedback/view-all-feedback`,
    page,
    instance
  );
  return response.data;
};

const feedbackService = {
  getFeedbacks
  };
  
  export default feedbackService;