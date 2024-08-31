// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "./ClientSlider.css";
// import { Autoplay, Pagination } from "swiper/modules";
// import py from "../Images/python2.png";
// import docker from "../Images/docker3.png";
// import tf from "../Images/tf.png";
// import keras from "../Images/keras.png";
// import aws from "../Images/awsec2.png";
// import lambda from "../Images/lambda.png";
// import kubernates from "../Images/kubernates.png";
// import opencv from "../Images/opencv.png";

// const ClientsSlider = () => {
//   return (
//     <div className="slider-container" >
//       <Swiper
//         className="custom-swiper"
//         slidesPerView={6}
//         breakpoints={{
//           320: {
//             slidesPerView: 2,
//             spaceBetween: 10,
//           },
//           375: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           425: {
//             slidesPerView: 3,
//             spaceBetween: 30,
//           },
//           768: {
//             slidesPerView: 4,
//             spaceBetween: 40,
//           },
//           1024: {
//             slidesPerView: 5,
//             spaceBetween: 50,
//           },
//           1440: {
//             slidesPerView: 6,
//             spaceBetween: 60,
//           },
//         }}
//         autoplay={{
//           delay: 1000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination, Autoplay]}
//       >
//         <SwiperSlide className="slide-swiper1">
//           <img src={py} alt="Python" style={{backgroundColor:'red',alignContent:'center'}} />
//         </SwiperSlide>
//         <SwiperSlide className="slide-swiper1">
//           <img src={docker} alt="Docker" className="custom-img" />
//         </SwiperSlide>
//         <SwiperSlide className="slide-swiper1">
//           <img src={tf} alt="TensorFlow" className="custom-img" />
//         </SwiperSlide>
//         <SwiperSlide className="slide-swiper1">
//           <img src={keras} alt="Keras" className="custom-img" />
//         </SwiperSlide>
//         <SwiperSlide className="slide-swiper1">
//           <img src={aws} alt="AWS EC2" className="custom-img" />
//         </SwiperSlide>
//         <SwiperSlide className="slide-swiper1">
//           <img src={lambda} alt="AWS Lambda" className="custom-img" />
//         </SwiperSlide>
//         <SwiperSlide className="slide-swiper1">
//           <img src={kubernates} alt="Kubernetes" className="custom-img" />
//         </SwiperSlide>
//         <SwiperSlide className="slide-swiper1">
//           <img src={opencv} alt="OpenCV" className="custom-img" />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default ClientsSlider;


// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import {  Pagination, Autoplay } from "swiper/modules";
// import py from "../Images/python2.png";
// import docker from "../Images/docker3.png";
// import tf from "../Images/tf.png";
// import keras from "../Images/keras.png";
// import aws from "../Images/awsec2.png";
// import lambda from "../Images/lambda.png";
// import kubernates from "../Images/kubernates.png";
// import opencv from "../Images/opencv.png";
// import "./ClientSlider.css";

// const ClientsSlider = () => {
//   const images = [
//     { src: py, alt: "Python" },
//     { src: docker, alt: "Docker" },
//     { src: tf, alt: "TensorFlow" },
//     { src: keras, alt: "Keras" },
//     { src: aws, alt: "AWS EC2" },
//     { src: lambda, alt: "AWS Lambda" },
//     { src: kubernates, alt: "Kubernetes" },
//     { src: opencv, alt: "OpenCV" },
//   ];

//   return (
//     <div className="slider-container">
//       <Swiper
//         slidesPerView={6}
//         spaceBetween={20}
//         // navigation={true}
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 2000, disableOnInteraction: false }}
//         loop={true}
//         modules={[ Pagination, Autoplay]}
//         className="mySwiper"
//       >
//         {images.map((image, index) => (
//           <SwiperSlide key={index}>
//             <div className="img-wrapper">
//               <img className="custom-img" src={image.src} alt={image.alt} />
//             </div>
//           </SwiperSlide>
//         ))}

//       </Swiper>
//     </div>
//   );
// };

// export default ClientsSlider;




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

