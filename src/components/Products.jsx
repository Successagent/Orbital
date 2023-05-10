import React from "react";

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

  return (
    <>
      <div className="product-sect">
        <div className="product-hero-con" data-visible={pathname}>
          <h2>{h2_title}</h2>
          <div>
            <p>Trousers</p>
            <p>Shoes</p>
            <p>Shirts</p>
            <p>Bags</p>
            <p>Jewelries</p>
            <p>Cosmetics</p>
            <p>Watch</p>
            <p>Shorts</p>
            <p>Joggers</p>
          </div>
        </div>
        <div className="product-con">
          {loading ? (
            <ProductSkeleton />
          ) : (
            products.map((product, idx) => (
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
