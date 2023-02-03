import React from "react";
import speaker from "../assets/slider4.webp";
import Button from "../components/Button";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { BsArrowReturnRight, BsCreditCard2Back } from "react-icons/bs";
import { MdOutlineLocalShipping } from "react-icons/md";
import { Footer, Header } from "../components";

const Home = () => {
  return (
    <>
      <section className="home-hero">
        <Header />
        <div className="home-hero-section">
          <div className="home-hero-item-1">
            <div className="home-hero-section-text-con">
              <h2>Bang and Olufsen Smart Speaker</h2>
              <p>Wireless Connection with Computer, Laptops and TV</p>
              <Button title="shop now" icon={<AiOutlineArrowRight />} />
            </div>
            <div className="home-hero-section-img-con">
              <img src={speaker} alt="" />
            </div>
          </div>
          <div className="home-hero-item-2">
            <div className="home-hero-section-text-con">
              <h2>Bang and Olufsen Smart Speaker</h2>
              <p>Wireless Connection with Computer, Laptops and TV</p>
              <Button title="shop now" icon={<AiOutlineArrowRight />} />
            </div>
            <div className="home-hero-section-img-con">
              <img src={speaker} alt="" />
            </div>
          </div>
          <div className="home-hero-item-3">
            <div className="home-hero-section-text-con">
              <h2>Bang and Olufsen Smart Speaker</h2>
              <p>Wireless Connection with Computer, Laptops and TV</p>
              <Button title="shop now" icon={<AiOutlineArrowRight />} />
            </div>
            <div className="home-hero-section-img-con">
              <img src={speaker} alt="" />
            </div>
          </div>
        </div>
        <div className="home-hero-sect-2">
          <div>
            <BiSupport />
            <div>
              <h3>Support 24/7</h3>
              <p>Delicated 24/7 support</p>
            </div>
          </div>
          <div>
            <BiSupport />
            <div>
              <h3>Support 24/7</h3>
              <p>Delicated 24/7 support</p>
            </div>
          </div>
          <div>
            <BiSupport />
            <div>
              <h3>Support 24/7</h3>
              <p>Delicated 24/7 support</p>
            </div>
          </div>
          <div>
            <BiSupport />
            <div>
              <h3>Support 24/7</h3>
              <p>Delicated 24/7 support</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
