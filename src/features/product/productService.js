import { instance } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";



const getProducts = async (page) => {
    const response = await instance.post(
        `${base_url}item/get-all-item-by`,
        page,
        instance
      );
      console.log("product response: ",response.data);
      return response.data;
}
const getProductsDetail = async (data) => {
    const response = await instance.get(
        `${base_url}item/get-all-details-by-itemId?itemId=${data}`,
        instance
      );
      console.log("product response: ",response.data);
      return response.data;
}

const productService = {
    getProductsDetail,
    getProducts
}

export default productService;
