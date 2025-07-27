"use client";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl" />
      </div>

      {/* Header Section */}
      <section className="relative pt-20 pb-16 px-4 mt-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-semibold rounded-full mb-6">
            Our Services
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Empowering Every Learner—From Campus to Career
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At JCS iLEARN, we provide customized training and support for colleges, companies, schools, and individuals. Our services are designed to develop essential life skills, boost employability, and create confident, job-ready individuals.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pb-20 space-y-20">
        
        {/* For Colleges & Institutions */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-4xl">🎓</div>
              <h2 className="text-3xl font-bold text-gray-900">For Colleges & Institutions</h2>
            </div>
            <p className="text-gray-600 mb-8 text-lg">
              Helping students bridge the gap between learning and earning.
            </p>
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                <h3 className="text-xl font-bold text-gray-900 mb-4">1. Life Skills & Communication</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Soft Skills & Personality Development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Communication & Verbal Training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Research & Presentation Skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>LinkedIn & Personal Branding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Career Awareness & JD Orientation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Entrepreneurship & Innovation Workshops</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                <h3 className="text-xl font-bold text-gray-900 mb-4">2. Aptitude & Technical Training</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Quantitative, Logical & Verbal Reasoning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Aptitude Revision Programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Core Programming (C, Java, Python, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Industry Tools & Domain-Specific Workshops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Emerging Tech Awareness Sessions</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-4 border border-pink-200">
              <p className="text-gray-700 font-semibold">
                🔘 Ideal for: Arts & Science Colleges | Engineering Colleges | B-Schools
              </p>
            </div>
          </div>
          <div className="relative">
            <Image 
              src="https://images.unsplash.com/photo-1523240794102-9ebd0b167d56?auto=format&fit=crop&w=800&q=80"
              alt="College students in classroom" 
              width={500} 
              height={600} 
              className="rounded-3xl shadow-2xl" 
            />
            <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
              <p className="text-gray-700 font-semibold italic">
                "Bridging the gap between education and employment"
              </p>
            </div>
          </div>
        </section>

        {/* For Companies & Corporates */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
              alt="Corporate team meeting" 
              width={500} 
              height={600} 
              className="rounded-3xl shadow-2xl" 
            />
            <div className="absolute -top-6 -left-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-4 text-white">
              <p className="font-semibold">Corporate Solutions</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-4xl">👨‍💼</div>
              <h2 className="text-3xl font-bold text-gray-900">For Companies & Corporates</h2>
            </div>
            <p className="text-gray-600 mb-8 text-lg">
              Upskill your team. Build your future.
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Communication & Soft Skills Workshops</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Leadership & Team Building Programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Corporate Onboarding & Induction Modules</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>POSH Awareness & Compliance Training</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Recruitment Support (Campus-to-Corporate Pipeline)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Outbound Learning & Engagement Activities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Job-Ready Candidate Training for Recruit Intake</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 border border-blue-200">
              <p className="text-gray-700 font-semibold">
                🔘 Ideal for: HR Teams | L&D Managers | Hiring Partners
              </p>
            </div>
          </div>
        </section>

        {/* For Schools */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="text-4xl">🎒</div>
              <h2 className="text-3xl font-bold text-gray-900">For Schools</h2>
            </div>
            <p className="text-gray-600 mb-8 text-lg">
              Nurturing young minds with early awareness.
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Career Discovery & Guidance Sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Study Techniques & Exam Prep Tips</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Entrance Exam Preparation Support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Artistic & Enrichment Workshops</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Communication & Self-Confidence Building</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-4 border border-green-200">
              <p className="text-gray-700 font-semibold">
                🔘 Ideal for: Higher Secondary Schools | Skill Schools
              </p>
            </div>
          </div>
          <div className="relative">
            <Image 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
              alt="School students learning" 
              width={500} 
              height={600} 
              className="rounded-3xl shadow-2xl" 
            />
            <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
              <p className="text-gray-700 font-semibold italic">
                "Nurturing young minds for future success"
              </p>
            </div>
          </div>
        </section>

        {/* For Individuals */}
        <section className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="text-4xl">👤</div>
              <h2 className="text-3xl font-bold text-gray-900">For Individuals</h2>
            </div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Personalized learning for personal and career growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 border border-pink-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">1. Career Mentorship & Counseling</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• One-on-One Career Coaching</li>
                <li>• Career Mapping & Psychometric Tests</li>
                <li>• Track Selection: IT, Govt Jobs, Startups, Core, etc.</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">2. Profile & Communication Building</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Resume Writing & LinkedIn Optimization</li>
                <li>• Email Etiquette & Professional Writing</li>
                <li>• Personal Branding & Self-Marketing</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 border border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">3. Job Preparation</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Mock Interviews & Practice Kits</li>
                <li>• Group Discussion & JAM Practice</li>
                <li>• Aptitude & Technical Refresher Modules</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">4. Life Skills & Awareness</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Certification Courses (Short-Term)</li>
                <li>• Personal Finance & Life Planning</li>
                <li>• Psychology & Parenting Guidance</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-4 border border-pink-200 inline-block">
              <p className="text-gray-700 font-semibold">
                🔘 Ideal for: Job Seekers | Career Switchers | Parents | Young Professionals
              </p>
            </div>
          </div>
        </section>

        {/* Why This Matters Section */}
        <section className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">💬 Why This Matters</h2>
            <p className="text-blue-100 leading-relaxed mb-8 text-lg">
              Most individuals don't miss opportunities due to a lack of knowledge, but due to a lack of clarity, confidence, and communication. At JCS iLEARN, we ensure you are not just educated—but equipped.
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <p className="text-white font-semibold text-xl">
                🎯 Your Career, Our Commitment.
              </p>
            </div>
            <p className="text-blue-100 mt-6">
              Whether you're a student, educator, parent, or recruiter, JCS iLEARN is here to support your journey from learning to earning.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Choose the service that best fits your needs and start your journey towards success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
              >
                Contact Us Today
              </Link>
              <Link 
                href="/"
                className="inline-block px-8 py-4 border-2 border-pink-500 text-pink-600 font-semibold rounded-xl hover:bg-pink-500 hover:text-white transition-all duration-300"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 