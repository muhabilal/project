
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import py from "../Images/python2.png";
import docker from "../Images/docker3.png";
import tf from "../Images/tf.png";
import keras from "../Images/keras.png";
import aws from "../Images/awsec2.png";
import lambda from "../Images/lambda.png";
import kubernates from "../Images/kubernates.png";
import opencv from "../Images/opencv.png";
import "./ClientSlider.css";

const ClientsSlider = () => {
  const images = [
    { src: py, alt: "Python" },
    { src: docker, alt: "Docker" },
    { src: tf, alt: "TensorFlow" },
    { src: keras, alt: "Keras" },
    { src: aws, alt: "AWS EC2" },
    { src: lambda, alt: "AWS Lambda" },
    { src: kubernates, alt: "Kubernetes" },
    { src: opencv, alt: "OpenCV" },
  ];

  return (
    <div className="slider-container">
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="over-ride">
            <div className="slide-item">
              <img src={image.src} alt={image.alt} className="slide-image" />
              <span className="slide-caption">{image.alt}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientsSlider;

