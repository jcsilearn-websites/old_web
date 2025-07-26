"use client";
import React from "react";
import Image from "next/image";
import { FaBriefcase, FaUsers, FaLightbulb, FaRocket, FaCheckCircle } from "react-icons/fa";

export default function SkillBoost() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 relative overflow-hidden py-20 px-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-semibold px-6 py-3 rounded-full shadow-sm mb-6">
            <FaLightbulb className="text-purple-600" />
            Why Choose JCS iLEARN
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Matching Your Skills with
            <br />
            <span className="text-green-600">the Right Opportunities</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We bridge the gap between education and employment through personalized training programs, 
            industry connections, and cutting-edge facilities designed for your success.
          </p>
          </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Content */}
          <div
            className="space-y-8"
          >
            {/* Features Grid */}
            <div className="grid gap-6">
              {/* Feature 1 */}
              <div
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FaBriefcase className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Customized Solutions</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We recognize that every individual and organization is unique. Our training programs 
                      are tailored to meet specific needs and objectives, ensuring maximum relevance and impact.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FaRocket className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">State-of-the-Art Facilities</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our training centers are equipped with modern amenities and cutting-edge technology, 
                      creating an ideal environment for effective learning and skill development.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FaUsers className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Strong Industry Connections</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We maintain close ties with leading companies and organizations, enabling us to stay 
                      current with industry trends and offer valuable placement opportunities for our trainees.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div
              className="pt-6"
            >
              <a
                href="#explore"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg shadow-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-[1.02] transition-all duration-300"
              >
                Explore Our Programs
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                  <path
                    d="M6 10h8m0 0l-3-3m3 3l-3 3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div
            className="relative"
          >
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/hero.png"
                alt="Skills and Opportunities"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              
              {/* Floating stats card */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <FaCheckCircle className="text-white text-xl" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">500+</div>
                    <div className="text-sm text-gray-600">Successful Placements</div>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
}
