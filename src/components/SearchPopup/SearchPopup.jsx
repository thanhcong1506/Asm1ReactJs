import React from "react";
import "./SearchPopup.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchList from "../SearchList/SearchList";
import { searchListData } from "../SearchList/SearchListData";

const SearchPopup = () => {
  return (
    <div className="listContainer">
      <div className="listWrapper">
        <div className="listSearch">
          <h1 className="lsTitle">Search</h1>
          <div className="lsItem">
            <label>Destination</label>
            <input placeholder="" type="text" />
          </div>
          <div className="lsItem">
            <label>Check-in Date</label>
            <span>dd/mm/yyyy</span>
            {/* <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                /> */}
          </div>
          <div className="lsItem">
            <label>Options</label>
            <div className="lsOptions">
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Min price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Max price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Adult</span>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput"
                  placeholder=""
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Children</span>
                <input
                  type="number"
                  min={0}
                  className="lsOptionInput"
                  placeholder=""
                />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Room</span>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput"
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <button>Search</button>
        </div>
        <div className="listResult">
           {searchListData.map((item,i)=>(
            
            <SearchList image={item.image_url}
            name={item.name}
            price={item.price}
            rate={item.rate}
            type={item.type}
            distance={item.distance}
            tag={item.tag}
            free_cancel={item.free_cancel}
            rate_text={item.rate_text}
          />
           ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;
