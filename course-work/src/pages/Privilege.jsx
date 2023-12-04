import React, { useState } from "react";
import ContactUs from "../components/Contact-us/Contact-us";
import "../styles/Privilege.scss";

const Privilege = () => {
  const [reviewsArr, setReviewsArr] = useState([]);
  return (
    <>
      <section className="privilegeSection">
        <div className="privilegeSection__wrapper">
          <div className="container">
            <div className="privilegeSection__inner">
              <div className="privilegeSection__title">
                <p>Our Awesome Benefits</p>
                <h2>What you’ll get from Us</h2>
              </div>
              <div className="privilegeSection__list">
                <div className="privilegeSection__item">
                  <img src="/image/privilegeIMG.png" alt="privilegeItem" />
                  <h4>Built with you in mind</h4>
                  <p>
                    We know how important it is to maintain strong relationships
                    with clients.
                  </p>
                </div>
                <div className="privilegeSection__item">
                  <img src="/image/privilegeIMG.png" alt="privilegeItem" />
                  <h4>Built with you in mind</h4>
                  <p>
                    We know how important it is to maintain strong relationships
                    with clients.
                  </p>
                </div>
                <div className="privilegeSection__item">
                  <img src="/image/privilegeIMG.png" alt="privilegeItem" />
                  <h4>Built with you in mind</h4>
                  <p>
                    We know how important it is to maintain strong relationships
                    with clients.
                  </p>
                </div>
                <div className="privilegeSection__item">
                  <img src="/image/privilegeIMG.png" alt="privilegeItem" />
                  <h4>Built with you in mind</h4>
                  <p>
                    We know how important it is to maintain strong relationships
                    with clients.
                  </p>
                </div>
                <div className="privilegeSection__item">
                  <img src="/image/privilegeIMG.png" alt="privilegeItem" />
                  <h4>Built with you in mind</h4>
                  <p>
                    We know how important it is to maintain strong relationships
                    with clients.
                  </p>
                </div>
                <div className="privilegeSection__item">
                  <img src="/image/privilegeIMG.png" alt="privilegeItem" />
                  <h4>Built with you in mind</h4>
                  <p>
                    We know how important it is to maintain strong relationships
                    with clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="reviewsSection">
        <div className="reviewsSection__wrapper">
          <div className="container" style={{ width: "100%" }}>
            <div className="reviewsSection__inner">
              <div className="reviewsSection__title">
                <p>Testimonials</p>
                <h2>What our Customers says...</h2>
              </div>
              <div className="reviewsSection__list">
                <div className="reviewsSection__item">
                  <p>dsdsds</p>
                  <div>
                    <div>
                      <img src="/image/reviewsStars.png" alt="..." />
                      <h6>dfsdfsdf</h6>
                      <p>dfsdfdsfds</p>
                    </div>
                    <img src="/image/reviewsIMG.png" alt="..." />
                  </div>
                </div>
                <div className="reviewsSection__item">
                  <p>dsdsds</p>
                  <div>
                    <div>
                      <img src="/image/reviewsStars.png" alt="..." />
                      <h6>dfsdfsdf</h6>
                      <p>dfsdfdsfds</p>
                    </div>
                    <img src="/image/reviewsIMG.png" alt="..." />
                  </div>
                </div>
              </div>
              <form action=""></form>
            </div>
          </div>
        </div>
      </section>
      <ContactUs />
    </>
  );
};
export default Privilege;
