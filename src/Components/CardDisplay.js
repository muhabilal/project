import React from "react";
import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import "./Card.css";
const CardDisplay = (props) => {
  return (
    <div className="card1 card_serv">
      <img src={props.image} alt={props.title} />
      <div className="card-body1">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <div className="cardLink">
          <Link to={props.link}  rel="noreferrer">
            Visit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardDisplay;