import React, { useEffect, useState } from "react";
import { Filter, Footer, Newsletter, PageHero } from "../components";
import { Link, useLocation } from "react-router-dom";

import axios from "axios";
import { useGlobalContext } from "../context/context";
import Header from "../components/Header";
import { toast } from "react-toastify";

const UserOrders = () => {
  const { pathname } = useLocation();
  const [allOrders, setAllOrders] = useState([]);

  const { hostUrl } = useGlobalContext();
  const user = JSON.parse(sessionStorage.getItem("token"));

  const getAllOrders = async () => {
    try {
      const allOrders = await axios.get(`${hostUrl}/api/order/${user._id}`, {
        headers: { token: user.accessToken },
      });
      console.log(allOrders);
      setAllOrders(allOrders.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <section className="orders">
      <Header pathname={pathname} />
      <PageHero page_title={"Orders"} />
      <Filter placeholder={"Search order number"} />
      <section className="order_table">
        <div className="order_table_header">
          <div className="order_number">
            <h3>Order Number</h3>
          </div>
          <div className="order_name">
            <h3>Order Name</h3>
          </div>
          <div className="order_date">
            <h3>Order Date</h3>
          </div>
          <div className="order_quantiy">
            <h3>Shipping Fee</h3>
          </div>
          <div className="order_total">
            <h3>Order Total</h3>
          </div>
          <div className="order_status">
            <h3>Order Status</h3>
          </div>
          <div className="order_details">
            <h3>View Details</h3>
          </div>
        </div>
        {allOrders.map((order, idx) => {
          return (
            <div className="order_table_header order_table_body" key={idx}>
              <div className="order_number">
                <p>{order.paymentIntentId}</p>
              </div>
              <div className="order_name">
                <p>{order.name}</p>
              </div>
              <div className="order_date">
                <p>{order.createdAt.slice(0, 10)}</p>
              </div>
              <div className="order_quantiy">
                <p>₦{order.Total - order.subTotal}</p>
              </div>
              <div className="order_total">
                <p>₦{order.Total}</p>
              </div>
              <div className="order_status">
                <button style={{ padding: "10px", cursor: "pointer" }}>
                  {order.delivery_status === "'Pending" ? "Pending" : "Arrived"}
                </button>
              </div>
              <Link
                style={{ display: "block", width: "20%" }}
                className="order_edit"
                to={`/orderView/${order._id}`}
              >
                <button
                  style={{
                    color: "green",
                    padding: "10px",
                    cursor: "pointer",
                  }}
                >
                  {"view details"}
                </button>
              </Link>
            </div>
          );
        })}
      </section>
      <Newsletter pathname={pathname} />
      <Footer />
    </section>
  );
};

export default UserOrders;
