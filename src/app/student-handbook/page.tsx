"use client";
import Link from "next/link";

export default function StudentHandbookPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40">
      {/* Header Section */}
      <section className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Student Handbook
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our Student Handbook is your go-to reference for all academic, training, and support-related information. It outlines policies, expectations, available programs, and resources to ensure you have a smooth and successful learning journey with us.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
          
          {/* Handbook Sections */}
          <div className="space-y-8">
            {/* Welcome Message */}
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
              <h2 className="text-xl font-bold text-blue-900 mb-4">1. Welcome Message</h2>
              <p className="text-gray-700 mb-4">Dear Students,</p>
              <p className="text-gray-700 mb-4">Welcome to JCS iLEARN! We are delighted to have you as part of our learning community. At iLEARN, our mission is simple yet powerful: <strong>"I Learn, I Earn."</strong></p>
              <p className="text-gray-700 mb-4">We believe that every learner has the potential to succeed when guided with the right skills, mindset, and opportunities. This handbook is designed to help you understand our programs, expectations, and the resources available to support your growth.</p>
              <p className="text-gray-700">We look forward to walking with you on this journey of learning and career success.</p>
              <p className="text-gray-700 mt-4 font-semibold">— Team JCS iLEARN</p>
            </div>

            {/* About JCS iLEARN */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. About JCS iLEARN</h2>
              <p className="text-gray-700 mb-4">JCS iLEARN is a training and career development platform dedicated to empowering students, graduates, and professionals. Our programs focus on:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Soft Skills & Communication</strong> – Confidence building, speaking, and workplace readiness.</li>
                <li><strong>Technical Skills</strong> – Programming, tools, and industry-relevant knowledge.</li>
                <li><strong>Aptitude Training</strong> – Logical reasoning, quantitative ability, and problem-solving.</li>
                <li><strong>Recruitment Readiness</strong> – Resume building, LinkedIn optimization, and mock interviews.</li>
              </ul>
              <p className="text-gray-700 mt-4">With our activity-based learning approach, we've trained thousands of learners and helped many secure high-paying jobs.</p>
            </div>

            {/* Code of Conduct */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. Code of Conduct</h2>
              <p className="text-gray-700 mb-4">At JCS iLEARN, we maintain a respectful and professional learning environment. Students are expected to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Be punctual and prepared for sessions.</li>
                <li>Participate actively in discussions and activities.</li>
                <li>Respect trainers, peers, and differing viewpoints.</li>
                <li>Avoid plagiarism and ensure originality in assignments.</li>
                <li>Refrain from disruptive behavior during classes.</li>
              </ul>
              <p className="text-gray-700 mt-4 font-semibold">Violation of these guidelines may lead to disciplinary action or removal from programs.</p>
            </div>

            {/* Attendance & Participation */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">4. Attendance & Participation</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>A minimum of 75% attendance is required to qualify for certification.</li>
                <li>Students must attend sessions on time and stay engaged throughout.</li>
                <li>For online sessions, ensure proper internet connectivity and avoid distractions.</li>
                <li>Participation in group activities, role plays, and assessments is mandatory.</li>
              </ul>
            </div>

            {/* Training Modules */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">5. Training Modules & Programs</h2>
              <p className="text-gray-700 mb-4">Our training follows a practical, interactive, and learner-focused model.</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Soft Skills:</strong> Communication, public speaking, team building, leadership.</li>
                <li><strong>Technical Skills:</strong> Programming languages, project-based learning.</li>
                <li><strong>Aptitude:</strong> Quantitative, logical, and verbal reasoning practice.</li>
                <li><strong>Recruitment Readiness:</strong> Resume, LinkedIn, GD & interview training.</li>
              </ul>
            </div>

            {/* Assessments & Certifications */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">6. Assessments & Certifications</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Regular quizzes, practice tests, and mock sessions will be conducted.</li>
                <li>Students will receive feedback to improve continuously.</li>
                <li>Certificates will be issued based on attendance, performance, and discipline.</li>
              </ul>
            </div>

            {/* Support & Resources */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">7. Support & Resources</h2>
              <p className="text-gray-700 mb-4">JCS iLEARN provides multiple resources to support your growth:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Career Guides</strong> – Resume tips, interview preparation, career planning.</li>
                <li><strong>Student Handbook</strong> – Policies and expectations.</li>
                <li><strong>FAQ</strong> – Answers to common queries.</li>
                <li><strong>Support Center</strong> – Assistance via email and contact forms.</li>
              </ul>
              <p className="text-gray-700 mt-4">For queries, write to: <strong>support@jcsilearn.com</strong></p>
            </div>

            {/* Placement Support */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">8. Placement Support & Opportunities</h2>
              <p className="text-gray-700 mb-4">Our team works closely with recruiters and corporate partners to bring opportunities to students. Support includes:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Resume building workshops.</li>
                <li>LinkedIn profile optimization.</li>
                <li>Mock interviews with detailed feedback.</li>
                <li>Internship & job placement assistance through partners.</li>
              </ul>
              <p className="text-gray-700 mt-4 font-semibold">Note: Final placement depends on individual student performance, skill level, and employer requirements.</p>
            </div>

            {/* Policies & Compliance */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">9. Policies & Compliance</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Refund Policy:</strong> Refer to our official Refund Policy page for details.</li>
                <li><strong>Privacy & Data:</strong> Your personal information is handled as per our Privacy Policy.</li>
                <li><strong>Ethics:</strong> Students are expected to uphold honesty, professionalism, and integrity.</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-xl font-bold mb-4">10. Contact Information</h2>
              <div className="space-y-2">
                <p>📧 Email: instituteoflearn@gmail.com</p>
                <p>🌐 Website: www.jcsilearn.com</p>
                <p>📱 Social Media: Instagram | LinkedIn | YouTube</p>
                <p className="mt-4 font-semibold">Your growth is our mission – let's learn and succeed together.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
