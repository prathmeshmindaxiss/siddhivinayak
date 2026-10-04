"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, User, Send, Building2 } from "lucide-react";

export default function Contact() {
  return (
    <main className="bg-slate-50 min-h-screen text-slate-900 selection:bg-orange-100">
      <Navbar />
      
      {/* --- HERO HEADER --- */}
      <section className="pt-32 sm:pt-40 md:pt-48 pb-20 md:pb-28 px-4 sm:px-6 lg:px-12 relative overflow-hidden bg-[#0B1121] text-white border-b border-white/10">
         {/* Ambient Glows & Grid */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
         <div className="absolute top-1/4 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#F58220]/15 rounded-full blur-[120px] pointer-events-none" />
         <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#DA291C]/15 rounded-full blur-[120px] pointer-events-none" />

         <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="will-change-transform flex flex-col items-center"
            >
               <Breadcrumbs items={[{ label: "Contact Us" }]} />

               <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-0 leading-[1.1]">
                 Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F58220] via-[#FFA048] to-[#DA291C]">Us</span>
               </h1>
            </motion.div>
         </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 py-12 md:py-20">
        
        {/* 1. Equal Height Two-Column Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-12 md:mb-16">
          
          {/* LEFT: CONTACT INFO (UNIFIED CARD - EQUAL HEIGHT) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full flex flex-col will-change-transform"
          >
             <div className="bg-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col justify-between h-full relative overflow-hidden group hover:shadow-2xl transition-all duration-500 gap-6 sm:gap-8">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50/70 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-orange-100 transition-colors"></div>

                {/* 1. Company Name Header */}
                <div className="flex items-center gap-3.5 sm:gap-4 relative z-10 pb-4 border-b border-slate-100">
                   <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-[#F58220] shrink-0 shadow-sm">
                      <Building2 size={22} className="sm:w-6 sm:h-6" />
                   </div>
                   <div>
                      <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest block mb-0.5">Company</span>
                      <h2 className="text-lg sm:text-2xl font-black text-[#0F172A] tracking-tight">Siddhivinayak Engineering</h2>
                   </div>
                </div>

                {/* 2. Director & Contact Phones */}
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 relative z-10">
                   <div className="p-3 sm:p-4 bg-[#0F172A] rounded-xl sm:rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-500 shrink-0">
                      <User size={24} className="sm:w-7 sm:h-7" />
                   </div>
                   <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] mb-1 group-hover:text-orange-600 transition-colors">Mr. Vinod Kawade</h3>
                      <p className="text-slate-500 text-[10px] sm:text-xs font-bold uppercase tracking-[2px] mb-3 sm:mb-4">Director</p>
                      <div className="space-y-2 sm:space-y-2.5">
                         <a href="tel:+917776965955" className="flex items-center gap-3 text-sm sm:text-base text-slate-600 font-medium hover:text-orange-600 transition-colors">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 flex items-center justify-center text-[#0F172A] shrink-0"><Phone size={12} className="sm:w-[14px] sm:h-[14px]"/></div>
                            +91 77769 65955
                         </a>
                         <a href="tel:+917972133512" className="flex items-center gap-3 text-sm sm:text-base text-slate-600 font-medium hover:text-orange-600 transition-colors">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 flex items-center justify-center text-[#0F172A] shrink-0"><Phone size={12} className="sm:w-[14px] sm:h-[14px]"/></div>
                            +91 79721 33512
                         </a>
                      </div>
                   </div>
                </div>

                <div className="h-px bg-slate-100 w-full"></div>

                {/* 3. Factory Address */}
                <div className="flex gap-4 sm:gap-6 items-start relative z-10">
                   <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-50 rounded-lg sm:rounded-xl flex items-center justify-center text-orange-600 shrink-0">
                      <MapPin size={20} className="sm:w-6 sm:h-6" />
                   </div>
                   <div>
                      <h4 className="font-bold text-xs sm:text-sm text-slate-400 uppercase tracking-widest mb-1.5">Factory Address</h4>
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                        Sr. No. 15/1, Near Hindustan Pressing,<br/> 
                        Gulave Vasti, MIDC, Bhosari,<br/> 
                        Pune – 411 026
                      </p>
                   </div>
                </div>

                <div className="h-px bg-slate-100 w-full"></div>

                {/* 4. Email Us */}
                <div className="flex gap-4 sm:gap-6 items-center relative z-10">
                   <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center text-[#0F172A] shrink-0">
                      <Mail size={20} className="sm:w-6 sm:h-6" />
                   </div>
                   <div className="min-w-0">
                      <h4 className="font-bold text-xs sm:text-sm text-slate-400 uppercase tracking-widest mb-1">Email Us</h4>
                      <a href="mailto:siddhivinayak.engg555@gmail.com" className="text-[#0F172A] font-bold text-sm sm:text-lg hover:text-orange-600 transition-colors break-all">
                        siddhivinayak.engg555@gmail.com
                      </a>
                   </div>
                </div>

             </div>
          </motion.div>

          {/* RIGHT: INQUIRY FORM (EQUAL HEIGHT) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="h-full flex flex-col will-change-transform"
          >
             <div className="bg-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col justify-between h-full">
                <div>
                   <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0F172A] mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                      <Building2 className="text-orange-600 w-6 h-6 sm:w-8 sm:h-8"/> Send Inquiry
                   </h3>
                   
                   <form className="space-y-4 sm:space-y-5">
                      <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
                         <div className="space-y-1 sm:space-y-1.5">
                            <label className="text-[10px] sm:text-xs font-bold uppercase text-slate-400 tracking-wider">Your Name</label>
                            <input type="text" className="w-full bg-slate-50 border border-slate-200 p-3 sm:p-3.5 rounded-lg sm:rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all font-bold text-sm sm:text-base text-[#0F172A]" placeholder="John Doe" />
                         </div>
                         <div className="space-y-1 sm:space-y-1.5">
                            <label className="text-[10px] sm:text-xs font-bold uppercase text-slate-400 tracking-wider">Phone Number</label>
                            <input type="text" className="w-full bg-slate-50 border border-slate-200 p-3 sm:p-3.5 rounded-lg sm:rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all font-bold text-sm sm:text-base text-[#0F172A]" placeholder="+91 9999..." />
                         </div>
                      </div>
                      
                      <div className="space-y-1 sm:space-y-1.5">
                         <label className="text-[10px] sm:text-xs font-bold uppercase text-slate-400 tracking-wider">Email Address</label>
                         <input type="email" className="w-full bg-slate-50 border border-slate-200 p-3 sm:p-3.5 rounded-lg sm:rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all font-bold text-sm sm:text-base text-[#0F172A]" placeholder="john@company.com" />
                      </div>

                      <div className="space-y-1 sm:space-y-1.5">
                         <label className="text-[10px] sm:text-xs font-bold uppercase text-slate-400 tracking-wider">Message</label>
                         <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 p-3 sm:p-3.5 rounded-lg sm:rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all font-bold text-sm sm:text-base text-[#0F172A] resize-none" placeholder="Tell us about your requirements..."></textarea>
                      </div>

                      <button type="button" className="w-full bg-[#0F172A] text-white font-bold py-4 sm:py-4.5 rounded-xl uppercase tracking-[2px] text-xs sm:text-sm hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-200 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 group mt-2">
                         Send Message <Send size={16} className="group-hover:translate-x-1 transition-transform sm:w-[18px] sm:h-[18px]" />
                      </button>
                   </form>
                </div>
             </div>
          </motion.div>

        </div>

        {/* 2. Full-Width Google Map Embed Below Both Cards */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.8 }}
           className="w-full"
        >
           <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-4 border-white h-48 sm:h-60 md:h-64 grayscale hover:grayscale-0 transition-all duration-700">
              <iframe 
                src="https://maps.google.com/maps?q=Siddhivinayak+Engineering+Pune&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
           </div>
        </motion.div>

      </div>
      <Footer />
    </main>
  );
}