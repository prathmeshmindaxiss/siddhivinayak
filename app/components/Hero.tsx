"use client";
import { motion, Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  // --- Animation Variants with explicit types for TypeScript ---
  const textContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const textChild: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const, // ✅ Fixed: 'as const' added
        damping: 12,
        stiffness: 200,
      },
    },
  };

  const word1 = "Siddhivinayak".split("");
  const word2 = "Engineering".split("");

  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-[#0B1121]">

      {/* --- BACKGROUND VIDEO --- */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/वीडियो_को_और_बेहतर_बनाएं.mp4"
      />

      {/* --- OVERLAYS --- */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40 z-10"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none z-10"></div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-40 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-16 w-full max-w-6xl mx-auto mt-12 md:mt-0">

        {/* HEADLINE (Letter By Letter) */}
        <motion.h1
          variants={textContainer}
          initial="hidden"
          animate="visible"
          className="text-3xl sm:text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-black leading-[1.1] mb-0 tracking-tight drop-shadow-2xl text-center will-change-transform"
        >
          {/* First Word (White) */}
          <span className="block text-white mb-1 md:mb-2 overflow-hidden">
            {word1.map((char, index) => (
              <motion.span key={`w1-${index}`} variants={textChild} className="inline-block will-change-transform">
                {char}
              </motion.span>
            ))}
          </span>

          {/* Second Word (Premium Orange) */}
          <span className="block text-[#F58220] overflow-hidden">
            {word2.map((char, index) => (
              <motion.span key={`w2-${index}`} variants={textChild} className="inline-block will-change-transform">
                {char}
              </motion.span>
            ))}
          </span>
        </motion.h1>
      </div>

      {/* --- SCROLL INDICATOR --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center animate-bounce z-40 pointer-events-none will-change-transform"
      >
        <span className="text-[8px] sm:text-[10px] uppercase tracking-widest mb-1 opacity-80">Scroll Down</span>
        <ChevronDown size={18} className="text-[#F58220] sm:w-5 sm:h-5" />
      </motion.div>

    </section>
  );
}