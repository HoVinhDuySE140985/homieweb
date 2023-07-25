
import { toast } from "react-toastify";
import { instance } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";
import { data } from "autoprefixer";


const getCategories = async (page) => {
    const response = await instance.get(
      `${base_url}category/get-all-category`,
      page,
    );
    return response.data;
  };
const addCategories = async(data) => {
   const res = await instance.post(`${base_url}category/create-category?name=${data}`,data)
   return data
}
const updateCategories = async(data) => {
  const res = await instance.post(`${base_url}category/update-category?id=${data.id}&name=${data.name}`,data)
  if(res.data.data === 'Cập Nhập Thành Công'){
    toast.success('Cập nhật danh mục thành công')
  }else {
    toast.error('Cập nhật danh mục thất bại')
  }
}

const delCategories = async(data) => {
  const res= await instance.delete(`${base_url}category/delete-category?cateId=${data}`,data)
  if(res.data.data === 'Cập Nhập Thành Công'){
    toast.success('Xóa danh mục thành công')
  }else {
    toast.error('Xóa danh mục thất bại')
  }
}

const categoryService = {
    getCategories,
    addCategories,
    updateCategories,
    delCategories
}

export default categoryService;