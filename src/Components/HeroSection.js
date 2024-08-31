import React from "react";
import "./HeroSection.css";
// import "./styles/about.css";
// import videoBg from "../Images/bg.mp4";
// import bgposter from '../images/abstract.jpg';
import { useTypewriter, Cursor } from "react-simple-typewriter";

const HeroSection = ({videoContent}) => {
  const [text] = useTypewriter({
    words: [
      "Graphic Design Services",
      "Shopify Development",
      "Marketing Services",
      "Video Editing",
      "Web Development",
      "Writing Services",
      "Social Media Management",
    ],
    loop: {},
  });
  const neonGlow = {
    fontSize: "20px",
    color: "white",
    // textShadow: '0 0 10px rgba(183, 0, 255, 0.8), 0 0 20px rgba(162, 0, 255, 0.6), 0 0 30px rgba(212, 0, 255, 0.4)',
    transition: "text-shadow 0.3s ease-in-out",
  };

  return (
    <>
      <div className="main">
        <div className="overlay"></div>
        <video src={videoContent} autoPlay loop muted />
      </div>
      <div className="content1">
        <h1>
          BE SEEN, BE HEARD, BE FOUND <br />
          <span className="contH">
            Empower Your Digital Presence with FAIR ServiceX
          </span>
        </h1>
        <p style={{ fontSize: "20px" }}>
          We offer <span style={neonGlow}>{text}</span>
          <Cursor />
        </p>
        <button className="button-hover-effect">Contact Us</button>
      </div>
    </>
  );
};

export default HeroSection;
