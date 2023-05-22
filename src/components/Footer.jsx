import React from "react";
import { Link } from "react-router-dom";
import orbitalLogo from "../assets/orbi.png";

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
          +2348068047561
        </Link>
        <a className="link" href="mailto:support@orbitalfashionworld.com">
          Support
        </a>
      </div>
      <div>
        <h3>Address</h3>
        <Link className="link" to="">
          Yenagoa, Bayelsa State
        </Link>
        <Link className="link" to="">
          No 533 Melford Okilo Way
        </Link>
        <Link className="link" to="">
          Opposite Zenith Bank Yenizugene
        </Link>
      </div>
      <div>
        <h3>Information</h3>
        <Link className="link" to="/privacy">
          Our Policy
        </Link>
        <Link className="link" to="/terms">
          Terms and Conditions
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
