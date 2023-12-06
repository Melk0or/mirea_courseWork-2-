import React from "react";
import "../../styles/Privilege.scss";

const Review = (reviewProps) => {
  return (
    <div className="reviewsSection__item">
      <p>{reviewProps.review}</p>
      <div>
        <div>
          <img src="/image/reviewsStars.png" alt="..." />
          <h6>{reviewProps.name}</h6>
          <p>{reviewProps.location}</p>
        </div>
        <img src="/image/reviewsIMG.png" alt="..." />
      </div>
    </div>
  );
};
export default Review;
