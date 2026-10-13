"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect, useCallback } from "react";
import { servicesData } from "../data/servicesData";

// Mini image slider for cards that have multiple images
function InlineSlider({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-full min-h-[240px] sm:min-h-[300px] md:min-h-[400px] flex items-center justify-center">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {img && (
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              fill
              className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.12)] md:drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)] p-4"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          )}
        </div>
      ))}
      
      {images.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
              }}
              aria-label={`Slide photo ${index + 1}`}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "w-6 bg-[#F58220]" : "w-2 bg-gray-400 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Directional slide variants for Left-to-Right / Right-to-Left animation
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 280, damping: 30 },
      opacity: { duration: 0.35 },
      scale: { duration: 0.35 },
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
    scale: 0.96,
    transition: {
      x: { type: "spring", stiffness: 280, damping: 30 },
      opacity: { duration: 0.25 },
      scale: { duration: 0.25 },
    },
  }),
};

const productItems = servicesData.filter((item) => item.type === "product");

export default function Services() {
  const [[currentIndex, direction], setPage] = useState<[number, number]>([0, 0]);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const total = productItems.length;

  const paginate = useCallback((newDirection: number) => {
    setPage(([prev]) => {
      let nextIndex = prev + newDirection;
      if (nextIndex < 0) nextIndex = total - 1;
      if (nextIndex >= total) nextIndex = 0;
      return [nextIndex, newDirection];
    });
  }, [total]);

  // Auto-play shifts after 5 seconds, pauses when hovered (hover kel ki stop zal pahije)
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, [isHovered, currentIndex, paginate]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [paginate]);

  const currentService = productItems[currentIndex];

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-[#0B1121] text-white selection:bg-[#F58220] selection:text-white py-12 sm:py-16 md:py-20 overflow-hidden"
    >
      {/* Background ambient decorative glows & technical grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/4 -right-32 w-[400px] h-[400px] bg-[#F58220]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-32 w-[400px] h-[400px] bg-[#DA291C]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="mb-6 md:mb-10 text-center flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-[1.05]">
            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F58220] via-[#FFA048] to-[#DA291C]">Products</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base max-w-xl mt-2.5 font-normal mx-auto">
            Explore our comprehensive range of high-rigidity tooling, robotic welding fixtures, inspection systems, and custom machining job works.
          </p>
        </div>


        {/* SLIDER WRAPPER (COMPACT WIDTH) */}
        <div 
          className="relative w-full max-w-4xl lg:max-w-5xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          {/* Floating Left & Right Icon Buttons */}
          <button
            onClick={() => paginate(-1)}
            aria-label="Previous capability"
            className="absolute -left-3 sm:-left-4 md:-left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-[#0F172A]/90 hover:bg-[#F58220] text-white border border-white/20 hover:border-[#F58220] shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={() => paginate(1)}
            aria-label="Next capability"
            className="absolute -right-3 sm:-right-4 md:-right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-[#0F172A]/90 hover:bg-[#F58220] text-white border border-white/20 hover:border-[#F58220] shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Glow behind card */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F58220]/25 via-transparent to-transparent blur-3xl -z-10 rounded-[2rem] transform translate-y-4 scale-[0.98] opacity-50" />

          {/* THE CARD (COMPACT CONTAINER - DOES NOT SLIDE) */}
          <div className="w-full bg-white rounded-2xl sm:rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)] md:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col lg:flex-row border border-slate-200">
            
            {/* LEFT CONTENT (STATIC - TEXT DOES NOT SLIDE) */}
            <div className="w-full lg:w-[50%] p-6 sm:p-7 md:p-9 lg:p-10 flex flex-col justify-between bg-white relative z-10 text-slate-900 min-h-[240px] sm:min-h-[270px]">
              <div>
                {/* Title & Description - Static in place with smooth fade */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col gap-3 sm:gap-4"
                  >
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#0F172A] leading-[1.1]">
                      {currentService.title}
                    </h3>

                    <div className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-medium max-w-full lg:max-w-[95%]">
                      {currentService.desc || (currentService as any).description || (
                        "Engineered for excellence. We deliver precision solutions tailored to meet the rigorous demands of modern industrial applications."
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Explore Now Button - Static in place */}
              <div className="mt-6 md:mt-8 pt-1">
                <Link 
                  href={`/services/${currentService.slug}`} 
                  className="inline-flex items-center gap-2.5 sm:gap-3 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#F58220] hover:bg-[#0F172A] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-slate-900/20 transition-all duration-300 hover:scale-[1.02] active:scale-95 group w-fit cursor-pointer"
                >
                  <span>Explore Now</span>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/20 group-hover:bg-white group-hover:text-[#0F172A] flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE / SLIDER SECTION (COMPACT HEIGHT) */}
            <div className="w-full lg:w-[50%] h-[220px] sm:h-[260px] md:h-[320px] lg:h-auto lg:min-h-[360px] relative bg-[#F8FAFC] flex items-center justify-center overflow-hidden border-t lg:border-t-0 lg:border-l border-slate-100">
              {/* Technical Grid Pattern */}
              <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#0F172A_1px,transparent_1px),linear-gradient(to_bottom,#0F172A_1px,transparent_1px)] bg-[size:24px_24px] md:bg-[size:32px_32px] pointer-events-none" />
              
              <div className="relative w-full h-full z-10 flex items-center justify-center overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_e, { offset, velocity }) => {
                      const swipe = Math.abs(offset.x) * velocity.x;
                      if (swipe < -10000 || offset.x < -60) {
                        paginate(1);
                      } else if (swipe > 10000 || offset.x > 60) {
                        paginate(-1);
                      }
                    }}
                    className="w-full h-full p-3 sm:p-6 flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
                  >
                    <div className="w-[88%] h-[88%] md:w-[82%] md:h-[82%] lg:w-full lg:h-full relative transform-gpu flex items-center justify-center transition-transform duration-500 hover:scale-105">
                      {(currentService as any).images && (currentService as any).images.length > 0 ? (
                        <div className="w-full h-full relative">
                          <InlineSlider images={(currentService as any).images} />
                        </div>
                      ) : (
                        <Image
                          src={currentService.image || "/Logo_Siddhivinayak_Engg_-_Copy.jpg-removebg-preview.png"}
                          alt={currentService.title}
                          fill
                          className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.12)] md:drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)] p-2 md:p-6"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority
                        />
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}