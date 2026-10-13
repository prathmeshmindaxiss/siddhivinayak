"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Ruler, 
  Layers, 
  Sliders, 
  Award, 
  Sparkles,
  PhoneCall,
  CheckCircle,
  Cpu
} from "lucide-react";
import { servicesData } from "../data/servicesData";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Filter only products
  const allProducts = servicesData.filter((item) => item.type === "product");

  // Category definitions for product filtering
  const categories = [
    { id: "all", label: "All Products", count: allProducts.length },
    { 
      id: "fixtures", 
      label: "Fixtures & Tooling", 
      count: allProducts.filter((p) => p.slug.includes("fixture")).length 
    },
    { 
      id: "precision", 
      label: "Gauges & Machine Parts", 
      count: allProducts.filter((p) => !p.slug.includes("fixture")).length 
    },
  ];

  const filteredProducts = allProducts.filter((item) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "fixtures") return item.slug.includes("fixture");
    if (selectedCategory === "precision") return !item.slug.includes("fixture");
    return true;
  });

  return (
    <main className="bg-slate-50 min-h-screen text-slate-900 selection:bg-[#F58220]/20 overflow-x-hidden">
      <Navbar />

      {/* --- 1. HERO HEADER (MATCHING GALLERY & INFRASTRUCTURE STYLE) --- */}
      <section className="pt-32 sm:pt-40 md:pt-48 pb-20 md:pb-28 px-4 sm:px-6 lg:px-12 relative bg-[#0B1121] text-white overflow-hidden border-b border-white/10">
        {/* Ambient Glows & Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/4 -right-20 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#F58220]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#DA291C]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
          <Breadcrumbs items={[{ label: "Products" }]} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Our Engineered{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F58220] via-[#FFA048] to-[#DA291C]">
                Products
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* --- 2. CATEGORY FILTER TABS (LIKE GALLERY PAGE) --- */}
      <section className="py-6 sm:py-8 bg-slate-50 border-b border-slate-200 sticky top-20 sm:top-22 md:top-24 z-30 backdrop-blur-xl bg-slate-50/90 shadow-sm">
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-center gap-2.5 sm:gap-4 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2.5 shrink-0 border ${
                    isSelected 
                      ? "bg-[#0F172A] text-white border-[#0F172A] shadow-md shadow-slate-900/10 scale-105" 
                      : "bg-white text-slate-600 border-slate-200 hover:border-[#F58220] hover:text-[#F58220]"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-black ${
                    isSelected ? "bg-[#F58220] text-white" : "bg-slate-100 text-slate-500"
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- 3. PRODUCTS GRID --- */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-[95rem] mx-auto">
          {/* Cards Grid */}
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          >
            <AnimatePresence>
              {filteredProducts.map((product, index) => (
                <motion.div
                  layout
                  key={product.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group bg-slate-50 border border-slate-200/90 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-[#F58220]/10 hover:border-[#F58220]/50 transition-all duration-500 flex flex-col will-change-transform"
                >
                  {/* Image Display */}
                  <Link 
                    href={`/${product.slug}`}
                    className="block relative h-64 sm:h-72 w-full bg-white overflow-hidden p-6 border-b border-slate-100"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-60 pointer-events-none" />

                    <div className="relative w-full h-full transition-transform duration-700 ease-out group-hover:scale-105">
                      <Image
                        src={product.image || "/Logo_Siddhivinayak_Engg_-_Copy.jpg-removebg-preview.png"}
                        alt={product.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain p-2"
                      />
                    </div>

                    {/* Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#0F172A] border border-slate-200 shadow-sm flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F58220]"></span>
                        Product
                      </span>
                    </div>
                  </Link>

                  {/* Card Content */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <Link href={`/${product.slug}`}>
                        <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] group-hover:text-[#F58220] transition-colors mb-4 leading-snug">
                          {product.title}
                        </h3>
                      </Link>
                    </div>

                    {/* Actions */}
                    <div className="space-y-2.5 pt-4 border-t border-slate-200/70">
                      <Link
                        href={`/${product.slug}`}
                        className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-[#0F172A] text-white hover:bg-[#F58220] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-sm group/btn"
                      >
                        <span>Technical Specs</span>
                        <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>

                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-xl bg-transparent hover:bg-orange-50 text-slate-600 hover:text-[#F58220] text-xs font-bold uppercase tracking-wider border border-slate-200 transition-all"
                      >
                        Request Quote
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
