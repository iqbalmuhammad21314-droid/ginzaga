import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  User,
  MapPin,
  Clock,
  Briefcase,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Users,
  Award,
  Wrench,
  FolderGit2,
} from 'lucide-react';
import { TeamMember } from '../types';

interface ProfileModalProps {
  member: TeamMember | null;
  allMembers: TeamMember[];
  onClose: () => void;
  onNavigate: (member: TeamMember) => void;
  onContactMember: (member: TeamMember) => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  member,
  allMembers,
  onClose,
  onNavigate,
  onContactMember,
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!member) return;
      const currentIndex = allMembers.findIndex((m) => m.id === member.id);
      if (e.key === 'ArrowRight' && currentIndex < allMembers.length - 1) {
        onNavigate(allMembers[currentIndex + 1]);
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        onNavigate(allMembers[currentIndex - 1]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [member, allMembers, onClose, onNavigate]);

  if (!member) return null;

  const currentIndex = allMembers.findIndex((m) => m.id === member.id);
  const prevMember = currentIndex > 0 ? allMembers[currentIndex - 1] : null;
  const nextMember = currentIndex < allMembers.length - 1 ? allMembers[currentIndex + 1] : null;

  const handleCopyEmail = () => {
    if (!member.email) return;
    navigator.clipboard.writeText(member.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
          id="profile-modal-backdrop"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative bg-white/95 backdrop-blur-xl w-full max-w-3xl rounded-2xl shadow-2xl shadow-blue-950/15 overflow-hidden z-10 border border-blue-100/90 my-8 max-h-[90vh] flex flex-col text-slate-800"
          id="profile-modal-content"
          role="dialog"
          aria-modal="true"
        >
          {/* Top Bar Navigation */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-4 border-b border-slate-100 bg-slate-50/80 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono-spaced text-[#0a4db0] font-bold uppercase tracking-wider">
                Profil Anggota
              </span>
              <span className="text-slate-300">/</span>
              <span className="text-xs text-slate-500 font-medium">
                {currentIndex + 1} dari {allMembers.length}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              {/* Previous Member */}
              <button
                onClick={() => prevMember && onNavigate(prevMember)}
                disabled={!prevMember}
                className={`p-2 rounded-xl text-slate-600 hover:text-[#0a4db0] hover:bg-blue-50 transition-colors ${
                  !prevMember ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'
                }`}
                title={prevMember ? `Sebelumnya: ${prevMember.name}` : 'Tidak ada anggota sebelumnya'}
                id="btn-prev-member"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Next Member */}
              <button
                onClick={() => nextMember && onNavigate(nextMember)}
                disabled={!nextMember}
                className={`p-2 rounded-xl text-slate-600 hover:text-[#0a4db0] hover:bg-blue-50 transition-colors ${
                  !nextMember ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'
                }`}
                title={nextMember ? `Berikutnya: ${nextMember.name}` : 'Tidak ada anggota berikutnya'}
                id="btn-next-member"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-xl transition-colors ml-2 cursor-pointer"
                aria-label="Tutup dialog"
                id="btn-close-modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Content Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
            {/* Profile Header Block */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="relative group shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-blue-200 via-sky-100 to-blue-300 shadow-sm inline-block">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 flex items-center justify-center">
                    {member.photoUrl ? (
                      <img
                        src={member.photoUrl}
                        alt={member.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="w-12 h-12 text-slate-400 stroke-[1.75]" />
                    )}
                  </div>
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {member.name}
                </h2>
                
                <div className="mt-1.5 mb-3">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#0a4db0] border border-blue-200/60 shadow-xs">
                    {member.role} Developer
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-600 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-[#0a4db0]" />
                    {member.department}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#0a4db0]" />
                    {member.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#0a4db0]" />
                    {member.yearsOfExperience}+ Tahun Pengalaman
                  </span>
                </div>
              </div>
            </div>

            {/* Philosophy Quote */}
            {member.quote && (
              <div className="p-4 sm:p-5 bg-blue-50/60 border-l-4 border-[#0a4db0] rounded-r-xl rounded-l-xs shadow-xs">
                <p className="text-sm sm:text-[15px] italic text-slate-800 font-serif leading-relaxed">
                  "{member.quote}"
                </p>
              </div>
            )}

            {/* Bio */}
            <div>
              <h4 className="text-xs font-mono-spaced text-[#0a4db0] font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                <User className="w-4 h-4 text-[#0a4db0]" />
                Tentang (About)
              </h4>
              <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed">
                {member.bio}
              </p>
            </div>

            {/* Education & Experience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50/80 border border-slate-200/70 rounded-xl p-5">
                <h4 className="text-xs font-mono-spaced text-[#0a4db0] font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#0a4db0]" />
                  Pendidikan
                </h4>
                <div className="space-y-3">
                  {member.education && member.education.length > 0 ? (
                    member.education.map((edu, idx) => (
                      <div key={idx} className="text-sm text-slate-800">
                        <div className="font-bold text-slate-900">{edu.degree}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{edu.institution} • {edu.years}</div>
                        {edu.notes && <div className="text-xs text-slate-600 mt-1">{edu.notes}</div>}
                      </div>
                    ))
                  ) : (
                    <div className="text-sm text-slate-400">Belum ada data pendidikan.</div>
                  )}
                </div>
              </div>

              <div className="bg-slate-50/80 border border-slate-200/70 rounded-xl p-5">
                <h4 className="text-xs font-mono-spaced text-[#0a4db0] font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#0a4db0]" />
                  Pengalaman
                </h4>
                <div className="space-y-3">
                  {member.experience && member.experience.length > 0 ? (
                    member.experience.map((exp, idx) => (
                      <div key={idx} className="text-sm text-slate-800">
                        <div className="font-bold text-slate-900">
                          {exp.title} — <span className="font-medium text-slate-600">{exp.company}</span>
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">{exp.years}</div>
                        {exp.notes && <div className="text-xs text-slate-600 mt-1">{exp.notes}</div>}
                      </div>
                    ))
                  ) : (
                    <div className="text-sm text-slate-400">Belum ada pengalaman tercatat.</div>
                  )}
                </div>
              </div>
            </div>

            {/* Organizations */}
            {member.organizations && member.organizations.length > 0 && (
              <div className="bg-slate-50/80 border border-slate-200/70 rounded-xl p-5">
                <h4 className="text-xs font-mono-spaced text-[#0a4db0] font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#0a4db0]" />
                  Organisasi
                </h4>
                <div className="space-y-2.5">
                  {member.organizations.map((org, idx) => (
                    <div key={idx} className="text-sm text-slate-800">
                      <div className="font-bold text-slate-900">{org.role}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{org.organization} • {org.years}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Highlights */}
            {member.keyHighlights && member.keyHighlights.length > 0 && (
              <div>
                <h4 className="text-xs font-mono-spaced text-[#0a4db0] font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#0a4db0]" />
                  Pencapaian Utama
                </h4>
                <div className="space-y-2.5">
                  {member.keyHighlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-blue-50/40 border border-blue-100/80 rounded-xl p-3">
                      <CheckCircle2 className="w-4 h-4 text-[#0a4db0] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills & Tools */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div>
                <h4 className="text-xs font-mono-spaced text-[#0a4db0] font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-[#0a4db0]" />
                  Keahlian Utama
                </h4>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-50 text-[#0a4db0] text-xs font-semibold rounded-lg border border-blue-200/60 shadow-2xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono-spaced text-[#0a4db0] font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                  <FolderGit2 className="w-4 h-4 text-[#0a4db0]" />
                  Teknologi & Alat
                </h4>
                <div className="flex flex-wrap gap-2">
                  {member.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-lg font-mono-spaced font-medium border border-slate-200/80 shadow-2xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Featured Projects */}
            {member.projects && member.projects.length > 0 && (
              <div>
                <h4 className="text-xs font-mono-spaced text-[#0a4db0] font-bold uppercase tracking-wider mb-3">
                  Proyek Unggulan
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {member.projects.map((project, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-xl bg-white border border-blue-100 shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between text-[11px] mb-1.5">
                          <span className="font-mono-spaced font-bold text-[#0a4db0] bg-blue-50 px-2 py-0.5 rounded">
                            {project.category}
                          </span>
                          <span className="text-slate-400 font-medium">{project.year}</span>
                        </div>
                        <h5 className="font-bold text-slate-900 text-sm mb-1.5 leading-snug">
                          {project.title}
                        </h5>
                        <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="mt-auto">
                        {project.metrics && (
                          <div className="text-[11px] font-mono-spaced text-[#0a4db0] bg-blue-50/80 px-2.5 py-1.5 rounded-lg border border-blue-200/60 mb-2.5 font-medium">
                            Dampak: {project.metrics}
                          </div>
                        )}
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] font-medium px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md border border-slate-200/60"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

