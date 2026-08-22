import { MessageCircle, Phone, ShieldCheck } from "lucide-react";
import {
  DEFAULT_WHATSAPP_MESSAGE,
  whatsappLink,
  telLink,
  PHONE_PRIMARY,
  PHONE_PRIMARY_INTL,
} from "../data/constants";
import heroImage from "../assets/product/kisan-blower-tractor-vineyard.webp";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="hero__eyebrow">Agricultural Spraying Machinery</span>

          <h1 className="hero__title">
            Powerful Spraying. <br className="hero__break" />
            Better Coverage.
          </h1>

          <p className="hero__subtitle">
            Reliable airblast spraying solutions designed for modern orchards and
            agricultural applications.
          </p>

          <div className="hero__cta-row">
            <a
              href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--lg"
            >
              <MessageCircle size={20} aria-hidden="true" />
              WhatsApp Enquiry
            </a>
            <a href={telLink(PHONE_PRIMARY_INTL)} className="btn btn--outline btn--lg">
              <Phone size={20} aria-hidden="true" />
              Call Now
            </a>
          </div>

          <p className="hero__phone-hint">
            Call us directly: <a href={telLink(PHONE_PRIMARY_INTL)}>{PHONE_PRIMARY}</a>
          </p>

          <div className="hero__trust">
            <ShieldCheck size={18} aria-hidden="true" />
            <span>Built for Farmers. Built to Perform.</span>
          </div>
        </div>

        <div className="hero__media">
          <img
            src={heroImage}
            alt="Kisan Blower Udyog airblast mist blower, tractor-mounted, spraying a grape orchard"
            className="hero__image photo-img"
            width="1200"
            height="800"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
