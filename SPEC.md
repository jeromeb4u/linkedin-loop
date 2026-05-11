# LinkedInLoop — Specification

## 1. Concept & Vision

LinkedInLoop is a LinkedIn newsletter-to-post automation platform for professionals and thought leaders. It transforms newsletter content into 5 LinkedIn post variations, schedules them at optimal times, and tracks engagement. The landing page conveys authority, polish, and effortless productivity — a tool that serious people use to amplify their thought leadership without the daily grind of content creation.

## 2. Design Language

**Aesthetic:** Editorial, corporate-professional. Clean whitespace, sharp typography, LinkedIn blue as the dominant accent. Inspired by SaaS marketing pages like Linear and Vercel — minimal decoration, content-led hierarchy.

**Color Palette:**
- Background: `#f3f4f6` (gray-100)
- Surface: `#ffffff` (white)
- Border: `#d1d5db` (gray-300)
- Primary: `#0077b5` (LinkedIn blue)
- Secondary: `#00a0dc` (lighter LinkedIn blue)
- Success: `#16a34a` (green-600)
- Text: `#111827` (gray-900)
- Muted: `#6b7280` (gray-500)

**Typography:** Inter (Google Fonts). 400/500/600/700 weights.

**Spatial System:** 8px base unit. Generous padding (py-16 to py-24 for section gaps). Card-based layouts with consistent border-radius (rounded-xl, rounded-2xl).

**Motion:** Subtle fade-in on scroll (CSS keyframes), hover transitions (150ms ease). No flashy animations — confident and fast.

**Visual Assets:** Lucide React icons, mock UI cards for the post preview section.

## 3. Layout & Structure

**Page Flow:**
1. **NavBar** — Fixed top, logo left, nav links center, CTAs right
2. **Hero** — Full-width, centered headline + subheadline + CTA
3. **Post Preview** — Two-column mock: newsletter input → 5 generated post cards
4. **Features Grid** — 6-card grid (3x2), icon + title + description
5. **How It Works** — 4-step horizontal flow with step numbers
6. **Stats Bar** — 4 key metrics in a band
7. **Testimonials** — 3-column cards with avatar, quote, follower stats
8. **Pricing** — 3-column pricing cards
9. **CTA Banner** — Final conversion push
10. **Footer** — Links, copyright, social

**Responsive:** Mobile-first. Stack to single column on mobile. Nav collapses to hamburger on mobile (simplified — just links).

## 4. Features & Interactions

**NavBar:**
- Logo: "LinkedInLoop" with LinkedIn-style icon
- Links: Features, Pricing, Case Studies (anchor scroll)
- CTAs: Login (outlined), Start Free (filled primary)
- Sticky on scroll

**Hero:**
- Headline: "Your newsletter. Every week. On LinkedIn. On autopilot."
- Subheadline: "Connect your newsletter, generate 5 LinkedIn posts per issue, and schedule them to hit your audience at peak engagement — all powered by AI."
- CTA: "Start Free" (primary), "See how it works" (link to How It Works)

**Post Preview (Mock):**
- Left: Newsletter input card (shows mock subject line + body text, "Generate Posts" button)
- Right: 5 post cards, each with:
  - Post type badge (Story / Tip / Insight / Question / CTA)
  - Post text (truncated, 2 lines)
  - Engagement prediction bar (score out of 100)
  - Like/Comment counts (mock)
- "Generate" button animates briefly then shows posts

**Features Grid (6 cards):**
1. Newsletter-to-Post AI — AI turns newsletter content into 5 optimized posts
2. Optimal Posting Time Scheduler — ML-powered best-time detection
3. Engagement Prediction Scores — Pre-score every post before publishing
4. Carousel Generator — Turn long-form content into multi-slide carousels
5. Newsletter Analytics — Track opens, clicks, and LinkedIn amplification
6. Audience Growth Tracking — Follower gain attribution per post

**How It Works (4 steps):**
1. Connect your newsletter (RSS, Substack, Beehiiv)
2. AI generates 5 post variations from your latest issue
3. Schedule posts across optimal times with one click
4. Track engagement and follower growth in your dashboard

**Stats Bar:**
- 50,000+ Professionals trust LinkedInLoop
- 2.5M+ Posts scheduled
- 40% Avg engagement increase
- 4.9/5 Rating

**Testimonials (3):**
- Sarah Chen, Head of Growth @ TechScale — "I went from posting twice a month to twice a week without any extra effort. My LinkedInfollower count jumped 60% in 3 months."
- Marcus Johnson, Solo Consultant — "The engagement predictions are scary accurate. I know exactly which post will hit before I publish."
- Priya Patel, Content Director @ ScaleUp — "The carousel generator alone saves my team 6 hours a week."

**Pricing:**
| Plan | Price | Posts/mo | Features |
|------|-------|----------|----------|
| Starter | $0 | 10 | Basic scheduling, 1 newsletter |
| Growth | $19 | 50 | + carousel generator, analytics, optimal times |
| Pro | $49 | Unlimited | + team access, priority support |

**CTA:**
"Ready to amplify your thought leadership?" + "Start Free" button.

**Footer:**
- Logo
- Links: Features, Pricing, Case Studies, Blog, Privacy, Terms
- Social icons (Twitter, LinkedIn)

## 5. Component Inventory

| Component | States |
|-----------|--------|
| NavBar | Default, scrolled (shadow added) |
| Button (primary) | Default, hover (scale/brightness), active |
| Button (outline) | Default, hover |
| Feature Card | Default, hover (slight lift shadow) |
| Post Preview Card | Default, generating (pulsing skeleton) |
| Testimonial Card | Default |
| Pricing Card | Default, highlighted (Growth plan) |
| Stats Item | Default |

## 6. Technical Approach

**Framework:** Next.js 15 (App Router)
**Language:** TypeScript
**Styling:** Tailwind CSS v4 (`@import "tailwindcss"`, `@theme {}` block)
**Icons:** Lucide React
**Font:** Inter via `next/font/google`

**File Structure:**
```
linkedin-loop/
  app/
    globals.css
    layout.tsx
    page.tsx
  package.json
  next.config.js
  tsconfig.json
  postcss.config.js
  .gitignore
  SPEC.md
```

**Deployment:** `npx vercel --yes --token "<token>"`
