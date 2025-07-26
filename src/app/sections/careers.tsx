"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaBriefcase, FaChevronLeft, FaChevronRight, FaEnvelope, FaUsers } from "react-icons/fa";
import Image from "next/image";

const courses = [
  {
    title: "Soft Skills & Communication Module",
    desc: "Strong communication and interpersonal skills are essential in every career. This module builds confidence, clarity, and emotional intelligence to help you collaborate and lead effectively",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Aptitude & Reasoning Module",
    desc: "Logical thinking and problem-solving are key in competitive exams and job interviews. This module sharpens your analytical skills, speed, and accuracy to help you crack aptitude tests with ease.",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Technical Skills Module",
    desc: "In a tech-driven world, domain knowledge is non-negotiable. This module offers hands-on learning in programming, tools, and platforms to align with industry needs and job roles.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Placement & Recruitment Module",
    desc: "Get job-ready with expert guidance on resumes, group discussions, interviews, and HR rounds. This module prepares you to confidently face every stage of the hiring process.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Corporate Readiness & Compliance Module",
    desc: "Learn the professional etiquette, email writing, time management, and workplace ethics required to succeed and sustain in a corporate environment.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Career Planning & Personal Growth Module",
    desc: "Discover your strengths, set career goals, and develop essential life skills. This module helps you make informed choices and grow personally and professionally.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "School Enrichment Module",
    desc: "Early exposure to communication, leadership, and learning strategies fosters a strong foundation. This module empowers school students with skills for academic and life success.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
  },
];

const visibleCards = 3;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function Careers() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

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
    <section className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 relative overflow-hidden py-20 px-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-16">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          variants={fadeUp}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-semibold px-6 py-3 rounded-full shadow-sm mb-6">
            <FaBriefcase className="text-purple-600" />
            Career Opportunities
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Explore Our Popular
            <br />
            Career Programs
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your pathway to professional and personal growth through comprehensive training modules 
            designed to bridge the gap between education and employment.
          </p>
        </motion.div>

        {/* Carousel - Full Width */}
        <div className="w-full flex flex-col items-center mb-12">
          <div className="relative w-full flex flex-col items-center min-h-[500px]">
            <div className="w-full flex items-center justify-center relative min-h-[440px] gap-4">
              <button
                className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg p-3 hover:bg-white hover:shadow-xl transition-all duration-300 z-10"
                onClick={handlePrev}
                aria-label="Previous"
              >
                <FaChevronLeft size={20} className="text-gray-700" />
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
                  className="flex w-full gap-6 justify-center"
                  style={{ minHeight: 420 }}
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
                          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                      </div>
                      <div className="p-6 flex flex-col gap-3 flex-1">
                        <h3 className="font-bold text-lg text-gray-900 mb-2">
                          {course.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 flex-1 leading-relaxed">
                          {course.desc.replace(/"/g, "&quot;")}
                        </p>
                        <button className="mt-auto px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm shadow-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 w-fit self-start">
                          Apply Now
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
              <button
                className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg p-3 hover:bg-white hover:shadow-xl transition-all duration-300 z-10"
                onClick={handleNext}
                aria-label="Next"
              >
                <FaChevronRight size={20} className="text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Two Column Layout for How to Apply & Join Us */}
        <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl mx-auto">
          {/* How to Apply Card */}
          <div
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <FaEnvelope className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">How to Apply</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Please send your resume and a cover letter to{" "}
                <a
                  href="mailto:instituteoflearn@gmail.com"
                  className="text-blue-600 hover:text-blue-700 font-semibold underline transition-colors duration-300"
                >
                  instituteoflearn@gmail.com
                </a>
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-100">
                <p className="text-gray-700 text-sm">
                  Include{" "}
                  <span className="font-bold text-purple-700">
                    &quot;Student Intern Application&quot;
                  </span>{" "}
                  in the subject line along with your name.
                </p>
              </div>
            </div>
          </div>

          {/* Join Us Card */}
          <div
            className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 text-white shadow-xl flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <FaUsers className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold">Join Our Team</h3>
            </div>
            <div className="space-y-4">
              <p className="text-blue-100 leading-relaxed">
                Whether you are a student preparing to enter the workforce or a
                professional seeking to enhance your skills, JCS iLEARN is your
                trusted partner in career development.
              </p>
              <p className="text-blue-100 leading-relaxed">
                Join us and take the first step towards a successful and
                fulfilling career.
              </p>
              <button className="mt-4 px-8 py-3 bg-white text-blue-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 w-fit">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
