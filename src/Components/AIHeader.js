import React from "react";
import "./AIHeader.css"; // Make sure to create and import your CSS file

function AIHeader({ title,Image }) {
  return (
    <div className="header-container" style={{ backgroundImage: `url(${Image})` }}>
    <div className="overlay"></div>
    <div className="container header-text">
      <h1>{title}</h1>
      <p>
        We make complex functionality apps simple, and simple user interfaces
        engaging.
      </p>
    </div>
  </div>
  );
}

export default AIHeader;
