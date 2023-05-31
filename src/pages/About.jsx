import React from "react";
import {
  Button,
  Footer,
  Header,
  Newsletter,
  PageHero,
  SupportCard,
} from "../components";

import Loading from "../components/HOCs/Loading";

import { Link, useLocation } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineInstagram } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { GrFacebookOption } from "react-icons/gr";
import AboutImageTwo from "../assets/d1.webp";
import TeamImage from "../assets/2.webp";
import { reviews } from "../data/reviews";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaLinkedinIn } from "react-icons/fa";

const About = () => {
  const { pathname } = useLocation();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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
            <h1> Welcome to Orbital Fashion.</h1>
            <p>
              Welcome to our Orbital Fashion website, where we provide unique
              and stylish clothing designed for those who are passionate about
              looking exquisite. Our collection of apparel is perfect for anyone
              who wants to show their love for the cosmos and express their
              individuality. Our product line features a range of clothing items
              that are comfortable, durable, and fashionable. From t-shirts and
              hoodies to jackets and hats, we offer a variety of options that
              are perfect for everyday wear or special occasions.
            </p>
            <Link to={"/contact"}>
              <Button title="Contact Us" icon={<AiOutlineArrowRight />} />
            </Link>
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
                    <AiOutlineInstagram />
                  </div>
                  <div>
                    <CiTwitter />
                  </div>
                  <div>
                    <FaLinkedinIn />
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
                    <AiOutlineInstagram />
                  </div>
                  <div>
                    <CiTwitter />
                  </div>
                  <div>
                    <FaLinkedinIn />
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
                    <AiOutlineInstagram />
                  </div>
                  <div>
                    <CiTwitter />
                  </div>
                  <div>
                    <FaLinkedinIn />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="customers-review-sect">
          <h2>Customer's Reviews</h2>
          <Carousel responsive={responsive}>
            {reviews.map((review, idx) => (
              <div key={idx} className={`review-item review-item-${idx}`}>
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
          </Carousel>
        </div>
        <SupportCard />
      </section>
      <Newsletter pathname={pathname} />
      <Footer />
    </>
  );
};

export default Loading(About);
