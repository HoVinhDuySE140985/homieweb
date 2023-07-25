import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import couponService from "./couponServie";


export const getCoupons = createAsyncThunk( 
    'coupon/coupons', 
async (data, thunkAPI) => {
    try {
      return await couponService.getCoupons(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }

) 
export const addCoupons = createAsyncThunk( 
  'coupon/addCoupons', 
async (data, thunkAPI) => {
    try {
      return await couponService.addCoupons(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
) 
export const delCoupons = createAsyncThunk( 
  'coupon/delCoupons', 
async (data , thunkAPI) => {
    try {
      return await couponService.delCoupons(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
) 
const initialState = {
    coupons: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
    number: 0
};
 

 export const couponSlice = createSlice ({
    name: "coupon",
    initialState: initialState, 
    reducers: {},
    extraReducers: (builder) => {
      builder
        // .addCase(addCoupons.fulfilled, (state, action) => {
        //  state.coupons.push(action.payload)
        // })
        .addCase(delCoupons.fulfilled, (state, action) => {
          state.isSuccess = true;
        })
        .addCase(getCoupons.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getCoupons.fulfilled, (state, action) => {
          state.isError = false;
          state.isLoading = false;
          state.isSuccess = true;
          state.coupons = action.payload.data;
          state.number = action.payload.result
          state.message = "success";
        })
        .addCase(getCoupons.rejected, (state, action) => {
          state.isError = true;
          state.isSuccess = false;
          state.message = action.payload.response.data;
          state.isLoading = false;
        })

    },

 })

 export default couponSlice.reducer;