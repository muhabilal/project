
import React from "react";
import "./CardComponent.css";
import { Link } from "react-router-dom";
function CardComponent({ title, desc, imageUrl, link }) {
  return (
    <div className="col-md-4 " style={{ marginBottom: 20 }} >
      <Link
        to={link}
        // target="_blank"
        rel="noopener noreferrer"
        className="card-link"
        style={{ cursor: "pointer" }}
      >
        <div className="card card-hover" id="card-ser">
          <div className="card-body text-center">
            <h5
              style={{ fontSize: "1.5rem", fontWeight: 500 }}
              className="card-title"
            >
              {title}
            </h5>
            <p>{desc}</p>
          </div>
          <div className="card-img-overlay">
            <img src={imageUrl} className="card-img" alt={title} />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CardComponent;
