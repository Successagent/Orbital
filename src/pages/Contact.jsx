import React from "react";
import { useLocation } from "react-router-dom";
import { Footer, Header, Newsletter, PageHero } from "../components";

const Contact = () => {
  const { pathname } = useLocation();
  return (
    <>
      <section className="contact-sect">
        <Header pathname={pathname} />
        <PageHero page_title={"Contact"} />
      </section>
      <Newsletter pathname={pathname} />
      <Footer />
    </>
  );
};

export default Contact;
