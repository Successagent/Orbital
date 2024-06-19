import React from "react";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";

const Newsletter = ({ pathname, slug }) => {
  const { register } = useForm();

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
        <a
          id="option_three"
          href="https://vaikijie.net/4/7625451"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Join our Newsletter</h2>
        </a>
        <p>Sign up for our newsletter to get up-to-date from us</p>
      </div>
      <form className="newsletter-form">
        <input
          type="email"
          placeholder="Enter Your Email"
          {...register("email")}
        />
        <Button title={"Subscribe"} />
      </form>
      <ToastContainer />
    </section>
  );
};

export default Newsletter;
