import Image from "next/image";
import WidthWrapper from "../WidthWrapper";
import logo from "../../../asset/logo/logo1.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4">
      <WidthWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* First Col - Logo + About */}
          <div className="space-y-4">
            <Image src={logo} alt="Company Logo" className="w-32 h-auto" />
            <p className="text-sm text-gray-300">
              Macat Megatrons is a thriving community where innovators,
              professionals, and enthusiasts come together to share knowledge,
              collaborate, and grow.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-blue-600">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-blue-600">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-blue-600">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-blue-600">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Second Col - Company */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Company</h2>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Testimonial
                </a>
              </li>
            </ul>
          </div>

          {/* Third Col - Services */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Services</h2>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Branding
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Digital Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Fourth Col - Find Us On */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Find Us On</h2>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Fifth Col - Contact */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Contact</h2>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                Email:{" "}
                <a
                  href="mailto:info@macatmegatrons.com"
                  className="hover:text-blue-600"
                >
                  hello@magpieo.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+880123456789" className="hover:text-blue-600">
                  +880 18337-87734
                </a>
              </li>
              <li>Address: Dhaka, Bangladesh</li>
            </ul>
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
