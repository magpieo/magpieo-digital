import React from "react";

import LetsTalk from "../(Home)/_components/LetsTalk";
import RegistrationSection from "../(Home)/_components/RegistrationSection";

import bannerImage from "../../../asset/service/bannerImage.png";
import ServiceSection from "./_components/ServiceSection";

import ParallaxImageBanner from "./_components/ParallaxImageBanner";
import ServicesCards from "./_components/ServicesCards";

const page = () => {
  // const services = [
  //   { id: "1", name: "Web Development" },
  //   { id: "2", name: "App Development" },
  //   { id: "3", name: "UI/UX Design" },
  // ];
  return (
    <div>
      <div className="flex flex-col min-h-screen bg-black">
        <ParallaxImageBanner
          bannerImage={bannerImage.src}
          // title="About Magpieo Digital"
        />

        <div className="   bg-[#110F0F]">
          <ServiceSection />
        </div>
        <div className="">
          <ServicesCards />
        </div>

        <div className="max-w-6xl mx-auto bg-[#110F0F]">
          <LetsTalk />
        </div>

        <div className="max-w-6xl mx-auto ">
          <RegistrationSection />
        </div>
      </div>
      {/* 
      {services.map((service) => (
        <div key={service.id}>
        
          <Link href={`/services/${service.id}`}>
            <p className="text-blue-600 hover:underline cursor-pointer">
              {service.name}
            </p>
          </Link>
        </div>
      ))} */}
    </div>
  );
};

export default page;
