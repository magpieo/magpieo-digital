"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  // Check if route is active
  const isActive = (path: string) => pathname === path;

  // Check if any submenu is active
  const isSubmenuActive = (submenu: { name: string; path: string }[]) =>
    submenu.some((sub) => pathname === sub.path);

  // Toggle dropdown visibility
  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-md">
      <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div>
          <Image src={logo} alt="magpieo_logo" height={150} width={150} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-[16px]">
          {menuItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.submenu ? (
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className={`flex items-center gap-2 hover:text-gray-300 cursor-pointer relative ${
                    isSubmenuActive(item.submenu)
                      ? "after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:w-[10%] after:h-[2px] after:bg-white after:rounded-full"
                      : ""
                  }`}
                >
                  {item.name}
                  <FaChevronDown size={12} />
                </button>
              ) : (
                <Link
                  href={item.path}
                  className={`hover:text-gray-300 relative ${
                    isActive(item.path)
                      ? "after:absolute after:bottom-[-4px] after:left-1/2 after:-translate-x-1/2 after:w-[10%] after:h-[2px] after:bg-white after:rounded-full"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              )}

              {/* Submenu */}
          {/* Submenu */}
{item.submenu && activeDropdown === item.name && (
  <div className="absolute left-0 mt-3 bg-black text-white space-y-1 py-3 px-4 rounded-md shadow-xl min-w-[240px] z-50">
    {item.submenu.map((sub) => (
      <Link
        key={sub.name}
        href={sub.path}
        onClick={() => setActiveDropdown(null)}
        className={`block text-sm whitespace-nowrap rounded-md px-4 py-2 transition-all
          ${
            pathname === sub.path
              ? "bg-white text-black font-semibold"
              : "bg-black text-white"
          }
          hover:bg-white hover:text-black
        `}
      >
        {sub.name}
      </Link>
    ))}
  </div>
)}




            </div>
          ))}

          {/* CTA Button */}
          <button className="capitalize bg-white text-black rounded-full font-medium text-xs px-4 py-2 hover:bg-gray-200 transition">
            let's book a meeting
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col items-start bg-black text-[14px] px-[10%] text-white md:hidden pb-4 space-y-4 animate-slide-down">
          {menuItems.map((item) => (
            <div key={item.name} className="relative w-full">
              {item.submenu ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`flex items-center gap-2 w-full hover:text-gray-300 cursor-pointer relative ${
                      isSubmenuActive(item.submenu)
                        ? "underline underline-offset-[6px] decoration-white decoration-2"
                        : ""
                    }`}
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
        onClick={() => {
          setActiveDropdown(null);
          setMenuOpen(false);
        }}
        className={`text-base rounded-md px-3 py-2 transition-all
          ${
            pathname === sub.path
              ? "bg-white text-black font-medium"
              : "bg-black text-white"
          }
          hover:bg-white hover:text-black
        `}
      >
        {sub.name}
      </Link>
    ))}
  </div>
)}

                </>
              ) : (
                <Link
                  href={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`hover:text-gray-300 ${
                    isActive(item.path)
                      ? "underline underline-offset-[6px] decoration-white decoration-2"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}

          {/* CTA Button */}
          <button className="capitalize bg-white text-black rounded-full font-medium text-xs px-4 py-2 hover:bg-gray-200 transition mt-2">
            let's book a meeting
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
