import React from "react";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
import "./AIImageContent.css";

function AIImageContent() {
  return (
    <div className="header-img">
      <div className="container heading-txt">
        <ScrollAnimation animateIn="animate__fadeInDown">
          <h3>
            END-TO-END, CONCEPT-TO-USER PRODUCTIVITY, PROTOTYPE-TO-PRODUCTION
          </h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInUp">
          <p>
            We take a highly transparent iterative approach to the user-centered
            design processes, starting with a thorough examination of use cases
            and customer’s aesthetic preferences and incorporating testing
            activities early in the UI prototyping stage. At the development
            stage the Iflexion’s goal is to deliver functional interfaces as
            early as possible to leave enough space for possible changes and
            improvements. Below are the tools and methods we apply to ensure
            seamless, fluid, relevant and engaging experiences for end users:
          </p>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default AIImageContent;
