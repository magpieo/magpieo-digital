import React from "react";

const RegistrationSection = () => {
  return (
    <section className="bg-[#110F0F] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
        {/* Left Side (1/3 on large screens) */}
        <div className="lg:w-1/3 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug">
            Have any project in Mind?
          </h2>

          <p className="text-gray-400 text-base leading-relaxed max-w-md mx-auto lg:mx-0">
            From branding to development and marketing, we craft digital
            experiences that drive growth, inspire trust, and make your brand
            unforgettable. Let'&apos's collaborate and bring your next big idea to
            life.
          </p>

          <button className="relative overflow-hidden border border-gray-400 text-[10px] sm:text-xs md:text-sm uppercase px-5 py-2 rounded-full font-medium text-white group transition-all duration-500 cursor-pointer">
            {/* Background animation */}
            <span className="absolute left-0 top-0 h-full w-0 bg-[#1E90FF] transition-all duration-500 group-hover:w-full"></span>

            {/* Text + Icon */}
            {/* <span className="relative z-10 flex items-center gap-2 justify-center">
                  Download Portfolio
                  <FaDownload className="text-[12px] sm:text-[14px] transition-transform duration-300 group-hover:translate-y-[2px]" />
                </span> */}
          </button>
        </div>

        {/* Right Side (2/3 on large screens) */}
        <div className="lg:w-2/3 space-y-6"></div>
      </div>
    </section>
  );
};

export default RegistrationSection;
