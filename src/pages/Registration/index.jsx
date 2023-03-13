import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { Button, Footer, Header, Newsletter, PageHero } from "../../components";

import "../Registration/Registration.css";
import "../Login/Login.css";
import Loading from "../../components/HOCs/Loading";
import { useForm } from "react-hook-form";
import axios from "axios";

const Registration = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleRegisterForm = async (data) => {
    try {
      const registerUser = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword,
        }
      );
      console.log(registerUser.data);
      if (registerUser.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="register-page">
        <Header />
        <PageHero page_title={"Registration"} />

        <div className="register-form">
          <section>
            <div>
              <h2>Register</h2>
              <div>
                <form
                  onSubmit={handleSubmit((data) => handleRegisterForm(data))}
                >
                  <p>First Name *</p>
                  <input
                    type="text"
                    name="firstName"
                    {...register("firstName")}
                  />
                  <p>Last Name *</p>
                  <input
                    type="text"
                    name="lastName"
                    {...register("lastName")}
                  />
                  <p>Email Address *</p>
                  <input type="text" name="email" {...register("email")} />
                  <p>Password *</p>
                  <input
                    type="text"
                    name="password"
                    {...register("password")}
                  />
                  <p>Confirm Password *</p>
                  <input
                    type="text"
                    name="confirmPassword"
                    {...register("confirmPassword")}
                  />
                  <p id="p-form">
                    We collect your data to enable you have a wonderful
                    experience using our website. Your information is safe with
                    us
                  </p>
                  <Button title="Register" />
                </form>
              </div>
            </div>
          </section>
          <div>
            <h2>Login</h2>
            <p>
              Login to your account to access your user dashboard, manage your
              orders and profile
            </p>
            <Link to="/login">
              <Button title="Login"></Button>
            </Link>
          </div>
        </div>
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default Loading(Registration);
