"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeOverview from "./components/HomeOverview";
import Services from "./components/Services";
import ContactAndClients from "./components/ContactAndClients";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative">
      {/* 1. Navigation */}
      <Navbar />
      
      {/* 2. Hero Animation */}
      <Hero />
      
      {/* 3. Brief About */}
      <HomeOverview />
      
      {/* 4. Core Services List */}
      <Services />
      
      {/* 5. Contact Teaser & Clients Partners */}
      <ContactAndClients /> 
      
      {/* 6. Footer */}
      <Footer />
    </main>
  );
}