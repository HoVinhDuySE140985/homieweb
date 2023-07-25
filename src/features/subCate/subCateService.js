
import { toast } from "react-toastify";
import { instance } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";


const getSubCategories = async (page) => {
    const response = await instance.get(
      `${base_url}subcategory/get-all-sub_cate`,
      page,
    );
    return response.data;
  };
  const addSubCategories = async(data) => {
    const res = await instance.post(`${base_url}subcategory/create-subcategory`,data)
    return data
 }
 const updateSubCate = async(data) => {
  const res = await instance.put(`${base_url}subcategory/update-sub-cate?subId=${data.subId}&name=${data.name}`,data)
  if(res.data.data === 'Cập Nhập Thành Công'){
    toast.success('Cập nhật loại sản phẩm thành công')
  }else{
    toast.error('Cập nhật loại sản phẩm thất bại')
    }
 }
 const delSubCate = async(data) => {
  const res= await instance.delete(`${base_url}subcategory/delete-sub-cate?subId=${data}`,data)
  if(res.data.data === 'Cập Nhập Thành Công'){
    toast.success('Xóa loại sản phẩm thành công')
  }else {
    toast.error('Xóa loại sản phẩm thất bại')
  }
}

const subCateService = {
  getSubCategories,
  addSubCategories,
  updateSubCate,
  delSubCate
}

export default subCateService;