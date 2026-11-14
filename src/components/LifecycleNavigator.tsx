import React, { useState } from 'react';
import {
  LIFECYCLE_STAGES,
  LifecycleStage,
} from '../data/lifecycleData';
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Target,
  Calendar,
  Layers,
  Eye,
  AlertTriangle,
  Lightbulb,
  FlaskConical,
  Compass,
  Rocket,
  Building,
  Award,
  TrendingUp,
  Globe,
  SlidersHorizontal,
  Check,
  Copy,
  HelpCircle,
  Sparkles,
  ShieldCheck,
  Clock,
} from 'lucide-react';
import { WhatsAppIcon, WHATSAPP_URL } from './WhatsAppButton';

interface LifecycleNavigatorProps {
  onSelectStageForBooking: (stageTitle: string) => void;
}

export const LifecycleNavigator: React.FC<LifecycleNavigatorProps> = ({
  onSelectStageForBooking,
}) => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'stepper' | 'diagnostic' | 'overview'>('stepper');
  const [selectedPhaseFilter, setSelectedPhaseFilter] = useState<string>('All');
  const [activeCardTab, setActiveCardTab] = useState<'deliverables' | 'risks' | 'checklist'>('deliverables');

  // Interactive Checklist State per stage
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // Copy feedback state
  const [copiedStageBrief, setCopiedStageBrief] = useState(false);

  // Diagnostic state
  const [diagChallenge, setDiagChallenge] = useState<number | null>(null);

  const currentStage: LifecycleStage = LIFECYCLE_STAGES[activeStageIndex];

  const handleNext = () => {
    setActiveStageIndex((prev) => (prev + 1) % LIFECYCLE_STAGES.length);
  };

  const handlePrev = () => {
    setActiveStageIndex((prev) =>
      prev === 0 ? LIFECYCLE_STAGES.length - 1 : prev - 1
    );
  };

  const toggleChecklistItem = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const calculateStageReadiness = () => {
    const list = currentStage.readinessChecklist;
    const completedCount = list.filter((item) => checkedItems[item.id]).length;
    return {
      completed: completedCount,
      total: list.length,
      percentage: Math.round((completedCount / list.length) * 100),
    };
  };

  const copyStageSummary = () => {
    const text = `HAMSAH Group Solutions — ${currentStage.stageNumber}: ${currentStage.title}
Tagline: ${currentStage.tagline}
Target Outcome: ${currentStage.targetOutcome}
Key Deliverables:
${currentStage.deliverables.map((d, i) => `  ${i + 1}. ${d}`).join('\n')}
Critical Trap Avoided: ${currentStage.criticalTrap}
Confidentiality & Trust Assured.`;

    navigator.clipboard.writeText(text);
    setCopiedStageBrief(true);
    setTimeout(() => setCopiedStageBrief(false), 2500);
  };

  // Diagnostic questions
  const DIAGNOSTIC_QUESTIONS = [
    {
      id: 0,
      label: 'We are conceptualizing an idea or testing economic feasibility before investing capital',
      matchedStageIndex: 0,
    },
    {
      id: 1,
      label: 'We have built a prototype/pilot but need customer discovery and willingness-to-pay validation',
      matchedStageIndex: 1,
    },
    {
      id: 2,
      label: 'We have early adopters, but struggle to penetrate skeptical mainstream enterprise clients (The Chasm)',
      matchedStageIndex: 2,
    },
    {
      id: 3,
      label: 'We are preparing for a major market launch, substantial capital deployment, or high-value contract commitment',
      matchedStageIndex: 3,
    },
    {
      id: 4,
      label: 'We are an operating new venture needing formal operating rhythms, documentation, and accessible bid opportunities',
      matchedStageIndex: 4,
    },
    {
      id: 5,
      label: 'We have established delivery and want to win high-value corporate/government tenders and entrench market authority',
      matchedStageIndex: 5,
    },
    {
      id: 6,
      label: 'We have reliable revenue and need intentional, disciplined enterprise growth and strategic partnerships',
      matchedStageIndex: 6,
    },
    {
      id: 7,
      label: 'We are expanding across domestic borders, into new industries, or entering international jurisdictions',
      matchedStageIndex: 7,
    },
  ];

  const getStageIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5 text-amber-600 dark:text-[#f5d680]" />;
      case 'FlaskConical':
        return <FlaskConical className="w-5 h-5 text-[#f38545]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-amber-600 dark:text-[#f5d680]" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-[#f38545]" />;
      case 'Building':
        return <Building className="w-5 h-5 text-amber-600 dark:text-[#f5d680]" />;
      case 'Award':
        return <Award className="w-5 h-5 text-[#f38545]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-amber-600 dark:text-[#f5d680]" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-[#f38545]" />;
      default:
        return <Sparkles className="w-5 h-5 text-slate-800 dark:text-white" />;
    }
  };

  const readiness = calculateStageReadiness();

  return (
    <section id="lifecycle" className="py-24 bg-slate-100/70 dark:bg-[#0e1620] relative border-b border-slate-200 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#f38545] mb-2">
            The Business Journey
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Your Business Lifecycle
          </h2>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mt-3 leading-relaxed">
            Every business moves through different stages. The challenges evolve, decisions become more complex, and opportunities demand higher precision. Explore how HAMSAH&apos;s multidisciplinary counsel supports your exact inflection point.
          </p>

          {/* View Mode Segmented Controls */}
          <div className="inline-flex items-center gap-1 p-1 bg-white dark:bg-[#141f2d] border border-slate-200 dark:border-white/10 rounded-xl mt-6 shadow-sm max-w-full overflow-x-auto">
            <button
              onClick={() => setViewMode('stepper')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center cursor-pointer whitespace-nowrap ${
                viewMode === 'stepper'
                  ? 'bg-slate-100 dark:bg-[#0a1017] text-amber-700 dark:text-[#f5d680] shadow-sm border border-slate-200 dark:border-white/10 font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5 mr-1.5" />
              Interactive Stepper
            </button>
            <button
              onClick={() => setViewMode('diagnostic')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center cursor-pointer whitespace-nowrap ${
                viewMode === 'diagnostic'
                  ? 'bg-slate-100 dark:bg-[#0a1017] text-[#f38545] shadow-sm border border-slate-200 dark:border-white/10 font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5 mr-1.5" />
              Find My Stage (Diagnostic)
            </button>
            <button
              onClick={() => setViewMode('overview')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center cursor-pointer whitespace-nowrap ${
                viewMode === 'overview'
                  ? 'bg-slate-100 dark:bg-[#0a1017] text-slate-900 dark:text-white shadow-sm border border-slate-200 dark:border-white/10 font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5 mr-1.5" />
              Full Roadmap Grid
            </button>
          </div>
        </div>

        {/* ----------------- MODE 1: INTERACTIVE STEPPER ----------------- */}
        {viewMode === 'stepper' && (
          <div>
            {/* Macro Phase Filter Bar */}
            <div className="flex items-center justify-between flex-wrap gap-3 mb-6 pb-2 border-b border-slate-200 dark:border-white/5">
              <div className="flex items-center gap-2 overflow-x-auto text-xs">
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mr-1">
                  Macro Phase:
                </span>
                {['All', 'Validation & Modeling', 'Market Leap & Infancy', 'Institutional Scale'].map((phase) => (
                  <button
                    key={phase}
                    onClick={() => setSelectedPhaseFilter(phase)}
                    className={`px-3 py-1 rounded-md text-xs transition-colors cursor-pointer whitespace-nowrap ${
                      selectedPhaseFilter === phase
                        ? 'bg-white dark:bg-[#1c2a3c] text-slate-900 dark:text-white font-semibold border border-slate-300 dark:border-[#f5d680]/30 shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                  >
                    {phase}
                  </button>
                ))}
              </div>

              <div className="text-xs text-slate-600 dark:text-slate-400 font-mono hidden sm:block">
                Stage {activeStageIndex + 1} of 8 · <span className="text-amber-700 dark:text-[#f5d680] font-bold">{currentStage.title}</span>
              </div>
            </div>

            {/* Stepper Progress Road & Stage Buttons */}
            <div className="relative mb-8">
              {/* Connected Track */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-300 dark:bg-white/10 -translate-y-1/2 hidden lg:block pointer-events-none" />

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 relative z-10">
                {LIFECYCLE_STAGES.map((stage, idx) => {
                  const isActive = idx === activeStageIndex;
                  const isFilteredOut =
                    selectedPhaseFilter !== 'All' && stage.phaseCategory !== selectedPhaseFilter;

                  return (
                    <button
                      key={stage.id}
                      onClick={() => setActiveStageIndex(idx)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                        isActive
                          ? 'bg-white dark:bg-[#1c2a3c] border-amber-600 dark:border-[#f5d680] shadow-lg text-slate-900 dark:text-white ring-1 ring-amber-600/40 dark:ring-[#f5d680]/50'
                          : isFilteredOut
                          ? 'bg-slate-100/50 dark:bg-[#0a1017]/60 border-slate-200 dark:border-white/5 text-slate-400 dark:text-slate-600 opacity-50'
                          : 'bg-white dark:bg-[#0a1017] border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-[#141f2d] hover:text-slate-900 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-white/20 shadow-sm'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span
                          className={`text-[10px] uppercase font-mono font-bold tracking-wider ${
                            isActive ? 'text-amber-700 dark:text-[#f5d680]' : 'text-slate-400 dark:text-slate-500'
                          }`}
                        >
                          {stage.stageNumber}
                        </span>
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] ${
                            isActive
                              ? 'bg-amber-100 dark:bg-[#f5d680]/20 text-amber-800 dark:text-[#f5d680] font-bold'
                              : 'bg-slate-100 dark:bg-white/5 text-slate-500'
                          }`}
                        >
                          {idx + 1}
                        </div>
                      </div>

                      <span className="text-xs font-bold leading-tight block truncate text-slate-800 dark:text-slate-200">
                        {stage.title}
                      </span>

                      {/* Small Indicator on bottom */}
                      {isActive && (
                        <div className="w-full h-1 bg-gradient-to-r from-[#f38545] to-amber-500 dark:to-[#f5d680] rounded-full mt-2" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Stage Presentation Card */}
            <div className="bg-white dark:bg-[#141f2d] rounded-2xl border border-slate-200 dark:border-white/10 p-6 sm:p-10 shadow-xl relative overflow-hidden transition-all duration-300">
              
              {/* Card Header Strip */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200 dark:border-white/10">
                <div className="flex items-center space-x-3 text-xs">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-[#0a1017] border border-slate-200 dark:border-white/10 flex items-center justify-center shadow-sm">
                    {getStageIcon(currentStage.iconName)}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-[#f38545] font-bold text-xs uppercase tracking-wider">
                        {currentStage.stageNumber}
                      </span>
                      <span className="text-slate-400 dark:text-slate-600" aria-hidden="true">·</span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-[#0a1017] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5">
                        {currentStage.phaseCategory}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-0.5">
                      {currentStage.title}
                    </h3>
                  </div>
                </div>

                {/* Sub-Tabs for Stage Deep-Dive */}
                <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-[#0a1017] border border-slate-200 dark:border-white/10 rounded-xl text-xs">
                  <button
                    onClick={() => setActiveCardTab('deliverables')}
                    className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                      activeCardTab === 'deliverables'
                        ? 'bg-white dark:bg-[#1c2a3c] text-slate-900 dark:text-white font-bold shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    Strategic Blueprint
                  </button>
                  <button
                    onClick={() => setActiveCardTab('risks')}
                    className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center ${
                      activeCardTab === 'risks'
                        ? 'bg-white dark:bg-[#1c2a3c] text-[#f38545] font-bold shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <AlertTriangle className="w-3.5 h-3.5 mr-1 text-[#f38545]" />
                    Risk Trap & Prevention
                  </button>
                  <button
                    onClick={() => setActiveCardTab('checklist')}
                    className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center ${
                      activeCardTab === 'checklist'
                        ? 'bg-white dark:bg-[#1c2a3c] text-amber-700 dark:text-[#f5d680] font-bold shadow-sm'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-amber-600 dark:text-[#f5d680]" />
                    Readiness Audit
                  </button>
                </div>
              </div>

              {/* TAB 1: STRATEGIC BLUEPRINT */}
              {activeCardTab === 'deliverables' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in-50 duration-200">
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <p className="text-sm font-semibold text-amber-700 dark:text-[#f5d680] mb-2">
                        &ldquo;{currentStage.tagline}&rdquo;
                      </p>
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {currentStage.summary}
                      </p>
                    </div>

                    {/* Target Outcome Box */}
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0a1017] border border-slate-200 dark:border-white/10 space-y-1.5">
                      <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#f38545]">
                        <Target className="w-4 h-4 text-[#f38545]" />
                        <span>Target Strategic Outcome</span>
                      </div>
                      <p className="text-sm text-slate-900 dark:text-white font-medium pl-6">
                        {currentStage.targetOutcome}
                      </p>
                    </div>

                    {/* How our experts help */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                        How Our Multidisciplinary Team Intervenes
                      </h4>
                      <div className="space-y-2.5">
                        {currentStage.howWeHelp.map((point, idx) => (
                          <div key={idx} className="flex items-start text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-[#f5d680] mr-2.5 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Deliverables & Meta */}
                  <div className="lg:col-span-5 space-y-5">
                    <div className="bg-slate-50 dark:bg-[#0a1017] p-6 rounded-xl border border-slate-200 dark:border-white/10 space-y-4 shadow-sm">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/5">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                          Mandatory Deliverables
                        </span>
                        <span className="text-[11px] font-mono text-amber-700 dark:text-[#f5d680] font-semibold flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {currentStage.typicalHorizon}
                        </span>
                      </div>

                      <div className="space-y-2.5">
                        {currentStage.deliverables.map((deliv, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-lg bg-white dark:bg-[#141f2d] border border-slate-200 dark:border-white/5 text-xs text-slate-800 dark:text-slate-200 font-medium flex items-center justify-between shadow-xs"
                          >
                            <span>{deliv}</span>
                            <span className="text-[10px] text-amber-700 dark:text-[#f5d680] font-mono font-bold">0{idx + 1}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-3 border-t border-slate-200 dark:border-white/10">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                          Specialist Practices Deployed
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {currentStage.recommendedPractices.map((prac, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] px-2.5 py-1 rounded bg-slate-200 dark:bg-[#1c2a3c] text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-white/5"
                            >
                              {prac}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: CRITICAL RISKS & HOW HAMSAH PREVENTS THEM */}
              {activeCardTab === 'risks' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in-50 duration-200">
                  <div className="p-6 rounded-xl bg-rose-50/60 dark:bg-[#0a1017] border border-rose-300 dark:border-rose-500/20 space-y-3">
                    <div className="flex items-center space-x-2 text-rose-600 dark:text-rose-400 text-xs font-bold uppercase tracking-wider">
                      <AlertTriangle className="w-4 h-4" />
                      <span>The Critical Stage Failure Mode</span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      Where Businesses Stumble in {currentStage.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {currentStage.criticalTrap}
                    </p>
                    <div className="pt-2 text-xs text-rose-800 dark:text-rose-300/80 bg-rose-100 dark:bg-rose-950/20 p-3 rounded-lg border border-rose-200 dark:border-rose-500/20">
                      Without multidisciplinary oversight, capital is misallocated, tenders are disqualified on technicalities, or messaging fails to connect with paying buyers.
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-amber-50/60 dark:bg-[#0a1017] border border-amber-300 dark:border-[#f5d680]/30 space-y-3">
                    <div className="flex items-center space-x-2 text-amber-700 dark:text-[#f5d680] text-xs font-bold uppercase tracking-wider">
                      <ShieldCheck className="w-4 h-4" />
                      <span>HAMSAH Strategic Intervention</span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      How Our Multidisciplinary Counsel De-Risks This Stage
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {currentStage.strategicIntervention}
                    </p>
                    <div className="pt-2 text-xs text-slate-700 dark:text-slate-300 bg-amber-100/60 dark:bg-[#1c2a3c] p-3 rounded-lg border border-amber-200 dark:border-white/5">
                      Our legal, bidding, marketing, and strategy experts review all documentation and go-to-market assumptions under strict bilateral confidentiality.
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: EXECUTIVE READINESS AUDIT CHECKLIST */}
              {activeCardTab === 'checklist' && (
                <div className="bg-slate-50 dark:bg-[#0a1017] p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-white/10 space-y-6 animate-in fade-in-50 duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-white/10">
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        Self-Diagnostic: Are You Ready for {currentStage.title}?
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Check off the foundational milestones your venture has already verified.
                      </p>
                    </div>

                    <div className="flex items-center space-x-3 bg-white dark:bg-[#141f2d] px-4 py-2 rounded-lg border border-slate-200 dark:border-white/10 shrink-0 shadow-sm">
                      <div className="text-right">
                        <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 block">
                          Stage Readiness
                        </span>
                        <span className="text-sm font-mono font-bold text-amber-700 dark:text-[#f5d680]">
                          {readiness.percentage}%
                        </span>
                      </div>
                      <div className="w-12 h-2 bg-slate-200 dark:bg-[#0a1017] rounded-full overflow-hidden border border-slate-300 dark:border-white/10">
                        <div
                          className="h-full bg-gradient-to-r from-[#f38545] to-amber-500 dark:to-[#f5d680] transition-all duration-300"
                          style={{ width: `${readiness.percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Checkbox Items */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentStage.readinessChecklist.map((item) => {
                      const isChecked = !!checkedItems[item.id];
                      return (
                        <div
                          key={item.id}
                          onClick={() => toggleChecklistItem(item.id)}
                          className={`p-3.5 rounded-lg border transition-all cursor-pointer flex items-start space-x-3 ${
                            isChecked
                              ? 'bg-amber-50 dark:bg-[#1c2a3c] border-amber-500 dark:border-[#f5d680]/60 text-slate-900 dark:text-white shadow-xs'
                              : 'bg-white dark:bg-[#141f2d] border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-white/20'
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 border ${
                              isChecked
                                ? 'bg-amber-500 dark:bg-[#f5d680] border-amber-600 dark:border-[#f5d680] text-white dark:text-[#0a1017]'
                                : 'border-slate-300 dark:border-white/20 bg-slate-50 dark:bg-[#0a1017]'
                            }`}
                          >
                            {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                          <div className="space-y-0.5 text-xs">
                            <span className="font-medium block leading-snug">{item.label}</span>
                            <span className="text-[10px] text-[#f38545] font-mono font-semibold">
                              Weight: {item.importance}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Readiness Advice */}
                  <div className="p-4 rounded-lg bg-white dark:bg-[#141f2d] border border-slate-200 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-sm">
                    <span className="text-slate-700 dark:text-slate-300">
                      {readiness.percentage === 100
                        ? 'Excellent foundation! Our team will help you execute the transition to the next stage seamlessly.'
                        : `You have completed ${readiness.completed} of ${readiness.total} milestones. HAMSAH will structure and execute the remaining ${readiness.total - readiness.completed} deliverables.`}
                    </span>
                    <button
                      onClick={() =>
                        onSelectStageForBooking(
                          `${currentStage.stageNumber}: ${currentStage.title} (Readiness: ${readiness.percentage}%)`
                        )
                      }
                      className="px-3.5 py-1.5 rounded bg-amber-500 hover:bg-amber-600 dark:bg-[#f5d680] text-white dark:text-[#0a1017] font-bold text-xs whitespace-nowrap dark:hover:bg-[#fae4a5] transition-colors cursor-pointer shrink-0 shadow-sm"
                    >
                      Audit This Stage with HAMSAH
                    </button>
                  </div>
                </div>
              )}

              {/* Action Toolbar on Bottom */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handlePrev}
                    className="px-3 py-2 rounded-lg bg-slate-100 dark:bg-[#0a1017] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors text-xs flex items-center cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                    Previous Stage
                  </button>
                  <button
                    onClick={handleNext}
                    className="px-3 py-2 rounded-lg bg-slate-100 dark:bg-[#0a1017] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors text-xs flex items-center cursor-pointer"
                  >
                    Next Stage
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={copyStageSummary}
                    className="px-3 py-2 rounded-lg bg-slate-100 dark:bg-[#0a1017] border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-xs flex items-center cursor-pointer transition-colors"
                    title="Copy stage brief to share with team"
                  >
                    {copiedStageBrief ? (
                      <>
                        <Check className="w-3.5 h-3.5 mr-1.5 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Brief Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 mr-1.5" />
                        <span>Copy Stage Brief</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`https://wa.me/919580653006?text=${encodeURIComponent(
                      `Hello HAMSAH Group Solutions, I am reviewing ${currentStage.stageNumber}: ${currentStage.title} on your website and would like to discuss our requirements.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-[#25D366] text-xs font-semibold flex items-center transition-colors cursor-pointer"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 mr-1.5" />
                    Inquire via WhatsApp
                  </a>

                  <button
                    onClick={() =>
                      onSelectStageForBooking(
                        `${currentStage.stageNumber}: ${currentStage.title}`
                      )
                    }
                    className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#f38545] to-[#dd6d2d] hover:from-[#dd6d2d] hover:to-[#f38545] text-white font-bold text-xs flex items-center shadow-lg shadow-[#f38545]/20 cursor-pointer transition-all"
                  >
                    <Calendar className="w-3.5 h-3.5 mr-1.5" />
                    Book Consultation for {currentStage.title}
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ----------------- MODE 2: INTERACTIVE STAGE DIAGNOSTIC ----------------- */}
        {viewMode === 'diagnostic' && (
          <div className="bg-white dark:bg-[#141f2d] rounded-2xl border border-slate-200 dark:border-white/10 p-6 sm:p-10 shadow-xl animate-in fade-in-50 duration-200">
            <div className="max-w-3xl mx-auto space-y-8">
              
              <div className="text-center space-y-2">
                <span className="text-xs font-mono font-bold text-[#f38545] uppercase tracking-wider">
                  Self-Service Advisory Finder
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  Identify Your Business Stage in 60 Seconds
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  Select the statement that most accurately reflects your current commercial challenge to receive a tailored advisory roadmap.
                </p>
              </div>

              {/* Step 1: Challenge selection */}
              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-[#f5d680]">
                  1. Which statement best represents your current business status?
                </label>
                <div className="grid grid-cols-1 gap-2.5">
                  {DIAGNOSTIC_QUESTIONS.map((q) => {
                    const isSelected = diagChallenge === q.id;
                    return (
                      <div
                        key={q.id}
                        onClick={() => setDiagChallenge(q.id)}
                        className={`p-3.5 rounded-xl border text-xs sm:text-sm cursor-pointer transition-all flex items-start space-x-3 ${
                          isSelected
                            ? 'bg-amber-50 dark:bg-[#1c2a3c] border-amber-600 dark:border-[#f5d680] text-slate-900 dark:text-white shadow-sm font-medium'
                            : 'bg-slate-50 dark:bg-[#0a1017] border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-white/20'
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded-full border mt-0.5 shrink-0 flex items-center justify-center ${
                            isSelected
                              ? 'border-amber-600 dark:border-[#f5d680] bg-amber-600 dark:bg-[#f5d680]'
                              : 'border-slate-300 dark:border-white/20'
                          }`}
                        >
                          {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white dark:bg-[#0a1017]" />}
                        </div>
                        <span className="leading-snug">{q.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Diagnostic Result */}
              {diagChallenge !== null && (
                <div className="p-6 rounded-xl bg-slate-50 dark:bg-[#0a1017] border border-amber-500/40 dark:border-[#f5d680]/40 space-y-4 animate-in fade-in-50 duration-300 shadow-sm">
                  <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-[#f5d680]">
                    <Sparkles className="w-4 h-4" />
                    <span>Diagnostic Result & Strategic Recommendation</span>
                  </div>

                  {(() => {
                    const matchedStage = LIFECYCLE_STAGES[diagChallenge];
                    return (
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-white/10">
                          <div>
                            <span className="text-xs text-slate-500 dark:text-slate-400 block">Your Primary Lifecycle Stage:</span>
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                              {matchedStage.stageNumber}: {matchedStage.title}
                            </h4>
                            <p className="text-xs text-amber-700 dark:text-[#f5d680] font-semibold">{matchedStage.tagline}</p>
                          </div>
                          <span className="text-xs px-3 py-1 rounded bg-white dark:bg-[#1c2a3c] text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-white/5 font-medium">
                            Phase: {matchedStage.phaseCategory}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                          {matchedStage.summary}
                        </p>

                        <div className="p-3.5 rounded-lg bg-white dark:bg-[#141f2d] border border-slate-200 dark:border-white/5 text-xs text-slate-700 dark:text-slate-300 space-y-1 shadow-xs">
                          <strong className="text-slate-900 dark:text-white block">Key Advisory Focus:</strong>
                          <span>{matchedStage.strategicIntervention}</span>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                          <button
                            onClick={() => {
                              setActiveStageIndex(diagChallenge);
                              setViewMode('stepper');
                            }}
                            className="flex-1 py-2.5 px-4 rounded-lg bg-white dark:bg-[#0e1620] border border-slate-300 dark:border-white/20 text-slate-800 dark:text-white font-semibold text-xs hover:border-amber-600 dark:hover:border-[#f5d680] hover:text-amber-700 dark:hover:text-[#f5d680] transition-colors flex items-center justify-center cursor-pointer shadow-xs"
                          >
                            Explore Detailed {matchedStage.title} Stepper &rarr;
                          </button>
                          <button
                            onClick={() =>
                              onSelectStageForBooking(
                                `${matchedStage.stageNumber}: ${matchedStage.title} (Diagnosed)`
                              )
                            }
                            className="flex-1 py-2.5 px-4 rounded-lg bg-[#f38545] hover:bg-[#dd6d2d] text-white font-bold text-xs transition-colors flex items-center justify-center cursor-pointer shadow-md"
                          >
                            <Calendar className="w-3.5 h-3.5 mr-1.5" />
                            Book Consultation for {matchedStage.title}
                          </button>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}

            </div>
          </div>
        )}

        {/* ----------------- MODE 3: FULL ROADMAP OVERVIEW GRID ----------------- */}
        {viewMode === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in-50 duration-200">
            {LIFECYCLE_STAGES.map((stage, idx) => (
              <div
                key={stage.id}
                className="p-6 rounded-2xl bg-white dark:bg-[#141f2d] border border-slate-200 dark:border-white/10 flex flex-col justify-between hover:border-amber-500/80 dark:hover:border-[#f5d680]/50 transition-colors group shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-[#f38545] font-bold">
                      {stage.stageNumber}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-[#0a1017] text-slate-600 dark:text-slate-400 font-medium">
                      {stage.phaseCategory.split('&')[0]}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-[#0a1017] border border-slate-200 dark:border-white/5 flex items-center justify-center shadow-xs">
                      {getStageIcon(stage.iconName)}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-[#f5d680] transition-colors">
                      {stage.title}
                    </h3>
                  </div>

                  <p className="text-xs text-amber-700 dark:text-[#f5d680] font-semibold leading-snug">
                    {stage.tagline}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {stage.summary}
                  </p>

                  <div className="pt-2">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 block mb-1.5">
                      Key Deliverables:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                      {stage.deliverables.slice(0, 2).map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-[#f5d680] mr-2 mt-1 shrink-0" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setActiveStageIndex(idx);
                      setViewMode('stepper');
                    }}
                    className="text-xs text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white font-medium cursor-pointer"
                  >
                    Deep Dive &rarr;
                  </button>
                  <button
                    onClick={() =>
                      onSelectStageForBooking(`${stage.stageNumber}: ${stage.title}`)
                    }
                    className="text-xs text-[#f38545] hover:text-[#dd6d2d] font-bold cursor-pointer"
                  >
                    Book Stage &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
