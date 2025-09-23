"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../../asset/logo/logo.png";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { useState } from "react";

// Unified menu structure
const menuItems = [
  { name: "Home", path: "/" },
  {
    name: "Services",
    submenu: [
      { name: "Branding", path: "/services/branding" },
      { name: "UI/UX Design", path: "/services/ui-ux-design" },
      { name: "Web Development", path: "/services/web-development" },
      { name: "App Design", path: "/services/app-design" },
      { name: "Digital Marketing", path: "/services/digital-marketing" },
    ],
  },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-md">
      {/* Main container */}
      <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div>
          <Image src={logo} alt="magpieo_logo" height={150} width={150} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-[16px]">
          {menuItems.map((item) => (
            <div key={item.name} className="relative">
              {/* Dropdown Trigger */}
              {item.submenu ? (
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center gap-2 hover:text-gray-300 cursor-pointer"
                >
                  {item.name}
                  <FaChevronDown size={12} />
                </button>
              ) : (
                <Link href={item.path} className="hover:text-gray-300">
                  {item.name}
                </Link>
              )}

              {/* Submenu */}
              {item.submenu && activeDropdown === item.name && (
                <div className="absolute left-0 bg-black text-white mt-2 space-y-2 py-2 px-4 rounded-md shadow-lg">
                  {item.submenu.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.path}
                      className="block text-sm hover:text-gray-300"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Button */}
          <button className="capitalize bg-white text-black rounded-full font-medium text-xs px-4 py-2 hover:bg-gray-200 transition">
            let's book a meeting
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col items-start bg-black text-[12px] px-[10%] text-white md:hidden pb-4 space-y-4 animate-slide-down">
          {menuItems.map((item) => (
            <div key={item.name} className="relative w-full">
              {/* Dropdown Trigger */}
              {item.submenu ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center gap-2 hover:text-gray-300 cursor-pointer w-full"
                  >
                    {item.name}
                    <FaChevronDown size={12} />
                  </button>
                  {activeDropdown === item.name && (
                    <div className="flex flex-col mt-2 space-y-2 pl-4">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.path}
                          className="text-white hover:text-gray-300"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.path} className="hover:text-gray-300">
                  {item.name}
                </Link>
              )}
            </div>
          ))}

          {/* Button */}
          <button className="capitalize bg-white text-black rounded-full font-medium text-xs px-4 py-2 hover:bg-gray-200 transition mt-2">
            let's book a meeting
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
