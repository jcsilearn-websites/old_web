'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { FaBriefcase, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const courses = [
  {
    title: 'Graphic design course',
    desc: 'Learn the fundamentals of graphic design and visual communication.',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Illustration design course',
    desc: 'Master illustration techniques for digital and print media.',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'UI/UX design course',
    desc: 'Design user interfaces and experiences for web and mobile.',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Web development',
    desc: 'Build modern, responsive websites and web applications.',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Digital Marketing',
    desc: 'Grow your brand and reach your audience online.',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
  },
];

const visibleCards = 3;

export default function Careers() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + courses.length) % courses.length);
  };
  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % courses.length);
  };

  // Get the visible cards in a circular way
  const getVisible = () => {
    const arr = [];
    for (let i = 0; i < visibleCards; i++) {
      arr.push(courses[(index + i) % courses.length]);
    }
    return arr;
  };

  // Animation variants for horizontal sliding of the group
  const variants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 400 : -400,
      opacity: 0,
      position: 'absolute' as const,
      transition: { duration: 0.4, type: 'tween' },
    }),
    center: {
      x: 0,
      opacity: 1,
      position: 'relative' as const,
      transition: { duration: 0.4, type: 'tween' },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -400 : 400,
      opacity: 0,
      position: 'absolute' as const,
      transition: { duration: 0.4, type: 'tween' },
    }),
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-white" style={{ minHeight: '100vh' }}>
      {/* Carousel Section */}
      <div className="w-full max-w-6xl flex flex-col items-center mb-12 ">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Our popular courses</h2>
        <p className="text-gray-500 mb-8 max-w-xl text-center">Non-disclosure agreement seed round seed money accelerator influencer.</p>
        <div className="relative w-full flex flex-col items-center min-h-[400px]">
          <div className="w-full flex items-center justify-center relative min-h-[340px] gap-8">
          <button
              className="bg-white border border-gray-200 rounded-full shadow p-2 hover:bg-gray-100 transition"
              onClick={handlePrev}
              aria-label="Previous"
            >
              <FaChevronLeft size={20} />
            </button>
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, type: 'tween' }}
                className="flex w-full gap-8 justify-center"
                style={{ minHeight: 320 }}
              >
                {getVisible().map((course, i) => (
                  <div
                    key={course.title + i}
                    className="flex flex-col overflow-hidden border border-gray-100 rounded-xl bg-white w-full max-w-xs mx-auto shadow hover:shadow-lg transition"
                  >
                    <img src={course.img} alt={course.title} className="w-full h-56 object-cover rounded-t-xl" />
                    <div className="p-6 flex flex-col gap-3 flex-1">
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">{course.title}</h3>
                      <p className="text-gray-600 text-sm mb-2 flex-1">{course.desc}</p>
                      <button className="mt-2 px-4 py-2 rounded-xl bg-blue-700 text-white font-medium text-sm shadow hover:bg-blue-800 transition w-fit self-start">Apply Now</button>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
            <button
              className="bg-white border border-gray-200 rounded-full shadow p-2 hover:bg-gray-100 transition"
              onClick={handleNext}
              aria-label="Next"
            >
              <FaChevronRight size={20} />
            </button>
          </div>
            
          </div>
      </div>
      {/* How to Apply Section */}
      <div className="w-full max-w-2xl flex flex-col items-center justify-center">
        {/* Job Application Icon */}
        <div className="flex flex-row items-center justify-center gap-4 mb-4">
          <FaBriefcase size={40} className="text-purple-800" />
          <h3 className="text-2xl font-bold text-purple-800">How to Apply</h3>
        </div>
        <p className="text-gray-700 text-base text-center">
          Please send your resume and a cover letter to <a href="mailto:instituteoflearn@gmail.com" className="text-blue-700 underline">instituteoflearn@gmail.com</a>.<br />
          Include <span className="font-semibold">"Student Intern Application"</span> in the subject line along with your name.
        </p>
      </div>
    </section>
  );
} 