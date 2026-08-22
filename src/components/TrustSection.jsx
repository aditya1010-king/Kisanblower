import { Sprout, MapPin, Cog, Handshake } from "lucide-react";

const POINTS = [
  {
    icon: Sprout,
    title: "Farmer Focused",
    text: "Designed around practical agricultural requirements.",
  },
  {
    icon: MapPin,
    title: "Maharashtra Based",
    text: "Based in Pimpalgaon Baswant, Nashik.",
  },
  {
    icon: Cog,
    title: "Agricultural Machinery",
    text: "Focused on spraying equipment and agricultural solutions.",
  },
  {
    icon: Handshake,
    title: "Dealer Enquiries Welcome",
    text: "Open to agricultural machinery dealership enquiries.",
  },
];

export default function TrustSection() {
  return (
    <section className="section trust">
      <div className="container">
        <div className="trust__grid">
          {POINTS.map(({ icon: Icon, title, text }) => (
            <div className="trust-card" key={title}>
              <Icon size={24} aria-hidden="true" strokeWidth={1.75} />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
