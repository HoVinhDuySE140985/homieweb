import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";

export const getProducts = createAsyncThunk( 'product/products', 

async (data, thunkAPI) => {
    try {
      console.log(data);
      return await productService.getProducts(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }

) 
export const getProductsDetail = createAsyncThunk( 'product/productDetail', 

async (data, thunkAPI) => {
    try {
      console.log(data);
      return await productService.getProductsDetail(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }

) 
const initialState = {
    products: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
    number: 0
};

export const productSlice = createSlice ({
    name: "product",
    initialState: initialState, 
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getProducts.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getProducts.fulfilled, (state, action) => {
          state.isError = false;
          state.isLoading = false;
          state.isSuccess = true;
          state.products = action.payload.data;
          state.number = action.payload.result
          state.message = "success";
        })
        .addCase(getProducts.rejected, (state, action) => {
          state.isError = true;
          state.isSuccess = false;
          state.message = action.payload.response.data;
          state.isLoading = false;
        })
        .addCase(getProductsDetail.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getProductsDetail.fulfilled, (state, action) => {
          state.isError = false;
          state.isLoading = false;
          state.isSuccess = true;
          state.products = action.payload.data;
          state.number = action.payload.result
          state.message = "success";
        })
        .addCase(getProductsDetail.rejected, (state, action) => {
          state.isError = true;
          state.isSuccess = false;
          state.message = action.payload.response.data;
          state.isLoading = false;
        })
    },

 })

 export default productSlice.reducer;