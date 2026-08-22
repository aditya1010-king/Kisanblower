import { ImageIcon } from "lucide-react";

/**
 * PlaceholderImage
 * ------------------------------------------------------------------
 * Stands in for a real product/field photograph that has not been
 * supplied yet. It is deliberately styled to look intentional (not
 * broken) and shows the exact filename the real asset should use, so
 * swapping it later is a drop-in replacement — no code changes needed
 * beyond pointing an <img> at the new file in /src/assets/product/.
 *
 * To replace: drop the real photo at src/assets/product/<filename>
 * and swap this component for a plain <img> where it's used.
 * ------------------------------------------------------------------
 */
export default function PlaceholderImage({
  label,
  filename,
  aspect = "landscape", // "landscape" | "portrait" | "square"
  className = "",
  priority = false,
}) {
  return (
    <div
      className={`placeholder-img placeholder-img--${aspect} ${className}`}
      role="img"
      aria-label={`Placeholder for photo: ${label}`}
    >
      <div className="placeholder-img__inner">
        <ImageIcon className="placeholder-img__icon" strokeWidth={1.5} aria-hidden="true" />
        <span className="placeholder-img__label">{label}</span>
        {filename && <span className="placeholder-img__filename">{filename}</span>}
      </div>
    </div>
  );
}
