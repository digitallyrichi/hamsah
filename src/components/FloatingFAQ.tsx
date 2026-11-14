import React, { useState, useEffect } from 'react';
import {
  HelpCircle,
  X,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Calendar,
  Search,
  Sparkles,
} from 'lucide-react';

interface FAQItem {
  id: string;
  category: 'Confidentiality' | 'Services' | 'Engagement' | 'Legal';
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Confidentiality',
    question: 'How is confidentiality protected before we share business plans or tender documents?',
    answer:
      'We safeguard all proprietary details under bilateral Non-Disclosure Agreements (NDAs) prior to reviewing proprietary strategy, financials, or RFx tender drafts. All files are handled under restricted executive permissions with strict non-disclosure guarantees.',
  },
  {
    id: 'faq-2',
    category: 'Services',
    question: 'At what stage of our business should we engage HAMSAH?',
    answer:
      'HAMSAH supports enterprises across all 8 stages of the business lifecycle—from initial ideation and prototype feasibility, to market entry (Crossing the Chasm), taking the leap, operational infancy, market entrenchment, and cross-border expansion.',
  },
  {
    id: 'faq-3',
    category: 'Engagement',
    question: 'How do your multidisciplinary experts collaborate on client mandates?',
    answer:
      'Our clients work with a dedicated engagement principal who orchestrates a synchronized team across legal coordination, digital marketing, bid & tender management, and business strategy. This ensures every commercial decision is backed by integrated cross-functional expertise.',
  },
  {
    id: 'faq-4',
    category: 'Legal',
    question: 'How are legal services handled for regulated or jurisdictional matters?',
    answer:
      'HAMSAH provides strategic corporate setup coordination and contractual risk diligence. For formal filings, statutory registrations, and court representational work requiring accredited advocates, we coordinate directly with certified external legal counsel.',
  },
  {
    id: 'faq-5',
    category: 'Services',
    question: 'What is your turnaround time for high-stakes bid and tender submissions?',
    answer:
      'We handle emergency RFx turnarounds as well as multi-month strategic procurement pipelines. Following an immediate compliance matrix assessment, our bid specialists typically establish an initial submission roadmap within 24 to 48 hours.',
  },
  {
    id: 'faq-6',
    category: 'Engagement',
    question: 'Where are consultations held and what happens after booking?',
    answer:
      'Consultations are conducted via secure Google Meet video conferences, in-person at our Gurugram advisory office, or over direct telephone lines. Following booking, an engagement director dispatches calendar details and preparatory notes within 4 business hours.',
  },
];

interface FloatingFAQProps {
  onBookConsultation: () => void;
}

export const FloatingFAQ: React.FC<FloatingFAQProps> = ({ onBookConsultation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const toggleAccordion = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    const matchesQuery =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <aside
      aria-label="Frequently Asked Questions"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
    >
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center space-x-2.5 px-4 py-3 rounded-full bg-white dark:bg-[#141f2d] border border-amber-600/40 dark:border-[#f5d680]/40 text-slate-900 dark:text-white shadow-2xl hover:bg-slate-50 dark:hover:bg-[#1c2a3c] hover:border-amber-600 dark:hover:border-[#f5d680] transition-all hover:scale-[1.03] cursor-pointer"
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          aria-label="Open Advisory FAQ modal"
        >
          <div className="w-6 h-6 rounded-full bg-orange-100 dark:bg-[#f38545]/20 text-[#f38545] flex items-center justify-center group-hover:scale-110 transition-transform">
            <HelpCircle className="w-4 h-4 text-amber-600 dark:text-[#f5d680]" />
          </div>
          <span className="text-xs font-semibold tracking-wide text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white">
            Advisory FAQs
          </span>
          <span className="w-2 h-2 rounded-full bg-[#f38545] animate-pulse"></span>
        </button>
      )}

      {/* Expanded Floating FAQ Window */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="false"
          aria-label="Advisory Frequently Asked Questions"
          className="w-[92vw] sm:w-[420px] max-h-[82vh] bg-white dark:bg-[#0e1620] border border-slate-200 dark:border-white/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in-50 slide-in-from-bottom-5 duration-200"
        >
          {/* Header */}
          <div className="p-4 sm:p-5 bg-slate-50 dark:bg-[#141f2d] border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-white dark:bg-[#0a1017] border border-slate-200 dark:border-white/10 text-amber-600 dark:text-[#f5d680] flex items-center justify-center">
                <HelpCircle className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">Advisory & Engagement FAQ</h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Common client inquiries & protocols</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Close FAQs"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Search & Filter Bar */}
          <div className="p-3 bg-slate-100 dark:bg-[#0a1017] border-b border-slate-200 dark:border-white/5 space-y-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics (e.g. NDA, stages, bids)..."
                className="w-full bg-white dark:bg-[#141f2d] border border-slate-300 dark:border-white/10 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-amber-600 dark:focus:border-[#f5d680]"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 text-[11px]">
              {['All', 'Confidentiality', 'Services', 'Engagement', 'Legal'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-white dark:bg-[#1c2a3c] text-amber-700 dark:text-[#f5d680] font-semibold border border-slate-300 dark:border-white/10 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion Questions List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2.5 divide-y divide-slate-100 dark:divide-white/5">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isExpanded = expandedId === faq.id;
                return (
                  <div key={faq.id} className="pt-2 first:pt-0">
                    <button
                      onClick={() => toggleAccordion(faq.id)}
                      className="w-full text-left py-1.5 flex items-start justify-between gap-3 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-amber-700 dark:hover:text-[#f5d680] transition-colors cursor-pointer"
                      aria-expanded={isExpanded}
                    >
                      <span className="leading-snug">{faq.question}</span>
                      <span className="text-slate-400 shrink-0 mt-0.5">
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-amber-600 dark:text-[#f5d680]" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </span>
                    </button>

                    {isExpanded && (
                      <div className="mt-1.5 text-[11.5px] leading-relaxed text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-[#141f2d]/60 p-3 rounded-lg border border-slate-200 dark:border-white/5 animate-in fade-in-50 duration-150">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="text-center py-8 text-xs text-slate-500">
                No matching inquiries found for &ldquo;{searchQuery}&rdquo;.
              </div>
            )}
          </div>

          {/* Footer Call to Action */}
          <div className="p-3.5 bg-slate-50 dark:bg-[#141f2d] border-t border-slate-200 dark:border-white/10 flex items-center justify-between gap-3">
            <span className="text-[11px] text-slate-600 dark:text-slate-400">Need specific advisory?</span>
            <button
              onClick={() => {
                setIsOpen(false);
                onBookConsultation();
              }}
              className="px-3.5 py-1.5 rounded-lg bg-[#f38545] hover:bg-[#dd6d2d] text-white font-semibold text-xs transition-colors flex items-center shrink-0 cursor-pointer shadow-md"
            >
              <Calendar className="w-3.5 h-3.5 mr-1.5" />
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </aside>
  );
};
