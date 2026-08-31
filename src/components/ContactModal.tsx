import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, MessageSquare, User } from 'lucide-react';
import { TeamMember, ContactFormData } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedMember?: TeamMember | null;
  teamMembers: TeamMember[];
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  preselectedMember,
  teamMembers,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
    targetMember: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedMember) {
      setFormData((prev) => ({
        ...prev,
        targetMember: preselectedMember.name,
        subject: `Direct consultation with ${preselectedMember.name} (${preselectedMember.role})`,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        targetMember: '',
        subject: 'General Team Inquiry',
      }));
    }
  }, [preselectedMember, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      subject: 'General Inquiry',
      message: '',
      targetMember: '',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
          id="contact-modal-backdrop"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative bg-white/95 backdrop-blur-xl w-full max-w-lg rounded-2xl shadow-2xl shadow-blue-950/15 overflow-hidden z-10 border border-blue-100/90 text-slate-800"
          id="contact-modal-content"
          role="dialog"
          aria-modal="true"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#0a4db0]" />
              <h3 className="text-xs font-mono-spaced text-[#0a4db0] font-bold uppercase tracking-wider">
                Mulai Percakapan
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60 transition-colors cursor-pointer"
              id="btn-close-contact-modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 space-y-4"
              >
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200/60 shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">
                  Pesan Terkirim
                </h4>
                <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Terima kasih, <span className="font-semibold text-slate-900">{formData.name}</span>.
                  Pesan Anda telah dikirim ke{' '}
                  <span className="font-semibold text-[#0a4db0]">
                    {formData.targetMember || 'Seluruh Tim Ginzaga'}
                  </span>
                  . Harap tunggu balasan dalam 24 jam kerja.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-[#0a4db0] hover:bg-[#083c8a] text-white text-xs font-semibold rounded-xl transition-all cursor-pointer shadow-sm shadow-blue-900/10"
                    id="btn-dismiss-success"
                  >
                    Selesai & Tutup
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono-spaced text-[#0a4db0] font-bold uppercase tracking-wider mb-1.5">
                    Nama Lengkap Anda *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Contoh: Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-[#0a4db0] focus:ring-2 focus:ring-blue-100 transition-all text-slate-800 placeholder:text-slate-400"
                    id="input-contact-name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-spaced text-[#0a4db0] font-bold uppercase tracking-wider mb-1.5">
                    Email Profesional *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="nama@email.com"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-[#0a4db0] focus:ring-2 focus:ring-blue-100 transition-all text-slate-800 placeholder:text-slate-400"
                    id="input-contact-email"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-spaced text-[#0a4db0] font-bold uppercase tracking-wider mb-1.5">
                    Penerima Langsung
                  </label>
                  <div className="relative">
                    <select
                      value={formData.targetMember}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          targetMember: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-[#0a4db0] focus:ring-2 focus:ring-blue-100 transition-all text-slate-800 cursor-pointer"
                      id="select-recipient"
                    >
                      <option value="">Seluruh Tim (Ginzaga)</option>
                      {teamMembers.map((m) => (
                        <option key={m.id} value={m.name}>
                          {m.name} — {m.role}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-spaced text-[#0a4db0] font-bold uppercase tracking-wider mb-1.5">
                    Pesan / Pertanyaan *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tuliskan pesan atau kebutuhan proyek..."
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-[#0a4db0] focus:ring-2 focus:ring-blue-100 transition-all text-slate-800 placeholder:text-slate-400 resize-none"
                    id="input-contact-message"
                  />
                </div>

                <div className="pt-3 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 bg-[#0a4db0] hover:bg-[#083c8a] disabled:opacity-50 text-white font-semibold text-xs rounded-xl flex items-center gap-2 cursor-pointer transition-all shadow-sm shadow-blue-900/10 active:scale-[0.98]"
                    id="btn-submit-inquiry"
                  >
                    {isSubmitting ? (
                      'Mengirim...'
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        Kirim Pesan
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

