import React from "react";
import "./City.css";
import DataCity from "./DataCity";
function City(props) {
  return (
    <div className="city">
      <div className="cityItem">
        <img src={props.image} alt="" className="cityImg" />
        <div className="cityTitles">
          <h1>{props.name}</h1>
          <h2>{props.subText}</h2>
        </div>
      </div>
    </div>

  );
}

export default City;
