import React from "react";
import "../../styles/ContactForm.scss";

const ContactForm = () => {
  return (
    <form action="/price">
      <div className="contact-us-right-item">
        <img src="/image/contactUsPerson.svg" alt="iconPerson" />
        <input type="text" name="" id="" placeholder="NAME" required />
      </div>
      <div className="contact-us-right-item">
        <img src="/image/contactUsPhone.svg" alt="iconPhone" />
        <input
          type="tel"
          name="number"
          maxLength="11"
          id=""
          placeholder="+7 (777)-777-77-77"
          required
        />
      </div>
      <div className="contact-us-right-item">
        <img src="/image/contactUsMail.svg" alt="iconMail" />
        <input
          type="email"
          name=""
          id=""
          placeholder="email@mail.ru"
          required
        />
      </div>
      <div className="contact-us-right-item desc">
        <img src="/image/contactUsDesc.svg" alt="iconDesc" />
        <textarea
          rows="5"
          cols="60"
          type="text"
          name="description_text"
          id=""
          placeholder="DESCRIPTION"
        ></textarea>
      </div>

      <button className="btn-submit" type="submit">
        <span></span>push
      </button>
    </form>
  );
};

export default ContactForm;
