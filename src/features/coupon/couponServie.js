
import { toast } from "react-toastify";
import { instance } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";


const getCoupons = async (page) => {
    const response = await instance.get(
      `${base_url}promotion/get-all-promotion`,
      page,
    );  
    return response.data;
  };
  const addCoupons = async(data) => {
    const res = await instance.post(`${base_url}promotion/create-promotion`,data)
    if(res){
      toast.success('Thêm khuyễn mãi thành công')
    }else {
      toast.error('Thêm khuyên mãi thất bại')
    }
 }
 const delCoupons = async(data) => {
  const res= await instance.delete(`${base_url}promotion/delete-promotion?promoId=${data}`,data)
  if(res.data.data === 'Xóa Thành Công'){
    toast.success('Xóa khuyễn mãi thành công')
  }else {
    toast.error('Xóa khuyễn mãi thất bại')
  }
}

const couponService = {
    getCoupons,
    addCoupons,
    delCoupons
}

export default couponService;