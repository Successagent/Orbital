import React from "react";
import {
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { urlFor } from "../lib/client";

const RelatedProducts = ({ products }) => {
  return (
    <div className="related-product-con">
      <h2>Related Products</h2>
      <div className="related-products-container">
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
              <div className="product-image-con">
                <Link to={`/products/${product._id}`}>
                  <img src={product.image[1].url} alt={product.productName} />
                </Link>
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
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
