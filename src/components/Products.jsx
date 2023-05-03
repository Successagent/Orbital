import React from "react";

import { useGlobalContext } from "../context/context";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiFillStar,
} from "react-icons/ai";

import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Products = ({ h2_title, pathname }) => {
  const { addToCart, products } = useGlobalContext();

  return (
    <>
      <div className="product-sect">
        {/* <div className="product-hero-con" data-visible={pathname}>
          <h2>{h2_title}</h2>
          <div>
            <p id="polo-shirts">Polo Shirts</p>
            <p id="t-shirts">T-Shirts</p>
            <p id="long-shirts">Long Shirts</p>
          </div>
        </div> */}
        <div className="product-con">
          {products.map((product, idx) => (
            <div key={idx} className="product-item">
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
                <Link to={`/products/${product._id}`}>
                  <div className="product-image-con">
                    <img src={product.image[3].url} alt={product.name} />
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
          ))}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default Products;
