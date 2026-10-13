"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Ruler, 
  Cpu, 
  Layers, 
  Flame, 
  Cog, 
  Wrench, 
  Sparkles,
  PhoneCall,
  CheckCircle,
  Factory
} from "lucide-react";
import { servicesData } from "../data/servicesData"; 

export default function ServicesPage() {
  // Filter only services
  const servicesList = servicesData.filter((item) => item.type === "service");

  return (
    <main className="bg-slate-50 min-h-screen text-slate-900 selection:bg-[#F58220]/20 overflow-x-hidden">
      <Navbar />

      {/* --- 1. HERO HEADER (MATCHING GALLERY & INFRASTRUCTURE STYLE) --- */}
      <section className="pt-32 sm:pt-40 md:pt-48 pb-20 md:pb-28 px-4 sm:px-6 lg:px-12 relative bg-[#0B1121] text-white overflow-hidden border-b border-white/10">
        {/* Ambient Glows & Tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/4 -right-20 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#F58220]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#DA291C]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
          <Breadcrumbs items={[{ label: "Services" }]} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Our Industrial{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F58220] via-[#FFA048] to-[#DA291C]">
                Services
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* --- 2. SERVICES SHOWCASE SECTION --- */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-[95rem] mx-auto">
          {/* Section Summary Header */}
          <div className="flex flex-col items-center text-center gap-2 mb-14 pb-6 border-b border-slate-200">
            <span className="text-[#F58220] font-bold text-xs uppercase tracking-[3px] block">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-[#0F172A] tracking-tight">
              Machining &amp; Fabrication Solutions
            </h2>
            <p className="text-slate-500 font-bold text-sm mt-1">
              Serving Automotive, Heavy Engineering &amp; Industrial Manufacturing Sectors
            </p>
          </div>

          {/* Large Rich Feature Cards */}
          <div className="space-y-12 sm:space-y-16">
            {servicesList.map((service, index) => {
              const isEven = index % 2 === 1;

              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`bg-slate-50 border border-slate-200/90 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-[#F58220]/50 transition-all duration-500 grid lg:grid-cols-12 gap-0 items-stretch ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image Column (lg:col-span-5) */}
                  <div className={`lg:col-span-5 relative bg-white min-h-[300px] sm:min-h-[380px] p-8 flex items-center justify-center border-b lg:border-b-0 ${
                    isEven ? "lg:order-2 lg:border-l border-slate-200" : "lg:border-r border-slate-200"
                  }`}>
                    <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-70 pointer-events-none" />
                    
                    <div className="relative w-full h-[260px] sm:h-[320px] transition-transform duration-700 hover:scale-105">
                      <Image
                        src={service.image || "/Logo_Siddhivinayak_Engg_-_Copy.jpg-removebg-preview.png"}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        className="object-contain p-4"
                      />
                    </div>

                    <div className="absolute top-5 left-5 z-10">
                      <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#0F172A] text-white shadow-sm flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F58220]"></span>
                        Industrial Service
                      </span>
                    </div>
                  </div>

                  {/* Content Column (lg:col-span-7) */}
                  <div className={`lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between ${
                    isEven ? "lg:order-1" : ""
                  }`}>
                    <div className="space-y-6">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <span className="text-[#F58220] font-black text-xs uppercase tracking-[2px]">
                          Capability #{index + 1}
                        </span>
                        {service.specs && (
                          <span className="text-xs font-bold text-slate-500 bg-white border px-3 py-1 rounded-full">
                            {service.specs.Tolerance ? `Tolerance: ${service.specs.Tolerance}` : "Certified Precision"}
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0F172A] tracking-tight">
                        {service.title}
                      </h3>

                      <div className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        {service.details || service.desc}
                      </div>

                      {/* Key Features List */}
                      {service.features && (
                        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 space-y-3">
                          <h4 className="text-xs font-black uppercase tracking-wider text-[#0F172A] flex items-center gap-2">
                            <CheckCircle size={15} className="text-[#F58220]" />
                            <span>Service Highlights</span>
                          </h4>
                          <ul className="space-y-2.5">
                            {service.features.map((feat, fIdx) => (
                              <li key={fIdx} className="text-slate-700 text-xs sm:text-sm flex items-start gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#F58220] mt-1.5 shrink-0" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Specs Matrix */}
                      {service.specs && (
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {Object.entries(service.specs).map(([key, val]) => (
                            <div key={key} className="bg-white p-3 rounded-xl border border-slate-200">
                              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-0.5">
                                {key}
                              </span>
                              <span className="text-xs font-black text-slate-900 truncate block" title={String(val)}>
                                {String(val)}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="pt-8 mt-6 border-t border-slate-200 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/${service.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0F172A] hover:bg-[#F58220] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-sm group/btn"
                      >
                        <span>Full Specifications</span>
                        <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-orange-50 text-[#0F172A] hover:text-[#F58220] text-xs sm:text-sm font-bold uppercase tracking-wider border border-slate-200 transition-all duration-300"
                      >
                        Request Job Quote
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}