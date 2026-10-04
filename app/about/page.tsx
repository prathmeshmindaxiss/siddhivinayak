"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import { motion } from "framer-motion";
import { 
  Users, Target, Award, CheckCircle2, ArrowRight, Factory, 
  Briefcase, History, Globe, Rocket, Clock, ShieldCheck, 
  Zap, PenTool 
} from "lucide-react";
import Link from "next/link";

export default function About() {
  
  const stats = [
    { label: "Established", val: "2016", icon: <History size={24}/> },
    { label: "Total Team", val: "15+", icon: <Users size={24}/> },
    { label: "Completed Projects", val: "100+", icon: <Factory size={24}/> },
    { label: "Happy Clients", val: "100+", icon: <Award size={24}/> },
  ];

  const coreAreas = [
    "Welding Fixtures",
    "Inspection Fixtures",
    "BIW Fixtures",
    "Machine Parts",
    "Assembly Parts",
    "Multi Utility Fixtures",
    "Precision Job Works",
    "Fabrication",
    "Gauges"       
  ];

  const features = [
    {
      title: "Cost-Quality-Time Matrix",
      desc: "We balance these three critical factors to strictly increase your productivity and deliver value.",
      icon: <Clock size={32} />
    },
    {
      title: "Complete Solution Provider",
      desc: "From conceptualizing and design to manufacturing and assembly, we handle the entire lifecycle.",
      icon: <Zap size={32} />
    },
    {
      title: "Customer Centric",
      desc: "'Complete customer satisfaction' is our benchmark. Every process revolves around your needs.",
      icon: <Target size={32} />
    },
    {
      title: "Engineering Excellence",
      desc: "Our creative & innovative design team strives for excellence in every step of the process.",
      icon: <PenTool size={32} />
    }
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const fallingWord = {
    hidden: { opacity: 0, y: -120, rotate: 15 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring" as const, 
        damping: 10,
        stiffness: 150,
      },
    },
  };

  return (
    <main className="bg-white min-h-screen text-slate-900 selection:bg-[#F58220]/20 overflow-hidden">
      <Navbar />
      
      {/* --- 1. HERO HEADER --- */}
      <section className="pt-32 sm:pt-40 md:pt-48 pb-20 md:pb-28 px-4 sm:px-6 lg:px-12 relative bg-[#0B1121] text-white overflow-hidden border-b border-white/10">
        {/* Ambient Glows & Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        <div className="absolute top-1/4 -right-20 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#F58220]/15 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 -left-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#DA291C]/15 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
           <motion.div 
             variants={staggerContainer}
             initial="hidden"
             animate="visible"
             className="flex flex-col items-center will-change-transform"
           >
             <Breadcrumbs items={[{ label: "About Us" }]} />

             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
                 <motion.span variants={fallingWord} className="block">
                   About{" "}
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F58220] via-[#FFA048] to-[#DA291C]">
                     Us
                   </span>
                 </motion.span>
              </h1>
             
             
           </motion.div>
        </div>
      </section>

      {/* --- 2. COMPANY PROFILE & STATS --- */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-white">
         <div className="max-w-[90rem] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
            >
               <h3 className="text-3xl md:text-4xl font-black uppercase text-[#0F172A] tracking-tight mb-8 md:mb-10 flex items-center gap-4">
                 <span className="w-2 h-8 md:h-10 bg-[#F58220] rounded-sm"></span>
                 OUR STORY
               </h3>
               
               {/* ✅ OUR STORY: Aapki exact line sirf yahan daali hai */}
               <div className="space-y-6 md:space-y-8 text-slate-600 text-base md:text-lg leading-relaxed">
                  <p>
                    Established in 2016, <strong className="text-[#0F172A]">Siddhivinayak Engineering</strong> has evolved into a premier complete-solution provider. We specialize in the <strong className="text-[#F58220]">designing and manufacturing of Jigs, Fixtures, Gauges, Precision Components, Tool Room Job Works, and Fabrication Work</strong>.
                  </p>
                  
                  <p>
                    We strictly adhere to a <strong className="text-[#F58220] underline decoration-[#F58220]/30 underline-offset-4">Cost-Quality-Time matrix</strong> to significantly <strong className="text-[#0F172A]">increase customer productivity</strong>. Our manufacturing unit, strategically located in the <strong className="text-slate-800">Bhosari Industrial Area, Pune</strong>, is fully equipped to handle <strong className="text-[#0F172A]">complex engineering challenges with absolute precision</strong>.
                  </p>
               </div>

               <div className="mt-10 md:mt-12 p-6 md:p-8 bg-[#F8FAFC] rounded-3xl flex flex-col sm:flex-row gap-6 items-center sm:items-start border border-slate-100 shadow-sm transition-all hover:shadow-md">
                  <div className="p-4 bg-white shadow-sm rounded-2xl text-[#F58220] shrink-0 border border-slate-100">
                     <ShieldCheck size={40} strokeWidth={1.5} />
                  </div>
                  <div className="text-center sm:text-left">
                     <h4 className="text-lg md:text-xl font-bold text-[#0F172A] tracking-wide mb-2">ISO 9001:2015 CERTIFIED</h4>
                     <p className="text-sm md:text-base text-slate-500 leading-relaxed italic">
                       "Complete customer satisfaction is our benchmark. We strive for excellence in every step of the process."
                     </p>
                  </div>
               </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.8 }}
               className="bg-[#0F172A] text-white p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden shadow-2xl mt-8 lg:mt-0"
            >
               <div className="absolute top-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-[#F58220]/20 rounded-full blur-[80px] md:blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

               <h3 className="text-xs md:text-sm font-bold uppercase tracking-[3px] md:tracking-[4px] mb-8 md:mb-12 text-slate-400 border-b border-white/10 pb-4 md:pb-6">
                 Company Strength
               </h3>

               <div className="grid grid-cols-2 gap-x-6 md:gap-x-12 gap-y-10 md:gap-y-16 relative z-10">
                  {stats.map((stat, i) => (
                    <div key={i} className="group">
                       <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 text-[#F58220] group-hover:text-white transition-colors">
                          {stat.icon}
                       </div>
                       <p className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-1 md:mb-2 group-hover:translate-x-2 transition-transform duration-300">{stat.val}</p>
                       <p className="text-[10px] md:text-xs font-bold uppercase tracking-[1px] md:tracking-[2px] text-slate-400">{stat.label}</p>
                    </div>
                  ))}
               </div>

               <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-white/10 relative z-10">
                  <Link href="/infrastructure" className="group flex items-center justify-between text-xs md:text-sm font-bold uppercase tracking-widest text-white hover:text-[#F58220] transition-colors">
                     <span>View Manufacturing Setup</span>
                     <ArrowRight className="group-hover:translate-x-2 transition-transform"/>
                  </Link>
               </div>
            </motion.div>

         </div>
      </section>

      {/* --- 3. VISION, MISSION & CORE AREAS --- */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50 border-y border-slate-200">
         <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
               
               <motion.div 
                 whileHover={{ y: -8 }}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 className="bg-white p-8 md:p-10 rounded-[2rem] md:rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col"
               >
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#F58220]/10 rounded-xl md:rounded-2xl flex items-center justify-center text-[#F58220] mb-6 md:mb-8">
                    <Globe size={24} className="md:w-7 md:h-7" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase text-[#0F172A] mb-4 md:mb-6">Our Vision</h3>
                  <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed flex-grow">
                    "To become a worldwide engineering solutions providing company."
                  </p>
               </motion.div>

               <motion.div 
                 whileHover={{ y: -8 }}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ delay: 0.1 }}
                 className="bg-[#0F172A] p-8 md:p-10 rounded-[2rem] md:rounded-3xl shadow-2xl text-white relative overflow-hidden flex flex-col"
               >
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center text-[#F58220] mb-6 md:mb-8 relative z-10">
                    <Rocket size={24} className="md:w-7 md:h-7" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase text-white mb-4 md:mb-6 relative z-10">Our Mission</h3>
                  <p className="text-slate-300 text-base md:text-lg font-medium leading-relaxed relative z-10 flex-grow">
                    "To increase our customer's productivity by developing & implementing powerful Engineering solutions which reflects in time effective user friendly products."
                  </p>
                  <div className="absolute bottom-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-[#F58220]/20 rounded-full blur-[50px] md:blur-[60px] translate-y-8 translate-x-8"></div>
               </motion.div>

               <motion.div 
                 whileHover={{ y: -8 }}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-50px" }}
                 transition={{ delay: 0.2 }}
                 className="bg-white p-8 md:p-10 rounded-[2rem] md:rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col md:col-span-2 lg:col-span-1"
               >
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#F58220]/10 rounded-xl md:rounded-2xl flex items-center justify-center text-[#F58220] mb-6 md:mb-8">
                    <Target size={24} className="md:w-7 md:h-7" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase text-[#0F172A] mb-4 md:mb-6">Core Areas</h3>
                  
                  <ul className="space-y-3 md:space-y-4 flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-4">
                     {coreAreas.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-700 font-bold text-xs md:text-sm uppercase tracking-wide">
                           <CheckCircle2 size={16} className="text-[#F58220] shrink-0 mt-0.5 md:mt-1 md:w-[18px] md:h-[18px]" />
                           <span className="leading-tight">{item}</span>
                        </li>
                     ))}
                  </ul>
               </motion.div>

            </div>
         </div>
      </section>

      {/* --- 4. WHY CHOOSE US --- */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-[95rem] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
                <span className="text-[#F58220] font-bold text-xs md:text-sm tracking-[4px] md:tracking-[6px] uppercase mb-3 md:mb-4 block">
                    Our Advantage
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase text-[#0F172A] tracking-tight">
                    Why Choose Us?
                </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {features.map((feature, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="p-6 md:p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-[#F58220]/30 hover:shadow-xl hover:shadow-[#F58220]/10 transition-all duration-300 group"
                    >
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl md:rounded-2xl shadow-sm flex items-center justify-center text-slate-400 group-hover:text-[#F58220] group-hover:scale-110 transition-all duration-300 mb-5 md:mb-6">
                            <div className="scale-75 md:scale-100">
                                {feature.icon}
                            </div>
                        </div>
                        <h4 className="text-lg md:text-xl font-bold text-[#0F172A] uppercase tracking-tight mb-3 md:mb-4 group-hover:text-[#F58220] transition-colors">
                            {feature.title}
                        </h4>
                        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                            {feature.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}