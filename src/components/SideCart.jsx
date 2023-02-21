import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import cartLogo from "../assets/1.webp";
import Button from "./Button";
import { useGlobalContext } from "../context/context";
import { urlFor } from "../lib/client";

const SideCart = ({ openCart, toggleCart }) => {
  const { cart, qnty, getTotalQuantity } = useGlobalContext();

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
          {cart.map((product, idx) => (
            <div key={idx}>
              <div className="cart-img-con">
                <img src={urlFor(product.image && product.image[0])} alt="" />
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
          <Link className="btn" to={"/shopping-cart"} onClick={toggleCart}>
            View Cart
          </Link>
          <Button title="Checkout" />
        </div>
      </div>
    </section>
  );
};

export default SideCart;
