"use client";
import React, { useEffect, useState, useRef } from "react";
import logo from "../../public/logo.png";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

type NavItem = {
  label: string;
  href: string;
  section?: string;
  menuClick?: boolean;
};

const navLinks = [
  {
    label: "About Us",
    href: "/about",
    type: "dropdown",
    items: [
      {
        label: "About Us",
        href: "/about",
      },
      {
        label: "Our Journey",
        href: "/about/journey",
      },
      {
        label: "Our Founders",
        href: "/about/founders",
      },
      {
        label: "Our Vision",
        href: "/about/vision",
      },
      // {
      //   label: "Our Identity",
      //   href: "/about/identity",
      // },
      //Removed as per documentation
    ],
  },
  {
    label: "Our Programs",
    href: "/programs",
    type: "dropdown",
    items: [
      {
        label: "Soft Skills",
        href: "/programs",
        section: "#soft-skills",
        menuClick: true,
      },
      {
        label: "Technical Skills",
        href: "/programs",
        section: "#technical-skills",
        menuClick: true,
      },
      {
        label: "Aptitude & Reasoning",
        href: "/programs",
        section: "#aptitude",
        menuClick: true,
      },
      {
        label: "Placement & Recruitment",
        href: "/programs",
        section: "#placement",
        menuClick: true,
      },
      {
        label: "Career Planning",
        href: "/programs",
        section: "#career-planning",
        menuClick: true,
      },
      {
        label: "Corporate Readiness",
        href: "/programs",
        section: "#corporate-readiness",
        menuClick: true,
      },
      {
        label: "School Enrichment",
        href: "/programs",
        section: "#school-enrichment",
        menuClick: true,
      },
    ],
  },
  {
    label: "Our Services",
    href: "/services",
    type: "dropdown",
    items: [
      {
        label: "For Colleges & Universities",
        href: "/services",
        section: "#colleges-universities",
      },
      {
        label: "For Companies & Corporates",
        href: "/services",
        section: "#corporates",
      },
      {
        label: "For Startups",
        href: "/services",
        section: "#startups",
      },
      {
        label: "For Schools",
        href: "/services",
        section: "#schools",
      },
      {
        label: "For Professionals",
        href: "/services",
        section: "#professionals",
      },
    ],
  },
  {
    label: "Get Started",
    href: "/cta",
    type: "button",
  },
];

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [currentSection, setCurrentSection] = useState("");
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop - sectionHeight / 2) {
          setCurrentSection(section.id);
          console.log(currentSection);
        }
      });
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [currentSection]);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  const menuSelect = (item: NavItem) => {
    if (item.menuClick) {
      localStorage.setItem("defaultFilter", item.label);
    } else {
      localStorage.removeItem("defaultFilter");
    }
  };

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm"
    >
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-2 sm:py-3 lg:py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Image
            src={logo}
            alt="Logo"
            height={48}
            className="h-6 sm:h-8 lg:h-10 xl:h-12 w-auto object-contain drop-shadow-md hover:cursor-pointer"
            onClick={() => {
              if (window.location.pathname !== "/") {
                window.location.href = "/";
              }
            }}
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-3 lg:gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <div key={link.label} className="relative">
              {link.type === "dropdown" ? (
                <>
                  <button
                    className={`flex items-center gap-1 font-semibold text-xs lg:text-sm xl:text-base hover:text-pink-600 transition-colors text-black py-2 ${
                      openDropdown === link.label ? "text-pink-600" : ""
                    }`}
                    onClick={() => toggleDropdown(link.label)}
                  >
                    {link.label}
                    <FaChevronDown
                      className={`w-2 h-2 lg:w-3 lg:h-3 transition-transform duration-200 ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-2 w-48 lg:w-56 xl:w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                      >
                        <div className="py-2">
                          {link.items?.map((item, index) => (
                            <motion.a
                              key={item.label}
                              href={item.href}
                              className="block px-3 lg:px-4 py-2 lg:py-3 text-xs lg:text-sm text-gray-700 hover:text-pink-600 hover:bg-gray-100   transition-colors duration-150"
                              onClick={() => {
                                closeDropdown();
                                menuSelect(item);
                              }}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              {item.label}
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <a
                  href={link.href}
                  // className="font-semibold text-xs lg:text-sm xl:text-base bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 lg:px-4 xl:px-6 py-2 rounded-xl shadow-lg hover:from-blue-600 hover:to-blue-700 transform hover:scale-[1.02] transition-all duration-300"
                  className="font-semibold text-xs lg:text-sm xl:text-base bg-gradient-to-r from-[#0a0b68ff] via-[#1026b3ff] to-[#0a0b68ff] text-white px-3 lg:px-4 xl:px-6 py-2 rounded-xl shadow-lg hover:from-blue-600 hover:to-blue-800 transform hover:scale-[1.02] transition-all duration-300"
                >
                  {link.label}
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-1 sm:p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() =>
            setOpenDropdown(openDropdown === "mobile" ? null : "mobile")
          }
        >
          <div className="w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-center items-center">
            <span
              className={`block w-4 sm:w-5 h-0.5 bg-gray-600 transition-all duration-300 ${
                openDropdown === "mobile"
                  ? "rotate-45 translate-y-1"
                  : "-translate-y-1"
              }`}
            ></span>
            <span
              className={`block w-4 sm:w-5 h-0.5 bg-gray-600 transition-all duration-300 ${
                openDropdown === "mobile" ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-4 sm:w-5 h-0.5 bg-gray-600 transition-all duration-300 ${
                openDropdown === "mobile"
                  ? "-rotate-45 -translate-y-1"
                  : "translate-y-1"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {openDropdown === "mobile" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-3 sm:px-4 lg:px-8 py-3 sm:py-4 space-y-2 sm:space-y-3">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.type === "dropdown" ? (
                    <div>
                      <button
                        className="w-full text-left font-semibold text-sm sm:text-base text-gray-700 py-2 flex items-center justify-between"
                        onClick={() => toggleDropdown(`mobile-${link.label}`)}
                      >
                        {link.label}
                        <FaChevronDown
                          className={`w-3 h-3 transition-transform duration-200 ${
                            openDropdown === `mobile-${link.label}`
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openDropdown === `mobile-${link.label}` && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-3 sm:pl-4 space-y-1 sm:space-y-2"
                          >
                            {link.items?.map((item) => (
                              <a
                                key={item.label}
                                href={item.href}
                                className="block text-xs sm:text-sm text-gray-600 hover:text-pink-600 py-1"
                                onClick={closeDropdown}
                              >
                                {item.label}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      className="block font-semibold text-sm sm:text-base text-gray-700 hover:text-pink-600 py-2"
                      onClick={closeDropdown}
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
