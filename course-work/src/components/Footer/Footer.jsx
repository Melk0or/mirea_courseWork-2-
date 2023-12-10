import React from "react";
import "../../styles/Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  const onCLickToScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
     behavior: "smooth",
    })
  };
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
              <h3>Explore</h3>
              <div>
                <Link to='/' onClick={onCLickToScroll}>Home</Link>
                <Link to='/price' onClick={onCLickToScroll}>Price</Link>
                <Link to='/privilege' onClick={onCLickToScroll}>Privilege</Link>
                <Link to='/contact' onClick={onCLickToScroll}>Contact Us</Link>
                <Link to='/reservations' onClick={onCLickToScroll}>Your reservations</Link>
              </div>
            </div>
            <div className="footerDescriptionItem">
              <h3>Utlity Pages</h3>
              <div>
                <a href="#">Style Guide</a>
                <a href="#">404 Not Found</a>
                <a href="#">Password Protected</a>
                <a href="#">Licenses</a>
                <a href="#">Changelog</a>
               
              </div>
            </div>
            <div className="footerDescriptionItem">
              <h3>Keep in Touch</h3>
              <div>
                <p>Addres: РТУ МИРЭА, пр. Вернадского, 78, Москва, 119454</p>
                <p>Mail: support@gmail.ru</p>
                <p>Phone: +7 (918) 439-53-67</p>

              </div>
            </div>
            <div className="footerDescriptionItem">
              <h3>Working Hours</h3>
              <div>
                <p>Mon to Fri: 7am - 6pm</p>
                <p>Sat: 9am - 7pm</p>
                <p>Sun: 9am - 6pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
