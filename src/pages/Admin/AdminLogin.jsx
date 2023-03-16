import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Footer, Header, Newsletter, PageHero } from "../../components";
import "../Login/Login.css";
import "../Registration/Registration.css";

import axios from "axios";
import { useForm } from "react-hook-form";
import Loading from "../../components/HOCs/Loading";

const AdminLogin = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleLoginForm = async (data) => {
    if (data.email !== "" && data.passowrd !== "") {
      try {
        const adminUser = await axios.post(
          "http://localhost:5000/api/auth/admin",
          {
            email: data.email,
            password: data.password,
          }
        );

        if (adminUser.status === 200) {
          sessionStorage.setItem(
            "admin",
            JSON.stringify(adminUser.data.accessToken)
          );
          navigate("/admin");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <Header pathname={pathname} />
      <PageHero page_title="Admin Login" />
      <div className="register-form login-form">
        <section className="support-form-section">
          <div>
            <h2>Admin Login</h2>
            <div>
              <form
                className="review-form"
                onClick={handleSubmit((data) => handleLoginForm(data))}
              >
                <p>Email Address *</p>
                <input
                  type="text"
                  {...register("email", { required: "Email is Required" })}
                />
                <p>Password *</p>
                <input
                  type="text"
                  {...register("password", {
                    required: "Password is Required",
                  })}
                />
                <div className="forget-pass">
                  <div className="flex">
                    <input type="checkbox" />
                    <p>Remember me</p>
                  </div>
                  <Link to="/forget-password" style={{ color: "red" }}>
                    <p className="p forget-password">Forget Password?</p>
                  </Link>
                </div>
                <button className="btn">Login</button>
              </form>
            </div>
          </div>
        </section>
        <div>
          <h2>Admin Register</h2>
          <p>
            Login to your account to access your user dashboard, manage your
            orders and profile
          </p>
          <Link to="/admin_register">
            <Button title="Register"></Button>
          </Link>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Loading(AdminLogin);
