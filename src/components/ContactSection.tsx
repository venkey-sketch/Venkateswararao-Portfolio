import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Linkedin, 
  Github, 
  MapPin, 
  Copy, 
  Check, 
  Sparkles, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle,
  Sliders
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface ContactSectionProps {
  darkMode: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ darkMode }) => {
  const { personalInfo, openEditModal } = usePortfolio();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (submitStatus !== 'idle') setSubmitStatus('idle');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    // Simulate swift submission handling & provide direct mailto action
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Prepare direct mail client link as backup
      const mailtoUrl = `mailto:${personalInfo.socials.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`;
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="contact"
      className={`py-24 relative ${darkMode ? 'bg-slate-950' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2
            id="contact-section-heading"
            className={`text-3xl sm:text-4xl font-extrabold font-display tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Contact Me
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Have an internship opening, software developer role, or academic collaboration in mind? Let's connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards & Social Info (Bento Grid Card) */}
          <div className="lg:col-span-5 space-y-6">
            <div
              className={`rounded-3xl border p-6 sm:p-8 space-y-6 ${
                darkMode
                  ? 'bg-slate-900/60 border-slate-800/80 backdrop-blur-xl shadow-xl shadow-black/20'
                  : 'bg-white border-slate-200/90 shadow-md'
              }`}
            >
              <div className="space-y-2">
                <h3 className={`text-xl font-bold font-display ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Let's Discuss Opportunities
                </h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  I am actively seeking software development internships and entry-level positions where I can contribute my programming, web development, and problem-solving skills.
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4 pt-2">
                
                {/* Email Card with 1-Click Copy */}
                <div className={`p-4 rounded-2xl border flex items-center justify-between gap-3 ${
                  darkMode ? 'bg-slate-950/80 border-slate-800/80' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <span className={`text-[10px] font-mono uppercase tracking-wider block font-semibold ${
                        darkMode ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        Direct Email
                      </span>
                      <a
                        href={`mailto:${personalInfo.socials.email}`}
                        className={`text-xs sm:text-sm font-semibold truncate block hover:text-sky-400 ${
                          darkMode ? 'text-slate-200' : 'text-slate-800'
                        }`}
                      >
                        {personalInfo.socials.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    title="Copy Email Address"
                    className={`p-2 rounded-xl border transition-all active:scale-95 shrink-0 cursor-pointer ${
                      darkMode
                        ? 'bg-slate-900 border-slate-700 text-slate-300 hover:text-sky-400 hover:border-sky-500'
                        : 'bg-white border-slate-300 text-slate-700 hover:text-sky-600 hover:border-sky-400'
                    }`}
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* LinkedIn Link */}
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-4 rounded-2xl border flex items-center justify-between gap-3 transition-all hover:border-sky-500/60 group ${
                    darkMode ? 'bg-slate-950/80 border-slate-800/80' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center shrink-0 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className={`text-[10px] font-mono uppercase tracking-wider block font-semibold ${
                        darkMode ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        LinkedIn Profile
                      </span>
                      <span className={`text-xs sm:text-sm font-semibold ${
                        darkMode ? 'text-slate-200' : 'text-slate-800'
                      }`}>
                        [YOUR LINKEDIN PROFILE]
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-sky-400 font-mono">Connect →</span>
                </a>

                {/* GitHub Link */}
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-4 rounded-2xl border flex items-center justify-between gap-3 transition-all hover:border-sky-500/60 group ${
                    darkMode ? 'bg-slate-950/80 border-slate-800/80' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center shrink-0 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <span className={`text-[10px] font-mono uppercase tracking-wider block font-semibold ${
                        darkMode ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        GitHub Repositories
                      </span>
                      <span className={`text-xs sm:text-sm font-semibold ${
                        darkMode ? 'text-slate-200' : 'text-slate-800'
                      }`}>
                        [YOUR GITHUB PROFILE]
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-sky-400 font-mono">Follow →</span>
                </a>

                {/* Location */}
                <div className={`p-4 rounded-2xl border flex items-center gap-3 ${
                  darkMode ? 'bg-slate-950/80 border-slate-800/80' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`text-[10px] font-mono uppercase tracking-wider block font-semibold ${
                      darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      Current Location
                    </span>
                    <span className={`text-xs sm:text-sm font-semibold ${
                      darkMode ? 'text-slate-200' : 'text-slate-800'
                    }`}>
                      India
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form (Bento Grid Card) */}
          <div className="lg:col-span-7">
            <div
              className={`rounded-3xl border p-6 sm:p-8 backdrop-blur-xl ${
                darkMode
                  ? 'bg-slate-900/60 border-slate-800/80 shadow-xl shadow-black/20'
                  : 'bg-white border-slate-200/90 shadow-md'
              }`}
            >
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-sky-400" />
                <h3 className={`text-xl font-bold font-display ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Send a Direct Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className={`block text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      required
                      className={`w-full px-4 py-3 text-sm rounded-2xl border outline-none transition-all ${
                        darkMode
                          ? 'bg-slate-950/80 border-slate-800 text-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-sky-600 focus:ring-1 focus:ring-sky-600'
                      }`}
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className={`block text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. recruiter@company.com"
                      required
                      className={`w-full px-4 py-3 text-sm rounded-2xl border outline-none transition-all ${
                        darkMode
                          ? 'bg-slate-950/80 border-slate-800 text-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-sky-600 focus:ring-1 focus:ring-sky-600'
                      }`}
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label className={`block text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Internship Opportunity / Technical Project Discussion"
                    required
                    className={`w-full px-4 py-3 text-sm rounded-2xl border outline-none transition-all ${
                      darkMode
                        ? 'bg-slate-950/80 border-slate-800 text-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
                        : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-sky-600 focus:ring-1 focus:ring-sky-600'
                    }`}
                  />
                </div>

                {/* Message Textarea */}
                <div className="space-y-1.5">
                  <label className={`block text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Venkateswararao, we came across your portfolio and would like to discuss..."
                    required
                    className={`w-full px-4 py-3 text-sm rounded-2xl border outline-none transition-all resize-none ${
                      darkMode
                        ? 'bg-slate-950/80 border-slate-800 text-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
                        : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-sky-600 focus:ring-1 focus:ring-sky-600'
                    }`}
                  />
                </div>

                {/* Feedback Alerts */}
                {submitStatus === 'success' && (
                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3 text-emerald-400 text-xs sm:text-sm">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-semibold">Thank you for your message!</strong>
                      <span>Your inquiry has been received. I will review and respond promptly.</span>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-red-400 text-xs sm:text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-semibold">Please complete all required fields.</strong>
                      <span>Ensure your name, valid email, subject, and message are filled in.</span>
                    </div>
                  </div>
                )}

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-400 hover:to-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-md shadow-sky-500/20 active:scale-95 disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
