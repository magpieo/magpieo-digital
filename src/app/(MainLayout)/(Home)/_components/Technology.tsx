"use client";
import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaFire,
  FaChartBar,
  FaPaintBrush,
  FaCode,
  FaFigma,
  FaWordpress,
  FaSearch,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiFramer,
  SiMysql,
  SiAdobeillustrator,
  SiCanva,
  SiAdobexd,
  SiGoogleads,
  SiMeta,
} from "react-icons/si";

const techIcons = [
  { icon: FaReact, color: "#38BDF8", name: "React" },
  { icon: SiNextdotjs, color: "#FFFFFF", name: "Next.js" },
  { icon: FaNodeJs, color: "#22C55E", name: "Node.js" },
  { icon: FaCode, color: "#D1D5DB", name: "Express.js" },
  { icon: SiMongodb, color: "#4ADE80", name: "MongoDB" },
  { icon: FaFire, color: "#F97316", name: "Firebase" },
  { icon: SiMysql, color: "#3B82F6", name: "MySQL" },
  { icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind CSS" },
  { icon: SiFramer, color: "#EC4899", name: "Framer Motion" },
  { icon: FaFigma, color: "#A855F7", name: "Figma" },
  { icon: SiAdobexd, color: "#F472B6", name: "Adobe XD" },
  { icon: FaWordpress, color: "#3B82F6", name: "WordPress" },
  { icon: FaPaintBrush, color: "#FACC15", name: "Elementor" },
  { icon: FaSearch, color: "#86EFAC", name: "SEO Tools" },
  { icon: FaChartBar, color: "#60A5FA", name: "Google Analytics" },
  { icon: SiGoogleads, color: "#3B82F6", name: "Google Ads" },
  { icon: SiMeta, color: "#2563EB", name: "Meta Ads" },
  { icon: SiCanva, color: "#38BDF8", name: "Canva" },
  { icon: SiAdobeillustrator, color: "#FB923C", name: "Adobe Illustrator" },
];

// Split array into two halves
const firstHalf = techIcons.slice(0, Math.ceil(techIcons.length / 2));
const secondHalf = techIcons.slice(Math.ceil(techIcons.length / 2));

const Technology = () => {
  return (
    <section className="text-white py-16 px-4 overflow-hidden relative">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">
          We use awesome{" "}
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
            Technology
          </span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
          Our workflow is powered by modern tools and technologies that ensure
          creativity, speed, and scalability — from design to deployment.
        </p>
      </div>

      {/* 1st Slider */}
      <div className="w-full overflow-hidden relative mb-4">
        <div className="flex animate-marquee">
          {[...firstHalf, ...firstHalf].map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="group flex-shrink-0 flex flex-col items-center justify-center w-[180px] sm:w-[200px] md:w-[220px] mx-1 text-center bg-[#110F0F] py-4 rounded-md transition-all duration-300 hover:scale-105"
                style={{ "--hover-color": tech.color } as React.CSSProperties}
              >
                <Icon className="text-2xl md:text-3xl mb-2 text-white transition-all duration-500 group-hover:scale-125 group-hover:[color:var(--hover-color)]" />
                <p className="text-xs sm:text-sm text-gray-400">{tech.name}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2nd Slider (reverse direction) */}
      <div className="w-full overflow-hidden relative">
        <div className="flex  animate-marquee-reverse">
          {[...secondHalf, ...secondHalf].map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="group flex-shrink-0 flex flex-col items-center justify-center w-[180px] sm:w-[200px] md:w-[220px] mx-1 text-center bg-[#110F0F] py-4 rounded-md transition-all duration-300 hover:scale-105"
                style={{ "--hover-color": tech.color } as React.CSSProperties}
              >
                <Icon className="text-2xl md:text-3xl mb-2 text-white transition-all duration-500 group-hover:scale-125 group-hover:[color:var(--hover-color)]" />
                <p className="text-xs sm:text-sm text-gray-400">{tech.name}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 80s linear infinite;
        }

        .animate-marquee-reverse {
          display: flex;
          width: max-content;
          animation: marquee-reverse 80s linear infinite;
        }

        /* Pause on hover */
        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }

        @keyframes gradientWave {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default Technology;
