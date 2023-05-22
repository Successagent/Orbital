import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import {
  Comments,
  Footer,
  Header,
  Newsletter,
  PageHero,
  RelatedProducts,
} from "../components";

import { AiFillStar } from "react-icons/ai";
import { useGlobalContext } from "../context/context";
import Loading from "../components/HOCs/Loading";
import axios from "axios";
import { ToastContainer } from "react-toastify";

const SingleProduct = () => {
  const [selectedImage, setSelectedImage] = useState(1);
  const [tabs, setTabs] = useState(false);
  const { addToCart, hostUrl } = useGlobalContext();
  const [products, setProducts] = useState(() => {
    const sessionStorageProduct = sessionStorage.getItem("createdProducts");
    return sessionStorageProduct
      ? JSON.parse(sessionStorage.getItem("createdProducts"))
      : [];
  });

  const { id } = useParams();
  const { pathname } = useLocation();

  const getCreatedProduct = async () => {
    try {
      const newProducts = await axios.get(`${hostUrl}/api/product`);

      setProducts(newProducts.data);
      sessionStorage.setItem(
        `createdProducts`,
        JSON.stringify(newProducts.data)
      );
    } catch (error) {}
  };

  let product = products.filter((item) => item._id == id);
  let index = product[0];

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
    getCreatedProduct();
  }, []);

  return (
    <>
      <section className="single-product-con">
        <Header pathname={pathname} slug={id} />
        <PageHero page_title={"Single Product"} />
        <div className="single-product">
          <div className="single-product-image-con">
            <div>
              <div className="single-product-single-image-con">
                <img
                  src={index.image[selectedImage - 1].url}
                  alt={index?.name}
                />
              </div>
              <div className="single-product-other-images-con">
                {index?.image &&
                  index?.image.map((image, idx) => (
                    <div
                      key={idx}
                      id={idx}
                      className={`${
                        selectedImage == 1 && idx == 0
                          ? "selected-image click"
                          : selectedImage == 2 && idx == 1
                          ? "selected-image click"
                          : selectedImage == 3 && idx == 2
                          ? "selected-image click"
                          : selectedImage == 4 && idx == 3
                          ? "selected-image click"
                          : ""
                      }`}
                      onMouseEnter={changeActiveImage}
                      onClick={changeActiveImage}
                    >
                      <img src={image && image.url} id={idx} alt="" />
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="single-product-details-con">
            <h2>{index?.name}</h2>
            <h3>₦{index?.price}</h3>
            <div className="single-product-review-con">
              <div className="product-rate-con">
                {[1, 2, 3, 4, 5].map(() => (
                  <AiFillStar />
                ))}
              </div>
              <p>(1 Review)</p>
            </div>
            <p>{index.desc}</p>
            <div className="single-product-btn-con">
              <button
                className="single-product-btn"
                onClick={() => addToCart(index)}
              >
                add to cart
              </button>
            </div>
            <h4>
              Size: <span>{index?.sizes.map((size) => `${size}, `)}</span>
            </h4>
            <h4>
              CATEGORIES: <span>{index?.category}</span>
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
              Welcome to Orbital Fashion, your go-to source for unrivaled luxury
              clothing. We take pride in compiling a gorgeous selection of
              designer apparel and accessories that embodies class,
              sophistication, and classic style. Our products, which range from
              elegant evening gowns to tailored suits, are carefully
              hand-selected from leading design houses throughout the world to
              guarantee the best materials and exquisite workmanship. Every item
              in our collection reflects the newest fashions and exemplifies the
              inventiveness of forward-thinking designers. Our broad assortment
              of products meets all of your sartorial requirements, whether
              you're dressing for an event or just want to dress up your regular
              appearance. Each piece is a work of art that oozes luxury and
              sophistication, from elaborately beaded dresses to lavish handbags
              and spectacular jewelry. You have access to Orbital Fashion
            </p>
          </div>
          <Comments tabs={tabs} />
        </div>
        <RelatedProducts products={products.slice(0, 4)} />
      </section>
      <Newsletter pathname={pathname} slug={id} />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Loading(SingleProduct);
