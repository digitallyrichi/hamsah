import React, { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  Building2,
} from 'lucide-react';
import { WhatsAppIcon, WHATSAPP_URL } from './WhatsAppButton';
import corporateGurugramHubImg from '../assets/images/corporate_gurugram_hub_1794306239246.jpg';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-100 dark:bg-[#0e1620] relative border-b border-slate-200 dark:border-white/5 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-700 dark:text-[#f5d680] mb-2">
            Engagement & Headquarters
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Connect With Our Leadership
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            Whether preparing a high-value tender proposal, coordinating complex corporate setup, or structuring a multi-year scaling roadmap, our Gurugram advisory desk is available for confidential deliberations.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          
          {/* Card 1: Official WhatsApp Advisory Desk */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#141f2d] border border-slate-200 dark:border-white/10 hover:border-[#25D366]/60 transition-colors flex flex-col justify-between shadow-sm dark:shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-[#0a1017] border border-emerald-500/20 text-[#25D366] flex items-center justify-center">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-1 rounded-md bg-[#25D366]/15 border border-[#25D366]/30 text-[#128C7E] dark:text-[#25D366] text-xs font-semibold flex items-center">
                  Active Desk
                </span>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                Confidential Instant Messaging
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                WhatsApp Direct Advisory
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Converse in real-time with an engagement principal under strict mutual non-disclosure covenants. Mon–Fri 9:00 AM to 7:00 PM IST.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-white/5">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold flex items-center justify-center transition-colors shadow-xs"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 mr-1.5" />
                Start WhatsApp Deliberation &rarr;
              </a>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#141f2d] border border-slate-200 dark:border-white/10 hover:border-amber-600/60 dark:hover:border-[#f5d680]/50 transition-colors flex flex-col justify-between shadow-sm dark:shadow-xl">
            <div>
              <div className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-[#0a1017] border border-slate-200 dark:border-white/10 text-amber-600 dark:text-[#f5d680] flex items-center justify-center mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                Official Correspondence
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 break-all">
                hamsahgroupinfo@gmail.com
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Submit RFx specifications, non-disclosure requests, or introductory dossiers.
              </p>
            </div>

            <div className="flex items-center space-x-3 pt-4 border-t border-slate-100 dark:border-white/5">
              <a
                href="mailto:hamsahgroupinfo@gmail.com"
                className="text-xs font-semibold text-amber-700 dark:text-[#f5d680] hover:text-amber-800 dark:hover:text-white transition-colors flex items-center"
              >
                Send Email &rarr;
              </a>
              <button
                onClick={() => copyToClipboard('hamsahgroupinfo@gmail.com')}
                className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors flex items-center cursor-pointer ml-auto"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <span className="text-emerald-600 dark:text-emerald-400 flex items-center font-medium">
                    <Check className="w-3.5 h-3.5 mr-1" /> Copied
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Copy className="w-3.5 h-3.5 mr-1" /> Copy
                  </span>
                )}
              </button>
            </div>
          </div>

        </div>

        {/* Corporate Hub Visual Banner */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-900 dark:bg-[#141f2d] relative min-h-[300px] sm:min-h-[360px] flex flex-col justify-end shadow-md">
          <img
            src={corporateGurugramHubImg}
            alt="HAMSAH Group Solutions Gurugram Headquarters Skyline"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
          
          <div className="relative z-10 p-6 sm:p-10 space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-[#f5d680] uppercase tracking-wider">
              <Building2 className="w-4 h-4" />
              <span>Gurugram Advisory Hub</span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Located in India&apos;s Foremost Enterprise Corridor
            </h4>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Positioned to serve rapid-growth ventures, corporate contractors, and global institutions expanding into the Indian marketplace.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
