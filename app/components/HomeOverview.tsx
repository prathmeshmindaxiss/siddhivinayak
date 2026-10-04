"use client";
import { motion } from "framer-motion";
import { Target, CheckCircle2, Factory, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function HomeOverview() {
  const coreAreas = [
    "Welding Fixtures, Inspection Fixtures & BIW Fixtures",
    "Machine Parts & Precision Job Works",
    "Poultry & Food Processing Machinery Parts",
    "Assembly parts for Capital Equipment"
  ];

  return (
    <section className="relative py-24 bg-white text-[#1B2A41]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left: Company Overview & Vision (Brief) */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
             <span className="text-[#F58220] font-bold text-xs tracking-[4px] uppercase block mb-4">
               Company Profile
             </span>
             <h2 className="text-4xl font-bold uppercase tracking-tighter mb-6 leading-none">
               Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1B2A41] to-gray-500">Excellence</span>
             </h2>
             <p className="text-gray-600 leading-relaxed mb-6 text-lg">
               Established in <strong>2016</strong>, Siddhivinayak Engineering is a premier provider of Jigs, Fixtures, and Precision Components. Our unit is located in the **Bhosari Industrial Area, Pune**.
             </p>
             <p className="text-gray-600 leading-relaxed mb-8">
               Our core focus relies on customer satisfaction. We strive for excellence in every step of the process from <span className="text-[#DA291C] font-bold">Concept to Service</span>.
             </p>

             <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#F58220]">
                <h4 className="font-bold text-[#1B2A41] flex items-center gap-2 mb-2"><Target size={20} className="text-[#F58220]"/> Our Vision</h4>
                <p className="text-sm text-gray-500 italic">
                  "To become a worldwide engineering solutions providing company. To increase our customer's productivity by developing & implementing powerful Engineering solutions."
                </p>
             </div>
          </motion.div>

          {/* Right: Core Area & Quick Links */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
             <div className="bg-[#1B2A41] p-10 rounded-2xl text-white relative overflow-hidden">
                {/* Decorative Icon */}
                <Factory className="absolute top-[-20px] right-[-20px] w-40 h-40 text-white opacity-5" />
                
                <h3 className="text-2xl font-bold uppercase tracking-widest mb-8 text-[#F58220]">Core Areas</h3>
                <ul className="space-y-4 mb-10">
                   {coreAreas.map((area, i) => (
                     <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="text-[#DA291C] shrink-0 mt-1" size={18} />
                        <span className="text-gray-300 text-sm font-medium">{area}</span>
                     </li>
                   ))}
                </ul>

                <div className="border-t border-white/10 pt-6">
                   <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Quick Highlights</h4>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="text-center bg-white/5 p-3 rounded">
                         <span className="block text-2xl font-bold text-white">2016</span>
                         <span className="text-[10px] text-gray-400">ESTABLISHED</span>
                      </div>
                      <div className="text-center bg-white/5 p-3 rounded">
                         <span className="block text-2xl font-bold text-[#F58220]">15+</span>
                         <span className="text-[10px] text-gray-400">MANPOWER</span>
                      </div>
                   </div>
                </div>

                <div className="mt-8 text-center">
                   <Link href="/about" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-[#F58220] transition-colors">
                     View Full Details <ChevronRight size={16} />
                   </Link>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}