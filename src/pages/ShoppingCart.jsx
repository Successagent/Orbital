import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Footer, Header, Newsletter, PageHero } from "../components";

import { FaTrash } from "react-icons/fa";
import { useGlobalContext } from "../context/context";
import Loading from "../components/HOCs/Loading";
import PaystackPop from "@paystack/inline-js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const ShoppingCart = () => {
  const { cart, setQuantity, removeFromCart, getTotalQuantity, hostUrl } =
    useGlobalContext();
  const token = JSON.parse(sessionStorage.getItem("token"));
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const { pathname } = useLocation();
  const [shipping, setShipping] = useState(0);
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const condition = JSON.parse(sessionStorage.getItem("terms"));

  const navigate = useNavigate();

  const notify = () =>
    toast("Thanks for doing business with us! Come back soon!!");
  const failednotification = () => toast("Transaction Cancelled");

  const key = "pk_test_312e53d43b5bc5ee9d92192b01a9b150cc0f7544";
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState(token.email);
  const [name, setName] = useState(`${token.firstName} ${token.lastName}`);
  // const componentProps = {
  //   email,
  //   amount,
  //   metadata: {
  //     name,
  //   },
  //   publicKey,
  //   text: "Pay Now",
  //   onSuccess: (res) => {},
  //   onClose: () => alert("Wait! Don't leave :("),
  // };

  const payWithPaystack = () => {
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key,
      amount,
      email,
      name,
      onSuccess: (res) => {
        const data = {};
        data.userId = token._id;
        data.name = token.firstName;
        data.customerId = res.reference;
        data.paymentIntentId = res.transaction;
        data.products = cart.map((product) => {
          return {
            productid: product._id,
            qty: product.quantity,
            price: product.price,
            images: product.image,
            category: product.category,
            desc: product.desc,
            sizes: product.sizes,
            name: product.name,
          };
        });
        data.subTotal = getTotalQuantity();
        data.Total = amount / 100;
        data.address = `${city}, ${address}`;
        data.delivery_status = "'Pending";
        data.payment_status = res.status;
        sendOrder(data);

        if (res.status === "success") {
          navigate("/orders_view");
        }
        notify();
      },
      onClose: () => {
        failednotification();
      },
    });
  };

  const checkTotalPrice = () => {
    if (
      city === "" ||
      city === "Yenagoa" ||
      city === "yenagoa" ||
      city === "Yenago" ||
      city === "yenago"
    ) {
      setShipping(0);
    } else {
      setShipping(2000);
    }
    setAmount(`${(getTotalQuantity() + shipping) * 100}`);
  };

  const sendOrder = async (data) => {
    const res = await axios.post(`${hostUrl}/api/order`, data, {
      headers: { token: token.accessToken },
    });
    try {
    } catch (error) {}
  };

  useEffect(() => {
    checkTotalPrice();
  }, [city]);

  console.log(termsAndConditions);
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
                  <p>₦{product.price}</p>
                </div>
                <div className="quantity-con">
                  <input
                    className="single-product-btn"
                    onChange={(e) => setQuantity(product, e.target.value)}
                    defaultValue={product.quantity}
                  />
                </div>
                <div className="subtotal-con">
                  <p>₦{product.price * product.quantity}</p>
                  <FaTrash onClick={() => removeFromCart(product)} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="shopping-cart-calculation">
          <div className="shopping-cart-shipping-con">
            <h3>Shipping Calculation</h3>
            <input
              type="text"
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              type="text"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            />
            <div className="flex_terms">
              <input
                type="checkbox"
                className="checkbox"
                onChange={() => {
                  setTermsAndConditions(true);
                  sessionStorage.setItem("terms", JSON.stringify(true));
                }}
                defaultChecked={condition}
                style={{ alignItems: "start", justifyContent: "flex-start" }}
              />
              <p
                style={{ cursor: "pointer", color: "#1b9abd" }}
                onClick={() => {
                  navigate("/terms");
                }}
              >
                Accept terms and condition's
              </p>
            </div>
          </div>
          <div className="shopping-cart-total-con">
            <div className="shopping-cart-total">
              <div className="total-con">
                <h3>Sub Total</h3>
                <h3 className="total-price">₦{getTotalQuantity()}</h3>
              </div>
              <div>
                <p>Total</p>
                <p>
                  Shipping:
                  <span>₦{shipping}</span>
                </p>
              </div>
              <div className="total-con">
                <h3>Total</h3>
                <h3 className="total-price">
                  ₦{`${getTotalQuantity() + shipping}`}
                </h3>
              </div>
              <button
                disabled={condition ? false : true}
                style={{ cursor: condition ? "pointer" : "no-drop" }}
                className="btn"
                onClick={payWithPaystack}
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <Newsletter pathname={pathname} />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Loading(ShoppingCart);
