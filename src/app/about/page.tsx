"use client";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl" />
      </div>

      {/* Header Section */}
      <section className="relative pt-20 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 mt-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-semibold rounded-full mb-6">
            About Us
          </div> */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4 sm:mb-6">
            Learn more about us
          </h1>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Welcome to JCS iLearn - where we turn learning into earning.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20 space-y-12 sm:space-y-16 lg:space-y-20">
        {/* Hero Section with Image */}
        <section className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our story
            </h2>
            <div className="space-y-3 sm:space-y-4 text-gray-600 leading-relaxed">
              <p className="text-sm sm:text-base lg:text-lg">
                Founded with a vision to empower the next generation of
                professionals, we are committed to providing industry-relevant
                training to students and job seekers. Our programs focus on
                practical skills, placement readiness, and personal
                development—ensuring learners are equipped to thrive in
                real-world careers.
              </p>
              <p className="text-sm sm:text-base lg:text-lg">
                We're here to close the gap between what students learn in the
                classroom and what employers expect in the workplace.
              </p>
            </div>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/about/journey"
                className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#0a0b68ff] via-[#1026b3ff] to-[#0a0b68ff] text-white font-semibold rounded-xl hover:transition-all duration-300 text-sm sm:text-base"
              >
                Learn About Our Journey
              </Link>
              <Link
                href="/"
                className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#0a0b68ff] via-[#1026b3ff] to-[#0a0b68ff] text-white font-semibold rounded-xl hover:transition-all duration-300 text-sm sm:text-base"
              >
                Back to Home
              </Link>
            </div>
          </div>
          <div className="relative order-first lg:order-last">
            <Image
              src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?_gl=1*t0tl6b*_ga*MTA2OTEzMTIxMS4xNzU1MDE3ODYz*_ga_8JE65Q40S6*czE3NTU1NDM5OTQkbzIkZzEkdDE3NTU1NDUyMTkkajYwJGwwJGgw"
              alt="Students collaborating on projects"
              width={500}
              height={600}
              className="rounded-3xl shadow-2xl w-full max-w-sm sm:max-w-md lg:max-w-none"
            />
            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-3 sm:p-6 shadow-xl border border-white/20">
              <p className="text-gray-700 font-semibold italic text-xs sm:text-sm lg:text-base">
                "At JCS iLearn, we don't just teach—we transform."
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-white/20">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our Mission
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                To empower learners with the skills, mindset, and confidence to
                thrive in the real world.
              </p>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Close the gap between academic learning and professional
                    readiness
                  </p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Provide practical skills needed for today's job market
                  </p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Foster innovation, confidence, and continuous development
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our Vision
              </h2>
              <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-3 sm:mb-4">
                "I Learn, I Earn" | Empowering Lives Through Essential Skills
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                At JCS iLEARN, our vision is to bridge the gap between education
                and employment. We aim to empower individuals through
                transformative training programs, one-on-one coaching, and
                real-world industry insights.
              </p>
              <div className="mt-4 sm:mt-6">
                <Link
                  href="/about/vision"
                  className="inline-block px-4 sm:px-6 py-2 sm:py-3  bg-gradient-to-r from-[#0a0b68] via-[#1026b3] to-[#0a0b68] text-white font-semibold rounded-xl hover:scale-[1.02] hover:shadow-xl   hover:cursor-pointer transition-all duration-300 text-sm sm:text-base"
                >
                  Explore Our Vision
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Founders Section with Image */}
        <section className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="relative order-first lg:order-last">
            <Image
              src="https://images.pexels.com/photos/7437488/pexels-photo-7437488.jpeg?_gl=1*v3yemn*_ga*MTA2OTEzMTIxMS4xNzU1MDE3ODYz*_ga_8JE65Q40S6*czE3NTU1NDM5OTQkbzIkZzEkdDE3NTU1NDUxNTkkajYwJGwwJGgw"
              alt="Team collaboration meeting"
              width={500}
              height={400}
              className="rounded-3xl shadow-2xl w-full max-w-sm sm:max-w-md lg:max-w-none"
            />
            <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-3 sm:p-4 text-white">
              <p className="font-semibold text-xs sm:text-sm lg:text-base">
                Leadership Team
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Meet Our Founders
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
              Our leadership team brings together decades of experience in
              education, entrepreneurship, and professional development. They
              share a common vision of transforming how students prepare for
              their careers.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-3 sm:p-4 border border-pink-200">
                <p className="text-gray-700 font-medium text-sm sm:text-base">
                  "The spark for JCS iLearn was ignited during one of my
                  entrepreneurship workshops..."
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mt-2">
                  — Founder, JCS iLearn
                </p>
              </div>
            </div>
            <div className="mt-4 sm:mt-6">
              <Link
                href="/about/founders"
                className="inline-block px-4 sm:px-6 py-2 sm:py-3  bg-gradient-to-r from-[#0a0b68] via-[#1026b3] to-[#0a0b68] text-white font-semibold rounded-xl                     hover:scale-[1.02] hover:shadow-xl   
                    hover:cursor-pointer transition-all duration-300 text-sm sm:text-base"
              >
                Read Full Messages
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 rounded-3xl p-6 sm:p-8 lg:p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
              🚀 Ready to Start Your Journey?
            </h2>
            <p className="text-blue-100 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg">
              Join thousands of learners who have transformed their careers with
              JCS iLearn. Our comprehensive programs are designed to bridge the
              gap between education and employment.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link
                href="/about/identity"
                className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
