"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import icon1 from "../../../../asset/about/icon1.png";
import icon2 from "../../../../asset/about/icon2.png";
import icon3 from "../../../../asset/about/icon3.png";

const OurCommitment = () => {
  const data = [
    {
      id: 1,
      icon: icon1,
      title: "Innovation First",
      subText:
        "At Magpieo, we harness cutting-edge technologies and creative strategies to keep your brand ahead of the curve.",
    },
    {
      id: 2,
      icon: icon2,
      title: "Client-Centric Approach",
      subText:
        "Your success drives us. We listen, collaborate, and craft solutions tailored to your unique goals.",
    },
    {
      id: 3,
      icon: icon3,
      title: "Transparency & Trust",
      subText:
        "Honesty, clarity, and integrity guide every partnership we build — because your confidence matters most.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-16 px-5 sm:px-8">
      <div className="flex flex-col lg:flex-row items-start gap-10">
        {/* -------- LEFT SIDE -------- */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="lg:w-1/2 w-full text-left space-y-5"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Our Commitment
          </h2>

          <p className="text-gray-300 text-base sm:text-lg">
            We’re not just another digital agency — we’re your{" "}
            <span className="font-semibold text-white">creative growth partner.</span>
          </p>

          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            At Magpieo, we deliver cutting-edge strategies, precision design,
            and seamless execution. Our focus is solving real-world brand
            challenges through innovation, clarity, and measurable impact.
          </p>
        </motion.div>

        {/* -------- RIGHT SIDE -------- */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6"
        >
          {data.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.03, translateY: -3 }}
              className="bg-[#232323] rounded-2xl shadow-md hover:shadow-lg p-6 flex flex-col items-start text-left transition"
            >
              {/* Icon */}
              <div className="relative w-12 h-12 mb-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>

              {/* Subtext */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {item.subText}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurCommitment;
