import React from 'react';
import { ShieldCheck, Handshake, Users, Lock, CheckCircle2, FileText, Sparkles } from 'lucide-react';

export const CorePillars: React.FC = () => {
  return (
    <section id="pillars" className="py-24 bg-slate-100 dark:bg-[#0a1017] border-b border-slate-200 dark:border-white/5 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-700 dark:text-[#f5d680] mb-2">
            The Foundation
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Remains Constant
          </h2>
          <p className="text-base font-semibold text-slate-700 dark:text-slate-300 mt-2">
            Your business evolves. Our commitment remains.
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
            At every stage, our relationship is built on the same principles. Because business growth is not only about what you achieve, but also about the confidence and trust you have in the people supporting your journey.
          </p>
        </div>

        {/* 3 Core Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1: Confidentiality */}
          <div className="bg-white dark:bg-[#141f2d] p-8 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-[#f38545]/60 transition-colors flex flex-col justify-between group shadow-sm dark:shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-[#0a1017] border border-orange-200 dark:border-white/10 flex items-center justify-center text-[#f38545] group-hover:scale-105 transition-transform">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Confidentiality</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Your ideas, plans, proprietary strategies, and commercial opportunities deserve to be handled with absolute discretion and care. We safeguard sensitive business information through rigorous bilateral confidentiality agreements and internal handling safeguards.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/5 space-y-2">
              <div className="flex items-center text-xs text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#f38545] shrink-0" />
                <span>Strict bilateral Non-Disclosure Agreements (NDAs)</span>
              </div>
              <div className="flex items-center text-xs text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#f38545] shrink-0" />
                <span>Protected data handling & restricted access</span>
              </div>
              <div className="flex items-center text-xs text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#f38545] shrink-0" />
                <span>Discreet tender & bidding governance</span>
              </div>
            </div>
          </div>

          {/* Pillar 2: Trust */}
          <div className="bg-white dark:bg-[#141f2d] p-8 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-amber-600/60 dark:hover:border-[#f5d680]/50 transition-colors flex flex-col justify-between group shadow-sm dark:shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-[#0a1017] border border-amber-200 dark:border-white/10 flex items-center justify-center text-amber-600 dark:text-[#f5d680] group-hover:scale-105 transition-transform">
                <Handshake className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Trust</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                We value transparent communication, dependable collaboration, and a genuine understanding of your goals. Our role is to help you make informed decisions—not add to the complexity. We provide objective assessments with complete integrity.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/5 space-y-2">
              <div className="flex items-center text-xs text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-amber-600 dark:text-[#f5d680] shrink-0" />
                <span>Direct, unfiltered strategic clarity</span>
              </div>
              <div className="flex items-center text-xs text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-amber-600 dark:text-[#f5d680] shrink-0" />
                <span>Dependable timelines & operational accountability</span>
              </div>
              <div className="flex items-center text-xs text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-amber-600 dark:text-[#f5d680] shrink-0" />
                <span>Long-term aligned commercial partnerships</span>
              </div>
            </div>
          </div>

          {/* Pillar 3: Counsel of Experts */}
          <div className="bg-white dark:bg-[#141f2d] p-8 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/40 transition-colors flex flex-col justify-between group shadow-sm dark:shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-[#0a1017] border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-800 dark:text-white group-hover:scale-105 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Counsel of Experts</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                A synchronized multidisciplinary team bringing together legal, digital marketing, bid and tender, and business strategy expertise—so the right perspectives can support the right decisions at the right stage of your corporate journey.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/5 space-y-2">
              <div className="flex items-center text-xs text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-slate-700 dark:text-white shrink-0" />
                <span>Synchronized cross-functional insight</span>
              </div>
              <div className="flex items-center text-xs text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-slate-700 dark:text-white shrink-0" />
                <span>Access to certified corporate legal networks</span>
              </div>
              <div className="flex items-center text-xs text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-slate-700 dark:text-white shrink-0" />
                <span>Executive-level execution on every mandate</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
