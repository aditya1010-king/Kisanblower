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

// The internal ERP (sales, expenses, staff, attendance and salary). This is
// a separate application on its own subdomain, not a page of this website,
// which is why it sits on the bottom bar rather than in Quick Links: that
// column is customer navigation, and staff sign-in is a different audience
// answering a different question.
//
// Until the ERP is deployed this points at the planned subdomain. Change
// the one line below if it ends up somewhere else.
const ERP_URL = "https://erp.kisanblower.shop";

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

        {/* Staff sign-in. Deliberately understated - the people who need it
            know it is here, and customers' eyes pass over it. rel="noopener"
            stops the opened tab from getting a handle back to this page. */}
        <a
          className="site-footer__admin"
          href={ERP_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Admin
        </a>
      </div>
    </footer>
  );
}
