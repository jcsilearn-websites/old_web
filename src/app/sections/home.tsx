"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const scrollToCareers = () => {
    const careersSection = document.getElementById("careers");
    if (careersSection) {
      careersSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0a0b68ff] via-[#1026b3ff] to-[#0a0b68ff] relative overflow-hidden">
      {/* Soft lighting/texture overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute left-1/4 top-0 w-2/3 h-2/3 bg-white/10 rounded-full blur-3xl"
          style={{ filter: "blur(80px)" }}
        />
        <div
          className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-blue-200/20 rounded-full blur-2xl"
          style={{ filter: "blur(60px)" }}
        />
        <div
          className="absolute left-0 bottom-1/4 w-1/3 h-1/3 bg-purple-300/20 rounded-full blur-2xl"
          style={{ filter: "blur(60px)" }}
        />
      </div>
      <section className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-6 sm:gap-8 lg:gap-12 relative z-10 pt-20 pb-8">
        <div className="flex-1 flex flex-col gap-3 sm:gap-4 lg:gap-6 items-start text-center lg:text-left">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
            Empowering Futures:{" "}
            <span className="block">Bridging Education and Employability</span>
          </h1>
          <p className="text-white/90 text-sm sm:text-base lg:text-lg max-w-md leading-relaxed">
            JCS iLEARN, a pioneering placement training company dedicated to
            empowering job seekers and students with the skills, strategies,
            tools and insights they need to excel in today&apos;s competitive
            and dynamic job market.
          </p>
          <button
            className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-xl bg-white text-blue-900 font-semibold shadow-lg hover:bg-gray-100 transform hover:scale-[1.02] transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
            onClick={scrollToCareers}
          >
            Explore More
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center w-full lg:w-auto mt-6 lg:mt-0">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
            alt="Students collaborating on projects"
            width={500}
            height={600}
            className="drop-shadow-2xl w-full max-w-sm sm:max-w-md lg:max-w-none rounded-3xl object-cover"
          />
        </div>
      </section>
    </main>
  );
}
