import React from "react";
import { FaCircle } from "react-icons/fa";

const WhyChoose = () => {
  const chooseData = [
    {
      heading: "Global Perspective",
      subText:
        "We understand international markets and trends, creating designs and strategies tailored for global audiences.",
    },
    {
      heading: "Full-Service Expertise",
      subText:
        "From branding to UI/UX design, web & app development, and digital marketing, we offer end-to-end solutions under one roof.",
    },
    {
      heading: "Cutting-Edge Technology",
      subText:
        "We use modern tools like React, Next.js, Node.js, and AI-powered marketing for top performance and scalability.",
    },
    {
      heading: "Data-Driven, Result-Oriented",
      subText:
        "Every strategy we create is backed by analytics and research to deliver measurable results for your business.",
    },
    {
      heading: "Dedicated Support",
      subText:
        "Our team partners with you every step of the way, offering personalized support and continuous improvement for long-term success.",
    },
  ];

  return (
    <section className="bg-[#110F0F] text-white py-16 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Side */}
        <div className="space-y-5 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug">
            Why Choose <span className="text-blue-500">Magpieo?</span>
          </h2>
          <div className="w-20 h-[3px] bg-blue-500 mx-auto lg:mx-0 rounded-md"></div>
          <p className="text-gray-300 text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
            We craft impactful digital solutions that blend innovation,
            creativity, and strategy — helping global brands grow and thrive in
            the digital age.
          </p>
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          {chooseData.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-900/20 transition-all duration-300"
            >
              <div className="mt-1 text-blue-500 flex-shrink-0">
                <FaCircle size={10} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-1">
                  {item.heading}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {item.subText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
