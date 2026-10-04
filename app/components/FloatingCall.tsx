"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

interface FloatingCallProps {
  phoneNumber?: string;
  displayNumber?: string;
}

export default function FloatingCall({
  phoneNumber = "+917776965955",
  displayNumber = "+91 77769 65955",
}: FloatingCallProps) {
  return (
    <div className="relative group flex items-center justify-center">
      {/* Desktop Tooltip / Badge */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden md:group-hover:flex items-center pointer-events-none z-20">
        <div className="bg-slate-900/95 text-white px-3.5 py-2 rounded-xl shadow-2xl border border-slate-700/60 whitespace-nowrap backdrop-blur-md flex flex-col gap-0.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] uppercase tracking-wider font-bold text-orange-400">
              Direct Hotline
            </span>
          </div>
          <span className="text-xs font-semibold text-slate-100">{displayNumber}</span>
        </div>
        <div className="w-2 h-2 bg-slate-900 rotate-45 -mr-1 border-r border-t border-slate-700/60" />
      </div>

      <Link
        href={`tel:${phoneNumber}`}
        aria-label={`Call ${displayNumber}`}
        className="relative flex items-center justify-center cursor-pointer"
      >
        {/* Animated Radar Pulse Effect Ring 1 */}
        <motion.div
          animate={{ scale: [1, 1.45], opacity: [0.45, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
          className="absolute inset-0 bg-[#F58220] rounded-full z-0 pointer-events-none"
        />

        {/* Animated Radar Pulse Effect Ring 2 */}
        <motion.div
          animate={{ scale: [1, 1.3], opacity: [0.25, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
          className="absolute inset-0 bg-[#DA291C] rounded-full z-0 pointer-events-none"
        />

        {/* Main Floating Call Button */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="relative z-10 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#F58220] via-[#F15A24] to-[#DA291C] rounded-full flex items-center justify-center shadow-lg hover:shadow-orange-500/40 border-2 border-white transition-all duration-300 text-white"
        >
          {/* Subtle Phone Ring Vibration Motion */}
          <motion.div
            animate={{
              rotate: [0, -14, 14, -12, 12, -6, 6, 0],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
          >
            <Phone className="w-5 h-5 md:w-6 md:h-6 fill-white stroke-white" />
          </motion.div>
        </motion.div>
      </Link>
    </div>
  );
}
