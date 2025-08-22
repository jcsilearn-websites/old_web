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
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4 sm:mb-6">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            By accessing or using the jcsilearn.com website, you agree to the
            terms outlined in this Privacy Policy. If you do not agree, please
            refrain from using our website or services. JCS iLEARN reserves the
            right to update or modify this Privacy Policy at any time, and your
            continued use of our website will be subject to the latest version
            in effect.
          </p>
        </div>
      </section>

      {/* Privacy Content */}
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

          <div className="space-y-8 sm:space-y-12">
            {/* Collection of Personal Information */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Collection of Personal Information
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  When you engage with certain features of our site — such as
                  registering for training programs, submitting inquiries, or
                  applying for opportunities — we may request specific personal
                  details via an online form. Providing this information is
                  voluntary; however, certain services may not be available to
                  you without the required details.
                </p>
                <p>
                  Personal information we may collect includes (but is not
                  limited to):
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Contact number</li>
                  <li>Mailing address (including postal code)</li>
                  <li>Educational or professional background</li>
                  <li>Resume/CV (if applicable)</li>
                </ul>
                <p>
                  We may also collect non-personal information through our web
                  server logs, such as browser type, pages visited, and visit
                  times. This data helps us improve the usability and content of
                  our site but does not personally identify you.
                </p>
              </div>
            </div>

            {/* How We Use Information */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                How We Use Your Information
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>The personal information you share with us is used to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Process your registration or participation in programs
                  </li>
                  <li>
                    Communicate important updates, offers, and program-related
                    information
                  </li>
                  <li>Personalize your learning experience</li>
                  <li>Improve our services and website functionality</li>
                </ul>
                <p>
                  Your details may be shared with trusted partners or service
                  providers who assist us in delivering our services, strictly
                  for the purposes outlined above.
                </p>
              </div>
            </div>

            {/* Information Sharing */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Information Sharing and Disclosure
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  We will not sell, rent, or trade your personal information to
                  third parties for marketing purposes. However, we may share
                  your data with:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Affiliated entities and authorized business partners who
                    support our operations
                  </li>
                  <li>
                    Government authorities or legal bodies, if required by law
                    or to protect our rights and safety
                  </li>
                </ul>
              </div>
            </div>

            {/* Consent */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Consent
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  By providing your personal information, you consent to its
                  collection, use, and sharing as described in this Privacy
                  Policy. If at any point you wish to withdraw consent, you may
                  contact us directly.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              By using our services, you acknowledge that you have read and
              understood this Privacy Policy.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-20">
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
              Questions About Your Privacy?
            </h2>
            <p className="text-blue-100 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg">
              Our privacy team is here to help you understand how we protect
              your data and respect your rights.
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
