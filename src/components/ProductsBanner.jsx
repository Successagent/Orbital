import React from "react";
import Button from "./Button";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProductsBanner = ({ sale_text, name_text }) => {
  return (
    <div className="intro-products">
      <div>
        <div className="intro-products-text-con">
          <p>{sale_text}</p>
          <h2>{name_text}</h2>
          <Link to="/shop">
            <button className="btn">
              Shop Now <AiOutlineArrowRight />
            </button>
          </Link>
        </div>
        <div className="bg"></div>
      </div>
      <div>
        <div className="intro-products-text-con">
          <p>{sale_text}</p>
          <h2>{name_text}</h2>
          <Link to="/shop">
            <button className="btn">
              Shop Now <AiOutlineArrowRight />
            </button>
          </Link>
        </div>
        <div className="bg"></div>
      </div>
      <div>
        <div className="intro-products-text-con">
          <p>{sale_text}</p>
          <h2>{name_text}</h2>
          <Link to="/shop">
            <button className="btn">
              Shop Now <AiOutlineArrowRight />
            </button>
          </Link>
        </div>
        <div className="bg"></div>
      </div>
    </div>
  );
};

export default ProductsBanner;
