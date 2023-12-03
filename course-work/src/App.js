import React, { useState } from "react";
import "./index.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import ProductModal from "./components/ProductModal/ProductModal";
import AppContext from "./context";
import { Route, Routes } from "react-router";
import ContactUs from "./components/Contact-us/Contact-us";
import PricePage from "./pages/PricePage";

function App() {
  const [productModalProps, setProductModalProps] = useState({});
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);
  return (
    <div className="wrapper">
      <AppContext.Provider
        value={{
          productModalProps,
          setProductModalProps,
          isOpenProductModal,
          setIsOpenProductModal,
        }}
      >
        {isOpenProductModal && <ProductModal {...productModalProps} />}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/price" element={<PricePage />} />
        </Routes>
        <Footer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
