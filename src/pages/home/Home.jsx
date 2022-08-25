import NavBar from "../../components/NavBar/NavBar";
import React from "react";
import Header from "../../components/Header/Header";
import NavBarItem from "../../components/NavBarItem/NavBarItem";
import "./Home.css";
import MailList from "../../components/MailList/MailList";
import Footer from "../../components/Footer/Footer";
import City from "../../components/City/City";
import Type from "../../components/Type/Type";
import HotelList from "../../components/HotelList/HotelList";
import Card from "../../components/UI/Card";
import { dataCity } from "../../components/City/DataCity";
import { typeData } from "../../components/Type/TypeData";
import { hotelListData } from "../../components/HotelList/HotelListData";

const Home = () => {
  return (
    <div>
      <NavBar />
     
      <NavBarItem />
      <Header />
      <div className="homeContainer">
        <Card>
          {dataCity.map((item) => (
            <City image={item.image} name={item.name} subText={item.subText} />
          ))}
        </Card>
        <h1 className="homeTitle">Browse by property type</h1>
        <Card>
          {typeData.map((item) => (
            <Type image={item.image} name={item.name} count={item.count} />
          ))}
        </Card>

        <h1 className="homeTitle">Homes guests love</h1>
        <Card className="hotelList">
          {hotelListData.map((item) => (
            <HotelList
              image={item.image_url}
              name={item.name}
              price={item.price}
              city={item.city}
              rate={item.rate}
              type={item.type}
            />
          ))}
        </Card>
        <MailList />

        <Footer />

      </div>
    </div>
  );
};

export default Home;
