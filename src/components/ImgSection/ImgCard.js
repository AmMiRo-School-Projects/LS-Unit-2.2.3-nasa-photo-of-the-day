import React from "react";
import styled from "styled-components";

const ApodDiv = styled.div`
  color: white;
  text-align: center;
  width: 100%;
  background-color: #383838;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ApodH2 = styled.h2`
  margin: 3%;
`;

const ApodImg = styled.img`
  width: 100%;
`;

const ApodP = styled.p`
  margin: 3%;
`;

function ImgCard(props) {
  console.log(props);
  if (!props.nasaData) {
    return <h3>Loading...</h3>;
  }
  return (
    <ApodDiv className="img-card">
      <ApodH2 className="img-title">{props.nasaData.title}</ApodH2>
      <ApodImg
        className="apod"
        src={props.nasaData.hdurl}
        alt={props.nasaData.title}
      />
      <ApodP className="explanation">{props.nasaData.explanation}</ApodP>
    </ApodDiv>
  );
}

export default ImgCard;
