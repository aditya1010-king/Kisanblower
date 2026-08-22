import { Phone, MessageCircle } from "lucide-react";
import {
  DEFAULT_WHATSAPP_MESSAGE,
  whatsappLink,
  telLink,
  PHONE_PRIMARY_INTL,
} from "../data/constants";

export default function MobileCTA() {
  return (
    <div className="mobile-cta-bar" role="navigation" aria-label="Quick contact">
      <a href={telLink(PHONE_PRIMARY_INTL)} className="mobile-cta-bar__btn mobile-cta-bar__btn--call">
        <Phone size={20} aria-hidden="true" />
        <span>Call Now</span>
      </a>
      <a
        href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-cta-bar__btn mobile-cta-bar__btn--whatsapp"
      >
        <MessageCircle size={20} aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
