import React from "react";
import Technology from "../(Home)/_components/Technology";
import LetsTalk from "../(Home)/_components/LetsTalk";
import RegistrationSection from "../(Home)/_components/RegistrationSection";

const page = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto bg-[#110F0F]">
        {/* <p>services</p> */}
        <LetsTalk />
      </div>

      {/* <div className="   bg-[#110F0F]">
        <Technology />
      </div> */}
      <div className="max-w-6xl mx-auto ">
        <RegistrationSection />
      </div>
    </div>
  );
};

export default page;
