"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;

      if (scrollHeight > 0) {
        const progress = (scrollTop / scrollHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }

      if (scrollTop > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="relative group flex items-center justify-center">
          {/* Tooltip on desktop */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden md:group-hover:flex items-center pointer-events-none z-20">
            <div className="bg-slate-900/95 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xl border border-slate-700/60 whitespace-nowrap backdrop-blur-sm flex items-center gap-1.5">
              <span>Back to top</span>
              <span className="text-[#F58220] font-mono text-[11px] font-bold">
                {Math.round(scrollProgress)}%
              </span>
            </div>
            <div className="w-2 h-2 bg-slate-900 rotate-45 -mr-1 border-r border-t border-slate-700/60" />
          </div>

          {/* Button with Animated Progress Ring */}
          <motion.button
            onClick={scrollToTop}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            aria-label="Scroll to top"
            className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-slate-900/90 hover:bg-[#0F172A] text-slate-200 hover:text-white flex items-center justify-center shadow-xl hover:shadow-orange-500/25 border-2 border-slate-700/80 hover:border-[#F58220] transition-all duration-300 backdrop-blur-md cursor-pointer"
          >
            {/* Circular Progress SVG */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-[2px]"
              viewBox="0 0 48 48"
            >
              <circle
                cx="24"
                cy="24"
                r="21"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="text-white/10"
              />
              <circle
                cx="24"
                cy="24"
                r="21"
                fill="none"
                stroke="url(#topScrollGradient)"
                strokeWidth="2.5"
                strokeDasharray="131.95"
                strokeDashoffset={131.95 - (131.95 * scrollProgress) / 100}
                strokeLinecap="round"
                className="transition-[stroke-dashoffset] duration-150"
              />
              <defs>
                <linearGradient id="topScrollGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F58220" />
                  <stop offset="100%" stopColor="#FFA048" />
                </linearGradient>
              </defs>
            </svg>

            <ArrowUp className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:-translate-y-0.5 text-[#F58220] group-hover:text-white relative z-10" />
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
}
