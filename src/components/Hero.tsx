import React from 'react';
import { ArrowRight, ShieldCheck, Lock, Award, Building2 } from 'lucide-react';
import heroExecutiveAdvisoryImg from '../assets/images/hero_executive_advisory_1794306238964.jpg';

interface HeroProps {
  onExploreLifecycle: () => void;
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreLifecycle, onBookClick }) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden border-b border-slate-200 dark:border-white/5 transition-colors">
      {/* Subtle ambient lighting */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-amber-500/10 via-[#f38545]/10 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Provocative Strategic Thesis & Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed Kicker with subtle separator */}
            <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-[#f5d680]">
              <span>Multidisciplinary Business Advisory</span>
              <span className="text-slate-400 dark:text-slate-500" aria-hidden="true">·</span>
              <span className="text-slate-600 dark:text-slate-400">Gurugram, India</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12] text-balance">
              From Idea to Impact.{' '}
              <span className="block mt-1 bg-gradient-to-r from-slate-900 via-amber-700 to-[#f38545] dark:from-white dark:via-[#f5d680] dark:to-[#f38545] bg-clip-text text-transparent">
                From Ambition to Growth.
              </span>
            </h1>

            {/* Sub-paragraph */}
            <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 font-normal leading-relaxed max-w-2xl">
              The expertise to take the next step. The confidence to take the leap. We partner with enterprises to navigate complex challenges, secure high-value mandates, and build sustainable market authority.
            </p>

            {/* Core Pillars Line (Zero-pill discipline: unboxed metadata with bullet separators) */}
            <div className="pt-1 pb-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
              <span className="flex items-center text-slate-900 dark:text-slate-200">
                <Lock className="w-3.5 h-3.5 mr-1.5 text-[#f38545]" />
                Confidentiality Assured
              </span>
              <span className="text-slate-300 dark:text-slate-600 hidden sm:inline" aria-hidden="true">·</span>
              <span className="flex items-center text-slate-900 dark:text-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-amber-600 dark:text-[#f5d680]" />
                Objective Trust
              </span>
              <span className="text-slate-300 dark:text-slate-600 hidden sm:inline" aria-hidden="true">·</span>
              <span className="flex items-center text-slate-900 dark:text-slate-200">
                <Award className="w-3.5 h-3.5 mr-1.5 text-slate-900 dark:text-white" />
                Counsel of Experts
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onExploreLifecycle}
                className="px-7 py-3.5 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-[#0a1017] font-bold text-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-lg shadow-slate-900/10 dark:shadow-white/10 flex items-center justify-center cursor-pointer group"
              >
                Explore Business Lifecycle
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onBookClick}
                className="px-7 py-3.5 rounded-lg bg-white dark:bg-[#141f2d] border border-slate-300 dark:border-white/20 text-slate-800 dark:text-white font-semibold text-sm hover:border-[#f38545] dark:hover:border-[#f5d680] hover:text-[#f38545] dark:hover:text-[#f5d680] transition-colors flex items-center justify-center cursor-pointer shadow-sm"
              >
                Schedule Strategic Consultation
              </button>
            </div>

            {/* Institutional Quote Strip */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/10 text-xs italic text-slate-600 dark:text-slate-400">
              &ldquo;Whatever stage your business is in, move forward with confidence—backed by confidentiality, trust, and the counsel of experts.&rdquo;
            </div>
          </div>

          {/* Right Column: High-Impact Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl bg-slate-100 dark:bg-[#141f2d]">
              <img
                src={heroExecutiveAdvisoryImg}
                alt="HAMSAH Group Solutions executive advisory meeting in corporate boardroom"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] lg:h-[480px] object-cover filter brightness-[0.95] dark:brightness-[0.92] contrast-[1.05] hover:scale-105 transition-transform duration-700"
              />
              
              {/* Gradient scrim for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              {/* In-image caption / institutional overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 dark:bg-[#0a1017]/85 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-lg">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-semibold text-slate-900 dark:text-white">HAMSAH Advisory Group</span>
                  <span className="text-amber-700 dark:text-[#f5d680] font-mono">EST. GURUGRAM</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug">
                  Uniting legal support, digital positioning, bid management, and corporate strategy into single-point executive governance.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Institutional Metrics / Proof Bar (Full-width row below hero split) */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">4 Disciplines</div>
            <p className="text-xs text-slate-600 dark:text-slate-400">Legal, Marketing, Bids & Strategic Advisory</p>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-700 dark:text-[#f5d680] font-mono tabular-nums">8 Lifecycle Stages</div>
            <p className="text-xs text-slate-600 dark:text-slate-400">From First Concept to Global Expansion</p>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">100% Discretion</div>
            <p className="text-xs text-slate-600 dark:text-slate-400">Strict Non-Disclosure & Bilateral Protocols</p>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#f38545] font-mono tabular-nums">Gurugram HQ</div>
            <p className="text-xs text-slate-600 dark:text-slate-400">Supporting Clients Across India & Beyond</p>
          </div>
        </div>

      </div>
    </section>
  );
};
