import React from "react";
import { useLocation } from "react-router-dom";
import { Footer, Header, Newsletter, PageHero, Products } from "../components";
import productImage from "../assets/shopping.png";

const Shop = () => {
  const { pathname } = useLocation();
  const products = [
    {
      src: productImage,
      status: "-10%",
      productName: "Bluetooth Speaker New Without Cable",
      category: "video & musics",
      price: "160.00",
    },
    {
      src: productImage,
      status: "new",
      productName: "Bluetooth Speaker New Without Cable",
      category: "video & musics",
      price: "160.00",
    },
    {
      src: productImage,
      status: "-10%",
      productName: "Bluetooth Speaker New Without Cable",
      category: "video & musics",
      price: "160.00",
    },
    {
      src: productImage,
      status: "new",
      productName: "Bluetooth Speaker New Without Cable",
      category: "video & musics",
      price: "160.00",
    },
    {
      src: productImage,
      status: "-10%",
      productName: "Bluetooth Speaker New Without Cable",
      category: "video & musics",
      price: "160.00",
    },
    {
      src: productImage,
      status: "new",
      productName: "Bluetooth Speaker New Without Cable",
      category: "video & musics",
      price: "160.00",
    },
    {
      src: productImage,
      status: "-10%",
      productName: "Bluetooth Speaker New Without Cable",
      category: "video & musics",
      price: "160.00",
    },
    {
      src: productImage,
      status: "new",
      productName: "Bluetooth Speaker New Without Cable",
      category: "video & musics",
      price: "160.00",
    },
    {
      src: productImage,
      status: "-10%",
      productName: "Bluetooth Speaker New Without Cable",
      category: "video & musics",
      price: "160.00",
    },
    {
      src: productImage,
      status: "new",
      productName: "Bluetooth Speaker New Without Cable",
      category: "video & musics",
      price: "160.00",
    },
    {
      src: productImage,
      status: "-10%",
      productName: "Bluetooth Speaker New Without Cable",
      category: "video & musics",
      price: "160.00",
    },
    {
      src: productImage,
      status: "new",
      productName: "Bluetooth Speaker New Without Cable",
      category: "video & musics",
      price: "160.00",
    },
  ];
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
