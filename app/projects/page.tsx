"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, Factory, Cog, ArrowRight } from "lucide-react";

export default function Projects() {
  
  // --- SELECTED CORE PROJECTS BASED ON YOUR NEW PHOTOS ---
  const projectCategories = [
    {
      id: "01",
      title: "Jigs & Fixtures Development",
      subtitle: "BIW, Welding & Inspection",
      description: "Design and manufacturing of high-accuracy BIW Fixtures, MIG Welding Fixtures, and Inspection Gauges. We ensure precise alignment and repeatability for automotive and industrial applications.",
      // Nayi photo add ki gayi hai
      image: "/New some photos/WELDING FIXTURES.png", 
      tags: ["BIW Fixtures", "Welding Fixtures", "Checking Gauges", "Assembly Fixtures"],
      icon: <Zap size={24} className="text-white" />,
      color: "bg-[#F58220]"
    },
    {
      id: "02",
      title: "Precision CNC & VMC Machining",
      subtitle: "Job Works & Components",
      description: "Utilizing our advanced STM VMC (1500x700x700) and high-precision milling machines for complex job works. We handle MS, Alloy Steel, and aluminum components with tight tolerances.",
      // Nayi photo add ki gayi hai (Mixer Rotors represent complex VMC machining well)
      image: "/New some photos/MIXER ROTORS.png",
      tags: ["VMC Job Work", "CNC Turning", "Precision Milling", "Complex Parts"],
      icon: <Cog size={24} className="text-white" />,
      color: "bg-[#DA291C]"
    },
    {
      id: "03",
      title: "Specialized Machinery Parts",
      subtitle: "Poultry & Food Processing",
      description: "Manufacturing of critical spare parts and assemblies for Poultry Processing Machines and Food Processing Plants. We understand the hygiene and material requirements for these industries.",
      // Nayi photo add ki gayi hai
      image: "/New some photos/HSS BLADES.png",
      tags: ["Poultry Parts", "Food Processing Spares", "Conveyor Parts", "SS Components"],
      icon: <Factory size={24} className="text-white" />,
      color: "bg-[#F58220]"
    }
  ];

  return (
    <main className="bg-[#1B2A41] min-h-screen text-white">
      <Navbar />
      
      {/* --- HERO HEADER --- */}
      <section className="pt-32 sm:pt-40 md:pt-48 pb-20 md:pb-28 px-4 sm:px-6 lg:px-12 text-center bg-[#0B1121] relative overflow-hidden border-b border-white/10">
        {/* Ambient Glows & Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/4 -right-20 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#F58220]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#DA291C]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
          <Breadcrumbs items={[{ label: "Projects" }]} />

          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 md:mb-8 leading-[1.1]"
          >
            Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F58220] via-amber-400 to-[#DA291C]">Projects</span> & Tooling
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-300 max-w-3xl mx-auto text-base sm:text-lg md:text-xl font-medium leading-relaxed mb-8 md:mb-10 px-2"
          >
            Showcasing our delivered engineering projects in <strong className="text-white">BIW Welding Fixtures, CNC/VMC Machined Rotors, and High-Precision Industrial Spares</strong> for leading tier-1 clients.
          </motion.p>

          {/* Quick Metrics Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-3xl mx-auto mb-8"
          >
            {["100+ Completed Projects", "Zero Tolerance Defect Policy", "Custom SPM Assemblies", "Bhosari MIDC Shopfloor"].map((tag, i) => (
              <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold rounded-lg">
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full sm:w-auto"
          >
            <a
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#F58220] to-[#E25C1D] text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:shadow-[0_10px_25px_rgba(245,130,32,0.4)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
            >
              Request Custom Quote <ArrowRight size={16} />
            </a>
            <a
              href="/infrastructure"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-widest rounded-xl border border-white/20 backdrop-blur-md hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
            >
              View Machinery
            </a>
          </motion.div>
        </div>
      </section>

      {/* --- PROJECT LIST Section --- */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="space-y-32">
          {projectCategories.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              // Alternating layout: Even indexes left-to-right, Odd indexes right-to-left
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center group`}
            >
              
              {/* IMAGE SIDE */}
              <div className="w-full lg:w-3/5 relative">
                <div className="relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl z-10">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay */}
                  <div className={`absolute inset-0 ${project.color} opacity-10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A41] via-transparent to-transparent opacity-60"></div>
                </div>
                
                {/* Decorative Back Element */}
                <div className={`absolute top-8 ${index % 2 === 1 ? 'left-8' : 'right-8'} w-full h-full border-2 ${project.color === 'bg-[#F58220]' ? 'border-[#F58220]/30' : 'border-[#DA291C]/30'} rounded-2xl -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500`}></div>
              </div>

              {/* CONTENT SIDE */}
              <div className="w-full lg:w-2/5 relative">
                 {/* Big Faded ID Number */}
                 <span className="absolute -top-20 left-0 text-9xl font-bold text-white/5 z-0 select-none font-mono">
                   {project.id}
                 </span>

                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                       <div className={`p-3 rounded-lg shadow-lg ${project.color} transform -rotate-6 group-hover:rotate-0 transition-transform duration-300`}>
                         {project.icon}
                       </div>
                       <span className="text-[#F58220] font-bold uppercase tracking-[2px] text-sm">
                         {project.subtitle}
                       </span>
                    </div>
                    
                    <h2 className="text-4xl font-bold mb-6 uppercase tracking-wide leading-tight">
                      {project.title}
                    </h2>
                    
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3 mb-10">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-sm text-xs text-gray-300 uppercase tracking-wider font-bold">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-[#F58220] font-bold uppercase tracking-widest text-sm group/btn cursor-pointer">
                      Capabilities Shown <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                    </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}