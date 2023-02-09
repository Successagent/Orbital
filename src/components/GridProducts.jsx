import React from "react";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { products } from "../datas/product";

const GridProducts = ({ pathname }) => {
  return (
    <div className="flash-sales-item-two-grid-products">
      {(pathname === "/" && products.slice(0, 6)).map((product, idx) => (
        <Link to={`/products/${product.id}`} key={idx}>
          <div>
            <div>
              <img src={product.src[0]} alt="" />
            </div>
            <div>
              <p className="product-name-text">{product.productName}</p>
              <h3 className="product-price">{product.price}</h3>
              <div className="flash-sales-grid-flex">
                <div className="product-rate-con">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <div>
                  <AiOutlineShoppingCart />
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default GridProducts;
