"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// --- CLIENT LOGO DATA ---
const clients = [
  { name: "Pyrotek India Pvt Ltd", logo: "/logo (1).png" },
  { name: "Lemken India Agro", logo: "/logo (2).png" },
  { name: "Shini Plastic Technologies", logo: "/logo (3).png" },
  { name: "Storm Engineering", logo: "/logo (4).png" },
  { name: "ARM Welders India", logo: "/logo (5).png" },
  { name: "PARC Robotics System", logo: "/logo (6).png" },
  { name: "TATA", logo: "/logo(7).png" },
];

export default function ContactAndClients() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-white border-t border-slate-200 shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
      {/* ENGINEERING GRID BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 md:mb-16 text-center relative z-10">
        <span className="text-orange-600 font-bold text-xs tracking-[4px] uppercase block mb-3">
          Trusted By
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-6 text-slate-900">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
            Clients
          </span>
        </h2>
        <div className="flex items-center justify-center gap-3 opacity-50">
          <div className="h-[2px] w-12 bg-slate-300" />
          <div className="h-2 w-2 bg-orange-500 rounded-full" />
          <div className="h-[2px] w-12 bg-slate-300" />
        </div>
      </div>

      {/* SCROLLING STRIP */}
      <div className="relative w-full py-4 z-10 flex overflow-hidden">
        {/* Gradients to fade edges smoothly */}
        <div className="absolute top-0 left-0 w-16 sm:w-32 md:w-64 h-full z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-16 sm:w-32 md:w-64 h-full z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        {/* Smooth Infinite Moving Track */}
        <motion.div
          className="flex gap-6 sm:gap-10 md:gap-16 pr-6 sm:pr-10 md:pr-16 items-center w-max will-change-transform"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
            <LogoItem key={index} data={client} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// --- Tech Style Logo Card ---
function LogoItem({ data }: { data: any }) {
  return (
    <div className="flex-shrink-0 group relative cursor-pointer">
      <div
        className="
        w-36 h-20 
        sm:w-48 sm:h-28 
        md:w-64 md:h-32 
        bg-white 
        rounded-xl sm:rounded-2xl 
        border border-slate-200 
        flex items-center justify-center 
        p-4 sm:p-6 md:p-8
        relative
        overflow-hidden
        transition-all duration-500
        hover:shadow-xl hover:shadow-orange-100/40
        hover:border-orange-400/50
        hover:-translate-y-2
        will-change-transform
      "
      >
        <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] sm:border-t-[30px] sm:border-r-[30px] border-t-transparent border-r-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative w-full h-full transition-all duration-500">
          <Image
            src={data.logo}
            alt={data.name}
            fill
            sizes="(max-width: 640px) 144px, (max-width: 768px) 192px, 256px"
            className="object-contain opacity-100 transition-all duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}