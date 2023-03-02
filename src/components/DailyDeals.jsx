import React, { useState } from "react";
import {
  AiFillStar,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";

import { urlFor } from "../lib/client";

const DailyDeals = ({ dealsProducts, index }) => {
  const { addToCart } = useGlobalContext();
  return (
    <div className="flash-sales-item-one-main">
      {dealsProducts.map((item, idx) => {
        return (
          <div
            key={idx}
            className={` ${
              index == 1 && idx == 0
                ? "active-flash-sale"
                : index == 2 && idx == 1
                ? "active-flash-sale"
                : index == 3 && idx == 2
                ? "active-flash-sale"
                : index == 4 && idx == 3
                ? "active-flash-sale"
                : ""
            }`}
          >
            <div className="flash-sales-item-one-main-details-con">
              <div className="flash-sales-item-one-main-details-con-time-sect">
                <div>
                  <div>
                    <h3>4</h3>
                  </div>
                  <h3>HRS</h3>
                </div>

                <div>
                  <div>
                    <h3>14</h3>
                  </div>
                  <h3>MINS</h3>
                </div>

                <div>
                  <div>
                    <h3>4</h3>
                  </div>
                  <h3>SECS</h3>
                </div>
              </div>
              <p className="product-name-text">{dealsProducts && item.name}</p>
              <h3 className="product-price">${dealsProducts && item.price}</h3>
              <div className="product-rate-con">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
            <Link to={`/products/${item.id}`}>
              <div className="flash-sales-item-one-main-image-con">
                {item.src && (
                  <img
                    className="flash-sales-item-one-img"
                    src={item.src[0]}
                    alt=""
                  />
                )}
              </div>
            </Link>
            <div className="flash-sales-item-one-main-cart-con">
              <div className="product-svg-con">
                <AiOutlineHeart />
              </div>
              <div className="product-svg-con">
                <AiOutlineShoppingCart onClick={() => addToCart(item)} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DailyDeals;
