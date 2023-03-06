import React, { useState } from "react";
import { urlFor } from "../lib/client";
import { useGlobalContext } from "../context/context";
import {
  AiOutlineArrowRight,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiFillStar,
} from "react-icons/ai";
import { useTrail, animated } from "react-spring";
import { Link } from "react-router-dom";

import { products } from "../datas/product";

const Products = ({ h2_title, pathname }) => {
  const { cart, setCart, addToCart } = useGlobalContext();
  const [displayProduct, setDisplayProduct] = useState([]);

  const poloShirtArr = products.filter(
    (item) => item.category === "Polo Sleeves"
  );
  const tShirtsArr = products.filter((item) => item.category == "T-Sleeves");
  const longShirt = products.filter((item) => item.category === "Long Shirt");

  const filterFunct = (e) => {
    if (e.target.id === "polo-shirts") {
      setDisplayProduct(poloShirtArr);
    }
    if (e.target.id === "t-shirts") {
      setDisplayProduct(tShirtsArr);
    }
    if (e.target.id === "long-shirts") {
      setDisplayProduct(longShirt);
    }
  };

  const trail = useTrail(products.length, {
    from: { transform: "translate3d(0, -40px,0)" },
    to: { transform: "translate3d(0, 0,0)" },
  });

  return (
    <div className="product-sect">
      <div className="product-hero-con" data-visible={pathname}>
        <h2>{h2_title}</h2>
        <div>
          <p id="polo-shirts" onClick={filterFunct}>
            Polo Shirts
          </p>
          <p id="t-shirts" onClick={filterFunct}>
            T-Shirts
          </p>
          <p id="long-shirts" onClick={filterFunct}>
            Long Shirts
          </p>
        </div>
      </div>
      <div className="product-con">
        {(displayProduct[0]?.category === "T-Sleeves"
          ? tShirtsArr
          : displayProduct[0]?.category === "Polo Sleeves"
          ? poloShirtArr
          : displayProduct[0]?.category === "Long Shirt"
          ? longShirt
          : products
        ).map((product, idx) => (
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
              <Link to={`/products/${product.id}`}>
                <div className="product-image-con">
                  <img src={product.src[1]} alt={product.name} />
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
