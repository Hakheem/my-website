"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowLeft,
  ExternalLink,
  GraduationCap,
  Users,
  PlayCircle,
  CreditCard,
  BarChart3,
  ShieldCheck,
  Layers,
} from 'lucide-react';
import CTACard from '@/components/general/CTACard';
import { ProjectImage } from '@/components/general/ProjectImage';

const TECH_STACK = [
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "PostgreSQL", category: "Database" },
  { name: "AWS S3", category: "Media Storage" },
  { name: "M-Pesa API", category: "Payments" },
  { name: "TypeScript", category: "Language" },
  { name: "Prisma ORM", category: "Data Layer" },
  { name: "Vercel", category: "Deployment" },
];

const FEATURES = [
  {
    icon: PlayCircle,
    title: "Low-Latency Video Pipeline",
    description:
      "Course videos are stored on AWS S3 and streamed via optimized delivery, ensuring smooth playback even on slower Kenyan network conditions.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Progress Tracking",
    description:
      "Students and instructors see live progress dashboards — lessons completed, quiz scores, and time-on-platform — all updated in real time.",
  },
  {
    icon: CreditCard,
    title: "M-Pesa Payment Integration",
    description:
      "Seamless STK push payments via Safaricom's Daraja API. Students enroll and pay in seconds, no card needed — exactly what the local market requires.",
  },
  {
    icon: Users,
    title: "Instructor Dashboard",
    description:
      "Course creators get a dedicated dashboard to upload content, manage curricula, and monitor student engagement metrics.",
  },
  {
    icon: ShieldCheck,
    title: "Authentication & Roles",
    description:
      "Multi-role auth system distinguishing students, instructors, and admins — each with appropriate access levels and capabilities.",
  },
  {
    icon: Layers,
    title: "Curriculum Management",
    description:
      "Structured course builder with sections, lessons, attachments, and prerequisite locking to guide learners through defined learning paths.",
  },
];

const METRICS = [
  { value: "110+", label: "Learners Served" },
  { value: "1", label: "Successful Acquisition" },
  { value: "5K+", label: "Projected Reach Post-Sale" },
  { value: "M-Pesa", label: "Payment Infrastructure" },
];

export default function SkillBridgeCaseStudy() {
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
            <GraduationCap size={13} className="text-primary" />
            <span className="text-[10px] uppercase tracking-widest font-bold opacity-80">
              EdTech Platform · SaaS · Acquired
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
            SkillBridge<br />
            <span className="text-muted-foreground">LMS</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
            An affordable, full-featured Learning Management System built specifically for the East African 
            market — started as a personal SaaS, validated with real users, and eventually acquired.
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {["Next.js", "PostgreSQL", "AWS S3", "M-Pesa", "Tailwind CSS"].map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-3 py-1.5 bg-secondary/50 border border-border rounded-full font-medium uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href="https://skilly-bridge.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
          >
            View Live Platform <ExternalLink size={15} />
          </a>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16"
        >
          <ProjectImage
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
            alt="SkillBridge LMS Platform"
            height={{ mobile: "h-[250px]", desktop: "md:h-[400px]" }}
          />
        </motion.div>
      </section>

      {/* ── METRICS ── */}
      <section className="py-16 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {METRICS.map((m) => (
              <div key={m.label} className="bg-background p-8 text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{m.value}</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="py-20 max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { label: "My Role", value: "Solo Full-Stack Developer" },
            { label: "Project Type", value: "Personal SaaS → Acquired Product" },
            { label: "Status", value: "Live · Sold & Operating" },
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
              An expensive gap in the East African learning market.
            </h2>
          </div>
          <div className="space-y-5 pt-2 md:pt-10">
            <p className="text-muted-foreground leading-relaxed">
              Platforms like Udemy, Coursera, and Teachable exist — but they&apos;re built for Western 
              markets. Pricing is in dollars, payment methods exclude most Kenyans, and the content 
              is rarely contextualised for local learners or instructors.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond cost, there was a structural gap: institutions and instructors in Kenya had no 
              affordable way to host structured courses, track student progress remotely, or collect 
              payments digitally without complex workarounds.
            </p>
            <p className="text-foreground font-medium leading-relaxed">
              The opportunity was clear: build an LMS that speaks to the East African market — 
              local payments, local currency, local context. 
            </p>
          </div>
        </div>

        {/* Solution */}
        <div className="mb-24">
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary block mb-4">
            02 / The Solution
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl mb-12">
            A complete educational ecosystem, built for real users.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="border border-border rounded-xl p-6 hover:border-primary/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-sm">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-24">
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary block mb-4">
            03 / Tech Stack
          </span>
          <h2 className="text-3xl font-bold tracking-tight mb-10">
            Built for scale from the start.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {TECH_STACK.map((tech) => (
              <div
                key={tech.name}
                className="border border-border rounded-xl p-5 hover:bg-secondary/30 transition-colors"
              >
                <p className="text-[9px] uppercase tracking-widest text-muted-foreground mb-1">
                  {tech.category}
                </p>
                <p className="font-semibold text-sm">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Takeaways */}
        <div>
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary block mb-4">
            04 / Takeaways
          </span>
          <h2 className="text-3xl font-bold tracking-tight mb-8">
            What this project proved.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Product-Market Fit is Real",
                body: "The fact that SkillBridge found a buyer validates the market gap. A platform built for local context, with local payments, outperforms generic alternatives in adoption.",
              },
              {
                title: "M-Pesa Changes Everything",
                body: "Integrating Safaricom&apos;s Daraja API removed the single biggest barrier to course enrollment — friction at checkout. STK push payments feel native to Kenyan users.",
              },
              {
                title: "Video Infra Is the Hard Part",
                body: "Building a reliable, low-latency video experience on varied network conditions required careful S3 configuration and CDN strategy — not just a file upload.",
              },
              {
                title: "Build Once, Sell Once",
                body: "The platform was designed cleanly enough that a buyer could take ownership and operate it without rebuilding. Clean architecture has real business value.",
              },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-primary/30 pl-6 py-2">
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="pb-20">
        <CTACard contactHref="/contact" />
      </div>
    </div>
  );
}


