"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full px-4 bg-gradient-to-br from-blue-500 via-indigo-600 to-blue-900 relative overflow-hidden">
      {/* Soft lighting/texture overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-1/4 top-0 w-2/3 h-2/3 bg-white/10 rounded-full blur-3xl" style={{ filter: 'blur(80px)' }} />
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-blue-200/20 rounded-full blur-2xl" style={{ filter: 'blur(60px)' }} />
        <div className="absolute left-0 bottom-1/4 w-1/3 h-1/3 bg-purple-300/20 rounded-full blur-2xl" style={{ filter: 'blur(60px)' }} />
      </div>
      <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-12 relative z-10">
        <div className="flex-1 flex flex-col gap-6 items-start">   
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Empowering Futures: <span className="block">Bridging Education and Employability</span>
          </h1>
          <p className="text-white/90 text-lg max-w-md leading-relaxed">
            Comprehensive training programs tailored to equip you with the skills needed to thrive in today&apos;s competitive job market
          </p>
          <button className="px-8 py-4 rounded-xl bg-white text-blue-900 font-semibold shadow-lg hover:bg-gray-100 transform hover:scale-[1.02] transition-all duration-300 flex items-center gap-2">
            Contact Us
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
            alt="Students collaborating on projects" 
            width={500} 
            height={600} 
            className="drop-shadow-2xl h-full w-full rounded-3xl object-cover" 
          />
        </div>
      </section>
      </main>
  );
}