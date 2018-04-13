import React from "react";
import "./FoodCard.css";

const FoodCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        {/* <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li> */}
      </ul>
    </div>
    <span onClick={() => props.handleIncrement(props.id)}>
      𝘅
    </span>
  </div>
);

export default FoodCard;