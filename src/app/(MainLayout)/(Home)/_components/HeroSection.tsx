"use client";
import heroBanner from "@/asset/home/hero-banner.jpg";
import MarqueeServices from "./MarqueeServices";

const HeroSection = () => {
  return (
    <div className=" overflow-hidden pb-20">
      <div
        className="h-[100vh] md:h-[90vh] bg-cover bg-center flex items-center "
        style={{
          backgroundImage: `url(${heroBanner.src}) `,
        }}
      >
        <div className=" text-white w-[95%] lg:max-w-6xl mx-auto space-y-6 px-4 mt-20 md:-mt-32">
          <style jsx>{`
            @keyframes gradientWave {
              0% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }
          `}</style>
          <h2 className=" md:hidden text-3xl font-extrabold ">
            Elevate Your
            <p className="mt-2">
              {" "}
              Digital Presence
              <p>
                with
                <span
                  className=""
                  style={{
                    background:
                      "linear-gradient(90deg, #FFFFFF, #0074FF, #FFFFFF,  #0074FF)",
                    backgroundSize: "300% 300%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    //   display: "inline-block",
                    animation: "gradientWave 7s ease infinite",
                  }}
                >
                  {" "}
                  Magpieo
                </span>
              </p>{" "}
            </p>
          </h2>
          <h2 className="hidden md:block md:text-5xl font-extrabold ">
            Elevate Your Digital
            <p className="mt-2">
              {" "}
              Presence with{" "}
              <span
                className=""
                style={{
                  background:
                    "linear-gradient(90deg, #FFFFFF, #0074FF, #FFFFFF,  #0074FF)",
                  backgroundSize: "300% 300%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  //   display: "inline-block",
                  animation: "gradientWave 7s ease infinite",
                }}
              >
                Magpieo
              </span>
            </p>
          </h2>
          <p className=" text-justify md:text-left w-[95%] lg:w-[60%] opacity-70">
            At Magpieo, we create innovative digital experiences that drive
            growth and engagement. Whether it’s designing visually stunning
            websites, developing custom mobile apps, implementing data-driven
            SEO strategies, or managing high-impact social media campaigns — we
            transform ideas into measurable results. Our team of designers,
            developers, and digital strategists combines creativity, technology,
            and strategy to help your brand thrive online.
          </p>
          <button className="primary-btn">Let’s Book a Meeting</button>
        </div>
      </div>
      {/* marquee services */}
      <div className="w-full bg-[#212121] -mt-10 md:-mt-60 -rotate-2 overflow-x-hidden z-20">
        <MarqueeServices />
      </div>
    </div>
  );
};

export default HeroSection;
