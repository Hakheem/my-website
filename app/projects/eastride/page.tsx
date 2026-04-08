"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowLeft,
  ExternalLink,
  Car,
  ScanSearch,
  Cpu,
  ImagePlus,
  ShieldCheck,
  Database,
  Zap,
  LayoutDashboard,
} from 'lucide-react';
import CTACard from '@/components/general/CTACard';
import { ProjectImage } from '@/components/general/ProjectImage';

const AI_FEATURES = [
  {
    icon: ScanSearch,
    title: "Visual Car Search (Buyer-Side AI)",
    description:
      "A buyer uploads any car image, from their gallery, a screenshot, or a photo on the street. Gemini AI analyzes the image and Cloudinary's computer vision pipeline matches it against active listings, returning the closest visual and spec matches.",
  },
  {
    icon: ImagePlus,
    title: "Auto Spec Extraction (Admin-Side AI)",
    description:
      "Admins upload a car photo and Gemini AI automatically extracts the make, model, year, body type, and other base specifications. What would take 10 minutes of manual entry takes seconds, and with higher accuracy.",
  },
];

const PLATFORM_FEATURES = [
  {
    icon: Car,
    title: "Full Listing System",
    description: "Complete car listings with photos, specs, pricing, mileage, condition, all structured and searchable.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboard",
    description: "A dedicated backend for dealers to manage inventory, add/edit listings, and monitor inquiries.",
  },
  {
    icon: ShieldCheck,
    title: "Authentication — Next-Auth",
    description: "Multi-provider authentication with role-based access separating public users, registered buyers, and admins.",
  },
  {
    icon: Database,
    title: "MongoDB Data Layer",
    description: "Flexible document schema for vehicle data that handles diverse listing attributes without rigid constraints.",
  },
  {
    icon: Zap,
    title: "Cloudinary Media Pipeline",
    description: "All car images are optimized, resized, and served via Cloudinary CDN, fast loading across all devices.",
  },
  {
    icon: Cpu,
    title: "Gemini AI Integration",
    description: "Google Gemini's multimodal capabilities power both the visual search and the auto-spec extraction features.",
  },
];

const SCREENSHOTS = [
  { src: "/eastride_home.png", label: "Homepage" },
  { src: "/eastride_listings.png", label: "Car Listings" },
  { src: "/car_details.png", label: "Vehicle Detail" },
  { src: "/book_test_drive.png", label: "Test Drive Booking" },
];

