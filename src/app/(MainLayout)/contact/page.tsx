import RegistrationForm from "@/app/components/shared/RegistrationForm";
import React from "react";

const Page = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-12">
      {/* 🌟 Heading Section */}
      <div className="text-center mb-10 md:mb-16 space-y-3">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
          Let’s Talk <span className="text-blue-500">Ideas</span>
        </h1>
        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
          From concept to launch — we create experiences that grow brands.
        </p>
      </div>

      {/* 📝 Form Section */}
      <div className="bg-slate-900/50 p-6 md:p-10 rounded-2xl shadow-lg border border-slate-800">
        <RegistrationForm />
      </div>

{/* faq section 
 */}
      <div>

      </div>
    </div>
  );
};

export default Page;
