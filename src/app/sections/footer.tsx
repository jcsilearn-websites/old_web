import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-white/80 via-blue-50 to-purple-50 py-6 px-4 min-h-[10vh]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 ">
        {/* Logo and Name */}
        <div className="flex items-center gap-2">
          <span className="text-3xl font-extrabold text-blue-900 tracking-tight">JCS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600">iLEARN</span></span>
        </div>
        {/* Navigation Links */}
        <nav className="flex gap-8 text-gray-700 font-semibold text-base">
          <a href="/" className="hover:text-blue-700 transition">Home</a>
          <a href="/aboutus" className="hover:text-blue-700 transition">About</a>
          <a href="/sections/careers" className="hover:text-blue-700 transition">Careers</a>
          <a href="/sections/contactus" className="hover:text-blue-700 transition">Contact</a>
        </nav>
        {/* Social Icons */}
        <div className="flex gap-5">
          <a href="#" className="text-blue-700 hover:text-purple-600 transition"><FaFacebookF size={22} /></a>
          <a href="#" className="text-blue-700 hover:text-purple-600 transition"><FaTwitter size={22} /></a>
          <a href="#" className="text-blue-700 hover:text-purple-600 transition"><FaLinkedinIn size={22} /></a>
          <a href="#" className="text-blue-700 hover:text-purple-600 transition"><FaInstagram size={22} /></a>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400 text-sm tracking-wide">&copy; {new Date().getFullYear()} JCS iLEARN. All rights reserved.</div>
    </footer>
  );
} 