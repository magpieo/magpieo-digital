import Image from "next/image";
import WidthWrapper from "../WidthWrapper";
import logo from "../../../asset/logo/logo1.png";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { PiInstagramLogoFill } from "react-icons/pi";
import { BsTelephone } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className=" text-white pt-6 pb-3 ">
      <WidthWrapper>
        <div className="w-full flex flex-col lg:flex-row gap-8 ">
          {/* First Col - Logo + About */}
          <div className="space-y-4 w-full lg:w-[30%] ">
            <Image src={logo} alt="Company Logo" className="w-32 h-auto" />
            <p className="text-sm text-gray-300">
              <span className="font-semibold">Magpieo</span> is a creative
              digital agency delivering innovative design and development
              solutions worldwide.
            </p>
            <div className="flex items-center gap-4 mt-4 opacity-90">
              <Link href="#" className="hover:text-blue-600 text-xl">
                <FaFacebook />
              </Link>
              <Link href="#" className="hover:text-blue-600 text-2xl">
                <TbBrandLinkedinFilled />
              </Link>
              <Link href="#" className="hover:text-blue-600 text-2xl">
                <PiInstagramLogoFill />
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-[70%] grid  grid-cols-2 md:grid-cols-4 gap-6 lg:gap-0">
            {/* Second Col - Company */}
            <div>
              <h2 className="font-semibold text-lg mb-4">Company</h2>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Testimonial
                  </Link>
                </li>
              </ul>
            </div>

            {/* Third Col - Services */}
            <div>
              <h2 className="font-semibold text-lg mb-4">Services</h2>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    UI/UX Design
                  </Link>
                </li>

                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    App Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Branding
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Digital Marketing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Fourth Col - Find Us On */}
            <div>
              <h2 className="font-semibold text-lg mb-4">Find Us On</h2>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Fiverr
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Upwork
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Freelancer
                  </Link>
                </li>
              </ul>
            </div>

            {/* Fifth Col - Contact */}
            <div>
              <h2 className="font-semibold text-lg mb-4">Contact</h2>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <Link
                    href="mailto:info@macatmegatrons.com"
                    className="hover:text-blue-600 flex items-center gap-2"
                  >
                    <BsTelephone className="text-blue-600 text-xl" />

                    <span>+880 18337-87734 </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:info@macatmegatrons.com"
                    className="hover:text-blue-600 flex items-center gap-2"
                  >
                    <MdAlternateEmail className="text-blue-600 text-xl" />

                    <span>hello@magpio.com </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Magpieo. All Rights Reserved.
        </div>
      </WidthWrapper>
    </footer>
  );
};

export default Footer;
