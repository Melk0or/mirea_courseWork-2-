import React from "react";
import "../../styles/Header.scss";

const Header = () => {
  return (
    <header id="sector1">
      <div className="header-inner">
        <div className="container head">
          <div className="title_inner">
            <div className="header-right">
              <div className="header__logo">
                <img src="/image/IMAGE.svg" alt="LOGO" />
              </div>
              <div className="header__call-us">
                <img src="/image/phoneIcon.svg" alt="phoneIcon" />
                <a href="tel:89184395367">Call Us - (+7) 918 439 5367</a>
              </div>
            </div>
            <div className="header-left">
              <nav className="nav">
                <ul className="header__navigation">
                  <li>
                    <a href="#sector1">Home</a>
                  </li>
                  <li>
                    <a href="#sector1">Price</a>
                  </li>
                  <li>
                    <a href="#sector1">Privilege</a>
                  </li>
                  <li>
                    <a href="#sector2">Contact Us</a>
                  </li>
                  <li>
                    <a href="#sector2">Your reservations</a>
                  </li>
                </ul>
              </nav>
              <div className="header__icon">
                <img
                  src="/image/facebookIcon.svg"
                  alt="facebook"
                  className="header__icon-item"
                />
                <img
                  src="/image/twitterIcon.svg"
                  alt="twitter"
                  className="header__icon-item"
                />
                <img
                  src="/image/linkedInIcon.svg"
                  alt="linkedIn"
                  className="header__icon-item"
                />
              </div>
              <div className="header__button">
                <button className="header__reservation">
                  <img src="/image/reservationIcon.svg" alt="res" />
                  <span>reservation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
