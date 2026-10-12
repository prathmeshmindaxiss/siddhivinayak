"use client";
import { servicesData } from "../../data/servicesData";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, ArrowLeft, PenTool } from "lucide-react";
import { motion } from "framer-motion";

export default function ServiceDetailClient({ slug }: { slug: string }) {
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) return <div className="p-20 text-center">Service Not Found</div>;

  return (
    <main className="bg-slate-50 min-h-screen">
      <Navbar />
      <section className="pt-32 sm:pt-40 md:pt-48 pb-16 md:pb-24 bg-[#0B1121] text-white relative overflow-hidden border-b border-white/10">
        {/* Ambient Glow & Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#F58220]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <Breadcrumbs items={[{ label: "Products & Services", href: "/services" }, { label: service.title }]} className="!mb-0" />
            
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-[#F58220] font-bold uppercase text-xs tracking-widest transition-colors"
            >
              <ArrowLeft size={16} /> Back to Capabilities
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-6 sm:mt-8"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight text-center">
              {service.title}
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
         <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="bg-white rounded-3xl p-8 border h-[400px] relative">
            <Image src={service.image || "/Logo_Siddhivinayak_Engg_-_Copy.jpg-removebg-preview.png"} alt={service.title} fill className="object-contain p-6" />
         </motion.div>
         <div className="space-y-8">
            <h2 className="text-3xl font-bold text-[#0F172A]">Overview</h2>
            <p className="text-slate-600 text-lg leading-relaxed">{service.details}</p>
            <div className="bg-orange-50 p-8 rounded-2xl">
               <h3 className="font-bold mb-4 flex items-center gap-2"><CheckCircle className="text-orange-600" /> Features</h3>
               <ul className="space-y-3">{service.features?.map((f, i) => <li key={i} className="text-slate-700 text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>{f}</li>)}</ul>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-[#0F172A] text-white font-bold rounded-xl hover:bg-orange-600 transition-all">Get Quote <ArrowRight size={18} /></Link>
         </div>
      </section>
      <Footer />
    </main>
  );
}