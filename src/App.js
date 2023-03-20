import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useGlobalContext } from "./context/context";
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

import { AdminDashboard, AdminLogin, AdminRegistration } from "./pages/Admin";
import ProductDetails from "./pages/Admin/ProductDetails";
import ProductEdit from "./pages/Admin/ProductEdit";

function App() {
  const { pathname } = useLocation();
  const { cart } = useGlobalContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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
      <Route path="/admin_login" element={<AdminLogin />} />
      <Route path="/admin_register" element={<AdminRegistration />} />
      <Route path="/admin/product/edit/:id" element={<ProductEdit />} />
    </Routes>
  );
}

export default App;
