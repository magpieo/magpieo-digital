"use client";

import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Image from "next/image";

interface BannerProps {
  bannerImage: string;
}

const ParallaxImageBanner = ({ bannerImage }: BannerProps) => {
  return (
    <ParallaxProvider>
      <div className="relative w-full overflow-hidden">
        {/* 🧠 Parallax background image */}
        <Parallax speed={-15}>
          <div className="relative w-full min-h-[45vh] md:min-h-[55vh] lg:min-h-[65vh] -mt-8 md:-mt-6">
            <Image
              src={bannerImage}
              alt="Banner"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center scale-110 md:scale-105 border border-white"
            />
          </div>
        </Parallax>

        {/* 🌗 Overlay layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/40 pointer-events-none" />
      </div>
    </ParallaxProvider>
  );
};

export default ParallaxImageBanner;
