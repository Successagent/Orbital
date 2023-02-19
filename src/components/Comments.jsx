import React from "react";
import {
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import reviewImage from "../assets/c1.webp";

const Comments = ({ tabs }) => {
  return (
    <div className={`tabs descrp-tab ${tabs == true ? "active-tab" : ""}`}>
      <div>
        <div>
          <img src={reviewImage} alt="" />
          <h3>Tomas Doe</h3>
          <p>Developer</p>
          <div className="product-rate-con">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra
          amet, sodales faucibus nibh. Vivamus amet potenti ultricies nunc
          gravida duis. Nascetur scelerisque massa sodales egestas augue neque
          euismod scelerisque viverra.
        </p>
      </div>
      <div>
        <div>
          <img src={reviewImage} alt="" />
          <h3>Tomas Doe</h3>
          <p>Developer</p>
          <div className="product-rate-con">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra
          amet, sodales faucibus nibh. Vivamus amet potenti ultricies nunc
          gravida duis. Nascetur scelerisque massa sodales egestas augue neque
          euismod scelerisque viverra.
        </p>
      </div>
      <div>
        <div>
          <img src={reviewImage} alt="" />
          <h3>Tomas Doe</h3>
          <p>Developer</p>
          <div className="product-rate-con">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra
          amet, sodales faucibus nibh. Vivamus amet potenti ultricies nunc
          gravida duis. Nascetur scelerisque massa sodales egestas augue neque
          euismod scelerisque viverra.
        </p>
      </div>
    </div>
  );
};

export default Comments;
