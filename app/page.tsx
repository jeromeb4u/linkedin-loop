"use client";

import { useState } from "react";
import {
  Linkedin,
  Zap,
  Clock,
  BarChart3,
  Presentation,
  TrendingUp,
  Menu,
  X,
  ChevronRight,
  Star,
  Check,
  ArrowRight,
  Twitter,
  Quote,
} from "lucide-react";

// ─── NavBar ───────────────────────────────────────────────────────────────────
function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">in</span>
            </div>
            <span className="font-bold text-lg text-text">LinkedInLoop</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted hover:text-primary transition-colors text-sm font-medium">
              Features
            </a>
            <a href="#pricing" className="text-muted hover:text-primary transition-colors text-sm font-medium">
              Pricing
            </a>
            <a href="#how-it-works" className="text-muted hover:text-primary transition-colors text-sm font-medium">
              How It Works
            </a>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm font-medium text-text px-4 py-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-all">
              Login
            </button>
            <button className="text-sm font-medium text-white bg-primary px-4 py-2 rounded-lg hover:bg-primary/90 transition-all shadow-sm">
              Start Free
            </button>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-surface border-t border-border px-4 py-4 flex flex-col gap-3">
          <a href="#features" className="text-sm font-medium text-text py-2" onClick={() => setOpen(false)}>
            Features
          </a>
          <a href="#pricing" className="text-sm font-medium text-text py-2" onClick={() => setOpen(false)}>
            Pricing
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-text py-2" onClick={() => setOpen(false)}>
            How It Works
          </a>
          <div className="border-t border-border pt-3 flex flex-col gap-2">
            <button className="text-sm font-medium text-text px-4 py-2 rounded-lg border border-border text-left">
              Login
            </button>
            <button className="text-sm font-medium text-white bg-primary px-4 py-2 rounded-lg text-center">
              Start Free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <Zap size={14} />
          <span>AI-Powered LinkedIn Automation</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text leading-tight mb-6">
          Your newsletter.
          <br />
          <span className="text-primary">Every week.</span> On LinkedIn.{" "}
          <span className="text-primary">On autopilot.</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10">
          Connect your newsletter, generate 5 LinkedIn post variations per
          issue, and schedule them to hit your audience at peak engagement —
          all powered by AI.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-primary text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 text-base">
            Start Free — No Credit Card
          </button>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto flex items-center justify-center gap-2 text-muted hover:text-primary transition-colors font-medium px-6 py-3.5 rounded-xl border border-border hover:border-primary text-base"
          >
            See how it works
            <ChevronRight size={16} />
          </a>
        </div>

        <p className="text-sm text-muted mt-5">
          Free forever on Starter.{" "}
          <span className="text-success font-medium">Upgrade when you&apos;re ready.</span>
        </p>
      </div>
    </section>
  );
}

// ─── Post Preview ─────────────────────────────────────────────────────────────
const MOCK_POSTS = [
  {
    badge: "Story",
    text: "Three years ago I was posting twice a month and wondering why my LinkedIn wasn't growing. Then I started treating my newsletter as the source of truth — and everything changed.",
    score: 94,
    likes: "2.4K",
    comments: "312",
  },
  {
    badge: "Tip",
    text: "The #1 mistake professionals make on LinkedIn? They post and disappear. Consistency beats virality every single time. Here's what a 90-day posting cadence looks like.",
    score: 87,
    likes: "1.8K",
    comments: "204",
  },
  {
    badge: "Insight",
    text: "B2B buyers spend 5% of their time talking to salespeople. They're on LinkedIn doing research. If you're not there with valuable content, your competitor is.",
    score: 91,
    likes: "3.1K",
    comments: "445",
  },
  {
    badge: "Question",
    text: "What's the hardest part of maintaining a consistent LinkedIn presence for you? For me it was always the blank page — knowing what to write about. Newsletter content changed that.",
    score: 82,
    likes: "956",
    comments: "289",
  },
  {
    badge: "CTA",
    text: "If you're a newsletter writer who hasn't cross-posted to LinkedIn yet, you're leaving reach on the table. One newsletter issue can become 5 pieces of content.",
    score: 79,
    likes: "1.2K",
    comments: "178",
  },
];

