# Real Estate Abbey - Clone Site

## Project Overview
- **Name**: Real Estate Abbey (Clone)
- **Original**: https://realestateabbey.com/
- **Goal**: Independent replica of the Real Estate Abbey website, deployed on a separate Cloudflare Pages instance
- **Tech Stack**: Hono + TypeScript + Cloudflare Pages

## URLs
- **Production**: https://realestateabbey.pages.dev
- **Original Site**: https://realestateabbey.com/

## Pages & Routes

| Path | Description |
|------|-------------|
| `/` | Homepage - Hero menu with navigation links |
| `/about` | About Abbey - Company mission, commitment values, embracing home section |
| `/find` | Find Your Abbey - Curated collection overview with Athens & London locations |
| `/why` | Why Abbey - Experience the difference, services, safe haven, effortless living |
| `/offices` | Offices - Office spaces: 1Athens, 2Athens, 1London, 2London, Singapore |
| `/apartments-for-rent-in-glyfada-greece` | SEO page (redirects to /find) |
| `/luxury-real-estate-in-athens-riviera` | SEO page (redirects to /find) |
| `/furnished-apartments-for-rent-in-voula-greece` | SEO page (redirects to /find) |
| `/athens` | Redirects to /find |
| `/london` | Redirects to /find |

## Assets
- **Fonts**: ABC Diatype Light, Rongel (self-hosted in `/static/fonts/`)
- **CSS**: Original CSS from The Orange Studio (self-hosted in `/static/style.css`)
- **Images**: Served from original DigitalOcean Spaces CDN (`abbey-real-estate.ams3.cdn.digitaloceanspaces.com`)
- **SVGs**: All icon assets self-hosted in `/static/assets/`)
- **Favicons**: Self-hosted from original site

## Features Implemented
- All 5 main pages (Home, About, Find, Why, Offices)
- Exact same HTML structure and CSS classes as original
- Same fonts (ABC Diatype Light + Rongel)
- Same images from original CDN
- Popup system (Menu + Contact/Enquiry)
- Swiper.js sliders for commitment/promise sections
- Alpine.js components for interactivity
- Newsletter signup form (footer)
- Contact/Enquiry form (popup)
- Responsive design (mobile/desktop)
- SEO meta tags and Open Graph

## Features Not Yet Implemented
- Mapbox map integration on Find page (placeholder shown)
- Individual property/project pages (offices link to original site)
- Form submission backend (forms show alert only)
- Barba.js page transitions (original uses them)
- GSAP animations (original uses them)
- Google Tag Manager / Analytics integration
- Lindy AI chatbot integration
- reCAPTCHA form protection

## Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Start dev server
pm2 start ecosystem.config.cjs

# Deploy to Cloudflare Pages
npm run build
npx wrangler pages deploy dist --project-name realestateabbey
```

## Deployment
- **Platform**: Cloudflare Pages
- **Status**: Active
- **Last Updated**: 2026-02-25
