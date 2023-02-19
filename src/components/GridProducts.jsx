import React, { useState } from "react";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { urlFor } from "../lib/client";

const GridProducts = ({ pathname, products }) => {
  const [date, setDate] = useState(new Date());
  const addTime = (hours, minutes, seconds) => {
    let newDate = new Date(date);
    newDate.setHours(newDate.getHours() + hours);
    newDate.setMinutes(newDate.getMinutes() + minutes);
    newDate.setSeconds(newDate.getSeconds() + seconds);
    setDate(newDate);
    console.log(hours);
  };

  return (
    <div className="flash-sales-item-two-grid-products">
      {(pathname === "/" && products.slice(0, 6)).map((product, idx) => (
        <Link to={`/products/${product.slug.current}`} key={idx}>
          <div>
            <div>
              <img src={urlFor(product.image[1])} alt="" />
            </div>
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
