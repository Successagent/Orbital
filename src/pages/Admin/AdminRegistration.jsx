import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Footer, Header, Newsletter, PageHero } from "../../components";

import "../Registration/Registration.css";
import "../Login/Login.css";
import Loading from "../../components/HOCs/Loading";
import { useForm } from "react-hook-form";
import axios from "axios";

const AdminRegistration = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleRegisterForm = async (data) => {
    try {
      const registerUser = await axios.post(
        "http://localhost:5000/api/auth/adminRegister",
        {
          fname: data.firstName,
          lname: data.lastName,
          email: data.email,
          password: data.password,
          cpassword: data.confirmPassword,
        }
      );

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
                  <p>Last Name *</p>
                  <input
                    type="text"
                    name="lastName"
                    {...register("lastName")}
                  />
                  <p>Email Address *</p>
                  <input type="email" name="email" {...register("email")} />
                  <p>Password *</p>
                  <input
                    type="password"
                    name="password"
                    {...register("password")}
                  />
                  <p>Confirm Password *</p>
                  <input
                    type="password"
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
