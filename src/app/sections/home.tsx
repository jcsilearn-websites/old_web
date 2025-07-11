"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroImage from "../../../public/hero1.png";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

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
        <div className="flex-1 flex flex-col gap-6 max-w-xl ">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={fadeUp}
            transition={{ duration: 0.7, type: "spring", stiffness: 60, damping: 18, delay: 0.05 }}
            className="inline-block bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-lg backdrop-blur-sm w-fit mb-2 shadow"
          >
            Specialization over generalization
          </motion.span>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={fadeUp}
            transition={{ duration: 0.7, type: "spring", stiffness: 60, damping: 18, delay: 0.18 }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Empowering Futures: Bridging Education and Employability
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={fadeUp}
            transition={{ duration: 0.7, type: "spring", stiffness: 60, damping: 18, delay: 0.32 }}
            className="text-white/90 text-lg max-w-md"
          >
            Comprehensive training programs tailored to equip you with the skills needed to thrive in today's competitive job market
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={fadeUp}
            transition={{ duration: 0.7, type: "spring", stiffness: 60, damping: 18, delay: 0.45 }}
            className="flex items-center gap-4 mt-4"
          >
            <span className="inline-block bg-white/15 text-white text-sm px-3 py-1 rounded-lg backdrop-blur-sm">Live Interactive Classes</span>
            <a href="#cta" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-blue-900 font-semibold shadow hover:bg-blue-100 transition text-base">
              Download Brochure
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M10 3v10m0 0l-3.5-3.5M10 13l3.5-3.5" stroke="#272727" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="3" y="17" width="14" height="2" rx="1" fill="#272727"/></svg>
            </a>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          variants={fadeUp}
          transition={{ duration: 0.7, type: "spring", stiffness: 60, damping: 18, delay: 0.6 }}
          className="flex-1 flex items-center justify-center "
        >
          <Image src={HeroImage.src} 
          alt="Hero Illustration" width={320} height={480} className="drop-shadow-2xl h-full w-full rounded-lg object-contain" />
        </motion.div>
      </section>
      </main>
  );
}
