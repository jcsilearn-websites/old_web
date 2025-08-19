"use client";
import Image from "next/image";
import Link from "next/link";

export default function JourneyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl" />
      </div>

      {/* Header Section */}
      <section className="relative pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            The Story Behind JCS iLearn
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From a classroom moment to a movement that transforms lives
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pb-20 space-y-20">
        {/* Origin Story */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The Beginning
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                JCS iLearn was born from a classroom moment—but built on years
                of passion, purpose, and belief in the power of education.
              </p>
              <p>
                What began as a spark of inspiration soon grew into a purposeful
                movement. From our first session, we set out to redefine how
                students prepare for their futures—combining quality instruction
                with mentorship and real-world insight.
              </p>
              <p>
                We've since built a strong reputation for delivering practical,
                engaging, and result-oriented programs.
              </p>
            </div>
          </div>
          <div className="relative">
            {/* Need too Check the image */}
            <Image
              src="https://images.pexels.com/photos/8199134/pexels-photo-8199134.jpeg?_gl=1*1rntfqy*_ga*MTA2OTEzMTIxMS4xNzU1MDE3ODYz*_ga_8JE65Q40S6*czE3NTU1NDM5OTQkbzIkZzEkdDE3NTU1NDUzMDQkajQzJGwwJGgw"
              alt="Classroom with students learning"
              width={500}
              height={400}
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
              <p className="text-gray-700 font-semibold italic">
                "Education is not preparation for life; education is life
                itself."
              </p>
            </div>
          </div>
        </section>

        {/* Growth and Development */}
        <section className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Growth Story
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                The Spark
              </h3>
              <p className="text-gray-600 text-sm">
                A student's question during an entrepreneurship workshop ignited
                our founder's passion to create real change.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                The Vision
              </h3>
              <p className="text-gray-600 text-sm">
                We developed a comprehensive approach to bridge the gap between
                education and employment.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                The Impact
              </h3>
              <p className="text-gray-600 text-sm">
                Today, we've helped thousands of students transform their
                careers and achieve their dreams.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
              alt="Team working together"
              width={500}
              height={400}
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -top-6 -left-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-4 text-white">
              <p className="font-semibold">Our Mission</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Guided by Purpose
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Our journey is guided by one mission: To empower learners with
                the skills, mindset, and confidence to thrive in the real world.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
                <p className="text-gray-700 font-medium">
                  Because when you Learn with Purpose, you Earn with Confidence.
                </p>
              </div>
              <p>
                This isn't just the end of our story—it's just the beginning.
                We're committed to continuing our mission of transforming
                education and creating opportunities for learners worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-br from-[#0a0b68ff] via-[#1026b3ff] to-[#0a0b68ff] rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-pink-100 leading-relaxed mb-8">
              Be part of a movement that's transforming education and creating
              real opportunities for learners everywhere.
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
                Get Started Today
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
