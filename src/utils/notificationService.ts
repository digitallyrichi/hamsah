/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface BookingDetails {
  name: string;
  email: string;
  phone?: string;
  org: string;
  stage: string;
  practice: string;
  date: string;
  slot: string;
  mode: string;
  notes: string;
}

export interface BookingRecord {
  referenceId: string;
  submittedAt: string;
  details: BookingDetails;
}

export interface NotificationSettings {
  primaryEmail: string;
  secondaryEmail: string;
  whatsAppPhone: string;
  autoOpenWhatsApp: boolean;
}

const DEFAULT_SETTINGS: NotificationSettings = {
  primaryEmail: 'digitallyrichi@gmail.com',
  secondaryEmail: 'hamsahgroupinfo@gmail.com',
  whatsAppPhone: '+91 95806 53006',
  autoOpenWhatsApp: true,
};

const SETTINGS_KEY = 'hamsah_notification_settings';
const BOOKINGS_KEY = 'hamsah_appointment_bookings';

export function getNotificationSettings(): NotificationSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return DEFAULT_SETTINGS;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_SETTINGS, ...parsed };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function saveNotificationSettings(settings: Partial<NotificationSettings>): NotificationSettings {
  try {
    const current = getNotificationSettings();
    const updated = { ...current, ...settings };
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(updated));
    return updated;
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function saveBookingRecord(record: BookingRecord): void {
  try {
    const existingRaw = localStorage.getItem(BOOKINGS_KEY);
    const existing: BookingRecord[] = existingRaw ? JSON.parse(existingRaw) : [];
    existing.unshift(record);
    // Keep last 50 bookings
    if (existing.length > 50) {
      existing.length = 50;
    }
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(existing));
  } catch (err) {
    console.error('Failed to save booking to local storage', err);
  }
}

export function getBookingRecords(): BookingRecord[] {
  try {
    const raw = localStorage.getItem(BOOKINGS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function cleanPhoneNumber(phone: string): string {
  // Strip spaces, dashes, parentheses, and leading plus
  return phone.replace(/[^0-9]/g, '');
}

/**
 * Format a WhatsApp notification dossier
 */
export function formatWhatsAppBookingMessage(record: BookingRecord): string {
  const { referenceId, submittedAt, details } = record;
  const phoneLine = details.phone ? `\n• *Phone Number:* ${details.phone}` : '';
  return `📋 *NEW APPOINTMENT BOOKING - HAMSAH GROUP SOLUTIONS*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔖 *Reference ID:* ${referenceId}
🕒 *Logged At:* ${submittedAt}

👤 *CLIENT INFORMATION:*
• *Client Name:* ${details.name}
• *Organization:* ${details.org || 'Direct Engagement'}
• *Corporate Email:* ${details.email}${phoneLine}

💼 *CONSULTATION FOCUS:*
• *Lifecycle Stage:* ${details.stage}
• *Primary Practice:* ${details.practice}
• *Proposed Schedule:* ${details.date} (${details.slot})
• *Consultation Mode:* ${details.mode}

📝 *STRATEGIC SCOPE & OBJECTIVES:*
"${details.notes || 'Standard preliminary business review requested.'}"

🔒 *Confidentiality:* Bilateral NDA terms confirmed & accepted
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
_Dispatched automatically via HAMSAH Group Solutions Direct Advisory Desk_`;
}

/**
 * Generate a WhatsApp URL targeting the recipient phone number
 */
export function generateWhatsAppBookingUrl(
  record: BookingRecord,
  customPhone?: string
): string {
  const settings = getNotificationSettings();
  const phoneToUse = customPhone || settings.whatsAppPhone;
  const cleanPhone = cleanPhoneNumber(phoneToUse);
  const message = formatWhatsAppBookingMessage(record);
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Format an Email subject line
 */
export function formatEmailSubject(record: BookingRecord): string {
  const { referenceId, details } = record;
  const orgPart = details.org ? ` (${details.org})` : '';
  return `[HAMSAH Appointment Alert] Ref: ${referenceId} - ${details.name}${orgPart} - ${details.stage}`;
}

/**
 * Format plain text Email body
 */
export function formatEmailBody(record: BookingRecord): string {
  const { referenceId, submittedAt, details } = record;
  const settings = getNotificationSettings();
  const phoneLine = details.phone ? `\n• Direct Phone Number:    ${details.phone}` : '';

  return `NEW APPOINTMENT BOOKING NOTIFICATION
HAMSAH Group Solutions - Executive Advisory Desk
==================================================

A new strategic consultation request has been submitted on the HAMSAH portal.

BOOKING SUMMARY:
--------------------------------------------------
• Booking Reference:      ${referenceId}
• Submitted Timestamp:    ${submittedAt}

CLIENT & ORGANIZATION:
--------------------------------------------------
• Client Full Name:       ${details.name}
• Organization / Venture: ${details.org || 'Direct Engagement'}
• Corporate Email:        ${details.email}${phoneLine}

CONSULTATION MANDATE:
--------------------------------------------------
• Business Lifecycle Stage: ${details.stage}
• Primary Practice Focus:   ${details.practice}
• Requested Date:           ${details.date}
• Requested Time Slot:      ${details.slot}
• Consultation Mode:        ${details.mode}

KEY COMMERCIAL OBJECTIVES & STRATEGIC SCOPE:
--------------------------------------------------
"${details.notes || 'Standard preliminary business review requested.'}"

CONFIDENTIALITY & LEGAL GOVERNANCE:
--------------------------------------------------
• Reciprocal Non-Disclosure Agreement (NDA): Accepted by client
• Bilateral safeguarding covenants active

==================================================
Notification recipients:
Primary:   ${settings.primaryEmail}
Secondary: ${settings.secondaryEmail}

Dispatched by HAMSAH Group Solutions Engagement System
Mehrauli Road, Gurugram, Haryana - 122009, India`;
}

/**
 * Generate a mailto URL for direct email client opening
 */
export function generateEmailBookingUrl(record: BookingRecord): string {
  const settings = getNotificationSettings();
  const recipients = [settings.primaryEmail, settings.secondaryEmail]
    .filter(Boolean)
    .join(',');

  const subject = formatEmailSubject(record);
  const body = formatEmailBody(record);

  return `mailto:${recipients}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}
