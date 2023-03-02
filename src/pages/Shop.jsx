import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { Footer, Header, Newsletter, PageHero, Products } from "../components";
import { useGlobalContext } from "../context/context";

const Shop = ({ products }) => {
  const { pathname } = useLocation();

  const { activePage } = useGlobalContext();

  return (
    <>
      <section className="shop-sect">
        <Header pathname={pathname} />
        <PageHero page_title="Products" />
        <div className="store-sect">
          <Products products={products} pathname={pathname} />
        </div>
        <div className="pagination">
          <div className={`${activePage == 1 ? "active-pagination" : ""}`}>
            <p>1</p>
          </div>
          <div className={`${activePage == 2 ? "active-pagination" : ""}`}>
            <p>2</p>
          </div>
          <div className={`${activePage == 3 ? "active-pagination" : ""}`}>
            <p>3</p>
          </div>
          <div className={`${activePage == 4 ? "active-pagination" : ""}`}>
            <MdNavigateNext></MdNavigateNext>
          </div>
        </div>
      </section>
      <Newsletter pathname={pathname} />
      <Footer />
    </>
  );
};

export default Shop;
