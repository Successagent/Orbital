import React, { useContext } from "react";
import { urlFor } from "../lib/client";
import { useGlobalContext } from "../context/context";
import {
  AiOutlineArrowRight,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiFillStar,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { StateContext } from "../App";

const Products = ({ products, h2_title, pathname }) => {
  const { cart, setCart, addToCart } = useGlobalContext();

  return (
    <div className="product-sect">
      <div className="product-hero-con" data-visible={pathname}>
        <h2>{h2_title}</h2>
      </div>
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
              <Link to={`/products/${product.slug.current}`}>
                <div className="product-image-con">
                  <img src={urlFor(product.image[1])} />
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
  );
};
export default Products;
