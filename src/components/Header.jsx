import React, { useEffect, useState } from "react";
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

const Header = ({ pathname, slug }) => {
  const { openCart, setOpenCart, cart } = useGlobalContext();
  const [visible, setVisible] = useState(false);
  const token = JSON.parse(sessionStorage.getItem("token"));
  const accessToken = JSON.parse(sessionStorage.getItem("admin"));
  const [loginStatus, setLoginStatus] = useState("Login");
  const [signOutStatus, setSignOutStatus] = useState("Sign in");

  const oppenNav = () => {
    setVisible(!visible);
  };

  const toggleLoginAndSignOut = () => {
    if (
      token &&
      (pathname === "/" ||
        "/about" ||
        "/shop" ||
        `/products/${slug}` ||
        "/contact" ||
        "/shopping-cart")
    ) {
      setLoginStatus("Logout");
      setSignOutStatus("Sign Out");
    }

    if (pathname === "/admin" || pathname === "/admin_login") {
      setLoginStatus("Login");
      setSignOutStatus("Sign in");
    }

    if (
      accessToken &&
      (pathname === "/admin" || `/admin/products/edit/${slug}`)
    ) {
      setLoginStatus("Logout");
      setSignOutStatus("Sign Out");
    }
  };

  const logOut = () => {
    if (
      pathname === "/about" ||
      pathname === "/" ||
      pathname === "/shop" ||
      pathname === "/contact" ||
      pathname === `/products/${slug}` ||
      pathname === "/shopping-cart"
    ) {
      sessionStorage.removeItem("token");
    }
    if (pathname === "/admin" || pathname === `/admin/products/edit/${slug}`) {
      sessionStorage.removeItem("admin");
    }
  };

  const toggleCart = () => {
    setOpenCart(!openCart);
  };

  useEffect(() => {
    toggleLoginAndSignOut();
  }, []);
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
              onClick={logOut}
              className="link red-hover"
              to={`${
                pathname === "/admin" ||
                pathname === "/admin_login" ||
                pathname === "/admin_register"
                  ? "/admin_login"
                  : "/login"
              }`}
            >
              {loginStatus}
            </Link>

            <Link
              onClick={logOut}
              className="link red-hover"
              to={`${
                pathname === "/admin" ||
                pathname == "/admin_login" ||
                pathname == "/admin_register"
                  ? "/admin_register"
                  : token
                  ? ""
                  : "/register"
              }`}
            >
              {signOutStatus}
            </Link>
          </div>
          <div
            style={{
              display: `${
                pathname === "/admin" ||
                pathname === "/admin_login" ||
                pathname === "/admin_register" ||
                pathname === `/admin/product/edit/${slug}`
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
            <p className="cart-value">{cart ? cart?.length : 0}</p>
          </div>
          <AiOutlineShoppingCart
            style={{
              display: `${
                pathname === "/admin" ||
                pathname === "/admin_login" ||
                pathname === "/admin_register" ||
                pathname === `/admin/product/edit/${slug}`
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
          <Link
            style={{ color: "#4b4b4b" }}
            to={`${
              pathname === "/admin" ||
              pathname === "/admin_login" ||
              pathname === "/admin_register"
                ? "/admin_login"
                : "/login"
            }`}
          >
            <BiUser />
          </Link>

          <AiOutlineShoppingCart
            onClick={toggleCart}
            className="shoppin-cart"
          />
          <div className="cart-value-con">
            <p className="cart-value">{cart ? cart?.length : 0}</p>
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
          <Link onClick={() => sessionStorage.clear("token")} to={`/login`}>
            {loginStatus}
          </Link>
        </ul>
      </section>
      <SideCart openCart={openCart} toggleCart={toggleCart} />
    </header>
  );
};

export default Header;
