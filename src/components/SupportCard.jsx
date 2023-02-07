import React from "react";
import { BiSupport } from "react-icons/bi";
import { BsArrowReturnRight, BsCreditCard2Back } from "react-icons/bs";
import { MdOutlineLocalShipping } from "react-icons/md";

const SupportCard = () => {
  return (
    <div className="home-hero-sect-2">
      <div>
        <BiSupport />
        <div>
          <h3>Support 24/7</h3>
          <p>Delicated 24/7 support</p>
        </div>
      </div>
      <div>
        <BsArrowReturnRight />
        <div>
          <h3>Support 24/7</h3>
          <p>Delicated 24/7 support</p>
        </div>
      </div>
      <div>
        <BsCreditCard2Back />
        <div>
          <h3>Support 24/7</h3>
          <p>Delicated 24/7 support</p>
        </div>
      </div>
      <div>
        <MdOutlineLocalShipping />
        <div>
          <h3>Support 24/7</h3>
          <p>Delicated 24/7 support</p>
        </div>
      </div>
    </div>
  );
};

export default SupportCard;
