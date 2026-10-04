"use client";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cog, Ruler, Monitor, CheckCircle2, Factory, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export default function Infrastructure() {
  const [activeSlide, setActiveSlide] = useState(0);

  // --- 1. EXISTING MACHINES LIST ---
  const machines = [
    { name: "VMC (VL1570)", size: "1500x700x700 Stroke", make: "STM", qty: "01" },
    { name: "M1TR Milling", size: "1000x450x400", make: "MANFORD", qty: "01" },
    { name: "M1TR Milling", size: "1000x450x400", make: "ESTEAM", qty: "01" },
    { name: "Milling Machine", size: "1000x300x350", make: "G. DUFOUR", qty: "01" },
    { name: "Milling Machine", size: "1000x300x300", make: "G. DUFOUR", qty: "01" },
    { name: "Turning Lathe", size: "9 Feet", make: "SHRIKANT", qty: "01" },
    { name: "Turning Lathe", size: "5.25 Feet", make: "PRATHIK", qty: "01" },
    { name: "Surface Grinding", size: "700x500", make: "FAVRETTO", qty: "01" },
    { name: "Bandsaw Machine", size: "Dia 250MM", make: "RAISE", qty: "01" },
    { name: "Tapping Machine", size: "M5-M30", make: "SMART TAP", qty: "01" },
    { name: "Welding (Argon)", size: "400 Amp", make: "SWISS INDIA", qty: "01" },
    { name: "Welding (CO2)", size: "-", make: "KEMPI", qty: "01" },
  ];

  // --- 2. INSTRUMENTS LIST ---
  const instruments = [
    "Surface Table (Luthara) 630x630x85", 
    "Height Gauge (Insize) 0-300mm",
    "Dial Vernier (Insize) 0-200mm", 
    "Dial Vernier (Insize) 0-300mm",
    "Bore Gauge (Insize) 18-35mm", 
    "Bore Gauge (Insize) 35-60mm",
    "Bore Gauge (Insize) 50-160mm", 
    "Micrometers (Mitutoyo) 0-25mm & 25-50mm",
    "Lever/Plunger Dial (Baker) 0-1mm", 
    "Slip Gauge Box (Markvel) 0.1-100mm",
    "Digital Degree Protector (Insize)", 
    "Vernier (Yamayo) 0-600mm"
  ];

  // --- 3. MAIN FACILITY GALLERY ---
  const facilityImages = [
    { src: "/VMC MACHINE.png", label: "VMC Machine" },
    { src: "/M1TR Machine.png", label: "M1TR Milling" },
    { src: "/Milling Machine.png", label: "Universal Milling" },
    { src: "/Lathe Machine.png", label: "Turning Lathe" },
    { src: "/CO2 welding Machine.png", label: "CO2 Welding Setup" },
    { src: "/Tig Welding Machine.png", label: "Argon Welding" },
    { src: "/Bandsaw Machine.png", label: "Bandsaw Cutting" },
    { src: "/Tapping Machine.png", label: "Tapping Machine" },
    { src: "/MACHINE PHOTOS/CO2 WELDING MACHINE.png", label: "CO2 Welding Machine" },
    { src: "/MACHINE PHOTOS/ESTEAM M1TR MACHINE.png", label: "Esteam M1TR Machine" },
    { src: "/MACHINE PHOTOS/LATHE MACHINE 2.png", label: "Lathe Machine 2" },
    { src: "/MACHINE PHOTOS/LATHE MACHINE.png", label: "Lathe Machine" },
    { src: "/MACHINE PHOTOS/SURFACE GRINDING MACHINE.jpg", label: "Surface Grinding" },
    { src: "/MACHINE PHOTOS/TAPPING MACHINE.png", label: "Tapping Machine" }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === facilityImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? facilityImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-[#0b111a] min-h-screen text-slate-200 selection:bg-[#F58220] selection:text-white font-sans overflow-x-hidden relative">
      <Navbar />
      
      {/* --- HERO HEADER --- */}
      <section className="relative pt-32 sm:pt-40 md:pt-48 pb-20 md:pb-28 px-4 sm:px-6 flex flex-col items-center justify-center border-b border-white/10 bg-[#0B1121] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        <div className="absolute top-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[150%] sm:w-[900px] h-[300px] sm:h-[600px] bg-[#F58220]/15 blur-[120px] rounded-full"></div>
           <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#DA291C]/10 blur-[100px] rounded-full"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center max-w-5xl mx-auto"
        >
          <Breadcrumbs items={[{ label: "Infrastructure" }]} />

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F58220] via-amber-400 to-[#DA291C]">Infrastructure</span>
          </h1>
        </motion.div>
      </section>

      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 py-12 md:py-20 space-y-16 md:space-y-32">
        
        {/* --- SECTION 1: FACILITY IMAGES CAROUSEL --- */}
        <section>
            <div className="flex flex-col items-center mb-6 md:mb-8 text-center">
               <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Our Shop Floor</h2>
               <div className="h-1 w-16 sm:w-20 bg-[#F58220] rounded-full mt-3 sm:mt-4"></div>
            </div>

            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden py-10">
               {facilityImages.map((img, i) => {
                  let offset = i - activeSlide;
                  if (offset < -Math.floor(facilityImages.length / 2)) offset += facilityImages.length;
                  if (offset > Math.floor(facilityImages.length / 2)) offset -= facilityImages.length;

                  let x = "0%";
                  let scale = 1;
                  let opacity = 1;
                  let zIndex = 50;

                  if (offset === 0) {
                     x = "0%"; scale = 1; opacity = 1; zIndex = 50;
                  } else if (offset === 1) {
                     x = "40%"; scale = 0.85; opacity = 0.6; zIndex = 40;
                  } else if (offset === -1) {
                     x = "-40%"; scale = 0.85; opacity = 0.6; zIndex = 40;
                  } else if (offset === 2) {
                     x = "70%"; scale = 0.7; opacity = 0.3; zIndex = 30;
                  } else if (offset === -2) {
                     x = "-70%"; scale = 0.7; opacity = 0.3; zIndex = 30;
                  } else {
                     x = offset > 0 ? "100%" : "-100%"; scale = 0.5; opacity = 0; zIndex = 10;
                  }

                  return (
                     <motion.div
                        key={i}
                        animate={{ x, scale, opacity, zIndex }}
                        transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                        onClick={() => setActiveSlide(i)}
                        className={`absolute w-[320px] sm:w-[450px] md:w-[600px] aspect-[4/3] rounded-2xl overflow-hidden bg-[#162235] border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)] cursor-pointer flex flex-col justify-end
                          ${offset === 0 ? "border-[#F58220] shadow-[0_0_30px_rgba(245,130,32,0.15)] ring-1 ring-[#F58220]" : "hover:border-white/30"}
                        `}
                     >
                        <div className="absolute inset-0 w-full h-full bg-[#111a27]/80 p-4">
                            
                            {/* ✅ LOGO KO TOP-LEFT RAKHA HAI */}
                            <div className="absolute top-4 left-4 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/5 backdrop-blur-sm rounded-lg p-1.5 border border-white/10 shadow-sm pointer-events-none">
                               <Image 
                                 src="/Logo_Siddhivinayak_Engg_-_Copy.jpg-removebg-preview.png" 
                                 alt="Company Logo" 
                                 fill 
                                 className="object-contain drop-shadow-md"
                               />
                            </div>

                            <Image 
                              src={img.src} 
                              alt={img.label} 
                              fill 
                              sizes="(max-width: 640px) 80vw, (max-width: 768px) 50vw, 33vw"
                              className="object-contain p-6 pb-16" 
                            />
                        </div>
                        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#05080c] via-transparent to-transparent pointer-events-none flex items-end pb-4 px-6">
                           <div className="flex items-center gap-4">
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-3">
                                   <div className="w-1.5 h-6 bg-[#F58220] rounded-full"></div>
                                   <h3 className="font-bold text-base md:text-2xl text-white tracking-wide truncate">{img.label}</h3>
                                </div>
                              </div>
                           </div>
                        </div>
                     </motion.div>
                  );
               })}
            </div>

            <div className="flex justify-center items-center gap-4 sm:gap-6 mt-2">
              <button onClick={prevSlide} className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border border-white/10 bg-[#141b26] flex items-center justify-center hover:bg-[#F58220] text-slate-300 hover:text-white transition-all hover:border-[#F58220]">
                <ChevronLeft size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </button>
              <button onClick={nextSlide} className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border border-white/10 bg-[#141b26] flex items-center justify-center hover:bg-[#F58220] text-slate-300 hover:text-white transition-all hover:border-[#F58220]">
                <ChevronRight size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </button>
            </div>
        </section>

        {/* --- SECTION 2: MACHINERY & INSPECTION --- */}
        <section className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2 flex flex-col min-w-0 w-full">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
               <div className="p-2 bg-[#F58220]/10 rounded-lg"><Cog className="text-[#F58220] w-5 h-5 sm:w-6 sm:h-6" /></div>
               <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Machinery Arsenal</h2>
            </div>
            <div className="bg-[#111a27] border border-white/10 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl flex-1 w-full">
              <div className="w-full overflow-x-auto custom-scrollbar">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-white/[0.03] border-b border-white/10">
                      <th className="px-4 md:px-6 py-3 md:py-4 text-[10px] md:text-xs font-bold tracking-widest text-slate-300 uppercase whitespace-nowrap">Machine Name</th>
                      <th className="px-4 md:px-6 py-3 md:py-4 text-[10px] md:text-xs font-bold tracking-widest text-slate-300 uppercase whitespace-nowrap">Make</th>
                      <th className="px-4 md:px-6 py-3 md:py-4 text-[10px] md:text-xs font-bold tracking-widest text-slate-300 uppercase whitespace-nowrap">Specs / Size</th>
                      <th className="px-4 md:px-6 py-3 md:py-4 text-[10px] md:text-xs font-bold tracking-widest text-slate-300 uppercase whitespace-nowrap text-right">Qty</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                    {machines.map((m, i) => (
                      <tr key={i} className="hover:bg-white/[0.04] transition-colors group">
                        <td className="px-4 md:px-6 py-3 md:py-4 font-semibold text-white group-hover:text-[#F58220] transition-colors whitespace-nowrap">{m.name}</td>
                        <td className="px-4 md:px-6 py-3 md:py-4 text-slate-400 whitespace-nowrap">{m.make}</td>
                        <td className="px-4 md:px-6 py-3 md:py-4 font-mono text-[10px] md:text-xs text-slate-400 whitespace-nowrap">{m.size}</td>
                        <td className="px-4 md:px-6 py-3 md:py-4 text-right">
                          <span className="inline-flex items-center justify-center bg-white/10 text-white px-2 py-0.5 md:px-2.5 md:py-1 rounded font-mono text-[10px] md:text-xs font-bold">
                            {m.qty}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:space-y-8 flex flex-col">
             <div className="flex-1 bg-gradient-to-br from-[#111a27] to-[#0b111a] border border-white/10 p-5 md:p-6 rounded-xl md:rounded-2xl shadow-xl">
                <div className="flex items-center gap-3 mb-4 md:mb-6 border-b border-white/10 pb-3 md:pb-4">
                  <div className="p-1.5 md:p-2 bg-[#F58220]/10 rounded-lg"><Ruler className="text-[#F58220] w-4 h-4 md:w-5 md:h-5" /></div>
                  <h2 className="text-lg md:text-xl font-bold text-white tracking-tight">Quality & Inspection</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-y-2.5 gap-x-4">
                   {instruments.map((inst, i) => (
                     <div key={i} className="flex items-start gap-2 text-xs md:text-sm text-slate-300 hover:text-white transition-colors">
                        <CheckCircle2 className="text-[#F58220] mt-0.5 shrink-0 w-3.5 h-3.5 md:w-4 md:h-4" />
                        <span className="leading-tight">{inst}</span>
                     </div>
                   ))}
                </div>
             </div>

             <div className="bg-[#111a27] border border-white/10 p-5 md:p-6 rounded-xl md:rounded-2xl shadow-xl">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="p-1.5 md:p-2 bg-blue-500/10 rounded-lg"><Monitor className="text-blue-400 w-4 h-4 md:w-5 md:h-5" /></div>
                  <h3 className="text-base md:text-lg font-bold text-white tracking-tight">Design & Engineering</h3>
                </div>
                <div className="flex flex-wrap sm:flex-nowrap gap-2 md:gap-3">
                   {["AutoCAD", "CATIA", "SolidWorks"].map(sw => (
                      <div key={sw} className="flex-1 min-w-[30%] bg-white/5 border border-white/10 p-2 md:p-3 rounded-lg text-center hover:bg-white/10 transition-colors">
                          <span className="text-[10px] md:text-xs font-bold text-slate-200 tracking-wider">{sw}</span>
                      </div>
                   ))}
                </div>
             </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}