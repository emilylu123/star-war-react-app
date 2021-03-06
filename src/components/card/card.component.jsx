import React from "react";
import "./card.styles.css";

function Card(props) {
  return (
    <div className="card-container" key={props.star.name}>
      <img
        alt="star war"
        src={`https://robohash.org/${props.id}?set=set2&size=180x180`}
      />
      <h3>{props.star.name}</h3>
      <h4>{props.star.gender}</h4>
    </div>
  );
}

export default Card;
