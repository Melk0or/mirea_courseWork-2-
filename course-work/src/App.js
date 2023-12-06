import React, { useRef, useState } from "react";
import "./index.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import ProductModal from "./components/ProductModal/ProductModal";
import AppContext from "./context";
import { Route, Routes } from "react-router";
import ContactUs from "./components/Contact-us/Contact-us";
import PricePage from "./pages/PricePage";
import Privilege from "./pages/Privilege";

function App() {
  const [productModalProps, setProductModalProps] = useState({});
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);
  const contactLink = useRef(null);

  const onCLickToLink = () => {
    window.scrollTo({
      top: contactLink.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="wrapper">
      <AppContext.Provider
        value={{
          productModalProps,
          setProductModalProps,
          isOpenProductModal,
          onCLickToLink,
          setIsOpenProductModal,
          contactLink,
        }}
      >
        {isOpenProductModal && <ProductModal {...productModalProps} />}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/price" element={<PricePage />} />
          <Route path="/privilege" element={<Privilege />} />
        </Routes>
        <Footer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
