import React, { useState } from "react";
import Button from "./Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useGlobalContext } from "../context/context";
import { ToastContainer, toast } from "react-toastify";

const Newsletter = ({ pathname, slug }) => {
  const notify = () => toast("Email Sent");
  const { handleSubmit, register } = useForm();
  const { hostUrl } = useGlobalContext();

  const [loading, setLoading] = useState(false);
  const handleNewsletterForm = async (data) => {
    setLoading(true);
    try {
      const newsletter = await axios.post(`${hostUrl}/api/newsletter`, {
        email: data.email,
      });
      if (newsletter.status === 200) {
        setLoading(false);
        notify();
      }
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <section
      className={`newsletter-con ${
        pathname === "/about" ||
        pathname === "/shop" ||
        pathname === `/products/${slug}`
          ? "twist"
          : "newsletter-con"
      }`}
    >
      <div>
        <h2>Join our Newsletter</h2>
        <p>Sign up for our newsletter to get up-to-date from us</p>
      </div>
      <form
        className="newsletter-form"
        onSubmit={handleSubmit((data) => handleNewsletterForm(data))}
      >
        <input
          type="email"
          placeholder="Enter Your Email"
          {...register("email")}
        />
        <Button title={loading ? "Loading" : "Subscribe"} />
      </form>
      <ToastContainer />
    </section>
  );
};

export default Newsletter;
