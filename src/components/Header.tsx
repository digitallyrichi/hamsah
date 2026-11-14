import React, { useState } from 'react';
import { Mail, MapPin, Calendar, Menu, X, ShieldCheck, Handshake, Users } from 'lucide-react';
import { WhatsAppIcon, WHATSAPP_URL } from './WhatsAppButton';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  onBookClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-[#0a1017]/95 backdrop-blur-md border-b border-slate-200 dark:border-white/10 transition-colors">
      {/* Top Advisory Trust Ticker */}
      <div className="bg-slate-100 dark:bg-[#0e1620] border-b border-slate-200 dark:border-white/5 py-2 px-4 text-xs font-medium text-slate-600 dark:text-slate-400 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          {/* Trust Pillars */}
          <div className="flex items-center space-x-5 sm:space-x-8 text-[11px] sm:text-xs">
            <span className="inline-flex items-center text-slate-700 dark:text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-[#f38545]" />
              Confidentiality
            </span>
            <span className="inline-flex items-center text-slate-700 dark:text-slate-300">
              <Handshake className="w-3.5 h-3.5 mr-1.5 text-amber-600 dark:text-[#f5d680]" />
              Trust
            </span>
            <span className="inline-flex items-center text-slate-700 dark:text-slate-300">
              <Users className="w-3.5 h-3.5 mr-1.5 text-slate-700 dark:text-slate-300" />
              Counsel of Experts
            </span>
          </div>

          {/* Quick Contact, WhatsApp & Location */}
          <div className="flex items-center space-x-5 text-xs">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-300 hover:text-[#25D366] transition-colors flex items-center font-medium"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 mr-1.5 text-[#25D366]" />
              <span>Chat on WhatsApp</span>
            </a>
            <span className="hidden md:inline text-slate-300 dark:text-slate-600">|</span>
            <span className="hidden md:flex items-center text-slate-600 dark:text-slate-400">
              <MapPin className="w-3.5 h-3.5 mr-1.5 text-amber-600 dark:text-[#f5d680]" />
              <span>Gurugram, Haryana</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Strictly conforms to 3-Zone Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single element) */}
        <a href="#" className="flex items-center group whitespace-nowrap shrink-0">
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
            <span className="text-[9px] tracking-[0.35em] font-semibold text-slate-500 dark:text-slate-400 -mt-0.5 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">
              GROUP SOLUTIONS
            </span>
          </div>
        </a>

        {/* Zone 2: 4-5 Navigation Links (single-line, clean text with subtle underlines) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a
            href="#about"
            className="hover:text-slate-950 dark:hover:text-white transition-colors py-1 relative group whitespace-nowrap shrink-0"
          >
            Who We Are
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 dark:bg-[#f5d680] transition-all duration-200 group-hover:w-full"></span>
          </a>
          <a
            href="#capabilities"
            className="hover:text-slate-950 dark:hover:text-white transition-colors py-1 relative group whitespace-nowrap shrink-0"
          >
            Capabilities
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 dark:bg-[#f5d680] transition-all duration-200 group-hover:w-full"></span>
          </a>
          <a
            href="#lifecycle"
            className="hover:text-slate-950 dark:hover:text-white transition-colors py-1 relative group whitespace-nowrap shrink-0"
          >
            Business Lifecycle
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 dark:bg-[#f5d680] transition-all duration-200 group-hover:w-full"></span>
          </a>
          <a
            href="#pillars"
            className="hover:text-slate-950 dark:hover:text-white transition-colors py-1 relative group whitespace-nowrap shrink-0"
          >
            Core Pillars
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 dark:bg-[#f5d680] transition-all duration-200 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="hover:text-slate-950 dark:hover:text-white transition-colors py-1 relative group whitespace-nowrap shrink-0"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 dark:bg-[#f5d680] transition-all duration-200 group-hover:w-full"></span>
          </a>
        </nav>

        {/* Zone 3: Actions (Theme Switcher + Book Consultation) */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Light / Dark Mode Toggle */}
          <ThemeToggle />

          <button
            onClick={onBookClick}
            className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#f38545] to-[#dd6d2d] hover:from-[#dd6d2d] hover:to-[#f38545] text-white font-semibold text-xs sm:text-sm shadow-lg shadow-[#f38545]/20 transition-all hover:scale-[1.02] flex items-center whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Book Consultation
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-100 dark:bg-[#141f2d] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#0a1017] border-b border-slate-200 dark:border-white/10 px-6 py-5 space-y-4 animate-in slide-in-from-top-2 duration-200 shadow-xl">
          <div className="flex flex-col space-y-3 text-sm font-medium text-slate-700 dark:text-slate-300">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-600 dark:hover:text-[#f5d680] transition-colors"
            >
              Who We Are
            </a>
            <a
              href="#capabilities"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-600 dark:hover:text-[#f5d680] transition-colors"
            >
              Capabilities
            </a>
            <a
              href="#lifecycle"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-600 dark:hover:text-[#f5d680] transition-colors"
            >
              Business Lifecycle
            </a>
            <a
              href="#pillars"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-600 dark:hover:text-[#f5d680] transition-colors"
            >
              Core Pillars
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-600 dark:hover:text-[#f5d680] transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Appearance Mode:</span>
              <ThemeToggle showLabel />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <a
                href="mailto:digitallyrichi@gmail.com,hamsahgroupinfo@gmail.com"
                className="text-xs text-slate-700 dark:text-slate-300 py-2 px-3 rounded-lg bg-slate-100 dark:bg-[#141f2d] border border-slate-200 dark:border-white/5 flex items-center justify-center hover:text-slate-900 dark:hover:text-white"
              >
                <Mail className="w-3.5 h-3.5 mr-1.5 text-amber-600 dark:text-[#f5d680]" />
                Email Desk
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#25D366] py-2 px-3 rounded-lg bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center font-medium"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 mr-1.5" />
                WhatsApp
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-2.5 rounded-lg bg-[#f38545] text-white font-semibold text-xs text-center flex items-center justify-center"
            >
              <Calendar className="w-3.5 h-3.5 mr-1.5" />
              Book Strategic Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
