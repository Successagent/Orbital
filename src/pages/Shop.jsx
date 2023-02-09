import React from "react";
import { useLocation } from "react-router-dom";
import { Footer, Header, Newsletter, PageHero, Products } from "../components";
import { products } from "../datas/product";

const Shop = () => {
  const { pathname } = useLocation();

  return (
    <>
      <section className="shop-sect">
        <Header pathname={pathname} />
        <PageHero page_title="Products" />
        <div className="store-sect">
          <Products products={products} pathname={pathname} />
        </div>
      </section>
      <Newsletter pathname={pathname} />
      <Footer />
    </>
  );
};

export default Shop;
