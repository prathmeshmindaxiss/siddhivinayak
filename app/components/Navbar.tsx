"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  FileDown, 
  ArrowRight, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [activePath, setActivePath] = useState(pathname);

  // Sync active path with current route
  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  // Check if link is currently active
  const isLinkActive = (href: string) => {
    const current = activePath || pathname || '/';
    if (href === '/') {
      return current === '/';
    }
    return current === href || current.startsWith(href + '/');
  };

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body lock when mobile menu is open (prevents background scrolling)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { 
      document.body.style.overflow = 'unset'; 
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Infrastructure', href: '/infrastructure' },
    { name: 'Products & Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex flex-col"
      >
        {/* --- TOP BAR (#F58220 Orange Background - Sticky) --- */}
        <div 
          className="w-full bg-[#F58220] border-b border-black/5 text-white transition-all duration-300 ease-in-out relative z-20 shadow-sm py-2 sm:py-2.5"
        >
          <div className="w-full max-w-[95rem] mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between text-sm sm:text-base">
            
            {/* LEFT SIDE: CONTACT INFO (PHONE NUMBER & EMAIL) */}
            <div className="flex items-center gap-4 sm:gap-7 font-medium">
              <a
                href="tel:+917776965955"
                className="flex items-center gap-2 sm:gap-2.5 text-white hover:text-slate-900 transition-colors group py-0.5"
                title="Call us: +91 77769 65955"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#F58220] transition-all duration-300 shadow-sm">
                  <Phone size={13} className="sm:w-3.5 sm:h-3.5" />
                </div>
                <span className="font-mono font-bold tracking-tight text-xs sm:text-sm md:text-[15px]">+91 77769 65955</span>
              </a>

              <div className="hidden md:block w-[1px] h-4 bg-white/35"></div>

              <a
                href="mailto:siddhivinayak.engg555@gmail.com"
                className="hidden md:flex items-center gap-2.5 text-white hover:text-slate-900 transition-colors group py-0.5"
                title="Email us: siddhivinayak.engg555@gmail.com"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#F58220] transition-all duration-300 shadow-sm">
                  <Mail size={13} className="sm:w-3.5 sm:h-3.5" />
                </div>
                <span className="text-xs sm:text-sm md:text-[14px] font-semibold tracking-normal font-sans">siddhivinayak.engg555@gmail.com</span>
              </a>
            </div>

            {/* RIGHT SIDE: SOCIAL MEDIA ICONS */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#1877F2] flex items-center justify-center transition-all duration-300 border border-white/25 hover:border-white hover:scale-105 shadow-sm"
              >
                <Facebook size={14} className="sm:w-4 sm:h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#E4405F] flex items-center justify-center transition-all duration-300 border border-white/25 hover:border-white hover:scale-105 shadow-sm"
              >
                <Instagram size={14} className="sm:w-4 sm:h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#0A66C2] flex items-center justify-center transition-all duration-300 border border-white/25 hover:border-white hover:scale-105 shadow-sm"
              >
                <Linkedin size={14} className="sm:w-4 sm:h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                title="YouTube"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#FF0000] flex items-center justify-center transition-all duration-300 border border-white/25 hover:border-white hover:scale-105 shadow-sm"
              >
                <Youtube size={14} className="sm:w-4 sm:h-4" />
              </a>
            </div>

          </div>
        </div>

        {/* --- MAIN NAVIGATION BAR (#ffffff White Background) --- */}
        <nav
          className={`w-full bg-white transition-all duration-500 ease-in-out flex items-center relative border-b border-slate-100 ${
            scrolled || isOpen
              ? 'h-20 sm:h-22 shadow-lg' 
              : 'h-20 sm:h-24 md:h-26 shadow-md'
          }`}
        >
          <div className="w-full max-w-[95rem] mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between relative h-full z-10">
            
            {/* --- 1. OVERSIZED LOGO --- */}
            <Link href="/" className="z-50 flex items-center shrink-0" onClick={() => { setActivePath('/'); setIsOpen(false); }}>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="will-change-transform pt-1">
                <Image 
                  src="/Logo_Siddhivinayak_Engg_-_Copy.jpg-removebg-preview.png"
                  alt="Siddhivinayak Engineering"
                  width={240} 
                  height={100}
                  className={`w-auto object-contain transition-all duration-500 ease-in-out ${
                     scrolled || isOpen ? 'h-14 sm:h-16' : 'h-16 sm:h-20 md:h-22' 
                  }`}
                  priority
                />
              </motion.div>
            </Link>

            {/* --- 2. CENTER NAVIGATION (DESKTOP) --- */}
            <div className="hidden lg:flex flex-1 justify-center items-center"> 
              <div className="flex items-center gap-6 xl:gap-10">
                {navLinks.map((link, i) => {
                  const isActive = isLinkActive(link.href);
                  
                  return (
                    <Link 
                      key={link.name} 
                      href={link.href} 
                      onClick={() => setActivePath(link.href)}
                      className="relative group py-2"
                    >
                      <motion.span 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className={`text-[13px] xl:text-[14px] font-bold uppercase tracking-[1.5px] transition-colors duration-300 will-change-transform inline-block ${
                          isActive ? 'text-[#F58220]' : 'text-[#0F172A] group-hover:text-[#F58220]'
                        }`}
                      >
                        {link.name}
                      </motion.span>
                      <span className={`absolute bottom-0 h-[2.5px] bg-[#F58220] transition-all duration-300 ease-in-out ${
                        isActive ? 'w-full left-0 rounded-full' : 'w-0 left-1/2 group-hover:w-full group-hover:left-0 rounded-full'
                      }`}></span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* --- 3. RIGHT SIDE ACTIONS (DESKTOP) --- */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6 shrink-0">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="will-change-transform">
                <Link 
                  href="/contact" 
                  onClick={() => { setActivePath('/contact'); setIsOpen(false); }}
                  className="px-5 xl:px-6 py-2.5 xl:py-3 bg-[#F58220] text-white text-[12px] xl:text-[13px] font-black uppercase tracking-[1.5px] hover:bg-[#0F172A] hover:text-white transition-colors rounded flex items-center gap-2 shadow-lg shadow-orange-900/10"
                >
                  Get Quote
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>

            {/* --- MOBILE TOGGLE BUTTON --- */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden z-[110] relative text-[#0F172A] p-2 shrink-0 transition-transform duration-300 active:scale-90"
              aria-label="Toggle Menu"
            >
              <div className="bg-slate-100 p-2 rounded-lg border border-slate-200 shadow-sm">
                {isOpen ? <X size={26} className="text-[#F58220]" /> : <Menu size={26} className="text-[#0F172A]" />}
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden fixed inset-0 w-full h-[100dvh] bg-[#0F172A] z-[100] flex flex-col pt-28 px-6 sm:px-10 pb-10 overflow-y-auto"
          >
            {/* Decorative Background Blur */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F58220]/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="flex flex-col gap-6 relative z-10 flex-1">
              {navLinks.map((link, i) => {
                const isActive = isLinkActive(link.href);

                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                  >
                    <Link 
                      href={link.href} 
                      className={`text-2xl sm:text-3xl font-black uppercase tracking-tight block border-b border-white/5 pb-4 transition-all duration-300 ${
                        isActive ? 'text-[#F58220] pl-3 border-l-4 border-l-[#F58220]' : 'text-white hover:text-[#F58220]'
                      }`}
                      onClick={() => {
                        setActivePath(link.href);
                        setIsOpen(false);
                      }}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="flex flex-col gap-6 mt-8 relative z-10"
            >
              <div className="flex flex-col gap-4 border-b border-white/5 pb-6">
                <span className="text-xs font-bold text-white/30 uppercase tracking-widest">Downloads</span>
                <Link 
                  href="/ISO%20CERTIFICATE.pdf" 
                  target="_blank" 
                  className="flex items-center gap-3 text-white/80 font-bold uppercase tracking-widest hover:text-[#F58220] transition-colors bg-white/5 p-4 rounded-lg border border-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  <FileDown size={20} className="text-[#F58220]"/> ISO 9001:2015 Certificate
                </Link>
                <Link 
                  href="/Siddhivinayak-Engineering.pdf" 
                  target="_blank" 
                  className="flex items-center gap-3 text-white/80 font-bold uppercase tracking-widest hover:text-[#F58220] transition-colors bg-white/5 p-4 rounded-lg border border-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  <FileDown size={20} className="text-[#F58220]"/> Company Profile
                </Link>
              </div>

              {/* Social & Contact info inside mobile menu */}
              <div className="flex flex-col gap-3 border-b border-white/5 pb-6">
                <span className="text-xs font-bold text-white/30 uppercase tracking-widest">Connect With Us</span>
                <div className="flex items-center gap-2.5">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#F58220] hover:border-[#F58220] transition-colors">
                    <Facebook size={16} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#F58220] hover:border-[#F58220] transition-colors">
                    <Instagram size={16} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#F58220] hover:border-[#F58220] transition-colors">
                    <Linkedin size={16} />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#F58220] hover:border-[#F58220] transition-colors">
                    <Youtube size={16} />
                  </a>
                </div>
                <div className="space-y-2 pt-2">
                  <a href="tel:+917776965955" className="flex items-center gap-3 text-sm text-slate-300 hover:text-[#F58220] transition-colors">
                    <Phone size={15} className="text-[#F58220]" /> +91 77769 65955
                  </a>
                  <a href="mailto:siddhivinayak.engg555@gmail.com" className="flex items-center gap-3 text-sm text-slate-300 hover:text-[#F58220] transition-colors truncate">
                    <Mail size={15} className="text-[#F58220]" /> siddhivinayak.engg555@gmail.com
                  </a>
                </div>
              </div>

              <Link 
                href="/contact" 
                className="w-full py-5 bg-[#F58220] text-white text-center font-black text-sm uppercase tracking-widest rounded-lg shadow-xl transition-transform active:scale-95 flex items-center justify-center gap-2" 
                onClick={() => setIsOpen(false)}
              >
                Get Quote <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}