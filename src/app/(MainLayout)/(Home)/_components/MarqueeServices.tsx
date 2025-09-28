import Marquee from "react-fast-marquee";
import { GoDotFill } from "react-icons/go";

const MarqueeServices = () => {
  return (
    <div className=" py-4 text-2xl uppercase">
      <Marquee direction="right">
        <div className=" flex gap-20">
          <div className="flex gap-20 items-center">
            <GoDotFill color="#0074FF" />
            <p>Branding</p>
          </div>
          <div className="flex gap-20 items-center">
            <GoDotFill color="#0074FF" />
            <p>UI/UX Design</p>
          </div>
          <div className="flex gap-20 items-center">
            <GoDotFill color="#0074FF" />
            <p>Web Development</p>
          </div>
          <div className="flex gap-20 items-center">
            <GoDotFill color="#0074FF" />
            <p>App Design</p>
          </div>
          <div className="flex gap-20 items-center ml-20">
            <GoDotFill color="#0074FF" />
            <p>Digital Marketing</p>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeServices;
