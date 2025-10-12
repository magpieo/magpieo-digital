import RegistrationForm from "@/app/components/shared/RegistrationForm";
import React from "react";

const RegistrationSection = () => {
  return (
    <section className=" text-white py-16 px-3">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
        {/* Left Side (1/3 on large screens) */}
        <div className="lg:w-1/3 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug">
            Have any project in Mind?
          </h2>

          <p className="text-gray-400 text-base leading-relaxed max-w-md mx-auto lg:mx-0">
            From branding to development and marketing, we craft digital
            experiences that drive growth, inspire trust, and make your brand
            unforgettable. Let&apos;s collaborate and bring your next big idea
            to life.
          </p>
        </div>

        {/* Right Side (2/3 on large screens) */}
        <div className="lg:w-2/3 space-y-6">
          <RegistrationForm />
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
