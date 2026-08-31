import React from 'react';
import { Sparkles, Users, Layers } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="w-full pt-6 pb-4 px-6 sm:px-12 max-w-6xl mx-auto sticky top-0 z-40">
      <div className="portfolio-card !rounded-2xl px-6 py-3.5 flex items-center justify-between border border-blue-100/80 shadow-sm">
        {/* Brand Logo */}
        <a
          href="#top"
          className="flex items-center gap-2 text-xl sm:text-2xl font-bold tracking-tight text-[#0a4db0] hover:opacity-90 transition-opacity"
          id="brand-logo"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#0a4db0] inline-block animate-pulse"></span>
          Ginzaga
        </a>

        {/* Navigation & Status Pill */}
        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="hidden md:flex items-center gap-5 text-xs font-semibold text-slate-600">
            <a
              href="#mission-section"
              className="hover:text-[#0a4db0] transition-colors flex items-center gap-1.5"
            >
              <Layers className="w-3.5 h-3.5" />
              Misi & Keahlian
            </a>
            <a
              href="#team-section"
              className="hover:text-[#0a4db0] transition-colors flex items-center gap-1.5"
            >
              <Users className="w-3.5 h-3.5" />
              Tim Kami
            </a>
          </nav>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-blue-50 text-[#0a4db0] border border-blue-200/60 shadow-xs">
            <Sparkles className="w-3 h-3 text-[#0a4db0]" />
            <span>iCraft 2026</span>
          </div>
        </div>
      </div>
    </header>
  );
};


