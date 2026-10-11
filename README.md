# Sri Auto Parts Private Limited — Corporate Website

React + Vite front-end project (no backend, no forms, no login). Fully independent of the DriveMax project.

## Run locally

```bash
cd sri-auto-parts-website
npm install
npm run dev        # opens http://localhost:5174
```

Production build and preview:

```bash
npm run build
npm run preview    # http://localhost:4174
```

Requires Node.js 18 or newer. The dev server uses port 5174 so it can run beside DriveMax.

## Where to edit content

All text is in `src/data/content.js` (taken from the supplied company profile).
Colours are CSS variables at the top of `src/index.css`.

## Content notes

* Vision, mission and values are the wording of the company profile.
* Product images are illustrative vector artwork, labelled as such — not photos of real products.
* No telephone number, e-mail address or street address is published, because the profile gives none.
  Add them to the `location` object in `content.js` and the Contact component when confirmed.
* The Google Maps buttons search for "Vellore, Tamil Nadu, India".
