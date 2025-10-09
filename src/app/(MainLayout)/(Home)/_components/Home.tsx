import React from "react";
import OurService from "./Service";
import HeroSection from "./HeroSection";
import OurCreations from "./Creatons";
import WhyChoose from "./WhyChoose";
import Technology from "./Technology";
import RegistrationSection from "./RegistrationSection";
import LetsTalk from "./LetsTalk";

const Home = () => {
  return (
    <div>
      <HeroSection />

      <div className="">
        <div className="  bg-[#110F0F]">
          <OurService />
        </div>

        <div className="  ">
          <WhyChoose />
        </div>
        <div className="bg-[#110F0F]">
          <OurCreations />
        </div>
        <div className="max-w-6xl mx-auto ">
          <LetsTalk />
        </div>

        <div className="   bg-[#110F0F]">
          <Technology />
        </div>

        <div className="max-w-6xl mx-auto ">
          <RegistrationSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
