import React from "react";
import "../../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer-logo">
            <img
              src="/image/footer-logo.svg"
              alt="footerLogo"
              className="footer-logo__item"
            />
            <div className="footer-logo__icon">
              <a href="#">
                <img
                  src="/image/footerItem2.svg"
                  alt="twitter"
                  className="footer-logo__icon-item"
                />
              </a>
              <a href="#">
                <img
                  src="/image/footerItem3.svg"
                  alt="linkedIn"
                  className="footer-logo__icon-item"
                />
              </a>
            </div>
          </div>
          <div className="footer__description">
            <div className="footerDescriptionItem">
              <h3></h3>
              <div></div>
            </div>
            <div className="footerDescriptionItem">
              <h3></h3>
              <div></div>
            </div>
            <div className="footerDescriptionItem">
              <h3></h3>
              <div></div>
            </div>
            <div className="footerDescriptionItem">
              <h3></h3>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
