import React from "react";
import { BiSupport } from "react-icons/bi";
import { BsCreditCard2Back } from "react-icons/bs";
import { MdOutlineLocalShipping } from "react-icons/md";

const SupportCard = () => {
  return (
    <div className="home-hero-sect-2">
      <div>
        <BiSupport />
        <div>
          <a
            target="_blank"
            id="option_one"
            href="https://whoursie.com/4/7682213"
            rel="noopener noreferrer"
          >
            <h3>Support </h3>
          </a>
          <p>Dedicated 24/7 support</p>
        </div>
      </div>
      <div>
        <BsCreditCard2Back />
        <div>
          <h3>Payments</h3>
          <p>All your payments are securely processed</p>
        </div>
      </div>
      <div>
        <MdOutlineLocalShipping />
        <div>
          <h3>Shipping</h3>
          <p>Free shpping to all orders in within Yenagoa</p>
        </div>
      </div>
    </div>
  );
};

export default SupportCard;
