'use client';
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logo from '../../public/logo.png';
import Image from 'next/image';
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-r from-white/80 via-blue-50 to-purple-50 py-6 px-4 min-h-[10vh]">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        variants={fadeUp}
        transition={{ duration: 0.7, type: "spring", stiffness: 60, damping: 18 }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 "
      >
        {/* Logo and Name */}
        <div className="flex flex-col items-center gap-2 w-1/3">
          <Image src={logo} alt="Logo" className="h-20 object-cover w-auto" />
          <p className="text-gray-500 text-sm text-center max-w-md mt-4">
            JCS iLEARN is a platform for learning and growing. We are a team of 1000+ developers and designers who are passionate about building the future of education.
          </p>
          
        </div>
        {/* Navigation Links */}
        <div className="flex flex-col items-center gap-2 w-1/3">
        <motion.nav className="flex flex-col gap-2 text-gray-700 font-semibold text-base">
          <motion.a href="/" className="hover:text-blue-700 transition">Home</motion.a>
          <motion.a href="/aboutus" className="hover:text-blue-700 transition">About</motion.a>
          <motion.a href="/sections/careers" className="hover:text-blue-700 transition">Careers</motion.a>
          <motion.a href="/sections/contactus" className="hover:text-blue-700 transition">Contact</motion.a>
        </motion.nav>
        {/* Social Icons */}
        <motion.div className="flex gap-5">
          <motion.a href="#" className="text-blue-700 hover:text-purple-600 transition"><FaFacebookF size={22} /></motion.a>
          <motion.a href="#" className="text-blue-700 hover:text-purple-600 transition"><FaTwitter size={22} /></motion.a>
          <motion.a href="#" className="text-blue-700 hover:text-purple-600 transition"><FaLinkedinIn size={22} /></motion.a>
          <motion.a href="#" className="text-blue-700 hover:text-purple-600 transition"><FaInstagram size={22} /></motion.a>
        </motion.div>
        </div>
      </motion.div>
      <div className="mt-8 text-center text-gray-400 text-sm tracking-wide">&copy; {currentYear} JCS iLEARN. All rights reserved.</div>
    </footer>
  );
} 