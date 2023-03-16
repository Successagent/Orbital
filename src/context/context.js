import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [openCart, setOpenCart] = useState(false);
  const localStorageCart = JSON.parse(localStorage.getItem("cart") || "[]");
  const [cart, setCart] = useState(localStorageCart);
  const [department, setDepartment] = useState(false);
  const [activePage, setActivePage] = useState(1);

  //  Add To Cart Function

  const addToCart = (productIndex) => {
    //The Method here is to find the index of the product added to the cart, if the product is existing take only the first one

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
