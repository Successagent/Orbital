import React from "react";

import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const ProductsBanner = () => {
  const { products } = useGlobalContext();
  const bannerProducts = products.slice(3, 6);

  return (
    <div className="intro-products">
      {bannerProducts.map((item, idx) => (
        <div key={idx}>
          <div className="intro-products-text-con">
            <p>{item.name}</p>
            <h2>{item.shortDesc}</h2>
            <Link to={`/products/${item._id}`}>
              <button className="btn">
                Shop Now <AiOutlineArrowRight />
              </button>
            </Link>
          </div>
          <div
            style={{
              backgroundImage: `url(${item.image[2].url})`,
            }}
            className="bg"
          ></div>
        </div>
      ))}
    </div>
  );
};

export default ProductsBanner;
