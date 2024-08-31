import React, { useState, useEffect,lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";
import HeroSection from "../Components/HeroSection";
import FeaturedImg from "../Components/FeaturedImg";
import Stats from "../Components/Stats";
import CardData from "../Components/CardData";
import Navbar1 from "../Components/Navbar1";
import WhatsAppIcon from "../Components/WhatsAppIcon";
//import vidoes
import videoBg from "../Images/bg.mp4";
import computerVision from "../Images/ComputerVision.mp4";
import NLP from "../Images/NLPVideo.mp4";
import DocumentAI from "../Images/DocumentAI.mp4";
// const HeroSection = lazy(() => import("../Components/HeroSection"));
function PortfolioPage() {
  const { category } = useParams();

  const categoryData = {
    AI: {
      videos: videoBg,
    },
    ComputerVision: {
      videos: computerVision,
    },
    NLP: {
      videos: NLP,
    },
    DocumentAI: {
      videos: DocumentAI,
    },
    PredictiveModeling: {
      header: "Predictive Modeling",
      content: "Content related to Predictive Modeling",
    },
    Consultations: {
      header: "Consultations",
      content: "Content related to Consultations",
    },
  };

  const [isLoading, setIsLoading] = useState(true); // State to manage loading state
  const [data, setData] = useState({
    header: "Service Not Found",
    content: "The service you are looking for does not exist.",
  });

  useEffect(() => {
    // Simulating data fetching delay with setTimeout
    setTimeout(() => {
      const serviceData = categoryData[category];
      if (serviceData) {
        setData(serviceData);
      }
      setIsLoading(false); // Set loading to false once data is fetched
    }, 1000); // Adjust timeout duration as per your actual data fetch
  }, [category]);

  // Render Loader if isLoading is true
  if (isLoading) {
    return <Loader />;
  }

  // Render content once data is fetched
  return (
    <>
      <Navbar1 />
        <HeroSection videoContent={data.videos} />
      <FeaturedImg />
      <CardData />
      <Stats />
      <Footer />
      <WhatsAppIcon />
    </>
  );
}

export default PortfolioPage;
