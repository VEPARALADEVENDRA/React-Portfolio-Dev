# Veparala Devendra — Portfolio (React + Vite)

A modern, animated developer portfolio showcasing projects, skills, awards, experience, and contact information. Built with React, Vite, and Framer Motion, with custom CSS animations and thoughtful UI/UX.

## Live Overview

- Framework: React 18 + Vite
- Animations: Framer Motion + handcrafted CSS (gradients, conic/radial effects, 3D transforms)
- Styling: `src/App.css`
- Routing/Sections: In-page sections with smooth reveal and hover interactions

## Highlights

- Awards & Achievements section replacing Testimonials (with animated cards, particles, glow)
- Grand, interactive Hero with floating particles and geometric shapes
- Skills with emoji chips and spring-based hover interactions
- Experience timeline with always-visible rotating icon ring
- About section with non-bolded text, subtle dynamic highlights (no underline effects)
- Contact section with glass-morphism, animated gradients, and zero extra text clutter
- Footer with clean two-column contact layout and animated link interactions

## Project Structure

```text
Portfolio-Dev/
├─ index.html
├─ eslint.config.js
├─ src/
│  ├─ App.css                # Global styles and all custom animations/effects
│  ├─ main.jsx               # Vite entry
│  └─ components/
│     ├─ LandingPage.jsx     # Header, navigation, and Hero section
│     ├─ MainContent.jsx     # Projects, Skills, Experience, About, Contact
│     ├─ AwardsAndAchievement.jsx  # Replaces Testimonials, animated award cards
│     ├─ Footer.jsx          # Two-column contact layout + bottom info
│     ├─ ProjectCard.jsx     # Reusable project card (if used in Projects)
│     └─ Background.jsx      # Optional decorative background hook/component
└─ README.md
```

## Key Components & Sections

- `LandingPage.jsx`
  - Sticky header with active link highlighting on scroll
  - Hero: floating particles, animated geometric shapes, 3D interactive title, animated social icons
  - Prominent "Available for work" badge with pulse/rotate/glass effects

- `MainContent.jsx`
  - Projects grid (using `ProjectCard.jsx`)
  - Skills: emoji-enhanced chips, springy hover effects
  - Experience: timeline with rotating conic ring around icons, unique hover treatments
  - About: attractive but simple dynamic highlighting, no bold, no underlines
  - Contact: glass card, animated gradients, interactive but text-minimal

- `AwardsAndAchievement.jsx`
  - Animated cards with glow, particles on hover, gradient titles, year badges, shimmer sweeps

- `Footer.jsx`
  - Two-column contact layout with subtle hover animations
  - Bottom row: Resume download + copyright

## Animations & Effects

- Framer Motion used for:
  - Section reveals (staggered), hover lifts, spring physics
  - Icon spins/3D tilts, button lifts, list item slides
- CSS used for:
  - Conic and radial gradients, rotating rings, floating backgrounds
  - Shimmer sweeps, glow/pulse, glass-morphism (backdrop-filter)
  - Responsive refinements with media queries

## Getting Started

Prerequisites:
- Node.js 18+
- pnpm, npm, or yarn

Install dependencies:
```bash
pnpm install
# or
npm install
# or
yarn
```

Run in development:
```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Build for production:
```bash
pnpm build
# or
npm run build
# or
yarn build
```

Preview production build:
```bash
pnpm preview
# or
npm run preview
# or
yarn preview
```

## Scripts

- `dev`: Start Vite dev server
- `build`: Production build
- `preview`: Preview built app
- ESLint is configured via `eslint.config.js`

## Assets

- Hero portrait: `Dev (2).jpeg` (ensure present in `public/` or `src` per your setup)
- Resume: `/resume/Veparala_Devendra_Resume.pdf`

## Customization Tips

- Colors: Centralized via CSS variables and inline gradients in `App.css`
- Animation timings: Tune Framer Motion `stiffness`, `damping`, and CSS keyframe durations
- Performance: Prefer transform/opacity for smooth 60fps animations
- Accessibility: Keep sufficient contrast, preserve focus states, and use `aria-label`s for icons

## Deployment

Any static host that supports Vite output will work:
- Netlify / Vercel / GitHub Pages / Cloudflare Pages

Build and deploy the `dist/` directory per your provider.

## License

Personal portfolio project — all rights reserved by the author.

---

🛠️ Crafted with care, motion, and modern web tooling.

✨ Developed by Veparala Devendra — uniquely built to impress. ✨
