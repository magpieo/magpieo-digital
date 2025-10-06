"use client";
import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCss3Alt,
  FaFigma,
  FaWordpress,
  FaGoogle,
  FaSearch,
  //   FaAdobe,
  FaFire,
  FaChartBar,
  FaPaintBrush,
  FaCode,
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
  { icon: <FaReact className="text-sky-400" />, name: "React" },
  { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
  { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
  { icon: <FaCode className="text-gray-300" />, name: "Express.js" },
  { icon: <SiMongodb className="text-green-400" />, name: "MongoDB" },
  { icon: <FaFire className="text-orange-500" />, name: "Firebase" },
  { icon: <SiMysql className="text-blue-500" />, name: "MySQL" },
  { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind CSS" },
  { icon: <SiFramer className="text-pink-500" />, name: "Framer Motion" },
  { icon: <FaFigma className="text-purple-500" />, name: "Figma" },
  { icon: <SiAdobexd className="text-pink-400" />, name: "Adobe XD" },
  { icon: <FaWordpress className="text-blue-400" />, name: "WordPress" },
  { icon: <FaPaintBrush className="text-yellow-400" />, name: "Elementor" },
  { icon: <FaSearch className="text-green-300" />, name: "SEO Tools" },
  { icon: <FaChartBar className="text-blue-300" />, name: "Google Analytics" },
  { icon: <SiGoogleads className="text-blue-500" />, name: "Google Ads" },
  { icon: <SiMeta className="text-blue-400" />, name: "Meta Ads" },
  { icon: <SiCanva className="text-sky-400" />, name: "Canva" },
  //   { icon: <FaAdobe className="text-red-500" />, name: "Adobe Photoshop" },
  {
    icon: <SiAdobeillustrator className="text-orange-400" />,
    name: "Adobe Illustrator",
  },
];

const Technology = () => {
  return (
    <section className="bg-[#110F0F] text-white py-16 px-4 overflow-hidden relative">
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

      {/* Auto-moving Slider */}
      {/* 1st slider  */}
      <div className="w-full overflow-hidden relative">
        <div className="flex gap-10 animate-marquee whitespace-nowrap">
          {techIcons.concat(techIcons).map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-[120px] sm:min-w-[140px] text-center"
            >
              <div className="text-4xl sm:text-5xl mb-2">{tech.icon}</div>
              <p className="text-xs sm:text-sm text-gray-400">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
      {/* 2nd slider  */}
      <div className="w-full overflow-hidden relative">
        <div className="flex gap-10 animate-marquee whitespace-nowrap">
          {techIcons.concat(techIcons).map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-[120px] sm:min-w-[140px] text-center"
            >
              <div className="text-4xl sm:text-5xl mb-2">{tech.icon}</div>
              <p className="text-xs sm:text-sm text-gray-400">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>



      {/* Marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 30s linear infinite;
          width: calc(200%);
        }
      `}</style>
    </section>
  );
};

export default Technology;
