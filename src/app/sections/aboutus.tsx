"use client";
import React from "react";
import Image from "next/image";
import aboutus1 from "../../../public/aboutus1.jpg";

const AboutUs = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 gap-8 sm:gap-12 lg:gap-16 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40 relative overflow-hidden">
      {/* Background decorative elements */}

      <div className="flex-1 flex items-center justify-center relative w-full md:w-1/2 h-full z-10 order-2 md:order-1">
        <Image
          src={aboutus1}
          alt="About Us"
          height={500}
          width={500}
          className="rounded-3xl shadow-2xl object-cover w-full max-w-sm sm:max-w-md lg:max-w-none"
        />
      </div>

      <div className="flex-1 flex flex-col gap-4 sm:gap-6 max-w-full md:max-w-none z-10 order-1 md:order-2">
        <span className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs sm:text-sm font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-sm w-fit">
          About Us
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-800 via-blue-800 to-purple-800 bg-clip-text text-transparent">
          Welcome to JCS iLEARN
        </h1>
        <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
          At JCS iLEARN LLP, we are reshaping the future of education and
          employability through industry-relevant, hands-on training. Legally
          registered as a Limited Liability Partnership (LLP) under the Ministry
          of Corporate Affairs (MCA), we are a trusted and recognized name in
          placement training and professional development.
          <br />
          <br />
          Driven by the mission to bridge the gap between academic learning and
          industry expectations, we deliver structured programs focused on soft
          skills, technical expertise, career readiness, and personal growth.
          Our approach blends practical knowledge with real-world insights to
          empower students and job seekers to confidently navigate today&apos;s
          competitive job market.
          <br />
          <br />
          From classrooms to corporate boardrooms, we are committed to nurturing
          the next generation of skilled professionals—one learner at a time.{" "}
        </p>
        <button
          onClick={() => {
            window.location.href = "/about";
          }}
          className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 flex items-center gap-2 w-fit text-sm sm:text-base"
        >
          Learn More
          <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
            <path
              d="M5 9h8m0 0l-3-3m3 3l-3 3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
