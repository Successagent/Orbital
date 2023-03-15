import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Footer, Header, Newsletter, PageHero } from "../components";
import { FaTrash } from "react-icons/fa";
import { useGlobalContext } from "../context/context";
import Loading from "../components/HOCs/Loading";

const ShoppingCart = () => {
  const { cart, setQuantity, removeFromCart, getTotalQuantity } =
    useGlobalContext();
  const [shipping, setShipping] = useState(50);
  const [localFee, setLocalFee] = useState(40);
  const { pathname } = useLocation();
  return (
    <>
      <section className="shopping-cart">
        <Header pathname={pathname} />
        <PageHero page_title={"Cart"} />
        <div className="shopping-cart-stats">
          <div>
            {cart?.length > 0 && (
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
            {cart?.map((product, idx) => (
              <div className="shopping-cart-main" key={idx}>
                <div className="products-con">
                  <div className="cart-img-con">
                    <img src={product.image[0].url} alt={product.name} />
                  </div>
                  <p>{product.name}</p>
                </div>
                <div className="price-con">
                  <p>N{product.price}</p>
                </div>
                <div className="quantity-con">
                  <input
                    className="single-product-btn"
                    onChange={(e) => setQuantity(product, e.target.value)}
                    defaultValue={product.quantity}
                  />
                </div>
                <div className="subtotal-con">
                  <p>N{product.price * product.quantity}</p>
                  <FaTrash onClick={() => removeFromCart(product)} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="shopping-cart-calculation">
          <div className="shopping-cart-shipping-con">
            <h3>Shipping Calculation</h3>
            <input type="text" placeholder="Country" />
            <input type="text" placeholder="State" />
            <input type="text" placeholder="City" />
            <input type="text" placeholder="Postal Code" />
            <button className="btn">Update</button>
          </div>
          <div className="shopping-cart-total-con">
            <div className="shopping-cart-total">
              <div className="total-con">
                <h3>Sub Total</h3>
                <h3 className="total-price">N{getTotalQuantity()}</h3>
              </div>
              <div>
                <p>Total</p>
                <p>
                  Shipping: <span>N34</span>
                </p>
                <p>
                  Local Pickup: <span>N50</span>
                </p>
              </div>
              <div className="total-con">
                <h3>Total</h3>
                <h3 className="total-price">
                  N{`${getTotalQuantity() + shipping + localFee}`}
                </h3>
              </div>
              <Link to="/register" className="btn">
                PROCEED TO CHECKOUT
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Newsletter pathname={pathname} />
      <Footer />
    </>
  );
};

export default Loading(ShoppingCart);
