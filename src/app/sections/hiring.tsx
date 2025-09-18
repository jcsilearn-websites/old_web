"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  FaBriefcase,
  FaChevronLeft,
  FaChevronRight,
  FaEnvelope,
  FaGraduationCap,
  FaUsers,
} from "react-icons/fa";
import Image from "next/image";
import CommunicationImage from "../../../public/CommunicationImage.jpg";
import AptitudeImage from "../../../public/aptitudeImage.jpg";
import placementImage from "../../../public/placementImage.jpg";
import technialSkillsImage from "../../../public/technialSkillsImage.jpg";
import Link from "next/link";

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

export default function Hiring() {
  const [selectedRole, setSelectedRole] = useState("trainer");
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = selectedRole === "intern" ? 15 : 40; // Your final count number
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
  }, [selectedRole]);

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
    <section
      className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 relative overflow-hidden py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      id="hiring"
    >
      {/* Background decorative elements */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-8 sm:gap-12 lg:gap-16">
        <div className="text-center max-w-0xl px-4">
          {/* <span className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs sm:text-sm font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-sm mb-4 sm:mb-6">
            <FaBriefcase className="text-purple-600" />
            We’re Hiring
          </span> */}
          <h2 className="w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight pb-1">
            Join Our Growing Team
          </h2>
          <p className="max-2-3xl text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
            Be part of an innovative and collaborative workplace. We’re seeking
            passionate individuals to help us shape the future while growing
            their careers with us.
          </p>
        </div>

        {/* Two Column Layout for How to Apply & Join Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 w-full max-w-5xl mx-auto px-4 sm:px-6">
          {/* How to Apply Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border border-white/20 flex flex-col justify-between">
            {/* Header */}
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <FaEnvelope className="text-white text-lg sm:text-xl" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                How to Apply
              </h3>
            </div>

            {/* Switchable Content */}
            <div className="space-y-3 sm:space-y-4 flex-1 min-h-[250px] sm:min-h-[240px] lg:min-h-[260px]">
              {selectedRole === "intern" ? (
                <>
                  <span className="text-lg sm:text-l lg:text-xl font-semibold text-gray-800">
                    Student Internship (Content Creator / Digital Marketer /
                    Graphic Designer)
                  </span>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-2">
                    <span className="font-semibold">Type:</span> Remote, 1 Month
                    |<span className="font-semibold ml-2">For:</span> Students
                    (2nd Year / Pre-final Year)
                  </p>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-3 sm:p-4 border border-blue-100">
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-xs sm:text-sm">
                      <li>
                        Send your resume + cover letter to{" "}
                        <a
                          href="mailto:instituteoflearn@gmail.com"
                          className="inline text-blue-600 hover:text-blue-700 font-semibold underline transition-colors duration-300"
                        >
                          instituteoflearn@gmail.com
                        </a>
                      </li>
                      <li>
                        Subject Line:
                        <span className="ml-0.5 italic">
                          “Student Intern Application – [Your Name]”
                        </span>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <span className="text-lg sm:text-l lg:text-xl font-semibold text-gray-800">
                    Trainer Role (Aptitude / Logical / Verbal / Soft Skills /
                    Technical / DSA)
                  </span>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-2">
                    <span className="font-semibold">Type:</span>{" "}
                    Part-time/Contract |
                    <span className="font-semibold ml-2">For:</span>{" "}
                    Freshers/Experienced Trainers
                  </p>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-3 sm:p-4 border border-blue-100">
                    <p className="text-gray-700 text-xs sm:text-sm">
                      • Fill out the online application form (link below)
                      <br />• Upload your resume directly in the form
                    </p>
                    <a
                      href="https://forms.gle/iZayqCsNpr1MzZXT6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 px-4 py-2 text-sm font-semibold text-white rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition"
                    >
                      Apply for Trainer Role
                    </a>
                  </div>
                </>
              )}
            </div>

            {/* Bottom buttons + Current Openings */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 gap-4 sm:gap-3">
              {/* Role Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedRole("trainer")}
                  className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 ${
                    selectedRole === "trainer"
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white"
                  }`}
                >
                  Trainer
                </button>
                <button
                  onClick={() => setSelectedRole("intern")}
                  className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 ${
                    selectedRole === "intern"
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white"
                  }`}
                >
                  Intern
                </button>
              </div>

              {/* Current Openings */}
              <div className="flex items-center sm:ml-4 flex-nowrap whitespace-nowrap">
                <span className="text-base sm:text-lg font-semibold text-gray-800 mr-2">
                  Current Openings
                </span>
                <span className="px-5 py-1.5 rounded-full font-bold text-white bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg">
                  {count}
                </span>
              </div>
            </div>
          </div>

          {/* Join Us Card */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col justify-center">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <FaUsers className="text-white text-lg sm:text-xl" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">
                Start Your Path to Success
              </h3>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-blue-100 leading-relaxed text-sm sm:text-base">
                Whether you are a student preparing to enter the workforce or a
                professional seeking to enhance your skills, JCS iLEARN is your
                trusted partner in career development.
              </p>
              <p className="text-blue-100 leading-relaxed text-sm sm:text-base">
                Join us and take the first step towards a successful and
                fulfilling career.
              </p>
              <Link href="contact">
                <button className="mt-3 sm:mt-4 px-6 sm:px-8 py-2 sm:py-3 bg-white text-blue-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 w-fit text-sm sm:text-base">
                  Get Started Today
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
