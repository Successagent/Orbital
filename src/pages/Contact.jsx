import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Footer, Header, Newsletter, PageHero } from "../components";
import { FaUserAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  const { pathname } = useLocation();
  const [red, setRed] = useState(0);

  const toggleColor = (e) => {
    if (e.target.id == 1) {
      setRed(1);
    } else if (e.target.id == 2) {
      setRed(2);
    } else if (e.target.id == 3) {
      setRed(3);
    }
    console.log(red);
  };
  return (
    <>
      <section className="contact-sect">
        <Header pathname={pathname} />
        <PageHero page_title={"Contact Us"} />
        <div className="contact-form-con">
          <div className="contact-information-section">
            <h2>Contact Info</h2>
            <div className="hr-flex">
              <div className="hr"></div>
              <div className="hr"></div>
            </div>
            <div className="location-details-con">
              <div className="location-icons-con">
                <GoLocation />
              </div>
              <div>
                <h3>Head Office</h3>
                <p>Your address here 54/X, New Down City</p>
              </div>
            </div>
            <div className="location-details-con">
              <div className="location-icons-con">
                <GoLocation />
              </div>
              <div>
                <h3>Head Office</h3>
                <p>Your address here 54/X, New Down City</p>
              </div>
            </div>
            <div className="location-details-con">
              <div className="location-icons-con">
                <GoLocation />
              </div>
              <div>
                <h3>Head Office</h3>
                <p>Your address here 54/X, New Down City</p>
              </div>
            </div>
          </div>
          <div className="contact-getin-touch-section">
            <h2>Get In Touch</h2>
            <div className="hr-flex">
              <div className="hr"></div>
              <div className="hr"></div>
            </div>
            <form className="contact-form">
              <div
                className={`input-con contact-form-item-one ${
                  red == 1 ? "red-border" : ""
                }`}
                id={1}
                onMouseEnter={toggleColor}
                onMouseLeave={() => setRed(0)}
              >
                <FaUserAlt className={` ${red === 1 ? "color-red" : ""}`} />
                <input
                  type="text"
                  placeholder="Your Name"
                  id={1}
                  onFocus={toggleColor}
                />
              </div>
              <div
                className="input-con contact-form-item-two"
                id={2}
                onMouseEnter={toggleColor}
                onMouseLeave={() => setRed(0)}
              >
                <FaUserAlt className={` ${red === 2 ? "color-red" : ""}`} />
                <input type="email" placeholder="Enter Your Email" />
              </div>
              <div
                className="input-con contact-form-item-three"
                id={3}
                onMouseEnter={toggleColor}
                onMouseLeave={() => setRed(0)}
              >
                <FaUserAlt className={` ${red === 3 ? "color-red" : ""}`} />
                <input type="text" placeholder="Your Subject" />
              </div>
              <textarea className="contact-form-item-four"></textarea>
            </form>
          </div>
        </div>
      </section>
      <Newsletter pathname={pathname} />
      <Footer />
    </>
  );
};

export default Contact;
