import React, { useEffect, useRef, useState } from "react";
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
import ContactPage from "./pages/ContactPage";
import Reservations from "./pages/Reservations";

function App() {
  const [productModalProps, setProductModalProps] = useState({});
  const [reservationList, setReservationList] = useState([]);
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);
  const [reviewsArr, setReviewsArr] = useState([]);
  const contactLink = useRef(null);

  useEffect(() => {
    //Достаем данные о прошлых записях с бекенда
    getData("https://65749a94b2fbb8f6509c6a0e.mockapi.io/reservations").then(
      (data) => {
        console.log(data);
        setReservationList((prevState) => data);
      }
    );
     //Достаем данные о прошлых отзываъ с бекенда
    getData("https://65749a94b2fbb8f6509c6a0e.mockapi.io/reviews").then(
      (data) => {
        console.log(data);
        setReviewsArr((prevState) => data);
      }
    );
  }, []);

  const getData = async (url) => {
    const res = await fetch(url);
    return res.json();
  };

  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
    });
    return res.json();
  };

  const deleteData = async (url, id) => {
    const res = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    return res.json();
  };

  const completeReservations = (obj) => {
    let [date, time] = new Date().toJSON().split("T");
    time = time.slice(0, -8);
    const updateObj = {
      name: obj.name,
      phone: obj.phone.includes("+") ? obj.phone : "+" + obj.phone,
      description: obj.description,
      date,
      time,
      uniqId: Math.trunc(Math.random() * 1000),
    };

    postData(
      "https://65749a94b2fbb8f6509c6a0e.mockapi.io/reservations",
      updateObj
    ).then((data) => setReservationList((prevState) => [...prevState, data]));
    // getData("https://65749a94b2fbb8f6509c6a0e.mockapi.io/reservations");
  };

  const completeReviews = (obj) => {
    const updateObj = {
      name: obj.valueOfNameInput,
      location: obj.valueOfLocationInput,
      review: obj.valueOfTextarea,
    };

    postData(
      "https://65749a94b2fbb8f6509c6a0e.mockapi.io/reviews",
      updateObj
    ).then((data) => setReviewsArr((prevState) => [...prevState, data]));
    // getData("https://65749a94b2fbb8f6509c6a0e.mockapi.io/reservations");
  };


  const deleteReservations = (url, id) => {
    setReservationList((prevState) =>
      prevState.filter((item) => item.id !== id)
    );
    deleteData(url, id);
  };

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
          completeReviews,
          completeReservations,
          reservationList,
          productModalProps,
          setProductModalProps,
          isOpenProductModal,
          onCLickToLink,
          setIsOpenProductModal,
          contactLink,
          reviewsArr,
          setReviewsArr,
          deleteReservations,
        }}
      >
        {isOpenProductModal && <ProductModal {...productModalProps} />}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/price" element={<PricePage />} />
          <Route path="/privilege" element={<Privilege />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/reservations" element={<Reservations />} />
        </Routes>
        <Footer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
