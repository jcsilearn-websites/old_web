"use client";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs sm:text-sm font-semibold rounded-full mb-4 sm:mb-6">
            Our Services
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4 sm:mb-6">
            Comprehensive Training Solutions
          </h1>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8">
            Tailored training programs designed to bridge the gap between
            education and employability, empowering individuals and
            organizations to achieve their full potential.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Choose Our Training Services?
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm sm:text-lg lg:text-xl">
                    🎯
                  </span>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                    Industry-Relevant Curriculum
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                    Our programs are designed in collaboration with industry
                    experts to ensure relevance and practical applicability.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm sm:text-lg lg:text-xl">
                    👥
                  </span>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                    Expert Trainers
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                    Learn from experienced professionals who bring real-world
                    insights and practical knowledge to every session.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm sm:text-lg lg:text-xl">
                    📊
                  </span>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                    Proven Results
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                    Track record of successful placements and career
                    advancements for our program participants.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            {/* Need to change image */}
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
              alt="College students in classroom"
              width={500}
              height={600}
              className="rounded-3xl shadow-2xl w-full max-w-sm sm:max-w-md lg:max-w-none"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src =
                  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"; // Fallback image
              }}
            />
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-20">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Service Categories
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600">
            Comprehensive training solutions for every need
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* For Colleges & Universities */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
              <span className="text-white text-lg sm:text-xl lg:text-2xl">
                🎓
              </span>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              For Colleges & Universities
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-4 sm:mb-6">
              Enhance your institution&apos;s placement readiness with our
              comprehensive training programs designed specifically for academic
              environments.
            </p>
            <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
              <li className="flex items-center gap-2 text-xs sm:text-sm lg:text-base text-gray-700">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                Campus placement training
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm lg:text-base text-gray-700">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                Skill development workshops
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm lg:text-base text-gray-700">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                Industry collaboration programs
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-block w-full text-center bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 text-xs sm:text-sm lg:text-base"
            >
              Learn More
            </Link>
          </div>

          {/* For Corporates */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
              <span className="text-white text-lg sm:text-xl lg:text-2xl">
                🏢
              </span>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              For Corporates
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-4 sm:mb-6">
              Upskill your workforce with industry-specific training programs
              that drive productivity and innovation.
            </p>
            <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
              <li className="flex items-center gap-2 text-xs sm:text-sm lg:text-base text-gray-700">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                Employee skill development
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm lg:text-base text-gray-700">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                Leadership training programs
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm lg:text-base text-gray-700">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                Technical competency enhancement
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-block w-full text-center bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 text-xs sm:text-sm lg:text-base"
            >
              Learn More
            </Link>
          </div>

          {/* For Startups */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
              <span className="text-white text-lg sm:text-xl lg:text-2xl">
                🚀
              </span>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              For Startups
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-4 sm:mb-6">
              Accelerate your startup&apos;s growth with specialized training
              programs for entrepreneurs and early-stage teams.
            </p>
            <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
              <li className="flex items-center gap-2 text-xs sm:text-sm lg:text-base text-gray-700">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                Entrepreneurship bootcamps
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm lg:text-base text-gray-700">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                Innovation workshops
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm lg:text-base text-gray-700">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                Business strategy training
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-block w-full text-center bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 text-xs sm:text-sm lg:text-base"
            >
              Learn More
            </Link>
          </div>

          {/* For Schools */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
              <span className="text-white text-lg sm:text-xl lg:text-2xl">
                🏫
              </span>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              For Schools
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-4 sm:mb-6">
              Prepare students for future success with early career awareness
              and skill development programs.
            </p>
            <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
              <li className="flex items-center gap-2 text-xs sm:text-sm lg:text-base text-gray-700">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                Career guidance programs
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm lg:text-base text-gray-700">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                Skill development workshops
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm lg:text-base text-gray-700">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                Academic excellence support
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-block w-full text-center bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 text-xs sm:text-sm lg:text-base"
            >
              Learn More
            </Link>
          </div>

          {/* For Professionals */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
              <span className="text-white text-lg sm:text-xl lg:text-2xl">
                👨‍💼
              </span>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              For Professionals
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-4 sm:mb-6">
              Advance your career with targeted skill development and
              professional growth programs.
            </p>
            <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
              <li className="flex items-center gap-2 text-xs sm:text-sm lg:text-base text-gray-700">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                Career advancement training
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm lg:text-base text-gray-700">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                Skill enhancement programs
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm lg:text-base text-gray-700">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                Professional certification courses
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-block w-full text-center bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 text-xs sm:text-sm lg:text-base"
            >
              Learn More
            </Link>
          </div>

          {/* For Individuals */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
              <span className="text-white text-lg sm:text-xl lg:text-2xl">
                👤
              </span>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              For Individuals
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-4 sm:mb-6">
              Personal development and skill enhancement programs tailored to
              your individual goals and aspirations.
            </p>
            <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
              <li className="flex items-center gap-2 text-xs sm:text-sm lg:text-base text-gray-700">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                Personal skill development
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm lg:text-base text-gray-700">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                Hobby and interest courses
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm lg:text-base text-gray-700">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                Self-improvement programs
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-block w-full text-center bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 text-xs sm:text-sm lg:text-base"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
            💬 Why This Matters
          </h2>
          <p className="text-blue-100 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg">
            Most individuals don't miss opportunities due to a lack of
            knowledge, but due to a lack of clarity, confidence, and
            communication. At JCS iLEARN, we ensure you are not just
            educated—but equipped.
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/30">
            <p className="text-white font-semibold text-lg sm:text-xl">
              🎯 Your Career, Our Commitment.
            </p>
          </div>
          <p className="text-blue-100 mt-4 sm:mt-6 text-sm sm:text-base">
            Whether you're a student, educator, parent, or recruiter, JCS iLEARN
            is here to support your journey from learning to earning.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg">
            Choose the service that best fits your needs and start your journey
            towards success.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              Contact Us Today
            </Link>
            <Link
              href="/"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 border-2 border-pink-500 text-pink-600 font-semibold rounded-xl hover:bg-pink-500 hover:text-white transition-all duration-300 text-sm sm:text-base"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
