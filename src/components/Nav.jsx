import React from "react";
import { Link } from "react-router-dom";
import { FcCallback } from "react-icons/fc";
import { BsFilterLeft, BsHeadset } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { useGlobalContext } from "../context/context";

const Nav = ({ pathname }) => {
  const { department, toggleDepartmentCon } = useGlobalContext();
  return (
    <nav className="header-nav">
      <div>
        <button className="btn" onClick={toggleDepartmentCon}>
          <BsFilterLeft />
          All Departments
          <AiOutlineDown />
        </button>
        <div
          className={`department-con ${
            department == false ? "close-department" : "open-department"
          }`}
        >
          <div>
            <BsHeadset></BsHeadset>
            <p>HeadSet</p>
          </div>
          <div>
            <BsHeadset></BsHeadset>
            <p>HeadSet</p>
          </div>
          <div>
            <BsHeadset></BsHeadset>
            <p>HeadSet</p>
          </div>{" "}
          <div>
            <BsHeadset></BsHeadset>
            <p>HeadSet</p>
          </div>
          <div>
            <BsHeadset></BsHeadset>
            <p>HeadSet</p>
          </div>
          <div>
            <BsHeadset></BsHeadset>
            <p>HeadSet</p>
          </div>
        </div>
      </div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
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
