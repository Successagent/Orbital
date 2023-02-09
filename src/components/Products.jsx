import React from "react";
import { useParams } from "react-router-dom";

import {
  AiOutlineArrowRight,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiFillStar,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Products = ({ products, h2_title, pathname }) => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="product-sect">
      <div className="product-hero-con" data-visible={pathname}>
        <h2>{h2_title}</h2>
        <div>
          <p className="active-border">Audio & Videos</p>
          <p>Gaming</p>
          <p>Headphone</p>
        </div>
      </div>
      <div className="product-con">
        {products.map((product, idx) => (
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
  );
};
export default Products;
