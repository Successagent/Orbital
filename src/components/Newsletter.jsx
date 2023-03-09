import React from "react";
import Button from "./Button";
import { useForm } from "react-hook-form";
import axios from "axios";

const Newsletter = ({ pathname, slug }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleNewsletterForm = async (data) => {
    try {
      const newsletter = await axios.post(
        "http://localhost:5000/api/newsletter",
        {
          email: data.email,
        }
      );
      console.log(newsletter.data);
    } catch (error) {
      console.log(error);
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
        <Button title="Subscribe" />
      </form>
    </section>
  );
};

export default Newsletter;
