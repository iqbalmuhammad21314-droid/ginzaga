import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TeamCard } from './components/TeamCard';
import { ProfileModal } from './components/ProfileModal';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';
import { TEAM_MEMBERS } from './data/teamData';
import { TeamMember } from './types';

export default function App() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactRecipient, setContactRecipient] = useState<TeamMember | null>(null);

  const handleOpenContact = (member?: TeamMember) => {
    setContactRecipient(member || null);
    setIsContactOpen(true);
  };

  const handleSelectMember = (member: TeamMember) => {
    setSelectedMember(member);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-blue-100 selection:text-blue-900 font-sans" id="top">
      {/* Top Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center">
        {/* Screenshot Hero & Skills Section */}
        <Hero />

        {/* Team Section */}
        <section className="w-full max-w-6xl mx-auto px-6 sm:px-8 pt-6 pb-24" id="team-section">
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-14">
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#0a4db0] mb-2 font-mono-spaced">
              Rekan Kolaborasi
            </div>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-3"
              id="team-section-title"
            >
              Tim Kami
            </h2>
            <p className="text-xs sm:text-sm md:text-[15px] text-slate-600 max-w-xl mx-auto leading-relaxed">
              Mahasiswa Teknik Informatika UNIKOM yang berkolaborasi menghasilkan karya digital bermakna dalam program iCraft Internship 2026.
            </p>
          </div>

          {/* 3 Column Grid for Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch" id="team-grid">
            {TEAM_MEMBERS.map((member, index) => (
              <TeamCard
                key={member.id}
                member={member}
                onSelect={handleSelectMember}
                index={index}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Member Profile Modal */}
      <ProfileModal
        member={selectedMember}
        allMembers={TEAM_MEMBERS}
        onClose={() => setSelectedMember(null)}
        onNavigate={(newMember) => setSelectedMember(newMember)}
        onContactMember={(member) => {
          setSelectedMember(null);
          handleOpenContact(member);
        }}
      />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => {
          setIsContactOpen(false);
          setContactRecipient(null);
        }}
        preselectedMember={contactRecipient}
        teamMembers={TEAM_MEMBERS}
      />
    </div>
  );
}



