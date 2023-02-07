import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineDown,
} from "react-icons/ai";

import headerHeroImage from "../assets/logo.webp";
import Button from "./Button";
import Nav from "./Nav";

const Header = ({ pathname }) => {
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
          <AiOutlineShoppingCart className="red-hover" />
        </div>
      </section>
      <Nav pathname={pathname} />
    </header>
  );
};

export default Header;
