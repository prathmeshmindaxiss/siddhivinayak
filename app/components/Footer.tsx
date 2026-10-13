"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Star, 
  ExternalLink,
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube,
  MessageCircle,
  Settings,
  Fan
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Infrastructure", href: "/infrastructure" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative bg-[#050A14] text-white pt-16 sm:pt-20 pb-8 overflow-hidden border-t-4 border-[#F58220]">
      {/* --- 1. ORIGINAL INDUSTRIAL DARK BACKGROUND (GEARS & AMBIENT GLOWS) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#F58220] rounded-full blur-[200px] opacity-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#DA291C] rounded-full blur-[150px] opacity-10" />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 text-[#1F2937]"
        >
          <Settings size={500} strokeWidth={0.5} />
        </motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 -left-16 text-[#F58220]/10"
        >
          <Fan size={300} strokeWidth={1} />
        </motion.div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 text-[#DA291C]/10"
        >
          <Settings size={150} strokeWidth={1} />
        </motion.div>
      </div>

      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* --- 2. MAIN 3-COLUMN CONTENT (MATCHING SCREENSHOT LAYOUT) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-10 sm:mb-14">
          
          {/* COLUMN 1: BRAND LOGO + ABOUT + SOCIALS (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            <Link 
              href="/" 
              className="inline-flex items-center gap-3 bg-white/5 p-3 sm:p-3.5 rounded-xl border border-white/10 backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:border-[#F58220]/40 transition-colors group"
            >
              <Image
                src="/Logo_Siddhivinayak_Engg_-_Copy.jpg-removebg-preview.png"
                alt="Siddhivinayak Engineering Logo"
                width={190}
                height={75}
                className="h-11 sm:h-12 w-auto object-contain shrink-0"
              />
              <div className="flex flex-col justify-center leading-tight select-none pr-1">
                <span className="font-black tracking-tight text-white text-base sm:text-lg uppercase group-hover:text-[#F58220] transition-colors">
                  Siddhivinayak
                </span>
                <span className="font-extrabold tracking-[2px] text-[#F58220] text-[10px] sm:text-[11px] uppercase">
                  Engineering
                </span>
              </div>
            </Link>

            <p className="text-slate-300 text-sm sm:text-[15px] leading-relaxed max-w-md border-l-4 border-[#F58220] pl-3.5 font-normal">
              Pune Based precision engineering specialist. Supplying Jigs, BIW & Welding Fixtures, CNC/VMC Machined Components, SPM Machines, and Heavy Structural Fabrications since 2016.
            </p>

            {/* Social Media Links */}
            <div className="pt-1">
              <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-2.5">
                Connect With Us
              </p>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#1877F2] text-slate-200 hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-[#1877F2] hover:-translate-y-1 shadow-md"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] text-slate-200 hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-pink-500 hover:-translate-y-1 shadow-md"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#0A66C2] text-slate-200 hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-[#0A66C2] hover:-translate-y-1 shadow-md"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#FF0000] text-slate-200 hover:text-white flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-[#FF0000] hover:-translate-y-1 shadow-md"
                >
                  <Youtube size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="text-[#F58220] font-bold uppercase tracking-[2.5px] mb-4 text-sm sm:text-base flex items-center gap-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2.5 text-slate-300 hover:text-white font-medium text-sm sm:text-[15px] transition-all"
                  >
                    <span className="text-[#F58220] font-black group-hover:translate-x-1 transition-transform">
                      &gt;
                    </span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: CONTACT US (lg:col-span-4) */}
          <div className="lg:col-span-4">
            <h3 className="text-[#F58220] font-bold uppercase tracking-[2.5px] mb-4 text-sm sm:text-base flex items-center gap-2">
              Contact Us
            </h3>
            <ul className="space-y-3.5">
              {/* Address */}
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 text-[#F58220] flex items-center justify-center shrink-0 mt-0.5 border border-white/10">
                  <MapPin size={17} />
                </div>
                <span className="text-slate-300 text-sm leading-relaxed font-medium">
                  Sr. No. 15/1, Near Hindustan Pressing, Gulave Vasti, MIDC, Bhosari, Pune – 411 026
                </span>
              </li>

              {/* Phone 1 */}
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 text-[#F58220] flex items-center justify-center shrink-0 border border-white/10">
                  <Phone size={15} />
                </div>
                <a
                  href="tel:+917776965955"
                  className="text-slate-200 hover:text-[#F58220] font-medium text-sm transition-colors"
                >
                  +91 77769 65955
                </a>
              </li>

              {/* WhatsApp / Phone 2 */}
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <MessageCircle size={15} />
                </div>
                <a
                  href="https://wa.me/917972133512?text=Hello%2C%20I%20am%20interested%20in%20your%20engineering%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-200 hover:text-emerald-400 font-medium text-sm transition-colors"
                >
                  +91 79721 33512
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 text-[#F58220] flex items-center justify-center shrink-0 border border-white/10">
                  <Mail size={15} />
                </div>
                <a
                  href="mailto:siddhivinayak.engg555@gmail.com"
                  className="text-slate-200 hover:text-[#F58220] font-medium text-sm transition-colors truncate"
                >
                  siddhivinayak.engg555@gmail.com
                </a>
              </li>

              {/* Working Hours */}
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 text-[#F58220] flex items-center justify-center shrink-0 border border-white/10">
                  <Clock size={15} />
                </div>
                <span className="text-slate-300 text-xs sm:text-sm font-medium">
                  Mon–Sat: 8:30 AM – 7:30 PM (Sun: Holiday)
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* --- 3. GOOGLE MAP WITH FLOATING REVIEW CARD --- */}
        <div className="mb-8 sm:mb-10 relative w-full">
          <div className="relative w-full h-[190px] sm:h-[220px] md:h-[250px] rounded-xl sm:rounded-2xl overflow-hidden border border-white/15 shadow-xl bg-[#0B1120]">
            {/* Map Iframe */}
            <iframe
              title="Siddhivinayak Engineering Location Map"
              src="https://maps.google.com/maps?q=Siddhivinayak+Engineering+Bhosari+Pune&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 filter contrast-[1.05] brightness-[0.95]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Floating Review Card Overlay */}
            <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 right-2.5 sm:right-auto z-10 max-w-xl bg-[#0e1626]/95 backdrop-blur-md border border-white/15 text-white p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
              <div className="space-y-0.5">
                <div className="flex items-center flex-wrap gap-1.5">
                  <h4 className="font-bold text-xs sm:text-sm text-white tracking-wide">
                    Siddhivinayak Engineering
                  </h4>
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-amber-400 bg-amber-400/10 px-1.5 py-0.2 rounded-full border border-amber-400/30">
                    5.0 <Star size={10} className="fill-amber-400 text-amber-400" />
                    <span className="text-slate-300 font-normal">(50+)</span>
                  </span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-slate-300 flex items-center gap-1 leading-tight">
                  <MapPin size={11} className="text-[#F58220] shrink-0" />
                  Sr. No. 15/1, Gulave Vasti, MIDC, Bhosari, Pune – 411 026
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1.5 shrink-0">
                <a
                  href="https://maps.google.com/?q=Siddhivinayak+Engineering+Bhosari+Pune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-md bg-white text-slate-900 hover:bg-slate-100 text-[11px] font-bold flex items-center gap-1 shadow-sm transition-all hover:scale-[1.02] active:scale-95"
                >
                  Review Us <Star size={11} className="fill-amber-500 text-amber-500" />
                </a>

                <a
                  href="https://maps.google.com/?q=Siddhivinayak+Engineering+Bhosari+Pune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-md bg-gradient-to-r from-[#F58220] to-[#E06D10] text-white hover:brightness-110 text-[11px] font-bold flex items-center gap-1 shadow-md shadow-[#F58220]/20 transition-all hover:scale-[1.02] active:scale-95"
                >
                  Open in Maps <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- 4. BOTTOM COPYRIGHT & DEVELOPER BAR --- */}
        <div className="border-t border-white/10 pt-6 flex flex-col items-center justify-center text-center gap-1.5 w-full">
          <p className="text-slate-200 text-xs sm:text-sm md:text-[15px] font-medium tracking-wide">
            © 2026 Siddhivinayak Engineering. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm text-slate-400">
            Developed by{" "}
            <Link
              href="https://mindaxisinnovation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F58220] transition-colors font-bold text-slate-100 underline underline-offset-4 decoration-slate-500 hover:decoration-[#F58220]"
            >
              MindAxis Innovation Pvt Ltd.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}