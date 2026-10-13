"use client";

import { servicesData } from "../data/servicesData";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Breadcrumbs from "./Breadcrumbs";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, ArrowLeft, Phone, Ruler } from "lucide-react";
import { motion } from "framer-motion";

export default function ServiceDetailClient({ slug }: { slug: string }) {
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <main className="bg-slate-50 min-h-screen">
        <Navbar />
        <div className="pt-48 pb-24 text-center">
          <h1 className="text-3xl font-black text-slate-900 mb-4">Item Not Found</h1>
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F58220] text-white font-bold uppercase text-xs"
          >
            <ArrowLeft size={16} /> Back to Services
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const isProduct = service.type === "product";
  const parentLabel = isProduct ? "Products" : "Services";
  const parentHref = isProduct ? "/products" : "/services";

  return (
    <main className="bg-slate-50 min-h-screen text-slate-900 selection:bg-[#F58220]/20 overflow-x-hidden">
      <Navbar />

      {/* --- HERO HEADER --- */}
      <section className="pt-32 sm:pt-40 md:pt-48 pb-16 md:pb-24 bg-[#0B1121] text-white relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#F58220]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <Breadcrumbs 
              items={[
                { label: parentLabel, href: parentHref }, 
                { label: service.title }
              ]} 
              className="!mb-0" 
            />
            
            <Link
              href={parentHref}
              className="inline-flex items-center gap-2 text-slate-300 hover:text-[#F58220] font-bold uppercase text-xs tracking-widest transition-colors"
            >
              <ArrowLeft size={16} /> Back to {parentLabel}
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-6 sm:mt-8"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
              {service.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* --- MAIN DETAILS SECTION --- */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* LEFT: IMAGE & SPECS TABLE (lg:col-span-6) */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-md relative min-h-[380px] sm:min-h-[440px] flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-70 pointer-events-none" />
              <div className="relative w-full h-[320px] sm:h-[380px]">
                <Image 
                  src={service.image || "/Logo_Siddhivinayak_Engg_-_Copy.jpg-removebg-preview.png"} 
                  alt={service.title} 
                  fill 
                  className="object-contain p-4 transition-all duration-500" 
                  priority
                />
              </div>
            </motion.div>

            {/* Technical Specifications */}
            {service.specs && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
                <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-[#0F172A] mb-4 flex items-center gap-2">
                  <Ruler className="text-[#F58220]" size={18} />
                  <span>Technical Specifications</span>
                </h3>
                <div className="divide-y divide-slate-100">
                  {Object.entries(service.specs).map(([key, value]) => (
                    <div key={key} className="py-3 flex justify-between text-sm">
                      <span className="font-bold text-slate-500">{key}</span>
                      <span className="font-black text-[#0F172A] text-right">{String(value)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: OVERVIEW & FEATURES (lg:col-span-6) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm space-y-6">
              <span className="text-[#F58220] font-black text-xs uppercase tracking-[2.5px] block">
                Technical Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] leading-snug">
                {service.title}
              </h2>
              
              <div className="text-slate-600 text-base sm:text-lg leading-relaxed space-y-4">
                {service.details || service.desc}
              </div>

              {/* Key Features Box */}
              <div className="bg-orange-50/70 border border-orange-200/70 p-6 sm:p-8 rounded-2xl space-y-4">
                <h3 className="font-black text-sm uppercase tracking-wider text-[#0F172A] flex items-center gap-2">
                  <CheckCircle className="text-[#F58220]" size={18} /> 
                  <span>Key Features &amp; Standards</span>
                </h3>
                <ul className="space-y-3">
                  {service.features?.map((f, i) => (
                    <li key={i} className="text-slate-700 text-sm flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#F58220] rounded-full mt-2 shrink-0"></span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0F172A] hover:bg-[#F58220] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-md group"
                >
                  <span>Request Custom Quote</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>

                <a 
                  href="tel:+917776965955"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 border border-slate-300 hover:border-[#F58220] text-[#0F172A] hover:text-[#F58220] font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all"
                >
                  <Phone size={16} />
                  <span>Call: +91 77769 65955</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
