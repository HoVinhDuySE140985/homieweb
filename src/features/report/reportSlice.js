import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import reportService from "./reportService";


export const getReports = createAsyncThunk(
  "report/reports",
  async (data, thunkAPI) => {
    try {
      console.log(data);
      return await reportService.getReports(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  reports: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
  number: 0,
};

export const reportSlice = createSlice({
  name: "report",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReports.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReports.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.reports = action.payload.data;
        state.number = action.payload.result;
        state.message = "success";
      })
      .addCase(getReports.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload.response.data;
        state.isLoading = false;
      });
  },
});


export default reportSlice.reducer;