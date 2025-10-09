"use client";

import heroBanner from "@/asset/home/hero-banner.jpg";

import { useState, useEffect } from "react";
import CreationCard from "./CreationCard";
import { ICreation } from "../interfaces";

const OurCreations = () => {
  const [activeLeft, setActiveLeft] = useState<number>(0);
  const [activeRight, setActiveRight] = useState<number>(1);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive breakpoint
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const allCreations: ICreation[] = [
    {
      heading: "Global Brand Identity Design",
      tag: "Brand",
      image: heroBanner,
      link: "#",
    },
    {
      heading: "SaaS Dashboard Experience",
      tag: "UI/UX Design",
      image: heroBanner,
      link: "#",
    },
    {
      heading: "Next-Gen E-Commerce Platform",
      tag: "Web Development",
      image: heroBanner,
      link: "#",
    },
    {
      heading: "Engaging Mobile App Design",
      tag: "App Design",
      image: heroBanner,
      link: "#",
    },
    {
      heading: "Data-Driven Growth Campaigns",
      tag: "Digital Marketing",
      image: heroBanner,
      link: "#",
    },
    {
      heading: "From Vision to Global Impact",
      tag: "Case Study",
      image: heroBanner,
      link: "#",
    },
  ];

  const leftColumn = [allCreations[0], allCreations[1], allCreations[2]];
  const rightColumn = [allCreations[3], allCreations[4], allCreations[5]];

  return (
    <section className="py-10 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row items-start justify-between text-white gap-8">
        {/* Left Info */}
        <div className="w-full lg:w-[30%] ">
          <h2 className="capitalize font-extrabold text-3xl md:text-4xl">
            Our Creations
          </h2>
          <p className="text-sm md:text-base opacity-70 my-6">
            Explore our portfolio of branding, UI/UX design, web development,
            app design, and digital marketing projects — crafted to help
            businesses grow and stand out globally.
          </p>
          <button className="border border-white rounded-full px-6 py-2 font-medium hover:bg-white hover:text-black transition">
            Show More
          </button>
        </div>

        {/* Portfolio Columns */}
        <div className="w-full lg:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {leftColumn.map((creation, i) => (
              <CreationCard
                key={i}
                creation={creation}
                index={i}
                isMobile={isMobile}
                isActive={activeLeft === i}
                setActive={setActiveLeft}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {rightColumn.map((creation, i) => (
              <CreationCard
                key={i}
                creation={creation}
                index={i}
                isMobile={isMobile}
                isActive={activeRight === i}
                setActive={setActiveRight}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCreations;
