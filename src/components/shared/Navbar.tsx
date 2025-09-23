import Image from "next/image";
import logo from "../../assets/logo/logo.png";
const Navbar = () => {
  return (
    <div className="bg-black text-white py-4 px-12 ">
      {/* main */}
      <div className="flex justify-between items-center ">
        {/* logo */}
        <div>
          <Image
            src={logo}
            alt="magpieo_logo"
            height={150}
            width={150}
            className=""
          />
        </div>
        {/* r8 side */}
        <div className="flex items-center gap-4">
          {/* item */}
          <div className="flex gap-3">
            <p>item</p> <p>item</p> <p>item</p> <p>item</p>
          </div>
          {/* button */}
          <div>
            <button className="capitalize bg-white rounded-l-full rounded-r-full text-black font-medium text-[10px] px-4 py-2">
              let's book a meeting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
