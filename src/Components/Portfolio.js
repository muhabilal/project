import React from "react";
import Software from "../Images/Software.webp";
import Business from "../Images/Business.webp";
import Trading from "../Images/trading.webp";
import Social from "../Images/social.webp";
import Quality from "../Images/Quality.webp";
import UI from "../Images/UI.webp";
import PortFolioComponent from "./PortFolioComponent";
import './Portfolio.css'

 const Portfolio = () => {
  const cardsData = [
    {
      title: "Software Engineering",
      desc: "Harness the power of AI to automate processes, analyze data, and create smarter applications.",
      imageUrl: UI,
      link: "/portfolio/AI",
    },
    {
      title: "Business Process Automation",
      desc: "Implement cutting-edge computer vision technologies to process and analyze images and videos.",
      imageUrl: UI,
      link: "/portfolio/ComputerVision",
    },
    {
      title: "e-Learning & Online Traning",
      desc: "Utilize NLP to unlock valuable insights from text data, enhancing customer support and engagement.",
      imageUrl: UI,
      link: "/portfolio/NLP",
    },
    {
      title: "Soial Networking",
      desc: "Automate document processing with AI, improving efficiency and reducing manual tasks.",
      imageUrl: UI,
      link: "/portfolio/DocumentAI",
    },
    {
      title: "Quality Assurance",
      desc: "Forecast future trends and behaviors with our predictive modeling services, driving informed decision-making.",
      imageUrl: UI,
      link: "/portfolio/PredictiveModeling",
    },
    {
      title: "UI/UX Design",
      imageUrl: UI,
      desc: "Expert consultations to guide your journey in adopting the latest technologies for business growth.",
      link: "/portfolio/Consultations",
    },
  ];

  return (
    <div className="main-portfolio" id="portfolio-section">
      <div className="container" >
        <div className="section-title text-center" style={{textAlign:'Center'}}>
          <h2 style={{textAlign:'center'}}>Portfolio</h2>
          <div className="bar2"></div>
        </div>
        <div className="row" style={{margin:'50px 0px'}}>
         {cardsData.map((card, index) => (
            <PortFolioComponent
              key={index}
              title={card.title}
              imageUrl={card.imageUrl}
              desc={card.desc}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Portfolio;



