"use client";
import React from "react";
import { FaInstagramSquare, FaLinkedin, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import type { IconType } from "react-icons";

const icons: IconType[] = [FaInstagramSquare, FaLinkedin, FaYoutube];

export default function ContactUs() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your learning journey? We&apos;re here to help you bridge the gap between education and employment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border border-white/20 flex flex-col justify-center h-full">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Send us a Message
              </h2>
              <p className="text-gray-600">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
            </div>

            <form className="space-y-6 flex-1 flex flex-col">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-4 rounded-xl border border-gray-200 bg-white/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-4 rounded-xl border border-gray-200 bg-white/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Subject</label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  className="w-full px-4 py-4 rounded-xl border border-gray-200 bg-white/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400"
                />
              </div>

              <div className="space-y-2 flex-1">
                <label className="text-sm font-semibold text-gray-700">Message</label>
                <textarea
                  placeholder="Tell us more about your inquiry..."
                  rows={6}
                  className="w-full px-4 py-4 rounded-xl border border-gray-200 bg-white/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400 resize-none h-full"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 md:p-10 text-white shadow-2xl flex flex-col justify-center h-full">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Empower Your Future?
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              We welcome your inquiries and feedback. For more information about our programs and services, please don&apos;t hesitate to reach out.
            </p>

            <div className="space-y-6 flex-1">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <FaPhone className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-blue-100">+91 75984 98451</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-blue-100">jcsilearn@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Address</h3>
                  <p className="text-blue-100 leading-relaxed">
                    No.10, Udayampalayam Main Road,<br />
                    Sowripalayam, Coimbatore - 641028
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {icons.map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <Icon className="text-2xl text-white group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