function PostPreview() {
  const [generating, setGenerating] = useState(false);
  const [showPosts, setShowPosts] = useState(false);

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      setShowPosts(true);
    }, 1800);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            From newsletter to LinkedIn — in 60 seconds
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Paste your latest newsletter issue. Watch LinkedInLoop generate 5
            optimized post variations with engagement predictions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Newsletter Input */}
          <div className="bg-surface border border-border rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-2 text-xs text-muted font-mono">newsletter.issue</span>
            </div>

            <div className="bg-background rounded-xl p-4 border border-border mb-4">
              <p className="text-xs text-muted font-mono mb-2">Subject: The Future of B2B Content in 2026</p>
              <div className="space-y-2">
                <div className="h-3 bg-border/60 rounded w-full" />
                <div className="h-3 bg-border/60 rounded w-5/6" />
                <div className="h-3 bg-border/60 rounded w-4/5" />
                <div className="h-3 bg-border/60 rounded w-full" />
                <div className="h-3 bg-border/60 rounded w-3/4" />
                <div className="h-3 bg-border/60 rounded w-5/6" />
                <div className="h-3 bg-border/60 rounded w-full" />
                <div className="h-3 bg-border/60 rounded w-2/3" />
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={generating}
              className="w-full bg-primary text-white font-semibold py-3 rounded-xl hover:bg-primary/90 transition-all disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {generating ? (
                <>
                  <span className="animate-spin">
                    <Clock size={16} />
                  </span>
                  Generating posts...
                </>
              ) : (
                <>
                  <Zap size={16} />
                  Generate 5 LinkedIn Posts
                </>
              )}
            </button>
          </div>

          {/* Right: Generated Posts */}
          <div className="space-y-3">
            {generating &&
              Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-surface border border-border rounded-xl p-4 animate-pulse"
                >
                  <div className="h-3 bg-border/60 rounded w-16 mb-3" />
                  <div className="h-3 bg-border/60 rounded w-full mb-2" />
                  <div className="h-3 bg-border/60 rounded w-3/4" />
                </div>
              ))}

            {showPosts &&
              MOCK_POSTS.map((post, i) => (
                <div
                  key={i}
                  className="bg-surface border border-border rounded-xl p-4 hover:shadow-md transition-shadow"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                      {post.badge}
                    </span>
                    <div className="flex items-center gap-2 text-xs text-muted">
                      <TrendingUp size={12} className="text-success" />
                      <span className="font-semibold text-success">{post.score}%</span>
                      <span>predicted engagement</span>
                    </div>
                  </div>
                  <p className="text-sm text-text leading-relaxed line-clamp-2 mb-3">{post.text}</p>
                  <div className="flex items-center gap-4 text-xs text-muted">
                    <span className="flex items-center gap-1">
                      <Star size={12} /> {post.likes}
                    </span>
                    <span>{post.comments} comments</span>
                  </div>
                </div>
              ))}

            {!generating && !showPosts && (
              <div className="bg-surface/50 border border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center text-center min-h-48">
                <Linkedin size={32} className="text-muted mb-3" />
                <p className="text-muted text-sm">
                  Your generated posts will appear here
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Features Grid ───────────────────────────────────────────────────────────
const FEATURES = [
  {
    icon: <Zap size={24} />,
    title: "Newsletter-to-Post AI",
    description:
      "Our AI analyzes your newsletter content and generates 5 distinct LinkedIn post variations — stories, tips, insights, questions, and CTAs — optimized for the algorithm.",
  },
  {
    icon: <Clock size={24} />,
    title: "Optimal Posting Time Scheduler",
    description:
      "Machine learning studies your audience's active hours and suggests the best times to post. Schedule once, reach maximum readers.",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Engagement Prediction Scores",
    description:
      "Before you hit publish, see a predicted engagement score for each post. Know what's likely to resonate — and double down on what works.",
  },
  {
    icon: <Presentation size={24} />,
    title: "Carousel Generator",
    description:
      "Turn your newsletter's most valuable insights into LinkedIn carousel slides automatically. Beautiful, branded, and ready to download.",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Newsletter Analytics",
    description:
      "Track newsletter open rates, link clicks, and how each issue amplifies on LinkedIn. Understand the full content flywheel.",
  },
  {
    icon: <Linkedin size={24} />,
    title: "Audience Growth Tracking",
    description:
      "See exactly how many new followers each LinkedIn post brings in. Attribute follower growth to specific pieces of content.",
  },
];

function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            Everything you need to dominate LinkedIn
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            From content creation to scheduling to analytics — LinkedInLoop
            handles the entire workflow so you can focus on thinking.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="bg-background border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all group"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                {f.icon}
              </div>
              <h3 className="font-semibold text-text text-lg mb-2">{f.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────
const STEPS = [
  {
    number: "01",
    title: "Connect your newsletter",
    description:
      "Link your Substack, Beehiiv, or any RSS feed. We pull your latest issue and get to work.",
  },
  {
    number: "02",
    title: "AI generates 5 post variations",
    description:
      "Our AI reads your content and creates 5 distinct LinkedIn posts — each angle chosen for maximum engagement.",
  },
  {
    number: "03",
    title: "Schedule in one click",
    description:
      "Pick your top picks or let our scheduler place them at optimal times for your audience.",
  },
  {
    number: "04",
    title: "Track growth & iterate",
    description:
      "Watch engagement roll in. See which angles drive followers. Refine your strategy with real data.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            Up and running in 3 minutes
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            No complex setup. No integrations headache. Just connect and go.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step) => (
            <div key={step.number} className="relative">
              <div className="text-6xl font-bold text-border mb-4">{step.number}</div>
              <h3 className="font-semibold text-text text-lg mb-2">{step.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{step.description}</p>
              {step.number !== "04" && (
                <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 text-border">
                  <ArrowRight size={20} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Stats Bar ───────────────────────────────────────────────────────────────
const STATS = [
  { value: "50,000+", label: "Professionals trust LinkedInLoop" },
  { value: "2.5M+", label: "Posts scheduled" },
  { value: "40%", label: "Avg. engagement increase" },
  { value: "4.9/5", label: "Average rating" },
];

function StatsBar() {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">{s.value}</div>
            <p className="text-muted text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    quote:
      "I went from posting twice a month to twice a week without any extra effort. My LinkedIn follower count jumped 60% in 3 months. LinkedInLoop is the tool I didn't know I needed.",
    name: "Sarah Chen",
    role: "Head of Growth @ TechScale",
    avatar: "SC",
    followers: "42K followers",
    metric: "+60% followers in 90 days",
  },
  {
    quote:
      "The engagement predictions are scary accurate. I know exactly which post will hit before I publish. It removed all the guesswork from my content strategy.",
    name: "Marcus Johnson",
    role: "Solo Consultant",
    avatar: "MJ",
    followers: "18K followers",
    metric: "91% prediction accuracy",
  },
  {
    quote:
      "The carousel generator alone saves my team 6 hours a week. We produce twice the LinkedIn content with half the effort. It's become essential to our content stack.",
    name: "Priya Patel",
    role: "Content Director @ ScaleUp",
    avatar: "PP",
    followers: "95K followers",
    metric: "6 hrs saved per week",
  },
];

function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            Thought leaders swear by it
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            From solo consultants to enterprise content teams — here&apos;s what
            they&apos;re saying.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-surface border border-border rounded-2xl p-6 flex flex-col"
            >
              <Quote size={28} className="text-primary/30 mb-4" />
              <p className="text-text text-sm leading-relaxed mb-6 flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="border-t border-border pt-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-text text-sm">{t.name}</p>
                    <p className="text-muted text-xs">{t.role}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted">{t.followers}</span>
                  <span className="text-success font-medium bg-success/10 px-2 py-0.5 rounded-full">
                    {t.metric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ──────────────────────────────────────────────────────────────────
const PLANS = [
  {
    name: "Starter",
    price: "$0",
    period: "/mo",
    description: "Perfect for trying out LinkedInLoop on a single newsletter.",
    features: [
      "10 posts per month",
      "1 newsletter connection",
      "Basic scheduling",
      "Engagement predictions",
      "Community support",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$19",
    period: "/mo",
    description: "For professionals serious about LinkedIn growth.",
    features: [
      "50 posts per month",
      "Unlimited newsletter connections",
      "Carousel generator",
      "Advanced analytics dashboard",
      "Optimal time scheduler",
      "Priority email support",
    ],
    cta: "Start Growth",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/mo",
    description: "For teams and creators who need unlimited output.",
    features: [
      "Unlimited posts",
      "Unlimited newsletters",
      "Carousel generator",
      "Full analytics suite",
      "Team access (5 seats)",
      "Priority support + onboarding",
      "Custom posting schedule",
    ],
    cta: "Start Pro",
    highlighted: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Start free, scale as you grow. No surprise fees, no locked-in
            contracts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 flex flex-col ${
                plan.highlighted
                  ? "bg-primary text-white border-2 border-primary shadow-xl"
                  : "bg-background border border-border"
              }`}
            >
              {plan.highlighted && (
                <div className="inline-flex items-center bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full w-fit mb-4">
                  Most Popular
                </div>
              )}
              <h3 className={`font-bold text-xl mb-1 ${plan.highlighted ? "text-white" : "text-text"}`}>
                {plan.name}
              </h3>
              <div className="flex items-end gap-1 mb-3">
                <span className={`text-4xl font-bold ${plan.highlighted ? "text-white" : "text-text"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm mb-1 ${plan.highlighted ? "text-white/70" : "text-muted"}`}>
                  {plan.period}
                </span>
              </div>
              <p className={`text-sm mb-6 ${plan.highlighted ? "text-white/80" : "text-muted"}`}>
                {plan.description}
              </p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-center gap-2 text-sm ${
                      plan.highlighted ? "text-white/90" : "text-text"
                    }`}
                  >
                    <Check
                      size={16}
                      className={plan.highlighted ? "text-white" : "text-success"}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                  plan.highlighted
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-primary text-white hover:bg-primary/90"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-text mb-5">
          Ready to amplify your thought leadership?
        </h2>
        <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
          Join 50,000+ professionals who&apos;ve turned their newsletter into a
          LinkedIn growth engine.
        </p>
        <button className="bg-primary text-white font-semibold px-10 py-4 rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 text-base">
          Start Free — No Credit Card Required
        </button>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-primary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xs">in</span>
              </div>
              <span className="font-bold text-base text-text">LinkedInLoop</span>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              The AI-powered LinkedIn automation platform for newsletter
              creators and thought leaders.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-text text-sm mb-4">Product</h4>
            <ul className="space-y-2">
              {["Features", "Pricing", "Changelog", "Roadmap"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-muted hover:text-primary text-sm transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-text text-sm mb-4">Company</h4>
            <ul className="space-y-2">
              {["About", "Blog", "Case Studies", "Careers"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-muted hover:text-primary text-sm transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-text text-sm mb-4">Legal</h4>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-muted hover:text-primary text-sm transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-xs">
            &copy; {new Date().getFullYear()} LinkedInLoop. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted hover:text-primary transition-colors" aria-label="Twitter">
              <Twitter size={18} />
            </a>
            <a href="#" className="text-muted hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <PostPreview />
      <Features />
      <HowItWorks />
      <StatsBar />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
