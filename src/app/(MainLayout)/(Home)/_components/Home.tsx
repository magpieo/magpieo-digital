import React from "react";
import OurService from "./Service";
import HeroSection from "./HeroSection";
import Footer from "@/app/components/shared/Footer";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Footer/>
      <div className="px-4">
        <div className="max-w-6xl mx-auto ">
          <OurService />
        </div>
      </div>
    </div>
  );
};

export default Home;
