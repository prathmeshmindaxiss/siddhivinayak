"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { servicesData } from "../data/servicesData";

// ✅ Type fix kiya: { images: string[] }
function InlineSlider({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Har 3 second mein photo badlegi
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-full min-h-[250px] sm:min-h-[300px] md:min-h-[400px] flex items-center justify-center">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center justify-center ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {img && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="max-w-full max-h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.12)] md:drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)] p-4"
            />
          )}
        </div>
      ))}
      
      {/* Slider ke niche ke chhote dots */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-[#F58220] scale-125" : "bg-gray-400 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ✅ 2. AAPKA MAIN SERVICES COMPONENT
export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const scaleX = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  });

  const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const revealVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: smoothEase, delay: custom * 0.1 }
    })
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-[#0F172A] text-white selection:bg-[#F58220] selection:text-white pb-[15vh] md:pb-[25vh]"
    >
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 md:h-1.5 bg-gradient-to-r from-[#F58220] to-[#ef4444] z-50 origin-left will-change-transform"
        style={{ scaleX }}
      />


      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-24 relative z-10">
        
        {/* CARDS CONTAINER */}
        <div className="flex flex-col relative w-full">
          {servicesData.map((service, index) => {
            // ✅ FIX: Removed window check. Using CSS variables dynamically to avoid SSR mismatch.
            return (
              <div 
                key={service.slug} 
                className="sticky w-full mb-8 md:mb-24" 
                // ✅ Now Server & Client render the exact same inline style
                style={{ 
                  top: `calc(var(--mobile-offset, 8vh) + ${index * 20}px)`,
                }}
              >
                {/* Embedded style to override variables on larger screens using CSS media queries */}
                <style dangerouslySetInnerHTML={{__html: `
                  @media (min-width: 768px) {
                    div[style*="top: calc(var(--mobile-offset"] {
                      top: calc(12vh + ${index * 35}px) !important;
                    }
                  }
                `}} />
                
                <div className="absolute inset-0 bg-gradient-to-br from-[#F58220]/20 to-transparent blur-2xl md:blur-3xl -z-10 rounded-[2rem] transform translate-y-4 md:translate-y-8 scale-[0.98] opacity-30"></div>

                <motion.div 
                  initial={{ opacity: 0, y: 50, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, ease: smoothEase }}
                  className="w-full bg-white rounded-2xl sm:rounded-[2rem] md:rounded-[3rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] md:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col lg:flex-row border border-slate-200 will-change-transform transform-gpu"
                >
                  
                  {/* LEFT CONTENT */}
                  <div className="w-full lg:w-[50%] p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-between bg-white relative z-10">
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1, duration: 0.6 }}
                      className="flex items-center justify-between mb-8 md:mb-16"
                    >
                      <span className="font-mono text-lg sm:text-xl md:text-2xl font-medium text-slate-400">
                        {(index + 1).toString().padStart(2, '0')}
                        <span className="text-xs sm:text-sm text-slate-300 font-light"> / {servicesData.length.toString().padStart(2, '0')}</span>
                      </span>
                      <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-slate-100 bg-slate-50 text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-500 shadow-sm">
                        Capability
                      </div>
                    </motion.div>
                    
                    <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
                      <div className="overflow-hidden py-1">
                        <motion.h3 custom={1} variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0F172A] leading-[1.1] md:leading-[1.05] will-change-transform">
                          {service.title}
                        </motion.h3>
                      </div>

                      <div className="overflow-hidden">
                        <motion.p custom={2} variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-slate-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-medium max-w-full lg:max-w-[90%] will-change-transform">
                          {String((service as any).description || "Engineered for excellence. We deliver precision solutions tailored to meet the rigorous demands of modern industrial applications.")}
                        </motion.p>
                      </div>
                      
                      <div className="overflow-hidden mt-4 md:mt-6">
                        <motion.div custom={3} variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="will-change-transform">
                          <Link href={`/services/${service.slug}`} className="group relative inline-flex items-center gap-3 sm:gap-4 outline-none w-fit">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-slate-50 border border-slate-100 shadow-sm flex items-center justify-center group-hover:bg-[#F58220] group-hover:border-[#F58220] transition-all duration-500 z-10 relative overflow-hidden">
                               <ArrowUpRight className="text-slate-600 group-hover:text-white transition-colors duration-500 relative z-10 group-hover:scale-110 w-5 h-5 sm:w-6 sm:h-6 md:w-auto md:h-auto" />
                            </div>
                            <span className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-widest text-[#0F172A] group-hover:text-[#F58220] transition-colors duration-500">
                              Explore Now
                            </span>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT IMAGE/SLIDER SECTION */}
                  <div className="w-full lg:w-[50%] h-[250px] sm:h-[300px] md:h-[400px] lg:h-auto lg:min-h-[500px] relative bg-[#F8FAFC] flex items-center justify-center p-4 sm:p-8 overflow-hidden group border-t lg:border-t-0 lg:border-l border-slate-100">
                    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#0F172A_1px,transparent_1px),linear-gradient(to_bottom,#0F172A_1px,transparent_1px)] bg-[size:24px_24px] md:bg-[size:32px_32px]"></div>
                    
                    <motion.div 
                      initial={{ opacity: 0, scale: 1.05 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2, ease: smoothEase }}
                      className="relative w-full h-full z-10 flex items-center justify-center will-change-transform"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        transition={{ duration: 0.5, ease: smoothEase }}
                        className="w-[90%] h-[90%] md:w-[85%] md:h-[85%] lg:w-full lg:h-full relative transform-gpu flex items-center justify-center"
                      >
                        {/* ✅ 3. YAHAN CHECK HOGA */}
                        {(service as any).images && (service as any).images.length > 0 ? (
                          <div className="w-full h-full relative">
                            <InlineSlider images={(service as any).images} />
                          </div>
                        ) : (
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.12)] md:drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)] p-2 md:p-0"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority={index === 0}
                          />
                        )}
                      </motion.div>
                    </motion.div>
                  </div>
                  
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}