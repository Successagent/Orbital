import React from "react";
import { Link } from "react-router-dom";
import { FcCallback } from "react-icons/fc";
import { BsFilterLeft } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";

const Nav = ({ pathname }) => {
  return (
    <nav className="header-nav">
      <div>
        <button className="btn">
          <BsFilterLeft />
          All Departments
          <AiOutlineDown />
        </button>
      </div>
      <ul>
        <Link to="">Home</Link>
        <Link to="">About</Link>
        <Link to="">Shop</Link>
        <Link to="">About</Link>
        <Link to="">About</Link>
        <Link to="">About</Link>
      </ul>
      <div
        className="nav-call-sect"
        style={{ display: `${pathname == "/about" || "/shop" ? "none" : ""}` }}
      >
        <FcCallback />
        <div>
          <p>Call us 24/7</p>
          <p>
            <span>07088613251</span>
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
