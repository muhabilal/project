import React from "react";
import "./AIDesignServices.css";
import Pic from "../Images/bg-circle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faPencil, faSearch, faMobile, faWindowRestore, faStar } from "@fortawesome/free-solid-svg-icons";
function DesignServices() {
  const services = [
    {
      title: "EXPERIENCE DESIGN",
      description: ["Interaction design", "Usability engineering"],
      icon: faLightbulb,
      color: "orange",
    },
    {
      title: "WEBSITE DESIGN",
      description: [
        "Responsive and adaptive websites",
        "Intranets, e-commerce, promo sites",
      ],
      icon: faPencil,
      color: "red",
    },
    {
      title: "USABILITY AUDIT",
      description: [
        "Information architecture audit",
        "Content inventory, sitemap analysis",
      ],
      icon: faSearch,
      color: "cyan",
    },
    {
      title: "MOBILE DESIGN",
      description: ["Smartphone and tablet", "iOS, Android, Windows Phone"],
      icon: faMobile,
      color: "blue",
    },
    {
      title: "WEB INTERFACE DESIGN",
      description: ["GUI guidelines compliance", "Heuristic principles"],
      icon: faWindowRestore,
      color: "green",
    },
    {
      title: "CORPORATE IDENTITY",
      description: ["Logo design", "Branding guidelines"],
      icon: faStar,
      color: "darkblue",
    },
  ];

  return (
    <div className="design-services-container">
      <div className="circle">
        {services.map((service, index) => (
          <div key={index} className={`service ${service.color}`}>
            {/* <i className={`fa ${service.icon}`} /> */}
            <FontAwesomeIcon icon={service.icon} className="fa"/>
            <h3>{service.title}</h3>
            {service.description.map((desc, idx) => (
              <p key={idx}>{desc}</p>
            ))}
          </div>
        ))}
        
        <div className="center-circle">
          <img src={Pic} alt="center" />
          <h1 className="img-text">DESIGN SERVICES</h1>
        </div>
      </div>
    </div>
  );
}

export default DesignServices;
