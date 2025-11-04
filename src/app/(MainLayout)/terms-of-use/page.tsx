"use client";
import React from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

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
          <FileText className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-2xl md:text-4xl lg:text-2xl font-medium md:font-bold mb-2 text-white">
          Terms of Use — Magpieo Digital
        </h1>
        <p className="text-base sm:text-lg text-gray-300">
         Last Updated: November 2025
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
        {/* 1 */}
        <section>
          <h2 className="text-2xl font-medium md:font-bold mb-3">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using the <strong>Magpieo Digital</strong> website
            (“Site”) or services, you agree to comply with and be bound by these
            Terms of Use and our Privacy Policy. If you do not agree, please do
            not use our website or services.
          </p>
        </section>

        <div className="h-[1px] w-full bg-gray-600 my-8" />

        {/* 2 */}
        <section>
          <h2 className="text-2xl font-medium md:font-bold mb-3">
            2. Our Services
          </h2>
          <p>
            Magpieo Digital provides professional creative and digital services,
            including:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>UI/UX Design</li>
            <li>Branding</li>
            <li>Web Design & Development</li>
            <li>App Design</li>
            <li>Digital Marketing</li>
            <li>SEO Optimization</li>
          </ul>
          <p className="mt-2">
            These terms apply to all services offered directly through Magpieo
            Digital.
          </p>
        </section>

        <div className="h-[1px] w-full bg-gray-600 my-8" />

        {/* 3 */}
        <section>
          <h2 className="text-2xl font-medium md:font-bold mb-3">
            3. Use of Website
          </h2>
          <p>You agree to use our website only for lawful purposes. You must not:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Interfere with or disrupt the site or servers</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Post or share false, misleading, or harmful content</li>
          </ul>
          <p className="mt-2">
            Violation of these terms may result in termination of access or legal action.
          </p>
        </section>

        <div className="h-[1px] w-full bg-gray-600 my-8" />

        {/* 4 */}
        <section>
          <h2 className="text-2xl font-medium md:font-bold mb-3">
            4. Intellectual Property
          </h2>
          <p>
            All content on this website — including designs, text, graphics, code, and
            images — is the property of <strong>Magpieo Digital</strong> unless
            otherwise stated. You may not copy, reproduce, distribute, or modify
            any material without prior written consent.
          </p>
        </section>

        <div className="h-[1px] w-full bg-gray-600 my-8" />

        {/* 5 */}
        <section>
          <h2 className="text-2xl font-medium md:font-bold mb-3">
            5. Client Projects & Deliverables
          </h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>
              All creative work remains Magpieo Digital’s property until full payment is
              received.
            </li>
            <li>
              Upon full payment, ownership of final deliverables transfers to the
              client, unless otherwise agreed.
            </li>
            <li>
              Magpieo Digital reserves the right to display completed projects in its
              portfolio unless prohibited by NDA.
            </li>
          </ul>
        </section>

        <div className="h-[1px] w-full bg-gray-600 my-8" />

        {/* 6 */}
        <section>
          <h2 className="text-2xl font-medium md:font-bold mb-3">
            6. Confidentiality
          </h2>
          <p>
            We maintain strict confidentiality for all project data, creative assets,
            and business information shared by our clients. No client data will be
            disclosed outside of the project scope without explicit consent.
          </p>
        </section>

        <div className="h-[1px] w-full bg-gray-600 my-8" />

        {/* 7 */}
        <section>
          <h2 className="text-2xl font-medium md:font-bold mb-3">
            7. Payments & Refunds
          </h2>
          <p>
            Payments must be made according to the agreed proposal or invoice. All
            payments are final once a project begins. Refunds are only considered under
            exceptional circumstances at Magpieo Digital’s discretion.
          </p>
          <p className="mt-2">
            Milestone-based projects will require partial payments upon completion of
            each stage.
          </p>
        </section>

        <div className="h-[1px] w-full bg-gray-600 my-8" />

        {/* 8 */}
        <section>
          <h2 className="text-2xl font-medium md:font-bold mb-3">
            8. Revisions
          </h2>
          <p>
            The number of revisions will be defined in the project agreement. Additional
            changes beyond the agreed scope may incur extra charges.
          </p>
        </section>

        <div className="h-[1px] w-full bg-gray-600 my-8" />

        {/* 9–15 */}
        <section>
          <h2 className="text-2xl font-medium md:font-bold mb-3">9. Termination</h2>
          <p>
            Either party may terminate a project with written notice. In case of
            termination, the client will be billed for all completed work up to that
            date, and deliverables will be handed over after payment.
          </p>
        </section>

        <div className="h-[1px] w-full bg-gray-600 my-8" />

        <section>
          <h2 className="text-2xl font-medium md:font-bold mb-3">
            10. Limitation of Liability
          </h2>
          <p>
            Magpieo Digital shall not be liable for any indirect, incidental, or
            consequential damages arising from service use or third-party integrations.
            Our total liability will not exceed the amount paid for the specific
            service.
          </p>
        </section>

        <div className="h-[1px] w-full bg-gray-600 my-8" />

        <section>
          <h2 className="text-2xl font-medium md:font-bold mb-3">
            11. Third-Party Links
          </h2>
          <p>
            Our website may include links to third-party websites or tools. Magpieo
            Digital is not responsible for external content, policies, or practices.
          </p>
        </section>

        <div className="h-[1px] w-full bg-gray-600 my-8" />

        <section>
          <h2 className="text-2xl font-medium md:font-bold mb-3">
            12. Dispute Resolution
          </h2>
          <p>
            In the event of a dispute, both parties agree to attempt resolution through
            discussion before legal action. If unresolved, the dispute shall be subject
            to Dhaka, Bangladesh jurisdiction.
          </p>
        </section>

        <div className="h-[1px] w-full bg-gray-600 my-8" />

        <section>
          <h2 className="text-2xl font-medium md:font-bold mb-3">13. Governing Law</h2>
          <p>These Terms are governed by the laws of Bangladesh.</p>
        </section>

        <div className="h-[1px] w-full bg-gray-600 my-8" />

        <section>
          <h2 className="text-2xl font-medium md:font-bold mb-3">14. Changes to Terms</h2>
          <p>
            We may update these Terms periodically. Continued use of our website
            constitutes acceptance of any updated terms.
          </p>
        </section>

        <div className="h-[1px] w-full bg-gray-600 my-8" />

        <section>
          <h2 className="text-2xl font-medium md:font-bold mb-3">15. Contact Us</h2>
          <p>
            For inquiries related to these Terms or our services:
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
