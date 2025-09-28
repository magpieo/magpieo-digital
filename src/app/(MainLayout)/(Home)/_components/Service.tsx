"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import img from "../../../../asset/home/service/1.png";

const services = [
  {
    title: "Branding",
    description:
      "At Magpieo, our branding services focus on building a strong, lasting identity for your business. We combine minimal design aesthetics with strategic storytelling to craft brand experiences that resonate globally. From logo creation to full-scale brand strategies, we ensure your business leaves a lasting impression, builds trust, and inspires loyalty.",
    keywords: ["Logo Design & Visual Identity", "Brand Strategy", "Storytelling"],
    image: img,
  },
  {
    title: "UI/UX Design",
    description:
      "We design intuitive and engaging digital experiences. Our team blends creativity with usability to create seamless user journeys across web and mobile platforms. From research to wireframing, every detail is crafted to delight your audience.",
    keywords: ["Wireframing & Prototyping", "User Research", "Interaction Design"],
    image: img,
  },
  {
    title: "Web Development",
    description:
      "Our web development solutions bring your ideas to life with scalable, high-performance websites. We focus on speed, responsiveness, and functionality while ensuring modern aesthetics and optimized SEO for visibility.",
    keywords: ["Responsive Websites", "Full-Stack Development", "SEO Optimization"],
    image: img,
  },
  {
    title: "App Design",
    description:
      "From concept to launch, we design apps that engage and perform. Our team ensures sleek UI, smooth UX, and platform-native solutions that meet user needs while standing out in the app marketplace.",
    keywords: ["Mobile App UI", "Cross-Platform Design", "Prototyping"],
    image: img,
  },
  {
    title: "Digital Marketing",
    description:
      "We help brands grow online with smart digital strategies. From social media campaigns to targeted ads, SEO, and content marketing, we drive visibility, traffic, and conversions for sustainable growth.",
    keywords: ["Social Media Marketing", "Content Strategy", "Paid Ads & SEO"],
    image: img,
  },
];


const cardVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const titleVariants = {
  initial: { scale: 1, y: 0 },
  hover: { scale: 0.85, y: -10 },
};

const descVariants = {
  initial: { opacity: 0, y: 20 },
  hover: { opacity: 1, y: 0 },
};

const imageVariants = {
  initial: { scale: 1 },
  hover: { scale: 0.9 },
};

const OurService = () => {
  return (
    <div className="py-10">
      {/* Section Title */}
      <div className="text-center mb-10">
        <p className="capitalize font-extrabold text-3xl md:text-4xl text-white">
          our services
        </p>
        <p className="text-slate-400">Crafting digital experiences that inspire</p>
      </div>

      {/* Service Cards */}
      <div className="space-y-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="group relative rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md bg-slate-900/40 overflow-hidden"
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Left Content */}
            <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left">
              {/* Title */}
              <motion.p
                className="text-4xl md:text-5xl font-bold text-white mb-4"
                variants={titleVariants}
                transition={{ duration: 0.4 }}
              >
                {service.title}
              </motion.p>

              {/* Description + Keywords */}
              <motion.div
                variants={descVariants}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto md:mx-0"
              >
                <p className="text-slate-300 mb-3 text-sm md:text-base">
                  {service.description}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {service.keywords.map((keyword, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-2 text-slate-200 px-3 py-1 text-sm rounded-full border border-slate-600"
                    >
                      <FaCheck className="text-green-400" /> {keyword}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div
              className="w-[70%] md:w-[30%] flex justify-center md:justify-end"
              variants={imageVariants}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={service.image}
                alt={service.title}
                className="rounded-xl object-contain"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurService;
