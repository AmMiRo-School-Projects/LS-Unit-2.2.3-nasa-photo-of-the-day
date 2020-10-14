import React from "react";
// import HeaderDatePicker from "./HeaderDatePicker";
import styled from "styled-components";

const HeaderDiv = styled.div`
  height: 12vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  margin: 0 auto;
`;

const LogoDiv = styled.div`
  height: 95%;
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  max-height: 100%;
  object-fit: scale;
  flex-shrink: 1;
`;

function Header(props) {
  return (
    <HeaderDiv className="App-header">
      <LogoDiv className="logo-wrapper">
        <LogoImg src={props.logo} alt="NASA logo" />
        <h1>Astronomy Picture of the Day</h1>
      </LogoDiv>
      {/* <HeaderDatePicker className="date-picker" /> */}
    </HeaderDiv>
  );
}

export default Header;
