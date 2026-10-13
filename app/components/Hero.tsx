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
    <section className="relative w-full h-[calc(100vh-120px)] sm:h-[calc(100vh-128px)] md:h-[calc(100vh-136px)] min-h-[500px] mt-[120px] sm:mt-[128px] md:mt-[136px] flex items-center justify-center overflow-hidden bg-[#0B1121]">

      {/* --- BACKGROUND VIDEO (FIT PROPERLY IN HERO SECTION) --- */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 pointer-events-none"
        src="/वीडियो_को_और_बेहतर_बनाएं.mp4"
      />

      {/* --- OVERLAYS (Slight darkening for clear text contrast while showing video clearly) --- */}
      <div className="absolute inset-0 bg-black/35 z-10 pointer-events-none"></div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-25 z-10"></div>

      {/* Subtle center ambient radial light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none z-10"></div>

      {/* --- MAIN CONTENT (EXACT VERTICAL & HORIZONTAL CENTER) --- */}
      <div className="relative z-40 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 w-full max-w-6xl mx-auto">

        {/* HEADLINE (Letter By Letter - NO overflow clipping) */}
        <motion.h1
          variants={textContainer}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.5rem] font-black leading-[1.15] mb-0 tracking-tight drop-shadow-[0_12px_40px_rgba(0,0,0,0.95)] text-center will-change-transform"
        >
          {/* First Word (White - with generous bottom padding so descenders are never cut) */}
          <span className="block text-white pb-1 sm:pb-2 leading-tight">
            {word1.map((char, index) => (
              <motion.span key={`w1-${index}`} variants={textChild} className="inline-block will-change-transform">
                {char}
              </motion.span>
            ))}
          </span>

          {/* Second Word (Premium Orange - with generous bottom padding so 'g' is never cut) */}
          <span className="block text-[#F58220] pb-2 sm:pb-4 leading-tight">
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
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center animate-bounce z-40 pointer-events-none will-change-transform"
      >
        <span className="text-[8px] sm:text-[10px] uppercase tracking-widest mb-1 opacity-80">Scroll Down</span>
        <ChevronDown size={18} className="text-[#F58220] sm:w-5 sm:h-5" />
      </motion.div>

    </section>
  );
}