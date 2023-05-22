import React, { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import { Footer, PageHero } from "../../components";
import axios from "axios";
import { useGlobalContext } from "../../context/context";
import { Link, useParams } from "react-router-dom";

const CustomerDetails = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [orderDetails, setOrderDetails] = useState([]);
  const { firstName, lastName, phone, email } = userDetails;
  const { hostUrl } = useGlobalContext();
  const accessToken = JSON.parse(sessionStorage.getItem("admin"));
  const { id } = useParams();

  const getCustomerDetails = async () => {
    try {
      const customerDetails = await axios.get(`${hostUrl}/api/users/${id}`, {
        headers: { token: accessToken },
      });
      if (customerDetails.status === 200) {
        setUserDetails(customerDetails.data);
      }
    } catch (error) {}
  };

  const getOrderDetails = async () => {
    try {
      const customerDetails = await axios.get(`${hostUrl}/api/order/${id}`, {
        headers: { token: accessToken },
      });
      if (customerDetails.status === 200) {
        setOrderDetails(customerDetails.data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getCustomerDetails();
    getOrderDetails();
  }, []);
  return (
    <section className="customers_details_container">
      <AdminHeader />
      <PageHero page_title={"Customer Details"} />
      <section className="customers_deatils">
        <div className="details_con">
          <h3>Customers Details</h3>
          <div className="grid">
            <div className="input_con">
              <p>First Name</p>
              <input type="text" defaultValue={firstName} />
            </div>
            <div className="input_con">
              <p>Last Name</p>
              <input type="text" defaultValue={lastName} />
            </div>
            <div className="input_con">
              <p>Email </p>
              <input type="text" defaultValue={email} />
            </div>
            <div className="input_con">
              <p>Phone Number</p>
              <input type="text" defaultValue={phone} />
            </div>
          </div>
        </div>
        <div className="orders_details">
          <h3>Orders</h3>
          <section className="order_table">
            <div className="order_table_header">
              <div className="order_number">
                <h3>Order Number</h3>
              </div>
              <div className="order_date">
                <h3>Order Date</h3>
              </div>
              <div className="order_quantiy">
                <h3>Shipping Fee</h3>
              </div>
              <div className="order_total">
                <h3> Total</h3>
              </div>
              <div className="order_status">
                <h3> Status</h3>
              </div>
              <div className="order_status">
                <h3>View Details</h3>
              </div>
            </div>
            {orderDetails.map((order, idx) => (
              <div className="order_table_header order_table_body" key={idx}>
                <div className="order_number">
                  <p>{order.paymentIntentId}</p>
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
                    {order.delivery_status === "'Pending"
                      ? "Pending"
                      : "Arrived"}
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
            ))}
          </section>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default CustomerDetails;
