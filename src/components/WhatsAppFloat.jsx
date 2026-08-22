import { MessageCircle } from "lucide-react";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from "../data/constants";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={26} aria-hidden="true" />
      <span className="whatsapp-float__label whatsapp-float__label--full">WhatsApp Us</span>
      <span className="whatsapp-float__label whatsapp-float__label--short">WhatsApp</span>
    </a>
  );
}
