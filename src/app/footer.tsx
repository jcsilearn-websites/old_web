"use client";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-r from-white/90 via-blue-50 to-purple-50 pt-10 pb-3 px-6 border-t border-blue-100">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        variants={fadeUp}
        transition={{
          duration: 0.7,
          type: "spring",
          stiffness: 60,
          damping: 18,
        }}
        className="max-w-7xl mx-auto"
      >
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
            Empowering Learners.{" "}
            <span className="text-green-600">Elevating Skills.</span>
            <br />
            Enabling Success.{" "}
            {/* <span className="text-green-600">infinite possibilities.</span> */}
          </h2>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div className="flex flex-col items-start gap-4">
            <Image
              src={logo}
              alt="Logo"
              className="h-16 w-auto object-contain"
            />
            <p className="text-sm text-gray-600 leading-relaxed">
              At JCS iLEARN, we believe that learning with purpose leads to
              confident earning. We empower you to bridge the gap between
              education and employment—because skills aren't optional, they're
              essential. – I Learn I Earn.
            </p>
          </div>

          {/* About Section */}
          <div>
            <h4 className="text-md font-semibold text-blue-900 mb-2">About</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>
                <Link href="/" className="hover:text-blue-700">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/aboutus" className="hover:text-blue-700">
                  About
                </Link>
              </li>
              <li>
                <Link href="/sections/careers" className="hover:text-blue-700">
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/sections/contactus"
                  className="hover:text-blue-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Placeholder Column (like Businesses/Sustainability/Media) */}
          <div>
            <h4 className="text-md font-semibold text-blue-900 mb-2">
              Explore
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Courses</li>
              <li>Programs</li>
              <li>Workshops</li>
              <li>Certifications</li>
            </ul>
          </div>

          {/* Address + Social Icons */}
          <div className="flex flex-col gap-3">
            <h4 className="text-md font-semibold text-blue-900 mb-2">
              Contact
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              JCS iLEARN
              <br />
              #123, Sector - 44,
              <br />
              Gurugram - 122 002,
              <br />
              Haryana, India
            </p>
            <div className="flex gap-4 mt-[25%]">
              <a href="#" className="text-blue-700 hover:text-purple-600">
                <FaFacebookF size={20} />
              </a>
              {/* <a href="#" className="text-blue-700 hover:text-purple-600">
                <FaTwitter size={20} />
              </a> */}
              <a href="#" className="text-blue-700 hover:text-purple-600">
                <FaLinkedinIn size={20} />
              </a>
              <a href="#" className="text-blue-700 hover:text-purple-600">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-10 text-center text-gray-400 text-xs tracking-wide font-medium">
          &copy; {currentYear} JCS iLEARN. All rights reserved.
        </div>
      </motion.div>
    </footer>
  );
}
