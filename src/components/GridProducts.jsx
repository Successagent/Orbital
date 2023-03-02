import React, { useState } from "react";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { products } from "../datas/product";
import { urlFor } from "../lib/client";

const GridProducts = ({ pathname }) => {
  const { addToCart } = useGlobalContext();

  return (
    <div className="flash-sales-item-two-grid-products">
      {(pathname === "/" && products.slice(0, 6)).map((product, idx) => (
        <div key={idx}>
          <Link to={`/products/${product.id}`}>
            <div>
              <img src={product.src[1]} alt={product.name} />
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
