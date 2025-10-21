import React from "react";
 
import LetsTalk from "../(Home)/_components/LetsTalk";
import RegistrationSection from "../(Home)/_components/RegistrationSection";
import Link from "next/link";

const page = () => {
    const services = [
    { id: "1", name: "Web Development" },
    { id: "2", name: "App Development" },
    { id: "3", name: "UI/UX Design" },
  ];
  return (
    <div>
      <div className="max-w-6xl mx-auto bg-[#110F0F]">
        {/* <p>services</p> */}
        <LetsTalk />
      </div>

      {/* <div className="   bg-[#110F0F]">`
        <Technology />
      </div> */}
      <div className="max-w-6xl mx-auto ">
        <RegistrationSection />
      </div>

      <div>

      {services.map((service) => (
        <div key={service.id}>
          {/* ✅ Pass the ID in the route */}
          <Link href={`/services/${service.id}`}>
            <p className="text-blue-600 hover:underline cursor-pointer">
              {service.name}
            </p>
          </Link>
        </div>
      ))}
      </div>



    </div>
  );
};

export default page;
