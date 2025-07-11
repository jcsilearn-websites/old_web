"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import aboutus1 from '../../../public/aboutus1.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const AboutUs = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-xl mx-auto px-4 py-20 gap-16 min-h-screen bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        variants={fadeUp}
        transition={{ duration: 0.7, type: "spring", stiffness: 60, damping: 18, delay: 0.05 }}
        className="flex-1 flex items-center justify-center relative  w-1/2 h-full"
      >
        <Image
          src={aboutus1}
          alt="About Us"
          height={500}
          width={500}
          className="rounded-[10%] "
        />
      </motion.div>
      <div className="flex-1 flex flex-col gap-4 max-w">
        <motion.span
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          variants={fadeUp}
          transition={{ duration: 0.7, type: "spring", stiffness: 60, damping: 18, delay: 0.12 }}
          className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1 rounded-full  shadow-sm w-fit p-3"
        >
          About Us
        </motion.span>
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          variants={fadeUp}
          transition={{ duration: 0.7, type: "spring", stiffness: 60, damping: 18, delay: 0.22 }}
          className="text-2xl md:text-4xl font-black text-gray-900 "
        >
              Welcome to <b >JCS iLEARN</b>
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          variants={fadeUp}
          transition={{ duration: 0.7, type: "spring", stiffness: 60, damping: 18, delay: 0.32 }}
          className="text-gray-600 text-base  mb-6"
        >
            We are a pioneering placement training company dedicated to empowering job seekers and students with the skills, strategies, tools and insights they need to excel in today&apos;s competitive and dynamic job market. 
            <br/>
            <br/>
            Founded with a vision to empower the next generation of professionals, we are committed to providing industry-relevant training to students and job seekers. Our programs focus on practical skills, placement readiness, and personal development—ensuring learners are equipped to thrive in real-world careers.
            <br/>
            <br/>
            We&apos;re here to close the gap between what students learn in the classroom and what employers expect in the workplace.        
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          variants={fadeUp}
          transition={{ duration: 0.7, type: "spring", stiffness: 60, damping: 18, delay: 0.42 }}
          className="flex gap-4 mt-2"
        >
            <a href="#explore" className="px-6 py-3 rounded-lg bg-[#F2277E] text-white font-semibold shadow hover:bg-pink-600 transition flex items-center gap-2">
              Learn More
              <svg width="18" height="18" fill="none" viewBox="0 0 18 18"><path d="M5 9h8m0 0l-3-3m3 3l-3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
        </motion.div>
        </div>
    </section>
  )
}

export default AboutUs;