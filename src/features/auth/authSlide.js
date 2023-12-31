import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";


 const initialState = {
    currentUser: {},

 }


 export const login = createAsyncThunk(
    "auth/login" , 
    async (userData, thunkAPI) => {
        try {        
            // console.log(userData);
            return await authService.login(userData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
 )
 export const logout = createAsyncThunk(
    "auth/logout" , 
    async (userData, thunkAPI) => {
        try {        
            return await authService.logout(userData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
 )


 export const authSlice = createSlice ({
    name: "auth", 
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(login.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading= false;
            state.isSuccess = true;
            state.user = action.payload;
            state.message = "success"
        })
        .addCase(login.rejected,  (state, action) => {
            state.isError = true;
            state.isSuccess = false;
            state.message = action.payload.response.data;
            state.isLoading = false;
        })  
        
    }
 })




 export default authSlice.reducer;