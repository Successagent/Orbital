import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import cartLogo from "../assets/1.webp";
import Button from "./Button";

const SideCart = ({ cart, toggleCart }) => {
  const navigate = useNavigate();
  return (
    <section
      className={`side-cart ${cart === false ? "close-cart" : "open-cart"}`}
    >
      <div className="cart-dark-con" onClick={toggleCart}></div>
      <div className="cart-sidebar-con">
        <div className="side-cart-header">
          <h3>SHOOPING CART</h3>
          <FaTimes onClick={toggleCart} className="red-hover" />
        </div>
        <div className="cart-content-con">
          <div>
            <div className="cart-img-con">
              <img src={cartLogo} alt="" />
            </div>
            <div className="cart-details-con">
              <p className="cart-product-name">Android Smart Watch</p>
              <p>
                <span>1</span>
                <span>x</span>
                <span>$59.90</span>
              </p>
            </div>
          </div>
          <div>
            <div className="cart-img-con">
              <img src={cartLogo} alt="" />
            </div>
            <div className="cart-details-con">
              <p className="cart-product-name">Android Smart Watch</p>
              <p>
                <span>1</span>
                <span>x</span>
                <span>$59.90</span>
              </p>
            </div>
          </div>
        </div>
        <div className="side-cart-header">
          <h4>Subtotal</h4>
          <h3>$71.90</h3>
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
