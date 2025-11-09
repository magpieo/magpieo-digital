/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../../asset/logo/logo1.png";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

import web from "../../../asset/service/Magpieo-Digital-Web-Design-Development-Agency-Custom-Website.jpg";
import app from "../../../asset/service/Magpieo-Digital-App-Design-Mobile-UX-UI-Interface.jpg";
import branding from "../../../asset/service/Magpieo-Digital-Branding-Brand-Building-Strategy-Agency.jpg";
import marketing from "../../../asset/service/Magpieo-Digital-Digital-Marketing-SEO-Analytics-Strategy.jpg";
import ui from "../../../asset/service/Magpieo-Digital-UIUX-Design-Process-Wireframing-Prototyping.jpg";

const menuItems = [
  { name: "Home", path: "/" },
  {
    name: "Services",
    submenu: [
      { name: "Branding", path: "/services/branding", image: branding },
      { name: "UI/UX Design", path: "/services/ui-ux-design", image: ui },
      {
        name: "Web Development",
        path: "/services/web-development",
        image: web,
      },
      { name: "App Design", path: "/services/app-design", image: app },
      {
        name: "Digital Marketing",
        path: "/services/digital-marketing",
        image: marketing,
      },
    ],
  },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<any>(null);

  console.log('');
  
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => pathname === path;
  const isSubmenuActive = (submenu: { name: string; path: string }[]) =>
    submenu.some((sub) => pathname === sub.path);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
        setHoveredService(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-md">
      <div className="flex justify-between items-center px-3 py-4 max-w-6xl mx-auto z-50">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center">
            <Image
              src={logo}
              alt="magpieo_logo"
              height={150}
              width={150}
              className="transition-transform duration-300 hover:scale-105 cursor-pointer"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-[15px] font-medium tracking-wide relative">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className={`relative group pb-1 border-b-2 transition-all duration-300 ${
                item.submenu
                  ? isSubmenuActive(item.submenu)
                    ? "border-white"
                    : "border-transparent"
                  : isActive(item.path)
                  ? "border-white"
                  : "border-transparent"
              }`}
              onMouseEnter={() => {
                if (item.submenu) {
                  setActiveDropdown(item.name);
                  setHoveredService(item.submenu[0]);
                }
              }}
              onMouseLeave={() => {
                setActiveDropdown(null);
                setHoveredService(null);
              }}
              ref={dropdownRef}
            >
              {item.submenu ? (
                <div className="flex items-center gap-1 cursor-pointer text-white transition-colors duration-300">
                  <Link
                    href="/services"
                    className="flex items-center gap-1 font-semibold text-white"
                  >
                    {item.name}
                    <FaChevronDown
                      size={12}
                      className={`ml-1 transition-transform duration-300 ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </Link>
                </div>
              ) : (
                <Link href={item.path} className="text-white font-semibold">
                  {item.name}
                </Link>
              )}

              {/* Mega Menu */}
              {item.submenu && (
                <div
                  className={`absolute left-[-200px] top-full mt-[10px] bg-black/95 backdrop-blur-xl text-white rounded-2xl shadow-2xl w-[650px] h-[320px] overflow-hidden transition-all duration-300 z-40 ${
                    activeDropdown === item.name
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible translate-y-5"
                  }`}
                >
                  <div className="flex h-full  ">
                    {/* Left Side - Image */}
                    <div className="w-1/2 relative overflow-hidden flex items-center justify-center rounded-l-2xl  ">
                      {hoveredService ? (
                        <Image
                          src={hoveredService.image}
                          alt={hoveredService.name}
                          fill
                          className="object-cover rounded-l-2xl transition-all duration-500 scale-105 hover:scale-110"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center text-gray-400 text-sm">
                          <span>Hover a service</span>
                          <span className="opacity-60">to preview</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                    </div>

                    {/* Right Side - Text */}
                    <div className="w-1/2 pr-6 flex flex-col justify-start gap-2">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.path}
                          onMouseEnter={() => setHoveredService(sub)}
                          className={`text-[15px] px-4 py-2 rounded-lg transition-all duration-300
                    ${
                      pathname === sub.path
                        ? "bg-[#1E90FF]/20 text-[#1E90FF] font-semibold"
                        : "hover:bg-[#1E90FF]/10 hover:text-[#1E90FF]"
                    }`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* CTA Button */}
          <Link href={"/contact"}>
            <button className="relative overflow-hidden text-[13px] bg-white uppercase px-4 py-2 rounded-full font-semibold text-black group transition-all duration-500 cursor-pointer shadow-md hover:shadow-lg">
              <span className="absolute left-0 top-0 h-full w-0 bg-[#1E90FF] transition-all duration-500 group-hover:w-full"></span>
              <span className="relative z-10 flex items-center gap-2 justify-center group-hover:text-white transition-all duration-300">
                get free consultation
              </span>
            </button>
          </Link>
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
        <div className="flex flex-col items-start bg-black text-[12px] px-[8%] text-white md:hidden pb-6 space-y-1 animate-slide-down">
          {menuItems.map((item) => (
            <div key={item.name} className="relative w-full">
              {item.submenu ? (
                <>
                  <div className="flex items-center gap-2 w-full text-gray-200 font-semibold uppercase tracking-wide">
                    {item.name}
                    <FaChevronDown size={10} className="opacity-60" />
                  </div>
                  <div className="flex flex-col mt-2 pl-3 border-l border-gray-700">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.path}
                        onClick={() => setMenuOpen(false)}
                        className={`group relative rounded-md px-3 py-[6px] transition-all duration-300 ease-in-out flex items-center gap-2
                          ${
                            pathname === sub.path
                              ? "bg-[#1E90FF]/20 text-white font-semibold border-l-4 border-[#1E90FF]"
                              : "text-gray-300 hover:bg-white/10 hover:text-white"
                          }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block uppercase tracking-wide py-[6px] transition-all duration-300 relative
                    ${
                      isActive(item.path)
                        ? "text-white font-bold before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-3 before:bg-[#1E90FF] before:rounded-full pl-3"
                        : "text-gray-300 hover:text-white hover:translate-x-1"
                    }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}

          {/* CTA Button */}
          <button className="relative overflow-hidden w-full text-[12px] bg-white uppercase px-4 py-2 rounded-full font-semibold text-black group transition-all duration-500 mt-3">
            <span className="absolute left-0 top-0 h-full w-0 bg-[#1E90FF] transition-all duration-500 group-hover:w-full"></span>
            <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-all duration-300">
              get free consultation
            </span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// /* eslint-disable react/no-unescaped-entities */

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import logo from "../../../asset/logo/logo1.png";
// import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
// import { useState, useRef, useEffect } from "react";

// import web from "../asset/service/Magoieo_Digital_WebDesign.jpg";
// import app from "../../../asset/service/Magpieo_Digital_App_Design.jpg";
// import branding from "../../../asset/service/Magpieo_Digital_Branding.png";
// import marketing from "../../../asset/service/Magpieo_Digital_Digital_Marketing.jpg";
// import ui from "../../../asset/service/Magpieo_Digital_Digital_Marketing.jpg";

// // Unified menu structure
// const menuItems = [
//   { name: "Home", path: "/" },
//   {
//     name: "Services",
//     submenu: [
//       { name: "Branding", path: "/services/branding" },
//       { name: "UI/UX Design", path: "/services/ui-ux-design" },
//       { name: "Web Development", path: "/services/web-development" },
//       { name: "App Design", path: "/services/app-design" },
//       { name: "Digital Marketing", path: "/services/digital-marketing" },
//     ],
//   },
//   { name: "About", path: "/about" },
//   { name: "Contact", path: "/contact" },
// ];

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//   const pathname = usePathname();
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   const isActive = (path: string) => pathname === path;
//   const isSubmenuActive = (submenu: { name: string; path: string }[]) =>
//     submenu.some((sub) => pathname === sub.path);

//   // ✅ Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setActiveDropdown(null);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <nav className="bg-black text-white sticky top-0 z-50 shadow-md">
//       <div className="flex justify-between items-center px-3  py-4 max-w-6xl mx-auto">
//         {/* Logo */}
//         <Link href={"/"}>
//           <div className="flex items-center">
//             <Image
//               src={logo}
//               alt="magpieo_logo"
//               height={150}
//               width={150}
//               className="transition-transform duration-300 hover:scale-105 cursor-pointer"
//             />
//           </div>
//         </Link>

//         {/* Desktop Menu */}
//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-8 text-[15px] font-medium tracking-wide">
//           {menuItems.map((item) => (
//             <div
//               key={item.name}
//               className="relative group"
//               onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
//               onMouseLeave={() => item.submenu && setActiveDropdown(null)}
//             >
//               {/* Menu Item */}
//               {item.submenu ? (
//                 <div className="flex items-center gap-1 cursor-pointer text-white transition-colors duration-300">
//                   {item.name}
//                   <FaChevronDown
//                     size={12}
//                     className={`ml-1 transition-transform duration-300 ${
//                       activeDropdown === item.name ? "rotate-180" : ""
//                     }`}
//                   />
//                 </div>
//               ) : (
//                 <Link
//                   href={item.path}
//                   className={`relative pb-1 transition-all duration-300 text-white ${
//                     isActive(item.path)
//                       ? "border-b-[2px] border-white font-semibold"
//                       : "border-b-0"
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//               )}

//               {/* Submenu */}
//               {item.submenu && (
//                 <div
//                   className={`absolute left-0 top-full mt-[2px] bg-black/95 backdrop-blur-sm text-white rounded-xl shadow-xl min-w-[220px] py-3 px-2 z-50 border border-gray-800 transition-all duration-200
//           ${
//             activeDropdown === item.name
//               ? "opacity-100 visible"
//               : "opacity-0 invisible"
//           }`}
//                 >
//                   {item.submenu.map((sub) => (
//                     <Link
//                       key={sub.name}
//                       href={sub.path}
//                       className={`block rounded-md px-4 py-2 text-[14px] transition-all duration-300 ${
//                         pathname === sub.path
//                           ? "bg-white text-black font-semibold"
//                           : "hover:bg-white/10 hover:text-white"
//                       }`}
//                     >
//                       {sub.name}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}

//           {/* CTA Button */}
//           <button className="relative overflow-hidden text-[13px] bg-white uppercase px-4 py-2 rounded-full font-semibold text-black group transition-all duration-500 cursor-pointer shadow-md hover:shadow-lg">
//             <span className="absolute left-0 top-0 h-full w-0 bg-[#1E90FF] transition-all duration-500 group-hover:w-full"></span>
//             <span className="relative z-10 flex items-center gap-2 justify-center group-hover:text-white transition-all duration-300">
//               get free consultation
//             </span>
//           </button>
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           className="md:hidden text-white"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="flex flex-col items-start bg-black text-[12px] px-[8%] text-white md:hidden pb-6 space-y-1 animate-slide-down">
//           {menuItems.map((item) => (
//             <div key={item.name} className="relative w-full">
//               {item.submenu ? (
//                 <>
//                   {/* Section Title */}
//                   <div className="flex items-center gap-2 w-full text-gray-200 font-semibold uppercase tracking-wide">
//                     {item.name}
//                     <FaChevronDown size={10} className="opacity-60" />
//                   </div>

//                   {/* Submenu (always visible on mobile) */}
//                   <div className="flex flex-col mt-2 pl-3 border-l border-gray-700">
//                     {item.submenu.map((sub) => {
//                       const isActiveSub = pathname === sub.path;
//                       return (
//                         <Link
//                           key={sub.name}
//                           href={sub.path}
//                           onClick={() => setMenuOpen(false)}
//                           className={`group relative rounded-md px-3 py-[6px] transition-all duration-300 ease-in-out flex items-center gap-2
//                       ${
//                         isActiveSub
//                           ? "bg-[#1E90FF]/20 text-white font-semibold border-l-4 border-[#1E90FF]"
//                           : "text-gray-300 hover:bg-white/10 hover:text-white"
//                       }`}
//                         >
//                           {/* Animated underline */}
//                           <span
//                             className={`absolute left-0 bottom-0 h-[2px] bg-[#1E90FF] transition-all duration-300 ${
//                               isActiveSub ? "w-full" : "w-0 group-hover:w-full"
//                             }`}
//                           ></span>
//                           {sub.name}
//                         </Link>
//                       );
//                     })}
//                   </div>
//                 </>
//               ) : (
//                 <Link
//                   href={item.path}
//                   onClick={() => setMenuOpen(false)}
//                   className={`block uppercase tracking-wide py-[6px] transition-all duration-300 relative
//               ${
//                 isActive(item.path)
//                   ? "text-white font-bold before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-3 before:bg-[#1E90FF] before:rounded-full pl-3"
//                   : "text-gray-300 hover:text-white hover:translate-x-1"
//               }`}
//                 >
//                   {item.name}
//                 </Link>
//               )}
//             </div>
//           ))}

//           {/* CTA Button */}
//           <button className="relative overflow-hidden w-full text-[12px] bg-white uppercase px-4 py-2 rounded-full font-semibold text-black group transition-all duration-500 mt-3">
//             {/* Background Animation */}
//             <span className="absolute left-0 top-0 h-full w-0 bg-[#1E90FF] transition-all duration-500 group-hover:w-full"></span>

//             {/* Text */}
//             <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-all duration-300">
//               get free consultation
//             </span>
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
