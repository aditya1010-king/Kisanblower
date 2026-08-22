import { useState } from "react";
import { Phone, MapPin, Mail, MessageCircle } from "lucide-react";
import {
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  PHONE_PRIMARY_INTL,
  PHONE_SECONDARY_INTL,
  EMAIL,
  ADDRESS_LINE,
  telLink,
  whatsappLink,
} from "../data/constants";

const USER_TYPES = ["Farmer", "Dealer", "Distributor", "Other"];
const PRODUCTS = ["Airblast Mist Blower", "Other"];

const initialState = {
  name: "",
  mobile: "",
  location: "",
  userType: "Farmer",
  product: "Airblast Mist Blower",
  message: "",
};

function buildMessage(data) {
  const lines = [
    "Hello Kisan Blower Udyog, I would like to enquire:",
    "",
    `Name: ${data.name || "-"}`,
    `Mobile: ${data.mobile || "-"}`,
    `Location: ${data.location || "-"}`,
    `I am a: ${data.userType}`,
    `Product interested in: ${data.product}`,
  ];
  if (data.message.trim()) {
    lines.push(`Message: ${data.message.trim()}`);
  }
  return lines.join("\n");
}

export default function EnquiryForm() {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = buildMessage(form);
    const url = whatsappLink(message);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="section enquiry">
      <div className="container">
        <div className="section-heading">
          <h2>Get in Touch with Kisan Blower Udyog</h2>
        </div>

        <div className="enquiry__grid">
          <div className="enquiry__info">
            <a className="enquiry__info-row" href={telLink(PHONE_PRIMARY_INTL)}>
              <Phone size={20} aria-hidden="true" />
              <span>{PHONE_PRIMARY}</span>
            </a>
            <a className="enquiry__info-row" href={telLink(PHONE_SECONDARY_INTL)}>
              <Phone size={20} aria-hidden="true" />
              <span>{PHONE_SECONDARY}</span>
            </a>
            <div className="enquiry__info-row">
              <MapPin size={20} aria-hidden="true" />
              <span>{ADDRESS_LINE}</span>
            </div>
            <a className="enquiry__info-row" href={`mailto:${EMAIL}`}>
              <Mail size={20} aria-hidden="true" />
              <span>{EMAIL}</span>
            </a>
          </div>

          <form className="enquiry__form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                autoComplete="name"
              />
            </div>

            <div className="form-row">
              <label htmlFor="mobile">Mobile Number</label>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                required
                value={form.mobile}
                onChange={handleChange}
                placeholder="10-digit mobile number"
                autoComplete="tel"
                inputMode="numeric"
                pattern="[0-9]{10}"
              />
            </div>

            <div className="form-row">
              <label htmlFor="location">Location</label>
              <input
                id="location"
                name="location"
                type="text"
                required
                value={form.location}
                onChange={handleChange}
                placeholder="Village / Town, District"
              />
            </div>

            <div className="form-row">
              <label htmlFor="userType">I am a</label>
              <select
                id="userType"
                name="userType"
                value={form.userType}
                onChange={handleChange}
              >
                {USER_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-row">
              <label htmlFor="productInterest">Product Interested In</label>
              <select
                id="productInterest"
                name="product"
                value={form.product}
                onChange={handleChange}
              >
                {PRODUCTS.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-row form-row--full">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us a bit more about your requirement (optional)"
              />
            </div>

            <button type="submit" className="btn btn--primary btn--lg form-row--full">
              <MessageCircle size={20} aria-hidden="true" />
              Send Enquiry on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
