import React from "react";
import { useLocation } from "react-router-dom";
import { Footer, Header, Newsletter, PageHero } from "../components";
import { FaTrash } from "react-icons/fa";
import cartLogo from "../assets/1.webp";

const ShoppingCart = () => {
  const { pathname } = useLocation();
  return (
    <>
      <section className="shopping-cart">
        <Header pathname={pathname} />
        <PageHero page_title={"Cart"} />
        <div className="shopping-cart-stats">
          <div className="shopping-cart-header">
            <div className="products-con">
              <p>Product</p>
            </div>
            <div className="price-con">
              <p>Price</p>
            </div>
            <div className="quantity-con">
              <p>Quantity</p>
            </div>
            <div className="subtotal-con">
              <p>Subtotal</p>
            </div>
          </div>
          <div className="shopping-cart-main">
            <div className="products-con">
              <div className="cart-img-con">
                <img src={cartLogo} alt="" />
              </div>
              <p>D-Phone Android</p>
            </div>
            <div className="price-con">
              <p>$120.00</p>
            </div>
            <div className="quantity-con">
              <div className="single-product-btn">
                <span>-</span>
                <span>0</span>
                <span>+</span>
              </div>
            </div>
            <div className="subtotal-con">
              <p>$120.00</p>
              <FaTrash />
            </div>
          </div>
        </div>
      </section>
      <Newsletter pathname={pathname} />
      <Footer />
    </>
  );
};

export default ShoppingCart;
