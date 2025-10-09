import React from "react";
import OurService from "./Service";
import HeroSection from "./HeroSection";
 
import WhyChoose from "./WhyChoose";
import Technology from "./Technology";
import LetsTalk from "./LetsTalk";

const Home = () => {

  return (
    <div>
      <HeroSection />
      <div className="">
     
        <div className="max-w-6xl mx-auto ">
          <Technology />
        </div>
        <div className="max-w-6xl mx-auto ">
          <OurService />
        </div>
        <div className="bg-[#110F0F] ">
          <WhyChoose />
        </div>
            <div className="max-w-6xl mx-auto ">
          <LetsTalk />
        </div>
      </div>
    </div>
  );
};

export default Home;
