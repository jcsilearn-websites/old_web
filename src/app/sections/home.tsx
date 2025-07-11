import Image from "next/image";
import HeroImage from "../../../public/hero.png";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full px-4  bg-gradient-to-r from-[#0a0b68ff] via-[#1024abff] to-[#0d0d7eff] animate-gradient-move">
      <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-12 ">
        <div className="flex-1 flex flex-col gap-6 max-w-xl ">
          <span className="inline-block bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-lg backdrop-blur-sm w-fit mb-2 shadow">Specialization over generalization</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Empowering Futures: Bridging Education and Employability
          </h1>
          <p className="text-white/90 text-lg max-w-md">
            Comprehensive training programs tailored to equip you with the skills needed to thrive in today's competitive job market          </p>
          <div className="flex items-center gap-4 mt-4">
            <span className="inline-block bg-white/15 text-white text-sm px-3 py-1 rounded-lg backdrop-blur-sm">Live Interactive Classes</span>
            <a href="#cta" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-blue-900 font-semibold shadow hover:bg-blue-100 transition text-base">
              Download Brochure
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M10 3v10m0 0l-3.5-3.5M10 13l3.5-3.5" stroke="#272727" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="3" y="17" width="14" height="2" rx="1" fill="#272727"/></svg>
            </a>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center ">
          <Image src={HeroImage.src} 
          alt="Hero Illustration" width={320} height={480} className="drop-shadow-2xl h-full w-full rounded-lg object-contain" />
        </div>
      </section>
      </main>
  );
}
