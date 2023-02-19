import React, { useEffect } from "react";
import {
  AiFillStar,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";

import { urlFor } from "../lib/client";

const DailyDeals = ({ dealsProducts }) => {
  useEffect(() => {}, []);
  return (
    <div className="flash-sales-item-one-main">
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
        <p className="product-name-text">
          {dealsProducts && dealsProducts[0]?.name}
        </p>
        <h3 className="product-price">
          ${dealsProducts && dealsProducts[0]?.price}
        </h3>
        <div className="product-rate-con">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
      </div>
      <div className="flash-sales-item-one-main-image-con">
        {dealsProducts[0]?.image && (
          <img
            className="flash-sales-item-one-img"
            src={urlFor(dealsProducts[0]?.image[0])}
            alt=""
          />
        )}
      </div>
      <div className="flash-sales-item-one-main-cart-con">
        <div className="product-svg-con">
          <AiOutlineHeart />
        </div>
        <div className="product-svg-con">
          <AiOutlineShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default DailyDeals;
