import React, { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import { Filter, Footer, PageHero } from "../../components";
import { useLocation } from "react-router-dom";
import { useGlobalContext } from "../../context/context";
import axios from "axios";

const Orders = () => {
  const { pathname } = useLocation();
  const [allOrders, setAllOrders] = useState([]);
  const { hostUrl } = useGlobalContext();
  const accessToken = JSON.parse(sessionStorage.getItem("admin"));
  console.log(accessToken);

  const getAllOrders = async () => {
    try {
      const allOrders = await axios.get(`${hostUrl}/api/order`, {
        headers: { token: accessToken },
      });
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
      <AdminHeader pathname={pathname} />
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
            <h3>Order Quantity</h3>
          </div>
          <div className="order_total">
            <h3>Order Total</h3>
          </div>
          <div className="order_status">
            <h3>Order Status</h3>
          </div>
        </div>
        {[1, 3, 4].map((item, idx) => (
          <div className="order_table_header order_table_body" key={idx}>
            <div className="order_number">
              <p>43434903</p>
            </div>
            <div className="order_name">
              <p>Success</p>
            </div>
            <div className="order_date">
              <p>20 May 2023</p>
            </div>
            <div className="order_quantiy">
              <p>1</p>
            </div>
            <div className="order_total">
              <p>N2,000</p>
            </div>
            <div className="order_status">
              <button>{"pending"}</button>
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </section>
  );
};

export default Orders;
