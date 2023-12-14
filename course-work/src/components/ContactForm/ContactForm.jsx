import React, { useContext, useState } from "react";
import "../../styles/ContactForm.scss";
import AppContext from "../../context";

const ContactForm = () => {
  const { completeReservations } = useContext(AppContext);
  const [nameInput, setNameInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [descInput, setDescInput] = useState("");


  const clearInputs = () => {
    setNameInput((prevState) => "");
    setPhoneInput((prevState) => "");
    setEmailInput((prevState) => "");
    setDescInput((prevState) => "");
  };

  const onClickToSubButt = (e) => {
    e.preventDefault();
    completeReservations({
      name: nameInput,
      phone: phoneInput,
      email: emailInput,
      description: descInput,
    });
    clearInputs();
    
  };

  return (
    <form>
      <div className="contact-us-right-item">
        <img src="/image/contactUsPerson.svg" alt="iconPerson" />
        <input
          value={nameInput}
          onChange={(e) => setNameInput((prevState) => e.target.value)}
          type="text"
          name=""
          id=""
          placeholder="NAME"
          required
        />
      </div>
      <div className="contact-us-right-item">
        <img src="/image/contactUsPhone.svg" alt="iconPhone" />
        <input
          value={phoneInput}
          onChange={(e) => setPhoneInput((prevState) => e.target.value)}
          type="number"
          name="number"
          minLength="11"
          maxLength="11"
          id=""
          placeholder="+7 (777)-777-77-77"
          required
        />
      </div>
      <div className="contact-us-right-item">
        <img src="/image/contactUsMail.svg" alt="iconMail" />
        <input
          value={emailInput}
          onChange={(e) => setEmailInput((prevState) => e.target.value)}
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
          maxLength={150}
          value={descInput}
          onChange={(e) => setDescInput((prevState) => e.target.value)}
          rows="5"
          cols="60"
          type="text"
          name="description_text"
          id=""
          placeholder="DESCRIPTION"
        ></textarea>
      </div>

      <button onClick={(e) => onClickToSubButt(e)} className="btn-submit">
        <span></span>push
      </button>
    </form>
  );
};

export default ContactForm;
