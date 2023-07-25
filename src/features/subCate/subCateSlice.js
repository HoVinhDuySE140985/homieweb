import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import subCateService from "./subCateService";


export const getSubCategories = createAsyncThunk( '/subCategories', 

async (data, thunkAPI) => {
    try {
      return await subCateService.getSubCategories(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
) 
export const addSubCategories = createAsyncThunk( 'subCate/addSubCategories', 
async (data, thunkAPI) => {
    try {
      return await subCateService.addSubCategories(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
) 
export const updateSubCate = createAsyncThunk( 'subCate/UpdateSub', 
async (data, thunkAPI) => {
    try {
      return await subCateService.updateSubCate(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
) 
export const delSubCate = createAsyncThunk( 'subCate/DelSub', 
async (data , thunkAPI) => {
    try {
      return await subCateService.delSubCate(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
) 
const initialState = {
    subCategories: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
    number: 0
};
 

 export const subCateSlice = createSlice ({
    name: "subCategory",
    initialState: initialState, 
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getSubCategories.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(delSubCate.fulfilled, (state, action) => {
          state.isSuccess = true;
        })
        .addCase(getSubCategories.fulfilled, (state, action) => {
          state.isError = false;
          state.isLoading = false;
          state.isSuccess = true;
          state.subCategories = action.payload.data;
          state.number = action.payload.result
          state.message = "success";
        })
        .addCase(getSubCategories.rejected, (state, action) => {
          state.isError = true;
          state.isSuccess = false;
          state.message = action.payload.response.data;
          state.isLoading = false;
        })
        .addCase(addSubCategories.fulfilled, (state, action) => {
          state.subCategories.push(action.payload)
        })
    },

 })

 export default subCateSlice.reducer;