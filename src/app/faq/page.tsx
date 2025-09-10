"use client";
import Link from "next/link";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40">
      {/* Header Section */}
      <section className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 mt-10">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Got questions? Our Frequently Asked Questions section covers the
            essentials — from enrollment and course details to internships,
            certifications, and placement support. Save time by finding quick
            answers to the most common queries.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
          {/* FAQ Items */}
          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                1. What is JCS iLEARN?
              </h3>
              <p className="text-gray-700">
                JCS iLEARN is a training and career development platform
                offering soft skills, technical skills, aptitude training and
                recruitment readiness programs for students, graduates and
                professionals.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                2. Who can join your programs?
              </h3>
              <p className="text-gray-700 mb-3">
                Our programs are designed for:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>College students preparing for placements.</li>
                <li>Graduates seeking career opportunities.</li>
                <li>Professionals looking to upskill.</li>
                <li>
                  Institutions and corporates that want tailored workshops.
                </li>
              </ul>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                3. How are the training sessions conducted?
              </h3>
              <p className="text-gray-700">
                We conduct both offline workshops at colleges/companies and
                online sessions for individuals. Training is interactive, with
                activities, mock interviews, role plays and real-world practice.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                4. Will I receive a certificate after training?
              </h3>
              <p className="text-gray-700">
                Yes. Students who meet the attendance and participation criteria
                will receive a certificate of completion from JCS iLEARN.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                5. Do you provide placement support?
              </h3>
              <p className="text-gray-700">
                Yes. We guide students through resume building, LinkedIn
                optimization, aptitude preparation, mock interviews and connect
                eligible learners with corporate partnerships and hiring
                opportunities.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                6. What if I miss a session?
              </h3>
              <p className="text-gray-700">
                We recommend maintaining 95% attendance. In case of emergencies,
                students may request for makeup sessions or additional
                resources, subject to trainer availability.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                7. How can I register for a program?
              </h3>
              <p className="text-gray-700">
                You can register by contacting us directly via:
              </p>
              <p className="text-gray-700 mt-2">📧 support@jcsilearn.com</p>
              <p className="text-gray-700">
                or through our online inquiry form on the website.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                8. Do you offer refunds?
              </h3>
              <p className="text-gray-700">
                Refunds are subject to our Refund Policy, available on the
                website. Please review it before registering for a program.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                9. Can colleges/companies collaborate with you?
              </h3>
              <p className="text-gray-700">
                Yes. We conduct customized workshops for institutions and
                corporates. Placement officers, HR teams or management can reach
                us at jcsilearn@gmail.com.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                10. How can I contact support?
              </h3>
              <p className="text-gray-700 mb-3">
                For any queries or issues, you can reach us at:
              </p>
              <p className="text-gray-700">📧 support@jcsilearn.com</p>
              <p className="text-gray-700">
                We'll get back to you within 24–48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
