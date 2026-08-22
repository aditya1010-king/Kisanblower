import { Wind, Target, Sprout, ShieldCheck, Tractor, Wrench } from "lucide-react";

const CARDS = [
  {
    icon: Wind,
    title: "Powerful Airflow",
    text: "Designed to support effective orchard spraying.",
  },
  {
    icon: Target,
    title: "Better Spray Coverage",
    text: "Helps deliver spray throughout the target crop area.",
  },
  {
    icon: Sprout,
    title: "Built for Agriculture",
    text: "Designed with practical farming requirements in mind.",
  },
  {
    icon: ShieldCheck,
    title: "Durable Construction",
    text: "Built for demanding agricultural use.",
  },
  {
    icon: Tractor,
    title: "Tractor Operated",
    text: "Designed to work with suitable tractors.",
  },
  {
    icon: Wrench,
    title: "Easy Maintenance",
    text: "Practical design for easier maintenance and servicing.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section why-choose">
      <div className="container">
        <div className="section-heading">
          <h2>Why Choose Kisan Blower Udyog</h2>
        </div>

        <div className="why-choose__grid">
          {CARDS.map(({ icon: Icon, title, text }) => (
            <div className="feature-card" key={title}>
              <div className="feature-card__icon">
                <Icon size={26} aria-hidden="true" strokeWidth={1.75} />
              </div>
              <h3 className="feature-card__title">{title}</h3>
              <p className="feature-card__text">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
