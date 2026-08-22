// ---------------------------------------------------------------------------
// Central business data for Kisan Blower Udyog.
// Keep every phone number / address / link in ONE place so the whole site
// stays consistent and easy to update.
// ---------------------------------------------------------------------------

export const COMPANY_NAME = "Kisan Blower Udyog";

export const PHONE_PRIMARY = "8434561010";
export const PHONE_SECONDARY = "9371811101";

// E.164 (with country code) — used for tel: and wa.me links
export const PHONE_PRIMARY_INTL = "918434561010";
export const PHONE_SECONDARY_INTL = "919371811101";

export const EMAIL = "kisanblowerudyog@gmail.com";

export const ADDRESS_LINE = "Pimpalgaon Baswant, Nashik, Maharashtra, India";

export const MARKETS = [
  "Maharashtra",
  "Pandharpur / Jath / Sangli / Solapur belt",
  "Northern Karnataka",
];

export const CROPS = ["Grapes", "Pomegranate", "Orchard crops"];

// wa.me deep link builder
export function whatsappLink(message, number = PHONE_PRIMARY_INTL) {
  const base = `https://wa.me/${number}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function telLink(number) {
  return `tel:+${number}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hello Kisan Blower Udyog, I am interested in the Airblast Mist Blower. Please share more information.";

export const DEALER_WHATSAPP_MESSAGE =
  "Hello Kisan Blower Udyog, I am interested in dealership opportunities. Please share more information.";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Product", href: "#product" },
  { label: "Applications", href: "#applications" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// Real gallery photos live directly in src/components/Gallery.jsx (imported
// from src/assets/product/). Add more real photos there the same way; use
// src/components/PlaceholderImage.jsx for any slot without a real photo yet.
