import React, { useEffect, useState } from "react";

import orbitalLogo from "../../assets/orbi.png";

import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";

import { BiUser } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useGlobalContext } from "../../context/context";

const AdminHeader = ({ pathname, slug }) => {
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
    switch (pathname) {
      case "/admin":
        if (accessToken) {
          setLoginStatus("Logout");
          setSignOutStatus("Signout");
        }
        break;
      case `/admin/product/edit/${slug}`:
        if (accessToken) {
          setLoginStatus("Logout");
          setSignOutStatus("Signout");
        }
        break;
      case "/":
        if (token) {
          setLoginStatus("Logout");
          setSignOutStatus("Signout");
        }
        break;
      case "/about":
        if (token) {
          setLoginStatus("Logout");
          setSignOutStatus("Signout");
        }
        break;
      case "/shop":
        if (token) {
          setLoginStatus("Logout");
          setSignOutStatus("Signout");
        }
        break;
      case "/contact":
        if (token) {
          setLoginStatus("Logout");
          setSignOutStatus("Signout");
        }
        break;
      case `/products/${slug}`:
        if (token) {
          setLoginStatus("Logout");
          setSignOutStatus("Signout");
        }
        break;
      case "/shopping-cart":
        if (token) {
          setLoginStatus("Logout");
          setSignOutStatus("Signout");
        }
        break;
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
          <img src={orbitalLogo} alt="" />
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
          <img className="header_logo" src={orbitalLogo} alt="" />
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
          <Link
            onClick={() => sessionStorage.clear("token")}
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
            {loginStatus}
          </Link>
        </ul>
      </section>
    </header>
  );
};

export default AdminHeader;
