import { Link, useLocation, useNavigate } from "react-router-dom";
import { PageHero } from "../../components";
import "../Login/Login.css";
import "../Registration/Registration.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AdminButton from "./AdminButton";

import axios from "axios";
import { useForm } from "react-hook-form";
import { useGlobalContext } from "../../context/context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";
import AdminNewsletter from "./AdminNewsletter";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(12).required(),
});

const AdminLogin = () => {
  const { hostUrl } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState({});

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const notify = () => {
    if (loginError.data) {
      toast(loginError.data);
    } else {
      toast(loginError);
    }
  };

  const handleLoginForm = async (data) => {
    setLoading(true);
    try {
      const adminUser = await axios.post(`${hostUrl}/api/auth/admin`, {
        email: data.email,
        password: data.password,
      });

      if (adminUser.status === 200) {
        setLoading(false);
        sessionStorage.setItem(
          "admin",
          JSON.stringify(adminUser.data.accessToken)
        );
        setLoading(false);
        sessionStorage.setItem("adminRegister", JSON.stringify(adminUser.data));
        navigate("/admin");
      }
    } catch (error) {
      setLoading(false);
      setLoginError(error.response || error.message);
      notify();
    }
  };

  return (
    <>
      <AdminHeader pathname={pathname} />
      <PageHero page_title="Admin Login" />
      <div className="register-form login-form">
        <section className="support-form-section">
          <div>
            <h2>Admin Login</h2>
            <div>
              <form
                className="review-form"
                onSubmit={handleSubmit((data) => handleLoginForm(data))}
              >
                <p>Email Address *</p>
                <input
                  type="email"
                  {...register("email", { required: true })}
                />
                <h3 className="error">{errors.email?.message}</h3>
                <p>Password *</p>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
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
                <button className="btn">
                  {loading ? "Loading..." : "Login"}
                </button>
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
            <AdminButton title="Register"></AdminButton>
          </Link>
        </div>
      </div>
      <AdminNewsletter />
      <ToastContainer />
      <AdminFooter />
    </>
  );
};

export default AdminLogin;
