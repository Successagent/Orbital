import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";
import { useGlobalContext } from "./context/context";
import {
  About,
  Contact,
  ForgetPassword,
  Home,
  Login,
  Privacy,
  Registration,
  Shop,
  ShoppingCart,
  SingleProduct,
  Terms,
  UserOrders,
} from "./pages";

import {
  AdminDashboard,
  AdminLogin,
  AdminRegistration,
  CustomerDetails,
  Customers,
  Orders,
  ProductEdit,
  UserOrderDetailsView,
} from "./pages/Admin";
import UserPrivateRoute from "./utils/UserPrivateRoute";

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
      <Route element={<PrivateRoutes />}>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/product/edit/:id" element={<ProductEdit />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/customers/details/:id" element={<CustomerDetails />} />
        <Route path="/orderView/:id" element={<UserOrderDetailsView />} />
      </Route>
      <Route element={<UserPrivateRoute />}>
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/orders_view" element={<UserOrders />} />
      </Route>
      <Route path="/admin_login" element={<AdminLogin />} />
      <Route path="/admin_register" element={<AdminRegistration />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  );
}

export default App;
