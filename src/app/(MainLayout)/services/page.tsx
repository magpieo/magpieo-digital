import React from "react";

import LetsTalk from "../(Home)/_components/LetsTalk";
import RegistrationSection from "../(Home)/_components/RegistrationSection";
import Link from "next/link";
import Image from "next/image";
import bannerImage from "../../../asset/service/bannerImage.png";
import ServiceSection from "./_components/ServiceSection";
import ParallaxBanner from "./_components/ParallaxImageBanner";
import ParallaxImageBanner from "./_components/ParallaxImageBanner";

const page = () => {
  const services = [
    { id: "1", name: "Web Development" },
    { id: "2", name: "App Development" },
    { id: "3", name: "UI/UX Design" },
  ];
  return (
    <div>
      <div className="flex flex-col min-h-screen bg-black">
        {/* 🔹 Banner Section */}
        {/* <div className="relative w-full h-[30vh] md:h-[30vh] lg:h-[50vh] overflow-hidden max-w-6xl mx-auto">
          <Image
            src={bannerImage}
            alt="About Magpieo Digital"
            fill
            className="object-cover"
            priority
          />
        </div> */}

 <ParallaxImageBanner
        bannerImage={bannerImage.src}
        // title="About Magpieo Digital"
      />

        <div className="   bg-[#110F0F]">
          <ServiceSection />
        </div>

        <div className="max-w-6xl mx-auto bg-[#110F0F]">
          {/* <p>services</p> */}
          <LetsTalk />
        </div>

        <div className="max-w-6xl mx-auto ">
          <RegistrationSection />
        </div>
      </div>

      {services.map((service) => (
        <div key={service.id}>
          {/* ✅ Pass the ID in the route */}
          <Link href={`/services/${service.id}`}>
            <p className="text-blue-600 hover:underline cursor-pointer">
              {service.name}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default page;
