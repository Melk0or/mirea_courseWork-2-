import React from "react";
import ContactUs from "../components/Contact-us/Contact-us";
import "../styles/ContactPage.scss";

const ContactPage = () => {
  return (
    <>
      <ContactUs />
      <section className="contactSection">
        <div className="container">
          <span>Our Location</span>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d7047.557649234004!2d37.47363366517614!3d55.67002096832992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x46b54dc1d23b51c3%3A0x74763ed59c81ccb6!2z0KDQotCjINCc0JjQoNCt0JAsINC_0YDQvtGB0L_QtdC60YIg0JLQtdGA0L3QsNC00YHQutC-0LPQviwg0JzQvtGB0LrQstCw!3m2!1d55.6699354!2d37.4802999!5e0!3m2!1sru!2sru!4v1701926377858!5m2!1sru!2sru"
            width="600"
            height="450"
            style={{ borderRadius: "15px", width: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};
export default ContactPage;
