"use client";
import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function ContactUs() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          {/* <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs sm:text-sm font-semibold rounded-full mb-4 sm:mb-6">
            Get In Touch
          </div> */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4 sm:mb-6">
            Let&apos;s Start a Conversation
          </h1>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your skills and accelerate your career? Get in
            touch with us today and discover how our training programs can help
            you achieve your goals.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border border-white/20">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Contact Information
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-white text-sm sm:text-lg lg:text-xl" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                    Address
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                    123 Training Center, Skill Development Hub
                    <br />
                    Bangalore, Karnataka 560001
                    <br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-white text-sm sm:text-lg lg:text-xl" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                    Phone
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                    +91 98765 43210
                    <br />
                    +91 87654 32109
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-white text-sm sm:text-lg lg:text-xl" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                    Email
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                    info@jcsilearn.com
                    <br />
                    support@jcsilearn.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaClock className="text-white text-sm sm:text-lg lg:text-xl" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                    Business Hours
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                    Monday - Saturday: 9:00 AM - 5:00 PM
                    <br />
                    Sunday: 9:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border border-white/20">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Send us a Message
            </h2>
            <form className="space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-xs sm:text-sm lg:text-base font-semibold text-gray-700 mb-1 sm:mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 text-xs sm:text-sm lg:text-base"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-xs sm:text-sm lg:text-base font-semibold text-gray-700 mb-1 sm:mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 text-xs sm:text-sm lg:text-base"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm lg:text-base font-semibold text-gray-700 mb-1 sm:mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 text-xs sm:text-sm lg:text-base"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs sm:text-sm lg:text-base font-semibold text-gray-700 mb-1 sm:mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 text-xs sm:text-sm lg:text-base"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs sm:text-sm lg:text-base font-semibold text-gray-700 mb-1 sm:mb-2"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 text-xs sm:text-sm lg:text-base"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="training">Training Programs</option>
                  <option value="corporate">Corporate Training</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="support">Technical Support</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm lg:text-base font-semibold text-gray-700 mb-1 sm:mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 text-xs sm:text-sm lg:text-base resize-none"
                  placeholder="Tell us about your requirements..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2 sm:py-3 lg:py-4 px-4 sm:px-6 lg:px-8 rounded-xl bg-gradient-to-r from-[#0a0b68ff] via-[#1026b3ff] to-[#0a0b68ff] text-white font-semibold text-sm sm:text-base lg:text-lg shadow-lg hover:from-pink-600 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
