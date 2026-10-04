"use client";

import ScrollToTop from "./ScrollToTop";
import FloatingCall from "./FloatingCall";
import FloatingWhatsApp from "./FloatingWhatsApp";

export default function FloatingActions() {
  return (
    <aside
      aria-label="Quick contact and navigation actions"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[90] flex flex-col items-center gap-3 sm:gap-3.5"
    >
      {/* 1. Scroll to Top (Appears smoothly when scrolled past 250px) */}
      <ScrollToTop />

      {/* 2. Floating Direct Calling Button */}
      <FloatingCall phoneNumber="+917776965955" displayNumber="+91 77769 65955" />

      {/* 3. Floating WhatsApp Chat Button */}
      <FloatingWhatsApp phoneNumber="917972133512" />
    </aside>
  );
}
