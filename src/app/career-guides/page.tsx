"use client";
import Link from "next/link";

export default function CareerGuidesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40">
      {/* Header Section */}
      <section className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 mt-10">
            Career Guides
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kickstart your journey with our practical career guides, designed to
            help you at every stage of your professional path. Each guide offers
            step-by-step strategies, real-world examples and expert tips to help
            you grow with confidence.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
          {/* Available Guides */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Available Guides
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Resume & Cover Letter Guide
                </h3>
                <p className="text-gray-700">
                  Learn how to craft a professional resume and cover letter that
                  get noticed by recruiters.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-green-900 mb-3">
                  Interview Preparation Guide
                </h3>
                <p className="text-gray-700">
                  Master common questions, body language, and communication
                  skills to crack your interviews.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-purple-900 mb-3">
                  LinkedIn Optimization Guide
                </h3>
                <p className="text-gray-700">
                  Build a strong personal brand, grow your network, and attract
                  career opportunities.
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                <h3 className="text-xl font-semibold text-orange-900 mb-3">
                  Workplace Skills Guide
                </h3>
                <p className="text-gray-700">
                  Adapt to professional environments with essential skills like
                  communication, teamwork and time management.
                </p>
              </div>

              <div className="bg-pink-50 p-6 rounded-xl border-l-4 border-pink-500 md:col-span-2">
                <h3 className="text-xl font-semibold text-pink-900 mb-3">
                  Placement Readiness Guide
                </h3>
                <p className="text-gray-700">
                  A complete roadmap for students preparing for campus
                  placements and corporate hiring.
                </p>
              </div>
            </div>
          </div>

          {/* Coming Soon Notice */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">
              📥 Downloadable Resources Coming Soon!
            </h2>
            <p className="text-lg">
              Stay tuned for detailed PDF guides and toolkits that you can
              download and use at your convenience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
