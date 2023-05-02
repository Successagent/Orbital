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

  const oppenNav = () => {
    setVisible(!visible);
  };

  const logOut = () => {
    sessionStorage.removeItem("admin");
  };

  const toggleCart = () => {
    setOpenCart(!openCart);
  };

  return (
    <header className="header">
      <section className="header-hero">
        <div className="header-hero-image-con">
          <img src={orbitalLogo} alt="" />
        </div>
        <ul>
          <Link to="/admin">Dashboard</Link>
          <Link to="/customers">Customers</Link>
          <Link to="/orders">Orders</Link>
        </ul>
        <div className="header-hero-links">
          <div>
            <Link
              onClick={logOut}
              className="link red-hover"
              to={`/admin_login`}
            >
              {accessToken ? "Logout" : "Login"}
            </Link>
            <Link onClick={logOut} className="link red-hover" to={``}>
              {accessToken ? "Signout" : "Signin"}
            </Link>
          </div>
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
          <Link to="/admin">Dashboard</Link>
          <Link to="/customers">Customers</Link>
          <Link to="/orders">Orders</Link>
          <Link onClick={logOut} to={`/admin_login`}>
            {accessToken ? "Logout" : "Login"}
          </Link>
        </ul>
      </section>
    </header>
  );
};

export default AdminHeader;
