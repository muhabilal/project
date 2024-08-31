import CardComponent from "./CardComponent";
import React from "react";
import aiImg from "../Images/ai.jpg";
import CVision from "../Images/cv.jpg";
import NLP from "../Images/nlp.jpg";
import DocAI from "../Images/doci.jpg";
import PM from "../Images/pm.jpg";
import CON from "../Images/C.jpg";
const Gallery = () => {
  const cardsData = [
    {
      title: "Artificial Intelligence",
      desc: "Harness the power of AI to automate processes, analyze data, and create smarter applications.",
      imageUrl: aiImg,
      // link: "/AI",
      link: "/category/AI",
    },
    {
      title: "Computer Vision",
      desc: "Implement cutting-edge computer vision technologies to process and analyze images and videos.",
      imageUrl: CVision,
      // link: "https://www.google.com",
      link: "/category/ComputerVision",
    },
    {
      title: "Natural Language Processing",
      desc: "Utilize NLP to unlock valuable insights from text data, enhancing customer support and engagement.",
      imageUrl: NLP,
      // link: "https://www.google.com",
      link: "/category/NLP",
    },
    {
      title: "Document AI",
      desc: "Automate document processing with AI, improving efficiency and reducing manual tasks.",
      imageUrl: DocAI,
      // link: "https://www.example.com",
      link: "/category/DocumentAI",
    },
    {
      title: "Predictive Modeling",
      desc: "Forecast future trends and behaviors with our predictive modeling services, driving informed decision-making.",
      imageUrl: PM,
      // link: "https://www.example.com",
      link: "/category/PredictiveModeling",
    },
    {
      title: "Consultations",
      imageUrl: CON,
      desc: "Expert consultations to guide your journey in adopting the latest technologies for business growth.",
      // link: "https://www.example.com",
      link: "/category/Consultations",
    },
  ];
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2 style={{textAlign:'center'}}>Services</h2>
          <p>
            Our comprehensive suite of services leverages the latest
            advancements in technology to deliver cutting-edge solutions
            tailored to your business needs.
          </p>
        </div>

        <div className="row">
          {cardsData.map((card, index) => (
            <CardComponent
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
export default Gallery
