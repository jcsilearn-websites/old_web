"use client";
import React, { useRef, useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import * as emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

export default function ContactUs() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // only digits
    if (value.length <= 10) {
      setPhone(value);
    }
  };

  //Emailjs Function
  const EmailCall = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Current date in dd:mm:yyyy format
    const date = new Date().toLocaleDateString("en-GB").replace(/\//g, ":");
    const CurrentYear = new Date().getFullYear().toString(); // make sure it's string

    // Add a hidden input field dynamically for date
    if (formRef.current) {
      let hiddenInput =
        formRef.current.querySelector<HTMLInputElement>("input[name='date']");
      let yearInput =
        formRef.current.querySelector<HTMLInputElement>("input[name='year']");

      // Create date input if it doesn't exist
      if (!hiddenInput) {
        hiddenInput = document.createElement("input");
        hiddenInput.type = "hidden";
        hiddenInput.name = "date";
        formRef.current.appendChild(hiddenInput);
      }

      // Create year input if it doesn't exist
      if (!yearInput) {
        yearInput = document.createElement("input");
        yearInput.type = "hidden";
        yearInput.name = "year";
        formRef.current.appendChild(yearInput);
      }

      // ✅ assign values
      hiddenInput.value = date;
      yearInput.value = CurrentYear;
    }

    setLoading(true);

    // Check if EmailJS is configured
    if (
      !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ) {
      toast.error("Email service not configured. Please contact us directly.", {
        position: "top-center",
        style: {
          background: "linear-gradient(to right, #ef4444, #dc2626)",
          color: "#ffffff",
          fontWeight: "600",
          borderRadius: "12px",
          padding: "12px 16px",
        },
      });
      setLoading(false);
      return;
    }

    toast.promise(
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      ),
      {
        loading: "Submitting form... 🚀",
        success: () => {
          formRef.current?.reset();
          setPhone("");
          setLoading(false);
          return "Submitted Successfully 🎉";
        },
        error: (err) => {
          setLoading(false);
          console.error("FAILED...", err);
          return "Failed to Submit... ❌ Try Again";
        },
      },
      {
        position: "top-center", // optional toast position
        style: {
          background:
            "linear-gradient(to right, #0a0b68ff, #1026b3ff, #0a0b68ff)",
          color: "#ffffff", // white text works best on dark bg
          fontWeight: "600",
          borderRadius: "12px",
          padding: "12px 16px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        },
        iconTheme: {
          primary: "#FFD700", // gold background for icon
          secondary: "#0a0b68", // dark navy checkmark
        },
      }
    );
  };

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40">
      <Toaster /> {/* Toast container */}
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          {/* <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs sm:text-sm font-semibold rounded-full mb-4 sm:mb-6">
            Get In Touch
          </div> */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4 sm:mb-6">
            Let&apos;s Start a Conversation
          </h1>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your skills and accelerate your career? Get in
            touch with us today and discover how our training programs can help
            you achieve your goals.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="bg-gradient-to-r from-[#0a0b68ff] via-[#1026b3ff] to-[#0a0b68ff] backdrop-blur-sm rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border border-white/20">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6">
              Contact Information
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-white text-sm sm:text-lg lg:text-xl" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-white mb-1 sm:mb-2">
                    Address
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-200">
                    No.10, Udayampalayam Main Road,
                    <br />
                    Sowripalayam, Coimbatore,
                    <br />
                    Tamil Nadu, India - 641028
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-white text-sm sm:text-lg lg:text-xl transform -scale-x-100" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-white mb-1 sm:mb-2">
                    Phone
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-200">
                    +91 75984 98451
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-white text-sm sm:text-lg lg:text-xl" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-white mb-1 sm:mb-2">
                    Email
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-200">
                    jcsilearn@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaClock className="text-white text-sm sm:text-lg lg:text-xl" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-white mb-1 sm:mb-2">
                    Business Hours
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-200">
                    Monday - Friday: 9:00 AM - 5:00 PM
                    <br />
                    Saturday: 9:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-gradient-to-r from-[#0a0b68ff] via-[#1026b3ff] to-[#0a0b68ff] backdrop-blur-sm rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border border-white/20">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6">
              Send us a Message
            </h2>
            <form
              className="space-y-3 sm:space-y-4 lg:space-y-6"
              ref={formRef}
              onSubmit={EmailCall}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-xs sm:text-sm lg:text-base font-semibold text-white mb-1 sm:mb-2"
                  >
                    First Name
                  </label>
                  <input
                    disabled={loading}
                    autoComplete="off"
                    type="text"
                    id="firstName"
                    name="firstName"
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border text-gray-200 border-gray-300 
              focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 
              text-xs sm:text-sm lg:text-base 
              ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-xs sm:text-sm lg:text-base font-semibold text-white mb-1 sm:mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    disabled={loading}
                    autoComplete="off"
                    type="text"
                    id="lastName"
                    name="lastName"
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border text-gray-200 border-gray-300 
              focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 
              text-xs sm:text-sm lg:text-base 
              ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm lg:text-base font-semibold text-white mb-1 sm:mb-2"
                >
                  Email Address
                </label>
                <input
                  disabled={loading}
                  autoComplete="off"
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border text-gray-200 border-gray-300 
              focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 
              text-xs sm:text-sm lg:text-base 
              ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs sm:text-sm lg:text-base font-semibold  text-white mb-1 sm:mb-2"
                >
                  Phone Number
                </label>
                <input
                  disabled={loading}
                  autoComplete="off"
                  type="text"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  minLength={10}
                  maxLength={10}
                  pattern="[6-9][0-9]{9}"
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border text-gray-200 border-gray-300 
              focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 
              text-xs sm:text-sm lg:text-base 
              ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                  placeholder="+91 XXXXXXXXXX"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs sm:text-sm lg:text-base font-semibold text-white mb-1 sm:mb-2"
                >
                  Subject
                </label>
                <select
                  disabled={loading}
                  id="subject"
                  name="subject"
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border text-gray-200 border-gray-300 
              focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 
              text-xs sm:text-sm lg:text-base 
              ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                  required
                >
                  <option value="" className="text-black">
                    Select a subject
                  </option>
                  <option value="general" className="text-black">
                    General Inquiry
                  </option>
                  <option value="training" className="text-black">
                    Training Programs
                  </option>
                  <option value="corporate" className="text-black">
                    Corporate Training
                  </option>
                  <option value="partnership" className="text-black">
                    Partnership Opportunities
                  </option>
                  <option value="support" className="text-black">
                    Technical Support
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm lg:text-base font-semibold text-white mb-1 sm:mb-2"
                >
                  Message
                </label>
                <textarea
                  disabled={loading}
                  autoComplete="off"
                  id="message"
                  name="message"
                  rows={4}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border text-gray-200 border-gray-300 
              focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 
              text-xs sm:text-sm lg:text-base 
              ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                  placeholder="Tell us about your requirements..."
                  required
                ></textarea>
              </div>
              <input type="hidden" name="date" />
              <input type="hidden" name="year" />

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-2 sm:py-3 lg:py-4 px-4 sm:px-6 lg:px-8 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold text-sm sm:text-base lg:text-lg shadow-lg transform hover:scale-[1.02] transition-all duration-300 ${
                  loading
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:from-pink-600 hover:to-purple-700"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
