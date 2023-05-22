import React from "react";
import { useLocation } from "react-router-dom";
import { Footer, Header, Newsletter, PageHero } from "../components";

const Privacy = () => {
  const { pathname } = useLocation();

  return (
    <section className="privacy_container">
      <Header />
      <PageHero page_title={"Terms and Condition's"} />
      <Newsletter />
      <Footer />
    </section>
  );
};

export default Privacy;
