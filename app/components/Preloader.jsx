"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Hydration error se bachne ke liye
    
    // Check karein ki kya is session mein preloader pehle chal chuka hai?
    const hasLoaded = sessionStorage.getItem("sv-preloader-loaded");

    if (hasLoaded) {
      // Agar pehle chal chuka hai, toh sidha hide kar do
      setIsLoading(false);
      return;
    }

    // Agar pehli baar aaye hain, toh scroll band karein aur timer start karein
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev < 100) {
          return prev + 2; 
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 25); 

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "auto";
    };
  }, []);

  // 100% hone par hide karna aur memory (sessionStorage) me save karna
  useEffect(() => {
    if (counter === 100) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = "auto";
        // Session storage mein save kar do taaki dubara na chale
        sessionStorage.setItem("sv-preloader-loaded", "true");
      }, 500); 
      
      return () => clearTimeout(timer);
    }
  }, [counter]);

  // Jab tak component mount na ho jaye (server par), tab tak kuch mat dikhao
  if (!isMounted) return null;

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loader"
          /* --- EXIT ANIMATION: SHUTTER EFFECT --- */
          exit={{ y: "-100%" }} 
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} 
          className="fixed inset-0 z-[9999] bg-[#0B1121] flex flex-col items-center justify-center"
        >
          
          {/* 1. LOGO CONTAINER */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5 }}
             className="relative mb-8 flex flex-col items-center"
          >
             {/* Glowing Effect behind Logo */}
             <div className="absolute inset-0 bg-[#F58220] blur-[60px] opacity-20 rounded-full w-32 h-32"></div>
             
             <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4">
                <Image 
                  src="/Logo_Siddhivinayak_Engg_-_Copy.jpg-removebg-preview.png"
                  alt="Siddhivinayak Logo"
                  fill
                  className="object-contain"
                  priority
                />
             </div>

             <h1 className="text-2xl md:text-4xl font-black text-white tracking-[4px] text-center">
                Siddhivinayak
             </h1>
          </motion.div>

          {/* 2. LOADING BAR & COUNTER */}
          <div className="w-[250px] md:w-[400px] flex flex-col gap-2">
             
             {/* Progress Bar Container */}
             <div className="w-full h-[3px] bg-slate-800 rounded-full overflow-hidden relative">
                {/* Orange Moving Bar */}
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: `${counter}%` }}
                  transition={{ ease: "linear", duration: 0.1 }}
                  className="h-full bg-[#F58220] shadow-[0_0_15px_#F58220]"
                />
             </div>

             {/* Percentage Text (Right Aligned) */}
             <div className="flex justify-between items-center mt-1">
                <span className="text-xs text-slate-500 font-mono uppercase tracking-widest">System Loading</span>
                <span className="text-lg font-bold text-white font-mono">{counter}%</span>
             </div>

          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}