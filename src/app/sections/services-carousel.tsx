"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaGraduationCap,
  FaBook,
  FaUser,
  FaHands,
  FaCompactDisc,
  FaHighlighter,
  FaStudiovinari,
} from "react-icons/fa";

const subjects = [
  {
    icon: <FaBook />,
    title: "Soft Skills & Communication Module",
    desc: "Strong communication and interpersonal skills are essential in every career. This module builds confidence, clarity, and emotional intelligence to help you collaborate and lead effectively.",
    color: "from-purple-200 to-purple-100",
    bgColor: "bg-purple-50",
  },
  {
    icon: <FaUser />,
    title: "Aptitude & Reasoning Module",
    desc: "Logical thinking and problem-solving are key in competitive exams and job interviews. This module sharpens your analytical skills, speed, and accuracy to help you crack aptitude tests with ease.",
    color: "from-pink-200 to-pink-100",
    bgColor: "bg-pink-50",
  },
  {
    icon: <FaHands />,
    title: "Technical Skills Module",
    desc: "In a tech-driven world, domain knowledge is non-negotiable. This module offers hands-on learning in programming, tools, and platforms to align with industry needs and job roles.",
    color: "from-yellow-200 to-yellow-100",
    bgColor: "bg-yellow-50",
  },
  {
    icon: <FaGraduationCap />,
    title: "Placement & Recruitment Module",
    desc: "Get job-ready with expert guidance on resumes, group discussions, interviews, and HR rounds. This module prepares you to confidently face every stage of the hiring process.",
    color: "from-blue-200 to-blue-100",
    bgColor: "bg-blue-50",
  },
  {
    icon: <FaCompactDisc />,
    title: "Corporate Readiness & Compliance Module",
    desc: "Learn the professional etiquette, email writing, time management, and workplace ethics required to succeed and sustain in a corporate environment.",
    color: "from-red-200 to-white-100",
    bgColor: "bg-grey-50",
  },
  {
    icon: <FaHighlighter />,
    title: "Career Planning & Personal Growth Module",
    desc: "Discover your strengths, set career goals, and develop essential life skills. This module helps you make informed choices and grow personally and professionally.",
    color: "from-purple-400 to-black-100",
    bgColor: "bg-blue-50",
  },
  {
    icon: <FaStudiovinari />,
    title: "School Enrichment Module",
    desc: "Early exposure to communication, leadership, and learning strategies fosters a strong foundation. This module empowers school students with skills for academic and life success.",
    color: "from-yellow-200 to-red-500",
    bgColor: "bg-blue-50",
  },
];

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % subjects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + subjects.length) % subjects.length
    );
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 relative overflow-hidden py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 items-center justify-center flex flex-col">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center justify-center self-center gap-8 sm:gap-12">
        {/* Section Header */}
        <div className="text-center max-w-0xl px-4">
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs sm:text-sm font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-sm mb-4 sm:mb-6">
            <FaGraduationCap className="text-purple-600" />
            Our Services
          </span>
          <h2 className="w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4 sm:mb-6">
            Comprehensive Training Solutions
          </h2>
          <p className="max-2-3xl text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
            Discover our range of professional training programs designed to
            enhance your skills and accelerate your career growth
          </p>
        </div>

        {/* Carousel Container */}
        <div className="w-full max-w-6xl relative flex justify-center">
          {/* Carousel Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-300"
          >
            <FaChevronLeft className="text-gray-700 text-xs sm:text-sm" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:shadow-xl transition-all duration-300"
          >
            <FaChevronRight className="text-gray-700 text-xs sm:text-sm" />
          </button>

          {/* Carousel Content */}
          <div className="w-full max-w-4xl overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-2xl border border-blue-200 p-6 sm:p-8 lg:p-10 min-h-[350px] sm:min-h-[400px] lg:min-h-[450px] flex flex-col justify-center">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg flex-shrink-0">
                      <div className="text-2xl sm:text-3xl lg:text-4xl text-white">
                        {subjects[currentIndex].icon}
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                      {subjects[currentIndex].title}
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base lg:text-xl leading-relaxed">
                    {subjects[currentIndex].desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
          {subjects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 w-6 sm:w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Additional Info */}
      </div>
    </section>
  );
}
