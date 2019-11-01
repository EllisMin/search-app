import React from "react";
import "./card.styles.css";

export const Card = props => (
  <div className="card-container">
    <img
      alt="user"
      src={`https://robohash.org/${props.user.id}?set=set4&size=180x180`}
    />
    <h2> {props.user.name} </h2>
    <p> {props.user.email} </p>
  </div>
);