const TECH_STACK = [
  { name: "Next.js 14", category: "Full-Stack Framework" },
  { name: "Gemini AI", category: "Computer Vision" },
  { name: "Cloudinary", category: "Media & AI" },
  { name: "MongoDB", category: "Database" },
  { name: "Next-Auth", category: "Authentication" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Vercel", category: "Deployment" },
];

export default function EastRideCaseStudy() {
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
            <Car size={13} className="text-primary" />
            <span className="text-[10px] uppercase tracking-widest font-bold opacity-80">
              AI Marketplace · Automotive · Computer Vision
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
            EastRide AI<br />
            <span className="text-muted-foreground">Marketplace</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
            A next-generation car marketplace that uses Gemini AI and computer vision to let buyers 
            find vehicles by image upload, and helps admins populate listings automatically from photos.
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {["Next.js", "Gemini AI", "Cloudinary", "MongoDB", "Next-Auth"].map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-3 py-1.5 bg-secondary/50 border border-border rounded-full font-medium uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href="https://east-ride.vercel.app/"
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
            src="/eastride_home.png"
            alt="EastRide AI Marketplace homepage"
            height={{ mobile: "h-[250px]", desktop: "md:h-[400px]" }}
          />
        </motion.div>
      </section>

      {/* ── OVERVIEW STRIP ── */}
      <section className="py-16 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {[
              { value: "2× AI", label: "Buyer & Admin Pipelines" },
              { value: "Gemini", label: "Computer Vision Engine" },
              { value: "Personal", label: "Project Type" },
              { value: "For Sale", label: "Open to Acquisition" },
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

        {/* Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { label: "My Role", value: "Solo Full-Stack Developer" },
            { label: "Project Type", value: "Personal Portfolio · Open to Acquisition" },
            { label: "Status", value: "Live with Dummy Data · Production Ready" },
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
              Car discovery is broken.<br />
              AI can fix it.
            </h2>
          </div>
          <div className="space-y-5 pt-2 md:pt-10">
            <p className="text-muted-foreground leading-relaxed">
              Every existing car marketplace works the same way: you type keywords, hope your 
              vocabulary matches the listing vocabulary, and scroll through results that may 
              or may not be what you had in mind. If you saw a car on the road and want to 
              find it, you&apos;re basically guessing.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              On the other side, dealers and admins waste significant time entering car specifications 
              manually for every single listing, make, model, year, body type, trim, and more. 
              It&apos;s repetitive, error-prone, and slow.
            </p>
            <p className="text-foreground font-medium leading-relaxed">
              The vision: one AI pipeline that transforms the buyer experience, and another that 
              eliminates the manual overhead of managing inventory.
            </p>
          </div>
        </div>

        {/* AI Features — highlighted section */}
        <div className="mb-24">
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary block mb-4">
            02 / The AI System
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl mb-12">
            Two AI pipelines. Two different problems solved.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {AI_FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="border border-primary/30 rounded-2xl p-8 bg-primary/5"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Icon size={22} className="text-primary" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                      Pipeline 0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* How it works */}
          <div className="mt-10 border border-border rounded-2xl p-8">
            <h3 className="font-bold mb-6 text-sm uppercase tracking-widest text-muted-foreground">
              How the Visual Search Works
            </h3>
            <div className="flex flex-col md:flex-row gap-0">
              {[
                { step: "01", title: "User uploads image", desc: "Photo from gallery, screenshot, or camera" },
                { step: "02", title: "Cloudinary processes", desc: "Image is uploaded and optimized via Cloudinary" },
                { step: "03", title: "Gemini AI analyzes", desc: "Multimodal AI identifies make, model, and features" },
                { step: "04", title: "Matches returned", desc: "Closest listings surfaced by spec and visual similarity" },
              ].map((step, i, arr) => (
                <div key={step.step} className="flex items-start gap-0 flex-1">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-primary">{step.step}</span>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="w-px h-full min-h-[24px] bg-border mt-1 mb-1 hidden md:block" />
                    )}
                  </div>
                  <div className="ml-4 pb-6 md:pb-0 md:pr-6 flex-1">
                    <p className="font-semibold text-sm mb-1">{step.title}</p>
                    <p className="text-xs text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Screenshots */}
        <div className="mb-24">
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary block mb-4">
            03 / The Platform
          </span>
          <h2 className="text-3xl font-bold tracking-tight mb-10">
            Every screen built for a specific user need.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SCREENSHOTS.map((shot) => (
              <ProjectImage
                key={shot.label}
                src={shot.src}
                alt={shot.label}
                label={shot.label}
                labelPosition="bottom-left"
                height={{ mobile: "h-[250px]", desktop: "md:h-[400px]" }}
              />
            ))}
          </div>
        </div>

        {/* Platform Features */}
        <div className="mb-24">
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-primary block mb-4">
            04 / Full Platform Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl mb-12">
            Beyond the AI — a complete marketplace.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PLATFORM_FEATURES.map((feature) => {
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
            05 / Tech Stack
          </span>
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

        {/* Acquisition note */}
        <div className="border border-primary/20 rounded-2xl p-8 bg-primary/5">
          <p className="text-[10px] uppercase tracking-widest font-bold text-primary mb-3">
            Open to Acquisition
          </p>
          <h3 className="text-xl font-bold mb-3">
            This is a working product, not just a demo.
          </h3>
          <p className="text-muted-foreground leading-relaxed text-sm max-w-2xl">
            EastRide AI is built production-ready. The AI pipelines work, the admin system is 
            functional, and the codebase is clean and documented. If you run a dealership, 
            automotive classifieds platform, or want to launch a marketplace in this space, 
            this product is ready to deploy under your brand.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-6 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="pb-20">
        <CTACard contactHref="/contact" />
      </div>
    </div>
  );
}

