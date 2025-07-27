"use client";
import React from "react";
import logo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";



export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr from-pink-400/10 to-blue-400/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8">

          {/* Main Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
              Empowering Learners.{" "}
              Elevating Skills.
              <br />
              Enabling Success.
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Footer Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex flex-col items-start space-y-6">
                <Image
                  src={logo}
                  alt="JCS iLEARN Logo"
                  className="h-16 w-auto object-contain drop-shadow-md"
                />
                <p className="text-gray-600 leading-relaxed text-sm">
                  At JCS iLEARN, we believe that learning with purpose leads to
                  confident earning. We empower you to bridge the gap between
                  education and employment—because skills aren&apos;t optional, they&apos;re
                  essential. – I Learn I Earn.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h4>
                <ul className="space-y-3">
                  <li>
                    <Link 
                      href="/" 
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="w-1 h-1 bg-blue-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/about" 
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="w-1 h-1 bg-blue-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/sections/careers" 
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="w-1 h-1 bg-blue-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/sections/contactus" 
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="w-1 h-1 bg-blue-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Our Services */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Our Services</h4>
                <ul className="space-y-3">
                  <li>
                    <span className="text-gray-600 text-sm flex items-center group cursor-pointer">
                      <span className="w-1 h-1 bg-purple-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                      For Colleges & Universities
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-600 text-sm flex items-center group cursor-pointer">
                      <span className="w-1 h-1 bg-purple-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                      For Corporates
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-600 text-sm flex items-center group cursor-pointer">
                      <span className="w-1 h-1 bg-purple-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                      For Schools
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-600 text-sm flex items-center group cursor-pointer">
                      <span className="w-1 h-1 bg-purple-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                      For Individuals
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-600 text-sm flex items-center group cursor-pointer">
                      <span className="w-1 h-1 bg-purple-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                      For Startups
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Company Policies & Resources */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Programs</h4>
                <ul className="space-y-3">
                  <li>
                    <span className="text-gray-600 text-sm flex items-center group cursor-pointer">
                      <span className="w-1 h-1 bg-pink-500  rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                      Soft Skills & Communication
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-600 text-sm flex items-center group cursor-pointer">
                      <span className="w-1 h-1 bg-pink-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                      Aptitude & Reasoning  
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-600 text-sm flex items-center group cursor-pointer">
                      <span className="w-1 h-1 bg-pink-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                      Technical Skills
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-600 text-sm flex items-center group cursor-pointer">
                      <span className="w-1 h-1 bg-pink-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                      Placement & Recruitment
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-600 text-sm flex items-center group cursor-pointer">
                      <span className="w-1 h-1 bg-pink-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                      Corporate Readiness & Compliance
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-600 text-sm flex items-center group cursor-pointer">
                      <span className="w-1 h-1 bg-pink-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                      Career Planning & Personal Growth
                    </span>
                  </li>
                  <li>
                    <span className="text-gray-600 text-sm flex items-center group cursor-pointer">
                        <span className="w-1 h-1 bg-pink-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                      School Enrichment
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-gray-500 text-sm">
                &copy; {currentYear} JCS iLEARN. All rights reserved.
              </div>
              
              {/* Additional Links */}
              <div className="flex items-center space-x-6">
                <span className="text-gray-500 text-sm hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                  Terms of Service
                </span>
                <span className="text-gray-500 text-sm hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                  Cookie Policy
                </span>
                <span className="text-gray-500 text-sm hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                  Sitemap
                </span>
              </div>
            </div>
          </div>
        </div>
    </footer>
  );
}
