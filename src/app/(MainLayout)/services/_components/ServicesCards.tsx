"use client";

import { services } from "@/data/service";
import Image from "next/image";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ServicesCards = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      {services.length > 0 && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              // variants={cardVariants}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-[#110F0F] flex flex-col justify-between p-5 rounded-2xl border border-transparent  transition-all duration-300 shadow-md hover:shadow-green-900/20"
            >
              {/* Title */}
              <h2 className="text-xl md:text-2xl font-bold text-white">
                {service.title}
              </h2>

              {/* Image */}
              <div className="h-[180px] md:h-[220px] w-full my-6 overflow-hidden rounded-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="object-cover h-full w-full transform transition-transform duration-500 hover:scale-105"
                  width={500}
                  height={300}
                />
              </div>

              {/* Subtitle + Description */}
              <h4 className="font-semibold  mb-1">{service.subTitle}</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Keywords */}
              <div className="my-4 space-y-1">
                {service.keywords.map((keyword: string, i: number) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 text-slate-200 text-sm"
                  >
                    <FaCheck className="" /> {keyword}
                  </span>
                ))}
              </div>

              {/* Button */}
              <Link href={`/services/${service?.slug}`}>
                <motion.div
                  className="relative overflow-hidden border border-gray-400 text-sm uppercase px-5 py-2 rounded-lg bg-white text-black group transition-all duration-500 cursor-pointer w-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                >
                  {/* Background hover animation */}
                  <span className="absolute left-0 top-0 h-full w-0 bg-[#1E90FF] transition-all duration-500 group-hover:w-full"></span>

                  {/* Button content */}
                  <span className="relative z-10 flex items-center gap-2 justify-center group-hover:text-white">
                    {service.buttonText}

                    {/* Arrow rotation controlled by button hover */}
                    <motion.span
                      animate={{ rotate: isHovered ? -45 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="inline-block"
                    >
                      <FaArrowRight />
                    </motion.span>
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default ServicesCards;
