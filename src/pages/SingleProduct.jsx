import React, { useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { Footer, Header, Newsletter, PageHero } from "../components";
import { products } from "../datas/product";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import reviewImage from "../assets/c1.webp";

const SingleProduct = () => {
  const { id } = useParams();
  const showFourProducts = products.slice(0, 4);
  const { pathname } = useLocation();
  const product = products.filter((index) => index.id == id);
  const index = product[0];
  const [selectedImage, setSelectedImage] = useState(1);
  const [tabs, setTabs] = useState(false);

  const changeActiveImage = (e) => {
    if (e.target.id == 0) {
      setSelectedImage(1);
    } else if (e.target.id == 1) {
      setSelectedImage(2);
    } else if (e.target.id == 2) {
      setSelectedImage(3);
    } else if (e.target.id == 3) {
      setSelectedImage(4);
    }
  };

  const toggleTab = () => {
    setTabs(!tabs);
  };
  return (
    <>
      <section className="single-product-con">
        <Header pathname={pathname} />
        <PageHero page_title={"Single Product"} />
        <div className="single-product">
          <div className="single-product-image-con">
            <div>
              <div className="single-product-single-image-con">
                {selectedImage == 1 ? (
                  <img src={index.src[0]} alt={index.productName} />
                ) : selectedImage == 2 ? (
                  <img src={index.src[1]} alt={index.productName} />
                ) : selectedImage == 3 ? (
                  <img src={index.src[2]} alt={index.productName} />
                ) : selectedImage == 4 ? (
                  <img src={index.src[3]} alt={index.productName} />
                ) : (
                  ""
                )}
              </div>
              <div className="single-product-other-images-con">
                {index.src.map((image, idx) => (
                  <div
                    key={idx}
                    id={idx}
                    className={`${
                      selectedImage == 1 && idx == 0
                        ? "selected-image"
                        : selectedImage == 2 && idx == 1
                        ? "selected-image"
                        : selectedImage == 3 && idx == 2
                        ? "selected-image"
                        : selectedImage == 4 && idx == 3
                        ? "selected-image"
                        : ""
                    }`}
                    onMouseEnter={changeActiveImage}
                  >
                    <img src={image} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="single-product-details-con">
            <h2>{index.productName}</h2>
            <h3>
              ${index.price} - <span>$260.00</span>
            </h3>
            <div className="single-product-review-con">
              <div className="product-rate-con">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <p>(1 Review)</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minimo veniam, quis nostrud exercitation ullamco laboris nisi.
            </p>
            <div className="single-product-btn-con">
              <div className="single-product-btn">
                <span>-</span>
                <span>0</span>
                <span>+</span>
              </div>
              <button className="single-product-btn">add to cart</button>
            </div>
            <h4>
              SKU: <span>WS-256HG</span>
            </h4>
            <h4>
              CATEGORIES: <span>Home, Electronic</span>
            </h4>
          </div>
        </div>
        <div className="product-specs-descrp-review-sect">
          <div className="tabs-con">
            <h3
              className={`${tabs == false ? "active-border-bottom" : ""}`}
              onClick={toggleTab}
            >
              Description
            </h3>
            <h3
              className={`${tabs == true ? "active-border-bottom" : ""}`}
              onClick={toggleTab}
            >
              Review
            </h3>
          </div>
          <div className={`tabs ${tabs == false ? "active-tab" : ""}`}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea comm consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totamhy rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur
            </p>
          </div>
          <div
            className={`tabs descrp-tab ${tabs == true ? "active-tab" : ""}`}
          >
            <div>
              <div>
                <img src={reviewImage} alt="" />
                <h3>Tomas Doe</h3>
                <p>Developer</p>
                <div className="product-rate-con">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                viverra amet, sodales faucibus nibh. Vivamus amet potenti
                ultricies nunc gravida duis. Nascetur scelerisque massa sodales
                egestas augue neque euismod scelerisque viverra.
              </p>
            </div>
            <div>
              <div>
                <img src={reviewImage} alt="" />
                <h3>Tomas Doe</h3>
                <p>Developer</p>
                <div className="product-rate-con">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                viverra amet, sodales faucibus nibh. Vivamus amet potenti
                ultricies nunc gravida duis. Nascetur scelerisque massa sodales
                egestas augue neque euismod scelerisque viverra.
              </p>
            </div>
            <div>
              <div>
                <img src={reviewImage} alt="" />
                <h3>Tomas Doe</h3>
                <p>Developer</p>
                <div className="product-rate-con">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                viverra amet, sodales faucibus nibh. Vivamus amet potenti
                ultricies nunc gravida duis. Nascetur scelerisque massa sodales
                egestas augue neque euismod scelerisque viverra.
              </p>
            </div>
          </div>
        </div>
        <div className="related-product-con">
          <h2>Related Products</h2>
          <div className="related-products-container">
            {showFourProducts.map((product, idx) => (
              <Link key={idx} to={`/products/${product.id}`}>
                <div className="product-item">
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
                      <img src={product.src[0]} alt={product.productName} />
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
                    <p className="product-name-text">{product.productName}</p>
                    <h3 className="product-price">${product.price}</h3>
                    <div className="product-rate-con">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Newsletter pathname={pathname} id={id} />
      <Footer />
    </>
  );
};

export default SingleProduct;
