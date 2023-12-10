import React, { useContext } from "react";
import ContactUs from "../components/Contact-us/Contact-us";
import "../styles/Reservations.scss";
import ReservationForm from "../components/ReservationForm/ReservationForm";
import AppContext from "../context";

const Reservations = () => {
  const { reservationList } = useContext(AppContext);
  return (
    <>
      <section className="reservationsSection">
        <div className="container">
          <div className="reservationsSection__inner">
            <div className="reservationsSection__title">
              <p>be healthy</p>
              <h2>Here are your reservations, be careful</h2>
            </div>
            <div
              className={
                reservationList.length
                  ? "reservationsSection__list"
                  : "reservationsSection__list null"
              }
            >
              {reservationList.length === 0 ? (
                <div>
                  <img style={{}} src="/image/alice.svg" alt="no reviews" />
                  <h6>
                    There are no reservations here yet,
                    <br /> please provide yours.
                  </h6>
                </div>
              ) : (
                reservationList.map((item, index) => (
                  <ReservationForm key={index} {...item} />
                ))
              )}
            </div>
          </div>
        </div>
      </section>
      <ContactUs />
    </>
  );
};
export default Reservations;
