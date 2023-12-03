import React, { useContext } from "react";
import "../../styles/Product.scss";
import AppContext from "../../context";

const Product = (product) => {
  const { setProductModalProps, setIsOpenProductModal } =
    useContext(AppContext);
  const onClickToReadMore = (obj) => {
    window.scrollTo(0, 0);
    setIsOpenProductModal((prevState) => !prevState);
    setProductModalProps((prevState) => obj);
    document.body.style.overflowY = "hidden";
  };
  return (
    <div className="product">
      <img src={product.url} alt="Spa" className="product__image" />
      <h3 className="product__title">{product.title}</h3>
      <div className="product-sub__inner">
        <p className="product__subtitle">{product.subtitle}</p>
        <button
          onClick={() => onClickToReadMore(product)}
          className="product__readMore"
        >
          read more
        </button>
      </div>
    </div>
  );
};

export default Product;
