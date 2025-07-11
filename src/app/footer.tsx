'use client';
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logo from '../../public/logo.png';
import Image from 'next/image';
import Link from 'next/link';
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-r from-white/90 via-blue-50 to-purple-50 py-10 px-4 min-h-[12vh] border-t border-blue-100">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        variants={fadeUp}
        transition={{ duration: 0.7, type: "spring", stiffness: 60, damping: 18 }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0"
      >
        {/* Logo and Name */}
        <div className="flex flex-col items-center md:items-start gap-3 w-full md:w-1/3">
          <Image src={logo} alt="Logo" className="h-16 w-auto object-contain mb-2" />
          <p className="text-gray-500 text-sm text-center md:text-left max-w-xs leading-relaxed">
            JCS iLEARN is a platform for learning and growing. We are a team of 1000+ developers and designers who are passionate about building the future of education.
          </p>
        </div>
        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row items-center gap-2 md:gap-8 text-gray-700 font-semibold text-base w-full md:w-1/3 justify-center">
          <Link href="/" className="hover:text-blue-700 transition-colors duration-200">Home</Link>
          <Link href="/aboutus" className="hover:text-blue-700 transition-colors duration-200">About</Link>
          <Link href="/sections/careers" className="hover:text-blue-700 transition-colors duration-200">Careers</Link>
          <Link href="/sections/contactus" className="hover:text-blue-700 transition-colors duration-200">Contact</Link>
        </nav>
        {/* Social Icons */}
        <div className="flex gap-5 w-full md:w-1/3 justify-center md:justify-end mt-6 md:mt-0">
          <a href="#" className="text-blue-700 hover:text-purple-600 transition-colors duration-200"><FaFacebookF size={22} /></a>
          <a href="#" className="text-blue-700 hover:text-purple-600 transition-colors duration-200"><FaTwitter size={22} /></a>
          <a href="#" className="text-blue-700 hover:text-purple-600 transition-colors duration-200"><FaLinkedinIn size={22} /></a>
          <a href="#" className="text-blue-700 hover:text-purple-600 transition-colors duration-200"><FaInstagram size={22} /></a>
        </div>
      </motion.div>
      <div className="mt-10 text-center text-gray-400 text-xs tracking-wide font-medium">&copy; {currentYear} JCS iLEARN. All rights reserved.</div>
    </footer>
  );
} 