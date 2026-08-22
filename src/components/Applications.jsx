import { Grape, Leaf, TreeDeciduous } from "lucide-react";
import PlaceholderImage from "./PlaceholderImage";
import grapeImage from "../assets/product/kisan-blower-tractor-vineyard.webp";
import pomegranateImage from "../assets/product/kisan-blower-pomegranate-orchard.webp";
import orchardImage from "../assets/product/kisan-blower-tank-controls.webp";

const APPLICATIONS = [
  {
    icon: Grape,
    title: "Grape Farming",
    text: "Solutions for grape orchard spraying.",
    src: grapeImage,
    alt: "Kisan Blower Udyog mist blower tractor-mounted and spraying a grape vineyard",
  },
  {
    icon: Leaf,
    title: "Pomegranate Farming",
    text: "Designed for pomegranate orchard applications.",
    src: pomegranateImage,
    alt: "Kisan Blower Udyog mist blower — tank, pump and hose reels",
  },
  {
    icon: TreeDeciduous,
    title: "Orchard Applications",
    text: "Suitable for agricultural spraying requirements across suitable orchard crops.",
    src: orchardImage,
    alt: "Kisan Blower Udyog mist blower with tank, pump and spray controls",
  },
];

export default function Applications() {
  return (
    <section id="applications" className="section applications">
      <div className="container">
        <div className="section-heading">
          <h2>Built for Orchard Spraying</h2>
        </div>

        <div className="applications__grid">
          {APPLICATIONS.map(({ icon: Icon, title, text, filename, src, alt }) => (
            <div className="application-card" key={title}>
              {src ? (
                <img
                  src={src}
                  alt={alt}
                  className="photo-img application-card__image"
                  width="1200"
                  height="800"
                  loading="lazy"
                />
              ) : (
                <PlaceholderImage
                  label={title}
                  filename={filename}
                  aspect="landscape"
                  className="application-card__image"
                />
              )}
              <div className="application-card__body">
                <div className="application-card__icon">
                  <Icon size={22} aria-hidden="true" strokeWidth={1.75} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
