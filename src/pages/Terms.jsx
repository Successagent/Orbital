import React from "react";
import { Footer, Header, Newsletter, PageHero } from "../components";

const Terms = () => {
  return (
    <section className="terms_container">
      <Header />
      <PageHero page_title={"Terms and Condition's"} />
      <div className="terms">
        <h3>Terms and Conditions for Orbital Fashion</h3>
        <div>
          <p>1: Product Availability and Delivery:</p>
          <ul>
            <li>
              All products featured in the Orbital Fashion Collection are
              subject to availability.
            </li>
            <li>
              Orbital Fashion will make reasonable efforts to fulfill orders
              promptly, but delays may occur due to factors beyond our control.
            </li>
            <li>
              Customers will be notified in the event of any unforeseen delays
              or product unavailability.
            </li>
          </ul>
          <p>2: Returns and Exchanges:</p>
          <ul>
            <li>
              Orbital Fashion accepts returns or exchanges within 14 days of the
              delivery date, provided that the item is in its original condition
              and packaging.
            </li>
            <li>
              Customers are responsible for return shipping fees unless the
              return is due to a defect or error on our part.
            </li>
            <li>
              Refunds will be processed within 7 business days after receiving
              the returned item.
            </li>
          </ul>
          <p>3: Product Information and Accuracy:</p>
          <ul>
            <li>
              Orbital Fashion strives to provide accurate product descriptions,
              images, and sizing information. However, we cannot guarantee the
              complete accuracy of all information.
            </li>
            <li>
              Colors of products may appear slightly different due to variations
              in monitors and screens.
            </li>
            <li>
              Customers are advised to refer to the specific measurements
              provided and consult our customer service team for any
              clarifications before making a purchase.
            </li>
          </ul>
          <p>4: Intellectual Property:</p>
          <ul>
            <li>
              All intellectual property rights, including trademarks, logos,
              designs, and copyrights, related to Orbital Fashion Collection,
              are owned by Orbital Fashion and protected by applicable laws.
            </li>
            <li>
              Customers are prohibited from using, reproducing, or distributing
              any Orbital Fashion intellectual property without prior written
              consent.
            </li>
          </ul>
          <p>5: Privacy and Data Protection:</p>
          <ul>
            <li>
              Orbital Fashion is committed to protecting the privacy of its
              customers.
            </li>
            <li>
              Personal information collected during the purchase process will be
              used solely for order processing, customer service, and marketing
              communications, subject to the customer's consent.
            </li>
            <li>
              Orbital Fashion will not share or sell customer information to
              third parties without explicit consent, except as required by law.
            </li>
          </ul>
          <p>
            These Terms and Conditions govern the relationship between Ebiye
            Luxury Fashion and its customers. By accessing or using the Ebiye
            Luxury Fashion Collection, customers agree to abide by these terms.
            Orbital Fashion reserves the right to modify or update these terms
            at any time, and any changes will be communicated to customers
            through appropriate channels.
          </p>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </section>
  );
};

export default Terms;
