import axios from "axios";
import { Button, Footer, Header, Newsletter, PageHero } from "../../components";
import { useGlobalContext } from "../../context/context";
import "../ForgetPassword/ForgetPassWord.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

const ForgetPassword = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { hostUrl } = useGlobalContext();
  const handleForgetPassword = async (data) => {
    try {
      const forgetPass = await axios.post(`${hostUrl}/api/auth/forget`, {
        email: data.email,
      });
    } catch (error) {}
  };
  return (
    <>
      <Header />
      <div className="forget-password">
        <PageHero page_title="Forget Password" />
        <div className="register-form forget-pass-form">
          <section className="support-form-section">
            <div>
              <h2>Forget Password</h2>
              <div>
                <form
                  className="review-form"
                  onSubmit={handleSubmit((data) => handleForgetPassword(data))}
                >
                  <p>
                    Forgot your password? . Enter your email address to reset
                    and we will send a reset link to your email
                  </p>
                  <p>Email Address *</p>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                  />
                  <h3 className="error">{errors.email?.message}</h3>
                  <Button title="Reset Password" />
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default ForgetPassword;
