import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoryService from "./categoryService";


export const getCategories = createAsyncThunk( 'category/categories', 

async (data, thunkAPI) => {
    try {
      return await categoryService.getCategories(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
) 
export const addCategories = createAsyncThunk( 'category/addCate', 
async (data, thunkAPI) => {
    try {
      return await categoryService.addCategories(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
) 
export const updateCategories = createAsyncThunk( 'category/updateCate', 
async (data , thunkAPI) => {
    try {
      return await categoryService.updateCategories(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
) 
export const delCategories = createAsyncThunk( 
  'category/delCate', 
async (data , thunkAPI) => {
    try {
      return await categoryService.delCategories(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
) 

const initialState = {
    categories: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
    number: 0
};
 

 export const categorySlice = createSlice ({
    name: "category",
    initialState: initialState, 
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(addCategories.fulfilled, (state, action) => {
        state.categories.push(action.payload)
      })
      .addCase(updateCategories.fulfilled, (state, action) => {
        state.isSuccess = true;
      })
      .addCase(delCategories.fulfilled, (state, action) => {
        state.isSuccess = true;
      })
        .addCase(getCategories.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getCategories.fulfilled, (state, action) => {
          state.isError = false;
          state.isLoading = false;
          state.isSuccess = true;
          state.categories = action.payload.data;
          state.number = action.payload.result
          state.message = "success";
        })
        .addCase(getCategories.rejected, (state, action) => {
          state.isError = true;
          state.isSuccess = false;
          state.message = action.payload.response.data;
          state.isLoading = false;
        })
    },
 })

 export default categorySlice.reducer;