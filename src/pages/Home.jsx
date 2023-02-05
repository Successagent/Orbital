import React, { useState } from "react";

import speaker from "../assets/slider4.webp";
import productImage from "../assets/shopping.png";

import Button from "../components/Button";
import {
  AiOutlineArrowRight,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiFillStar,
} from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { BsArrowReturnRight, BsCreditCard2Back } from "react-icons/bs";
import { MdOutlineLocalShipping } from "react-icons/md";
import { Footer, Header } from "../components";

const Home = () => {
  const products = [
    {
      src: productImage,
      status: "-10%",
      productName: "Bluetooth Speaker New Without Cable",
      category: "video & musics",
      price: "160.00",
    },
    {
      src: productImage,
      status: "new",
      productName: "Bluetooth Speaker New Without Cable",
      category: "video & musics",
      price: "160.00",
    },
    {
      src: productImage,
      status: "-10%",
      productName: "Bluetooth Speaker New Without Cable",
      category: "video & musics",
      price: "160.00",
    },
    {
      src: productImage,
      status: "new",
      productName: "Bluetooth Speaker New Without Cable",
      category: "video & musics",
      price: "160.00",
    },
  ];
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
        <div className="product-sect">
          <div className="product-hero-con">
            <h2>New Top Sales!</h2>
            <div>
              <p className="active-border">Audio & Videos</p>
              <p>Gaming</p>
              <p>Headphone</p>
            </div>
          </div>
          <div className="product-con">
            {products.map((product, idx) => (
              <div className="product-item" key={idx}>
                <button
                  className={`status ${
                    product.status === "-10%"
                      ? "status-btn-red"
                      : product.status == "new"
                      ? "status-btn-green"
                      : ""
                  }`}
                >
                  {product.status}
                </button>
                <div className="product-item-first-con">
                  <div className="product-image-con">
                    <img src={product.src} alt={product.productName} />
                  </div>
                  <div className="product-search-con">
                    <div className="product-svg-con" id="svg-con-1">
                      <AiOutlineHeart />
                    </div>
                    <div className="product-svg-con" id="svg-con-2">
                      <AiOutlineShoppingCart />
                    </div>
                  </div>
                </div>
                <div className="product-item-two-con">
                  <p>{product.productName}</p>
                  <h3>${product.price}</h3>
                  <div className="product-rate-con">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="intro-products">
          <div>
            <div className="intro-products-text-con">
              <p>Sparing Sales Coming</p>
              <h2>Smart Watch Android</h2>
              <Button title="Shop Now" icon={<AiOutlineArrowRight />} />
            </div>
            <div className="bg"></div>
          </div>
          <div>
            <div className="intro-products-text-con">
              <p>Sparing Sales Coming</p>
              <h2>Smart Watch Android</h2>
              <Button title="Shop Now" icon={<AiOutlineArrowRight />} />
            </div>
            <div className="bg"></div>
          </div>
          <div>
            <div className="intro-products-text-con">
              <p>Sparing Sales Coming</p>
              <h2>Smart Watch Android</h2>
              <Button title="Shop Now" icon={<AiOutlineArrowRight />} />
            </div>
            <div className="bg"></div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
