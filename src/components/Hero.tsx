import React from 'react';
import { motion } from 'motion/react';
import { Code2, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 sm:px-8 pt-4 sm:pt-8 pb-16">
      {/* Top Hero Card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="portfolio-card p-8 sm:p-14 text-center mb-14 sm:mb-16 relative overflow-hidden"
        id="hero-card"
      >
        {/* Subtle background glow inside card */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -z-10" />


        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0a4db0] mb-6"
          id="hero-title"
        >
          Ginzaga
        </h1>

        <p
          className="text-sm sm:text-base md:text-[16px] text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal"
          id="hero-description"
        >
          Kami bergabung sebagai tim magang dalam program{' '}
          <strong className="font-bold text-[#0a4db0] bg-blue-50/80 px-1.5 py-0.5 rounded">
            iCraft Internship 2026
          </strong>
          . Sebagai mahasiswa{' '}
          <strong className="font-bold text-slate-900 bg-slate-100/80 px-1.5 py-0.5 rounded">
            Teknik Informatika
          </strong>{' '}
          angkatan 2023 dari{' '}
          <strong className="font-bold text-slate-900 bg-slate-100/80 px-1.5 py-0.5 rounded">
            Universitas Komputer Indonesia (UNIKOM)
          </strong>
          , kami terus mengasah kemampuan, bekerja sama, dan menghasilkan karya digital yang
          bermakna.
        </p>
      </motion.div>

      {/* Middle Section: Misi & Keahlian Kami */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
        className="text-center mb-10 sm:mb-12"
        id="mission-section"
      >
        <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#0a4db0] mb-2 font-mono-spaced">
          Kapabilitas & Fokus
        </div>

        <h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-4"
          id="mission-title"
        >
          Misi & Keahlian Kami
        </h2>

        <p
          className="text-xs sm:text-sm md:text-[15px] text-slate-600 leading-relaxed max-w-2xl mx-auto"
          id="mission-description"
        >
          Memadukan keahlian Web Development dan UI/UX Design untuk menghadirkan solusi digital yang inovatif, fungsional, serta dirancang presisi demi menjawab kebutuhan teknologi masa kini.
        </p>
      </motion.div>

      {/* 2-Column Skill / Domain Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" id="skills-grid">
        {/* Card 1: Web Development */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
          className="portfolio-card p-8 sm:p-10 flex flex-col items-center text-center group cursor-default"
          id="card-web-dev"
        >
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-100 to-sky-50 border border-blue-200/70 flex items-center justify-center mb-6 text-[#0a4db0] shadow-sm group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
            <Code2 className="w-8 h-8 stroke-[2]" />
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0a4db0] transition-colors" id="web-dev-title">
            Web Development
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6" id="web-dev-desc">
            Mengembangkan arsitektur web yang tangguh, cepat, dan terstruktur rapi dengan teknologi modern untuk performa optimal serta skalabilitas jangka panjang.
          </p>

          {/* Feature Chips */}
          <div className="mt-auto flex flex-wrap justify-center gap-2 pt-4 border-t border-slate-100 w-full">
            <span className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
              Frontend & Backend
            </span>
            <span className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
              High Performance
            </span>
            <span className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
              Scalable Systems
            </span>
          </div>
        </motion.div>

        {/* Card 2: UI/UX Design */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
          className="portfolio-card p-8 sm:p-10 flex flex-col items-center text-center group cursor-default"
          id="card-ui-ux"
        >
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-100 to-sky-50 border border-blue-200/70 flex items-center justify-center mb-6 text-[#0a4db0] shadow-sm group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Crossed Pen/Pencil & Ruler Design icon */}
              <path d="m14.5 5.5 4 4" />
              <path d="M12 8 7 3.3a2 2 0 0 0-2.8 0L2.8 4.7a2 2 0 0 0 0 2.8L7.5 12" />
              <path d="m9.5 14.5 4-4" />
              <path d="M14.7 9.3 20 14.5a2 2 0 0 1 0 2.8l-1.4 1.4a2 2 0 0 1-2.8 0L10.5 13.5" />
              <path d="m14 18 4 4" />
              <path d="m17 15 3 3" />
            </svg>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0a4db0] transition-colors" id="ui-ux-title">
            UI/UX Design
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6" id="ui-ux-desc">
            Merancang pengalaman digital yang memikat dan berpusat pada kenyamanan pengguna, mengutamakan estetika visual, kejelasan alur, serta kemudahan interaksi.
          </p>

          {/* Feature Chips */}
          <div className="mt-auto flex flex-wrap justify-center gap-2 pt-4 border-t border-slate-100 w-full">
            <span className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
              User-Centric
            </span>
            <span className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
              Design Systems
            </span>
            <span className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
              Interactive Prototype
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};


