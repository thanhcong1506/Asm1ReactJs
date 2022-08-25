import React from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

import NavBarItem from "../../components/NavBarItem/NavBarItem";
import SearchPopup from "../../components/SearchPopup/SearchPopup";

const Search = () => {
  return (
    <div >
      <NavBar />
      <NavBarItem />
      <SearchPopup />
      <div className="homeContainer">
      <Footer />
    </div>
    </div>
  );
};

export default Search;
