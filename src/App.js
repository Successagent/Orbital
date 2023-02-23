import React, { useEffect, useState } from "react";
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
import { client } from "./lib/client";

function App() {
  const [products, setProducts] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    client
      .fetch(
        `*[_type == "product"] {
        details,
        image,
        name,
        price,
         slug,
         status,
         category
      }`
      )
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });

    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Routes>
      <Route path="/" element={<Home products={products} />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop products={products} />} />
      <Route
        path="/products/:slug"
        element={<SingleProduct products={products} />}
      />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/shopping-cart"
        element={<ShoppingCart products={products} />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
    </Routes>
  );
}

export default App;
