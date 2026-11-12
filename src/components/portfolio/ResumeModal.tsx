import React, { useState } from 'react';
import { X, Download, FileText, ExternalLink, Check, Copy, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    const fullUrl = window.location.origin + PORTFOLIO_DATA.personal.resumeUrl;
    navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div 
        className="relative flex flex-col w-full max-w-4xl h-[90vh] max-h-[920px] bg-[#0A0D14] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#0E121B]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-white text-base sm:text-lg">
                  Deepankar_Sharma_Resume.pdf
                </h3>
                <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  Verified PDF
                </span>
              </div>
              <p className="text-xs text-zinc-400">
                UI/UX Designer & Frontend Developer • 2+ Years Experience • Gurgaon, India
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              title="Copy PDF Link"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Link Copied' : 'Copy Link'}
            </button>
            <a
              href={PORTFOLIO_DATA.personal.downloadEndpoint}
              download="Deepankar_Sharma_Resume.pdf"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 rounded-lg transition shadow-lg shadow-indigo-600/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-lg transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Viewer Container */}
        <div className="flex-1 bg-[#05070B] relative overflow-hidden flex flex-col">
          <iframe
            src={`${PORTFOLIO_DATA.personal.resumeUrl}#toolbar=1&navpanes=0&scrollbar=1`}
            title="Deepankar Sharma Resume"
            className="w-full h-full border-none"
          />
        </div>

        {/* Modal Footer */}
        <div className="flex flex-wrap items-center justify-between px-6 py-3 border-t border-white/[0.08] bg-[#0E121B] text-xs text-zinc-400">
          <div className="flex items-center gap-4">
            <span>Direct phone: <strong className="text-white">+91 9599880107</strong></span>
            <span className="hidden sm:inline text-zinc-600">•</span>
            <span className="hidden sm:inline">Email: <strong className="text-white">Sharmadeepankar0712@gmail.com</strong></span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 hover:underline"
            >
              Open in new browser tab <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
