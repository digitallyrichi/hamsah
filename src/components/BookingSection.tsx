import React, { useState, useEffect } from 'react';
import {
  Calendar as CalendarIcon,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Download,
  Share2,
  Video,
  Phone,
  ArrowRight,
  Info,
  Sparkles,
  Mail,
  Send,
  Settings,
  ExternalLink,
  Check,
  Bell,
} from 'lucide-react';
import { LIFECYCLE_STAGES, PRACTICE_AREAS } from '../data/lifecycleData';
import { ConfettiEffect } from './ConfettiEffect';
import { WhatsAppIcon } from './WhatsAppButton';
import { NotificationSettingsModal } from './NotificationSettingsModal';
import {
  saveBookingRecord,
  generateWhatsAppBookingUrl,
  generateEmailBookingUrl,
  formatWhatsAppBookingMessage,
  formatEmailBody,
  getNotificationSettings,
  BookingRecord,
} from '../utils/notificationService';

interface BookingSectionProps {
  selectedStage?: string;
  selectedPractice?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  selectedStage,
  selectedPractice,
}) => {
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [organization, setOrganization] = useState('');
  const [currentStage, setCurrentStage] = useState('Stage 01: The Idea');
  const [primaryPractice, setPrimaryPractice] = useState('Bid & Tender Management');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingSlot, setBookingSlot] = useState('10:00 AM - 11:00 AM IST');
  const [consultationMode, setConsultationMode] = useState<'video' | 'phone'>('video');
  const [strategicNotes, setStrategicNotes] = useState('');
  const [ndaConsent, setNdaConsent] = useState(true);

  // Submission & Notification state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingResult, setBookingResult] = useState<BookingRecord | null>(null);
  const [copiedRef, setCopiedRef] = useState(false);
  const [copiedWhatsApp, setCopiedWhatsApp] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [whatsAppDispatched, setWhatsAppDispatched] = useState(false);
  const [emailDispatched, setEmailDispatched] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [confettiTrigger, setConfettiTrigger] = useState(0);
  const [settings, setSettings] = useState(getNotificationSettings());

  const refreshSettings = () => {
    setSettings(getNotificationSettings());
  };

  // Sync incoming props
  useEffect(() => {
    if (selectedStage) {
      setCurrentStage(selectedStage);
    }
  }, [selectedStage]);

  useEffect(() => {
    if (selectedPractice) {
      setPrimaryPractice(selectedPractice);
    }
  }, [selectedPractice]);

  // Set default minimum date to tomorrow
  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    setBookingDate(dateStr);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const randomRef = `HAM-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      const nowStr = new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });

      const newRecord: BookingRecord = {
        referenceId: randomRef,
        submittedAt: nowStr,
        details: {
          name: clientName,
          email: clientEmail,
          org: organization || 'Direct Engagement',
          stage: currentStage,
          practice: primaryPractice,
          date: bookingDate,
          slot: bookingSlot,
          mode:
            consultationMode === 'video'
              ? 'Executive Video Conference (Google Meet)'
              : 'Virtual Audio Session (Google Meet Audio)',
          notes: strategicNotes || 'Standard preliminary business review requested.',
        },
      };

      // Save record to persistent storage
      saveBookingRecord(newRecord);
      setBookingResult(newRecord);
      refreshSettings();

      setConfettiTrigger((prev) => prev + 1);
      setIsSubmitting(false);
    }, 600);
  };

  const copyReference = () => {
    if (bookingResult) {
      navigator.clipboard.writeText(
        `HAMSAH Consultation Ref: ${bookingResult.referenceId}\nStage: ${bookingResult.details.stage}\nDate: ${bookingResult.details.date} (${bookingResult.details.slot})\nMode: ${bookingResult.details.mode}`
      );
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2500);
    }
  };

  const copyWhatsAppText = () => {
    if (bookingResult) {
      const text = formatWhatsAppBookingMessage(bookingResult);
      navigator.clipboard.writeText(text);
      setCopiedWhatsApp(true);
      setTimeout(() => setCopiedWhatsApp(false), 2500);
    }
  };

  const copyEmailText = () => {
    if (bookingResult) {
      const body = formatEmailBody(bookingResult);
      navigator.clipboard.writeText(body);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const generateGoogleCalendarUrl = () => {
    if (!bookingResult) return '#';
    const title = encodeURIComponent(`HAMSAH Strategic Consultation - ${bookingResult.details.stage}`);
    const details = encodeURIComponent(
      `Executive consultation with HAMSAH Group Solutions.\nReference: ${bookingResult.referenceId}\nFocus: ${bookingResult.details.practice}\nLocation: ${bookingResult.details.mode}`
    );
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${encodeURIComponent(
      bookingResult.details.mode
    )}`;
  };

  return (
    <section id="booking" className="py-24 bg-slate-50 dark:bg-[#0a1017] border-b border-slate-200 dark:border-white/5 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#f38545] mb-2">
            Direct Executive Advisory
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Book a Strategic Consultation
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            Tell us where your business stands today and where you plan to take it. Reserve a dedicated consultation slot with our multidisciplinary principals under complete confidentiality.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {!bookingResult ? (
            /* Booking Form Container */
            <div className="bg-white dark:bg-[#141f2d] rounded-2xl p-6 sm:p-10 border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl">
              
              {/* Trust banner & Alert routing indicator inside form */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0a1017] border border-slate-200 dark:border-white/10 mb-8 space-y-3">
                <div className="flex items-start space-x-3 text-xs text-slate-700 dark:text-slate-300">
                  <ShieldCheck className="w-5 h-5 text-amber-600 dark:text-[#f5d680] shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="font-semibold text-slate-900 dark:text-white block">Strict Discretion & Mutual Non-Disclosure:</span>
                    All shared concepts, documentation, RFP details, and commercial plans are protected under reciprocal non-disclosure guidelines from the moment you initiate contact.
                  </div>
                </div>

                <div className="pt-2.5 border-t border-slate-200 dark:border-white/5 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-600 dark:text-slate-400">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>
                      Alerts routed automatically to <strong>{settings.primaryEmail}</strong> & WhatsApp Advisory Desk
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowSettingsModal(true)}
                    className="inline-flex items-center text-amber-700 dark:text-[#f5d680] hover:underline font-semibold cursor-pointer"
                  >
                    <Settings className="w-3 h-3 mr-1" />
                    Routing Settings
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Row 1: Name and Organization */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-slate-50 dark:bg-[#0a1017] border border-slate-300 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-amber-600 dark:focus:border-[#f5d680] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Organization / Venture Name
                    </label>
                    <input
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="e.g. Apex Industrial Pvt Ltd"
                      className="w-full bg-slate-50 dark:bg-[#0a1017] border border-slate-300 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-amber-600 dark:focus:border-[#f5d680] text-sm"
                    />
                  </div>
                </div>

                {/* Row 2: Corporate Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Corporate / Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-slate-50 dark:bg-[#0a1017] border border-slate-300 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-amber-600 dark:focus:border-[#f5d680] text-sm"
                  />
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5">
                    We dispatch encrypted session confirmation links and preparatory briefs directly to your corporate inbox.
                  </p>
                </div>

                {/* Row 3: Business Lifecycle Stage and Practice Area Focus */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Current Business Stage *
                    </label>
                    <select
                      value={currentStage}
                      onChange={(e) => setCurrentStage(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-[#0a1017] border border-slate-300 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-amber-600 dark:focus:border-[#f5d680] text-sm"
                    >
                      {LIFECYCLE_STAGES.map((stg) => (
                        <option
                          key={stg.id}
                          value={`${stg.stageNumber}: ${stg.title}`}
                        >
                          {stg.stageNumber}: {stg.title}
                        </option>
                      ))}
                      <option value="General Strategic Inquiry">
                        General Strategic Multi-Disciplinary Inquiry
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Primary Practice Focus *
                    </label>
                    <select
                      value={primaryPractice}
                      onChange={(e) => setPrimaryPractice(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-[#0a1017] border border-slate-300 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-amber-600 dark:focus:border-[#f5d680] text-sm"
                    >
                      {PRACTICE_AREAS.map((pa) => (
                        <option key={pa.id} value={pa.title}>
                          {pa.title}
                        </option>
                      ))}
                      <option value="Comprehensive Integrated Advisory">
                        Comprehensive Integrated Advisory (All 4 Practices)
                      </option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Date, Time Slot, and Mode */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-[#0a1017] border border-slate-300 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-amber-600 dark:focus:border-[#f5d680] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Preferred Time Slot (IST) *
                    </label>
                    <select
                      value={bookingSlot}
                      onChange={(e) => setBookingSlot(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-[#0a1017] border border-slate-300 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-amber-600 dark:focus:border-[#f5d680] text-sm"
                    >
                      <option value="10:00 AM - 11:00 AM IST">10:00 AM – 11:00 AM IST</option>
                      <option value="11:30 AM - 12:30 PM IST">11:30 AM – 12:30 PM IST</option>
                      <option value="02:30 PM - 03:30 PM IST">02:30 PM – 03:30 PM IST</option>
                      <option value="04:30 PM - 05:30 PM IST">04:30 PM – 05:30 PM IST</option>
                      <option value="06:00 PM - 07:00 PM IST">06:00 PM – 07:00 PM IST</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Consultation Mode *
                    </label>
                    <div className="grid grid-cols-2 gap-1 bg-slate-100 dark:bg-[#0a1017] p-1 rounded-lg border border-slate-300 dark:border-white/10">
                      <button
                        type="button"
                        onClick={() => setConsultationMode('video')}
                        className={`p-2 rounded text-xs flex flex-col items-center justify-center cursor-pointer transition-colors ${
                          consultationMode === 'video'
                            ? 'bg-white dark:bg-[#1c2a3c] text-slate-900 dark:text-white font-semibold shadow-sm'
                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                        }`}
                        title="Video Conference"
                      >
                        <Video className="w-4 h-4 mb-0.5" />
                        <span className="text-[10px]">Video Conference</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setConsultationMode('phone')}
                        className={`p-2 rounded text-xs flex flex-col items-center justify-center cursor-pointer transition-colors ${
                          consultationMode === 'phone'
                            ? 'bg-white dark:bg-[#1c2a3c] text-slate-900 dark:text-white font-semibold shadow-sm'
                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                        }`}
                        title="Virtual Audio Session"
                      >
                        <Phone className="w-4 h-4 mb-0.5" />
                        <span className="text-[10px]">Audio Session</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Row 5: Strategic Scope / Brief Notes */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Scope of Discussion & Key Commercial Objectives
                  </label>
                  <textarea
                    rows={3}
                    value={strategicNotes}
                    onChange={(e) => setStrategicNotes(e.target.value)}
                    placeholder="Briefly outline your primary challenge, upcoming RFx/tender deadline, market expansion target, or corporate setup requirements..."
                    className="w-full bg-slate-50 dark:bg-[#0a1017] border border-slate-300 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-amber-600 dark:focus:border-[#f5d680] text-sm"
                  />
                </div>

                {/* Row 6: Confidentiality Checkbox */}
                <div className="flex items-start space-x-3 text-xs text-slate-700 dark:text-slate-300">
                  <input
                    type="checkbox"
                    id="ndaConsentBox"
                    required
                    checked={ndaConsent}
                    onChange={(e) => setNdaConsent(e.target.checked)}
                    className="mt-0.5 rounded border-slate-300 dark:border-white/20 text-[#f38545] focus:ring-0 cursor-pointer"
                  />
                  <label htmlFor="ndaConsentBox" className="cursor-pointer text-slate-600 dark:text-slate-300 leading-normal">
                    I request a confidential strategic consultation under strict non-disclosure principles. I understand HAMSAH Group Solutions treats all submitted proprietary details and future deliberations with executive confidentiality.
                  </label>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#f38545] to-[#dd6d2d] hover:from-[#dd6d2d] hover:to-[#f38545] text-white font-bold text-sm sm:text-base shadow-xl shadow-[#f38545]/20 transition-all flex items-center justify-center cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Registering Consultation Request...</span>
                  ) : (
                    <>
                      <span>Confirm & Schedule Consultation</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            <>
              {/* Confetti Celebration Burst */}
              {confettiTrigger > 0 && <ConfettiEffect key={confettiTrigger} durationMs={3800} />}

              {/* Booking Confirmation & Official Receipt Modal with Spring Bounce */}
              <div className="bg-white dark:bg-[#141f2d] rounded-2xl p-6 sm:p-10 border border-amber-500/40 dark:border-[#f5d680]/50 shadow-2xl animate-success-bounce relative overflow-hidden">
                
                {/* Subtle celebration top banner */}
                <div className="text-center pb-6 border-b border-slate-200 dark:border-white/10">
                  <div className="relative inline-flex items-center justify-center mx-auto mb-4">
                    {/* Glowing pulse ring */}
                    <div className="absolute inset-0 rounded-full bg-amber-400/20 dark:bg-[#f5d680]/30 animate-pulse-ring" />
                    <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400/20 to-[#f38545]/20 text-amber-600 dark:text-[#f5d680] flex items-center justify-center border border-amber-500/40 dark:border-[#f5d680]/50 shadow-lg shadow-amber-500/10 dark:shadow-[#f5d680]/20">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                  </div>

                  <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-amber-50 dark:bg-[#f5d680]/10 border border-amber-300 dark:border-[#f5d680]/30 text-[11px] font-mono text-amber-700 dark:text-[#f5d680] mb-2">
                    <Sparkles className="w-3.5 h-3.5 mr-1 text-[#f38545]" />
                    <span>Advisory Request Logged & Confirmed</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                    Consultation Request Confirmed
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Submitted at {bookingResult.submittedAt}
                  </p>
                </div>

              {/* Real-time Notification Dispatch Section for Owner / Management */}
              <div className="my-6 p-5 rounded-xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border border-amber-500/30 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#f38545]/20 text-[#f38545] flex items-center justify-center">
                      <Bell className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                        Real-Time Notification Dispatch
                      </h4>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400">
                        Appointment dossier formatted and ready for transmission
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowSettingsModal(true)}
                    className="text-xs text-amber-700 dark:text-[#f5d680] hover:underline flex items-center gap-1 cursor-pointer font-semibold"
                  >
                    <Settings className="w-3.5 h-3.5" />
                    Alert Settings
                  </button>
                </div>

                {/* Dispatch Action Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  
                  {/* WhatsApp Direct Action */}
                  <div className="p-4 rounded-xl bg-white dark:bg-[#0a1017] border border-emerald-500/30 flex flex-col justify-between space-y-3 shadow-xs">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="inline-flex items-center text-[10px] uppercase font-bold tracking-wider text-emerald-700 dark:text-emerald-400">
                          <WhatsAppIcon className="w-3.5 h-3.5 mr-1" /> WhatsApp Alert
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
                          {whatsAppDispatched ? 'Dispatched' : 'Ready'}
                        </span>
                      </div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white">
                        Official WhatsApp Advisory Desk
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        Transmits complete client, time slot, and strategic scope dossier directly via WhatsApp.
                      </p>
                    </div>

                    <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-white/5">
                      <a
                        href={generateWhatsAppBookingUrl(bookingResult, settings.whatsAppPhone)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setWhatsAppDispatched(true)}
                        className="flex-1 py-2 px-3 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold text-center flex items-center justify-center transition-colors shadow-xs"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5 mr-1.5" />
                        Send to WhatsApp
                      </a>
                      <button
                        type="button"
                        onClick={copyWhatsAppText}
                        className="px-2.5 py-2 rounded-lg bg-slate-100 dark:bg-[#1c2a3c] text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-xs font-medium transition-colors cursor-pointer"
                        title="Copy formatted WhatsApp dossier"
                      >
                        {copiedWhatsApp ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  {/* Email Direct Action */}
                  <div className="p-4 rounded-xl bg-white dark:bg-[#0a1017] border border-blue-500/30 flex flex-col justify-between space-y-3 shadow-xs">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="inline-flex items-center text-[10px] uppercase font-bold tracking-wider text-blue-700 dark:text-blue-400">
                          <Mail className="w-3.5 h-3.5 mr-1" /> Email Alert
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300">
                          {emailDispatched ? 'Dispatched' : 'Ready'}
                        </span>
                      </div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white truncate" title={settings.primaryEmail}>
                        {settings.primaryEmail}
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                        CC: {settings.secondaryEmail}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-white/5">
                      <a
                        href={generateEmailBookingUrl(bookingResult)}
                        onClick={() => setEmailDispatched(true)}
                        className="flex-1 py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold text-center flex items-center justify-center transition-colors shadow-xs"
                      >
                        <Mail className="w-3.5 h-3.5 mr-1.5" />
                        Send via Email
                      </a>
                      <button
                        type="button"
                        onClick={copyEmailText}
                        className="px-2.5 py-2 rounded-lg bg-slate-100 dark:bg-[#1c2a3c] text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-xs font-medium transition-colors cursor-pointer"
                        title="Copy formatted email body"
                      >
                        {copiedEmail ? <Check className="w-3.5 h-3.5 text-blue-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                </div>
              </div>

              {/* Summary Receipt Box */}
              <div className="my-6 p-6 rounded-xl bg-slate-50 dark:bg-[#0a1017] border border-slate-200 dark:border-white/10 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-200 dark:border-white/5">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-500 block">
                      Booking Reference
                    </span>
                    <span className="font-mono text-base font-bold text-amber-700 dark:text-[#f5d680]">
                      {bookingResult.referenceId}
                    </span>
                  </div>
                  <button
                    onClick={copyReference}
                    className="px-3 py-1.5 rounded bg-slate-200 dark:bg-[#1c2a3c] hover:bg-slate-300 dark:hover:bg-[#25374e] text-xs text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center cursor-pointer font-medium"
                  >
                    <Copy className="w-3.5 h-3.5 mr-1.5" />
                    {copiedRef ? 'Copied to Clipboard!' : 'Copy Reference'}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-500 uppercase font-bold block mb-1">
                      Client & Entity
                    </span>
                    <span className="text-slate-900 dark:text-white font-medium block">
                      {bookingResult.details.name}
                    </span>
                    <span className="text-slate-600 dark:text-slate-400 block">{bookingResult.details.org}</span>
                    <span className="text-slate-600 dark:text-slate-400 block">{bookingResult.details.email}</span>
                    {bookingResult.details.phone && (
                      <span className="text-slate-600 dark:text-slate-400 block">{bookingResult.details.phone}</span>
                    )}
                  </div>

                  <div>
                    <span className="text-slate-500 uppercase font-bold block mb-1">
                      Session Schedule & Mode
                    </span>
                    <span className="text-slate-900 dark:text-white font-medium block">
                      {bookingResult.details.date} ({bookingResult.details.slot})
                    </span>
                    <span className="text-amber-700 dark:text-[#f5d680] block font-medium">
                      {bookingResult.details.mode}
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-500 uppercase font-bold block mb-1">
                      Lifecycle Stage Focus
                    </span>
                    <span className="text-slate-900 dark:text-white font-medium">
                      {bookingResult.details.stage}
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-500 uppercase font-bold block mb-1">
                      Practice Area Interest
                    </span>
                    <span className="text-slate-900 dark:text-white font-medium">
                      {bookingResult.details.practice}
                    </span>
                  </div>
                </div>

                {bookingResult.details.notes && (
                  <div className="pt-3 border-t border-slate-200 dark:border-white/5 text-xs">
                    <span className="text-slate-500 uppercase font-bold block mb-1">
                      Key Strategic Scope
                    </span>
                    <p className="text-slate-700 dark:text-slate-300 italic">
                      &ldquo;{bookingResult.details.notes}&rdquo;
                    </p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={generateGoogleCalendarUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-[#0a1017] font-bold text-xs sm:text-sm text-center flex items-center justify-center hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-md"
                >
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  Add to Calendar
                </a>

                <button
                  onClick={() => {
                    setBookingResult(null);
                    setWhatsAppDispatched(false);
                    setEmailDispatched(false);
                  }}
                  className="flex-1 py-3 px-4 rounded-xl bg-slate-100 dark:bg-[#0a1017] border border-slate-300 dark:border-white/20 text-slate-800 dark:text-white font-semibold text-xs sm:text-sm hover:border-amber-600 dark:hover:border-[#f5d680] hover:text-amber-700 dark:hover:text-[#f5d680] transition-colors flex items-center justify-center cursor-pointer"
                >
                  Schedule Another Consultation
                </button>
                <button
                  onClick={() => setConfettiTrigger((prev) => prev + 1)}
                  className="py-3 px-4 rounded-xl bg-slate-100 dark:bg-[#1c2a3c] border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-[#f5d680] font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center cursor-pointer shrink-0"
                  title="Replay celebration confetti"
                >
                  <Sparkles className="w-4 h-4 text-amber-600 dark:text-[#f5d680]" />
                </button>
              </div>

              {/* Next Steps Note */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/5 text-center text-xs text-slate-500 dark:text-slate-400">
                Our engagement principals review all incoming strategic briefs and dispatch an encrypted confirmation calendar link and preparatory checklist to{' '}
                <strong className="text-slate-800 dark:text-slate-200">{bookingResult.details.email}</strong> within 4 business hours.
              </div>
            </div>
            </>
          )}
        </div>

      </div>

      {/* Alert Routing Settings Modal */}
      <NotificationSettingsModal
        isOpen={showSettingsModal}
        onClose={() => {
          setShowSettingsModal(false);
          refreshSettings();
        }}
      />
    </section>
  );
};
