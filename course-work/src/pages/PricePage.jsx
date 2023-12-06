import React, { useContext } from "react";
import "../styles/PricePage.scss";
import ContactUs from "../components/Contact-us/Contact-us";
import AppContext from "../context";

const PricePage = () => {
  const { onCLickToLink } = useContext(AppContext);

  return (
    <>
      <section className="priceSection">
        <div className="priceSection__wrapper">
          <div className="container">
            <div className="priceSection__inner">
              <div className="priceSection__title">
                <p>Our Services</p>
                <h2>
                  Creative excellence and <br /> the unparalleled hospitality
                </h2>
              </div>
              <div
                className="centerPrepos"
                style={{
                  background:
                    'url("image/centerPrepos.png"), lightgray 50% / cover no-repeat',
                }}
              ></div>
              <div className="priceSection_services">
                <div className="priceImage">
                  <img src="/image/price-img1.png" alt="firstImage" />
                </div>
                <div className="priceDash">
                  <div className="priceDash__item">
                    <div>
                      <h4>deep tissue</h4>
                      <span></span>
                      <span>
                        <span>from</span> $48.00
                      </span>
                    </div>
                    <p>
                      A therapeutic massage that used for relieving muscles.
                    </p>
                  </div>
                  <div className="priceDash__item">
                    <div>
                      <h4>Body Scrub</h4>
                      <span></span>
                      <span>
                        <span>from</span> $18.00
                      </span>
                    </div>
                    <p>
                      Perfect way to relieve all that unwanted stress in body.
                    </p>
                  </div>
                  <div className="priceDash__item">
                    <div>
                      <h4>Foot Massage</h4>
                      <span></span>
                      <span>
                        <span>from</span> $25.00
                      </span>
                    </div>
                    <p>
                      Get a relaxing massage focused on your feet and lower
                      legs.
                    </p>
                  </div>
                  <div className="priceDash__item">
                    <div>
                      <h4>Scalp Treatments</h4>
                      <span></span>
                      <span>
                        <span>from </span> $15.00
                      </span>
                    </div>
                    <p>
                      Superior gray creates a rich, natural look with less
                      fading.
                    </p>
                  </div>
                  <button onClick={onCLickToLink} className="priceDash__button">
                    GET AN APPOINTMENT
                  </button>
                </div>
                <div className="priceImage">
                  <img src="/image/price-img2.png" alt="secondImage" />
                </div>
                <div className="priceDash">
                  <div className="priceDash__item">
                    <div>
                      <h4>Fertility Massage</h4>
                      <span></span>
                      <span>
                        <span>from</span> $18.00
                      </span>
                    </div>
                    <p>
                      Help support reproductive health, the menstrual cycle.
                    </p>
                  </div>
                  <div className="priceDash__item">
                    <div>
                      <h4>Blemish Buster</h4>
                      <span></span>
                      <span>
                        <span>from</span> $40.00
                      </span>
                    </div>
                    <p>
                      Deep cleansing facial rebalances to promote healthy skin.
                    </p>
                  </div>
                  <div className="priceDash__item">
                    <div>
                      <h4>Oxygen Facial</h4>
                      <span></span>
                      <span>
                        <span>from</span> $32.00
                      </span>
                    </div>
                    <p>
                      Hydrates, tones, lifts, and adds radiance to the skin.
                    </p>
                  </div>
                  <div className="priceDash__item">
                    <div>
                      <h4>Lash Lift</h4>
                      <span></span>
                      <span>
                        <span>from</span> $25.00
                      </span>
                    </div>
                    <p>
                      Treatment for natural lashes that can add curl and
                      definition.
                    </p>
                  </div>
                  <button onClick={onCLickToLink} className="priceDash__button">
                    GET AN APPOINTMENT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactUs />
    </>
  );
};
export default PricePage;
