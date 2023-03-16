import React, { useState } from "react";
import {
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { MdNavigateNext } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { Footer, Header, Newsletter, PageHero } from "../components";
import Loading from "../components/HOCs/Loading";
import { useGlobalContext } from "../context/context";

const Shop = () => {
  const { pathname } = useLocation();
  const [activePage, setActivePage] = useState(1);
  const { addToCart } = useGlobalContext();
  const products = JSON.parse(sessionStorage.getItem("createdProducts"));

  const changeActivePage = (e) => {
    if (e.target.className === "active-1") {
      setActivePage(1);
    }
    if (e.target.className === "active-2") {
      setActivePage(2);
    }
    if (e.target.className === "active-3") {
      setActivePage(3);
    }
    if (e.target.className === "active-all") {
      setActivePage(4);
    }
  };

  return (
    <>
      <section className="shop-sect">
        <Header pathname={pathname} />
        <PageHero page_title="Products" />
        <div className="store-sect">
          <div className="product-con">
            {(activePage === 1
              ? products.slice(0, 8)
              : activePage === 2
              ? products.slice(7, 15)
              : activePage === 3
              ? products.slice(14, 22)
              : activePage === 4
              ? products
              : ""
            ).map((product, idx) => (
              <div key={idx} className="product-item">
                <button
                  className={`status ${
                    product.status === "-10%"
                      ? "status-btn-red"
                      : product.status == "new"
                      ? "status-btn-green"
                      : ""
                  }`}
                >
                  {product.status}
                </button>
                <div className="product-item-first-con">
                  <Link to={`/products/${product.id}`}>
                    <div className="product-image-con">
                      <img src={product.image[0].url} alt={product.name} />
                    </div>
                  </Link>
                  <div className="product-search-con">
                    <div className="product-svg-con" id="svg-con-1">
                      <AiOutlineHeart />
                    </div>
                    <div
                      className="product-svg-con"
                      id="svg-con-2"
                      onClick={() => addToCart(product)}
                    >
                      <AiOutlineShoppingCart />
                    </div>
                  </div>
                </div>
                <div className="product-item-two-con">
                  <p className="product-name-text">{product.name}</p>
                  <h3 className="product-price">${product.price}</h3>
                  <div className="product-rate-con">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pagination">
          <div className={`${activePage == 1 ? "active-pagination" : ""}`}>
            <p className="active-1" onClick={changeActivePage}>
              1
            </p>
          </div>
          <div className={`${activePage == 2 ? "active-pagination" : ""}`}>
            <p className="active-2" onClick={changeActivePage}>
              2
            </p>
          </div>
          <div className={`${activePage == 3 ? "active-pagination" : ""}`}>
            <p className="active-3" onClick={changeActivePage}>
              3
            </p>
          </div>
          <div className={`${activePage == 4 ? "active-pagination" : ""}`}>
            <p className="active-all" onClick={changeActivePage}>
              All
            </p>
          </div>
        </div>
      </section>
      <Newsletter pathname={pathname} />
      <Footer />
    </>
  );
};

export default Loading(Shop);
