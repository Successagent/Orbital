import React from "react";
import { Button, Footer, Header, Newsletter } from "../components";
import { useLocation } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import AboutHeroImage from "../assets/page-title.webp";
import AboutImageTwo from "../assets/d1.webp";
import TeamImage from "../assets/2.webp";

const About = () => {
  const { pathname } = useLocation();
  return (
    <>
      <section className="about-sect">
        <Header pathname={pathname} />
        <div className="about-hero-sect">
          <div>
            <h1>About Us</h1>
            <div className="about-hero-nav-sect">
              <h3>Home</h3>
              <h3>About Us</h3>
            </div>
          </div>
          <div>
            <img src={AboutHeroImage} alt="" />
          </div>
        </div>
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
              <div>
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
              <div>
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
              <div>
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
      </section>
      <Newsletter />
      <Footer />
    </>
  );
};

export default About;
