import React, { useEffect, useState, createContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  About,
  Contact,
  Home,
  Shop,
  ShoppingCart,
  SingleProduct,
} from "./pages";
import { client } from "./lib/client";

export const StateContext = createContext();

function App() {
  const [openCart, setOpenCart] = useState(false);
  const [cart, setCart] = useState([]);
  const { pathname } = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleCart = () => {
    setOpenCart(!openCart);
  };

  useEffect(() => {
    setLoading(true);
    client
      .fetch(
        `*[_type == "product"] {
        details,
        image,
        name,
        price,
         slug,
         status
      }`
      )
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <StateContext.Provider value={([cart, setCart], [openCart, setOpenCart])}>
      <Routes>
        <Route
          path="/"
          element={<Home products={products} loading={loading} />}
        />
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
      </Routes>
    </StateContext.Provider>
  );
}

export default App;
