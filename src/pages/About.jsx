import React, { useState } from "react";
import {
  Button,
  Footer,
  Header,
  Newsletter,
  PageHero,
  SupportCard,
} from "../components";
import { useLocation } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import AboutImageTwo from "../assets/d1.webp";
import TeamImage from "../assets/2.webp";
import reviewLogo from "../assets/client1.webp";

const About = () => {
  const { pathname } = useLocation();
  const reviews = [
    {
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
  fugit. Commodi illo delectus, cupiditate atque hic non vero
  doloremque illum.`,
      title: "Chairman",
      name: "Merida Swan",
      icon: reviewLogo,
    },
    {
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
  fugit. Commodi illo delectus, cupiditate atque hic non vero
  doloremque illum.`,
      title: "Chairman",
      name: "Merida Swan",
      icon: reviewLogo,
    },
    {
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
  fugit. Commodi illo delectus, cupiditate atque hic non vero
  doloremque illum.`,
      title: "Chairman",
      name: "Merida Swan",
      icon: reviewLogo,
    },
  ];
  return (
    <>
      <section className="about-sect">
        <Header pathname={pathname} />
        <PageHero page_title="About Us" />
        <div className="about-intro-sect">
          <div>
            <img src={AboutImageTwo} alt="" />
          </div>
          <div>
            <h1>Elehaus Story, We Craft Awesome With Great Experiences.</h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minimo veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex eatrl commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptat velit esse cillum dolore eu fugiat nulla
              pariatur.
            </p>
            <Button title="Contact Us" icon={<AiOutlineArrowRight />} />
          </div>
        </div>
        <div className="about-team-sect">
          <h2>Our Team</h2>
          <div className="team-con">
            <div className="team-children">
              <img src={TeamImage} alt="" />
              <div className="team-children-first-sect">
                <h3>Monroe Bond</h3>
                <p>Chief Admin</p>
                <div className="team-icons-sect">
                  <div>
                    <GrFacebookOption />
                  </div>
                  <div>
                    <GrFacebookOption />
                  </div>
                  <div>
                    <GrFacebookOption />
                  </div>
                  <div>
                    <GrFacebookOption />
                  </div>
                </div>
              </div>
            </div>
            <div className="team-children">
              <img src={TeamImage} alt="" />
              <div className="team-children-first-sect">
                <h3>Monroe Bond</h3>
                <p>Chief Admin</p>
                <div className="team-icons-sect">
                  <div>
                    <GrFacebookOption />
                  </div>
                  <div>
                    <GrFacebookOption />
                  </div>
                  <div>
                    <GrFacebookOption />
                  </div>
                  <div>
                    <GrFacebookOption />
                  </div>
                </div>
              </div>
            </div>
            <div className="team-children">
              <img src={TeamImage} alt="" />
              <div className="team-children-first-sect">
                <h3>Monroe Bond</h3>
                <p>Chief Admin</p>
                <div className="team-icons-sect">
                  <div>
                    <GrFacebookOption />
                  </div>
                  <div>
                    <GrFacebookOption />
                  </div>
                  <div>
                    <GrFacebookOption />
                  </div>
                  <div>
                    <GrFacebookOption />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="customers-review-sect">
          <h2>Customer's Reviews</h2>
          <div className="customer-review-con">
            {reviews.map((review, idx) => (
              <div key={idx} className="review-item">
                <div className="review-message">
                  <p>{review.message}</p>
                </div>
                <div className="review-details-con">
                  <div>
                    <img src={review.icon} alt="" />
                  </div>
                  <div>
                    <h3 className="product-text-name">{review.name}</h3>
                    <p>{review.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <SupportCard />
      </section>
      <Newsletter pathname={pathname} />
      <Footer />
    </>
  );
};

export default About;
