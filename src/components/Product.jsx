import {
  Wind,
  Droplets,
  Tractor,
  ShieldCheck,
  Leaf,
  Wrench,
  MessageCircle,
} from "lucide-react";
import { DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from "../data/constants";
import productImage from "../assets/product/kisan-blower-rear-view.webp";

const FEATURES = [
  { icon: Wind, text: "Powerful airflow" },
  { icon: Droplets, text: "Effective spray coverage" },
  { icon: Tractor, text: "Tractor operated" },
  { icon: ShieldCheck, text: "Durable construction" },
  { icon: Leaf, text: "Designed for orchard applications" },
  { icon: Wrench, text: "Easy maintenance" },
];

export default function Product() {
  return (
    <section id="product" className="section product">
      <div className="container">
        <div className="section-heading">
          <h2>Airblast Mist Blower</h2>
          <p>Powerful orchard spraying equipment designed for effective spray coverage.</p>
        </div>

        <div className="product__layout">
          <div className="product__media">
            <img
              src={productImage}
              alt="Kisan Blower Udyog airblast mist blower — rear view showing the fan and spray tank"
              className="photo-img"
              width="1200"
              height="800"
              loading="lazy"
            />
          </div>

          <div className="product__info">
            <p className="product__description">
              The Kisan Blower Udyog Airblast Mist Blower is built to deliver strong,
              consistent spray coverage across orchard crops. It is designed to be
              tractor operated and constructed for the demands of everyday
              agricultural use.
            </p>

            <div className="product__block">
              <h3>Applications</h3>
              <ul className="product__tag-list">
                <li>Grape orchards</li>
                <li>Pomegranate orchards</li>
                <li>Other suitable orchard crops</li>
              </ul>
            </div>

            <div className="product__block">
              <h3>Key Features</h3>
              <ul className="product__feature-list">
                {FEATURES.map(({ icon: Icon, text }) => (
                  <li key={text}>
                    <Icon size={20} aria-hidden="true" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

          

            <a
              href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--lg"
            >
              <MessageCircle size={20} aria-hidden="true" />
              Enquire About This Machine
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
