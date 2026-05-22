# Deepesh Agrawal — Senior AI Engineer Portfolio

## Original Problem Statement
Premium personal portfolio for Deepesh Agrawal (Senior AI Engineer / AI Architect). Dark-themed, futuristic, recruiter-friendly, responsive. Sections: Hero, About, Featured Expertise, Current Role, Experience Timeline, Case Studies, Skills, Education, Certifications, Contact. Hero with neural-network particles + gradient mesh + grain. Sticky navbar. Working contact form.

## User Personas
- AI/ML hiring managers
- GenAI / platform engineering teams
- CTOs and engineering leaders
- Enterprise AI product teams
- Recruiters (Senior AI Engineer, AI Architect, GenAI Platform Engineer)

## Architecture (implemented 2026-05-22)
- **Backend** (FastAPI + MongoDB): /api/, /api/contact (POST/GET), /api/status (legacy)
- **Frontend** (React + Tailwind + framer-motion): single-page portfolio at `/`
- **Components**: Navbar, Hero (canvas particles), About, Expertise, CurrentRole, Experience, CaseStudies, Skills, Education, Certifications, Contact (sonner toasts), Footer
- **Data source of truth**: `/app/frontend/src/data/portfolioData.js`
- **Resume**: `/app/frontend/public/resume.pdf` (placeholder — user to replace)

## What's Implemented
- All 9 portfolio sections from problem statement, plus sticky navbar, mobile drawer, smooth scroll
- Hero: canvas neural-network particles + animated gradient mesh + grain + "Open to roles" pulsing badge
- Profile photo card with hover desaturation effect (placeholder URL — user to replace)
- Contact form posts to MongoDB (`contact_messages` collection); toast feedback
- Resume placeholder PDF downloadable at `/resume.pdf`
- Full responsive (desktop / tablet / mobile)
- SEO meta tags + OG + Twitter card in `index.html`
- Typography: Cabinet Grotesk (headings) + Manrope (body) + JetBrains Mono (mono)
- 100% backend + frontend tests passed (iteration_1)

## Backlog (P1)
- User uploads real resume PDF → replace `/app/frontend/public/resume.pdf`
- User uploads real profile photo → replace `PROFILE.photoUrl` in `portfolioData.js`

## Backlog (P2)
- Optional: email notifications on contact submit (Resend/SendGrid integration)
- Optional: simple admin route to view contact submissions
- Optional: light theme toggle
- Optional: blog / writings section if user wants to publish
- Rate-limit /api/contact (basic honeypot or IP throttle) before going public

## Known Items
- Sort on `created_at` uses ISO-string lex order (works correctly for ISO 8601)
- CORS `*` + credentials combo is benign (no credentialed requests made)
