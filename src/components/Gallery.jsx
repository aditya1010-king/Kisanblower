import { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import tractorVineyard from "../assets/product/kisan-blower-tractor-vineyard.webp";
import workshopLineup from "../assets/product/kisan-blower-workshop-lineup.webp";
import rearView from "../assets/product/kisan-blower-rear-view.webp";
import tankControls from "../assets/product/kisan-blower-tank-controls.webp";

const GALLERY_ITEMS = [
  {
    id: "vineyard",
    src: tractorVineyard,
    label: "Tractor-Mounted in the Vineyard",
    alt: "Kisan Blower Udyog mist blower tractor-mounted and spraying a grape vineyard",
  },
  {
    id: "workshop",
    src: workshopLineup,
    label: "Ready at the Workshop",
    alt: "Rows of finished Kisan Blower Udyog mist blowers ready at the workshop",
  },
  {
    id: "rear",
    src: rearView,
    label: "Rear View — Fan & Tank",
    alt: "Kisan Blower Udyog airblast mist blower — rear view showing the fan and spray tank",
  },
  {
    id: "controls",
    src: tankControls,
    label: "Tank, Pump & Spray Controls",
    alt: "Kisan Blower Udyog mist blower with tank, pump and spray controls",
  },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);
  const showNext = useCallback(
    () => setActiveIndex((i) => (i + 1) % GALLERY_ITEMS.length),
    []
  );
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length),
    []
  );

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, showNext, showPrev]);

  const active = isOpen ? GALLERY_ITEMS[activeIndex] : null;

  return (
    <section className="section gallery">
      <div className="container">
        <div className="section-heading">
          <h2>Product Gallery</h2>
          <p>A closer look at the machine, in the workshop and in the field.</p>
        </div>

        <div className="gallery__grid">
          {GALLERY_ITEMS.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className="gallery__item"
              onClick={() => setActiveIndex(index)}
              aria-label={`View larger: ${item.label}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="photo-img gallery__image"
                width="1200"
                height="800"
                loading="lazy"
              />
              <span className="gallery__zoom-hint">
                <ImageIcon size={16} aria-hidden="true" />
                View
              </span>
            </button>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.label}
          onClick={close}
        >
          <button
            className="lightbox__close"
            onClick={close}
            aria-label="Close gallery"
          >
            <X size={28} />
          </button>

          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={active.alt} className="photo-img lightbox__image" />
            <p className="lightbox__caption">{active.label}</p>
          </div>

          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
}
