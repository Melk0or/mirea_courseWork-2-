import React, { useRef, useState } from "react";
import ContactUs from "../components/Contact-us/Contact-us";
import "../styles/Privilege.scss";
import Review from "../components/Review/Review";

const Privilege = () => {
  const [reviewsArr, setReviewsArr] = useState([]);
  const [valueOfNameInput, setValueOfNameInput] = useState("");
  const [valueOfLocationInput, setValueOfLocationInput] = useState("");
  const [valueOfTextarea, setValueOfLTextarea] = useState("");
  console.log(reviewsArr);

  const resetInputs = () => {
    setValueOfNameInput((prevState) => "");
    setValueOfLocationInput((prevState) => "");
    setValueOfLTextarea((prevState) => "");
  };

  const makeAReview = (obj) => {
    const insertObj = {
      name: obj.valueOfNameInput,
      location: obj.valueOfLocationInput,
      review: obj.valueOfTextarea,
    };
    setReviewsArr((prevState) => [...prevState, insertObj]);
    resetInputs();
  };
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
              <div
                className={
                  reviewsArr.length === 0
                    ? "reviewsSection__list null"
                    : "reviewsSection__list"
                }
              >
                {reviewsArr.length === 0 ? (
                  <div>
                    <img style={{}} src="/image/alice.svg" alt="no reviews" />
                    <h6>
                      There are no reviews here yet,
                      <br /> please provide yours.
                    </h6>
                  </div>
                ) : (
                  reviewsArr.map((item, index) => (
                    <Review key={index} {...item} />
                  ))
                )}
              </div>
              <div className="feedback">
                <div className="feedback__title">
                  <h3>give your feedback</h3>
                </div>
                <form className="feedbackForm">
                  <input
                    type="text"
                    name="name"
                    value={valueOfNameInput}
                    placeholder="Your Name..."
                    onChange={(e) =>
                      setValueOfNameInput((prevState) => e.target.value)
                    }
                  />
                  <input
                    type="text"
                    name="location"
                    value={valueOfLocationInput}
                    placeholder="Your City..."
                    onChange={(e) =>
                      setValueOfLocationInput((prevState) => e.target.value)
                    }
                  />
                  <textarea
                    name="text"
                    value={valueOfTextarea}
                    placeholder="Your rate..."
                    onChange={(e) =>
                      setValueOfLTextarea((prevState) => e.target.value)
                    }
                  />
                </form>
                <button
                  type="submit"
                  onClick={() =>
                    makeAReview({
                      valueOfNameInput,
                      valueOfLocationInput,
                      valueOfTextarea,
                    })
                  }
                >
                  Make a review
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactUs />
    </>
  );
};
export default Privilege;
