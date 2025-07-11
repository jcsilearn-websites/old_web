import React from 'react';
import { FaBook } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaHands } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa';

const subjects = [
  {
    icon: <FaBook />,
    title: 'Comprehensive Training Programs',
    desc: 'Tailored to meet the specific needs of various industries, our training programs cover a wide range of essential skills, including technical know-how, soft skills, interview preparation, and more.',
    color: 'from-purple-200 to-purple-100',
  },
  {
    icon: <FaUser />,
    title: 'Expert Trainers',
    desc: 'Our team of experienced, young and vibrant trainers brings a wealth of knowledge from diverse fields, offering insights and guidance that are both practical and impactful',
    color: 'from-pink-200 to-pink-100',
  },
  {
    icon: <FaHands />,
    title: 'Hands-On Learning',
    desc: 'We believe in learning by doing. Our interactive training sessions, real-world projects, and simulation exercises ensure that participants gain hands-on experience.',
    color: 'from-yellow-200 to-yellow-100',
  },
  {
    icon: <FaGraduationCap />,
    title: 'Career Guidance and Support',
    desc: 'Beyond training, we provide personalized career counseling, resume building workshops, and job placement assistance to help our participants achieve their career goals',
    color: 'from-blue-200 to-blue-100',
  },
];

export default function SkillBoost() {
  return (
    <div className="w-full min-h-screen bg-[#F5F5FE] flex flex-col items-center justify-center py-16 px-4">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-12 items-center justify-between h-full bg-">
        {/* Left: Hero Content */}
        <div className="flex-1 flex flex-col gap-6 max-w-xl h-full">
          {/* <span className="inline-block bg-[#E7DEFF] text-[#5F2DED] text-xs font-semibold px-4 py-1 rounded-full mb-2">Populer Subject</span> */}
          <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1 rounded-full  shadow-sm w-fit p-3">Why Choose Us</span>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 ">
            Matching Your Skills with<br />
            the Right Opportunities
          </h1>
          <p className="text-[#5F6C76] text-base mb-4 pr-10">
           Proven Track Record: With a history of successful placements and satisfied clients, our results speak for themselves.
           Customized Solutions: We understand that every individual and organization is unique. Our customized training solutions are designed to address specific needs and objectives.
           <br/>
           <br/>
           State-of-the-Art Facilities: Our training centers are equipped with modern amenities and technology to provide a conducive learning environment.
           Strong Industry Connections: Our extensive network with leading companies and organizations helps us stay updated with industry trends and provides valuable placement opportunities for our trainees          </p>
          <div className="flex gap-4 mt-2">
            <a href="#explore" className="px-6 py-3 rounded-lg bg-[#F2277E] text-white font-semibold shadow hover:bg-pink-600 transition flex items-center gap-2">
              Explore More
              <svg width="18" height="18" fill="none" viewBox="0 0 18 18"><path d="M5 9h8m0 0l-3-3m3 3l-3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </div>
        {/* Right: Subject Cards */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-10 w-full" id="explore">
          {subjects.map((s, i) => (
            <div key={i} className={`rounded-2xl shadow-xl bg-gradient-to-br ${s.color} p-6 flex flex-col gap-4 relative overflow-hidden ${i %2 !== 0 ? 'top-8' : ''}`}>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white">
                  <div className="text-2xl text-purple-700">
                    {s.icon}
                  </div>
                </div>
              </div>
              <h2 className="text-xl font-bold text-gray-900 ">{s.title}</h2>
              <p className="text-gray-600 text-sm mb-1">{s.desc}</p>
              {/* <div className="absolute right-2 bottom-2 opacity-10 text-7xl select-none pointer-events-none">{i+1}</div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 