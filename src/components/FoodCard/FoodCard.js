import React from "react";
import "./FoodCard.css";

const FoodCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={() => props.handleIncrement(props.id)} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>     
      </ul>
    </div>
    {/* <span onClick={() => props.handleIncrement(props.id)}></span> */}
  </div>
);

export default FoodCard;