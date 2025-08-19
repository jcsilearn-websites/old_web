"use client";
import Link from "next/link";

export default function PrivacyPage() {
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
            Privacy & Data Protection
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4 sm:mb-6">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are committed to protecting your privacy and ensuring the security of your personal information. This policy explains how we collect, use, and safeguard your data.
          </p>
        </div>
      </section>

      {/* Privacy Content */}
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

          {/* Privacy Sections */}
          <div className="space-y-8 sm:space-y-12">
            
            {/* Information We Collect */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                1. Information We Collect
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  We collect information that you provide directly to us, such as when you create an account, enroll in courses, or contact us for support. This may include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Personal identification information (name, email address, phone number)</li>
                  <li>Educational background and career information</li>
                  <li>Payment and billing information</li>
                  <li>Course preferences and learning history</li>
                  <li>Communication preferences and feedback</li>
                </ul>
              </div>
            </div>

            {/* How We Use Information */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                2. How We Use Your Information
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  We use the information we collect to provide, maintain, and improve our services, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Processing your course enrollments and payments</li>
                  <li>Providing personalized learning experiences</li>
                  <li>Communicating with you about courses and updates</li>
                  <li>Offering customer support and technical assistance</li>
                  <li>Analyzing usage patterns to improve our services</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </div>
            </div>

            {/* Information Sharing */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                3. Information Sharing and Disclosure
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements or court orders</li>
                  <li>To protect our rights, property, or safety</li>
                  <li>With trusted service providers who assist in operating our platform</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                4. Data Security
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <p>
                  These measures include encryption, secure servers, regular security assessments, and access controls. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                5. Data Retention
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.
                </p>
                <p>
                  When we no longer need your information, we will securely delete or anonymize it. You may request deletion of your account and associated data at any time.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                6. Your Rights and Choices
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  You have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate or incomplete information</li>
                  <li>Deletion of your personal information</li>
                  <li>Restriction of processing</li>
                  <li>Data portability</li>
                  <li>Withdrawal of consent</li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </div>
            </div>

            {/* Cookies and Tracking */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                7. Cookies and Tracking Technologies
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  We use cookies and similar tracking technologies to enhance your experience on our platform, analyze usage patterns, and provide personalized content.
                </p>
                <p>
                  You can control cookie settings through your browser preferences. However, disabling certain cookies may limit your ability to use some features of our platform.
                </p>
              </div>
            </div>

            {/* Third-Party Services */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                8. Third-Party Services
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  Our platform may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites.
                </p>
                <p>
                  We encourage you to review the privacy policies of any third-party services you access through our platform.
                </p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                9. Children's Privacy
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.
                </p>
                <p>
                  If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                </p>
              </div>
            </div>

            {/* International Transfers */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                10. International Data Transfers
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws.
                </p>
                <p>
                  When we transfer data internationally, we implement appropriate safeguards to protect your information.
                </p>
              </div>
            </div>

            {/* Changes to Policy */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                11. Changes to This Privacy Policy
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
                </p>
                <p>
                  We will notify you of any material changes by posting the new policy on our platform and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                12. Contact Us
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  If you have any questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                  <p className="font-medium">JCS iLearn - Privacy Team</p>
                  <p>Email: privacy@jcsilearn.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                  <p>Address: 123 Education Street, Learning City, LC 12345</p>
                </div>
              </div>
            </div>

          </div>

          {/* Footer Note */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              By using our services, you acknowledge that you have read and understood this privacy policy.
            </p>
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-20">
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">Questions About Your Privacy?</h2>
            <p className="text-blue-100 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg">
              Our privacy team is here to help you understand how we protect your data and respect your rights.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                Contact Us
              </Link>
              <Link 
                href="/terms"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 text-sm sm:text-base"
              >
                View Terms
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
