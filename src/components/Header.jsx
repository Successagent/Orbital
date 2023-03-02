import React, { useContext, useState } from "react";
import { useGlobalContext } from "../context/context";

import { Link } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineDown,
} from "react-icons/ai";

import { BiUser } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";

import headerHeroImage from "../assets/logo.webp";
import Button from "./Button";
import Nav from "./Nav";
import SideCart from "./SideCart";
import { FaTimes } from "react-icons/fa";

const Header = ({ pathname, slug }) => {
  const { openCart, setOpenCart, cart } = useGlobalContext();
  const [visible, setVisible] = useState(false);

  const oppenNav = () => {
    setVisible(!visible);
  };

  const toggleCart = () => {
    setOpenCart(!openCart);
  };
  return (
    <header className="header">
      <section className="header-hero">
        <div className="header-hero-image-con">
          <h1 className="header-style">Orbital</h1>
        </div>
        <form
          className={`header-hero-form ${
            pathname === "/about" ||
            pathname === "/shop" ||
            pathname === "/contact" ||
            pathname === `/products/${slug}`
              ? "radius-border"
              : ""
          }`}
        >
          <input type="text" placeholder="Search Products" />
          <div>
            <p>Polo Clothes</p>
            <AiOutlineDown />
          </div>
          <Button title={<AiOutlineSearch />} />
        </form>
        <div className="header-hero-links">
          <div>
            <Link className="link red-hover" to="/login">
              Login
            </Link>
            <Link className="link red-hover" to="/register">
              SignUp
            </Link>
          </div>
          <AiOutlineHeart className="red-hover" />
          <div
            className={`cart-value-con ${
              pathname === "/about" ||
              pathname === "/shop" ||
              pathname === "/contact" ||
              pathname === "/shopping-cart" ||
              pathname === `/products/${slug}`
                ? "cart-value-con-two"
                : ""
            }`}
          >
            <p className="cart-value">{cart?.length}</p>
          </div>
          <AiOutlineShoppingCart className="red-hover" onClick={toggleCart} />
        </div>
      </section>
      <section
        className="mobile-header"
        style={{ padding: `${pathname !== "/" ? "20px" : ""}` }}
      >
        <div className="mobile-header-image-con">
          <img src={headerHeroImage} alt="" />
        </div>
        <div className="mobile-header-icons-con">
          <AiOutlineSearch />
          <BiUser />
          <AiOutlineShoppingCart onClick={toggleCart} />
          <div className="hamburger-con">
            <RxHamburgerMenu onClick={oppenNav} />
          </div>
        </div>
        <ul
          className={`mobile-nav ${
            visible == false ? "close-nav" : "open-nav"
          }`}
        >
          <FaTimes onClick={oppenNav} />
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </section>
      <Nav pathname={pathname} />
      <SideCart openCart={openCart} toggleCart={toggleCart} />
    </header>
  );
};

export default Header;
