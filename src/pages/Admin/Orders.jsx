import React, { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import { Filter, Footer, PageHero } from "../../components";
import { Link, useLocation } from "react-router-dom";
import { useGlobalContext } from "../../context/context";
import axios from "axios";

const Orders = () => {
  const { pathname } = useLocation();
  const [allOrders, setAllOrders] = useState([]);

  const { hostUrl } = useGlobalContext();
  const accessToken = JSON.parse(sessionStorage.getItem("admin"));

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

  const editOrderStatus = async (id) => {
    try {
      const res = await axios.put(
        `${hostUrl}/api/order/${id}`,
        {
          delivery_status: "Approved",
        },
        {
          headers: { token: accessToken },
        }
      );
      console.log(res);
      if (res.status === 200) {
        getAllOrders();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteOrder = async (id) => {
    try {
      const res = await axios.delete(`${hostUrl}/api/order/${id}`, {
        headers: { token: accessToken },
      });
      if (res.status === 200) {
        getAllOrders();
      }
      console.log(res);
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
            <h3>Shipping Fee</h3>
          </div>
          <div className="order_total">
            <h3>Order Total</h3>
          </div>
          <div className="order_status">
            <h3>Order Status</h3>
          </div>
          <div className="order_edit">
            <h3>Edit Order</h3>
          </div>
          <div className="order_details">
            <h3>View Details</h3>
          </div>
          <div className="order_details">
            <h3>Delete Order</h3>
          </div>
        </div>
        {allOrders.map((order, idx) => (
          <div className="order_table_header order_table_body" key={idx}>
            <div className="order_number">
              <p>{order.paymentIntentId}</p>
            </div>
            <div className="order_name">
              <p>Success</p>
            </div>
            <div className="order_date">
              <p>{order.createdAt.slice(0, 10)}</p>
            </div>
            <div className="order_quantiy">
              <p>₦{order.Total - order.subTotal}</p>
            </div>
            <div className="order_total">
              <p>₦2,000</p>
            </div>
            <div className="order_status">
              <button style={{ padding: "10px", cursor: "pointer" }}>
                {order.delivery_status === "'Pending" ? "Pending" : "Arrived"}
              </button>
            </div>
            <div className="order_edit">
              <button
                onClick={() => editOrderStatus(order._id)}
                style={{ color: "blue", padding: "10px", cursor: "pointer" }}
              >
                {"edit status"}
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
            <div className="order_edit">
              <button
                onClick={() => deleteOrder(order._id)}
                style={{ color: "red", padding: "10px", cursor: "pointer" }}
              >
                {"delete order"}
              </button>
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </section>
  );
};

export default Orders;
