import React, { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import { Link, useLocation } from "react-router-dom";
import { Filter, Footer, PageHero } from "../../components";
import edit from "../../assets/edit.svg";
import view from "../../assets/profile.svg";
import deleteLogo from "../../assets/delete.svg";
import profile from "../../assets/prof.svg";
import axios from "axios";
import { useGlobalContext } from "../../context/context";
import { ToastContainer, toast } from "react-toastify";

const Customers = () => {
  const [allCustomers, setAllCustomers] = useState([]);
  const { hostUrl } = useGlobalContext();
  const accessToken = JSON.parse(sessionStorage.getItem("admin"));
  const { pathname } = useLocation();

  const notify = () => toast("User Deleted");

  const getAllCustomers = async () => {
    try {
      const allCustomers = await axios.get(`${hostUrl}/api/users`, {
        headers: { token: accessToken },
      });
      console.log(allCustomers);
      setAllCustomers(allCustomers.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCustomer = async (id) => {
    try {
      const removeCustomer = await axios.delete(`${hostUrl}/api/users/${id}`, {
        headers: { token: accessToken },
      });
      if (removeCustomer.status === 200) {
        notify();
        getAllCustomers();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCustomers();
  }, []);
  return (
    <section className="customers">
      <AdminHeader pathname={pathname} />
      <PageHero page_title={"Customers"} />
      <Filter placeholder={"Search Customer"} />
      <section className="order_table cusotmer_table">
        <div className="order_table_header customers_table_header">
          <div className="order_number">
            <h3>Full Name</h3>
          </div>
          <div className="order_name">
            <h3>Email</h3>
          </div>
          <div className="order_date">
            <h3>Phone Number</h3>
          </div>
          <div className="order_quantiy">
            <h3>Created</h3>
          </div>
          <div className="customers_actions">
            <h3>Action</h3>
          </div>
        </div>
        {allCustomers.map((customer, idx) => (
          <div
            className="order_table_header order_table_body customers_table_header"
            key={idx}
          >
            <div className="customer_details">
              <img src={profile} alt="" />
              <p>{customer.firstName}</p>
            </div>
            <div className="order_name">
              <p>{customer.email}</p>
            </div>
            <div className="order_date">
              <p>{customer.phone ? `0${customer.phone}` : "08124885952"}</p>
            </div>
            <div className="order_quantiy">
              <p>{customer.createdAt.slice(0, 10)}</p>
            </div>
            <div className="customers_actions">
              <img src={edit} alt="" />
              <Link to={`/customers/details/${customer._id}`}>
                <img src={view} alt="" />
              </Link>

              <img
                src={deleteLogo}
                alt=""
                onClick={() => deleteCustomer(customer._id)}
              />
            </div>
          </div>
        ))}
      </section>
      <ToastContainer />
      <Footer />
    </section>
  );
};

export default Customers;
