"use client";
import Image from "next/image";
import { MapPin, Phone, Mail, User, FileText, Settings, Fan, Zap, CheckCircle2, Code, Facebook, Instagram, Linkedin, Youtube, Star, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Infrastructure', href: '/infrastructure' },
    { name: 'Products & Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="relative bg-[#050A14] text-white pt-16 sm:pt-20 pb-8 overflow-hidden border-t-4 border-[#F58220]">

      {/* --- 1. INDUSTRIAL BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#F58220] rounded-full blur-[200px] opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#DA291C] rounded-full blur-[150px] opacity-10"></div>

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

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-10 sm:mb-12">

          {/* Brand Info */}
          <div className="space-y-4">
            <div className="bg-white/5 p-3.5 rounded-xl border border-white/10 backdrop-blur-sm inline-block shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              <Image
                src="/Logo_Siddhivinayak_Engg_-_Copy.jpg-removebg-preview.png"
                alt="Siddhivinayak Engineering Logo"
                width={190}
                height={75}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed border-l-4 border-[#F58220] pl-3.5 font-normal">
              Advanced Engineering Solutions. Specializing in Fixtures, Robotics & Automation since 2016.
            </p>

            {/* Social Media Icons */}
            <div className="pt-1">
              <p className="text-xs text-slate-300 uppercase tracking-widest font-bold mb-2.5">Connect With Us</p>
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

          {/* Quick Links */}
          <div className="lg:pl-6">
            <h4 className="text-[#F58220] font-bold uppercase tracking-[2.5px] mb-4 text-sm sm:text-base flex items-center gap-2">
              <Zap size={16} /> Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2.5 text-slate-200 hover:text-white transition-all group text-sm sm:text-[15px]"
                  >
                    <span className="w-1.5 h-1.5 bg-[#475569] group-hover:bg-[#F58220] rounded-full transition-colors"></span>
                    <span className="font-medium group-hover:translate-x-1 transition-transform">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-[#F58220] font-bold uppercase tracking-[2.5px] mb-4 text-sm sm:text-base flex items-center gap-2">
              <MapPin size={16} /> Factory Loc.
            </h4>
            <div className="group">
              <span className="text-sm sm:text-[15px] text-slate-200 leading-relaxed font-mono font-medium block">
                Sr. No. 15/1,<br />
                Near Hindustan Pressing,<br />
                Gulave Vasti, MIDC,<br />
                Bhosari, Pune – 411 026
              </span>
            </div>
          </div>

          {/* Contact Person Card */}
          <div>
            <h4 className="text-[#F58220] font-bold uppercase tracking-[2.5px] mb-4 text-sm sm:text-base flex items-center gap-2">
              <User size={16} /> Contact Info
            </h4>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-gradient-to-br from-[#1F2937] to-[#0B1120] p-4 sm:p-5 rounded-xl border-t-2 border-[#F58220] shadow-xl relative overflow-hidden group"
            >
              <div className="flex items-center gap-3 mb-3.5">
                <div className="w-10 h-10 rounded-full bg-[#F58220] flex items-center justify-center text-white text-base font-bold shadow-md">
                  VK
                </div>
                <div>
                  <h5 className="font-bold text-slate-100 text-sm sm:text-base">Mr. Vinod Kawade</h5>
                  <p className="text-[11px] text-[#F58220] uppercase tracking-wider font-bold">Director</p>
                </div>
              </div>

              <div className="space-y-2">
                <a href="tel:+917776965955" className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 hover:text-white transition-colors bg-black/30 p-2 rounded hover:bg-[#F58220]/20">
                  <Phone size={14} className="text-[#F58220]" /> +91 77769 65955
                </a>
                <a href="tel:+917972133512" className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 hover:text-white transition-colors bg-black/30 p-2 rounded hover:bg-[#F58220]/20">
                  <Phone size={14} className="text-[#F58220]" /> +91 79721 33512
                </a>
                <a href="mailto:siddhivinayak.engg555@gmail.com" className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 hover:text-white transition-colors bg-black/30 p-2 rounded hover:bg-[#F58220]/20 truncate">
                  <Mail size={14} className="text-[#F58220]" /> siddhivinayak.engg555@gmail.com
                </a>
              </div>
            </motion.div>
          </div>

        </div>

        {/* --- 2. INTERACTIVE GOOGLE MAP SECTION (Reference Style) --- */}
        <div className="mb-8 sm:mb-10 relative w-full">
          <div className="relative w-full h-[180px] sm:h-[200px] md:h-[220px] rounded-xl sm:rounded-2xl overflow-hidden border border-white/15 shadow-xl bg-[#0B1120]">
            
            {/* Google Maps Iframe */}
            <iframe
              title="Siddhivinayak Engineering Location Map"
              src="https://maps.google.com/maps?q=Siddhivinayak+Engineering+Bhosari+Pune&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 filter contrast-[1.05] brightness-[0.95]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Floating Info & Review Card Overlay (Reference Style - Compact) */}
            <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 right-2.5 sm:right-auto z-10 max-w-xl bg-[#0e1626]/90 backdrop-blur-md border border-white/15 text-white p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
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

        {/* --- 3. BOTTOM STATUS BAR --- */}
        <div className="border-t border-white/10 pt-6 flex flex-col items-center justify-center text-center gap-1.5 w-full">

          {/* Line 1: Copyright */}
          <p className="text-slate-200 text-xs sm:text-sm md:text-[15px] font-medium tracking-wide">
            © 2026 Siddhivinayak Engineering. All rights reserved.
          </p>

          {/* Line 2: Developer Credit */}
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