import { useState } from "react";

import { Link } from "react-router-dom";
import { Button, Footer, Header, Newsletter, PageHero } from "../../components";

import "../Registration/Registration.css";
import "../Login/Login.css";
import Loading from "../../components/HOCs/Loading";

const index = ({}) => {
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
                <form>
                  <p>First Name *</p>
                  <input type="text" name="firstName" />
                  <p>Last Name *</p>
                  <input name="lastName" type="text" />
                  <p>Email Address *</p>
                  <input type="text" name="email" />
                  <p>Password *</p>
                  <input type="text" name="password" />
                  <p>Confirm Password *</p>
                  <input type="text" name="confirmPassword" />
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

export default Loading(index);
