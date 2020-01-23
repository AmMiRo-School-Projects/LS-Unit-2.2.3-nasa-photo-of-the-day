import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header/HeaderCard";
import logo from "./assets/nasa-logo.png";
import ImgCard from "./components/ImgSection/ImgCard";
import Footer from "./components/Footer/Footer";
import styled from "styled-components";
import "./App.css";

const AppDiv = styled.div`
  max-width: 100%;
  background-image: url({nasaData.hdurl});
`;

function App() {
  var [nasaData, setNasaData] = useState();
  // const [date, setDate] = useState();
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=Tn29fbPFU60KjrekRWjh1encJfdOiKXfPb3Q0KQX"
      )
      .then(response => {
        console.log(response);
        setNasaData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <AppDiv className="App">
      <Header logo={logo} />
      <ImgCard nasaData={nasaData} />
      <Footer />
    </AppDiv>
  );
}

export default App;
