"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ServiceSection = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto  px-4  py-8 md:py-12 text-white  ">
        <div className=" ">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h4 className="pb-4 font-semibold">Our Services</h4>
            <h2 className="text-2xl md:text-3xl lg:text-5xl     font-bold mb-6 text-white">
              Digital Expertise That Drives Growth
            </h2>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-8">
              At Magpieo Digital, we transform creative ideas into powerful
              digital experiences that connect, inspire, and convert. From
              branding and UI/UX design to web development, app creation, and
              marketing — we blend strategy, storytelling, and smart technology
              to help your brand take flight. Just like the Magpie bird —
              curious, intelligent, and known for collecting valuable things —
              Magpieo collects creativity, technology, and human insight to
              build your next digital success story.
            </p>

            {/* CTA Button */}
            <Link href={"/contact"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="relative overflow-hidden border border-gray-400 text-sm uppercase px-6 py-3 rounded-lg bg-white text-black font-semibold group transition-all duration-500 cursor-pointer"
              >
                <span className="absolute left-0 top-0 h-full w-0 bg-[#1E90FF] transition-all duration-500 group-hover:w-full"></span>
                <span className="relative z-10 flex items-center gap-2 justify-center group-hover:text-white">
                  <span className="text-xl transition-transform duration-300 group-hover:translate-x-[4px]">
                    🚀
                  </span>
                  get a free consultation
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
