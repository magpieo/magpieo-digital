"use client";

import Squares from "./components/Squares";
import MarqueeServices from "./MarqueeServices";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[80vh] flex flex-col items-center justify-center bg-black text-white">
      {/* Background Squares */}
      <div className="absolute inset-0 z-0">
        <Squares
          direction="diagonal"
          speed={0.5}
          borderColor="rgba(0, 116, 255, 0.2)"
          hoverFillColor="rgba(0, 116, 255, 0.1)"
          squareSize={60}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 text-center px-6 -mt-12 md:-mt-32">
        <h2 className="text-2xl md:text-5xl font-extrabold leading-snug">
          Elevate Your Digital
          <span className="block mt-2">
            Presence with{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #FFFFFF, #0074FF, #FFFFFF, #0074FF)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "gradientWave 7s ease infinite",
              }}
            >
              Magpieo
            </span>
          </span>
        </h2>
        <p className="mt-4 md:text-lg text-gray-300 max-w-5xl mx-auto ">
          At Magpieo, we create innovative digital experiences that drive growth
          and engagement. Whether it’s designing visually stunning websites,
          developing custom mobile apps, implementing data-driven SEO
          strategies, or managing high-impact social media campaigns — we
          transform ideas into measurable results. Our team of designers,
          developers, and digital strategists combines creativity, technology,
          and strategy to help your brand thrive online.
        </p>
        {/* CTA Button */}
        <button className="relative overflow-hidden  bg-white uppercase px-4 py-2 rounded-full font-semibold text-black group transition-all duration-500 mt-3">
          {/* Background Animation */}
          <span className="absolute left-0 top-0 h-full w-0 bg-[#1E90FF] transition-all duration-500 group-hover:w-full"></span>

          {/* Text */}
          <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-all duration-300">
            Let&apos;s Book A Meeting
          </span>
        </button>
      </div>
      {/* <div className=" md:hidden bg-[#1b1a1afb] absolute bottom-0 z-20">
        <MarqueeServices />
      </div> */}
      <div className="bg-[#1b1a1afb] hidden md:block z-20 absolute bottom-12 -rotate-2 overflow-x-hidden ">
        <MarqueeServices />
      </div>
    </section>
  );
};

export default HeroSection;
