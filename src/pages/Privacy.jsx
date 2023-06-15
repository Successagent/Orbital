import React from "react";
import { useLocation } from "react-router-dom";
import { Footer, Header, Newsletter, PageHero } from "../components";

const Privacy = () => {
  const { pathname } = useLocation();

  return (
    <section className="privacy_container">
      <Header pathname={pathname} />
      <PageHero page_title={"Terms and Condition's"} />
      <div className="terms">
        <h3>Privacy Policy for Orbital Fashion Collection:</h3>
        <div>
          <p>1: Collection and Use of Personal Information:</p>
          <ul>
            <li>
              Orbital Fashion may collect personal information such as name,
              email address, shipping address, and payment details for the
              purpose of order processing, customer service, and marketing
              communications.
            </li>
            <li>
              The collected personal information will be used solely for the
              intended purposes and will not be shared with third parties
              without the customer's explicit consent, except as required by
              law.
            </li>
          </ul>
          <p>2: Data Security and Storage:</p>
          <ul>
            <li>
              Orbital Fashion employs industry-standard security measures to
              protect customer data against unauthorized access, disclosure, or
              alteration.
            </li>
            <li>
              Personal information is stored securely in encrypted format and is
              accessible only to authorized personnel who need it to perform
              their duties.
            </li>
            <li>
              Orbital Fashion retains personal information for as long as
              necessary to fulfill the purposes for which it was collected or as
              required by applicable laws.
            </li>
          </ul>
          <p>3: Cookies and Tracking Technologies:</p>
          <ul>
            <li>
              Orbital Fashion may use cookies, web beacons, and similar tracking
              technologies to enhance the customer experience and gather
              information about website usage.
            </li>
            <li>
              These technologies may collect non-personal information such as IP
              addresses, browser type, operating system, and pages visited on
              the website.
            </li>
            <li>
              Customers have the option to disable cookies in their web
              browsers, but this may limit certain functionalities of the Ebiye
              Luxury Fashion website.
            </li>
          </ul>
          <p>4: Third-Party Services:</p>
          <ul>
            <li>
              Orbital Fashion may utilize third-party services, such as payment
              processors and shipping providers, to facilitate order
              fulfillment.
            </li>
            <li>
              These third-party services may have their own privacy policies,
              and customers are encouraged to review their policies before
              providing any personal information.
            </li>
          </ul>
          <p>5: Marketing Communications:</p>
          <ul>
            <li>
              With the customer's consent, Orbital Fashion may send marketing
              communications via email or other channels to provide information
              about products, promotions, and events.
            </li>
            <li>
              Customers have the right to opt out of receiving marketing
              communications at any time by following the instructions provided
              in the communication or contacting Orbital Fashion's customer
              service.
            </li>
          </ul>
          <p>
            This Privacy Policy outlines how Orbital Fashion handles and
            protects customer information. By using the Orbital Fashion
            Collection, customers consent to the collection, use, and storage of
            their personal information as described in this policy. Orbital
            Fashion reserves the right to update or modify this Privacy Policy
            as necessary, and any changes will be communicated to customers
            through appropriate channels.
          </p>
        </div>
      </div>
      <Newsletter pathname={pathname} />
      <Footer />
    </section>
  );
};

export default Privacy;
