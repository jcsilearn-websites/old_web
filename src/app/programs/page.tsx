"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProgramsPage() {
  const [activeFilter, setActiveFilter] = useState("All Programs");

  const filters = [
    "All Programs",
    "Soft Skills",
    "Technical Skills", 
    "Aptitude & Reasoning",
    "Placement & Recruitment",
    "Career Planning"
  ];

  const programs = [
    {
      id: 1,
      title: "iLearn Skillora - Soft Skills Mastery",
      category: "Soft Skills",
      description: "Master essential soft skills to shine with confidence. Build interpersonal confidence and workplace-ready behavior.",
      instructor: "Sarah Johnson - Soft Skills Expert",
      duration: "4 weeks",
      price: 299,
      originalPrice: 399,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80",
      bgColor: "bg-teal-500",
      accentColor: "text-orange-500"
    },
    {
      id: 2,
      title: "iLearn AptEdge - Quantitative Aptitude",
      category: "Aptitude & Reasoning",
      description: "Structured training in arithmetic, data interpretation and analytical thinking to excel in aptitude tests.",
      instructor: "Dr. Michael Chen - Aptitude Specialist",
      duration: "6 weeks",
      price: 349,
      originalPrice: 449,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
      bgColor: "bg-orange-400",
      accentColor: "text-teal-600"
    },
    {
      id: 3,
      title: "iLearn CodePro - Core Programming & DSA",
      category: "Technical Skills",
      description: "In-depth training in Java programming, algorithms and data structures with problem-solving drills.",
      instructor: "Alex Rodriguez - Senior Software Engineer",
      duration: "8 weeks",
      price: 449,
      originalPrice: 599,
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=400&q=80",
      bgColor: "bg-blue-400",
      accentColor: "text-orange-500"
    },
    {
      id: 4,
      title: "iLearn Prime - Company-Specific Training",
      category: "Placement & Recruitment",
      description: "Customized sessions aligned with top recruiters' expectations – TCS, Infosys, Wipro, Capgemini & more.",
      instructor: "Priya Sharma - HR & Recruitment Expert",
      duration: "3 weeks",
      price: 399,
      originalPrice: 499,
      image: "https://images.unsplash.com/photo-1523240794102-9ebd0b167d56?auto=format&fit=crop&w=400&q=80",
      bgColor: "bg-green-600",
      accentColor: "text-teal-600"
    },
    {
      id: 5,
      title: "iLearn TalkPro - Communication Skills",
      category: "Soft Skills",
      description: "Build clarity, fluency, and effectiveness in both spoken and written English for professional success.",
      instructor: "Emma Wilson - Communication Coach",
      duration: "5 weeks",
      price: 279,
      originalPrice: 379,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      bgColor: "bg-purple-500",
      accentColor: "text-orange-500"
    },
    {
      id: 6,
      title: "iLearn Stack - Full Stack Development",
      category: "Technical Skills",
      description: "Hands-on web development from frontend to backend using modern tech stacks and real-world projects.",
      instructor: "David Kim - Full Stack Developer",
      duration: "12 weeks",
      price: 599,
      originalPrice: 799,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
      bgColor: "bg-indigo-500",
      accentColor: "text-teal-600"
    },
    {
      id: 7,
      title: "iLearn Careerly - Career Planning & LinkedIn",
      category: "Career Planning",
      description: "Build a standout professional profile and get interview-ready with career coaching and digital presence tips.",
      instructor: "Lisa Thompson - Career Strategist",
      duration: "4 weeks",
      price: 329,
      originalPrice: 429,
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80",
      bgColor: "bg-pink-500",
      accentColor: "text-orange-500"
    },
    {
      id: 8,
      title: "iLearn MockUp - Interview Preparation",
      category: "Placement & Recruitment",
      description: "Live practice rounds with detailed evaluation, scorecards and personalized feedback for GD & PI.",
      instructor: "Rajesh Kumar - Interview Coach",
      duration: "2 weeks",
      price: 199,
      originalPrice: 299,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
      bgColor: "bg-yellow-500",
      accentColor: "text-teal-600"
    }
  ];

  const filteredPrograms = activeFilter === "All Programs" 
    ? programs 
    : programs.filter(program => program.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl" />
      </div>

      {/* Header Section */}
      <section className="relative pt-20 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs sm:text-sm font-semibold rounded-full mb-4 sm:mb-6">
            Our Programs
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4 sm:mb-6">
            Our Products & Signature Programs — JCS iLearn
          </h1>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8">
            Empowering learners with skill-based, career-aligned and industry-ready modules.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl lg:text-2xl">📍</span>
              <span className="text-xs sm:text-sm lg:text-base">Offline | Online | Hybrid</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl lg:text-2xl">📅</span>
              <span className="text-xs sm:text-sm lg:text-base">1-day workshops to full-year integration</span>
            </div>
          </div>
        </div>
      </section>



      {/* Filter Buttons */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-xs sm:text-sm lg:text-base ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                  : "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md border border-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Popular Programs Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-20">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Popular Programs</h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600">
            Choose from our curated selection of industry-leading programs
          </p>
        </div>

                {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPrograms.map((program, index) => {
            // Random color combinations for each card
            const colorSchemes = [
              { bg: "from-blue-100 to-blue-300", text: "text-blue-800" },
              { bg: "from-green-100 to-green-300", text: "text-green-800" },
              { bg: "from-teal-100 to-teal-300", text: "text-teal-800" },
              { bg: "from-purple-100 to-purple-300", text: "text-purple-800" },
              { bg: "from-pink-100 to-pink-300", text: "text-pink-800" },
              { bg: "from-indigo-100 to-indigo-300", text: "text-indigo-800" },
              { bg: "from-yellow-100 to-yellow-300", text: "text-yellow-800" },
              { bg: "from-red-100 to-red-300", text: "text-red-800" },
              { bg: "from-violet-100 to-violet-300", text: "text-violet-800" },
              { bg: "from-orange-100 to-orange-300", text: "text-orange-800" },
              { bg: "from-emerald-100 to-emerald-300", text: "text-emerald-800" },
              { bg: "from-cyan-100 to-cyan-300", text: "text-cyan-800" },
            ];
            
            // Use program ID to generate random but consistent color for each program
            const colorScheme = colorSchemes[program.id % colorSchemes.length];
            
            return (
              <div key={program.id} className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <div className={`p-8 sm:p-10 bg-gradient-to-b ${colorScheme.bg} h-full flex flex-col justify-center`}>
                  <div className="text-center">
                    {/* Icon based on category */}
                    <div className="mb-6">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-black rounded-full flex items-center justify-center mx-auto">
                        {program.category === "Soft Skills" ? (
                          <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                        ) : program.category === "Technical Skills" ? (
                          <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                          </svg>
                        ) : program.category === "Aptitude & Reasoning" ? (
                          <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                          </svg>
                        ) : program.category === "Placement & Recruitment" ? (
                          <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        ) : program.category === "Career Planning" ? (
                          <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                        ) : (
                          <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                        )}
                      </div>
                    </div>
                    <h3 className={`text-lg sm:text-xl font-bold mb-3 ${colorScheme.text} leading-tight`}>
                      {program.title.split(' - ')[1] || program.title}
                    </h3>
                    <p className="text-black text-sm sm:text-base font-medium leading-relaxed mb-3">
                      {program.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* About Our Programs */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">🧠 About Our Programs</h2>
            <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed">
              <p className="text-sm sm:text-base lg:text-lg">
                At JCS iLearn, we believe that impactful education isn't one-size-fits-all — it's modular, tailored and deeply outcome-driven.
              </p>
              <p className="text-sm sm:text-base lg:text-lg">
                That's why we've designed JCS iLearn as a curated suite of 25+ training programs, each carefully crafted to develop a specific skill set, career goal or learning outcome.
              </p>
              <p className="text-sm sm:text-base lg:text-lg">
                Whether you're a student looking to build a strong technical foundation or an institution aiming to boost campus placement readiness, our offerings are structured to serve your goals with focus and flexibility.
              </p>
            </div>
          </div>
          <div className="relative order-first lg:order-last">
            <Image 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
              alt="Students learning and collaborating" 
              width={500} 
              height={400} 
              className="rounded-3xl shadow-2xl w-full max-w-sm sm:max-w-md lg:max-w-none" 
            />
            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-3 sm:p-6 shadow-xl border border-white/20">
              <p className="text-gray-700 font-semibold italic text-xs sm:text-sm lg:text-base">
                "Modular, tailored, and outcome-driven learning"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Unique */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-20">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-white/20">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">🎯 What Makes JCS iLearn Unique?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl lg:text-2xl text-white">📚</span>
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-2">Program-Based Learning</h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                Each module follows a structured curriculum with defined goals, activities and outcomes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl lg:text-2xl text-white">📦</span>
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-2">Product-Style Delivery</h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                Every iLearn module functions as a standalone product that can be deployed individually or bundled.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl lg:text-2xl text-white">⚡</span>
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-2">Tiered Flexibility</h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                Our modules come in Lite, Pro, and Plus formats — letting you choose the depth and duration.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl lg:text-2xl text-white">🌐</span>
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-2">Cross-Domain Ecosystem</h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                From coding and soft skills to career readiness and innovation, iLearn covers it all seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-20">
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">Ready to Choose Your Program?</h2>
            <p className="text-blue-100 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg">
              Explore our comprehensive suite of 25+ programs designed to transform your learning journey and career prospects.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                Get Started Today
              </Link>
              <Link 
                href="/"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 text-sm sm:text-base"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 