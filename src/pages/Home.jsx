import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";

import { AiOutlineArrowRight } from "react-icons/ai";

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
  Categories,
} from "../components";

import { useGlobalContext } from "../context/context";

const Home = () => {
  const { pathname } = useLocation();
  const [index, setIndex] = useState(1);
  const { products, loading } = useGlobalContext();

  const toggleFlashSales = (e) => {};

  return (
    <>
      <section className="home-hero">
        <Header pathname={pathname} />
        {loading ? (
          <>
            <div className="loader_container">
              <ColorRing
                visible={true}
                height="40"
                width="40"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={["#03b5c3", "#03b5c3", "#03b5c3", "#03b5c3", "#03b5c3"]}
              />
              <p>Loading...</p>
            </div>
          </>
        ) : (
          <div className="home-hero-section">
            {products.slice(0, 3).map((item, idx) => (
              <div key={idx} className={`home-hero-item-${idx + 1}`}>
                <div className="home-hero-section-text-con">
                  <h2>{item.name}</h2>
                  <p>{item.shortDesc}</p>
                  <Link to={`/products/${item._id}`}>
                    <Button title={"shop now"} icon={<AiOutlineArrowRight />} />
                  </Link>
                </div>
                <div className="home-hero-section-img-con">
                  <img src={item.image[0].url} alt="" />
                </div>
              </div>
            ))}
          </div>
        )}
        <SupportCard />
        <Products h2_title="New Top Sales!" products={products} />
        <ProductsBanner />
        <div className="flash-sales-con">
          <div className="flash-sales-item-one">
            <div className="flash-sales-item-one-hero">
              <h3>Daily Deals!</h3>
              <div>
                <div>
                  <a
                    id="option_two"
                    href="https://deehatoa.net/4/7677758"
                    rel="noopener noreferrer"
                  >
                    <MdNavigateBefore id="prev" onClick={toggleFlashSales} />
                  </a>
                </div>
                <div>
                  <MdNavigateNext id="next" onClick={toggleFlashSales} />
                </div>
              </div>
            </div>
            <DailyDeals
              dealsProducts={products}
              index={index}
              setIndex={setIndex}
            />
          </div>
          <div className="flash-sales-item-two">
            <GridProducts pathname={pathname} />
          </div>
        </div>
        <Categories product={products} />
        <div className="part-two-products">
          <Products h2_title="New Top Sales!" products={products.slice(0, 8)} />
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
