import React, { useContext } from "react";
import "../styles/Home.scss";
import Product from "../components/Product/Product";
import product_arr from "../data/product_data";
import ContactUs from "../components/Contact-us/Contact-us";
import AppContext from "../context";

const Home = () => {
  const { onCLickToLink } = useContext(AppContext);

  return (
    <>
      <main id="sector2">
        <div className="container">
          <div className="main__inner">
            <div className="main__right">
              <div className="welcome-section">
                <img src="/image/welcomeIcon.svg" alt="welcome" />
                <p className="welcome__title">Welcome to Beautyness!!!</p>
              </div>
              <h1 className="main__right-title">
                Bring The well being & beauty naturally!!!
              </h1>
              <p className="main__right-subtitle">
                Your body does a lot for you, and your caring therapist can help
                you return the favor in a way that benefits both your physical
                and mental wellness.
              </p>
              <button onClick={onCLickToLink} className="main__reservation">
                Make a reservation
              </button>
            </div>
            <div className="main__left">
              <img src="/image/mainPhoto.png" alt="Photo" />
            </div>
          </div>
        </div>
      </main>
      <section className="product-section">
        <div className="container">
          <div className="product__inner">
            {product_arr.map((item, index) => (
              <Product key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
      <section className="attention">
        <div className="container">
          <div className="attention__inner">
            <div className="attention-left">
              <p>take your care</p>
              <h2 className="attention-left__title">
                Elevate Your Lifestyle by Bring Balance and Well Being Into Your
                Life
              </h2>
              <p className="attention-left__subtitle">
                Designed to allow you to unwind and feel confident that you’re
                in good, caring hands. Our first priority is cleanliness. We
                have a full-time staff whose job is to ensure that the
                environment at Beautyness remains.
              </p>
              <div className="attention-left__icon">
                <div className="attention-left__icon-item">
                  <img src="/image/attentionIcon1.svg" alt="icon-1" />
                  <span>Beauty</span>
                  <span>Experts</span>
                </div>
                <div className="attention-left__icon-item">
                  <img src="/image/attentionIcon2.svg" alt="icon-2" />
                  <span>Quality</span>
                  <span>Services</span>
                </div>
                <div className="attention-left__icon-item">
                  <img src="/image/attentionIcon3.svg" alt="icon-3" />
                  <span>100%</span>
                  <span>Nature</span>
                </div>
              </div>
            </div>
            <div className="attention-right">
              <img
                src="/image/attentionFrame.png"
                className="attention-right__image"
                alt="beauty-background"
              />
            </div>
          </div>
        </div>
      </section>
      <ContactUs />
    </>
  );
};

export default Home;
