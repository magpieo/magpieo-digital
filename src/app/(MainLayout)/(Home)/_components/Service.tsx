"use client";

import Image from "next/image";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import { services } from "@/data/service";

const OurService = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="py-10">
      {/* Section Title */}
      <div className="text-center mb-10">
        <p className="capitalize font-extrabold text-3xl md:text-4xl text-white">
          our services
        </p>
        <p className="text-slate-400">
          Crafting digital experiences that inspire
        </p>
      </div>

      {/* Service Cards */}
      <div className="space-y-8">
        {services.map((service, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={index}
              className="relative rounded-2xl p-3 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md    overflow-hidden cursor-pointer"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              onClick={() => setActiveIndex(isActive ? null : index)}
              layout // <-- smooth layout transitions between cards
            >
              {/* Left Content */}
              <motion.div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left min-h-[150px]">
                {/* Title */}
                <motion.p
                  className="text-4xl md:text-5xl font-bold mb-4"
                  animate={{
                    scale: isActive ? 0.9 : 1,
                    y: isActive ? -4 : 0,
                    // color: isActive ? "#3b82f6" : "#ffffff",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    mass: 0.5,
                  }}
                  layout
                >
                  {service.title}
                </motion.p>

                {/* Description + Keywords */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 20,
                  }}
                  transition={{ duration: 0.5 }}
                  className="max-w-2xl mx-auto md:mx-0"
                >
                  {isActive && (
                    <>
                      <p className="text-slate-300 mb-3 text-sm md:text-base">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap justify-center md:justify-start gap-2">
                        {service.keywords.map((keyword, i) => (
                          <span
                            key={i}
                            className="flex items-center gap-2 text-slate-200 px-3 py-1 text-sm "
                          >
                            <FaCheck className="text-green-400" /> {keyword}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 relative inline-block group cursor-pointer">
                        <div className="flex items-center gap-2">
                          <span className="relative z-10 text-white font-medium transition-colors duration-300 group-hover:text-white">
                            {service?.buttonText}
                          </span>
                          <motion.span
                            className="text-white"
                            animate={{ rotate: isActive ? -45 : 0 }} // icon rotation on hover
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <FaArrowRight />
                          </motion.span>
                        </div>

                        {/* Bottom border animation */}
                        <motion.span
                          className="absolute left-0 bottom-0 h-0.5 bg-white rounded"
                          initial={{ width: 0 }}
                          animate={{ width: isActive ? "100%" : 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                      </div>
                    </>
                  )}
                </motion.div>
              </motion.div>

              {/* Right Image */}
              <motion.div
                className="w-[70%] md:w-[30%] flex justify-center md:justify-end"
                animate={{ scale: isActive ? 0.95 : 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="max-h-[150px] md:max-h-[200px] w-full flex justify-center">
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="rounded-xl object-contain h-full w-auto"
                  />
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default OurService;
