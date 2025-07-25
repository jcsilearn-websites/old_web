"use client";
import React from "react";
import { motion } from "framer-motion";
import contactus from "../../../public/contact.jpg";
import Image from "next/image";
import { FaInstagramSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import type { IconType } from "react-icons";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};
const icons: IconType[] = [FaInstagramSquare, FaLinkedin, FaYoutube];

export default function ContactUs() {
  return (
    <section className="w-full  flex flex-col items-center justify-center bg-gradient-to-r from-white/80 via-blue-50 to-purple-50 py-20 px-4 min-h-[90vh] ">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-16 justify-start items-start">
        {/* Left: Form and Info */}
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
          className="flex-1 flex flex-col gap-8"
        >
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
              delay: 0.12,
            }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-6 text-sm max-w-lg">
              We&apos;d love to hear from you! Fill out the form or reach us
              directly using the info below.
            </p>
          </motion.div>
          <motion.form
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
            className="flex flex-col gap-4 w-full"
          >
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <input
                type="text"
                placeholder="Your Name"
                className="flex-1 px-5 py-3 rounded-lg border border-gray-200 bg-white/70 focus:ring-2 focus:ring-blue-400 text-sm"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 px-5 py-3 rounded-lg border border-gray-200 bg-white/70 focus:ring-2 focus:ring-blue-400 text-sm"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows={6}
              className="px-5 py-3 rounded-xl border border-gray-200 bg-white/70 focus:ring-2 focus:ring-blue-400 text-sm resize-none"
            />
            <button
              type="submit"
              className="mt-2 px-8 py-3 rounded-lg bg-gradient-to-r from-blue-700 to-purple-600 text-white font-bold text-sm shadow-lg hover:from-blue-800 hover:to-purple-700 transition w-fit self-left"
            >
              Send Message
            </button>
          </motion.form>
        </motion.div>
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
            delay: 0.32,
          }}
          className="flex-1 flex items-center justify-center"
        >
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
            className="flex-1 flex flex-col gap-8"
          >
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
                delay: 0.12,
              }}
              className="flex flex-col"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Ready to Empower Your Students or Team?
              </h2>
              <span className="mt-[10%]">
                {" "}
                We welcome your inquiries & feedback and for more information
                about our programs and services, please do not hesitate to
                contact us.
                <br />
                <p>
                  <strong>Contact Information:</strong>
                  <br />
                  <strong>Mobile :</strong> 75984 98451
                  <br />
                  <strong> Email:</strong> jcsilearn@gmail.com
                  <br />
                  <strong>Address:</strong> No.10, Udayampalayam Main Road,
                  Sowripalayam,Coimbatore - 641028.
                  <br />
                </p>
              </span>
            </motion.div>
            <div className="flex flex-row mt-[7%] w-full justify-end">
              {Array.isArray(icons) &&
                icons.map((Icon, index) => (
                  <div
                    key={index}
                    className="p-2 bg-[#F2277E] rounded-full gap-3 mx-3  hover:bg-purple-300 transition-all duration-300"
                  >
                    <Icon className="text-3xl text-white" />
                  </div>
                ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
