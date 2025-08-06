"use client";
import React from "react";
import Image from "next/image";
import {
  FaBriefcase,
  FaUsers,
  FaLightbulb,
  FaRocket,
  FaPeopleCarry,
  FaBookReader,
  FaBrain,
  FaChartLine,
} from "react-icons/fa";
import Link from "next/link";

export default function SkillBoost() {
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4 sm:mb-6">
            Boost Your Skills, Accelerate Your Career
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive training programs designed to bridge the gap between
            education and employability, equipping you with the skills needed to
            thrive in today&apos;s competitive job market.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-8 sm:mb-12 lg:mb-16">
          {/* Content Section */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Why Choose Our Skill Development Programs?
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaBriefcase className="text-white text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                      Industry-Relevant Skills
                    </h4>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                      Learn skills that are directly applicable to current
                      industry demands and job market requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaUsers className="text-white text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                      Expert-Led Training
                    </h4>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                      Learn from industry professionals and experienced trainers
                      who understand real-world challenges.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaLightbulb className="text-white text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                      Practical Learning
                    </h4>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                      Hands-on projects and real-world scenarios to ensure you
                      can apply what you learn immediately.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaRocket className="text-white text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                      Career Acceleration
                    </h4>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                      Fast-track your career growth with targeted skill
                      development and placement support.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="pt-4 sm:pt-6">
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg hover:from-pink-600 hover:to-purple-700 text-sm sm:text-base lg:text-lg transform hover:scale-[1.02] transition-all duration-300"
              >
                Explore Our Programs
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 20 20"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                >
                  <path
                    d="M6 10h8m0 0l-3-3m3 3l-3 3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative order-first lg:order-last">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
              alt="Students learning and collaborating"
              width={500}
              height={600}
              className="rounded-3xl shadow-2xl w-full max-w-sm sm:max-w-md lg:max-w-none"
            />
            {/* Floating Stats Card */}
            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-white/20">
              <div className="text-center">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1">
                  500+
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Students Trained
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-white/20">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
              <FaPeopleCarry className="text-white text-lg sm:text-xl" />
            </div>
            <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
              Soft Skills
            </h4>
            <p className="text-xs sm:text-sm text-gray-600">
              Communication, leadership, and interpersonal skills for
              professional success.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-white/20">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
              <FaBookReader className="text-white text-lg sm:text-xl" />
            </div>
            <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
              Technical Skills
            </h4>
            <p className="text-xs sm:text-sm text-gray-600">
              Programming, data analysis, and technical competencies for modern
              careers.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-white/20">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
              <FaBrain className="text-white text-lg sm:text-xl" />
            </div>
            <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
              Aptitude Training
            </h4>
            <p className="text-xs sm:text-sm text-gray-600">
              Logical reasoning, problem-solving, and analytical thinking
              skills.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-white/20">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
              <FaChartLine className="text-white text-lg sm:text-xl" />
            </div>
            <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">
              Career Guidance
            </h4>
            <p className="text-xs sm:text-sm text-gray-600">
              Resume building, interview preparation, and career planning
              support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
