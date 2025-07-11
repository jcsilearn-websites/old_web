"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../../public/logo.png';
const fadeUp = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0 },
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
  }, []);
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeUp} 
      transition={{ duration: 0.7, type: "spring", stiffness: 60, damping: 18 }}
      className={`fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-between px-8 py-3  ${isScrolled ? 'bg-white' : 'bg-transparent'}`}
    >
      <div className="flex items-center justify-between w-3/4 mx-auto">
      <div className="flex items-center gap-3">
        <img src={logo.src} alt="Logo" className="h-12 w-auto object-contain drop-shadow-md" />
      </div>
      <motion.nav className="flex items-center gap-8">
        <motion.a href="/aboutus" className={`font-semibold text-md hover:text-[#F2277E] transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}>About Us</motion.a>
        <motion.a href="#programs" className={`font-semibold text-md hover:text-[#F2277E] transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}>Our Programs</motion.a>
        <motion.a href="#services" className={`font-semibold text-md hover:text-[#F2277E] transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}>Our Services</motion.a>
        <motion.a href="#cta" className={`ml-4 px-6 py-2 rounded-full bg-[#F2277E] text-white font-semibold shadow hover:bg-pink-600 transition `}>Get Started</motion.a>
      </motion.nav>
      </div>
    </motion.header>
  );
}

export default Header;