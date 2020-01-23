import React from "react";
import HeaderDatePicker from "./HeaderDatePicker";

function Header(props) {
  return (
    <div className="App-header">
      <div className="logo-wrapper">
        <img src={props.logo} alt="NASA logo" />
      </div>
      <h1>Astronomy Picture of the Day</h1>
      {/* <div className="date-picker"><HeaderDatePicker /></div> */}
    </div>
  );
}

export default Header;
