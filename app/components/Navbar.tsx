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
  Youtube,
  ChevronDown,
  Home
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '../data/servicesData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const pathname = usePathname();
  const [activePath, setActivePath] = useState(pathname);

  const productItems = servicesData.filter((item) => item.type === 'product');
  const serviceItems = servicesData.filter((item) => item.type === 'service');

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
    { name: 'Gallery', href: '/gallery' },
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
        <nav className="w-full bg-white flex items-center relative border-b-2 border-[#F58220] h-20 sm:h-22 md:h-24 shadow-md">
          <div className="w-full max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8 2xl:px-12 flex items-center justify-between relative h-full z-10">

            {/* --- 1. LOGO & COMPANY NAME --- */}
            <Link
              href="/"
              className="z-50 flex items-center shrink-0 group mr-4 xl:mr-8 2xl:mr-10"
              onClick={() => { setActivePath('/'); setIsOpen(false); }}
            >
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="will-change-transform flex items-center gap-2.5 sm:gap-3.5 pt-0.5">
                <Image
                  src="/Logo_Siddhivinayak_Engg_-_Copy.jpg-removebg-preview.png"
                  alt="Siddhivinayak Engineering"
                  width={240}
                  height={100}
                  className="w-auto object-contain h-14 sm:h-16 md:h-18 lg:h-18 xl:h-20"
                  priority
                />
                <div className="flex flex-col justify-center leading-tight select-none">
                  <span className="font-black tracking-tight text-[#0F172A] text-xs sm:text-sm md:text-base lg:text-[17px] uppercase group-hover:text-[#F58220] transition-colors">
                    Siddhivinayak
                  </span>
                  <span className="font-extrabold tracking-[1px] sm:tracking-[1.5px] lg:tracking-[2px] text-[#F58220] text-[8px] sm:text-[9px] md:text-[10px] uppercase">
                    Engineering
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* --- 2. CENTER NAVIGATION (DESKTOP) --- */}
            <div className="hidden lg:flex flex-1 justify-center items-center px-2 xl:px-4">
              <div className="flex items-center gap-3.5 xl:gap-6 2xl:gap-8">
                {navLinks.map((link, i) => {
                  const isActive = isLinkActive(link.href);
                  const isProducts = link.name === 'Products & Services';

                  if (isProducts) {
                    return (
                      <div
                        key={link.name}
                        className="relative py-2 group shrink-0"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                      >
                        <Link
                          href={link.href}
                          onClick={() => {
                            setActivePath(link.href);
                            setDropdownOpen(false);
                          }}
                          className="flex items-center gap-1"
                        >
                          <motion.span
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                            className={`text-[13px] xl:text-[14px] font-bold uppercase tracking-[1.5px] transition-colors duration-300 will-change-transform inline-flex items-center gap-1 ${isActive ? 'text-[#F58220]' : 'text-[#0F172A] group-hover:text-[#F58220]'
                              }`}
                          >
                            {link.name}
                            <ChevronDown
                              size={14}
                              className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180 text-[#F58220]' : 'text-slate-400 group-hover:text-[#F58220]'}`}
                            />
                          </motion.span>
                          <span className={`absolute bottom-0 h-[2.5px] bg-[#F58220] transition-all duration-300 ease-in-out ${isActive ? 'w-full left-0 rounded-full' : 'w-0 left-1/2 group-hover:w-full group-hover:left-0 rounded-full'
                            }`}></span>
                        </Link>

                        {/* DESKTOP DROPDOWN MENU */}
                        <AnimatePresence>
                          {dropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 12, scale: 0.98 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 8, scale: 0.98 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[530px] z-50 pointer-events-auto"
                            >
                              <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-5 overflow-hidden backdrop-blur-xl relative">
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F58220] via-orange-400 to-[#DA291C]" />

                                <div className="grid grid-cols-2 gap-5 pt-1">
                                  {/* Column 1: Products */}
                                  <div>
                                    <div className="text-[11px] font-black uppercase tracking-[2px] text-[#F58220] mb-2.5 pb-1.5 border-b border-slate-100 flex items-center justify-between">
                                      <span>Products</span>
                                      <span className="text-[10px] font-bold text-slate-400 normal-case tracking-normal">({productItems.length})</span>
                                    </div>
                                    <div className="space-y-0.5">
                                      {productItems.map((item) => (
                                        <Link
                                          key={item.slug}
                                          href={`/services/${item.slug}`}
                                          onClick={() => {
                                            setActivePath(`/services/${item.slug}`);
                                            setDropdownOpen(false);
                                          }}
                                          className="group/sub flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-slate-700 hover:text-[#F58220] hover:bg-orange-50/70 transition-all text-xs font-bold uppercase tracking-wide"
                                        >
                                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/sub:bg-[#F58220] group-hover/sub:scale-125 transition-all shrink-0" />
                                          <span className="truncate">{item.title}</span>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>

                                  {/* Column 2: Services & Quick Links */}
                                  <div className="flex flex-col justify-between">
                                    <div>
                                      <div className="text-[11px] font-black uppercase tracking-[2px] text-[#F58220] mb-2.5 pb-1.5 border-b border-slate-100 flex items-center justify-between">
                                        <span>Services</span>
                                        <span className="text-[10px] font-bold text-slate-400 normal-case tracking-normal">({serviceItems.length})</span>
                                      </div>
                                      <div className="space-y-0.5 mb-3">
                                        {serviceItems.map((item) => (
                                          <Link
                                            key={item.slug}
                                            href={`/services/${item.slug}`}
                                            onClick={() => {
                                              setActivePath(`/services/${item.slug}`);
                                              setDropdownOpen(false);
                                            }}
                                            className="group/sub flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-slate-700 hover:text-[#F58220] hover:bg-orange-50/70 transition-all text-xs font-bold uppercase tracking-wide"
                                          >
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/sub:bg-[#F58220] group-hover/sub:scale-125 transition-all shrink-0" />
                                            <span className="truncate">{item.title}</span>
                                          </Link>
                                        ))}
                                      </div>
                                    </div>

                                    {/* All Products & Services Button */}
                                    <Link
                                      href="/services"
                                      onClick={() => {
                                        setActivePath('/services');
                                        setDropdownOpen(false);
                                      }}
                                      className="p-2.5 bg-slate-50 hover:bg-[#F58220] text-[#0F172A] hover:text-white rounded-xl flex items-center justify-between text-xs font-black uppercase tracking-wider transition-all duration-300 border border-slate-200/80 group/all shadow-sm"
                                    >
                                      <span>All Products & Services</span>
                                      <ArrowRight size={13} className="text-[#F58220] group-hover/all:text-white group-hover/all:translate-x-1 transition-all" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setActivePath(link.href)}
                      className="relative group py-2 shrink-0"
                    >
                      <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className={`text-[13px] xl:text-[14px] font-bold uppercase tracking-[1.5px] transition-colors duration-300 will-change-transform inline-block ${isActive ? 'text-[#F58220]' : 'text-[#0F172A] group-hover:text-[#F58220]'
                          }`}
                      >
                        {link.name}
                      </motion.span>
                      <span className={`absolute bottom-0 h-[2.5px] bg-[#F58220] transition-all duration-300 ease-in-out ${isActive ? 'w-full left-0 rounded-full' : 'w-0 left-1/2 group-hover:w-full group-hover:left-0 rounded-full'
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

      {/* --- MOBILE DRAWER (MATCHING FLUID-TECH SCREENSHOT DESIGN) --- */}
      <AnimatePresence>
        {isOpen && (
          <div className="lg:hidden fixed inset-0 z-[100] flex">
            {/* Backdrop Dimmer Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-out White Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-[86%] max-w-[340px] sm:max-w-[380px] h-full bg-white shadow-2xl flex flex-col z-10 overflow-hidden"
            >
              {/* Drawer Top Header (Logo + Company Name + Close X) */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-white">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2.5 sm:gap-3"
                >
                  <Image
                    src="/Logo_Siddhivinayak_Engg_-_Copy.jpg-removebg-preview.png"
                    alt="Siddhivinayak Engineering"
                    width={56}
                    height={56}
                    className="h-12 sm:h-14 w-auto object-contain shrink-0"
                  />
                  <div className="flex flex-col justify-center leading-tight">
                    <span className="font-black tracking-tight text-[#0F172A] text-xs sm:text-sm uppercase">
                      Siddhivinayak
                    </span>
                    <span className="font-extrabold tracking-[1px] sm:tracking-[1.5px] text-[#F58220] text-[8px] sm:text-[9px] uppercase">
                      Engineering
                    </span>
                  </div>
                </Link>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-orange-50 text-slate-700 hover:text-[#F58220] flex items-center justify-center transition-colors border border-slate-200 shrink-0"
                  aria-label="Close menu"
                >
                  <X size={22} className="text-[#F58220] stroke-[2.5]" />
                </button>
              </div>

              {/* Drawer Scrollable Body */}
              <div className="flex-1 overflow-y-auto px-5 py-6 space-y-3 scrollbar-none">
                {/* 1. HOME (Pill Button with Icon) */}
                <Link
                  href="/"
                  onClick={() => {
                    setActivePath('/');
                    setIsOpen(false);
                  }}
                  className={`w-full py-3.5 px-4 rounded-full border text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-sm ${isLinkActive('/')
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                      : 'bg-white text-slate-700 border-slate-200/90 hover:border-[#F58220] hover:text-[#F58220]'
                    }`}
                >
                  <Home size={17} className={isLinkActive('/') ? 'text-[#F58220]' : 'text-slate-600'} />
                  <span>Home</span>
                </Link>

                {/* 2. ABOUT US (Pill Button) */}
                <Link
                  href="/about"
                  onClick={() => {
                    setActivePath('/about');
                    setIsOpen(false);
                  }}
                  className={`w-full py-3.5 px-4 rounded-full border text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm ${isLinkActive('/about')
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                      : 'bg-white text-slate-700 border-slate-200/90 hover:border-[#F58220] hover:text-[#F58220]'
                    }`}
                >
                  <span>About Us</span>
                </Link>

                {/* 3. PRODUCTS (Highlighted / Dropdown Pill Button like screenshot) */}
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    className={`w-full py-3.5 px-4 rounded-full border text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm ${mobileProductsOpen || isLinkActive('/services')
                        ? 'bg-[#F58220] text-white border-[#F58220] shadow-md shadow-orange-500/25'
                        : 'bg-white text-slate-700 border-slate-200/90 hover:border-[#F58220] hover:text-[#F58220]'
                      }`}
                  >
                    <span>Products</span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${mobileProductsOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileProductsOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden bg-slate-50 rounded-2xl border border-slate-200/80 p-3 space-y-1"
                      >
                        <div className="text-[10px] font-black uppercase tracking-[2px] text-[#F58220] px-2 pt-1 pb-1">
                          Core Products
                        </div>
                        {productItems.map((item) => (
                          <Link
                            key={item.slug}
                            href={`/services/${item.slug}`}
                            onClick={() => {
                              setActivePath(`/services/${item.slug}`);
                              setIsOpen(false);
                            }}
                            className="block px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-white hover:bg-[#F58220] transition-all uppercase tracking-wide truncate"
                          >
                            • {item.title}
                          </Link>
                        ))}

                        <div className="text-[10px] font-black uppercase tracking-[2px] text-[#F58220] px-2 pt-2 pb-1 border-t border-slate-200">
                          Services
                        </div>
                        {serviceItems.map((item) => (
                          <Link
                            key={item.slug}
                            href={`/services/${item.slug}`}
                            onClick={() => {
                              setActivePath(`/services/${item.slug}`);
                              setIsOpen(false);
                            }}
                            className="block px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-white hover:bg-[#F58220] transition-all uppercase tracking-wide truncate"
                          >
                            • {item.title}
                          </Link>
                        ))}

                        <Link
                          href="/services"
                          onClick={() => {
                            setActivePath('/services');
                            setIsOpen(false);
                          }}
                          className="block text-center py-2 text-xs font-black uppercase tracking-wider text-[#F58220] hover:underline pt-2 border-t border-slate-200"
                        >
                          View All Products & Services →
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 4. INFRASTRUCTURE (Pill Button) */}
                <Link
                  href="/infrastructure"
                  onClick={() => {
                    setActivePath('/infrastructure');
                    setIsOpen(false);
                  }}
                  className={`w-full py-3.5 px-4 rounded-full border text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm ${isLinkActive('/infrastructure')
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                      : 'bg-white text-slate-700 border-slate-200/90 hover:border-[#F58220] hover:text-[#F58220]'
                    }`}
                >
                  <span>Infrastructure</span>
                </Link>

                {/* 5. GALLERY (Pill Button) */}
                <Link
                  href="/gallery"
                  onClick={() => {
                    setActivePath('/gallery');
                    setIsOpen(false);
                  }}
                  className={`w-full py-3.5 px-4 rounded-full border text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm ${isLinkActive('/gallery')
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                      : 'bg-white text-slate-700 border-slate-200/90 hover:border-[#F58220] hover:text-[#F58220]'
                    }`}
                >
                  <span>Gallery</span>
                </Link>

                {/* 6. CONTACT (Pill Button) */}
                <Link
                  href="/contact"
                  onClick={() => {
                    setActivePath('/contact');
                    setIsOpen(false);
                  }}
                  className={`w-full py-3.5 px-4 rounded-full border text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm ${isLinkActive('/contact')
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                      : 'bg-white text-slate-700 border-slate-200/90 hover:border-[#F58220] hover:text-[#F58220]'
                    }`}
                >
                  <span>Contact</span>
                </Link>

                {/* 7. GET A QUOTE (Full-width Prominent Pill Button like screenshot) */}
                <div className="pt-2">
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-[#F58220] via-orange-500 to-[#DA291C] hover:brightness-110 text-white text-center font-black text-xs sm:text-sm uppercase tracking-widest shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 active:scale-95 transition-all"
                  >
                    <span>Get A Quote</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>

                {/* Downloads & Contact info at bottom */}
                <div className="pt-4 border-t border-slate-100 space-y-2.5">
                  <div className="flex items-center justify-center gap-2">
                    <Link
                      href="/ISO%20CERTIFICATE.pdf"
                      target="_blank"
                      className="text-[11px] font-bold text-slate-500 hover:text-[#F58220] flex items-center gap-1 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-200"
                    >
                      <FileDown size={14} className="text-[#F58220]" /> ISO Cert
                    </Link>
                    <Link
                      href="/Siddhivinayak-Engineering.pdf"
                      target="_blank"
                      className="text-[11px] font-bold text-slate-500 hover:text-[#F58220] flex items-center gap-1 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-200"
                    >
                      <FileDown size={14} className="text-[#F58220]" /> Profile
                    </Link>
                  </div>

                  <div className="text-center pt-1">
                    <a
                      href="tel:+917776965955"
                      className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#F58220] transition-colors"
                    >
                      <Phone size={13} className="text-[#F58220]" /> +91 77769 65955
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}