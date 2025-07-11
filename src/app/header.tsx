"use client";
import React from 'react';
import { motion } from 'framer-motion';
import logo from '../../public/logo.png';
const fadeUp = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0 },
};

const Header = () => {
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeUp} 
      transition={{ duration: 0.7, type: "spring", stiffness: 60, damping: 18 }}
      className="absolute container mx-auto top-0 left-0 right-0 min-h-[10vh] z-50  flex items-center justify-between px-8 py-4 backdrop-blur-md bg-transparent "
    >
            <div className="flex items-center gap-2">
              <img src={logo.src} alt="Logo" className="h-20 object-cover w-auto" />
            </div>
            <nav className="flex items-center gap-8">
              <a href="#about" className="text-white font-medium hover:underline">About Us</a>
              <a href="#programs" className="text-white font-medium hover:underline">Our Programs</a>
              <a href="#services" className="text-white font-medium hover:underline">Our Services</a>
              <a href="#cta" className="ml-4 px-6 py-2 rounded-full bg-white text-blue-900 font-semibold shadow hover:bg-blue-100 transition">Get Started</a>
            </nav>
    </motion.header>
  );
}

export default Header;