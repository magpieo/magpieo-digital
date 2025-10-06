"use client";
import heroBanner from "@/asset/home/hero-banner.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const OurCreations = () => {
  const [activeLeft, setActiveLeft] = useState<number>(0);
  const [activeRight, setActiveRight] = useState<number>(1);

  const allCreations = [
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
      heading: "Data-Driven Growth Campaigns ",
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

  // Split data into two columns
  const leftColumn = [allCreations[0], allCreations[1], allCreations[2]];
  const rightColumn = [allCreations[3], allCreations[4], allCreations[5]];

  return (
    <div className="py-10">
      <div className="flex items-start justify-between text-white gap-8">
        {/* Left info section */}
        <div className="w-[30%]">
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

        {/* Right portfolio section */}
        <div className="w-[70%] grid grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {leftColumn.map((creation, index) => {
              const isActive = activeLeft === index;
              return (
                <motion.div
                  key={index}
                  onMouseEnter={() => setActiveLeft(index)}
                  className="border p-6 space-y-4 rounded-xl cursor-pointer transition-all duration-300 w-full"
                  animate={{ scale: isActive ? 1.02 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image reveal */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isActive ? 150 : 0,
                      opacity: isActive ? 1 : 0,
                      marginBottom: isActive ? 16 : 0,
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden rounded-xl"
                  >
                    <Image
                      src={creation.image}
                      alt={creation.tag}
                      className="rounded-xl object-cover w-full"
                    />
                  </motion.div>

                  {/* Tag */}
                  <motion.div
                    animate={{
                      backgroundColor: isActive ? "#1E90FF" : "#FFFFFF",
                      color: isActive ? "#FFFFFF" : "#000",
                    }}
                    transition={{ duration: 0.3 }}
                    className="px-4 py-1 w-auto uppercase font-bold rounded-lg text-sm max-w-max"
                  >
                    {creation.tag}
                  </motion.div>

                  {/* Heading */}
                  <h3 className="text-xl font-bold">{creation.heading}</h3>
                  <Link href={creation.link} className="text-sm text-gray-400">
                    Read more →
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {rightColumn.map((creation, index) => {
              const isActive = activeRight === index;
              return (
                <motion.div
                  key={index}
                  onMouseEnter={() => setActiveRight(index)}
                  className="border p-6 space-y-4 rounded-xl cursor-pointer transition-all duration-300 w-full"
                  animate={{ scale: isActive ? 1.02 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image reveal */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isActive ? 150 : 0,
                      opacity: isActive ? 1 : 0,
                      marginBottom: isActive ? 16 : 0,
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden rounded-xl"
                  >
                    <Image
                      src={creation.image}
                      alt={creation.tag}
                      className="rounded-xl object-cover w-full"
                    />
                  </motion.div>

                  {/* Tag */}
                  <motion.div
                    animate={{
                      backgroundColor: isActive ? "#1E90FF" : "#FFFFFF",
                      color: isActive ? "#FFFFFF" : "#000",
                    }}
                    transition={{ duration: 0.3 }}
                    className="px-4 py-1 w-auto uppercase font-bold rounded-lg text-sm max-w-max"
                  >
                    {creation.tag}
                  </motion.div>

                  {/* Heading */}
                  <h3 className="text-xl font-bold">{creation.heading}</h3>
                  <p className="text-sm text-gray-400">Read more →</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCreations;
