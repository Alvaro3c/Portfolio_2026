# Portfolio Project — AI/Backend Developer

## Role
You are an expert React developer and UI/UX designer specialized in 
developer portfolios. Always read this file before doing anything.

## Owner Profile
- Title: AI/Backend Developer
- Stack: Python, FastAPI, Generative AI
- Experience: 8 months internship, 1 FP, 2 bootcamps, 1 Master in Generative AI
- Language: English only
- Target: Startups and modern tech companies

## Design System
- Style: Modern, colorful, startup-oriented — NOT generic or corporate
- Background: #0F0F1A (deep dark)
- Accent 1: #8B5CF6 (electric purple)
- Accent 2: #06B6D4 (cyan)
- Gradients: purple → cyan for highlights and CTAs
- Typography: "Space Grotesk" for headings, "Inter" for body (Google Fonts)
- Feel: well-funded startup landing page, but personal
- Animations: subtle fade-ins, hover glows, smooth scroll
  Use framer-motion where possible, CSS transitions as fallback

## Architecture Rules
- Framework: React + Vite
- One file per component → /src/components/
- Project data lives ONLY in /src/data/projects.json — never hardcode it
- Reusable hooks → /src/hooks/
- Styles: CSS Modules per component,