"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
// import logo from "../../public/logo.png";
import footer_logo from "../../public/footer_logo.svg";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0a0b68ff] via-[#1026b3ff] to-[#0a0b68ff] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex justify-center lg:justify-start">
              <div className="flex items-center justify-center">
                <Image
                  src={footer_logo}
                  alt="JCS iLearn Logo"
                  height={700}
                  className="h-32 sm:h-36 lg:h-40 w-auto object-contain drop-shadow-xl"
                />
              </div>
            </div>

            <div className="flex gap-2 sm:gap-3">
              <a
                href="#"
                className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
              >
                <FaFacebook className="text-white text-xs sm:text-sm lg:text-base" />
              </a>
              <a
                href="#"
                className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
              >
                <FaTwitter className="text-white text-xs sm:text-sm lg:text-base" />
              </a>
              <a
                href="#"
                className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
              >
                <FaLinkedin className="text-white text-xs sm:text-sm lg:text-base" />
              </a>
              <a
                href="#"
                className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
              >
                <FaInstagram className="text-white text-xs sm:text-sm lg:text-base" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-white">
              Quick Links
            </h3>
            <ul className="space-y-1 sm:space-y-2 lg:space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-xs sm:text-sm lg:text-base text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-xs sm:text-sm lg:text-base text-gray-300 hover:text-white transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-xs sm:text-sm lg:text-base text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-xs sm:text-sm lg:text-base text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Our Programs
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/careers"
                  className="text-xs sm:text-sm lg:text-base text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Careers
                </Link>
              </li> */}
              <li>
                <Link
                  href="/contact"
                  className="text-xs sm:text-sm lg:text-base text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-white">
              Resources
            </h3>
            <ul className="space-y-1 sm:space-y-2 lg:space-y-3">
              <li>
                <a
                  href="#"
                  className="text-xs sm:text-sm lg:text-base text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Career Guides
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs sm:text-sm lg:text-base text-gray-300 hover:text-white transition-colors duration-300"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Company Policies & Resources */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-white">
              Company Policies & Resources
            </h3>
            <ul className="space-y-1 sm:space-y-2 lg:space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-xs sm:text-sm lg:text-base text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-xs sm:text-sm lg:text-base text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs sm:text-sm lg:text-base text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Refund Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs sm:text-sm lg:text-base text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Student Handbook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs sm:text-sm lg:text-base text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Corporate Partnerships
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs sm:text-sm lg:text-base text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Support Center
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-6 sm:mt-8 lg:mt-12 pt-6 sm:pt-8 lg:pt-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 lg:gap-8">
            <p className="text-xs sm:text-sm lg:text-base text-gray-300 text-center sm:text-left">
              © 2025 JCS iLearn. All rights reserved. Empowering futures through
              skill development.
            </p>
            <div className="flex gap-3 sm:gap-4 lg:gap-6">
              <Link
                href="/privacy"
                className="text-xs sm:text-sm lg:text-base text-gray-300 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs sm:text-sm lg:text-base text-gray-300 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <a
                href="#"
                className="text-xs sm:text-sm lg:text-base text-gray-300 hover:text-white transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
