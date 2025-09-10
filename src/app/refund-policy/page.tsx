"use client";
import Link from "next/link";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40">
      {/* Header Section */}
      <section className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 mt-10">
            Refund Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At JCS iLEARN, we strive to deliver high-quality training and
            learning experiences. However, we understand that circumstances may
            arise where a refund request is necessary. Please review our refund
            policy below.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
          {/* Policy Sections */}
          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                1. Program Registrations (Students/Individuals)
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  <span>
                    <strong>Cancellation within 7 days of registration</strong>{" "}
                    – Full refund (if the program has not yet started).
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  <span>
                    <strong>After program commencement</strong> – No refunds
                    will be issued once training has begun.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  <span>
                    <strong>Transfer option</strong> – Instead of a refund, you
                    may choose to transfer your registration to another upcoming
                    program (subject to availability).
                  </span>
                </li>
              </ul>
            </div>

            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                2. Institutional/Corporate Training
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  <span>Advance payments/booking fees are non-refundable.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  <span>
                    If the program is postponed by JCS iLEARN, the amount will
                    be adjusted against rescheduled dates.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  <span>
                    If canceled by the institution/company after confirmation,
                    no refund will be issued.
                  </span>
                </li>
              </ul>
            </div>

            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                3. Technical Issues (Online Programs)
              </h2>
              <p className="text-gray-700">
                If you are unable to access a session due to verified technical
                issues from our side, we will either reschedule the session or
                issue a partial refund based on the session missed.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                4. Refund Processing
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  <span>
                    Approved refunds will be processed within 10-15 business
                    days to the original payment method.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  <span>
                    Any transaction or gateway fees are non-refundable.
                  </span>
                </li>
              </ul>
            </div>

            <div className="pb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                5. Contact for Refunds
              </h2>
              <p className="text-gray-700 mb-4">
                For refund-related queries, please write to us at:
              </p>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-lg font-semibold text-gray-900">
                  support@jcsilearn.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
