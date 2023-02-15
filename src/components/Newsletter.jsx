import React from "react";
import Button from "./Button";

const Newsletter = ({ pathname, id }) => {
  return (
    <section
      className={`newsletter-con ${
        pathname === "/about" ||
        pathname === "/shop" ||
        pathname === `/products/${id}`
          ? "twist"
          : "newsletter-con"
      }`}
    >
      <div>
        <h2>Join our Newsletter</h2>
        <p>Sign up for our newsletter to get up-to-date from us</p>
      </div>
      <form className="newsletter-form">
        <input type="email" placeholder="Enter Your Email" />
        <Button title="Subscribe" />
      </form>
    </section>
  );
};

export default Newsletter;
