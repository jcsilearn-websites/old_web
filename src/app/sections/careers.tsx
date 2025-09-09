"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  FaBriefcase,
  FaChevronLeft,
  FaChevronRight,
  FaEnvelope,
  FaUsers,
} from "react-icons/fa";
import Image from "next/image";
import CommunicationImage from "../../../public/CommunicationImage.jpg";
import AptitudeImage from "../../../public/aptitudeImage.jpg";
import placementImage from "../../../public/placementImage.jpg";
import technialSkillsImage from "../../../public/technialSkillsImage.jpg";

const courses = [
  {
    title: "Soft Skills & Communication",
    desc: "Strong communication and interpersonal skills are essential in every career. This module builds confidence, clarity, and emotional intelligence to help you collaborate and lead effectively",
    img: CommunicationImage,
  },
  {
    title: "Aptitude & Reasoning",
    desc: "Logical thinking and problem-solving are key in competitive exams and job interviews. This module sharpens your analytical skills, speed, and accuracy to help you crack aptitude tests with ease.",
    img: AptitudeImage,
  },
  {
    title: "Technical Skills",
    desc: "In a tech-driven world, domain knowledge is non-negotiable. This module offers hands-on learning in programming, tools, and platforms to align with industry needs and job roles.",
    img: technialSkillsImage,
  },
  {
    title: "Placement & Recruitment",
    desc: "Get job-ready with expert guidance on resumes, group discussions, interviews, and HR rounds. This module prepares you to confidently face every stage of the hiring process.",
    img: placementImage,
  },
  {
    title: "Corporate Readiness & Compliance",
    desc: "Learn the professional etiquette, email writing, time management, and workplace ethics required to succeed and sustain in a corporate environment.",
    img: "https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?_gl=1*nc270h*_ga*MTA2OTEzMTIxMS4xNzU1MDE3ODYz*_ga_8JE65Q40S6*czE3NTU1NDM5OTQkbzIkZzAkdDE3NTU1NDM5OTQkajYwJGwwJGgw",
  },
  {
    title: "Career Planning & Personal Growth",
    desc: "Discover your strengths, set career goals, and develop essential life skills. This module helps you make informed choices and grow personally and professionally.",
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "School Enrichment",
    desc: "Early exposure to communication, leadership, and learning strategies fosters a strong foundation. This module empowers school students with skills for academic and life success.",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
  },
];

const visibleCards = 3;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function Careers() {
  const [isToggled, setIsToggled] = useState(false);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [count, setCount] = useState(0);
  const target = 85; // Your final count number

  useEffect(() => {
    let start = 0;
    const end = target;
    const duration = 2000; // in ms
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [isToggled]);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + courses.length) % courses.length);
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % courses.length);
  };

  const getVisible = () => {
    const arr = [];
    for (let i = 0; i < visibleCards; i++) {
      arr.push(courses[(index + i) % courses.length]);
    }
    return arr;
  };

  const variants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 400 : -400,
      opacity: 0,
      position: "absolute" as const,
      transition: { duration: 0.4, type: "tween" },
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative" as const,
      transition: { duration: 0.4, type: "tween" },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -400 : 400,
      opacity: 0,
      position: "absolute" as const,
      transition: { duration: 0.4, type: "tween" },
    }),
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 relative overflow-hidden py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-8 sm:gap-12 lg:gap-16">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          variants={fadeUp}
          className="text-center mb-6 sm:mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs sm:text-sm font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-sm mb-4 sm:mb-6">
            <FaBriefcase className="text-purple-600" />
            Career Opportunities
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4 sm:mb-6">
            Explore Our Popular
            <br />
            Career Programs
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your pathway to professional and personal growth through
            comprehensive training modules designed to bridge the gap between
            education and employment.
          </p>
        </motion.div>

        {/* Carousel - Full Width */}
        <div className="w-full flex flex-col items-center mb-8 sm:mb-12">
          <div className="relative w-full flex flex-col items-center min-h-[400px] sm:min-h-[500px]">
            <div className="w-full flex items-center justify-center relative min-h-[350px] sm:min-h-[440px] gap-2 sm:gap-4">
              <button
                className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg p-2 sm:p-3 hover:bg-white hover:shadow-xl transition-all duration-300 z-10"
                onClick={handlePrev}
                aria-label="Previous"
              >
                <FaChevronLeft
                  size={16}
                  className="text-gray-700 sm:w-5 sm:h-5"
                />
              </button>
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={index}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, type: "tween" }}
                  className="flex w-full gap-4 sm:gap-6 justify-center"
                  style={{ minHeight: 320 }}
                >
                  {getVisible().map((course, i) => (
                    <motion.div
                      key={course.title + i}
                      className="flex flex-col overflow-hidden border border-gray-100 rounded-2xl bg-white/90 backdrop-blur-sm w-full max-w-xs mx-auto shadow-xl hover:shadow-2xl transition-all duration-300 group"
                    >
                      <div className="relative overflow-hidden">
                        <Image
                          src={course.img}
                          alt={course.title}
                          width={400}
                          height={224}
                          className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                      </div>
                      <div className="p-4 sm:p-6 flex flex-col gap-2 sm:gap-3 flex-1">
                        <h3 className="font-bold text-sm sm:text-base lg:text-lg text-gray-900 mb-1 sm:mb-2">
                          {course.title}
                        </h3>
                        <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 flex-1 leading-relaxed">
                          {course.desc.replace(/"/g, "&quot;")}
                        </p>
                        <button className="mt-auto px-4 sm:px-6 py-2 sm:py-3 rounded-xl  bg-gradient-to-r from-[#0a0b68] via-[#1026b3] to-[#0a0b68] text-white font-semibold text-xs sm:text-sm shadow-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 w-fit self-start">
                          Apply Now
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
              <button
                className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg p-2 sm:p-3 hover:bg-white hover:shadow-xl transition-all duration-300 z-10"
                onClick={handleNext}
                aria-label="Next"
              >
                <FaChevronRight
                  size={16}
                  className="text-gray-700 sm:w-5 sm:h-5"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-purple-100 via-blue-50/40 to-transparent pointer-events-none"></div> */}
    </section>
  );
}
