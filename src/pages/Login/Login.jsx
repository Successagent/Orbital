import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Footer, Header, Newsletter, PageHero } from "../../components";
import "../Login/Login.css";
import "../Registration/Registration.css";

import axios from "axios";
import { useForm } from "react-hook-form";
import Loading from "../../components/HOCs/Loading";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleLoginForm = async (data) => {
    if (data.email !== "" && data.passowrd !== "") {
      try {
        const loginUser = await axios.post(
          "http://localhost:5000/api/auth/login",
          {
            email: data.email,
            password: data.password,
          }
        );

        if (loginUser.status === 200) {
          setLoading(true);
          sessionStorage.setItem(
            "token",
            JSON.stringify(loginUser.data.accessToken)
          );
          setLoading(false);
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (loading) return "Loading...";
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
    </>
  );
};

export default Loading(Login);
