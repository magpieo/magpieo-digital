import React from "react";
import OurService from "./Service";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="px-4">
        <div className="max-w-6xl mx-auto ">
          <OurService />
        </div>
      </div>
    </div>
  );
};

export default Home;
