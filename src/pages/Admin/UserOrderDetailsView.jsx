import React, { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import { Footer, PageHero } from "../../components";
import axios, { all } from "axios";
import { useGlobalContext } from "../../context/context";
import { useParams } from "react-router-dom";

const UserOrderDetailsView = () => {
  const { hostUrl } = useGlobalContext();
  const [userDetails, setUserDetails] = useState([]);
  const [order, setOrder] = useState([]);
  const accessToken = JSON.parse(sessionStorage.getItem("admin"));
  const { id } = useParams();

  const index = order[0];

  const customerDetail = userDetails.filter(
    (user) => user._id === index?.userId
  );

  const customerIndex = customerDetail[0];

  const getAllOrders = async () => {
    try {
      const allOrders = await axios.get(`${hostUrl}/api/order`, {
        headers: { token: accessToken },
      });
      setOrder(() => allOrders.data.filter((order) => order._id === id));
    } catch (error) {
      console.log(error);
    }
  };

  const getAllCustomers = async () => {
    try {
      const customerDetails = await axios.get(`${hostUrl}/api/users`, {
        headers: { token: accessToken },
      });
      if (customerDetails.status === 200) {
        setUserDetails(customerDetails.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllOrders();
    getAllCustomers();
  }, []);

  let updatedTime = index?.createdAt;
  let timeStamp = new Date(updatedTime).getTime();
  let day = new Date(timeStamp).getDate();
  let year = new Date(timeStamp).getFullYear();
  let month = new Date(timeStamp).getMonth() + 1;
  let arrivedTime = ``;
  // console.log(customerIndex);
  console.log(month);

  return (
    <section className="order_details_view_container">
      <AdminHeader />
      <PageHero page_title={"Customer Details"} />
      <section className="order_details_view">
        <div className="details_con order_view">
          <h3>Order Details</h3>
          <div className="input_con">
            <p>Order Number</p>
            <input type="text" defaultValue={index?.customerId} />
          </div>
          <div className="input_con">
            <p>Customer</p>
            <input
              type="text"
              defaultValue={
                customerIndex &&
                `${customerIndex.firstName} ${customerIndex?.lastName}`
              }
            />
          </div>
          <div className="input_con">
            <p>Order Date</p>
            <input type="text" defaultValue={index?.createdAt.slice(0, 10)} />
          </div>
        </div>
        <div className="details_con order_view">
          <h3>Cart Details</h3>
          <div className="order_cart_details">
            <div className="order_cart_details_header">
              <div className="order_cart_details_product">
                <h3>Product</h3>
              </div>
              <div className="order_cart_details_qty">
                <h3>Quantity</h3>
              </div>
              <div className="order_cart_details_price">
                <h3>Unit Price</h3>
              </div>
            </div>
            {index &&
              index?.products.map((product, idx) => (
                <div
                  key={idx}
                  className="order_cart_details_header order_cart_details_body"
                >
                  <div className="order_cart_details_product">
                    <img src={product?.images[0].url} alt={product?.name} />
                    <p>{product?.name}</p>
                  </div>
                  <div className="order_cart_details_qty">{product.qty}</div>
                  <div className="order_cart_details_price">
                    ₦{product.price}
                  </div>
                </div>
              ))}
            <p>
              <span>Sub Total:</span> ₦{index?.subTotal}
            </p>
            <p>
              <span>Shipping:</span> ₦{index?.Total - index?.subTotal}
            </p>
            <h3>Total: ₦{index?.Total}</h3>
          </div>
        </div>
        <div className="details_con order_view">
          <h3>History</h3>
          <div className="input_con">
            <p>Order Completed on</p>
            <input type="text" defaultValue={arrivedTime} />
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default UserOrderDetailsView;
