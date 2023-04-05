import React from "react";
import { Link } from "react-router-dom";
import orbitalLogo from "../assets/orbitalLogo.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={orbitalLogo} alt="" />
      </div>
      <div>
        <h3>Information</h3>
        <Link className="link" to="">
          About us
        </Link>
        <Link className="link" to="">
          Need More Info
        </Link>
      </div>
      <div>
        <h3>Contact</h3>
        <Link className="link" to="">
          12345678900
        </Link>
        <Link className="link" to="">
          orbital@gmail.com
        </Link>
      </div>
      <div>
        <h3>Address</h3>

        <Link className="link" to="">
          Yenagoa, Bayelsa State
        </Link>
        <Link className="link" to="">
          No 26 Edepie
        </Link>
      </div>
      <div>
        <h3>Information</h3>
        <Link className="link" to="">
          Our Policy
        </Link>
        <Link className="link" to="">
          Terms and Conditions
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
