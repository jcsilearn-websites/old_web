"use client";
import Image from "next/image";
import Link from "next/link";
import ourVision from "../../../../public/ourVision.jpg";

export default function VisionPage() {
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
          {/* <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-semibold rounded-full mb-6">
            Our Vision
          </div> */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            "I Learn, I Earn"
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Empowering Lives Through Essential Skills
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pb-20 space-y-20">
        {/* Vision Statement */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Vision
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                At JCS iLEARN, our vision is to bridge the gap between education
                and employment. We aim to empower individuals through
                transformative training programs, one-on-one coaching, and
                real-world industry insights.
              </p>
              <p>
                Whether you're a recent graduate, a career switcher, or someone
                looking to enhance employability, we offer tailored solutions to
                help you succeed.
              </p>
              <p>
                We believe learning should not end with a degree—it should
                translate into tangible, career-building outcomes. Our goal is
                to develop industry-ready professionals who are confident,
                competent, and capable of thriving in today's competitive world.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src={ourVision}
              alt="Students collaborating and learning"
              width={500}
              height={400}
              className="rounded-3xl shadow-2xl"
            />
            {/* <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20"></div> */}
          </div>
        </section>

        {/* Tagline Section */}
        <section className="bg-gradient-to-br from-[#0a0b68ff] via-[#1026b3ff] to-[#0a0b68ff] rounded-3xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">
            🚀 Introducing JCS iLEARN: Where Learning Meets Earning
          </h2>
          <div className="space-y-6 text-blue-100 leading-relaxed max-w-4xl mx-auto">
            <p>
              At JCS iLEARN, we believe knowledge is the foundation, and skill
              is the bridge to success.
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <p className="text-white font-semibold text-lg">
                ✨ "I Learn, I Earn" is more than a tagline—it's the driving
                force behind everything we do.
              </p>
            </div>
            <p>
              Our programs go beyond theory, equipping learners with practical
              life skills, career strategies, and professional confidence that
              employers value. Whether you're seeking your first job or striving
              for financial independence, we help you turn learning into
              earning—and potential into progress.
            </p>
            <p className="text-xl font-semibold">
              🌱 Empower yourself with the skills to unlock opportunities, grow
              your career, and shape a brighter future. 🌱
            </p>
          </div>
        </section>

        {/* Core Principles */}
        <section className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Core Principles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🎓</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Quality Education
              </h3>
              <p className="text-gray-600 text-sm">
                Delivering world-class training programs that meet industry
                standards
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">💼</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Career Focus
              </h3>
              <p className="text-gray-600 text-sm">
                Ensuring every skill learned translates to career advancement
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🤝</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Personal Support
              </h3>
              <p className="text-gray-600 text-sm">
                Providing one-on-one coaching and mentorship throughout the
                journey
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🌍</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Global Perspective
              </h3>
              <p className="text-gray-600 text-sm">
                Preparing learners for opportunities in the global marketplace
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🚀</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Innovation
              </h3>
              <p className="text-gray-600 text-sm">
                Continuously evolving our methods to meet changing industry
                needs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">💪</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Empowerment
              </h3>
              <p className="text-gray-600 text-sm">
                Building confidence and self-reliance in every learner
              </p>
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="https://images.pexels.com/photos/3184428/pexels-photo-3184428.jpeg?_gl=1*14xsf14*_ga*MTA2OTEzMTIxMS4xNzU1MDE3ODYz*_ga_8JE65Q40S6*czE3NTU1NDM5OTQkbzIkZzEkdDE3NTU1NDYxMTgkajYwJGwwJGgw"
              alt="Team working on future projects"
              width={500}
              height={400}
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -top-6 -left-6 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-4 text-white">
              <p className="font-semibold">Future Ready</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Looking Forward
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Our vision extends beyond today's challenges. We're building a
                future where education is truly accessible, relevant, and
                transformative.
              </p>
              <p>
                We envision a world where every learner has the opportunity to
                develop the skills they need to succeed, regardless of their
                background or circumstances.
              </p>
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 border border-pink-200">
                <p className="text-gray-700 font-medium">
                  "I Learn, I Earn" represents our commitment to creating a
                  world where learning leads to meaningful employment and
                  personal fulfillment.
                </p>
              </div>
              <p>
                Together, we're building a brighter future—one learner at a
                time.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-br from-[#0a0b68ff] via-[#1026b3ff] to-[#0a0b68ff] rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Future?
            </h2>
            <p className="text-pink-100 leading-relaxed mb-8">
              Join thousands of learners who have already discovered the power
              of "I Learn, I Earn" and transformed their careers with JCS
              iLearn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                Back to Home
              </Link>
              <Link
                href="/about"
                className="inline-block px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Back to About Us
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Start Your Journey
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
