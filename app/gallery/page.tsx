"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Filter,
  Eye,
  CheckCircle2,
  Layers
} from "lucide-react";

// --- GALLERY DATA ITEMS ---
interface GalleryItem {
  id: number;
  title: string;
  category: "Product Images" | "Machinery";
  image: string;
  desc: string;
}

const galleryItems: GalleryItem[] = [
  // ==========================================
  // --- 1. PRODUCT IMAGES (6 MAIN CATALOG PRODUCTS) ---
  // ==========================================
  {
    id: 1,
    title: "Spot Welding Fixture",
    category: "Product Images",
    image: "/New some photos/SOPT WELDING FIXTURE.png",
    desc: "Precision clamped spot welding fixture engineered for automotive body panels with zero thermal flex."
  },
  {
    id: 2,
    title: "Heavy-Duty Welding Fixture",
    category: "Product Images",
    image: "/New some photos/WELDING FIXTURES.png",
    desc: "Rigid high-capacity MIG welding workstation with modular pneumatic clamping."
  },
  {
    id: 3,
    title: "Industrial Welding Tooling",
    category: "Product Images",
    image: "/New some photos/WELDING FIXTURE 1.png",
    desc: "Robust customized welding fixture with quick-toggle clamps and grounding connections."
  },
  {
    id: 4,
    title: "CMM Checking & Inspection Fixture",
    category: "Product Images",
    image: "/New some photos/TOOLS (2).png",
    desc: "GD&T compliant inspection fixture equipped with dial indicators and Go/No-Go pins."
  },
  {
    id: 5,
    title: "Component Verification Tool",
    category: "Product Images",
    image: "/New some photos/TOOLS (3).png",
    desc: "Metrology-certified inspection tooling with sub-micron wear-resistant contact surfaces."
  },
  {
    id: 6,
    title: "Geo & Re-Spot BIW Fixture",
    category: "Product Images",
    image: "/New some photos/WELDING FIXTURES (2).png",
    desc: "Tier-1 automotive framing station built to strict OEM geometric tolerances."
  },
  {
    id: 7,
    title: "Automotive BIW Assembly Fixture",
    category: "Product Images",
    image: "/New some photos/WELDING FIXTURES (3).png",
    desc: "Heavy-rigidity fixture designed for robotic resistance and arc welding lines."
  },
  {
    id: 8,
    title: "Modular Framing Fixture",
    category: "Product Images",
    image: "/New some photos/WELDING FIXTURES (4).png",
    desc: "Shim-adjusted precision framing fixture ensuring exact panel repeatability."
  },
  {
    id: 9,
    title: "Poka-Yoke Assembly Fixture",
    category: "Product Images",
    image: "/New some photos/FIXTURES.png",
    desc: "Mistake-proof assembly fixture physically preventing incorrect part orientations."
  },
  {
    id: 10,
    title: "Precision Dimensional Gauges",
    category: "Product Images",
    image: "/MACHINE PHOTOS/gauges.png",
    desc: "Hardened OHNS custom gauges for rapid shop-floor multi-parameter quality verification."
  },
  {
    id: 11,
    title: "Precision Machine Spares & Shafts",
    category: "Product Images",
    image: "/whatsapp folder/WhatsApp Image 2026-02-10 at 2.58.51 PM.png",
    desc: "Bespoke manufacturing of critical machinery spares, heavy-duty shafts, and complex mechanical components."
  },
  {
    id: 12,
    title: "High-Precision Machine Components",
    category: "Product Images",
    image: "/whatsapp folder/WhatsApp Image 2026-02-10 at 2.58.50 PM (1).png",
    desc: "Precision ground and CNC machined parts built to exacting dimensional tolerances."
  },
  {
    id: 13,
    title: "Precision Hardened Locating Pins",
    category: "Product Images",
    image: "/New some photos/PINS.png",
    desc: "Centerless-ground locating and dowel pins with mirror surface finishes."
  },
  {
    id: 14,
    title: "Stainless Steel Precision Flanges",
    category: "Product Images",
    image: "/New some photos/SS FLANGES.png",
    desc: "SS304/316 precision CNC turned and bored flanges for high-pressure systems."
  },
  {
    id: 15,
    title: "Special Spiral Bevel Gear",
    category: "Product Images",
    image: "/New some photos/SPECIAL GEAR.png",
    desc: "High-grade alloy steel spiral bevel gear machined with micron-level tooth profiles."
  },
  {
    id: 16,
    title: "Spur & Helical Gear Assembly",
    category: "Product Images",
    image: "/New some photos/SPECIAL GEARS (3).png",
    desc: "Induction-hardened precision gear set engineered for silent, high-efficiency power transmission."
  },

  // ==========================================
  // --- 2. MACHINERY ---
  // ==========================================
  {
    id: 49,
    title: "STM VMC Machining Center (VL1570)",
    category: "Machinery",
    image: "/VMC MACHINE.png",
    desc: "High-speed 1500x700x700mm travel vertical machining center powering our precision operations."
  },
  {
    id: 50,
    title: "Manford M1TR Turret Milling",
    category: "Machinery",
    image: "/M1TR Machine.png",
    desc: "Rigid ram-turret milling machine capable of multi-angle heavy face and end milling."
  },
  {
    id: 51,
    title: "Esteam M1TR Milling Machine",
    category: "Machinery",
    image: "/MACHINE PHOTOS/ESTEAM M1TR MACHINE.png",
    desc: "Precision 1000x450x400 stroke Esteam turret milling machine for intricate toolroom milling."
  },
  {
    id: 52,
    title: "Universal Milling Machine",
    category: "Machinery",
    image: "/Milling Machine.png",
    desc: "High-torque horizontal and vertical milling capability for heavy toolroom setups."
  },
  {
    id: 53,
    title: "G. Dufour Universal Milling",
    category: "Machinery",
    image: "/Milling Machine (2).png",
    desc: "Heavy-duty 1000x300x350 French G. Dufour milling machine for tough alloy component slotting."
  },
  {
    id: 54,
    title: "Heavy Shrikant Turning Lathe (9 Feet)",
    category: "Machinery",
    image: "/Lathe Machine.png",
    desc: "9-foot heavy-duty turning lathe handling large diameter shafts, rolls, and flanges."
  },
  {
    id: 55,
    title: "Prathik Precision Turning Lathe (5.25 Feet)",
    category: "Machinery",
    image: "/Lathe Machine (2).png",
    desc: "Precision medium turning lathe for high-tolerance shaft threading and boring operations."
  },
  {
    id: 56,
    title: "Favretto Surface Grinding Machine",
    category: "Machinery",
    image: "/MACHINE PHOTOS/SURFACE GRINDING MACHINE.jpg",
    desc: "700x500mm high-precision surface grinder ensuring mirror-flat planar finishes."
  },
  {
    id: 57,
    title: "Raise Heavy Bandsaw Cutting Machine",
    category: "Machinery",
    image: "/Bandsaw Machine.png",
    desc: "Heavy-duty 250mm diameter capacity bandsaw machine for clean billet and raw stock cuts."
  },
  {
    id: 58,
    title: "Smart Tap Precision Tapping Machine",
    category: "Machinery",
    image: "/Tapping Machine.png",
    desc: "Articulated electric tapping arm handling M5 to M30 thread sizes with zero tap breakage."
  },
  {
    id: 59,
    title: "Kempi CO2 MIG Welding Station",
    category: "Machinery",
    image: "/CO2 welding Machine.png",
    desc: "Advanced pulsed-arc welding workstation delivering spatter-free, deep-penetration joints."
  },
  {
    id: 60,
    title: "Swiss India Argon TIG Welding Station",
    category: "Machinery",
    image: "/Tig Welding Machine.png",
    desc: "400 Amp high-frequency argon TIG welding unit for stainless steel and aluminum joints."
  },
  {
    id: 61,
    title: "Custom SPM Machinery Assembly",
    category: "Machinery",
    image: "/New some photos/SPM Machine.png",
    desc: "Bespoke Special Purpose Machine integrated with hydraulic power pack and PLC logic."
  },
  {
    id: 62,
    title: "Hydraulic Multi-Station SPM Station",
    category: "Machinery",
    image: "/New some photos/SPM (2).png",
    desc: "Dedicated automated hydraulic pressing and assembly SPM fixture line."
  },
  {
    id: 63,
    title: "Automated Special Purpose SPM Machine",
    category: "Machinery",
    image: "/New some photos/SPM Machines.png",
    desc: "Specialized turnkey manufacturing machine built for high-throughput component drilling."
  },
  {
    id: 64,
    title: "Industrial Turnkey SPM Unit",
    category: "Machinery",
    image: "/New some photos/SPM Machines (2).png",
    desc: "Custom automated machine line engineered for high-cycle production and testing."
  }
];

