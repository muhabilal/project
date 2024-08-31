import React from 'react';
import { MdOutlineWhatsapp } from "react-icons/md";
import './WhatsAppIcon.css';
const WhatsAppIcon = () => {
  const handleWhatsAppClick = () => {
  
    // window.open('https://wa.me/message/TTZRTGI7SGHHH1'); 
    window.open('https://web.whatsapp.com/'); 
  };

  return (
    <div className="whatsapp-icon" onClick={handleWhatsAppClick}>
     <MdOutlineWhatsapp  className='wIcon'/>
    </div>
  );
};

export default WhatsAppIcon;