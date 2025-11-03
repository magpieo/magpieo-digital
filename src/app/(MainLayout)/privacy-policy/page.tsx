"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const Page = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-2 pt-8 pb-16 text-white">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="flex justify-center mb-4">
          <ShieldCheck className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-2xl md:text-4xl lg:text-2xl font-medium md:font-bold  mb-2 text-white">
          Privacy Policy - Magpieo Digital
        </h1>
        <p className="text-base sm:text-lg text-gray-300">
          Effective Date: January 2025 — Last Updated: November 2025
        </p>
      </motion.div>

      <div className="h-[1px] w-full bg-gray-500 my-8" />

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-10 leading-relaxed text-gray-100"
      >
        {/* Section 1 */}
        <section>
          <h2 className="text-2xl font-medium md:font-bold  text-white mb-3">
            1. Introduction
          </h2>
          <p>
            At <strong>Magpieo Digital</strong>, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy explains how we collect, use, and protect the information you
            share with us when visiting our website or using our services.
          </p>
          <p className="mt-2">
            By accessing or using our website, you consent to the practices
            described in this Privacy Policy.
          </p>
        </section>

        <div className="h-[1px] w-full bg-gray-500 my-8" />

        {/* Section 2 */}
        <section>
          <h2 className="text-2xl font-medium md:font-bold  text-white mb-3">
            2. Information We Collect
          </h2>
          <p>
            We collect personal data only when you voluntarily provide it, such
            as when you:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Submit our Contact Form</li>
            <li>Request a Project Quote or Proposal</li>
            <li>Communicate with us via email or phone</li>
          </ul>
          <p className="mt-3">The types of information we collect include:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Contact Number</li>
            <li>Company Name (if applicable)</li>
            <li>Project Details or Requirements</li>
            <li>
              Payment or Billing Information (for confirmed projects only)
            </li>
          </ul>
          <p className="mt-2">
            We do not collect or store sensitive data unless it’s voluntarily
            shared for a project purpose.
          </p>
        </section>

        <div className="h-[1px] w-full bg-gray-500 my-8" />

        {/* Section 3 */}
        <section>
          <h2 className="text-2xl font-medium md:font-bold  text-white mb-3">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Respond to inquiries and provide project estimates</li>
            <li>Deliver services and maintain client relationships</li>
            <li>
              Communicate about project updates, invoices, and deliverables
            </li>
            <li>Improve our website, services, and communication efficiency</li>
            <li>Ensure secure transactions and project data management</li>
          </ul>
        </section>

        <div className="h-[1px] w-full bg-gray-500 my-8" />

        {/* Section 4 */}
        <section>
          <h2 className="text-2xl font-medium md:font-bold  text-white mb-3">
            4. Cookies Policy
          </h2>
          <p>
            Our website uses cookies to enhance user experience and analyze
            website traffic. Cookies are small files stored on your device that
            help us improve performance and usability.
          </p>
          <p className="mt-2">
            You can disable cookies through your browser settings. However,
            certain features of our website may not function correctly if
            cookies are disabled.
          </p>
        </section>

        <div className="h-[1px] w-full bg-gray-500 my-8" />

        {/* Section 5–12 */}
        <section>
          <h2 className="text-2xl font-medium md:font-bold  text-white mb-3">
            5. International Data Transfers
          </h2>
          <p>
            Since Magpieo Digital serves global clients, your information may be
            processed or stored in different countries where we or our trusted
            partners operate.
          </p>
        </section>

        <div className="h-[1px] w-full bg-gray-500 my-8" />

        <section>
          <h2 className="text-2xl font-medium md:font-bold  text-white mb-3">
            6. Data Security
          </h2>
          <p>
            We employ industry-standard measures such as SSL encryption, secure
            servers, and restricted data access to safeguard all client
            information.
          </p>
        </section>

        <div className="h-[1px] w-full bg-gray-500 my-8" />

        <section>
          <h2 className="text-2xl font-medium md:font-bold  text-white mb-3">
            7. Data Retention
          </h2>
          <p>
            We retain your information only for as long as necessary to fulfill
            our contractual and legal obligations. If you wish to delete your
            personal information, contact us at{" "}
            <a
              href="mailto:hello@magpieo.com"
              className="text-white font-medium hover:underline"
            >
              hello@magpieo.com
            </a>
            .
          </p>
        </section>

        <div className="h-[1px] w-full bg-gray-500 my-8" />

        <section>
          <h2 className="text-2xl font-medium md:font-bold  text-white mb-3">
            8. Your Rights
          </h2>
          <p>
            You have the right to access, correct, delete, or restrict
            processing of your personal data at any time. To exercise these
            rights, please email us at{" "}
            <a
              href="mailto:hello@magpieo.com"
              className="text-white font-medium hover:underline"
            >
              hello@magpieo.com
            </a>
            .
          </p>
        </section>

        <div className="h-[1px] w-full bg-gray-500 my-8" />

        <section>
          <h2 className="text-2xl font-medium md:font-bold  text-white mb-3">
            9. Children’s Privacy
          </h2>
          <p>
            Our services are designed for businesses and professionals. We do
            not knowingly collect personal information from anyone under the age
            of 16.
          </p>
        </section>

        <div className="h-[1px] w-full bg-gray-500 my-8" />

        <section>
          <h2 className="text-2xl font-medium md:font-bold  text-white mb-3">
            10. Governing Law
          </h2>
          <p>
            This Privacy Policy shall be governed by and construed in accordance
            with the laws of Bangladesh.
          </p>
        </section>

        <div className="h-[1px] w-full bg-gray-500 my-8" />

        <section>
          <h2 className="text-2xl font-medium md:font-bold  text-white mb-3">
            11. Updates to This Policy
          </h2>
          <p>
            We may update this Privacy Policy periodically. Updates will be
            posted on this page with a new effective date.
          </p>
        </section>

        <div className="h-[1px] w-full bg-gray-500 my-8" />

        <section>
          <h2 className="text-2xl font-medium md:font-bold  text-white mb-3">
            12. Contact Us
          </h2>
          <p>
            For any questions or concerns, please contact us at:
            <br />
            📩{" "}
            <a
              href="mailto:hello@magpieo.com"
              className="text-white font-medium hover:underline"
            >
              hello@magpieo.com
            </a>
            <br />
            🌐{" "}
            <a
              href="https://www.magpieo.com"
              target="_blank"
              className="text-white font-medium hover:underline"
            >
              www.magpieo.com
            </a>
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default Page;
