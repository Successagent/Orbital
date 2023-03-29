import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Footer, Header, Newsletter, PageHero } from "../../components";

import "../Registration/Registration.css";
import "../Login/Login.css";
import Loading from "../../components/HOCs/Loading";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useGlobalContext } from "../../context/context";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(12).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

const AdminRegistration = () => {
  const { hostUrl } = useGlobalContext();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleRegisterForm = async (data) => {
    try {
      const registerUser = await axios.post(
        `${hostUrl}/api/auth/adminRegister`,
        {
          fname: data.firstName,
          lname: data.lastName,
          email: data.email,
          password: data.password,
          cpassword: data.confirmPassword,
        }
      );
      console.log(registerUser);

      if (registerUser.status === 201) {
        navigate("/admin_login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="register-page">
        <Header pathname={pathname} />
        <PageHero page_title={"Admin Registration"} />

        <div className="register-form">
          <section>
            <div>
              <h2>Admin Register</h2>
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
                  <h3 className="error">{errors.firstName?.message}</h3>
                  <p>Last Name *</p>
                  <input
                    type="text"
                    name="lastName"
                    {...register("lastName")}
                  />
                  <h3 className="error">{errors.lastName?.message}</h3>
                  <p>Email Address *</p>
                  <input type="email" name="email" {...register("email")} />
                  <h3 className="error">{errors.email?.message}</h3>
                  <p>Password *</p>
                  <input
                    type="password"
                    name="password"
                    {...register("password")}
                  />
                  <h3 className="error">{errors.password?.message}</h3>
                  <p>Confirm Password *</p>
                  <input
                    type="password"
                    name="confirmPassword"
                    {...register("confirmPassword")}
                  />
                  {errors.confirmPassword && (
                    <h3 className="error">Password Should Match</h3>
                  )}
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
            <h2>Admin Login</h2>
            <p>
              Login to your account to access your user dashboard, manage your
              orders and profile
            </p>
            <Link to="/admin_login">
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

export default Loading(AdminRegistration);
