import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  ExternalLink, 
  Sparkles, 
  ArrowUpRight,
  ShieldCheck,
  RefreshCw,
  MessageSquare
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const ContactSection: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'Project Collaboration',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState<string>('');
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error');
      setFeedback('Please provide your name, valid email address, and project brief.');
      return;
    }

    setStatus('submitting');
    setFeedback('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        setStatus('success');
        setFeedback("Message dispatched successfully! Deepankar will review and reply within 24 hours.");
        setForm({
          name: '',
          email: '',
          subject: 'Project Collaboration',
          message: ''
        });
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus('error');
        setFeedback(data.detail || "Submission encountered an issue. You can also reach out directly via email.");
      }
    } catch {
      setStatus('error');
      setFeedback("Network timeout. Please email Sharmadeepankar0712@gmail.com directly.");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#07090F] border-t border-white/[0.06]">
      {/* Dynamic ambient glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono">
            <Mail className="w-3.5 h-3.5 text-indigo-400" />
            <span>LET'S CONNECT</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display">
            Have an idea? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-white">
              Let's make it happen.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            I'm always interested in creating meaningful digital experiences, solving interesting problems, and connecting with people who value great design and development.
          </p>
        </div>

        {/* Master Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Social Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-[#0D111A] border border-white/[0.08] hover:border-indigo-500/40 transition-all flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-zinc-500 block">Direct Email</span>
                  <a 
                    href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                    className="text-sm font-semibold text-white hover:text-indigo-400 transition"
                  >
                    {PORTFOLIO_DATA.personal.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(PORTFOLIO_DATA.personal.email, 'email')}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition"
                title="Copy Email"
              >
                {copiedItem === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-3xl bg-[#0D111A] border border-white/[0.08] hover:border-indigo-500/40 transition-all flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-zinc-500 block">Phone / WhatsApp</span>
                  <a 
                    href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/\s+/g, '')}`}
                    className="text-sm font-semibold text-white hover:text-cyan-400 transition"
                  >
                    {PORTFOLIO_DATA.personal.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopy(PORTFOLIO_DATA.personal.phone, 'phone')}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition"
                title="Copy Phone"
              >
                {copiedItem === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-3xl bg-[#0D111A] border border-white/[0.08] flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-zinc-500 block">Current Location</span>
                <span className="text-sm font-semibold text-white">
                  {PORTFOLIO_DATA.personal.location}
                </span>
              </div>
            </div>

            {/* Social Network Pills */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-[#0D111A] border border-white/[0.08] hover:border-indigo-500/40 hover:bg-[#121624] transition-all flex items-center justify-between group"
              >
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">Professional</span>
                  <span className="text-xs font-bold text-white group-hover:text-indigo-400 transition-colors">
                    LinkedIn
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.behance}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-[#0D111A] border border-white/[0.08] hover:border-cyan-500/40 hover:bg-[#121624] transition-all flex items-center justify-between group"
              >
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">Design Case Studies</span>
                  <span className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">
                    Behance
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
              </a>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 rounded-3xl bg-[#0D111C] border border-white/[0.08] shadow-2xl relative">
            
            <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-6">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-indigo-400" />
                <h3 className="font-bold text-white text-base">Direct Message & Inquiry</h3>
              </div>
              <span className="text-[11px] font-mono text-zinc-500">Replies usually &lt; 24h</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono uppercase text-zinc-400 block mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl bg-[#07090F] border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase text-zinc-400 block mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl bg-[#07090F] border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono uppercase text-zinc-400 block mb-2">
                  Subject / Project Type
                </label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="e.g. UI/UX Design System or Frontend Role"
                  className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl bg-[#07090F] border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500 transition"
                />
              </div>

              <div>
                <label className="text-xs font-mono uppercase text-zinc-400 block mb-2">
                  Message & Scope *
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your product, project timelines, and what you're looking to achieve..."
                  className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl bg-[#07090F] border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500 transition resize-none"
                />
              </div>

              {/* Status Alert Banner */}
              {feedback && (
                <div className={`p-4 rounded-xl text-xs flex items-center gap-2 ${
                  status === 'success' 
                    ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-300' 
                    : 'bg-rose-500/10 border border-rose-500/20 text-rose-300'
                }`}>
                  {status === 'success' ? <Check className="w-4 h-4 shrink-0" /> : <ShieldCheck className="w-4 h-4 shrink-0" />}
                  <span>{feedback}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-600 hover:brightness-110 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition shadow-xl shadow-indigo-600/25 flex items-center justify-center gap-2 active:scale-[0.99]"
              >
                {status === 'submitting' ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message to Deepankar</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-between pt-2 text-[11px] text-zinc-500 font-mono">
                <span>Direct notification via FastAPI</span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" /> Privacy Guaranteed
                </span>
              </div>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
