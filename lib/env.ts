/**
 * Centralized public environment variables.
 * All NEXT_PUBLIC_* vars are inlined at build time; use these getters for consistent fallbacks.
 *
 * @see .env.example for required keys
 */

const FALLBACKS = {
  waLink: "https://wa.me/50600000000",
  igLink: "#",
  fbLink: "#",
  email: "grooviesstore@email.com",
  phone: "+506 0000 0000",
  address: "San José, Costa Rica",
} as const;

/** WhatsApp chat link (with optional prefill text). Used for header, footer, catalog CTA. */
export const waLink =
  process.env.NEXT_PUBLIC_WA_LINK ?? FALLBACKS.waLink;

/** Instagram profile URL. Used in hero, follow-us, footer. */
export const igLink =
  process.env.NEXT_PUBLIC_IG_LINK ?? FALLBACKS.igLink;

/** Facebook profile URL. Used in hero, follow-us, footer. */
export const fbLink =
  process.env.NEXT_PUBLIC_FB_LINK ?? FALLBACKS.fbLink;

/** Contact email. Used in contact page and custom quote mailto. */
export const email =
  process.env.NEXT_PUBLIC_EMAIL ?? process.env.NEXT_PUBLIC_EMAIL_TO ?? FALLBACKS.email;

/** Contact phone (display + tel: links). */
export const phone =
  process.env.NEXT_PUBLIC_PHONE ?? FALLBACKS.phone;

/** Address or location text. */
export const address =
  process.env.NEXT_PUBLIC_ADDRESS ?? FALLBACKS.address;

/**
 * WhatsApp number without country code prefix for building dynamic wa.me links.
 * Parsed from NEXT_PUBLIC_WA_LINK (e.g. https://wa.me/50672732622 -> 50672732622).
 */
export function getWaNumber(): string {
  const link = process.env.NEXT_PUBLIC_WA_LINK ?? FALLBACKS.waLink;
  const match = link.match(/wa\.me\/(\d+)/);
  return match ? match[1] : "50600000000";
}

/**
 * Build a WhatsApp link with custom prefill text (e.g. for quote form).
 */
export function buildWaLink(prefillText: string): string {
  const num = getWaNumber();
  const text = encodeURIComponent(prefillText);
  return `https://wa.me/${num}?text=${text}`;
}
