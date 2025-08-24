"use client";
import Link from "next/link";

export default function TermsPage() {
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
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4 sm:mb-6">
            Terms and Conditions
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Welcome to JCS iLEARN. By accessing our website, registering for our
            programs or using our services, you agree to comply with the
            following Terms and Conditions. Please read them carefully before
            proceeding.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-20">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-white/20">
          {/* Last Updated */}
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-sm text-gray-500">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8 sm:space-y-12">
            {/* General */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                1. General
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed ml-4">
                <li>
                  JCS iLEARN is an educational and career development platform
                  offering training programs, workshops and related services.
                </li>
                <li>
                  These Terms apply to all users, participants and visitors to
                  our website and programs.
                </li>
                <li>
                  We reserve the right to update or modify these Terms at any
                  time without prior notice.
                </li>
              </ul>
            </div>

            {/* Eligibility */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                2. Eligibility
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed ml-4">
                <li>
                  Participation in our programs may require specific
                  qualifications, skills or prerequisites, which will be clearly
                  mentioned in the respective course details.
                </li>
                <li>
                  By enrolling, you confirm that all the information you provide
                  is accurate and truthful.
                </li>
              </ul>
            </div>

            {/* Registration & Payments */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                3. Registration & Payments
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed ml-4">
                <li>
                  Program fees, where applicable, must be paid in full or as per
                  the agreed payment schedule before the start of the program.
                </li>
                <li>
                  All payments made are non-refundable unless otherwise stated
                  in our Refund Policy.
                </li>
              </ul>
            </div>

            {/* Use of Content */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                4. Use of Content
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed ml-4">
                <li>
                  All learning materials, resources, and content provided during
                  the program are the intellectual property of JCS iLEARN.
                </li>
                <li>
                  You may not copy, distribute or share materials without prior
                  written permission.
                </li>
                <li>
                  Any misuse of our content may result in termination of access
                  and legal action.
                </li>
              </ul>
            </div>

            {/* Code of Conduct */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                5. Code of Conduct
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed ml-4">
                <li>
                  Participants must maintain respectful and professional
                  behavior during sessions (online or offline).
                </li>
                <li>
                  Disruptive behavior, plagiarism or misuse of resources will
                  lead to removal from the program without a refund.
                </li>
              </ul>
            </div>

            {/* Attendance & Certification */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                6. Attendance & Certification
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed ml-4">
                <li>
                  Certificates will be issued only upon successful completion of
                  program requirements, including attendance, assessments and
                  participation.
                </li>
                <li>
                  Late arrivals or absenteeism may affect eligibility for
                  certification.
                </li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                7. Limitation of Liability
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed ml-4">
                <li>
                  JCS iLEARN is not responsible for any loss, damage or career
                  outcomes arising from participation in our programs.
                </li>
                <li>
                  We do not guarantee specific job placements, though we provide
                  career guidance and opportunities where possible.
                </li>
              </ul>
            </div>

            {/* Privacy */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                8. Privacy
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed ml-4">
                <li>
                  We collect and store personal data only for administrative and
                  program-related purposes.
                </li>
                <li>For more details, please refer to our Privacy Policy.</li>
              </ul>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                9. Governing Law
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed ml-4">
                <li>
                  These Terms & Conditions are governed by the laws of India.
                </li>
                <li>
                  Any disputes will be subject to the jurisdiction of courts in
                  Tamil Nadu.
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              By registering for any program or using our services, you
              acknowledge that you have read, understood and agreed to these
              Terms and Conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-20">
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
              Have Questions About Our Terms?
            </h2>
            <p className="text-blue-100 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg">
              If you need clarification on any part of our terms and conditions,
              our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                Contact Us
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
