"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowLeft,
  ExternalLink,
  Layout,
  CalendarCheck,
  Smartphone, 
  Zap,
  Eye,
  TrendingUp,
} from 'lucide-react';
import CTACard from '@/components/general/CTACard';
import { ProjectImage } from '@/components/general/ProjectImage';

const DELIVERABLES = [
  {
    icon: Eye,
    title: "Full Visual Redesign",
    description:
      "Every page rebuilt with a luxury-first visual language — premium typography, refined spacing, and high-quality imagery that signals the hotel's quality before a word is read.",
  },
  {
    icon: CalendarCheck,
    title: "Working Booking Engine",
    description:
      "The old booking flow was completely broken. The new one is a multi-step, validated form with real-time availability feedback and clear confirmation UX.",
  },
  {
    icon: Smartphone,
    title: "Full Mobile Responsiveness",
    description:
      "The legacy site broke on mobile. The redesign is built mobile-first — optimized for the majority of users browsing hospitality sites on their phones.",
  },
  {
    icon: Zap,
    title: "Framer Motion Interactions",
    description:
      "Smooth entrance animations, parallax scrolling, and hover states that create a sense of premium quality consistent with the hotel's physical experience.",
  },
  {
    icon: TrendingUp,
    title: "Conversion Architecture",
    description:
      "Every CTA, section ordering, and headline was structured around one goal: converting a visitor into a direct booking — bypassing OTA commissions.",
  },
  {
    icon: Layout,
    title: "Brand Language Refresh",
    description:
      "Color palette, typography, and visual hierarchy were rebuilt from scratch to communicate refinement, comfort, and trust — the three pillars of hospitality.",
  },
];

const BEFORE_AFTER = [
  { label: "Before", items: ["Broken booking form", "Non-responsive layout", "Outdated visual design", "High bounce rate", "Zero direct bookings"] },
  { label: "After", items: ["Fully functional booking engine", "Mobile-first responsive layout", "Premium hospitality UI", "Clear conversion flow", "Direct bookings enabled"] },
];

export default function SixpointClient() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">

      {/* ── BACK NAV ── */}
      <div className="fixed top-6 left-4 md:left-8 z-50 max-w-7xl px-3 md:px-6 ">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border"
        >
          <ArrowLeft size={14} />
          All Projects
        </Link>
      </div>

      {/* ── HERO ── */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/30 mb-6">
            <Layout size={13} className="text-primary" />
            <span className="text-[10px] uppercase tracking-widest font-bold opacity-80">
              Website Redesign · Hospitality · Client Work
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
            Sixpoint<br />
            <span className="text-muted-foreground">Victoria</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
            A complete digital transformation for a 3-star hotel — from a broken, zero-converting
            legacy site to a premium, fully-functional booking experience.
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {["Next.js", "Tailwind CSS", "Framer Motion", "UI/UX Redesign"].map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-3 py-1.5 bg-secondary/50 border border-border rounded-full font-medium uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href="https://sixpoint-eight.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
          >
            View Live Site <ExternalLink size={15} />
          </a>
        </motion.div>

        {/* Before/After hero visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <ProjectImage
            src="/sixpoint_old.png"
            alt="Sixpoint Victoria — Before redesign"
            label="Before"
            labelVariant="before"
            height={{ mobile: "h-[250px]", desktop: "md:h-[500px]" }}
          />
          <ProjectImage
            src="/sixpoint_revamp.png"
            alt="Sixpoint Victoria — After redesign"
            label="After"
            labelVariant="after"
            height={{ mobile: "h-[250px]", desktop: "md:h-[500px]" }}
          />
        </motion.div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="py-16 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {[
              { value: "3-Star", label: "Hotel Category" },
              { value: "Broken → Live", label: "Booking Engine" },
              { value: "100%", label: "Mobile Responsive" },
              { value: "Client Work", label: "Project Type" },
            ].map((m) => (
              <div key={m.label} className="bg-background p-8 text-center">
                <p className="text-2xl md:text-3xl font-bold text-primary mb-2">{m.value}</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-6">

        {/* Overview grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { label: "My Role", value: "UI/UX Designer & Front-End Developer" },
            { label: "Client", value: "Sixpoint Victoria Hotel" },
            { label: "Deliverable", value: "Full Redesign + Booking Engine" },
          ].map((item) => (
            <div key={item.label} className="border border-border rounded-xl p-6">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2">
                {item.label}
              </p>
              <p className="text-base font-semibold">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Problem */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-24">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary block mb-4">
              01 / The Problem
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-6">
              A real hotel. A website that was killing business.
            </h2>
          </div>
          <div className="space-y-5 pt-2 md:pt-10">
            <p className="text-muted-foreground leading-relaxed">
              Sixpoint Victoria is a legitimate hospitality property — but their website told a
              completely different story. The design was dated, the layout broke on mobile, and
              most critically, the booking system simply didn&apos;t work.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every visitor who landed on the site and tried to book was hitting a dead end.
              The potential guest would either call directly (losing them to friction) or bounce
              entirely and book a competitor via an OTA at full commission cost.
            </p>
            <p className="text-foreground font-medium leading-relaxed">
              The digital experience wasn&apos;t just underperforming — it was actively costing the
              hotel direct revenue on every single visit.
            </p>
          </div>
        </div>

        {/* Before / After comparison */}
        <div className="mb-24">
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary block mb-4">
            02 / Before vs. After
          </span>
          <h2 className="text-3xl font-bold tracking-tight mb-10">
            A transformation, not just a refresh.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BEFORE_AFTER.map((side) => (
              <div
                key={side.label}
                className={`rounded-xl border p-8 ${side.label === "After"
                    ? "border-primary/30 bg-primary/5"
                    : "border-border bg-secondary/20"
                  }`}
              >
                <p
                  className={`text-[10px] uppercase tracking-widest font-bold mb-5 ${side.label === "After" ? "text-primary" : "text-muted-foreground"
                    }`}
                >
                  {side.label}
                </p>
                <ul className="space-y-3">
                  {side.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm">
                      <span
                        className={`w-1.5 h-1.5 rounded-full shrink-0 ${side.label === "After" ? "bg-primary" : "bg-muted-foreground/40"
                          }`}
                      />
                      <span
                        className={
                          side.label === "After" ? "text-foreground font-medium" : "text-muted-foreground line-through decoration-muted-foreground/40"
                        }
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div className="mb-24">
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary block mb-4">
            03 / What Was Built
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl mb-12">
            Six deliverables. One cohesive product.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {DELIVERABLES.map((d) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.title}
                  className="border border-border rounded-xl p-6 hover:border-primary/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-sm">{d.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{d.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Design philosophy */}
        <div>
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary block mb-4">
            04 / Design Philosophy
          </span>
          <blockquote className="border-l-4 border-primary pl-8 py-4 mb-10">
            <p className="text-2xl md:text-3xl font-bold italic leading-snug">
              &quot;A hotel&apos;s website should feel like stepping into the lobby — before you even arrive.&quot;
            </p>
          </blockquote>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            The design principle behind this project was simple: the digital experience should be an
            extension of the physical one. Every font, spacing decision, image choice, and animation
            was made to convey the same sense of calm, comfort, and competence that a good 3-star
            hotel communicates the moment you walk in. Function and feeling, in equal measure.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="pb-20">
        <CTACard contactHref="/contact" />
      </div>
    </div>
  );
}

