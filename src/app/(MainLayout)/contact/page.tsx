/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import RegistrationForm from "@/app/components/shared/RegistrationForm";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi"; // ✅ React Icon

const faqs = [
  {
    question: "What services does your digital agency offer?",
    answer:
      "We offer full-stack digital solutions — including branding, web design, eCommerce development, social media marketing, and creative content production.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines depend on the scope, but most branding or website projects take between 3 to 8 weeks for completion.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Absolutely! We collaborate with brands and startups worldwide, offering seamless online communication and project management.",
  },
  {
    question: "How can I get a quote for my project?",
    answer:
      "Simply fill out the registration form above — our team will review your details and reach out with a tailored proposal.",
  },
];

const Page = () => {
  const [openIndex, setOpenIndex] = useState(0); // open first by default

  const toggleFAQ = (index:any) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="w-full  ">
      {/* 📝 Form Section */}
      <div className="bg-[#110F0F] py-8  px-3 ">
        <div className="max-w-6xl mx-auto text-center mb-10 md:mb-16 space-y-2">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Let’s Talk <span className="text-blue-500">Ideas</span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            From concept to launch — we create experiences that grow brands.
          </p>
        </div>

        <div className="  p-6 md:p-10 rounded-2xl shadow-xl border border-slate-700 max-w-6xl mx-auto">
          <RegistrationForm />
        </div>
      </div>

      {/* 💬 FAQ Section */}
      <div className="bg-black py-12 md:py-20 px-3">
        <div className="max-w-6xl mx-auto space-y-6">
          <h2 className="text-center text-2xl md:text-4xl font-bold text-white mb-8">
            Frequently Asked <span className="text-blue-500">Questions</span>
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={` border ${
                  openIndex === index ? " border-slate-700" : "border-slate-800"
                } rounded-2xl overflow-hidden transition-all`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left p-5 md:p-6 focus:outline-none"
                >
                  <span className="text-white font-semibold text-base md:text-lg">
                    {faq.question}
                  </span>
                  <FiChevronDown
                    className={`text-blue-400 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    size={22}
                  />
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-40 opacity-100 p-5 pt-0 md:p-6 md:pt-0"
                      : "max-h-0 opacity-0 p-0"
                  } overflow-hidden`}
                >
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </div>
  );
};

export default Page;
