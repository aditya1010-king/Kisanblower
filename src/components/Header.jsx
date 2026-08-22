import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS, DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from "../data/constants";
import logo from "../assets/logo/kisan-blower-logo.webp";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="site-header__bar container">
        <a href="#home" className="site-header__brand" onClick={closeMenu}>
          <img
            src={logo}
            alt="Kisan Blower Udyog logo"
            className="site-header__logo"
            width="180"
            height="40"
          />
        </a>

        <nav className="site-header__nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="site-header__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <a
            href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--sm site-header__cta"
          >
            <MessageCircle size={18} aria-hidden="true" />
            WhatsApp Enquiry
          </a>

          <button
            className="site-header__menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
        <nav className="mobile-menu__nav" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="mobile-menu__link" onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary mobile-menu__cta"
            onClick={closeMenu}
          >
            <MessageCircle size={18} aria-hidden="true" />
            WhatsApp Enquiry
          </a>
        </nav>
      </div>
    </header>
  );
}
