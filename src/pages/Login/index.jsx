import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Footer, Header, Newsletter, PageHero } from "../../components";
import "../Login/Login.css";
import "../Registration/Registration.css";

const index = () => {
  return (
    <>
      <Header />
      <PageHero page_title="Login" />
      <div className="register-form login-form">
        <section className="support-form-section">
          <div>
            <h2>Login</h2>
            <div>
              <form className="review-form">
                <p>Email Address *</p>
                <input type="text" />
                <p>Password *</p>
                <input type="text" />
                <div className="forget-pass">
                  <div className="flex">
                    <input type="checkbox" />
                    <p>Remember me</p>
                  </div>
                  <Link to="/forget-password" style={{ color: "red" }}>
                    <p className="p forget-password">Forget Password?</p>
                  </Link>
                </div>
                <Button title="Login" />
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

export default index;
