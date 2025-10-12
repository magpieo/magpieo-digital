"use client";

import Link from "next/link";
import React from "react";

const LetsTalk = () => {
  const text = "LET’S TALK";

  const letterStyle: React.CSSProperties = {
    color: "transparent",
    WebkitTextStroke: "1px white",
    transition: "all 0.5s ease",
  };

  const containerStyle: React.CSSProperties = {
    display: "flex",
    gap: "0.05em",
    cursor: "pointer",
    whiteSpace: "nowrap", // keep all letters inline
    justifyContent: "center",
  };

  return (
    <section className="bg-black text-white py-16 px-4 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-8">
      {/* Left */}
      <div className="flex flex-col gap-4 text-center md:text-left">
        <h1 className="text-2xl  md:text-3xl lg:text-4xl font-extrabold">
          Ready to Get Started?
        </h1>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
          Let’s collaborate and create something extraordinary.
        </p>
      </div>

      {/* Right - "LET’S TALK" Hollow Text */}
      <div className="  w-full md:w-auto flex justify-center">
        <Link href={"/contact"}>
          <h2
            style={containerStyle}
            onMouseEnter={(e) => {
              const spans = (e.currentTarget as HTMLElement).querySelectorAll(
                "span"
              );
              spans.forEach((span) => {
                (span as HTMLElement).style.color = "#FFFFFF"; // white fill
                (span as HTMLElement).style.webkitTextStroke = "0px";
              });
            }}
            onMouseLeave={(e) => {
              const spans = (e.currentTarget as HTMLElement).querySelectorAll(
                "span"
              );
              spans.forEach((span) => {
                (span as HTMLElement).style.color = "transparent";
                (span as HTMLElement).style.webkitTextStroke = "1px white";
              });
            }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold"
          >
            {text.split("").map((char, index) => (
              <span key={index} style={letterStyle}>
                {char}
              </span>
            ))}
          </h2>
        </Link>
      </div>
    </section>
  );
};

export default LetsTalk;
