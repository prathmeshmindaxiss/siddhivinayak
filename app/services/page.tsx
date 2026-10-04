"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { servicesData } from "../data/servicesData"; 

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

export default function ServicesPage() {
  return (
    <main className="bg-slate-50 min-h-screen text-slate-900 selection:bg-orange-100 overflow-hidden">
      <Navbar />
      {/* --- HERO HEADER --- */}
      <section className="pt-32 sm:pt-40 md:pt-48 pb-20 md:pb-28 px-4 sm:px-6 lg:px-12 relative bg-[#0B1121] text-white overflow-hidden border-b border-white/10">
        {/* Ambient Glows & Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#F58220]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#DA291C]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col items-center">
            <Breadcrumbs items={[{ label: "Products & Services" }]} />

            {/* Main Headline */}
            <motion.h1 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-0 leading-[1.1] tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F58220] via-[#FFA048] to-[#DA291C]">Products</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-24 px-4 bg-white -mt-10 rounded-t-[3rem]">
        <div className="max-w-[95rem] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <motion.div key={service.slug} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as any }} className="group bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500">
                <Link href={`/services/${service.slug}`} className="block h-64 relative bg-white overflow-hidden">
                  <Image src={service.image || "/Logo_Siddhivinayak_Engg_-_Copy.jpg-removebg-preview.png"} alt={service.title} fill className="object-contain p-8 group-hover:scale-110 transition-transform duration-700" />
                </Link>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-3 group-hover:text-orange-600">{service.title}</h3>
                  <p className="text-slate-500 text-sm mb-6 line-clamp-3">{service.desc}</p>
                  <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0F172A] border border-slate-200 px-4 py-3 rounded-xl hover:bg-orange-50 w-full justify-center">
                    Technical Specs <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}