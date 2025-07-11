"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import contactus from '../../../public/contact.jpg';
import Footer from '../footer';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactUs() {
  return (
    <section className="w-full  flex flex-col items-center justify-center bg-gradient-to-r from-white/80 via-blue-50 to-purple-50 py-20 px-4 min-h-[90vh] ">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-16">
        {/* Left: Form and Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          variants={fadeUp}
          transition={{ duration: 0.7, type: "spring", stiffness: 60, damping: 18, delay: 0.05 }}
          className="flex-1 flex flex-col gap-8"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={fadeUp}
            transition={{ duration: 0.7, type: "spring", stiffness: 60, damping: 18, delay: 0.12 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Contact Us</h2>
            <p className="text-gray-600 mb-6 text-sm max-w-lg">We'd love to hear from you! Fill out the form or reach us directly using the info below.</p>
          </motion.div>
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={fadeUp}
            transition={{ duration: 0.7, type: "spring", stiffness: 60, damping: 18, delay: 0.22 }}
            className="flex flex-col gap-4 w-full"
          >
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <input type="text" placeholder="Your Name" className="flex-1 px-5 py-3 rounded-lg border border-gray-200 bg-white/70 focus:ring-2 focus:ring-blue-400 text-sm" />
              <input type="email" placeholder="Your Email" className="flex-1 px-5 py-3 rounded-lg border border-gray-200 bg-white/70 focus:ring-2 focus:ring-blue-400 text-sm" />
            </div>
            <textarea placeholder="Your Message" rows={6} className="px-5 py-3 rounded-xl border border-gray-200 bg-white/70 focus:ring-2 focus:ring-blue-400 text-sm resize-none" />
            <button type="submit" className="mt-2 px-8 py-3 rounded-lg bg-gradient-to-r from-blue-700 to-purple-600 text-white font-bold text-sm shadow-lg hover:from-blue-800 hover:to-purple-700 transition w-fit self-left">Send Message</button>
          </motion.form>
          {/* <div className="flex flex-col sm:flex-row gap-8 w-full justify-start items-start mt-4">
            <div className="flex items-center gap-3 text-gray-700 text-lg">
              <FaEnvelope className="text-blue-700" />
              <a href="mailto:instituteoflearn@gmail.com" className="underline">instituteoflearn@gmail.com</a>
            </div>
            <div className="flex items-center gap-3 text-gray-700 text-lg">
              <FaPhoneAlt className="text-blue-700" />
              <a href="tel:+919999999999" className="underline">+91 99999 99999</a>
            </div>
            <div className="flex items-center gap-3 text-gray-700 text-lg">
              <FaMapMarkerAlt className="text-blue-700" />
              <span>Chennai, India</span>
            </div>
          </div> */}
        </motion.div>
        {/* Right: Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          variants={fadeUp}
          transition={{ duration: 0.7, type: "spring", stiffness: 60, damping: 18, delay: 0.32 }}
          className="flex-1 flex items-center justify-center"
        >
          <img
            src={contactus.src}
            alt="Contact Us"
            className="w-full max-w-md rounded-3xl shadow-2xl object-cover"
            style={{ minHeight: 320 }}
          />
        </motion.div>
      </div>
    </section>
  );
} 