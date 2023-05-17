import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [openCart, setOpenCart] = useState(false);
  const hostUrl = "http://localhost:5000";
  // const hostUrl = `https://orbital-api.onrender.com`;
  const localStorageCart = JSON.parse(localStorage.getItem("cart") || "[]");
  const [cart, setCart] = useState(localStorageCart);
  const [loading, setLoading] = useState(false);
  const [department, setDepartment] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [products, setProducts] = useState(() => {
    const sessionStorageProduct = sessionStorage.getItem("createdProducts");
    return sessionStorageProduct
      ? JSON.parse(sessionStorage.getItem("createdProducts"))
      : [];
  });

  const notify = () => toast("Item has been added");
  const deleteNotification = () => toast("Item successfully Deleted");

  const getCreatedProduct = async () => {
    setLoading(true);
    try {
      const newProducts = await axios.get(`${hostUrl}/api/product`);
      if (newProducts.status === 200) {
        setLoading(false);
        setProducts(newProducts.data);
        localStorage.setItem("products", JSON.stringify(newProducts.data));
        sessionStorage.setItem(
          `createdProducts`,
          JSON.stringify(newProducts.data)
        );
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //  Add To Cart Function

  const addToCart = (productIndex) => {
    //The Method here is to find the index of the product added to the cart, if the product is existing take only the first one
    notify();
    let cartItem = cart.find((item) => item._id === productIndex._id);

    let newCart = [...cart];

    if (cartItem) {
      cartItem.quantity++;
    } else {
      cartItem = {
        ...productIndex,
        quantity: 1,
      };
      newCart.push(cartItem);
    }

    setCart(newCart);
  };

  //   Total Price Function
  const getTotalQuantity = () => {
    return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  };

  const removeFromCart = (index) => {
    deleteNotification();
    setCart((prevCart) => prevCart.filter((item) => item._id !== index._id));
  };

  const toggleDepartmentCon = () => {
    setDepartment(!department);
  };

  const setQuantity = (product, amount) => {
    const cartItem = [...cart];
    cartItem.find((item) => item._id === product._id).quantity = amount;
    setCart(cartItem);
  };

  useEffect(() => {
    getCreatedProduct();
  }, []);

  return (
    <AppContext.Provider
      value={{
        openCart,
        setOpenCart,
        cart,
        setCart,
        addToCart,
        getTotalQuantity,
        removeFromCart,
        department,
        toggleDepartmentCon,
        setQuantity,
        activePage,
        setActivePage,
        products,
        loading,
        hostUrl,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
