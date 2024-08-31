import React, { useEffect } from 'react'
import logoImg from "../Images/Icon's for Web-1_prev_ui.png";
import './FeaturedImg.css'
import './Button.css'
import Aos from "aos";
// import "aos/dist/aos.css";
const FeaturedImg = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
     <div className='featuredImg' >{/*data-aos="slide-right" > */}
        <img src={logoImg} alt="logo"  />
      <div>
      
        <h1 className='allText animated-buttonH'> <span></span>
  <span></span>
  <span></span>
  <span></span>WHO ARE WE?</h1>
        <h1 className='allText'>Fair ServiceX</h1>
        <p className='f_para'> We are a dynamic team of digital enthusiasts dedicated to transforming your online presence. With a passion for innovation and a commitment to excellence, we bring a diverse set of skills in Graphic Design, Digital Marketing, Shopify Expertise, Web Development, Video Editing, SEO, and beyond. Our collective goal is to elevate your brand and propel it into the digital spotlight. From pixel-perfect designs to strategic marketing campaigns, we thrive on crafting solutions that not only meet but exceed your expectations. Discover the essence of collaboration, creativity, and client satisfaction with FAIR ServiceX – where your digital success is our foremost priority.</p>
        </div>
    </div>
    </>
  )
}

export default FeaturedImg