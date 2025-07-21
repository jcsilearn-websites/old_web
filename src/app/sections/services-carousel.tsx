"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBook } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaHands } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const subjects = [
  {
    icon: <FaBook />,
    title: 'Comprehensive Training Programs',
    desc: 'Tailored to meet the specific needs of various industries, our training programs cover a wide range of essential skills, including technical know-how, soft skills, interview preparation, and more.',
    color: 'from-purple-200 to-purple-100',
    bgColor: 'bg-purple-50',
  },
  {
    icon: <FaUser />,
    title: 'Expert Trainers',
    desc: 'Our team of experienced, young and vibrant trainers brings a wealth of knowledge from diverse fields, offering insights and guidance that are both practical and impactful',
    color: 'from-pink-200 to-pink-100',
    bgColor: 'bg-pink-50',
  },
  {
    icon: <FaHands />,
    title: 'Hands-On Learning',
    desc: 'We believe in learning by doing. Our interactive training sessions, real-world projects, and simulation exercises ensure that participants gain hands-on experience.',
    color: 'from-yellow-200 to-yellow-100',
    bgColor: 'bg-yellow-50',
  },
  {
    icon: <FaGraduationCap />,
    title: 'Career Guidance and Support',
    desc: 'Beyond training, we provide personalized career counseling, resume building workshops, and job placement assistance to help our participants achieve their career goals',
    color: 'from-blue-200 to-blue-100',
    bgColor: 'bg-blue-50',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % subjects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + subjects.length) % subjects.length);
  };

  return (
    <section className="w-full min-h-screen bg-white flex flex-col items-center justify-center py-16 px-4" id="explore">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        variants={fadeUp}
        transition={{ duration: 0.7, type: "spring", stiffness: 60, damping: 18, delay: 0.05 }}
        className="w-full max-w-7xl flex flex-col items-center gap-12"
      >
        {/* Section Header */}
        <div className="text-center max-w-3xl">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={fadeUp}
            transition={{ duration: 0.7, type: "spring", stiffness: 60, damping: 18, delay: 0.12 }}
            className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1 rounded-full shadow-sm w-fit p-3 mb-6"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={fadeUp}
            transition={{ duration: 0.7, type: "spring", stiffness: 60, damping: 18, delay: 0.22 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Comprehensive Training Solutions
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={fadeUp}
            transition={{ duration: 0.7, type: "spring", stiffness: 60, damping: 18, delay: 0.32 }}
            className="text-[#5F6C76] text-lg"
          >
            Discover our range of professional training programs designed to enhance your skills and accelerate your career growth
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="w-full max-w-4xl relative">
          {/* Carousel Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <FaChevronLeft className="text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <FaChevronRight className="text-gray-600" />
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                <div className={`rounded-3xl shadow-2xl bg-gradient-to-br ${subjects[currentIndex].color} p-24 min-h-[500px] flex flex-col justify-center`}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white shadow-lg">
                      <div className="text-4xl text-purple-700">
                        {subjects[currentIndex].icon}
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{subjects[currentIndex].title}</h3>
                  </div>
                  <p className="text-gray-700 text-xl leading-relaxed">{subjects[currentIndex].desc}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {subjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-purple-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          variants={fadeUp}
          transition={{ duration: 0.7, type: "spring", stiffness: 60, damping: 18, delay: 0.42 }}
          className="text-center mt-12"
        >
          <a href="#contact" className="px-8 py-4 rounded-lg bg-[#F2277E] text-white font-semibold shadow-lg hover:bg-pink-600 transition flex items-center gap-2 mx-auto w-fit">
            Get Started Today
            <svg width="18" height="18" fill="none" viewBox="0 0 18 18"><path d="M5 9h8m0 0l-3-3m3 3l-3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
} 