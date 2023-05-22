import React, { useState } from "react";

import { useGlobalContext } from "../context/context";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiFillStar,
} from "react-icons/ai";

import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ProductSkeleton from "./ProductSkeleton";

const Products = ({ h2_title, pathname }) => {
  const { addToCart, products, loading } = useGlobalContext();
  const [active, setActive] = useState("");
  let shoes = products.filter((product) => product.category === "Shoes");
  let joggers = products.filter((product) => product.category === "Joggers");
  let shirts = products.filter((product) => product.category === "Clothes");
  let watches = products.filter((product) => product.category === "Watch");
  let jewelries = products.filter(
    (product) => product.category === "Jewelries"
  );
  let shorts = products.filter((product) => product.category === "Shorts");
  let trousers = products.filter((product) => product.category === "Trousers");
  let cosmetics = products.filter(
    (product) => product.category === "Cosmetics"
  );
  let bags = products.filter((product) => product.category === "Bags");

  const filterProducts = (e) => {
    if (e.target.innerText == "Trousers") {
      setActive(e.target.innerText);
    }
    if (e.target.innerText == "Shorts") {
      setActive(e.target.innerText);
    }
    if (e.target.innerText == "Shoes") {
      setActive(e.target.innerText);
    }
    if (e.target.innerText == "Bags") {
      setActive(e.target.innerText);
    }
    if (e.target.innerText == "Watch") {
      setActive(e.target.innerText);
    }
    if (e.target.innerText == "Joggers") {
      setActive(e.target.innerText);
    }
    if (e.target.innerText == "Shirts") {
      setActive("Clothes");
    }
    if (e.target.innerText == "Jewelries") {
      setActive(e.target.innerText);
    }
    if (e.target.innerText == "Cosmetics") {
      setActive(e.target.innerText);
    } else if (e.target.innerText === "All") {
      setActive("");
    }
  };

  return (
    <>
      <div className="product-sect">
        <div className="product-hero-con" data-visible={pathname}>
          <h2>{h2_title}</h2>
          <div>
            <p onClick={(e) => filterProducts(e)}>Trousers</p>
            <p onClick={(e) => filterProducts(e)}>Shoes</p>
            <p onClick={(e) => filterProducts(e)}>Shirts</p>
            <p onClick={(e) => filterProducts(e)}>Bags</p>
            <p onClick={(e) => filterProducts(e)}>Jewelries</p>
            <p onClick={(e) => filterProducts(e)}>Cosmetics</p>
            <p onClick={(e) => filterProducts(e)}>Watch</p>
            <p onClick={(e) => filterProducts(e)}>Shorts</p>
            <p onClick={(e) => filterProducts(e)}>Joggers</p>
            <p onClick={(e) => filterProducts(e)}>All</p>
          </div>
        </div>
        <div className="product-con">
          {loading ? (
            <ProductSkeleton />
          ) : (
            (active === "Trousers"
              ? trousers
              : active === "Shoes"
              ? shoes
              : active === "Clothes"
              ? shirts
              : active === "Bags"
              ? bags
              : active === "Jewelries"
              ? jewelries
              : active === "Cosmetics"
              ? cosmetics
              : active === "Watch"
              ? watches
              : active === "Shorts"
              ? shorts
              : active === "Joggers"
              ? joggers
              : active === ""
              ? products
              : ""
            ).map((product, idx) => (
              <div key={idx} className="product-item">
                <button
                  className={`status ₦
{
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
                  <Link to={`/products/${product._id}`}>
                    <div className="product-image-con">
                      <img src={product.image[1].url} alt={product.name} />
                    </div>
                  </Link>
                  <div className="product-search-con">
                    <div className="product-svg-con" id="svg-con-1">
                      <AiOutlineHeart />
                    </div>
                    <div
                      className="product-svg-con"
                      id="svg-con-2"
                      onClick={() => addToCart(product)}
                    >
                      <AiOutlineShoppingCart />
                    </div>
                  </div>
                </div>
                <div className="product-item-two-con">
                  <p className="product-name-text">{product.name}</p>
                  <h3 className="product-price">₦{product.price}</h3>
                  <div className="product-rate-con">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default Products;
