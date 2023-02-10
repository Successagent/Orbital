import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { About, Contact, Home, Shop, SingleProduct } from "./pages";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
