import React from "react";
import OurService from "./Service";
import HeroSection from "./HeroSection";
import Footer from "@/app/components/shared/Footer";
import WhyChoose from "./WhyChoose";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="">
        <div className="max-w-6xl mx-auto ">
          <OurService />
        </div>
        <div className="bg-[#110F0F] ">
          <WhyChoose />
        </div>
      </div>
    </div>
  );
};

export default Home;
