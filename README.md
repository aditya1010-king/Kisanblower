# Kisan Blower Udyog — Website

A premium, single-page lead-generation site for **Kisan Blower Udyog**, built with React + Vite. The site's main goal is to convert visitors from Meta/Instagram/Facebook ads into WhatsApp enquiries and phone calls.

## Getting started

```bash
npm install
npm run dev       # local development server
npm run build      # production build -> dist/
npm run preview    # preview the production build locally
```

## Project structure

```
src/
  assets/
    logo/                 # Kisan Blower Udyog logo (webp + source)
  components/              # One component per section (Header, Hero, Product, ...)
  data/
    constants.js           # ALL phone numbers, email, address, links live here
  App.jsx
  index.css                # Entire design system + responsive layout
index.html                  # SEO / Open Graph / structured data
public/                      # Favicons + og-image.jpg
```

## Updating business info

Every phone number, the email address, and the WhatsApp message templates are
defined once in `src/data/constants.js`. Change them there and the whole site
(header, hero, footer, floating buttons, mobile bar, enquiry form) updates
automatically.

## Adding real product photos

No real product/field photography was available when this site was built, so
every image slot uses a `PlaceholderImage` component — a clearly labeled,
correctly-sized placeholder block instead of a fake stock photo of a
different machine.

To swap in real photos:

1. Add the photo to `src/assets/product/` using the filename already shown
   on the placeholder (e.g. `kisan-blower-main.webp`). WebP is recommended
   for file size; JPEG works too.
2. In the component that renders that placeholder (see the table below),
   replace the `<PlaceholderImage ... />` element with a plain `<img>`:

   ```jsx
   import mainPhoto from "../assets/product/kisan-blower-main.webp";
   // ...
   <img src={mainPhoto} alt="Kisan Blower Udyog airblast mist blower" className="hero__image" loading="lazy" />
   ```

   Keep the existing className so the sizing/aspect-ratio/shadow styling carries over.

| Placeholder location            | Component            | Suggested filename                        |
| -------------------------------- | --------------------- | ------------------------------------------ |
| Hero (main shot)                 | `Hero.jsx`            | `kisan-blower-main.webp`                   |
| Product section                  | `Product.jsx`         | `kisan-blower-side.webp`                   |
| Applications (grape/pomegranate) | `Applications.jsx`    | `kisan-blower-grape-orchard.webp`, etc.    |
| Gallery (6 images + lightbox)    | `Gallery.jsx` / `src/data/constants.js` (`GALLERY_ITEMS`) | `kisan-blower-fan.webp`, `kisan-blower-tank.webp`, etc. |
| About section                    | `About.jsx`           | `kisan-blower-workshop.webp`               |

## Adding real product specifications

Wherever a technical spec was not supplied (horsepower, tank capacity, fan
RPM, nozzle count, pump pressure, coverage area, etc.) the site shows
`[Add verified specification]` instead of an invented number — see
`Product.jsx`. Replace that placeholder text once verified specs are
available.

## Deployment

This is a static site — `npm run build` outputs a fully static `dist/`
folder that can be deployed to any static host (Vercel, Netlify, Cloudflare
Pages, GitHub Pages, S3 + CloudFront, etc.). After deploying, update the
placeholder domain in `index.html` (`canonical` and `og:url` tags) to the
real production URL.
