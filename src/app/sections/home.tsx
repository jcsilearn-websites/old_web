"use client";
import Image from "next/image";
import HeroImage from "../../../public/hero1.png";
import CTA from "../components/cta";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full px-4 bg-gradient-to-br from-[#a7bfff] via-[#3a4edb] to-[#0a0b68] relative overflow-hidden">
      {/* Soft lighting/texture overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-1/4 top-0 w-2/3 h-2/3 bg-white/10 rounded-full blur-3xl" style={{ filter: 'blur(80px)' }} />
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-blue-200/20 rounded-full blur-2xl" style={{ filter: 'blur(60px)' }} />
        <div className="absolute left-0 bottom-1/4 w-1/3 h-1/3 bg-purple-300/20 rounded-full blur-2xl" style={{ filter: 'blur(60px)' }} />
      </div>
      <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-12 relative z-10 ">
        <div className="flex-1 flex flex-col gap-6 items-start">   
          <h1
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Empowering Futures: Bridging Education and Employability
          </h1>
          <p
            className="text-white/90 text-lg max-w-md"
          >
            Comprehensive training programs tailored to equip you with the skills needed to thrive in today&apos;s competitive job market
          </p>
          <button className="px-8 py-4 rounded-lg bg-[#F2277E] text-white font-semibold shadow-lg hover:bg-pink-600 transition flex items-center gap-2 ">
            Contact Us
          </button>
        </div>
        <div
          className="flex-1 flex items-center justify-center "
        >
          <Image src={HeroImage.src} 
          alt="Hero Illustration" width={320} height={480} className="drop-shadow-2xl h-full w-full rounded-lg object-contain" />
        </div>
      </section>
      </main>
  );
}
