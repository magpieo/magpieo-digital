import React from "react";
import OurService from "./Service";
import HeroSection from "./HeroSection";
import OurCreations from "./Creatons";
import WhyChoose from "./WhyChoose";
import Technology from "./Technology";
import RegistrationSection from "./RegistrationSection";

const Home = () => {
  return (
    <div>
      <HeroSection />

      <div className="">
        <div className="max-w-6xl mx-auto ">
          <RegistrationSection />
        </div>
        <div className="max-w-6xl mx-auto ">
          <Technology />
        </div>
        <div className="max-w-6xl mx-auto ">
          <OurService />
          <OurCreations />
        </div>
        <div className="bg-[#110F0F] ">
          <WhyChoose />
        </div>
      </div>
    </div>
  );
};

export default Home;
