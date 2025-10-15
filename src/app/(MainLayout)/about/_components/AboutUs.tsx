import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div>
      {/* 🔹 Main Content Section */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 md:py-12 text-white  ">
        <div className=" ">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h4 className="pb-4 font-semibold">About us</h4>
            <h2 className="text-2xl md:text-3xl lg:text-5xl     font-bold mb-6 text-white">
              Magpieo Digital
            </h2>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-8">
              <strong>Magpieo Digital</strong> is a creative technology agency
              built to help brands solve real business challenges through
              design, strategy, and innovation. <br />
              <br />
              We go beyond aesthetics — blending data, psychology, and
              creativity to design experiences that perform. Whether it’s a
              startup building its identity or an enterprise rethinking its
              digital presence, we help you uncover what truly connects with
              your audience and turn it into powerful design solutions.
              <br />
              <br />
              Our mission is simple — we don’t just deliver projects;{" "}
              <span className="font-semibold text-[#1E90FF]">
                we deliver progress.
              </span>
            </p>

            {/* CTA Button */}
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
