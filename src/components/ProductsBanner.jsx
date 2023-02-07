import React from "react";
import Button from "./Button";
import { AiOutlineArrowRight } from "react-icons/ai";

const ProductsBanner = ({ sale_text, name_text }) => {
  return (
    <div className="intro-products">
      <div>
        <div className="intro-products-text-con">
          <p>{sale_text}</p>
          <h2>{name_text}</h2>
          <Button title="Shop Now" icon={<AiOutlineArrowRight />} />
        </div>
        <div className="bg"></div>
      </div>
      <div>
        <div className="intro-products-text-con">
          <p>{sale_text}</p>
          <h2>{name_text}</h2>
          <Button title="Shop Now" icon={<AiOutlineArrowRight />} />
        </div>
        <div className="bg"></div>
      </div>
      <div>
        <div className="intro-products-text-con">
          <p>{sale_text}</p>
          <h2>{name_text}</h2>
          <Button title="Shop Now" icon={<AiOutlineArrowRight />} />
        </div>
        <div className="bg"></div>
      </div>
    </div>
  );
};

export default ProductsBanner;
