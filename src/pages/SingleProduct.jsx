import React, { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import {
  Comments,
  Footer,
  Header,
  Newsletter,
  PageHero,
  RelatedProducts,
} from "../components";
import { client, urlFor } from "../lib/client";

import { AiFillStar } from "react-icons/ai";
import { useGlobalContext } from "../context/context";

const SingleProduct = ({ products }) => {
  const [product, setProduct] = useState([]);
  const index = product[0];
  const [selectedImage, setSelectedImage] = useState(1);
  const [tabs, setTabs] = useState(false);
  const { decreaseQuantity } = useGlobalContext();
  const { increaseQuantity } = useGlobalContext();
  const { qty } = useGlobalContext();
  const { slug } = useParams();
  const { pathname } = useLocation();

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

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
      details,
      image,
      name,
      price,
       slug,
    }`
      )
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => console.log(err));
  }, [slug]);
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
                  <img
                    src={index?.image && urlFor(index?.image[0])}
                    alt={index?.name}
                  />
                ) : selectedImage == 2 ? (
                  <img
                    src={index?.image && urlFor(index?.image[1])}
                    alt={index?.name}
                  />
                ) : selectedImage == 3 ? (
                  <img
                    src={index?.image && urlFor(index?.image[2])}
                    alt={index?.name}
                  />
                ) : selectedImage == 4 ? (
                  <img
                    src={index?.image && urlFor(index?.image[3])}
                    alt={index?.name}
                  />
                ) : (
                  ""
                )}
              </div>
              <div className="single-product-other-images-con">
                {index?.image &&
                  index?.image?.map((image, idx) => (
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
                      <img src={image && urlFor(image)} alt="" />
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="single-product-details-con">
            <h2>{index?.name}</h2>
            <h3>
              ${index?.price} - <span>$260.00</span>
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
                <span>{qty}</span>
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
          <Comments tabs={tabs} />
        </div>
        <RelatedProducts products={products.slice(0, 4)} />
      </section>
      <Newsletter pathname={pathname} slug={slug} />
      <Footer />
    </>
  );
};

export default SingleProduct;
