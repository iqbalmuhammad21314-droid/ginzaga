import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full mt-auto py-8 px-6 sm:px-12 max-w-6xl mx-auto border-t border-slate-200/60" id="footer-section">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Brand name & UNIKOM info */}
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold tracking-tight text-[#0a4db0]" id="footer-brand">
            Ginzaga
          </span>
          <span className="text-slate-300">|</span>
          <span className="text-xs text-slate-500 font-medium">
            UNIKOM • iCraft 2026
          </span>
        </div>

        {/* Right: Copyright & Back to top button */}
        <div className="flex items-center gap-5">
          <p className="text-slate-500 text-xs sm:text-sm font-normal text-center sm:text-right" id="footer-copyright">
            © 2026 Ginzaga Internship Team. Part of iCraft Internship 2026.
          </p>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-white border border-slate-200/80 text-slate-600 hover:text-[#0a4db0] hover:border-blue-200 hover:shadow-xs transition-all cursor-pointer"
            title="Kembali ke atas"
            aria-label="Kembali ke atas"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};


