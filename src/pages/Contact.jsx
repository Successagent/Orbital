import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Button,
  Footer,
  Header,
  Map,
  Newsletter,
  PageHero,
} from "../components";
import { FaUserAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineArrowRight, AiOutlineMail } from "react-icons/ai";
import Loading from "../components/HOCs/Loading";
import { useForm } from "react-hook-form";
import { useGlobalContext } from "../context/context";

const Contact = () => {
  const { pathname } = useLocation();
  const [red, setRed] = useState(0);
  const [focus, setFocus] = useState(0);
  const { hostUrl } = useGlobalContext();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const toggleColor = (e) => {
    if (e.target.id == 1) {
      setRed(1);
    } else if (e.target.id == 2) {
      setRed(2);
    } else if (e.target.id == 3) {
      setRed(3);
    } else if (e.target.id == 4) {
      setRed(4);
    }
  };

  const changeFocus = (e) => {
    if (e.target.id == 1) {
      setFocus(1);
    } else if (e.target.id == 2) {
      setFocus(2);
    } else if (e.target.id == 3) {
      setFocus(3);
    } else if (e.target.id == 4) {
      setFocus(4);
    }
  };

  const handleFormSubmit = async (data) => {
    try {
      const response = await fetch(`${hostUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const resData = await response.json();
    } catch (error) {
      console.log(error);
    }
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
            <form
              className="contact-form"
              onSubmit={handleSubmit((data) => handleFormSubmit(data))}
            >
              <div
                className={`input-con contact-form-item-one ${
                  focus == 1 ? "red-border" : ""
                }`}
                id={1}
                onMouseEnter={toggleColor}
                onMouseLeave={() => setRed(0)}
              >
                <FaUserAlt className={` ${red === 1 ? "color-red" : ""}`} />
                <input
                  type="text"
                  {...register("fname", {
                    required: "First Name is Required",
                  })}
                  placeholder="First Name"
                  id={1}
                  onFocus={changeFocus}
                />
              </div>
              <div
                className={`input-con contact-form-item-five ${
                  focus == 3 ? "red-border" : ""
                }`}
                id={3}
                onMouseEnter={toggleColor}
                onMouseLeave={() => setRed()}
              >
                <FaUserAlt className={` ${red === 3 ? "color-red" : ""}`} />
                <input
                  type="text"
                  placeholder="Last Name"
                  id={3}
                  onFocus={changeFocus}
                  {...register("lname", {
                    required: "Last Name is Required",
                  })}
                />
              </div>
              <div
                className={`input-con contact-form-item-two ${
                  focus == 2 ? "red-border" : ""
                }`}
                id={2}
                onMouseEnter={toggleColor}
                onMouseLeave={() => setRed(0)}
              >
                <AiOutlineMail className={` ${red === 2 ? "color-red" : ""}`} />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  id="2"
                  onFocus={changeFocus}
                  {...register("email", { required: "Email is Required" })}
                />
              </div>
              <textarea
                className={`contact-form-item-four ${
                  focus == 4 ? "red-border" : ""
                }`}
                {...register("message", { required: "Message is Required" })}
                id="4"
                onFocus={changeFocus}
              ></textarea>
              <Button title="Submit Now" icon={<AiOutlineArrowRight />} />
            </form>
          </div>
        </div>
        <Map />
      </section>
      <Newsletter pathname={pathname} />
      <Footer />
    </>
  );
};

export default Loading(Contact);
