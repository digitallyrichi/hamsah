import React from 'react';
import { ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';
import { WhatsAppIcon, WHATSAPP_URL } from './WhatsAppButton';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-[#0a1017] border-t border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 text-xs transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-200 dark:border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col">
              <div className="flex items-baseline tracking-wider">
                <span className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-[0.18em]">
                  H<span className="text-amber-600 dark:text-[#f5d680]">A</span>MS<span className="text-amber-600 dark:text-[#f5d680]">A</span>H
                </span>
                <div className="inline-flex flex-col space-y-1 ml-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f38545]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f38545]"></span>
                </div>
              </div>
              <span className="text-[9px] tracking-[0.35em] font-semibold text-slate-500 dark:text-slate-400 -mt-0.5">
                GROUP SOLUTIONS
              </span>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              Multidisciplinary business consulting and solutions partner across legal support, digital marketing, bid & tender management, and corporate strategy.
            </p>

            <div className="pt-2 text-[11px] text-amber-700 dark:text-[#f5d680] font-medium italic">
              &ldquo;Whatever stage your business is in, move forward with confidence—backed by confidentiality, trust, and the counsel of experts.&rdquo;
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Who We Are
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Our Capabilities
                </a>
              </li>
              <li>
                <a href="#lifecycle" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Business Lifecycle
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  What Remains Constant
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Book Consultation
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Contact & Office
                </a>
              </li>
            </ul>
          </div>

          {/* Practice Disciplines */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white block">
              Practice Disciplines
            </span>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>Bid & Tender Management</li>
              <li>Business & Revenue Strategy</li>
              <li>Legal Coordination & Setup</li>
              <li>Digital Marketing & Branding</li>
              <li>Prototype Commercialization</li>
              <li>Cross-Border & Regional Expansion</li>
            </ul>
          </div>

          {/* Headquarters & Hotline */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white block">
              Gurugram Desk
            </span>
            <div className="space-y-2 text-xs">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 text-amber-600 dark:text-[#f5d680] shrink-0 mt-0.5" />
                <span>Mehrauli Road, Gurugram, Haryana &ndash; 122009, India</span>
              </div>
              <div className="flex items-center">
                <WhatsAppIcon className="w-4 h-4 mr-2 text-[#128C7E] dark:text-[#25D366] shrink-0" />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-300 hover:text-[#128C7E] dark:hover:text-[#25D366] transition-colors"
                >
                  Official WhatsApp Advisory Desk
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-slate-500 dark:text-slate-300 shrink-0" />
                <a href="mailto:hamsahgroupinfo@gmail.com" className="hover:text-slate-900 dark:hover:text-white transition-colors break-all">
                  hamsahgroupinfo@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory & Legal Advisory Disclaimer */}
        <div className="py-6 border-b border-slate-200 dark:border-white/5 text-[11px] leading-relaxed text-slate-600 dark:text-slate-400">
          <p className="mb-2">
            <strong className="text-slate-800 dark:text-slate-300">Professional Advisory & Legal Services Disclaimer:</strong> HAMSAH Group Solutions provides multidisciplinary business strategy, digital marketing, and bid management support. Coordination of legal services is conducted strictly in accordance with local regulatory guidelines and jurisdiction allowances; regulated legal representational work is coordinated with certified external counsel.
          </p>
          <p className="text-slate-500">
            All proprietary business concepts, intellectual property, financial projections, and tender submissions are safeguarded under strict mutual non-disclosure covenants.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} HAMSAH Group Solutions. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-slate-600 dark:text-slate-400">Confidentiality Assured</span>
            <span>·</span>
            <span className="text-slate-600 dark:text-slate-400">Objective Trust</span>
            <span>·</span>
            <span className="text-slate-600 dark:text-slate-400">Counsel of Experts</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
