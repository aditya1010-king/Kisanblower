import { Phone, Mail, MapPin, Globe, MessageCircle } from "lucide-react";
import {
  COMPANY_NAME,
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  PHONE_PRIMARY_INTL,
  PHONE_SECONDARY_INTL,
  EMAIL,
  ADDRESS_LINE,
  NAV_LINKS,
  telLink,
  whatsappLink,
} from "../data/constants";
import logo from "../assets/logo/kisan-blower-logo.webp";

// Footer-only constants (kept local so this update stays scoped to the
// footer file, per the footer-only edit request).
const WEBSITE_DISPLAY = "kisanblower.shop";
const WEBSITE_HREF = "https://kisanblower.shop";
const FOOTER_WHATSAPP_MESSAGE =
  "Hello Kisan Blower Udyog, I am interested in your agricultural spraying machinery. Please share more information.";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        {/* Column 1 — Company */}
        <div className="site-footer__brand">
          <div className="site-footer__logo-badge">
            <img src={logo} alt={`${COMPANY_NAME} logo`} className="site-footer__logo" />
          </div>
          <p className="site-footer__brand-name">{COMPANY_NAME}</p>
          <p className="site-footer__tagline">Agricultural Spraying Machinery</p>
          <p className="site-footer__description">
            Manufacturer of agricultural spraying machinery and airblast mist
            blowers designed for modern orchard farming.
          </p>
         
        </div>

        {/* Column 2 — Contact Us */}
        <div className="site-footer__contact">
          <h3 className="site-footer__heading">Contact Us</h3>
          <div className="site-footer__row">
            <MapPin size={18} aria-hidden="true" />
            <span>{ADDRESS_LINE}</span>
          </div>
          <a className="site-footer__row" href={telLink(PHONE_PRIMARY_INTL)}>
            <Phone size={18} aria-hidden="true" />
            <span>{PHONE_PRIMARY}</span>
          </a>
          <a className="site-footer__row" href={telLink(PHONE_SECONDARY_INTL)}>
            <Phone size={18} aria-hidden="true" />
            <span>{PHONE_SECONDARY}</span>
          </a>
          <a className="site-footer__row" href={`mailto:${EMAIL}`}>
            <Mail size={18} aria-hidden="true" />
            <span>{EMAIL}</span>
          </a>
          <a
            className="site-footer__row"
            href={WEBSITE_HREF}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe size={18} aria-hidden="true" />
            <span>{WEBSITE_DISPLAY}</span>
          </a>
        </div>

        {/* Column 3 — Quick Links */}
        <div className="site-footer__linkscol">
          <h3 className="site-footer__heading">Quick Links</h3>
          <nav className="site-footer__links" aria-label="Footer">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>
          &copy; {year} {COMPANY_NAME}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
