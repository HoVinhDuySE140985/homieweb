import { configureStore } from "@reduxjs/toolkit";

import authReducer from '../features/auth/authSlide.js';
import categoryReducer from '../features/category/categorySlide.js'
import productReducer from '../features/product/productSlice.js'
import serviceReducer from '../features/service/serviceSlide.js'
import bookingReducer from '../features/book/bookingSlide.js'
import couponReducer from '../features/coupon/couponSlide.js'
import subCateReducer from '../features/subCate/subCateSlice.js'
import feedbackReducer from '../features/review/reviewSlice.js'
import reportReducer from '../features/report/reportSlice.js'
export const store = configureStore({
    reducer: {
        auth: authReducer, 
        feedback: feedbackReducer,
        category: categoryReducer, 
        subCategory: subCateReducer,
        product: productReducer,
        service: serviceReducer, 
        booking: bookingReducer, 
        coupon: couponReducer,
        report: reportReducer,
    }, 

    // check error: A non-serializable value was detected in an action
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
      }),
})