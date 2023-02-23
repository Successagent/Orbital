import { Button, Footer, Header, Newsletter, PageHero } from "../../components";
import "../ForgetPassword/ForgetPassWord.css";

const index = () => {
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
                <form className="review-form">
                  <p>
                    Forgot your password? . Enter your email address to reset
                    and we will send a reset link to your email
                  </p>
                  <p>Email Address *</p>
                  <input type="email" />
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

export default index;
