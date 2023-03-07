import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  About,
  Contact,
  ForgetPassword,
  Home,
  Login,
  Registration,
  Shop,
  ShoppingCart,
  SingleProduct,
} from "./pages";

import { AdminDashboard } from "./pages/Admin";
import ProductDetails from "./pages/Admin/ProductDetails";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/shopping-cart" element={<ShoppingCart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/product/edit/:id" element={<ProductDetails />} />
      <Route path="/admin/product/detail/:id" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;
