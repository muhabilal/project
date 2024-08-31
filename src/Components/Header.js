import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import './Header.css';
import "animate.css";
import { Navigation, Autoplay } from "swiper/modules";

export const Header = (props) => {
  // Function to add animation classes
  const addAnimationClasses = (swiper) => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    activeSlide.querySelectorAll(".animate__animated").forEach((element) => {
      element.classList.remove(
        "animate__fadeIn",
        "animate__fadeInDown",
        "animate__fadeInUp"
      );
      void element.offsetWidth; // trigger reflow
      element.classList.add(
        "animate__fadeIn",
        "animate__fadeInDown",
        "animate__fadeInUp"
      );
    });
  };

  return (
    <>
      <Swiper
        style={{ background: '#010115' }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        onSlideChange={(swiper) => addAnimationClasses(swiper)}
        onSwiper={(swiper) => addAnimationClasses(swiper)}
        autoplay={{
          delay: 6000, // Delay in milliseconds
          disableOnInteraction: false,
        }}
        loop={true} // Enables looping
      >
        <SwiperSlide>
          <div className="slide-content animate__animated animate__fadeIn">
            <h1
              className="slide-title animate__animated animate__fadeInDown"
              style={{ "--white-color": '#fff' }}
            >
              Welcome to Convaite
            </h1>
            <p
              className="slide-text animate__animated animate__fadeInUp"
              style={{ "--white-color": '#fff' }}
            >
              Unlock the full potential of your business with our cutting-edge
              AI solutions. From predictive analytics to
            </p>
            <p
              className="slide-text-center animate__animated animate__fadeInUp"
              style={{ "--white-color": '#fff' }}
            >
              automated customer service, let's innovate together.
            </p>
            <button className="animate__animated animate__fadeInUp button-hover-effect">
              Discover More
            </button>
          </div>
        </SwiperSlide>

        {/* 2nd slider */}
        <SwiperSlide>
          <div className="slide-content animate__animated animate__fadeIn">
            <h1
              className="slide-title animate__animated animate__fadeInDown"
              style={{ "--white-color": '#fff' }}
            >
              Transform Your Data into Insights
            </h1>
            <p
              className="slide-text animate__animated animate__fadeInUp"
              style={{ "--white-color": '#fff' }}
            >
              Leverage the power of machine learning and data analytics to make
              informed decisions, optimize
            </p>
            <p
              className="slide-text-center animate__animated animate__fadeInUp"
              style={{ "--white-color": '#fff' }}
            >
              operations, and create personalized customer experiences.
            </p>
            <button className="animate__animated animate__fadeInUp button-hover-effect">
              Learn How
            </button>
          </div>
        </SwiperSlide>

        {/* 3rd slider */}
        <SwiperSlide>
          <div className="slide-content animate__animated animate__fadeIn">
            <h1
              className="slide-title animate__animated animate__fadeInDown"
              style={{ "--white-color": '#fff' }}
            >
              Empower Your Business with AI
            </h1>
            <p
              className="slide-text animate__animated animate__fadeInUp"
              style={{ "--white-color": '#fff' }}
            >
              Embrace the future by integrating AI into your workflows. Our
              solutions are designed to enhance
            </p>
            <p
              className="slide-text-center animate__animated animate__fadeInUp"
              style={{ "--white-color": '#fff' }}
            >
              efficiency, reduce costs, and drive innovation.
            </p>
            <button className="animate__animated animate__fadeInUp button-hover-effect">
              Get Started
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
