import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Footer, Header, Newsletter, PageHero } from "../../components";
import "../Login/Login.css";
import "../Registration/Registration.css";

import axios from "axios";
import { useForm } from "react-hook-form";
import { useGlobalContext } from "../../context/context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(12).required(),
});

const Login = () => {
  const [loading, setLoading] = useState(true);
  const { hostUrl } = useGlobalContext();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  const handleLoginForm = async (data) => {
    try {
      const loginUser = await axios.post(`${hostUrl}/api/auth/login`, {
        email: data.email,
        password: data.password,
      });
      console.log(loginUser);
      if (loginUser.status === 200) {
        setLoading(true);
        sessionStorage.setItem("token", JSON.stringify(loginUser.data));
        setLoading(false);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const notify = () => toast("Wrong Details");

  setTimeout(() => {
    if (loading === false) {
      setLoading(true);
    }
    console.log(loading);
  }, 3000);

  return (
    <>
      <Header />
      <PageHero page_title="Login" />
      <div className="register-form login-form">
        <section className="support-form-section">
          <div>
            <h2>Login</h2>
            <div>
              <form
                className="review-form"
                onClick={handleSubmit((data) => handleLoginForm(data))}
              >
                <p>Email Address *</p>
                <input
                  type="email"
                  {...register("email", { required: "Email is Required" })}
                />
                <h3 className="error">{errors.email?.message}</h3>
                <p>Password *</p>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is Required",
                  })}
                />
                <h3 className="error">{errors.password?.message}</h3>
                <div className="forget-pass">
                  <div className="flex">
                    <input type="checkbox" />
                    <p>Remember me</p>
                  </div>
                  <Link to="/forget-password" style={{ color: "red" }}>
                    <p className="p forget-password">Forget Password?</p>
                  </Link>
                </div>
                <button className="btn" onClick={notify}>
                  Login
                </button>
              </form>
            </div>
          </div>
        </section>
        <div>
          <h2>Register</h2>
          <p>
            Login to your account to access your user dashboard, manage your
            orders and profile
          </p>
          <Link to="/register">
            <Button title="Register"></Button>
          </Link>
        </div>
      </div>
      <Newsletter />
      <Footer />
      {loading === false && <ToastContainer />}
    </>
  );
};

export default Login;
