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

const SingleProduct = () => {
  const { id } = useParams();
  const showFourProducts = products.slice(0, 4);
  const { pathname } = useLocation();
  const product = products.filter((index) => index.id == id);
  const index = product[0];
  const [selectedImage, setSelectedImage] = useState(1);

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
          </div>
        </div>
        <div className="product-specs-descrp-review-sect">
          <div>
            <h3>Description</h3>
            <h3>Specification</h3>
            <h3>Review</h3>
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
                      <img
                        src={product.src.length > 0 && product.src[0]}
                        alt={product.productName}
                      />
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
