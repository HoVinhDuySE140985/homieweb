import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import feedbackService from "./reviewService";


export const getFeedbacks = createAsyncThunk(
  "feedback/feedbacks",
  async (data, thunkAPI) => {
    try {
      console.log(data);
      return await feedbackService.getFeedbacks(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  feedbacks: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
  number: 0,
};

export const feedbackSlice = createSlice({
  name: "feedback",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFeedbacks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFeedbacks.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.feedbacks = action.payload.data;
        state.number = action.payload.result;
        state.message = "success";
      })
      .addCase(getFeedbacks.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload.response.data;
        state.isLoading = false;
      });
  },
});


export default feedbackSlice.reducer;