import React, { useContext, useState } from "react";
import "../../styles/Header.scss";
import { Link } from "react-router-dom";
import AppContext from "../../context";

const Header = () => {
  const { onCLickToLink } = useContext(AppContext);
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  const onClickToBurgerButton = () => {
    setOpenBurgerMenu((prevState) => !prevState);
    if (!openBurgerMenu) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }
  };

  return (
    <header id="sector1">
      <div className="header-inner">
        <div className="container head">
          <div className="title_inner">
            <div className="header-right">
              <Link to="/">
                <div className="header__logo">
                  <img src="/image/IMAGE.svg" alt="LOGO" />
                </div>
              </Link>
              <div className="header__call-us">
                <img src="/image/phoneIcon.svg" alt="phoneIcon" />
                <a href="tel:89184395367">Call Us - (+7) 918 439 5367</a>
              </div>
            </div>
            <div className="header-left">
              <div
                onClick={onClickToBurgerButton}
                className="burger__button__wrapper"
              >
                <span
                  className={
                    openBurgerMenu ? "burger__button activeB" : "burger__button"
                  }
                ></span>
              </div>
              <nav
                style={openBurgerMenu ? { left: "0" } : null}
                className="nav"
              >
                <ul className="header__navigation">
                  <li>
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => window.scrollTo(0, 0)} to="/price">
                      Price
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => window.scrollTo(0, 0)} to="/privilege">
                      Privilege
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => window.scrollTo(0, 0)} to="/contact">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => window.scrollTo(0, 0)}
                      to="/reservations"
                    >
                      Your reservations
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="header__icon">
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
                <button onClick={onCLickToLink} className="header__reservation">
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
