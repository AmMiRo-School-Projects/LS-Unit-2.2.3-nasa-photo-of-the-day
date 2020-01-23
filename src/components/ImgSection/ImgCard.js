import React from "react";

function ImgCard(props) {
  console.log(props);
  if (!props.nasaData) {
    return <h3>Loading...</h3>;
  }
  return (
    <div className="img-card">
      <h2 className="img-title">{props.nasaData.title}</h2>
      <img
        className="apod"
        src={props.nasaData.hdurl}
        alt={props.nasaData.title}
      />
      <p className="explanation">Explanation: {props.nasaData.explanation}</p>
    </div>
  );
}

export default ImgCard;
