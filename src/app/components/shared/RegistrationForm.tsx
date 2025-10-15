"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const services: string[] = [
  "Branding",
  "UI/UX Design",
  "Website Design",
  "App Design",
  "Saas Design",
  "Development",
  "Product MVP Development",
  "Digital Marketing",
  "Social Media Marketing",
  "SEO Optimization",
];

const budgets: string[] = [
  "$500–$1,000",
  "$1,000–$2,000",
  "$2,000–$3,000",
  "$3,000–$4,000",
  "$5,000–$6,000",
  "$7,000–$8,000",
  "$9,000–$10,000",
  "$10,000+",
];

const RegistrationForm = () => {
  // --- State management ---
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    whatsapp: "",
    details: "",
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string | undefined>();

  // --- Input handler ---
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // --- Service selection (multiple toggle) ---
  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  // --- Submit handler ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const dataForBackend = {
      ...formData,
      services: selectedServices,
      budget: selectedBudget,
    };

    try {
      const loadingToast = toast.loading("Submitting...");

      await fetch(
        "https://script.google.com/macros/s/AKfycbxThJGmhlu2peOqKBIAtp5JpXQA5UapSlV-OZ2sLZKT-qfUv1olG34DSNHceRxtewI/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataForBackend),
        }
      );

      toast.dismiss(loadingToast);
      toast.success("Form submitted successfully!");

      // reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        whatsapp: "",
        details: "",
      });
      setSelectedServices([]);
      setSelectedBudget(undefined);
    } catch (error) {
      toast.dismiss();
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">
            Your Name<span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Hi, I'm..."
            className="w-full bg-[#1a1a1a] border border-gray-600 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">
            Your Email<span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Where can we reach you?"
            className="w-full bg-[#1a1a1a] border border-gray-600 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
      {/*Company name and Whats app  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Company Name</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="What’s your brand called?"
            className="w-full bg-[#1a1a1a] border border-gray-600 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Whats App Number</label>
          <input
            type="tel"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="Where can we contact with you?"
            className="w-full bg-[#1a1a1a] border border-gray-600 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Select Your Service */}
      <div>
        <label className="block text-sm mb-2">
          Select Your Service<span className="text-red-500 ml-1">*</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {services.map((service) => (
            <motion.button
              key={service}
              type="button"
              whileTap={{ scale: 0.95 }}
              onClick={() => toggleService(service)}
              className={`px-4 py-2 rounded-md text-sm font-medium border ${
                selectedServices.includes(service)
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-[#2a2a2a] text-gray-200 border-transparent hover:bg-blue-700 hover:text-white"
              }`}
            >
              {service}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Select Budget */}
      <div>
        <label className="block text-sm mb-2">
          Select Your Budget Range<span className="text-red-500 ml-1">*</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {budgets.map((budget) => (
            <motion.button
              key={budget}
              type="button"
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedBudget(budget)}
              className={`px-4 py-2 rounded-md text-sm font-medium border ${
                selectedBudget === budget
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-[#2a2a2a] text-gray-200 border-transparent hover:bg-blue-700 hover:text-white"
              }`}
            >
              {budget}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Project Details */}
      <div>
        <label className="block text-sm mb-1">
          Project Details<span className="text-red-500 ml-1">*</span>
        </label>
        <textarea
          name="details"
          rows={5}
          value={formData.details}
          onChange={handleChange}
          placeholder="Tell us what you’re dreaming of — we’ll handle the rest...."
          className="w-full bg-[#1a1a1a] border border-gray-600 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-blue-500"
        ></textarea>
      </div>

      {/* Privacy Note */}
      <p className="text-sm text-gray-400">
        We&apos;ll reply within one business day. Your ideas are safe with us —
        we don&apos;t share your information.
      </p>

      {/* Submit Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        type="submit"
        className="relative overflow-hidden border border-gray-400 text-sm uppercase px-5 py-2 rounded-lg bg-white text-black font-semibold group transition-all duration-500 cursor-pointer "
      >
        <span className="absolute left-0 top-0 h-full w-0 bg-[#1E90FF] transition-all duration-500 group-hover:w-full text-white"></span>
        <span className="relative z-10 flex items-center gap-2 justify-center group-hover:text-white">
          <span className="text-xl transition-transform duration-300 group-hover:translate-x-[4px]">
            🚀
          </span>
          LET&apos;S MAKE IT HAPPEN
        </span>
      </motion.button>
    </form>
  );
};

export default RegistrationForm;
