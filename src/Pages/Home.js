
import React, { useState, useEffect, lazy, Suspense } from "react";
import Navbar1 from "../Components/Navbar1";
import { Header } from "../Components/Header";
import Loader from "../Components/Loader";
import { About } from "../Components/About";
import JsonData from "../Data/data.json";
import Footer from "../Components/Footer";
import WhatsAppIcon from "../Components/WhatsAppIcon";
import ClientsSlider from "../Components/ClientSlider";
import  Gallery  from "../Components/Gallary";
import WhyUs from "../Components/WhyUs";
import CTA from "../Components/CTA";
import FAQSection from "../Components/FAQSection";
import StartProject from "../Components/StartProject";

const Portfolio = lazy(() => import("../Components/Portfolio"));

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    // Simulating API call delay with setTimeout
    setTimeout(() => {
      setLandingPageData(JsonData);
      setIsLoading(false); // Set loading to false when data is fetched
    }, 1000); // Adjust timeout duration as per your actual API fetch

    // In real scenario, replace setTimeout with actual data fetching logic
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Navbar1 />
      <Header />
      <About data={landingPageData.About} />
      <Gallery />
      <Suspense fallback={<Loader />}>
        <Portfolio />
      </Suspense>
      <ClientsSlider />
      <WhyUs />
      <CTA />
      <FAQSection />
      <StartProject />
      <Footer />
      <WhatsAppIcon />
    </div>
  );
}

export default Home;
