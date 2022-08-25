import React from "react";
import Footer from "../../components/Footer/Footer";
import HotelDetail from "../../components/HotelDetail/HotelDetail";
import MailList from "../../components/MailList/MailList";
import Navbar from "../../components/NavBar/NavBar";
import NavBarItem from "../../components/NavBarItem/NavBarItem";



const Detail = () => {
  return (
    <div>
      <div>
      <Navbar />
      <NavBarItem />
      <HotelDetail />
      <MailList />
      <div className="homeContainer">
      <Footer />
    </div>
    </div>
    </div>
  );
};

export default Detail;
