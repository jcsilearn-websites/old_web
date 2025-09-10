"use client";
import Link from "next/link";

export default function SupportCenterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40">
      {/* Header Section */}
      <section className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 mt-10">
            Support Center
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Welcome to the JCS iLEARN Support Center. We're here to make your
            learning journey smooth and hassle-free. Find answers, request
            assistance or connect with our team for quick support.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
          {/* How We Can Help */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              How We Can Help You
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  General Queries
                </h3>
                <p className="text-gray-700">
                  Questions about our programs, workshops or training sessions.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  Technical Support
                </h3>
                <p className="text-gray-700">
                  Issues with accessing online sessions, study materials or
                  forms.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">
                  Enrollment & Payments
                </h3>
                <p className="text-gray-700">
                  Help with registrations, fees or refund-related queries.
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-orange-900 mb-3">
                  Career Support
                </h3>
                <p className="text-gray-700">
                  Guidance on resume building, LinkedIn optimization and
                  placements.
                </p>
              </div>

              <div className="bg-pink-50 p-6 rounded-xl md:col-span-2">
                <h3 className="text-lg font-semibold text-pink-900 mb-3">
                  Trainer Support
                </h3>
                <p className="text-gray-700">
                  Assistance for trainers/interns working with JCS iLEARN.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Support */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Contact Support
            </h2>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">📧</span>
                  <span className="text-lg font-semibold">
                    Email: support@jcsilearn.com
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-3">📱</span>
                  <span className="text-lg font-semibold">
                    WhatsApp Helpline: +91-XXXXXXXXXX
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-purple-600 mr-3">🕒</span>
                  <span className="text-lg font-semibold">
                    Office Hours: Monday - Friday, 9:00 AM - 6:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Quick Links
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/faq"
                className="bg-blue-50 p-4 rounded-xl hover:bg-blue-100 transition-colors"
              >
                <span className="text-blue-900 font-semibold">FAQ Section</span>
              </Link>
              <Link
                href="/career-guides"
                className="bg-green-50 p-4 rounded-xl hover:bg-green-100 transition-colors"
              >
                <span className="text-green-900 font-semibold">
                  Career Guides
                </span>
              </Link>
              <Link
                href="/student-handbook"
                className="bg-purple-50 p-4 rounded-xl hover:bg-purple-100 transition-colors"
              >
                <span className="text-purple-900 font-semibold">
                  Student Handbook
                </span>
              </Link>
              <Link
                href="/refund-policy"
                className="bg-orange-50 p-4 rounded-xl hover:bg-orange-100 transition-colors"
              >
                <span className="text-orange-900 font-semibold">
                  Refund Policy
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
