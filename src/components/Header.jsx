import React, { useState } from "react";
import { useGlobalContext } from "../context/context";

import { Link } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineClose,
} from "react-icons/ai";

import { BiUser } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import SideCart from "./SideCart";

const Header = ({ pathname, slug, login }) => {
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
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
        </ul>
        <div className="header-hero-links">
          <div>
            <Link
              className="link red-hover"
              to={`${
                pathname === "/admin" ||
                pathname === "/admin_login" ||
                pathname === "/admin_register"
                  ? "/admin_login"
                  : "/login"
              }`}
            >
              {pathname === "/admin" ? "Logout" : "Login"}
            </Link>

            <Link
              className="link red-hover"
              to={`${
                pathname === "/admin" ||
                pathname == "/admin_login" ||
                pathname == "/admin_register"
                  ? "/admin_register"
                  : "/register"
              }`}
            >
              {pathname == "/admin" ? "Sign Out" : "Sign In"}
            </Link>
          </div>
          <div
            style={{
              display: `${
                pathname === "/admin" ||
                pathname === "/admin_login" ||
                pathname === "/admin_register"
                  ? "none"
                  : ""
              }`,
            }}
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
          <AiOutlineShoppingCart
            style={{
              display: `${
                pathname === "/admin" ||
                pathname === "/admin_login" ||
                pathname === "/admin_register"
                  ? "none"
                  : ""
              }`,
            }}
            className="red-hover"
            onClick={toggleCart}
          />
        </div>
      </section>
      <section
        className="mobile-header"
        style={{ padding: `${pathname !== "/" ? "20px" : ""}` }}
      >
        <div className="mobile-header-image-con">
          <h1 className="header-style">Orbital</h1>
        </div>
        <div className="mobile-header-icons-con">
          <Link style={{ color: "#4b4b4b" }} to={"/register"}>
            <BiUser />
          </Link>

          <AiOutlineShoppingCart
            onClick={toggleCart}
            className="shoppin-cart"
          />
          <div className="cart-value-con">
            <p className="cart-value">{cart.length}</p>
          </div>
          <div className="hamburger-con">
            <RxHamburgerMenu onClick={oppenNav} />
          </div>
        </div>
        <ul
          className={`mobile-nav ${
            visible == false ? "close-nav" : "open-nav"
          }`}
        >
          <AiOutlineClose onClick={oppenNav} />
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </section>
      <SideCart openCart={openCart} toggleCart={toggleCart} />
    </header>
  );
};

export default Header;
