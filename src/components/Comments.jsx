import React from "react";
import { AiFillStar } from "react-icons/ai";

import reviewImage from "../assets/c1.webp";
import female1 from "../assets/female1.jpg";
import male from "../assets/male.jpg";

const Comments = ({ tabs }) => {
  return (
    <div className={`tabs descrp-tab ${tabs === true ? "active-tab" : ""}`}>
      <div>
        <div>
          <img src={reviewImage} alt="" />
          <h3>Tomas Doe</h3>
          <p>Developer</p>
          <div className="product-rate-con">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>
        <p>
          Orbital Fashion is my go-to destination for luxury fashion. Their
          impeccable selection of designer pieces always leaves me feeling
          elegant and confident. The quality and attention to detail are
          unparalleled.
        </p>
      </div>
      <div>
        <div>
          <img src={male} alt="" />
          <h3>Justin</h3>
          <p>Business</p>
          <div className="product-rate-con">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>
        <p>
          Shopping at Orbital Fashion is a dream come true. The variety of
          styles and brands they offer is impressive, and their customer service
          is exceptional. I always find exactly what I'm looking for and more.
        </p>
      </div>
      <div>
        <div>
          <img src={female1} alt="" />
          <h3>Mary</h3>
          <p>Fashion Designer</p>
          <div className="product-rate-con">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>
        <p>
          Orbital Fashion exceeds my expectations every time. The seamless
          shopping experience, from browsing their stunning collection to the
          fast delivery, makes me feel like a valued customer. Their luxury
          fashion selection is second to none.
        </p>
      </div>
    </div>
  );
};

export default Comments;
