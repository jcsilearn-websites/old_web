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
      <section className="relative pt-20 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs sm:text-sm font-semibold rounded-full mb-4 sm:mb-6">
            Legal Information
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4 sm:mb-6">
            Terms and Conditions
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Please read these terms and conditions carefully before using our services. By accessing or using our platform, you agree to be bound by these terms.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-20">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-white/20">
          
          {/* Last Updated */}
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8 sm:space-y-12">
            
            {/* Acceptance of Terms */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                1. Acceptance of Terms
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  By accessing and using JCS iLearn services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
                <p>
                  These terms apply to all visitors, users, and others who access or use the service. By using our services, you agree to be bound by these terms and to use the services in compliance with all applicable laws and regulations.
                </p>
              </div>
            </div>

            {/* Description of Service */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                2. Description of Service
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  JCS iLearn provides educational training programs, courses, and related services designed to enhance skills and career development. Our services include but are not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Online and offline training programs</li>
                  <li>Skill development courses</li>
                  <li>Career planning and guidance</li>
                  <li>Placement and recruitment support</li>
                  <li>Technical and soft skills training</li>
                </ul>
              </div>
            </div>

            {/* User Accounts */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                3. User Accounts and Registration
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
                </p>
                <p>
                  You agree not to disclose your password to any third party and to take sole responsibility for any activities or actions under your account, whether or not you have authorized such activities or actions.
                </p>
              </div>
            </div>

            {/* Payment Terms */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                4. Payment and Refund Policy
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  All fees for our services are payable in advance. Payment must be made through our designated payment methods. Prices are subject to change without prior notice.
                </p>
                <p>
                  Refund requests must be submitted within 7 days of purchase. Refunds are subject to our refund policy and may be prorated based on usage. No refunds will be provided after 30 days from the date of purchase.
                </p>
              </div>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                5. Intellectual Property Rights
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  The service and its original content, features, and functionality are and will remain the exclusive property of JCS iLearn and its licensors. The service is protected by copyright, trademark, and other laws.
                </p>
                <p>
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our service without our prior written consent.
                </p>
              </div>
            </div>

            {/* User Conduct */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                6. User Conduct and Responsibilities
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  You agree to use our services only for lawful purposes and in accordance with these terms. You agree not to use the service:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
                  <li>To transmit, or procure the sending of, any advertising or promotional material</li>
                  <li>To impersonate or attempt to impersonate the company, a company employee, another user, or any other person or entity</li>
                  <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the service</li>
                </ul>
              </div>
            </div>

            {/* Privacy Policy */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                7. Privacy and Data Protection
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices regarding the collection and use of your personal information.
                </p>
                <p>
                  We are committed to protecting your personal data and will only use it in accordance with our Privacy Policy and applicable data protection laws.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                8. Limitation of Liability
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  In no event shall JCS iLearn, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
                <p>
                  Our total liability to you for any claims arising from the use of our services shall not exceed the amount you paid for the service in the 12 months preceding the claim.
                </p>
              </div>
            </div>

            {/* Termination */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                9. Termination
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                </p>
                <p>
                  If you wish to terminate your account, you may simply discontinue using the service. All provisions of the Terms which by their nature should survive termination shall survive termination.
                </p>
              </div>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                10. Changes to Terms
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                </p>
                <p>
                  What constitutes a material change will be determined at our sole discretion. By continuing to access or use our service after any revisions become effective, you agree to be bound by the revised terms.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                11. Contact Information
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                  <p className="font-medium">JCS iLearn</p>
                  <p>Email: legal@jcsilearn.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                  <p>Address: 123 Education Street, Learning City, LC 12345</p>
                </div>
              </div>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                12. Governing Law
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  These Terms shall be interpreted and governed by the laws of the jurisdiction in which JCS iLearn operates, without regard to its conflict of law provisions.
                </p>
                <p>
                  Any disputes arising from these terms or the use of our services shall be resolved through binding arbitration in accordance with the rules of the relevant arbitration association.
                </p>
              </div>
            </div>

          </div>

          {/* Footer Note */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-20">
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">Have Questions About Our Terms?</h2>
            <p className="text-blue-100 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg">
              If you need clarification on any part of our terms and conditions, our legal team is here to help.
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