const categories = [
  { id: "Product Images", label: "Product Images" },
  { id: "Machinery", label: "Machinery" }
] as const;

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Product Images");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Filtered Items
  const filteredItems = galleryItems.filter(item => item.category === selectedCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;

      if (e.key === "Escape") {
        setActiveImageIndex(null);
      } else if (e.key === "ArrowLeft") {
        setActiveImageIndex(prev => 
          prev === null ? null : (prev === 0 ? filteredItems.length - 1 : prev - 1)
        );
      } else if (e.key === "ArrowRight") {
        setActiveImageIndex(prev => 
          prev === null ? null : (prev === filteredItems.length - 1 ? 0 : prev + 1)
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex, filteredItems.length]);

  // Lock background scroll when lightbox is open
  useEffect(() => {
    if (activeImageIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeImageIndex]);

  const activeItem = activeImageIndex !== null ? filteredItems[activeImageIndex] : null;

  return (
    <main className="bg-white min-h-screen text-slate-900 selection:bg-[#F58220]/20 overflow-x-hidden">
      <Navbar />

      {/* --- 1. HERO HEADER --- */}
      <section className="pt-32 sm:pt-40 md:pt-48 pb-20 md:pb-28 px-4 sm:px-6 lg:px-12 relative bg-[#0B1121] text-white overflow-hidden border-b border-white/10">
        {/* Ambient Glows & Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/4 -right-20 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#F58220]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#DA291C]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
          <Breadcrumbs items={[{ label: "Gallery" }]} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white uppercase">
              Industrial{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F58220] via-[#FFA048] to-[#DA291C]">
                Gallery
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* --- 2. CATEGORY FILTER TABS --- */}
      <section className="py-8 md:py-10 bg-slate-50 border-b border-slate-200 sticky top-20 sm:top-22 md:top-24 z-30 backdrop-blur-xl bg-slate-50/90 shadow-sm">
        <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-center gap-3 sm:gap-4 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const count = galleryItems.filter(item => item.category === cat.id).length;
              const isSelected = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setActiveImageIndex(null);
                  }}
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
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- 3. PHOTO GRID GALLERY --- */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-[95rem] mx-auto">
          {/* Section Summary Header */}
          <div className="flex flex-col items-center text-center gap-2 mb-10 pb-6 border-b border-slate-200">
            <span className="text-[#F58220] font-bold text-xs uppercase tracking-[3px] block mb-1">
              Portfolio Showcase
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-[#0F172A] tracking-tight">
              {selectedCategory}
            </h2>
            <p className="text-slate-500 font-bold text-sm mt-1">
              Showing <span className="text-[#0F172A]">{filteredItems.length}</span> verified artifacts
            </p>
          </div>

          {/* Cards Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setActiveImageIndex(index)}
                  className="group cursor-pointer bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-[#F58220]/10 hover:border-[#F58220]/50 transition-all duration-500 overflow-hidden flex flex-col will-change-transform"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] w-full bg-slate-50 overflow-hidden p-6 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-60 pointer-events-none" />

                    <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-contain"
                      />
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/90 backdrop-blur-md text-[#0F172A] border border-slate-200 shadow-sm">
                        {item.category}
                      </span>
                    </div>

                    {/* Hover Zoom Icon Pill */}
                    <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <div className="w-10 h-10 rounded-full bg-[#0F172A] text-white flex items-center justify-center shadow-lg group-hover:bg-[#F58220] transition-colors">
                        <Maximize2 size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Meta Text - Image with Name Only */}
                  <div className="p-4 sm:p-5 flex items-center justify-between bg-white border-t border-slate-100">
                    <h3 className="font-black text-[#0F172A] text-sm sm:text-base uppercase tracking-tight group-hover:text-[#F58220] transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-[#F58220] text-slate-400 group-hover:text-white flex items-center justify-center transition-colors shrink-0 ml-2 shadow-sm">
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* --- 4. LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0B1121]/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-6 md:p-10 select-none"
            onClick={() => setActiveImageIndex(null)}
          >
            {/* Top Toolbar */}
            <div 
              className="w-full max-w-6xl flex items-center justify-between text-white z-20 pb-4 border-b border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <span className="text-[#F58220] font-black text-xs uppercase tracking-[3px] block">
                  {activeItem.category}
                </span>
                <h3 className="text-lg sm:text-2xl font-black uppercase text-white tracking-tight">
                  {activeItem.title}
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest hidden sm:inline-block">
                  {(activeImageIndex ?? 0) + 1} / {filteredItems.length}
                </span>
                <button
                  onClick={() => setActiveImageIndex(null)}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-[#F58220] text-white flex items-center justify-center transition-colors border border-white/15"
                  aria-label="Close Preview"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Middle Main Preview */}
            <div 
              className="relative w-full max-w-5xl h-[55vh] sm:h-[65vh] md:h-[70vh] flex items-center justify-center my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full p-4 flex items-center justify-center">
                <Image
                  src={activeItem.image}
                  alt={activeItem.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex(prev => 
                    prev === null ? null : (prev === 0 ? filteredItems.length - 1 : prev - 1)
                  );
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-[#F58220] text-white flex items-center justify-center transition-all duration-300 border border-white/20 backdrop-blur-md shadow-xl"
                aria-label="Previous Image"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex(prev => 
                    prev === null ? null : (prev === filteredItems.length - 1 ? 0 : prev + 1)
                  );
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-[#F58220] text-white flex items-center justify-center transition-all duration-300 border border-white/20 backdrop-blur-md shadow-xl"
                aria-label="Next Image"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Bottom Caption & Controls */}
            <div 
              className="w-full max-w-4xl text-center pt-4 border-t border-white/10 z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-4">
                {activeItem.desc}
              </p>
              <div className="flex items-center justify-center gap-3">
                <Link
                  href="/contact"
                  onClick={() => setActiveImageIndex(null)}
                  className="px-6 py-2.5 rounded-full bg-[#F58220] hover:bg-white text-white hover:text-[#0F172A] font-black text-xs uppercase tracking-widest transition-all shadow-lg flex items-center gap-2"
                >
                  Inquire For This Product <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- 5. BOTTOM CTA SECTION --- */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-12 bg-slate-900 text-white relative overflow-hidden border-t-4 border-[#F58220]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#F58220]/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="text-[#F58220] font-bold text-xs uppercase tracking-[4px] block mb-4">
            Bespoke Engineering Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
            Need a Custom Fixture, SPM, or Precision Part?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Share your CAD 3D models or component blueprints with our engineering team. We deliver rapid feasibility, design, and turnkey manufacturing quotes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-[#F58220] hover:bg-white text-white hover:text-[#0F172A] font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-xl shadow-orange-950/20 flex items-center justify-center gap-2"
            >
              Request Engineering Quote <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all border border-white/15 flex items-center justify-center gap-2"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
