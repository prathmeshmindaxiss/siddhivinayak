"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface FloatingWhatsAppProps {
  phoneNumber?: string;
  message?: string;
}

export default function FloatingWhatsApp({
  phoneNumber = "917972133512",
  message = "Hello, I am interested in your engineering services.",
}: FloatingWhatsAppProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="relative group flex items-center justify-center">
      {/* Desktop Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden md:group-hover:flex items-center pointer-events-none z-20">
        <div className="bg-slate-900/95 text-white px-3.5 py-2 rounded-xl shadow-2xl border border-slate-700/60 whitespace-nowrap backdrop-blur-md flex flex-col gap-0.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-400">
              WhatsApp Chat
            </span>
          </div>
          <span className="text-xs font-semibold text-slate-100">+91 79721 33512</span>
        </div>
        <div className="w-2 h-2 bg-slate-900 rotate-45 -mr-1 border-r border-t border-slate-700/60" />
      </div>

      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp (+91 79721 33512)"
        className="relative flex items-center justify-center cursor-pointer"
      >
        {/* Subtle & Normal Pulse Effect */}
        <motion.div
          animate={{ scale: [1, 1.4], opacity: [0.35, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
          className="absolute inset-0 bg-[#25D366] rounded-full z-0 pointer-events-none"
        />

        {/* Main WhatsApp Button */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="relative z-10 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center shadow-lg hover:shadow-emerald-500/40 border-2 border-white transition-all duration-300"
        >
          {/* SVG Icon Size */}
          <svg
            className="w-6 h-6 md:w-7 md:h-7"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382C17.112 14.202 15.344 13.332 15.013 13.216C14.682 13.101 14.441 13.044 14.2 13.404C13.96 13.764 13.272 14.57 13.061 14.811C12.851 15.051 12.641 15.081 12.28 14.901C11.919 14.721 10.758 14.341 9.38204 13.115C8.30704 12.158 7.58104 10.975 7.37104 10.615C7.16104 10.255 7.34804 10.06 7.52904 9.88C7.68904 9.721 7.88604 9.466 8.06604 9.256C8.24604 9.046 8.30604 8.896 8.42604 8.656C8.54604 8.416 8.48604 8.205 8.39604 8.025C8.30604 7.845 7.58504 6.074 7.28504 5.354C6.99204 4.653 6.69504 4.749 6.47604 4.749C6.27304 4.749 6.04004 4.749 5.80704 4.749C5.57404 4.749 5.19204 4.836 4.86904 5.189C4.54604 5.542 3.63704 6.398 3.63704 8.14C3.63704 9.882 4.90504 11.565 5.08504 11.805C5.26504 12.045 7.58304 15.617 11.132 17.149C11.976 17.513 12.635 17.731 13.146 17.893C14.153 18.213 15.067 18.166 15.786 18.059C16.592 17.939 18.266 17.045 18.618 16.054C18.97 15.063 18.97 14.223 18.872 14.053C18.774 13.883 18.534 13.834 18.174 13.654H17.472ZM12.008 21.928C10.245 21.928 8.52804 21.465 7.02504 20.574L6.66704 20.362L2.91704 21.345L3.91804 17.688L3.68504 17.317C2.73004 15.797 2.22704 14.032 2.22704 12.213C2.22704 6.819 6.61504 2.431 12.012 2.431C14.625 2.431 17.081 3.449 18.927 5.298C20.774 7.146 21.791 9.602 21.791 12.216C21.791 17.609 17.403 21.928 12.008 21.928Z" />
          </svg>
        </motion.div>
      </Link>
    </div>
  );
}
