/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  X,
  Bell,
  Mail,
  Check,
  ShieldCheck,
  Smartphone,
  Save,
  RotateCcw,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppButton';
import {
  getNotificationSettings,
  saveNotificationSettings,
  NotificationSettings,
  cleanPhoneNumber,
} from '../utils/notificationService';

interface NotificationSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotificationSettingsModal: React.FC<NotificationSettingsModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [settings, setSettings] = useState<NotificationSettings>(getNotificationSettings());
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSettings(getNotificationSettings());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    saveNotificationSettings(settings);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleReset = () => {
    const defaults: NotificationSettings = {
      primaryEmail: 'digitallyrichi@gmail.com',
      secondaryEmail: 'hamsahgroupinfo@gmail.com',
      whatsAppPhone: '+91 95806 53006',
      autoOpenWhatsApp: true,
    };
    setSettings(defaults);
    saveNotificationSettings(defaults);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 1500);
  };

  const testWhatsAppUrl = `https://wa.me/${cleanPhoneNumber(
    settings.whatsAppPhone
  )}?text=${encodeURIComponent(
    '🔔 *HAMSAH Notification Test*\nThis confirms WhatsApp appointment notifications are correctly connected to this phone line.'
  )}`;

  const testEmailUrl = `mailto:${settings.primaryEmail}?subject=${encodeURIComponent(
    '[HAMSAH Alert Test] Appointment Notification Verification'
  )}&body=${encodeURIComponent(
    'This is a verification test confirming that appointment booking alerts are routed to ' +
      settings.primaryEmail +
      '.'
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="notification-settings-title"
      className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in-50 duration-200"
    >
      <div className="w-full max-w-lg bg-white dark:bg-[#141f2d] border border-slate-200 dark:border-white/15 rounded-2xl shadow-2xl overflow-hidden text-slate-900 dark:text-slate-100 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-5 bg-slate-50 dark:bg-[#0a1017] border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-[#f5d680] flex items-center justify-center">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <h3 id="notification-settings-title" className="text-base font-bold text-slate-900 dark:text-white">
                Appointment Notification Routing
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Where appointment briefs are dispatched instantly
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Form */}
        <form onSubmit={handleSave} className="p-6 space-y-5">
          {/* Active status note */}
          <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-500/30 flex items-start space-x-3 text-xs text-emerald-800 dark:text-emerald-300">
            <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600 dark:text-emerald-400" />
            <div>
              <strong className="block font-semibold">Active Dispatch Active</strong>
              Whenever an appointment is scheduled, complete client specifications, preferred times, and commercial scope are compiled and sent to these destinations.
            </div>
          </div>

          {/* Primary Email */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Primary Alert Email (Your Email) *
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={settings.primaryEmail}
                onChange={(e) => setSettings({ ...settings, primaryEmail: e.target.value })}
                placeholder="digitallyrichi@gmail.com"
                className="w-full bg-slate-50 dark:bg-[#0a1017] border border-slate-300 dark:border-white/10 rounded-lg pl-9 pr-3 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-amber-600 dark:focus:border-[#f5d680]"
              />
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              Direct inbox recipient for incoming booking notifications.
            </p>
          </div>

          {/* Secondary Email */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Secondary / Office Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                value={settings.secondaryEmail}
                onChange={(e) => setSettings({ ...settings, secondaryEmail: e.target.value })}
                placeholder="hamsahgroupinfo@gmail.com"
                className="w-full bg-slate-50 dark:bg-[#0a1017] border border-slate-300 dark:border-white/10 rounded-lg pl-9 pr-3 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-amber-600 dark:focus:border-[#f5d680]"
              />
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              Receives a simultaneous carbon-copy of every booking dossier.
            </p>
          </div>

          {/* WhatsApp Destination Phone */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              WhatsApp Alert Phone Number (with country code) *
            </label>
            <div className="relative">
              <Smartphone className="w-4 h-4 text-emerald-600 dark:text-emerald-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={settings.whatsAppPhone}
                onChange={(e) => setSettings({ ...settings, whatsAppPhone: e.target.value })}
                placeholder="e.g. +91 9876543210"
                className="w-full bg-slate-50 dark:bg-[#0a1017] border border-slate-300 dark:border-white/10 rounded-lg pl-9 pr-3 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-amber-600 dark:focus:border-[#f5d680]"
              />
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              WhatsApp number to receive the pre-formatted booking card.
            </p>
          </div>

          {/* Quick test buttons */}
          <div className="pt-2 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-[11px] text-slate-500 uppercase font-semibold mr-1">
              Quick Test:
            </span>
            <a
              href={testWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 hover:bg-emerald-100 dark:hover:bg-emerald-950/50 flex items-center transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 mr-1" />
              Test WhatsApp Ping
            </a>
            <a
              href={testEmailUrl}
              className="px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 border border-blue-500/30 hover:bg-blue-100 dark:hover:bg-blue-950/50 flex items-center transition-colors"
            >
              <Mail className="w-3.5 h-3.5 mr-1" />
              Test Email Ping
            </a>
          </div>

          {/* Action buttons */}
          <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="px-3 py-2 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
              Reset Defaults
            </button>

            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-[#f38545] hover:bg-[#dd6d2d] text-white text-xs font-bold transition-colors flex items-center shadow-md cursor-pointer"
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-4 h-4 mr-1.5" />
                    Saved!
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-1.5" />
                    Save Routing Settings
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
