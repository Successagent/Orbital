import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {
  About,
  Contact,
  Home,
  Shop,
  ShoppingCart,
  SingleProduct,
} from "./pages";

export const StateContext = React.createContext();

function App() {
  const [cart, setCart] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <StateContext.Provider value={[cart, setCart]}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Routes>
    </StateContext.Provider>
  );
}

export default App;
