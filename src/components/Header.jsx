import React, { useContext } from "react";
import { StateContext } from "../App";

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

const Header = ({ pathname }) => {
  const [cart, setCart] = useContext(StateContext);

  const toggleCart = () => {
    setCart(!cart);
  };
  return (
    <header className="header">
      <section className="header-hero">
        <div className="header-hero-image-con">
          <img src={headerHeroImage} alt="header-hero-image" />
        </div>
        <form className="header-hero-form">
          <input type="text" placeholder="Search Products" />
          <div>
            <p>Video Games</p>
            <AiOutlineDown />
          </div>
          <Button title={<AiOutlineSearch />} />
        </form>
        <div className="header-hero-links">
          <div>
            <Link className="link red-hover" to="">
              Login
            </Link>
            <Link className="link red-hover" to="">
              SignUp
            </Link>
          </div>
          <AiOutlineHeart className="red-hover" />
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
          <AiOutlineShoppingCart />
          <div className="hamburger-con">
            <RxHamburgerMenu />
          </div>
        </div>
      </section>
      <Nav pathname={pathname} />
      <SideCart cart={cart} toggleCart={toggleCart} />
    </header>
  );
};

export default Header;
