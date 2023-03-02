import React, { useState } from "react";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { urlFor } from "../lib/client";

const GridProducts = ({ pathname, products }) => {
  const { addToCart } = useGlobalContext();

  return (
    <div className="flash-sales-item-two-grid-products">
      {(pathname === "/" && products.slice(0, 6)).map((product, idx) => (
        <div key={idx}>
          <Link to={`/products/${product.slug.current}`}>
            <div>
              <img src={urlFor(product.image[1])} alt="" />
            </div>
          </Link>
          <div>
            <p className="product-name-text">{product.name}</p>
            <h3 className="product-price">${product.price}</h3>
            <div className="flash-sales-grid-flex">
              <div className="product-rate-con">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <div>
                <AiOutlineShoppingCart
                  style={{ cursor: "pointer" }}
                  onClick={() => addToCart(product)}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridProducts;
