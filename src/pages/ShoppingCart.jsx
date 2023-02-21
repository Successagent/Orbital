import React from "react";
import { useLocation } from "react-router-dom";
import { Footer, Header, Newsletter, PageHero } from "../components";
import { FaTrash } from "react-icons/fa";
import { useGlobalContext } from "../context/context";
import { urlFor } from "../lib/client";

const ShoppingCart = () => {
  const { cart, increaseQuantity, decreaseQuantity } = useGlobalContext();
  const { pathname } = useLocation();
  return (
    <>
      <section className="shopping-cart">
        <Header pathname={pathname} />
        <PageHero page_title={"Cart"} />
        <div className="shopping-cart-stats">
          <div>
            {cart.length < 0 && (
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
            )}
            {cart.map((product, idx) => (
              <div className="shopping-cart-main" key={idx}>
                <div className="products-con">
                  <div className="cart-img-con">
                    <img src={urlFor(product.image[0])} alt={product.name} />
                  </div>
                  <p>{product.name}</p>
                </div>
                <div className="price-con">
                  <p>${product.price}</p>
                </div>
                <div className="quantity-con">
                  <div className="single-product-btn">
                    <span onClick={() => decreaseQuantity(product.quantity)}>
                      -
                    </span>
                    <span>{product.quantity}</span>
                    <span onClick={() => increaseQuantity(product.quantity)}>
                      +
                    </span>
                  </div>
                </div>
                <div className="subtotal-con">
                  <p>${product.price}</p>
                  <FaTrash />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Newsletter pathname={pathname} />
      <Footer />
    </>
  );
};

export default ShoppingCart;
