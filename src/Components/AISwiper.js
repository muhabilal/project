import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./AISwiper.css";
import { Autoplay, Pagination } from "swiper/modules";
import Pic from "../Images/bg-circle.png";
import PM from '../Images/pm.jpg';

function AISwiper() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      title: "Wireframes",
      description:
        "Iflexion utilizes wireframing as a basic technique to reduce the cost and risk involved in developing complex interactive systems. We follow a rapid iterative refinement approach, acquiring essential feedback early in the process and bringing focus to objectives, scenarios and intended functionality with increasing levels of fidelity.",
      image: PM,
    },
    {
      title: "Graphic Mockups",
      description: "Iflexion utilizes wireframing as a basic technique to reduce the cost and risk involved in developing complex interactive systems. We follow a rapid iterative refinement approach, acquiring essential feedback early in the process and bringing focus to objectives, scenarios and intended functionality with increasing levels of fidelity.",
      image: Pic,
    },
    {
      title: "Clickable Prototypes",
      description: "Iflexion utilizes wireframing as a basic technique to reduce the cost and risk involved in developing complex interactive systems. We follow a rapid iterative refinement approach, acquiring essential feedback early in the process and bringing focus to objectives, scenarios and intended functionality with increasing levels of fidelity.",
      image: Pic,
    },
    {
      title: "Proof-of-Concept",
      description: "Iflexion utilizes wireframing as a basic technique to reduce the cost and risk involved in developing complex interactive systems. We follow a rapid iterative refinement approach, acquiring essential feedback early in the process and bringing focus to objectives, scenarios and intended functionality with increasing levels of fidelity.",
      image: Pic,
    },
  ];

  const handleButtonClick = (index) => {
    swiperRef.current.swiper.slideTo(index);
    setActiveIndex(index);
  };

  return (
    <>
      <div className="swiper-container">
        <h3 className="swiper-title">WIREFRAMING AND PROTOTYPING</h3>
        <div className="custom-buttons container">
          {slides.map((slide, index) => (
            <button
              key={index}
              className={`swiper-button ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => handleButtonClick(index)}
            >
              {slide.title.toUpperCase()}
            </button>
          ))}
        </div>
        <Swiper
          ref={swiperRef}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="slide-content1">
                <div className="text-content">
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                </div>
                <div className="image-content">
                  <img src={slide.image} alt={slide.title} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default AISwiper;
