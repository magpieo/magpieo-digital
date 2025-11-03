"use client";

import Link from "next/link";
import Squares from "./components/Squares";

const HeroSection = () => {
  console.log("");

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
      <div className="relative z-10 text-center px-6 py-4">
        <h2 className=" text-[26px] md:text-5xl font-extrabold leading-snug">
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
        <p className="mt-4 text-[14px] text-justify md:text-center md:text-lg text-gray-300 max-w-5xl mx-auto ">
          At Magpieo, we create innovative digital experiences that drive growth
          and engagement. Whether it’s designing visually stunning websites,
          developing custom mobile apps, implementing data-driven SEO
          strategies, or managing high-impact social media campaigns — we
          transform ideas into measurable results. Our team of designers,
          developers, and digital strategists combines creativity, technology,
          and strategy to help your brand thrive online.
        </p>
        {/* CTA Button */}
        <Link href={"/contact"}>
          <button className="relative overflow-hidden bg-white uppercase rounded-full font-semibold text-black transition-all duration-500 mt-8 px-6 py-3 text-[13px] md:px-4 md:py-2 md:text-[13px] lg:px-4 lg:py-2 lg:text-[13px] group">
            {/* Background Animation */}
            <span className="absolute left-0 top-0 h-full w-0 bg-[#1E90FF] transition-all duration-500 group-hover:w-full"></span>

            {/* Text */}
            <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-all duration-300 text-[13px] sm:text-[14px] md:text-[13px] lg:text-[13px]">
              Let&apos;s Book A Meeting
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
