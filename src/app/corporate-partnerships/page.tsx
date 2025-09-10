"use client";
import Link from "next/link";

export default function CorporatePartnershipsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40">
      {/* Header Section */}
      <section className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 mt-10">
            Corporate Partnerships
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At JCS iLEARN, we believe in bridging the gap between academia and
            industry. Through strategic partnerships with corporates, we prepare
            students with the right skills and mindset while enabling companies
            to access a talent pool that is job-ready.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
          {/* Why Partner with Us */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Why Partner with Us?
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>
                  <strong>Customized Training Solutions</strong> – Tailored
                  programs to meet your company's workforce needs.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>
                  <strong>Talent Pipeline Development</strong> – Access to
                  skilled students trained in technical, aptitude, and soft
                  skills.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>
                  <strong>Internship & Placement Opportunities</strong> –
                  Connect with our network of colleges and students.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>
                  <strong>Brand Visibility</strong> – Collaborate with us to
                  strengthen your employer branding among future talent.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>
                  <strong>CSR Initiatives</strong> – Joint projects that
                  contribute to education and skill development.
                </span>
              </li>
            </ul>
          </div>

          {/* Partnership Opportunities */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Partnership Opportunities
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Recruitment drives & campus hiring</li>
              <li>• Guest lectures & industry mentorship</li>
              <li>• Sponsored workshops & hackathons</li>
              <li>• Co-branded certification programs</li>
              <li>• Internships & live projects</li>
            </ul>
          </div>

          {/* Target Audiences */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Our Target Audiences
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  For Colleges & Universities
                </h3>
                <p className="text-gray-700">
                  Empowering students for campus success. Practical training
                  programs that boost placement outcomes and bridge the
                  industry-academia gap.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-green-900 mb-3">
                  For Corporates
                </h3>
                <p className="text-gray-700">
                  Build a future-ready workforce. Tailored learning solutions
                  that strengthen skills, leadership, and workplace performance.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">
                  For Startups
                </h3>
                <p className="text-gray-700">
                  Turn ideas into impact. Specialized workshops to sharpen
                  entrepreneurial skills, drive innovation and fuel business
                  growth.
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-orange-900 mb-3">
                  For Schools
                </h3>
                <p className="text-gray-700">
                  Shaping young minds for tomorrow. Early career guidance and
                  life skills programs that prepare students for academic and
                  personal success.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Let's Collaborate</h2>
            <p className="mb-6">
              If you're a corporate or startup looking to build future-ready
              talent, we'd love to partner with you.
            </p>
            <p className="text-lg font-semibold">
              Write to us at jcsilearn@gmail.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
