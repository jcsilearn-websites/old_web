"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function SkillBoost() {
  return (
    <section className="w-full min-h-screen bg-[#F5F5FE] flex flex-col items-center justify-center py-16 px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        variants={fadeUp}
        transition={{
          duration: 0.7,
          type: "spring",
          stiffness: 60,
          damping: 18,
          delay: 0.05,
        }}
        className="w-full max-w-7xl flex flex-col md:flex-row gap-12 items-center justify-between h-full"
      >
        {/* Left: Hero Content */}
        <div className="flex-1 flex flex-col gap-6 max-w-xl h-full">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={fadeUp}
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 60,
              damping: 18,
              delay: 0.12,
            }}
            className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1 rounded-full shadow-sm w-fit p-3"
          >
            Why Choose Us
          </motion.span>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={fadeUp}
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 60,
              damping: 18,
              delay: 0.22,
            }}
            className="text-2xl md:text-4xl font-bold text-gray-900"
          >
            Matching Your Skills with
            <br />
            the Right Opportunities
          </motion.h1>
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={fadeUp}
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 60,
              damping: 18,
              delay: 0.32,
            }}
            className="text-[#5F6C76] text-base mb-4 pr-10"
          >
            <ol>
              <li>
                <strong> • Customized Solutions:</strong> We recognize that
                every individual and organization is unique. That’s why our
                training programs are tailored to meet specific needs and
                objectives, ensuring maximum relevance and impact.
              </li>
              <li>
                <strong> • State-of-the-Art Facilities:</strong> Our training
                centers are equipped with modern amenities and cutting-edge
                technology, creating an ideal environment for effective
                learning.
              </li>
              <li>
                <strong> • Strong Industry Connections:</strong> We maintain
                close ties with leading companies and organizations, enabling us
                to stay current with industry trends and offer valuable
                placement opportunities for our trainees.
              </li>
            </ol>
          </motion.span>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={fadeUp}
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 60,
              damping: 18,
              delay: 0.42,
            }}
            className="flex gap-4 mt-2"
          >
            <a
              href="#explore"
              className="px-6 py-3 rounded-lg bg-[#F2277E] text-white font-semibold shadow hover:bg-pink-600 transition flex items-center gap-2"
            >
              Explore More
              <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
                <path
                  d="M5 9h8m0 0l-3-3m3 3l-3 3"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </div>
        {/* Right: Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          variants={fadeUp}
          transition={{
            duration: 0.7,
            type: "spring",
            stiffness: 60,
            damping: 18,
            delay: 0.15,
          }}
          className="flex-1 flex items-center justify-center"
        >
          <div className="relative w-full max-w-md h-96">
            <Image
              src="/hero.png"
              alt="Skills and Opportunities"
              fill
              className="object-cover rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
