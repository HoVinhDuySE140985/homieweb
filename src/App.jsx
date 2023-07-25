import React from "react";
import SignIn from "./pages/SignIn/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import MainLayout from "./pages/MainLayout";
import Report from "./pages/Customer/Report";
import Categories from "./pages/Category/Categories";
import Products from "./pages/Product/Products";
import Import from "./pages/Product/Import";
import Coupon from "./pages/Coupon/Coupon";
import All from "./pages/Order/All";
import Pending from "./pages/Order/Pending";
import Confirm from "./pages/Order/Confirm";
import Cancel from "./pages/Order/Cancel";
import authService from "./features/auth/authService";
import SubCatogories from "./pages/Category/SubCatogories";
import Feedback from "./pages/Customer/Feedback";
import { ToastContainer } from "react-toastify";
import ProductDetail from "./pages/Product/ProductDetail/ProductDetail";


function App() {
  const user = authService.getCurrentUser();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<SignIn />} />
          <Route path="/admin" element={<MainLayout />}>
            <Route path="" element={<Dashboard />} />
            {/* CUSTOMER */}
            <Route path="report-list-customer" element={<Report />} />
            <Route path="feedback-list-customer" element={<Feedback />} />
            {/* CATEGORY */}
            <Route path="view-category" element={<Categories />} />
            <Route path="view-subCategory" element={<SubCatogories />} />
            {/* PRODUCT */}
            <Route path="list-product" element={<Products />} />
            <Route path="list-product/detail/:id" element={<ProductDetail />} />
            <Route path="import" element={<Import />} />
            {/* COUPON */}
            <Route path="coupon" element={<Coupon />} />
            {/* ORDER */}
            <Route path="all-orders" element={<All />} />
            {/* <Route path="orders/details/:id" element={<OrderDetail />} />
              <Route path="pending-order" element={<Pending />} />
              <Route path="confirm-order" element={<Confirm />} />
              <Route path="cancel-order" element={<Cancel />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="light"
      />
    </>
  );
}

export default App;
