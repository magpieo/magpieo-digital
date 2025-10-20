"use client";

import Image from "next/image";

import bannerImage from "../../../asset/about/banner.png";
import AboutUs from "./_components/AboutUs";
import LetsTalk from "../(Home)/_components/LetsTalk";
import OurCommitment from "./_components/OurCommitment";

const Page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* 🔹 Banner Section */}
      <div className="relative w-full h-[30vh] md:h-[30vh] lg:h-[50vh] overflow-hidden">
        <Image
          src={bannerImage}
          alt="About Magpieo Digital"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="bg-[#110F0F]">
        <AboutUs />
      </div>
      <div className="bg-[#110F0F]">
        <OurCommitment />
      </div>

      <LetsTalk />
    </div>
  );
};

export default Page;
