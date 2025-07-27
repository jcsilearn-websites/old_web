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
      <section className="relative pt-20 pb-16 px-4 mt-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-semibold rounded-full mb-6">
            Our Programs
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Our Products & Signature Programs — JCS iLearn
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Empowering learners with skill-based, career-aligned and industry-ready modules.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-2xl">📍</span>
              <span>Offline | Online | Hybrid</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">📅</span>
              <span>1-day workshops to full-year integration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="max-w-6xl mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
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
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Programs</h2>
          <p className="text-gray-600 text-lg">
            Choose from our curated selection of industry-leading programs
          </p>
        </div>

        {/* Program Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPrograms.map((program) => (
            <div key={program.id} className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 hover:scale-[1.02]">
              {/* Top Section - Image with Gradient Overlay */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700">
                    {program.duration}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-semibold rounded-full">
                    {program.category}
                  </div>
                </div>
              </div>

              {/* Middle Section - Course Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-pink-600 transition-colors duration-300">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {program.description}
                </p>
                {/* <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">
                      {program.instructor.split(' ')[0][0]}{program.instructor.split(' ')[1][0]}
                    </span>
                  </div>
                  <div>
                    <p className="text-gray-700 text-sm font-medium">with</p>
                    <p className="text-gray-900 text-sm font-semibold">{program.instructor}</p>
                  </div>
                </div> */}
              </div>

              {/* Bottom Section - Pricing & Button */}
              <div className="px-6 pb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-gray-900">
                      ${program.price}
                    </span>
                    <span className="text-gray-400 line-through text-sm">
                      ${program.originalPrice}
                    </span>
                  </div>
                  <div className="text-xs text-green-600 font-semibold bg-green-100 px-2 py-1 rounded-full">
                    {Math.round(((program.originalPrice - program.price) / program.originalPrice) * 100)}% OFF
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Our Programs */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🧠 About Our Programs</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                At JCS iLearn, we believe that impactful education isn't one-size-fits-all — it's modular, tailored and deeply outcome-driven.
              </p>
              <p>
                That's why we've designed JCS iLearn as a curated suite of 25+ training programs, each carefully crafted to develop a specific skill set, career goal or learning outcome.
              </p>
              <p>
                Whether you're a student looking to build a strong technical foundation or an institution aiming to boost campus placement readiness, our offerings are structured to serve your goals with focus and flexibility.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
              alt="Students learning and collaborating" 
              width={500} 
              height={400} 
              className="rounded-3xl shadow-2xl" 
            />
            <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
              <p className="text-gray-700 font-semibold italic">
                "Modular, tailored, and outcome-driven learning"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Unique */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">🎯 What Makes JCS iLearn Unique?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">📚</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Program-Based Learning</h3>
              <p className="text-gray-600 text-sm">
                Each module follows a structured curriculum with defined goals, activities and outcomes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">📦</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Product-Style Delivery</h3>
              <p className="text-gray-600 text-sm">
                Every iLearn module functions as a standalone product that can be deployed individually or bundled.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">⚡</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Tiered Flexibility</h3>
              <p className="text-gray-600 text-sm">
                Our modules come in Lite, Pro, and Plus formats — letting you choose the depth and duration.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🌐</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Cross-Domain Ecosystem</h3>
              <p className="text-gray-600 text-sm">
                From coding and soft skills to career readiness and innovation, iLearn covers it all seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Choose Your Program?</h2>
            <p className="text-blue-100 leading-relaxed mb-8 text-lg">
              Explore our comprehensive suite of 25+ programs designed to transform your learning journey and career prospects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link 
                href="/"
                className="inline-block px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300"
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