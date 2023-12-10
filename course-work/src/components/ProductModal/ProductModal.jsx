import React, { useContext } from "react";
import "./../../styles/ProductModal.scss";
import AppContext from "../../context";

const ProductModal = (modalProps) => {
  const { setIsOpenProductModal, onCLickToLink } = useContext(AppContext);
  const onCLoseProductModal = () => {
    setIsOpenProductModal((prevState) => !prevState);
    document.body.style.overflowY = "";
  };

  const goToReservation = () => {
    onCLoseProductModal();
    onCLickToLink();
  }

  return (
    <div className="product_modal">
      <div className="product_modal__wrapper">
        <div className="product_modal__inner">
          <div className="product_modal__image">
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              onClick={onCLoseProductModal}
            >
              <path
                opacity="0.5"
                d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                stroke="#1C274C"
                strokeWidth="1.5"
              />
              <path
                d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <img src={modalProps.url} alt="modalImg" />
          </div>
          <div className="product_modal__title">{modalProps.title}</div>
          <div className="product_modal__subtitle">{modalProps.detail}</div>
          <div className="product_modal__price">
            <span>Price</span>
            <span></span>
            <span>{modalProps.price}$</span>
          </div>
          <button onClick={goToReservation} className="product_modal__button">
            <span>go to reservation</span>
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12H18M18 12L13 7M18 12L13 17"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
