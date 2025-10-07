import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { ICreationCardProps } from "../interfaces";

const CreationCard: React.FC<ICreationCardProps> = ({
  creation,
  index,
  isMobile,
  isActive,
  setActive,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: false, margin: "-10% 0px -10% 0px" });

  const animateImage = isMobile
    ? {
        height: isInView ? 150 : 0,
        opacity: isInView ? 1 : 0,
        marginBottom: isInView ? 16 : 0,
      }
    : {
        height: isActive ? 150 : 0,
        opacity: isActive ? 1 : 0,
        marginBottom: isActive ? 16 : 0,
      };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={!isMobile ? () => setActive(index) : undefined}
      className="border border-gray-700 p-6 space-y-4 rounded-xl cursor-pointer transition-all duration-300 w-full bg-black/40 backdrop-blur"
      animate={{
        scale: !isMobile && isActive ? 1.02 : 1,
        opacity: isMobile && !isInView ? 0.6 : 1,
      }}
      transition={{ duration: 0.4 }}
    >
      {/* Image */}
      <motion.div
        initial={false}
        animate={animateImage}
        transition={{ duration: 0.5, ease: "easeInOut" }}
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
          backgroundColor:
            (!isMobile && isActive) || (isMobile && isInView)
              ? "#1E90FF"
              : "#FFFFFF",
          color:
            (!isMobile && isActive) || (isMobile && isInView)
              ? "#FFFFFF"
              : "#000000",
        }}
        transition={{ duration: 0.3 }}
        className="px-4 py-1 uppercase font-bold rounded-lg text-sm w-fit"
      >
        {creation.tag}
      </motion.div>

      {/* Heading */}
      <h3 className="text-xl font-bold">{creation.heading}</h3>

      {/* Link */}
      <Link href={creation.link} className="text-sm text-gray-400">
        Read more →
      </Link>
    </motion.div>
  );
};

export default CreationCard;
