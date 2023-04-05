import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { PaystackButton } from "react-paystack";
import { useGlobalContext } from "../context/context";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Loading from "./HOCs/Loading";

const SideCart = ({ openCart, toggleCart }) => {
  const { getTotalQuantity, cart } = useGlobalContext();
  const token = JSON.parse(sessionStorage.getItem("token"));

  const notify = () =>
    toast("Thanks for doing business with us! Come back soon!!");

  const totalAmount = getTotalQuantity();
  const publicKey = "pk_test_cfdb751a4bbe79031d2de7788fe8238f107543e6";
  const [amount, setAmount] = useState(`${totalAmount * 100}`);
  const [email, setEmail] = useState(token?.email);
  const [name, setName] = useState(`${token?.firstName} ${token?.lastName}`);
  const componentProps = {
    email,
    amount,
    metadata: {
      name,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => notify(),
    onClose: () => alert("Wait! Don't leave :("),
  };

  return (
    <section
      className={`side-cart ${openCart === false ? "close-cart" : "open-cart"}`}
    >
      <div className="cart-dark-con" onClick={toggleCart}></div>
      <div className="cart-sidebar-con">
        <div className="side-cart-header">
          <h3>SHOOPING CART</h3>
          <FaTimes onClick={toggleCart} className="red-hover" />
        </div>
        <div className="cart-content-con">
          {cart?.map((product, idx) => (
            <div key={idx}>
              <div className="cart-img-con">
                <img
                  src={product.image && product.image[0].url}
                  alt={product.name}
                />
              </div>
              <div className="cart-details-con">
                <p className="cart-product-name">{product.name}</p>
                <p>
                  <span>{product.quantity}</span>
                  <span>x</span>
                  <span>${product.price}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="side-cart-header">
          <h4>Subtotal</h4>
          <h3>${getTotalQuantity()}</h3>
        </div>
        <div className="cart-btn-con">
          <Link
            className="btn"
            to={`${token ? "/shopping-cart" : "/login"}`}
            onClick={toggleCart}
          >
            View Cart
          </Link>
          {token && <PaystackButton className="btn" {...componentProps} />}
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Loading(SideCart);
