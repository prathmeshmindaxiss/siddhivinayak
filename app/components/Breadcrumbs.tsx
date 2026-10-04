"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav 
      aria-label="Breadcrumb" 
      className={`inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs sm:text-sm mb-4 sm:mb-6 shadow-sm ${className}`}
    >
      <Link 
        href="/" 
        className="flex items-center gap-1.5 text-slate-300 hover:text-[#F58220] transition-colors font-medium"
      >
        <Home size={13} className="text-[#F58220]" />
        <span>Home</span>
      </Link>
      
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        
        return (
          <div key={index} className="flex items-center gap-1.5 sm:gap-2">
            <ChevronRight size={13} className="text-slate-500 shrink-0" />
            {isLast || !item.href ? (
              <span className="text-[#F58220] font-semibold tracking-wide">
                {item.label}
              </span>
            ) : (
              <Link 
                href={item.href} 
                className="text-slate-300 hover:text-[#F58220] transition-colors font-medium"
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
