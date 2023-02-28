import React from "react";
import AboutHeroImage from "../assets/pexels-mart-production-9558593.jpg";

const PageHero = ({ page_title }) => {
  return (
    <div className="about-hero-sect">
      <div>
        <h1>{page_title}</h1>
        <div className="about-hero-nav-sect">
          <h3>Home</h3>
          <h3>{page_title}</h3>
        </div>
      </div>
      <div>
        <img src={AboutHeroImage} alt="" />
      </div>
    </div>
  );
};

export default PageHero;
