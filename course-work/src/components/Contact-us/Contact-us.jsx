import React, { useContext } from "react";
import "../../styles/Contact.scss";
import ContactForm from "../ContactForm/ContactForm";
import AppContext from "../../context";

const ContactUs = () => {
  const { contactLink } = useContext(AppContext);
  return (
    <section className="contact-us">
      <div className="container">
        <div className="contact-us__inner">
          <div className="contact-us-left">
            <p>flat discount</p>
            <h2 className="contact-us__title">
              Claim upto 50% offer on the most popular services...
            </h2>
            <p className="contact-us__subtitle">
              Our Retreat is not meant to be an occasional treat, but rather a
              part of your routine that restores balance to your daily life.
            </p>
            <div className="contact-us__promo-section">
              <div className="contact-us__promo-section-left">
                <div className="contact-us__promo-section-item">
                  <img src="/image/promo_section.svg" alt="promoICon" />
                  <div className="contact-us__mail">
                    <p>Mail Us</p>
                    <p>info@beautyness.com</p>
                  </div>
                </div>
                <div className="contact-us__promo-section-item">
                  <img src="/image/promo_section.svg" alt="promoICon" />
                  <div className="contact-us__phone">
                    <p>Call Us</p>
                    <p>(+7) 918 439-53-67</p>
                  </div>
                </div>
              </div>
              <div className="contact-us__promo-section-right">
                <div className="contact-us__promo-section-right__inner">
                  <p>- Get Flat -</p>
                  <p className="contact-us__promo-section-right__title">50%</p>
                  <p>Discount</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-us-right">
            <div
              ref={contactLink}
              id="contact-us"
              className="contact-us-right__inner"
            >
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
