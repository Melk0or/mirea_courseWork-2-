import React, { useContext } from "react";
import "../../styles/Reservations.scss";
import AppContext from "../../context";
const ReservationForm = (reservationProps) => {
  const { deleteReservations } = useContext(AppContext);
  return (
    <div className="reservationsSection__item">
      <div className="item__content">
        <span
          onClick={() =>
            deleteReservations(
              "https://65749a94b2fbb8f6509c6a0e.mockapi.io/reservations",
              reservationProps.id
            )
          }
        >
          ✖
        </span>
        <span>description</span>
        <p>{reservationProps.description}</p>
      </div>
      <div className="item__content">
        <span>your data</span>
        <div>
          <h6>{reservationProps.name}</h6>
          <p>{reservationProps.phone?.substring(0, 4) + "*****"}</p>
        </div>
        <div>
          <p>{reservationProps.date}</p>
          <p>{reservationProps.time}</p>
        </div>
      </div>
    </div>
  );
};
export default ReservationForm;
