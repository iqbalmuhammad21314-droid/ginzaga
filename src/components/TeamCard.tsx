import React from 'react';
import { User, ArrowRight, MapPin, Code, Palette, Server } from 'lucide-react';
import { TeamMember } from '../types';
import { motion } from 'motion/react';

interface TeamCardProps {
  member: TeamMember;
  onSelect: (member: TeamMember) => void;
  index: number;
}

export const TeamCard: React.FC<TeamCardProps> = ({
  member,
  onSelect,
  index,
}) => {
  const getRoleIcon = (role: string) => {
    const lower = role.toLowerCase();
    if (lower.includes('ui') || lower.includes('ux') || lower.includes('desain')) {
      return <Palette className="w-3.5 h-3.5 text-[#0a4db0]" />;
    }
    if (lower.includes('back')) {
      return <Server className="w-3.5 h-3.5 text-[#0a4db0]" />;
    }
    return <Code className="w-3.5 h-3.5 text-[#0a4db0]" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="portfolio-card p-6 sm:p-7 flex flex-col items-center text-center justify-between h-full group"
      id={`team-card-${member.id}`}
    >
      {/* Top Header: Avatar with glowing ring */}
      <div className="relative mb-5">
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-blue-200 via-sky-100 to-blue-300 shadow-sm inline-block transition-transform duration-300 group-hover:scale-105">
          <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 flex items-center justify-center relative">
            {member.photoUrl ? (
              <img
                src={member.photoUrl}
                alt={member.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            ) : (
              <User
                className="w-10 h-10 sm:w-12 sm:h-12 text-slate-400 stroke-[1.75]"
                aria-hidden="true"
              />
            )}
          </div>
        </div>

        {/* Active Status Badge */}
        <span
          className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-xs"
          title="Anggota Aktif"
        />
      </div>

      {/* Name and Role */}
      <div className="mb-3 w-full">
        <h3
          className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-2 group-hover:text-[#0a4db0] transition-colors"
          id={`member-name-${member.id}`}
        >
          {member.name}
        </h3>

        <div
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#0a4db0] border border-blue-200/60 shadow-xs"
          id={`member-role-${member.id}`}
        >
          {getRoleIcon(member.role)}
          <span>{member.role} Developer</span>
        </div>
      </div>

      {/* Location / Department Subtitle */}
      <div className="flex items-center justify-center gap-1 text-[11px] text-slate-500 mb-4 font-medium">
        <MapPin className="w-3 h-3 text-slate-400" />
        <span>Bandung • UNIKOM '23</span>
      </div>

      {/* Bio / Summary Excerpt */}
      <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-5 px-1 leading-relaxed">
        "{member.quote || member.bio}"
      </p>

      {/* Top Skills Tags */}
      {member.skills && member.skills.length > 0 && (
        <div className="flex flex-wrap justify-center gap-1.5 mb-6 w-full">
          {member.skills.slice(0, 3).map((skill, idx) => (
            <span
              key={idx}
              className="text-[11px] font-medium bg-slate-50 text-slate-700 border border-slate-200/70 px-2 py-0.5 rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {/* Action CTA Button */}
      <div className="w-full mt-auto pt-2">
        <button
          onClick={() => onSelect(member)}
          className="w-full py-2.5 px-4 bg-[#0a4db0] hover:bg-[#083c8a] active:scale-[0.98] text-white rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm shadow-blue-900/15 flex items-center justify-center gap-2 cursor-pointer group-hover:shadow-md"
          id={`btn-view-profile-${member.id}`}
        >
          Lihat Profil Lengkap
          <ArrowRight className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};


