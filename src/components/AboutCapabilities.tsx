import React, { useState } from 'react';
import {
  FileCheck2,
  TrendingUp,
  Scale,
  Compass,
  ArrowUpRight,
  CheckCircle2,
  Shield,
  Layers,
} from 'lucide-react';
import { PRACTICE_AREAS } from '../data/lifecycleData';
import capabilitiesBusinessStrategyImg from '../assets/images/capabilities_business_strategy_1794306239115.jpg';
import advisoryLegalBiddingImg from '../assets/images/advisory_legal_bidding_1794306240002.jpg';

interface AboutCapabilitiesProps {
  onSelectPractice: (practiceTitle: string) => void;
}

export const AboutCapabilities: React.FC<AboutCapabilitiesProps> = ({ onSelectPractice }) => {
  const [activePracticeId, setActivePracticeId] = useState<string>('bid-tender');

  const getPracticeIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCheck2':
        return <FileCheck2 className="w-5 h-5 text-[#f38545]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-amber-600 dark:text-[#f5d680]" />;
      case 'Scale':
        return <Scale className="w-5 h-5 text-[#f38545]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-amber-600 dark:text-[#f5d680]" />;
      default:
        return <Layers className="w-5 h-5 text-slate-900 dark:text-white" />;
    }
  };

  const selectedPractice =
    PRACTICE_AREAS.find((p) => p.id === activePracticeId) || PRACTICE_AREAS[0];

  return (
    <section id="about" className="py-24 bg-white dark:bg-[#0a1017] border-b border-slate-200 dark:border-white/5 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Story: Who We Are */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#f38545]">
              Who We Are
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
              Multidisciplinary Expertise for High-Stakes Business Decisions
            </h2>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong className="text-slate-900 dark:text-white font-semibold">HAMSAH Group Solutions</strong> is a dedicated business consulting and solutions partner bringing together deep functional expertise across legal support, digital marketing, bid and tender management, and corporate strategy.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              We help businesses navigate the complexities of building, establishing, and scaling an enterprise. Whether you are exploring an initial concept, entering a contested market, pursuing multi-million government or commercial contracts, or orchestrating international expansion, our team works directly with leadership to transform ambition into disciplined execution.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#141f2d] border border-slate-200 dark:border-white/10 text-xs text-slate-700 dark:text-slate-300 space-y-1">
              <span className="font-semibold text-amber-700 dark:text-[#f5d680] block">Our Delivery Standard:</span>
              <p className="italic text-slate-600 dark:text-slate-400">
                Specialist knowledge combined with strategic clarity and practical execution—giving clients the certainty to make informed moves without friction.
              </p>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#141f2d] relative group shadow-sm">
              <img
                src={capabilitiesBusinessStrategyImg}
                alt="Business Strategy Planning Session"
                referrerPolicy="no-referrer"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 bg-white dark:bg-[#0e1620]">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Strategic Enterprise Planning</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Comprehensive market validation, revenue modeling, and commercialization roadmaps.
                </p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#141f2d] relative group shadow-sm">
              <img
                src={advisoryLegalBiddingImg}
                alt="Legal Coordination & Bid Management Still Life"
                referrerPolicy="no-referrer"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 bg-white dark:bg-[#0e1620]">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Bid Governance & Legal Diligence</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Precision RFx responses, contract compliance, and legal setup coordination.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section: What We Do (Our 4 Practice Disciplines) */}
        <div id="capabilities" className="pt-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-[#f5d680] mb-2">
                Our Capabilities
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Four Integrated Practice Disciplines
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
              Tailored business solutions engineered to meet you at your exact stage of maturity and drive measurable commercial outcomes.
            </p>
          </div>

          {/* Practice Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {PRACTICE_AREAS.map((practice) => {
              const isSelected = practice.id === activePracticeId;
              return (
                <div
                  key={practice.id}
                  onClick={() => setActivePracticeId(practice.id)}
                  className={`p-6 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white dark:bg-[#141f2d] border-amber-600 dark:border-[#f5d680]/60 shadow-lg shadow-slate-200/60 dark:shadow-[#f5d680]/5'
                      : 'bg-slate-50 dark:bg-[#0e1620] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/25 hover:bg-slate-100/80 dark:hover:bg-[#121c28]'
                  }`}
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-white dark:bg-[#0a1017] border border-slate-200 dark:border-white/10 flex items-center justify-center mb-4 shadow-sm">
                      {getPracticeIcon(practice.iconName)}
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">{practice.title}</h4>
                    <p className="text-xs text-amber-700 dark:text-[#f5d680] font-semibold mb-3">{practice.tagline}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{practice.description}</p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-xs">
                    <span
                      className={`font-semibold ${
                        isSelected ? 'text-amber-700 dark:text-[#f5d680]' : 'text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      {isSelected ? 'Active Focus' : 'Inspect Features'}
                    </span>
                    <ArrowUpRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? 'text-amber-700 dark:text-[#f5d680] translate-x-0.5 -translate-y-0.5' : 'text-slate-400 dark:text-slate-500'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Deep-Dive Inspection Box for Selected Practice */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#141f2d] border border-slate-200 dark:border-white/10 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center space-x-2 text-xs font-semibold text-amber-700 dark:text-[#f5d680] uppercase tracking-wider">
                  <span>Selected Practice Scope</span>
                  <span className="text-slate-400 dark:text-slate-500" aria-hidden="true">·</span>
                  <span>{selectedPractice.title}</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {selectedPractice.tagline}
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {selectedPractice.description}
                </p>

                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-3">
                    Core Operational Deliverables
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedPractice.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-[#f5d680] mr-2 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-50 dark:bg-[#0a1017] p-6 rounded-xl border border-slate-200 dark:border-white/10 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-[#f38545]/15 text-[#f38545] flex items-center justify-center">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900 dark:text-white">Confidential Advisory</h5>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">Protected under reciprocal non-disclosure</p>
                  </div>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  Need direct counsel on <strong>{selectedPractice.title}</strong>? Our engagement principals conduct an initial diagnostic to assess scope, risk factors, and timeline.
                </p>
                <button
                  onClick={() => onSelectPractice(selectedPractice.title)}
                  className="w-full py-2.5 rounded-lg bg-[#f38545] hover:bg-[#dd6d2d] text-white font-semibold text-xs transition-colors flex items-center justify-center cursor-pointer shadow-md"
                >
                  Book Consultation for {selectedPractice.title}
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
