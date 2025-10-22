import React from "react";
import Image from "next/image";
import { services } from "@/data/service";

// ✅ Correct typing for Next.js 15 App Router
interface ServicePageProps {
  params: Promise<{
    serviceId: string;
  }>;
}

// ✅ Static paths
export async function generateStaticParams() {
  return services.map((service) => ({
    serviceId: service.id,
  }));
}

// ✅ Page component (async)
const ServicePage = async ({ params }: ServicePageProps) => {
  const { serviceId } = await params; // ✅ await required now
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-[#110F0F]">
        <p>Service not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#110F0F] text-white py-20 px-6 flex flex-col items-center">
      <div className="max-w-5xl w-full flex flex-col lg:flex-row gap-10 items-center">
        {/* Image */}
        <div className="w-full lg:w-1/2 relative h-80 rounded-2xl overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold">{service.title}</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            {service.description}
          </p>

          <ul className="space-y-2 mt-4">
            {service.keywords.map((keyword, index) => (
              <li
                key={index}
                className="text-gray-400 before:content-['•'] before:mr-2"
              >
                {keyword}
              </li>
            ))}
          </ul>

          <button className="mt-6 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full transition">
            {service.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
