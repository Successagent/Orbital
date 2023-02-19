import React from "react";
import { useLocation } from "react-router-dom";
import speaker from "../assets/slider4.webp";
import productImage from "../assets/shopping.png";

import {
  AiOutlineArrowRight,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiFillStar,
} from "react-icons/ai";

import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import {
  Footer,
  GridProducts,
  Header,
  Newsletter,
  Products,
  ProductsBanner,
  SupportCard,
  Button,
  DailyDeals,
} from "../components";

const Home = ({ products, addToCart }) => {
  const { pathname } = useLocation();

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
        <SupportCard />
        <Products h2_title="New Top Sales!" products={products.slice(0, 4)} />
        <ProductsBanner
          sale_text={"Sparing Sales Coming"}
          name_text={"Smart Watch Android"}
        />
        <div className="flash-sales-con">
          <div className="flash-sales-item-one">
            <div className="flash-sales-item-one-hero">
              <h3>Daily Deals!</h3>
              <div>
                <MdNavigateBefore />
                <MdNavigateNext />
              </div>
            </div>
            <DailyDeals dealsProducts={products.slice(0, 1)} />
          </div>
          <div className="flash-sales-item-two">
            <GridProducts pathname={pathname} products={products} />
          </div>
        </div>
        <div className="category-sect">
          <h2>Top Categories</h2>
          <div className="category-products-sect">
            <div>
              <div>
                <img src={productImage} alt="" />
              </div>
              <p className="product-name-text">Audio/Video</p>
            </div>
            <div>
              <div>
                <img src={productImage} alt="" />
              </div>
              <p className="product-name-text">Audio/Video</p>
            </div>
            <div>
              <div>
                <img src={productImage} alt="" />
              </div>
              <p className="product-name-text">Audio/Video</p>
            </div>
            <div>
              <div>
                <img src={productImage} alt="" />
              </div>
              <p className="product-name-text">Audio/Video</p>
            </div>
            <div>
              <div>
                <img src={productImage} alt="" />
              </div>
              <p className="product-name-text">Audio/Video</p>
            </div>
          </div>
        </div>
        <div className="part-two-products">
          <Products h2_title="New Top Sales!" products={products} />
        </div>
        <div className="product-banner-two-sec">
          <ProductsBanner
            sale_text={"50% 0ff"}
            name_text={"SMART TELEVISION WITH PEN"}
          />
        </div>
      </section>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
