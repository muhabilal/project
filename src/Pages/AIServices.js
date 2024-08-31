import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar1 from "../Components/Navbar1";
import AIHeader from "../Components/AIHeader";
import Footer from "../Components/Footer";
import DesignServices from "../Components/AIDesignServices";
import AISwiper from "../Components/AISwiper";
import AIImageContent from "../Components/AIImageContent";
import StartProject from "../Components/StartProject";
import AI from '../Images/ai.jpg'
import CV from '../Images/cv.jpg'
import doc from '../Images/doci.jpg'
import NLP from '../Images/nlp.jpg'
import PM from '../Images/pm.jpg'
import Consultation from '../Images/C.jpg'
import Loader from "../Components/Loader";
import WhatsAppIcon from "../Components/WhatsAppIcon";
function AIServices() {
    const { category } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    header: "Service Not Found",
    content: "The service you are looking for does not exist.",
    image: AI,
  });

  useEffect(() => {
    // Simulate data fetching delay with setTimeout
    setTimeout(() => {
      const categoryData = {
        //Gallery Section props
        AI: {
          header: "Artificial Intelligence",
          content: "Content related to AI",
          image: AI,
        },
        ComputerVision: {
          header: "Computer Vision",
          content: "Content related to Computer Vision",
          image: CV,
        },
        NLP: {
          header: "Natural Language Processing",
          content: "Content related to NLP",
          image: NLP,
        },
        DocumentAI: {
          header: "Document AI",
          content: "Content related to Document AI",
          image: doc,
        },
        PredictiveModeling: {
          header: "Predictive Modeling",
          content: "Content related to Predictive Modeling",
          image: PM,
        },
        Consultations: {
          header: "Consultations",
          content: "Content related to Consultations",
          image: Consultation,
        },
        
        //company dropdown props
        History:{
          header: "History",
          content: "Content related to Consultations",
          image: Consultation,
        },
        Methodology:{
          header: "Methodology",
          content: "Content related to Consultations",
          image: Consultation,
        },
        Business:{
          header: "Business Continuity",
          content: "Content related to Consultations",
          image: Consultation,
        },
        Quality:{
          header: "Quality Management",
          content: "Content related to Consultations",
          image: Consultation,
        },
        Security:{
          header: "Security and IP Protection",
          content: "Content related to Consultations",
          image: Consultation,
        },
        Engagement:{
          header: "Engagement Models",
          content: "Content related to Consultations",
          image: Consultation,
        },

        //Experties drop down props
        Web:{
          header: "Web and Enterprise Portals",
          content: "Content related to Consultations",
          image: Consultation,
        },
        Intranets:{
          header: "Intranets",
          content: "Content related to Consultations",
          image: Consultation,
        },
        Enterprise_Mobile:{
          header: "Enterprise Mobile Apps",
          content: "Content related to Consultations",
          image: Consultation,
        },
        Ecommerce:{
          header: "Ecommerce",
          content: "Content related to Consultations",
          image: Consultation,
        },
        Elearning:{
          header: "Elearning and Online Training",
          content: "Content related to Consultations",
          image: Consultation,
        },
        Fleet:{
          header: "Fleet Management",
          content: "Content related to Consultations",
          image: Consultation,
        },
        Media:{
          header: "Media And Content Distribution",
          content: "Content related to Consultations",
          image: Consultation,
        },
        Business_Process:{
          header: "Business Process Automation",
          content: "Content related to Consultations",
          image: Consultation,
        },
        Business_Intelligence:{
          header: "Business Intelligence",
          content: "Content related to Consultations",
          image: Consultation,
        },
        Software_Security:{
          header: " Software Security",
          content: "Content related to Consultations",
          image: Consultation,
        },
        Salesforce:{
          header: "Salesforce",
          content: "Content related to Consultations",
          image: Consultation,
        },
        Share_Point:{
          header: "Share Point",
          content: "Content related to Consultations",
          image: Consultation,
        },
        Artificial_Intelligence:{
          header: " Artificial Intelligence",
          content: "Content related to Consultations",
          image: Consultation,
        },
        Computer_Vision:{
          header: " Computer Vision",
          content: "Content related to Consultations",
          image: Consultation,
        },
        Augmented_Reality:{
          header: " Augmented Reality",
          content: "Content related to Consultations",
          image: Consultation,
        },
        Mobile_Platforms:{
          header: " Mobile Platforms",
          content: "Content related to Consultations",
          image: Consultation,
        },
        Net:{
          header: ".Net",
          content: "Content related to Consultations",
          image: Consultation,
        },
        Java:{
          header: "Java",
          content: "Content related to Consultations",
          image: Consultation,
        },
        Python:{
          header: "Python",
          content: "Content related to Consultations",
          image: Consultation,
        },
        Ruby:{
          header: "Ruby",
          content: "Content related to Consultations",
          image: Consultation,
        },
        PHP:{
          header: "PHP",
          content: "Content related to Consultations",
          image: Consultation,
        },
        Backend:{
          header: "Backend",
          content: "Content related to Consultations",
          image: Consultation,
        },

        //services drop down props
        Enterprise: {
          header: "Enterprise Software developemt",
          content: "Content related to Consultations",
          image: Consultation,
        },
        WebApp:{
          header: "Web Application",
          content: "Content related to Consultations",
          image: Consultation,
        },
        MobileApp:{
          header: "Mobile App Development",
          content: "Content related to Consultations",
          image: Consultation,
        },
        AppIntegration:{
          header: "Application Integration",
          content: "Content related to Consultations",
          image: Consultation,
        },
        QATesting:{
          header: "QA And Testing",
          content: "Content related to Consultations",
          image: Consultation,
        },
        Team:{
          header: "Dedicated Development Team",
          content: "Content related to Consultations",
          image: Consultation,
        },
      };

      const selectedData = categoryData[category] || data;
      setData(selectedData);
      setLoading(false);
    }, 1000); // Adjust timeout as per your actual data fetching duration
  }, [category]);

  if (loading) {
    return <><Loader/></>; // Replace with a loader component
  }
  return (
    <div>
        <Navbar1/>
        <AIHeader title={data.header} Image={data.image}/>
        <DesignServices/>
        <AISwiper/>
        <AIImageContent/>
        <StartProject/>
        <Footer/>
    </div>
  )
}

export default AIServices