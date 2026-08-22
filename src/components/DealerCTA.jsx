import { MessageCircle } from "lucide-react";
import { DEALER_WHATSAPP_MESSAGE, whatsappLink } from "../data/constants";

export default function DealerCTA() {
  return (
    <section className="dealer-cta">
      <div className="container dealer-cta__inner">
        <h2>Looking for Agricultural Machinery Dealership?</h2>
        <p>We welcome enquiries from agricultural machinery dealers and distributors.</p>
        <a
          href={whatsappLink(DEALER_WHATSAPP_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary btn--lg"
        >
          <MessageCircle size={20} aria-hidden="true" />
          Dealer Enquiry on WhatsApp
        </a>
      </div>
    </section>
  );
}
